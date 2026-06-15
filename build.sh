#!/usr/bin/env bash
#
# build.sh — 把 source/ 的內容焊成單一檔案，再用 StaticCrypt 整份加密，
#            產生部署用的加密版 index.html（根目錄）。
#
# 用法：
#   ./build.sh                      # 會提示你輸入密碼
#   ./build.sh '你的密碼'           # 直接帶密碼
#   STATICRYPT_PASSWORD=xxx ./build.sh
#
# 改內容流程：改 source/index.html 或 source/data.js → 重跑這支 → git push。
#
set -euo pipefail
cd "$(dirname "$0")"

PASSWORD="${1:-${STATICRYPT_PASSWORD:-}}"
if [ -z "$PASSWORD" ]; then
  read -rsp "輸入密碼: " PASSWORD; echo
fi

mkdir -p build

echo "→ 1/3 把 data.js 焊進模板..."
python3 - <<'PY'
tpl  = open('source/index.html', encoding='utf-8').read()
data = open('source/data.js',   encoding='utf-8').read()
marker = '<script src="data.js"></script>'
assert marker in tpl, '找不到 <script src="data.js"></script>，模板可能被改過'
combined = tpl.replace(marker, '<script>\n' + data + '\n</script>')
open('build/combined.html', 'w', encoding='utf-8').write(combined)
print(f'   合併完成：{len(combined):,} bytes')
PY

echo "→ 2/3 StaticCrypt 加密..."
npx staticrypt build/combined.html \
  -p "$PASSWORD" \
  -c source/.staticrypt.json \
  -d build/enc \
  --remember 30 \
  --short \
  --template-title "AI 圖卡風格靈感庫｜課程學員專屬" \
  --template-instructions "本頁為課程學員專屬內容，請輸入課程提供的密碼後觀看。" \
  --template-placeholder "請輸入密碼" \
  --template-button "進入靈感庫" \
  --template-remember "記住我（30 天內免重新輸入）" \
  --template-error "密碼錯誤，請再試一次" \
  --template-color-primary "#e03e6e" \
  --template-color-secondary "#0a0a1a"

echo "→ 3/3 放到根目錄部署..."
cp build/enc/combined.html index.html
echo "✓ 完成：根目錄 index.html 已更新為加密版"
