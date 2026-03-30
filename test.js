const puppeteer = require('puppeteer');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PORT = 3457;
let server;
let browser;
let page;
let passed = 0;
let failed = 0;
const results = [];

function log(status, name, detail = '') {
  const icon = status === 'PASS' ? '✅' : '❌';
  const msg = `${icon} ${name}${detail ? ': ' + detail : ''}`;
  console.log(msg);
  results.push({ status, name, detail });
  if (status === 'PASS') passed++;
  else failed++;
}

async function setup() {
  // Start server
  server = require('child_process').spawn('npx', ['serve', '-p', PORT.toString(), '.'], {
    cwd: __dirname,
    stdio: 'ignore',
    detached: true,
  });
  await new Promise(r => setTimeout(r, 2000));

  browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(`http://localhost:${PORT}/index.html`, { waitUntil: 'networkidle0' });
}

async function teardown() {
  if (browser) await browser.close();
  if (server) process.kill(-server.pid);
}

// ═══════════════════════════════════════
// TEST 1: Data Integrity
// ═══════════════════════════════════════
async function testDataIntegrity() {
  console.log('\n── Data Integrity Tests ──');

  // 1a: Total style count
  const count = await page.evaluate(() => stylesData.length);
  log(count === 101 ? 'PASS' : 'FAIL', 'Total styles count', `Expected 101, got ${count}`);

  // 1b: All styles have required fields
  const missingFields = await page.evaluate(() => {
    const required = ['id', 'nameCN', 'nameJP', 'nameEN', 'category', 'origin', 'scenes', 'description', 'characteristics', 'aiPrompt', 'previewStyle'];
    const issues = [];
    stylesData.forEach(s => {
      required.forEach(f => {
        if (s[f] === undefined || s[f] === null || s[f] === '') {
          issues.push(`id:${s.id} missing "${f}"`);
        }
      });
    });
    return issues;
  });
  log(missingFields.length === 0 ? 'PASS' : 'FAIL', 'All required fields present', missingFields.length > 0 ? missingFields.slice(0, 5).join(', ') : '');

  // 1c: No duplicate IDs
  const dupIds = await page.evaluate(() => {
    const ids = stylesData.map(s => s.id);
    return ids.filter((id, i) => ids.indexOf(id) !== i);
  });
  log(dupIds.length === 0 ? 'PASS' : 'FAIL', 'No duplicate IDs', dupIds.length > 0 ? `Duplicates: ${dupIds}` : '');

  // 1d: All origins are valid
  const invalidOrigins = await page.evaluate(() => {
    return stylesData.filter(s => s.origin !== '日系' && s.origin !== '國際通用').map(s => `id:${s.id} origin:"${s.origin}"`);
  });
  log(invalidOrigins.length === 0 ? 'PASS' : 'FAIL', 'All origins valid (日系 or 國際通用)', invalidOrigins.length > 0 ? invalidOrigins.join(', ') : '');

  // 1e: All scenes are valid
  const validScenes = ['知識學習', '商業職場', '生活風格', '身心靈', '運動健身', '科技創業', '創意藝術'];
  const invalidScenes = await page.evaluate((valid) => {
    const issues = [];
    stylesData.forEach(s => {
      (s.scenes || []).forEach(sc => {
        if (!valid.includes(sc)) issues.push(`id:${s.id} invalid scene "${sc}"`);
      });
    });
    return issues;
  }, validScenes);
  log(invalidScenes.length === 0 ? 'PASS' : 'FAIL', 'All scenes valid', invalidScenes.length > 0 ? invalidScenes.join(', ') : '');

  // 1f: All categories are valid
  const validCats = ['carddesign', 'traditional', 'illustration', 'anime', 'design', 'tech', 'nature'];
  const invalidCats = await page.evaluate((valid) => {
    return stylesData.filter(s => !valid.includes(s.category)).map(s => `id:${s.id} cat:"${s.category}"`);
  }, validCats);
  log(invalidCats.length === 0 ? 'PASS' : 'FAIL', 'All categories valid', invalidCats.length > 0 ? invalidCats.join(', ') : '');
}

// ═══════════════════════════════════════
// TEST 2: Image Files
// ═══════════════════════════════════════
async function testImages() {
  console.log('\n── Image File Tests ──');

  // 2a: All previewStyle image URLs point to existing files
  const imgIssues = await page.evaluate(() => {
    const issues = [];
    stylesData.forEach(s => {
      const m = (s.previewStyle || '').match(/url\('([^']+)'\)/);
      if (!m) {
        issues.push(`id:${s.id} no image URL in previewStyle`);
      }
    });
    return issues;
  });
  log(imgIssues.length === 0 ? 'PASS' : 'FAIL', 'All styles have image URLs', imgIssues.length > 0 ? imgIssues.slice(0, 3).join(', ') : '');

  // 2b: Check actual file existence
  const imgPaths = await page.evaluate(() => {
    return stylesData.map(s => {
      const m = (s.previewStyle || '').match(/url\('([^']+)'\)/);
      return m ? m[1] : null;
    }).filter(Boolean);
  });
  const missingFiles = imgPaths.filter(p => !fs.existsSync(path.join(__dirname, p)));
  log(missingFiles.length === 0 ? 'PASS' : 'FAIL', 'All image files exist on disk', missingFiles.length > 0 ? `Missing: ${missingFiles.slice(0, 3).join(', ')}` : '');
}

// ═══════════════════════════════════════
// TEST 3: Rendering
// ═══════════════════════════════════════
async function testRendering() {
  console.log('\n── Rendering Tests ──');

  // 3a: Grid renders correct number of cards
  const cardCount = await page.evaluate(() => document.querySelectorAll('.card').length);
  log(cardCount === 101 ? 'PASS' : 'FAIL', 'Grid renders 101 cards', `Got ${cardCount}`);

  // 3b: Header shows correct count
  const headerCount = await page.evaluate(() => document.getElementById('total-count').textContent);
  log(headerCount === '101' ? 'PASS' : 'FAIL', 'Header shows 101', `Shows "${headerCount}"`);

  // 3c: Result count shows correctly
  const resultText = await page.evaluate(() => document.getElementById('result-count').textContent);
  log(resultText.includes('101') ? 'PASS' : 'FAIL', 'Result count shows 101', `Shows "${resultText}"`);
}

// ═══════════════════════════════════════
// TEST 4: Category Filter
// ═══════════════════════════════════════
async function testCategoryFilter() {
  console.log('\n── Category Filter Tests ──');

  // 4a: Click 傳統日式 filter
  await page.click('[data-cat="traditional"]');
  await new Promise(r => setTimeout(r, 300));
  const tradCount = await page.evaluate(() => {
    return document.querySelectorAll('.card[data-cat="traditional"]:not([style*="display: none"])').length;
  });
  const tradExpected = await page.evaluate(() => stylesData.filter(s => s.category === 'traditional').length);
  log(tradCount === tradExpected ? 'PASS' : 'FAIL', 'Traditional filter works', `Showing ${tradCount}, expected ${tradExpected}`);

  // 4b: Click 全部 to reset
  await page.click('[data-cat="all"]');
  await new Promise(r => setTimeout(r, 300));
  const allVisible = await page.evaluate(() => {
    return document.querySelectorAll('.card:not([style*="display: none"])').length;
  });
  log(allVisible === 101 ? 'PASS' : 'FAIL', 'All filter resets to 101', `Got ${allVisible}`);
}

// ═══════════════════════════════════════
// TEST 5: Scene Filter
// ═══════════════════════════════════════
async function testSceneFilter() {
  console.log('\n── Scene Filter Tests ──');

  // 5a: Select 身心靈 from dropdown
  await page.select('#scene-select', '身心靈');
  await new Promise(r => setTimeout(r, 300));
  const spiritCount = await page.evaluate(() => {
    return document.querySelectorAll('.card:not([style*="display: none"])').length;
  });
  const spiritExpected = await page.evaluate(() => stylesData.filter(s => (s.scenes || []).includes('身心靈')).length);
  log(spiritCount === spiritExpected ? 'PASS' : 'FAIL', 'Scene 身心靈 filter works', `Showing ${spiritCount}, expected ${spiritExpected}`);

  // 5b: Combined filter - category + scene
  await page.click('[data-cat="traditional"]');
  await new Promise(r => setTimeout(r, 300));
  const combinedCount = await page.evaluate(() => {
    return document.querySelectorAll('.card:not([style*="display: none"])').length;
  });
  const combinedExpected = await page.evaluate(() => {
    return stylesData.filter(s => s.category === 'traditional' && (s.scenes || []).includes('身心靈')).length;
  });
  log(combinedCount === combinedExpected ? 'PASS' : 'FAIL', 'Combined category+scene filter', `Showing ${combinedCount}, expected ${combinedExpected}`);

  // Reset
  await page.click('[data-cat="all"]');
  await page.select('#scene-select', 'all');
  await new Promise(r => setTimeout(r, 300));
}

// ═══════════════════════════════════════
// TEST 6: Search
// ═══════════════════════════════════════
async function testSearch() {
  console.log('\n── Search Tests ──');

  // 6a: Search by Chinese name
  await page.type('#search', '浮世繪');
  await new Promise(r => setTimeout(r, 300));
  const searchCount = await page.evaluate(() => {
    return document.querySelectorAll('.card:not([style*="display: none"])').length;
  });
  log(searchCount > 0 ? 'PASS' : 'FAIL', 'Search "浮世繪" returns results', `Found ${searchCount}`);

  // 6b: Search by English name
  await page.evaluate(() => document.getElementById('search').value = '');
  await page.type('#search', 'minimalism');
  await page.evaluate(() => filterCards());
  await new Promise(r => setTimeout(r, 300));
  const enCount = await page.evaluate(() => {
    return document.querySelectorAll('.card:not([style*="display: none"])').length;
  });
  log(enCount > 0 ? 'PASS' : 'FAIL', 'Search "minimalism" returns results', `Found ${enCount}`);

  // Clear search
  await page.evaluate(() => { document.getElementById('search').value = ''; filterCards(); });
}

// ═══════════════════════════════════════
// TEST 7: Lightbox
// ═══════════════════════════════════════
async function testLightbox() {
  console.log('\n── Lightbox Tests ──');

  // 7a: Click image opens lightbox
  await page.click('.card-preview-inner');
  await new Promise(r => setTimeout(r, 300));
  const isOpen = await page.evaluate(() => document.getElementById('lightbox').classList.contains('show'));
  log(isOpen === true ? 'PASS' : 'FAIL', 'Clicking image opens lightbox');

  // 7b: Lightbox has image src
  const imgSrc = await page.evaluate(() => document.getElementById('lightbox-img').src);
  log(imgSrc && imgSrc.length > 10 ? 'PASS' : 'FAIL', 'Lightbox image has src', imgSrc ? 'has src' : 'empty');

  // 7c: Click lightbox closes it
  await page.click('#lightbox');
  await new Promise(r => setTimeout(r, 300));
  const isClosed = await page.evaluate(() => !document.getElementById('lightbox').classList.contains('show'));
  log(isClosed === true ? 'PASS' : 'FAIL', 'Clicking lightbox closes it');
}

// ═══════════════════════════════════════
// TEST 8: Copy Prompt
// ═══════════════════════════════════════
async function testCopyPrompt() {
  console.log('\n── Copy Prompt Tests ──');

  // 8a: Copy button exists on all cards
  const copyBtnCount = await page.evaluate(() => document.querySelectorAll('.copy-btn').length);
  log(copyBtnCount === 101 ? 'PASS' : 'FAIL', 'All 101 cards have copy button', `Found ${copyBtnCount}`);

  // 8b: Toast appears on click
  await page.evaluate(() => {
    // Override clipboard API for testing
    navigator.clipboard = { writeText: () => Promise.resolve() };
  });
  await page.click('.copy-btn');
  await new Promise(r => setTimeout(r, 500));
  const toastVisible = await page.evaluate(() => document.getElementById('toast').classList.contains('show'));
  log(toastVisible === true ? 'PASS' : 'FAIL', 'Toast appears after copy click');
}

// ═══════════════════════════════════════
// TEST 9: Mobile RWD
// ═══════════════════════════════════════
async function testMobileRWD() {
  console.log('\n── Mobile RWD Tests ──');

  await page.setViewport({ width: 375, height: 812 });
  await new Promise(r => setTimeout(r, 500));

  // 9a: Grid is single column on mobile
  const gridCols = await page.evaluate(() => {
    const grid = document.querySelector('.grid');
    return getComputedStyle(grid).gridTemplateColumns;
  });
  const isSingleCol = gridCols.split(' ').length === 1;
  log(isSingleCol ? 'PASS' : 'FAIL', 'Mobile grid is single column', `Columns: ${gridCols}`);

  // 9b: Filter buttons are visible and wrappable
  const filterVisible = await page.evaluate(() => {
    const btn = document.querySelector('.filter-btn');
    const rect = btn.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  });
  log(filterVisible ? 'PASS' : 'FAIL', 'Filter buttons visible on mobile');

  // 9c: Scene dropdown visible
  const sceneVisible = await page.evaluate(() => {
    const sel = document.querySelector('.scene-select');
    const rect = sel.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  });
  log(sceneVisible ? 'PASS' : 'FAIL', 'Scene dropdown visible on mobile');

  // Reset viewport
  await page.setViewport({ width: 1280, height: 800 });
}

// ═══════════════════════════════════════
// RUN ALL TESTS
// ═══════════════════════════════════════
(async () => {
  try {
    console.log('🚀 Starting tests...\n');
    await setup();

    await testDataIntegrity();
    await testImages();
    await testRendering();
    await testCategoryFilter();
    await testSceneFilter();
    await testSearch();
    await testLightbox();
    await testCopyPrompt();
    await testMobileRWD();

    console.log(`\n${'═'.repeat(40)}`);
    console.log(`📊 Results: ${passed} passed, ${failed} failed, ${passed + failed} total`);
    console.log(`${'═'.repeat(40)}`);

    if (failed > 0) {
      console.log('\n❌ Failed tests:');
      results.filter(r => r.status === 'FAIL').forEach(r => console.log(`   - ${r.name}: ${r.detail}`));
    }

    process.exit(failed > 0 ? 1 : 0);
  } catch (err) {
    console.error('Test error:', err.message);
    process.exit(1);
  } finally {
    await teardown();
  }
})();
