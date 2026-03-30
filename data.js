const stylesData = [

// ══════════════════════════════════════════
// 圖卡排版 (carddesign) — 20 styles
// ══════════════════════════════════════════
{
  id:101, nameCN:"粗體排版主導風", nameJP:"太字タイポグラフィ主導", nameEN:"Bold Typography Dominant",
  category:"carddesign",
  origin:"日系",
  scenes:["知識學習","商業職場"],
  description:"文字本身就是最強的視覺元素。特粗黑體佔據畫面 60-80%，搭配黑色背景與單一強調色（橘紅或螢光綠），文字大小落差極大，製造強烈衝擊感。適合觀點型、破框型知識圖卡。",
  characteristics:["特粗黑體佔滿畫面","黑底高對比","文字即視覺主角","極端字級落差"],
  aiPrompt:"請使用「粗體排版主導」的風格設計知識圖卡。黑色背景，文字為畫面絕對主角，主標題使用特粗黑體佔據畫面 60% 以上，搭配一個強烈的強調色（如螢光橘或亮紅）。副標題與主標的字級落差極大，整體呈現出日本現代雜誌的排版衝擊力，幾乎不使用裝飾元素，讓文字的份量感直接震撼觀看者。",
  previewStyle:"background-image:url('images/圖卡序列1：你做了，但沒感覺.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:108, nameCN:"白底漸層商務風", nameJP:"ホワイトグラデ・ビジネス", nameEN:"White Gradient Business",
  category:"carddesign",
  origin:"日系",
  scenes:["商業職場","知識學習"],
  description:"白色或淺灰為底，搭配微妙的漸層過渡（如白→淺藍或白→米色），文字使用深灰或藏青色，整體專業穩重。適合商業分析、職場技能等正式主題的圖卡。",
  characteristics:["白色淺灰底色","微妙漸層過渡","深灰藏青文字","專業穩重商務感"],
  aiPrompt:"請使用「白底漸層商務」的風格設計知識圖卡。背景是白色到淺灰或淺藍的微妙漸層，文字使用深灰或藏青色的粗黑體。整體排版方正穩重，像專業的企業簡報封面。可用一條細線或小色塊增加設計層次，但不要過度裝飾。傳達出「這是值得信賴的專業內容」的感覺。",
  previewStyle:"background-image:url('images/儀式感系列｜白底漸層商務風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:103, nameCN:"照片拼貼雜誌風", nameJP:"フォトコラージュ誌面風", nameEN:"Photo Collage Editorial",
  category:"carddesign",
  origin:"日系",
  scenes:["創意藝術","生活風格"],
  description:"結合真實攝影素材與大膽的排版設計，照片被裁切、疊加、搭配幾何色塊與粗體文字。風格類似日本文化雜誌（如 POPEYE、BRUTUS），視覺豐富但不雜亂。",
  characteristics:["攝影素材混搭排版","幾何色塊疊加","雜誌編輯感","大膽裁切構圖"],
  aiPrompt:"請使用「照片拼貼雜誌」的風格設計知識圖卡。將攝影素材大膽裁切，搭配幾何色塊（圓形、矩形）和粗體中文標題疊加。風格參考日本文化雜誌的版面設計，照片可以是灰階或低飽和度，用一個鮮明的強調色（如橘紅或亮黃）讓文字跳出來。整體有編輯感、策展感。",
  previewStyle:"background-image:url('images/儀式感系列｜照片拼貼雜誌風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:104, nameCN:"幾何容器分割風", nameJP:"ジオメトリック・コンテナ分割", nameEN:"Geometric Container Split",
  category:"carddesign",
  origin:"日系",
  scenes:["知識學習","商業職場"],
  description:"使用圓形、矩形、梯形等幾何形狀作為資訊的容器，每個區塊承載不同層次的內容（標題、說明、裝飾文字）。形狀之間有明確的對比與呼吸空間。",
  characteristics:["幾何形狀分區","色塊容器承載資訊","清晰資訊層次","形狀間留白呼吸"],
  aiPrompt:"請使用「幾何容器分割」的風格設計知識圖卡。畫面用圓形、矩形或不規則幾何形狀把資訊分成不同區域，每個區域有明確的角色（主標區、說明區、裝飾區）。形狀之間保留呼吸空間，用色塊的顏色區分資訊層級。整體乾淨有結構感，像一張設計精良的資訊海報。",
  previewStyle:"background-image:url('images/儀式感系列｜幾何容器分割風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:106, nameCN:"極簡留白文字風", nameJP:"ミニマル余白テキスト", nameEN:"Extreme Whitespace Text",
  category:"carddesign",
  origin:"日系",
  scenes:["知識學習","生活風格"],
  description:"大量留白佔畫面 70% 以上，文字精煉到極致（通常僅 5-10 個字），讓每一個字都有呼吸空間。配色極度克制（黑白灰+一個點綴色），傳達高級感與自信。",
  characteristics:["70%以上留白","極精煉文字","黑白灰主調","克制的高級感"],
  aiPrompt:"請使用「極簡留白文字」的風格設計知識圖卡。畫面 70% 以上是乾淨的留白空間（白色或米色背景），主標題精煉至 5-8 個字，字體使用黑色特粗黑體。只用一個小面積的點綴色（如一條細線或一個小色塊）增加設計感。整體散發出日本無印良品式的克制美學與高級感。",
  previewStyle:"background-image:url('images/儀式感系列｜極簡留白文字風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:105, nameCN:"對角線動態構圖風", nameJP:"ダイアゴナル・ダイナミック", nameEN:"Diagonal Dynamic Layout",
  category:"carddesign",
  origin:"日系",
  scenes:["商業職場","科技創業"],
  description:"以斜線或對角線將畫面一分為二或多塊，形成動態的視覺張力。一側為暗色+文字，另一側為亮色+圖像或色塊。打破水平垂直的穩定感，製造前進的動勢。",
  characteristics:["對角線分割畫面","動靜對比兩側","打破水平穩定","前進感動勢"],
  aiPrompt:"請使用「對角線動態構圖」的風格設計知識圖卡。用一條或多條斜線把畫面分割成不同區域，一側放置深色背景搭配白色文字，另一側使用亮色或圖像素材。斜線角度製造動態感和前進感，文字沿著對角線的動勢排列，整體有速度感與現代感。",
  previewStyle:"background-image:url('images/儀式感系列｜對角線動態構圖風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:107, nameCN:"手寫混搭數位風", nameJP:"手書き×デジタルミックス", nameEN:"Handwritten Mixed Digital",
  category:"carddesign",
  origin:"日系",
  scenes:["生活風格","知識學習"],
  description:"將手寫感的英文或日文裝飾字，與精確的數位黑體標題混搭。手寫字提供溫度與個性，黑體提供權威與清晰，兩者的反差創造獨特的人文科技感。",
  characteristics:["手寫字增添溫度","黑體標題穩重","人文與數位反差","裝飾性英文手寫"],
  aiPrompt:"請使用「手寫混搭數位」的風格設計知識圖卡。主標題使用精確的粗黑體中文，旁邊或下方搭配手寫感的英文短語作為氛圍裝飾。手寫字可以稍微傾斜或不規則排列，與工整的黑體形成溫度上的對比。背景保持簡潔（深色或淺色皆可），讓手寫與數位的混搭成為視覺焦點。",
  previewStyle:"background-image:url('images/儀式感系列｜手寫混搭數位風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:102, nameCN:"黑底螢光強調風", nameJP:"ブラック×ネオンアクセント", nameEN:"Dark Neon Accent",
  category:"carddesign",
  origin:"日系",
  scenes:["科技創業","知識學習"],
  description:"深黑底色搭配螢光色（橘、綠、黃）作為關鍵資訊的強調色。高對比讓重點瞬間跳出，文字層次分明，適合需要引導閱讀順序的步驟型或清單型圖卡。",
  characteristics:["深黑背景","螢光色重點標記","高對比資訊層次","明確閱讀動線"],
  aiPrompt:"請使用「黑底螢光強調」的風格設計知識圖卡。純黑或極深灰的背景，使用一到兩個螢光色（如亮橘 #FF6B35 或螢光綠 #39FF14）標記關鍵字或重要段落。白色為主要文字色，螢光色僅用於需要被記住的核心概念。整體有科技感又不失溫度，排版乾淨利落。",
  previewStyle:"background-image:url('images/儀式感系列｜黑底螢光強調風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:109, nameCN:"圓形聚焦構圖風", nameJP:"サークルフォーカス構図", nameEN:"Circular Focus Composition",
  category:"carddesign",
  origin:"日系",
  scenes:["知識學習","創意藝術"],
  description:"以一個大圓形或多個同心圓作為畫面的視覺中心，關鍵資訊放在圓內或圓周圍。圓形帶來聚焦感與完整感，常搭配半透明色塊或照片填充。",
  characteristics:["圓形視覺中心","聚焦感完整感","半透明層疊效果","環形文字排列"],
  aiPrompt:"請使用「圓形聚焦構圖」的風格設計知識圖卡。畫面中央放置一個大圓形作為視覺焦點，圓形內可以是色塊、半透明覆蓋層或關鍵文字。圓形外圍是對比色的背景，主標題圍繞圓形或在圓形上下方排列。整體有匯聚感和完整感，圓形的大小佔畫面 40-60%。",
  previewStyle:"background-image:url('images/儀式感系列｜圓形聚焦構圖風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:110, nameCN:"錯位前衛排版風", nameJP:"ズレ配置アヴァンギャルド", nameEN:"Displaced Avant-garde",
  category:"carddesign",
  origin:"日系",
  scenes:["創意藝術","科技創業"],
  description:"刻意讓文字、色塊、圖像產生位移、重疊、旋轉等「不規則」排列，打破傳統網格。製造視覺緊張感與叛逆感，適合挑戰既定思維的議題。",
  characteristics:["刻意錯位排列","文字旋轉重疊","打破網格系統","視覺緊張叛逆"],
  aiPrompt:"請使用「錯位前衛排版」的風格設計知識圖卡。刻意讓標題文字稍微旋轉 3-5 度、色塊錯位重疊、元素之間產生不規則的交疊。不要遵守傳統的置中或對齊規則，但整體仍有設計感而非混亂。用這種「有控制的破壞」製造視覺張力，適合「打破常規」或「挑戰既定思維」的主題。",
  previewStyle:"background-image:url('images/儀式感系列｜錯位前衛排版風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:111, nameCN:"雙色調分割風", nameJP:"デュオトーン分割", nameEN:"Duotone Split",
  category:"carddesign",
  origin:"日系",
  scenes:["商業職場","知識學習"],
  description:"畫面嚴格使用兩種主色，以垂直線或水平線分割成對比的兩半。一半深色一半淺色，或一半暖色一半冷色，文字橫跨兩區形成統一。簡潔有力，資訊清晰。",
  characteristics:["嚴格雙色系統","垂直或水平分割","對比兩半統一","簡潔有力資訊"],
  aiPrompt:"請使用「雙色調分割」的風格設計知識圖卡。把畫面嚴格分成兩個色塊區域（上下或左右分割），一邊是深色、一邊是淺色或互補色。主標題的文字橫跨兩個區域，在深色那邊用白字、淺色那邊用黑字。整體只用兩個主色+黑白，極度簡潔有力。",
  previewStyle:"background-image:url('images/儀式感系列｜雙色調分割風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:112, nameCN:"透明玻璃疊層風", nameJP:"グラスモーフィズム", nameEN:"Glassmorphism Overlay",
  category:"carddesign",
  origin:"日系",
  scenes:["科技創業","生活風格"],
  description:"在彩色或照片背景上疊加半透明的磨砂玻璃層，文字放在玻璃層上。朦朧的透明效果增加深度與質感，現代感十足，適合科技或生活風格主題。",
  characteristics:["磨砂玻璃半透明","背景色彩透出","現代深度質感","光影折射效果"],
  aiPrompt:"請使用「透明玻璃疊層」的風格設計知識圖卡。在漸層色彩或模糊照片的背景上，放置一層半透明的白色磨砂玻璃效果矩形作為文字容器。背景顏色透過玻璃層隱約可見，玻璃邊緣有微微的光暈效果。文字使用深色放在玻璃層上，整體有現代科技感但不冰冷。",
  previewStyle:"background-image:url('images/儀式感系列｜透明玻璃疊層風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:113, nameCN:"數據視覺圖表風", nameJP:"データビジュアル・チャート", nameEN:"Data Visual Chart",
  category:"carddesign",
  origin:"日系",
  scenes:["商業職場","科技創業"],
  description:"將數字和統計數據視覺化為圖表、比例條、百分比圓餅等元素，融入圖卡設計中。數據本身成為裝飾，搭配精煉文字，增加權威感與說服力。",
  characteristics:["數據圖表元素","比例條百分比","數字作為裝飾","權威說服感"],
  aiPrompt:"請使用「數據視覺圖表」的風格設計知識圖卡。把關鍵數字放大作為視覺焦點，搭配簡化的圖表元素（如進度條、圓環圖、柱狀圖輪廓）作為裝飾。數字使用超大字級的粗體，旁邊配上精煉的說明文字。整體用深色底+亮色圖表線條，呈現「有數據支撐的專業感」。",
  previewStyle:"background-image:url('images/儀式感系列｜數據視覺圖表風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:114, nameCN:"報紙排版新聞風", nameJP:"ニュースペーパー・エディトリアル", nameEN:"Newspaper Editorial",
  category:"carddesign",
  origin:"日系",
  scenes:["知識學習","商業職場"],
  description:"模仿報紙或新聞排版的編輯設計，使用欄位系統、橫線分隔、襯線或無襯線混搭。帶有資訊權威感，讓知識內容看起來像被報導的「新聞」般有重量。",
  characteristics:["欄位系統排版","橫線分隔區塊","新聞報導權威感","襯線混搭黑體"],
  aiPrompt:"請使用「報紙排版新聞」的風格設計知識圖卡。排版仿照報紙的編輯設計，用細橫線分隔不同的資訊區塊，主標題像報紙頭條一樣大而醒目。可以混搭襯線字與黑體字創造層次。背景使用米白或微黃的紙張質感，整體像一份高質感的知識報紙。",
  previewStyle:"background-image:url('images/儀式感系列｜報紙排版新聞風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:115, nameCN:"霓虹暗夜資訊風", nameJP:"ネオンナイト・インフォ", nameEN:"Neon Night Info",
  category:"carddesign",
  origin:"日系",
  scenes:["科技創業","創意藝術"],
  description:"極深的夜色背景上，文字和圖形元素以霓虹燈般的發光效果呈現。色彩鮮豔但面積克制（粉紅、電藍、亮紫），帶有都市感與未來感。",
  characteristics:["深黑夜色背景","霓虹發光效果","都市未來感","鮮豔色彩克制使用"],
  aiPrompt:"請使用「霓虹暗夜資訊」的風格設計知識圖卡。極深的黑藍色背景（如 #0a0a1a），文字和重點線條帶有霓虹燈的發光效果（如粉紅 #ff6ec7、電藍 #00d4ff、亮紫 #b24bf3）。發光效果只用在關鍵元素上，不要整片發光。整體有日本都市夜景的氛圍，科技但帶有情感。",
  previewStyle:"background-image:url('images/儀式感系列｜霓虹暗夜資訊風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:116, nameCN:"素雅和風知識卡", nameJP:"上品な和風ナレッジカード", nameEN:"Elegant Japanese Knowledge Card",
  category:"carddesign",
  origin:"日系",
  scenes:["生活風格","身心靈"],
  description:"以日本傳統色（如鶯色、灰櫻、藍鼠）為底，搭配纖細的和風裝飾線條或紋樣邊框。文字排版端莊雅致，保留大量留白，傳達知性與沉穩。",
  characteristics:["日本傳統色系","纖細和風邊框","端莊雅致排版","知性沉穩氣質"],
  aiPrompt:"請使用「素雅和風知識卡」的風格設計知識圖卡。背景使用日本傳統色彩（如鶯色 #928C36、灰櫻 #E8D3D1、藍鼠 #6C848D）的淡色版本作底。邊框或角落用纖細的和風紋樣裝飾（如麻葉紋、青海波），但面積很小。文字使用深色的端正字體，保留大量留白，整體散發知性與靜定的氣質。",
  previewStyle:"background-image:url('images/儀式感系列｜素雅和風知識卡風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:117, nameCN:"粗暴主義排版風", nameJP:"ブルータリスト・タイポ", nameEN:"Brutalist Typography",
  category:"carddesign",
  origin:"日系",
  scenes:["創意藝術","科技創業"],
  description:"受網頁粗暴主義啟發，刻意使用極粗字體、不規則大小、高飽和色彩和粗邊框。反精緻、反和諧，但正因為這種「粗糙」而產生強烈的記憶點。",
  characteristics:["極粗字體不規則","高飽和粗邊框","反精緻反和諧","強烈記憶衝擊"],
  aiPrompt:"請使用「粗暴主義排版」的風格設計知識圖卡。字體極粗到幾乎填滿筆畫之間的空隙，文字大小刻意不一致。使用高飽和度的原色（紅、黃、藍、黑）和粗邊框。不追求精緻和諧，而是追求「一眼就忘不掉」的視覺衝擊。像素感或粗糙的質感反而是加分。",
  previewStyle:"background-image:url('images/儀式感系列｜粗暴主義排版風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:118, nameCN:"色塊堆疊資訊風", nameJP:"カラーブロック積層", nameEN:"Color Block Stack",
  category:"carddesign",
  origin:"日系",
  scenes:["知識學習","商業職場"],
  description:"用不同顏色的矩形色塊從上到下堆疊排列，每個色塊承載一條資訊。色塊之間可以有些許重疊或間距，形成有節奏感的資訊階梯。",
  characteristics:["彩色矩形堆疊","每塊一條資訊","節奏感階梯排列","色彩區分層級"],
  aiPrompt:"請使用「色塊堆疊資訊」的風格設計知識圖卡。畫面由多個不同顏色的矩形色塊從上到下堆疊而成，每個色塊裡放一段精煉的文字資訊。色塊顏色從深到淺或用互補色系，大小可以不一致來創造視覺節奏。整體像一座由資訊搭建的彩色積木塔。",
  previewStyle:"background-image:url('images/儀式感系列｜色塊堆疊資訊風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:119, nameCN:"線條框架結構風", nameJP:"ラインフレーム・ストラクチャー", nameEN:"Line Frame Structure",
  category:"carddesign",
  origin:"日系",
  scenes:["知識學習","商業職場"],
  description:"以細線、邊框、格線作為主要的設計語言，將資訊組織在精確的線框系統中。色彩極度克制（通常只有黑線+白底+一個色），散發建築設計圖般的理性美。",
  characteristics:["細線邊框系統","格線組織資訊","極度克制色彩","建築圖理性美"],
  aiPrompt:"請使用「線條框架結構」的風格設計知識圖卡。用細黑線框出不同的資訊區域，像建築平面圖一樣精確。背景純白，主要靠線條粗細的變化來區分標題和內文。只用一個小面積的強調色（如紅色小方塊或藍色底線）打破黑白的單調。整體有建築設計或工業製圖的理性美感。",
  previewStyle:"background-image:url('images/儀式感系列｜線條框架結構風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:120, nameCN:"攝影全版背景風", nameJP:"フルブリード写真背景", nameEN:"Full Bleed Photography",
  category:"carddesign",
  origin:"日系",
  scenes:["生活風格","創意藝術"],
  description:"以一張高品質攝影作品鋪滿整個背景，上方疊加半透明的深色或淺色遮罩，文字直接寫在遮罩層上。照片提供情境氛圍，文字提供知識內容，兩者融為一體。",
  characteristics:["攝影鋪滿背景","半透明遮罩層","照片提供情境","文字與影像融合"],
  aiPrompt:"請使用「攝影全版背景」的風格設計知識圖卡。一張高品質的攝影作品（風景、城市、抽象紋理等）鋪滿整個背景，上面疊加一層半透明的深色遮罩（約 50-70% 不透明度）。白色的粗體標題直接放在遮罩層上，照片的氛圍透過遮罩隱約可見。整體有電影感和故事性，適合引起情感共鳴的開場圖卡。",
  previewStyle:"background-image:url('images/儀式感系列｜攝影全版背景風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},

// ══════════════════════════════════════════
// 傳統日式 (traditional) — 14 styles
// ══════════════════════════════════════════
{
  id:1, nameCN:"浮世繪風", nameJP:"浮世絵スタイル", nameEN:"Ukiyo-e Style",
  category:"traditional",
  origin:"日系",
  scenes:["創意藝術","生活風格"],
  description:"江戶時代的木版畫藝術，以平面化構圖、鮮明色塊和粗細有致的輪廓線著稱。色彩飽和而和諧，大量運用負空間與俯仰視角，充滿敘事張力。",
  characteristics:["平面色塊填色","粗黑輪廓線","俯仰視角構圖","和諧飽和配色"],
  aiPrompt:"請使用「浮世繪風」的視覺風格設計知識圖卡。江戶時代的木版畫藝術，以平面化構圖、鮮明色塊和粗細有致的輪廓線著稱。色彩飽和而和諧，大量運用負空間與俯仰視角，充滿敘事張力。主要特徵包含：平面色塊填色、粗黑輪廓線、俯仰視角構圖、和諧飽和配色。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜浮世繪風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:2, nameCN:"水墨畫風", nameJP:"水墨画スタイル", nameEN:"Sumi-e Ink Wash",
  category:"traditional",
  origin:"日系",
  scenes:["身心靈","創意藝術"],
  description:"以墨汁在宣紙上渲染的東方繪畫技法，強調濃淡墨色的層次與大量留白。追求意境深遠而非寫實，筆觸本身即是藝術語言。",
  characteristics:["濃淡墨色漸層","大量留白空間","可見筆觸質感","極簡意境構圖"],
  aiPrompt:"請使用「水墨畫風」的視覺風格設計知識圖卡。以墨汁在宣紙上渲染的東方繪畫技法，強調濃淡墨色的層次與大量留白。追求意境深遠而非寫實，筆觸本身即是藝術語言。主要特徵包含：濃淡墨色漸層、大量留白空間、可見筆觸質感、極簡意境構圖。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜水墨畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:4, nameCN:"和風水彩", nameJP:"和風水彩", nameEN:"Wa-Suisei (Japanese Watercolor)",
  category:"traditional",
  origin:"日系",
  scenes:["生活風格","身心靈"],
  description:"融合日本傳統美學與水彩技法的風格，以淡雅的櫻花粉、抹茶綠、藍灰為主色，透明水份感十足，常搭配金色或細線裝飾。",
  characteristics:["淡雅透明色調","和風配色粉藍綠","金色線條裝飾","柔和邊緣暈染"],
  aiPrompt:"請使用「和風水彩」的視覺風格設計知識圖卡。融合日本傳統美學與水彩技法的風格，以淡雅的櫻花粉、抹茶綠、藍灰為主色，透明水份感十足，常搭配金色或細線裝飾。主要特徵包含：淡雅透明色調、和風配色粉藍綠、金色線條裝飾、柔和邊緣暈染。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜和風水彩風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:5, nameCN:"家紋風", nameJP:"家紋スタイル", nameEN:"Kamon Crest Style",
  category:"traditional",
  origin:"日系",
  scenes:["知識學習","商業職場"],
  description:"日本家族徽章的幾何對稱美學，以單色或雙色表現，圓形構圖內包含高度對稱的植物、動物或幾何圖案，線條精緻優雅。",
  characteristics:["圓形對稱構圖","黑白雙色為主","高度幾何化","精緻細線質感"],
  aiPrompt:"請使用「家紋風」的視覺風格設計知識圖卡。日本家族徽章的幾何對稱美學，以單色或雙色表現，圓形構圖內包含高度對稱的植物、動物或幾何圖案，線條精緻優雅。主要特徵包含：圓形對稱構圖、黑白雙色為主、高度幾何化、精緻細線質感。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜家紋風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:6, nameCN:"千代紙風", nameJP:"千代紙スタイル", nameEN:"Chiyogami Paper Style",
  category:"traditional",
  origin:"日系",
  scenes:["生活風格","創意藝術"],
  description:"江戶時代的彩色和紙圖案風格，以小碎花、幾何紋樣為主，顏色鮮豔而飽和，重複排列形成豐富的視覺律動感。",
  characteristics:["重複幾何紋樣","飽和鮮豔配色","小碎花或格紋","對稱規律排列"],
  aiPrompt:"請使用「千代紙風」的視覺風格設計知識圖卡。江戶時代的彩色和紙圖案風格，以小碎花、幾何紋樣為主，顏色鮮豔而飽和，重複排列形成豐富的視覺律動感。主要特徵包含：重複幾何紋樣、飽和鮮豔配色、小碎花或格紋、對稱規律排列。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜千代紙風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:7, nameCN:"花札風", nameJP:"花札スタイル", nameEN:"Hanafuda Card Style",
  category:"traditional",
  origin:"日系",
  scenes:["生活風格","創意藝術"],
  description:"日本花牌遊戲的插畫風格，每張牌以單一植物或動物為主題，黑色輪廓搭配紅白黃等高對比色，構圖簡潔而富有象徵意義。",
  characteristics:["單一主題植物","高對比黑紅配色","圓角卡片構圖","象徵性圖案"],
  aiPrompt:"請使用「花札風」的視覺風格設計知識圖卡。日本花牌遊戲的插畫風格，每張牌以單一植物或動物為主題，黑色輪廓搭配紅白黃等高對比色，構圖簡潔而富有象徵意義。主要特徵包含：單一主題植物、高對比黑紅配色、圓角卡片構圖、象徵性圖案。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜花札風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:9, nameCN:"枯山水風", nameJP:"枯山水スタイル", nameEN:"Zen Rock Garden Style",
  category:"traditional",
  origin:"日系",
  scenes:["身心靈","生活風格"],
  description:"禪宗美學的極致表現，以白色細石、耙痕紋路象徵流水，點綴苔蘚石塊，整體呈現靜謐、內斂的冥想氛圍。",
  characteristics:["白色砂石細紋","極度克制配色","禪意負空間","自然石塊點綴"],
  aiPrompt:"請使用「枯山水風」的視覺風格設計知識圖卡。禪宗美學的極致表現，以白色細石、耙痕紋路象徵流水，點綴苔蘚石塊，整體呈現靜謐、內斂的冥想氛圍。主要特徵包含：白色砂石細紋、極度克制配色、禪意負空間、自然石塊點綴。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜枯山水風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:8, nameCN:"版畫刻印風", nameJP:"木版画スタイル", nameEN:"Woodblock Print Style",
  category:"traditional",
  origin:"日系",
  scenes:["創意藝術","知識學習"],
  description:"以木版印刷的紋理質感為核心，刻意保留刻刀痕跡、油墨不均勻的手工感，顏色以2-4色為限，充滿溫暖的手作韻味。",
  characteristics:["刻刀刻痕質感","2-4色限制用色","油墨不均勻感","手工印刷風格"],
  aiPrompt:"請使用「版畫刻印風」的視覺風格設計知識圖卡。以木版印刷的紋理質感為核心，刻意保留刻刀痕跡、油墨不均勻的手工感，顏色以2-4色為限，充滿溫暖的手作韻味。主要特徵包含：刻刀刻痕質感、2-4色限制用色、油墨不均勻感、手工印刷風格。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜版畫刻印風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:10, nameCN:"祭典插畫風", nameJP:"祭りイラスト", nameEN:"Japanese Festival Illustration",
  category:"traditional",
  origin:"日系",
  scenes:["生活風格","運動健身"],
  description:"日本夏日祭典的活潑插畫風格，以燈籠橙紅、藏青浴衣、金色煙火為主色，筆觸輕快而充滿生命力，節慶氛圍濃厚。",
  characteristics:["橙紅燈籠配色","活潑輕快筆觸","煙火金色點綴","夏夜祭典氛圍"],
  aiPrompt:"請使用「祭典插畫風」的視覺風格設計知識圖卡。日本夏日祭典的活潑插畫風格，以燈籠橙紅、藏青浴衣、金色煙火為主色，筆觸輕快而充滿生命力，節慶氛圍濃厚。主要特徵包含：橙紅燈籠配色、活潑輕快筆觸、煙火金色點綴、夏夜祭典氛圍。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜祭典插畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:12, nameCN:"金繼風", nameJP:"金継ぎスタイル", nameEN:"Kintsugi Style",
  category:"traditional",
  origin:"日系",
  scenes:["身心靈","生活風格"],
  description:"以金粉修補陶器裂縫的哲學美學，將破損視為歷史的一部分。在設計中以金色線條穿越深色或素色背景，象徵重生與美麗的傷痕。",
  characteristics:["金色修復裂縫","深色素陶背景","不完美之美","禪意哲學感"],
  aiPrompt:"請使用「金繼風」的視覺風格設計知識圖卡。以金粉修補陶器裂縫的哲學美學，將破損視為歷史的一部分。在設計中以金色線條穿越深色或素色背景，象徵重生與美麗的傷痕。主要特徵包含：金色修復裂縫、深色素陶背景、不完美之美、禪意哲學感。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜金繼風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:11, nameCN:"友禪染風", nameJP:"友禅染スタイル", nameEN:"Yuzen Dyeing Style",
  category:"traditional",
  origin:"日系",
  scenes:["生活風格","創意藝術"],
  description:"京都傳統手工染布技法，以流動的花卉圖案和漸層染色為特色，色彩富麗而層次豐富，常見紅梅、牡丹等傳統花卉主題。",
  characteristics:["流動花卉圖案","富麗漸層染色","紅梅牡丹主題","絲綢光澤質感"],
  aiPrompt:"請使用「友禪染風」的視覺風格設計知識圖卡。京都傳統手工染布技法，以流動的花卉圖案和漸層染色為特色，色彩富麗而層次豐富，常見紅梅、牡丹等傳統花卉主題。主要特徵包含：流動花卉圖案、富麗漸層染色、紅梅牡丹主題、絲綢光澤質感。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜友禪染風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:13, nameCN:"扇面風", nameJP:"扇面スタイル", nameEN:"Sensu Fan Style",
  category:"traditional",
  origin:"日系",
  scenes:["生活風格","創意藝術"],
  description:"以摺扇形狀為構圖核心，扇面內填入山水或花鳥圖案，金色邊框裝飾，呈現雅致的貴族美學與開合之間的詩意空間感。",
  characteristics:["扇形構圖框架","金色邊框裝飾","山水花鳥填充","典雅貴族氛圍"],
  aiPrompt:"請使用「扇面風」的視覺風格設計知識圖卡。以摺扇形狀為構圖核心，扇面內填入山水或花鳥圖案，金色邊框裝飾，呈現雅致的貴族美學與開合之間的詩意空間感。主要特徵包含：扇形構圖框架、金色邊框裝飾、山水花鳥填充、典雅貴族氛圍。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜扇面風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:14, nameCN:"蒔繪漆藝風", nameJP:"蒔絵スタイル", nameEN:"Makie Lacquerware Style",
  category:"traditional",
  origin:"日系",
  scenes:["創意藝術","生活風格"],
  description:"日本傳統漆藝技術，在黑漆底上以金銀粉描繪精細圖案。深黑底色與金銀光澤形成奢華對比，呈現極致的工藝美感。",
  characteristics:["黑漆底色","金銀粉圖案","奢華精細紋樣","高對比光澤感"],
  aiPrompt:"請使用「蒔繪漆藝風」的視覺風格設計知識圖卡。日本傳統漆藝技術，在黑漆底上以金銀粉描繪精細圖案。深黑底色與金銀光澤形成奢華對比，呈現極致的工藝美感。主要特徵包含：黑漆底色、金銀粉圖案、奢華精細紋樣、高對比光澤感。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜蒔繪漆藝風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:18, nameCN:"折紙藝術風", nameJP:"折り紙スタイル", nameEN:"Origami Paper Art Style",
  category:"traditional",
  origin:"日系",
  scenes:["創意藝術","生活風格"],
  description:"以折紙的幾何摺痕線條和立體三角面為造型語言，色彩乾淨分明，以光影模擬折紙的立體感，充滿幾何趣味與空間想像。",
  characteristics:["幾何摺痕線條","立體三角面感","乾淨分明配色","光影立體模擬"],
  aiPrompt:"請使用「折紙藝術風」的視覺風格設計知識圖卡。以折紙的幾何摺痕線條和立體三角面為造型語言，色彩乾淨分明，以光影模擬折紙的立體感，充滿幾何趣味與空間想像。主要特徵包含：幾何摺痕線條、立體三角面感、乾淨分明配色、光影立體模擬。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜折紙藝術風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},

// ══════════════════════════════════════════
// 現代日系插畫 (illustration) — 18 styles
// ══════════════════════════════════════════
{
  id:19, nameCN:"平面插畫風", nameJP:"フラットイラスト", nameEN:"Japanese Flat Illustration",
  category:"illustration",
  origin:"日系",
  scenes:["知識學習","商業職場"],
  description:"現代日系設計常見的扁平風格，去除多餘細節，以純色色塊和簡潔幾何形體表達概念，色彩搭配溫柔且精心，視覺清爽不過度。",
  characteristics:["純色色塊造型","無陰影平面感","精心溫柔配色","簡潔幾何形體"],
  aiPrompt:"請使用「平面插畫風」的視覺風格設計知識圖卡。現代日系設計常見的扁平風格，去除多餘細節，以純色色塊和簡潔幾何形體表達概念，色彩搭配溫柔且精心，視覺清爽不過度。主要特徵包含：純色色塊造型、無陰影平面感、精心溫柔配色、簡潔幾何形體。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜平面插畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:20, nameCN:"水彩插畫風", nameJP:"水彩イラスト", nameEN:"Japanese Watercolor Illustration",
  category:"illustration",
  origin:"日系",
  scenes:["生活風格","身心靈"],
  description:"現代日系水彩插畫以清透的水份感和柔和的顏色暈染著稱，常見漸層色塊搭配細緻的白色飛白，整體呈現清新自然的氛圍。",
  characteristics:["清透水份感","柔和暈染邊緣","漸層色塊","白色飛白留光"],
  aiPrompt:"請使用「水彩插畫風」的視覺風格設計知識圖卡。現代日系水彩插畫以清透的水份感和柔和的顏色暈染著稱，常見漸層色塊搭配細緻的白色飛白，整體呈現清新自然的氛圍。主要特徵包含：清透水份感、柔和暈染邊緣、漸層色塊、白色飛白留光。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜水彩插畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:21, nameCN:"可愛角色風", nameJP:"かわいいキャラ", nameEN:"Kawaii Character Style",
  category:"illustration",
  origin:"日系",
  scenes:["生活風格","知識學習"],
  description:"以圓潤大頭、大眼睛、簡化四肢為特徵的可愛角色設計風格，配色多為粉色系或馬卡龍色，表情豐富誇張，充滿親和力。",
  characteristics:["圓潤大頭大眼","簡化四肢造型","粉色馬卡龍配色","豐富誇張表情"],
  aiPrompt:"請使用「可愛角色風」的視覺風格設計知識圖卡。以圓潤大頭、大眼睛、簡化四肢為特徵的可愛角色設計風格，配色多為粉色系或馬卡龍色，表情豐富誇張，充滿親和力。主要特徵包含：圓潤大頭大眼、簡化四肢造型、粉色馬卡龍配色、豐富誇張表情。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜可愛角色風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:22, nameCN:"手帳插畫風", nameJP:"手帳イラスト", nameEN:"Techo Planner Illustration",
  category:"illustration",
  origin:"日系",
  scenes:["生活風格","知識學習"],
  description:"日本手帳文化孕育出的可愛手繪插畫風格，以細線條手繪小圖案、手寫字體、貼紙感元素為主，整體充滿日常生活的溫馨感。",
  characteristics:["細線條手繪質感","貼紙裝飾元素","手寫字體風格","日常溫馨氛圍"],
  aiPrompt:"請使用「手帳插畫風」的視覺風格設計知識圖卡。日本手帳文化孕育出的可愛手繪插畫風格，以細線條手繪小圖案、手寫字體、貼紙感元素為主，整體充滿日常生活的溫馨感。主要特徵包含：細線條手繪質感、貼紙裝飾元素、手寫字體風格、日常溫馨氛圍。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜手帳插畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:23, nameCN:"鉛筆素描風", nameJP:"鉛筆スケッチ", nameEN:"Pencil Sketch Style",
  category:"illustration",
  origin:"國際通用",
  scenes:["創意藝術","知識學習"],
  description:"以鉛筆或炭筆素描的手繪質感為核心，保留真實的線條抖動和排線紋理，黑白灰為主色，偶爾加入單色彩鉛，散發藝術工作室的溫度。",
  characteristics:["真實鉛筆線條","排線素描紋理","黑白灰色調","偶爾單色彩鉛"],
  aiPrompt:"請使用「鉛筆素描風」的視覺風格設計知識圖卡。以鉛筆或炭筆素描的手繪質感為核心，保留真實的線條抖動和排線紋理，黑白灰為主色，偶爾加入單色彩鉛，散發藝術工作室的溫度。主要特徵包含：真實鉛筆線條、排線素描紋理、黑白灰色調、偶爾單色彩鉛。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜鉛筆素描風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:24, nameCN:"線稿插畫風", nameJP:"線画イラスト", nameEN:"Clean Line Art Style",
  category:"illustration",
  origin:"國際通用",
  scenes:["知識學習","創意藝術"],
  description:"以單一勻稱線條勾勒圖形，不填色或僅輕微填色，線條本身即是設計的全部。強調線條的韻律感、粗細變化與構圖的留白美感。",
  characteristics:["均勻乾淨線條","最小化填色","線條粗細韻律","構圖留白美學"],
  aiPrompt:"請使用「線稿插畫風」的視覺風格設計知識圖卡。以單一勻稱線條勾勒圖形，不填色或僅輕微填色，線條本身即是設計的全部。強調線條的韻律感、粗細變化與構圖的留白美感。主要特徵包含：均勻乾淨線條、最小化填色、線條粗細韻律、構圖留白美學。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜線稿插畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:25, nameCN:"童書插畫風", nameJP:"絵本イラスト", nameEN:"Ehon Picture Book Style",
  category:"illustration",
  origin:"日系",
  scenes:["知識學習","生活風格"],
  description:"日本繪本的溫暖插畫風格，以圓潤柔和的造型、低飽和度的柔和配色為主，場景充滿想像力和溫馨故事感，適合輕鬆學習的內容。",
  characteristics:["圓潤柔和造型","低飽和柔和配色","充滿故事想像","溫暖繪本氛圍"],
  aiPrompt:"請使用「童書插畫風」的視覺風格設計知識圖卡。日本繪本的溫暖插畫風格，以圓潤柔和的造型、低飽和度的柔和配色為主，場景充滿想像力和溫馨故事感，適合輕鬆學習的內容。主要特徵包含：圓潤柔和造型、低飽和柔和配色、充滿故事想像、溫暖繪本氛圍。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜童書插畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:26, nameCN:"食物插畫風", nameJP:"フードイラスト", nameEN:"Japanese Food Illustration",
  category:"illustration",
  origin:"日系",
  scenes:["生活風格","創意藝術"],
  description:"以日本料理為主題的精細插畫風格，強調食物的色澤與質感，常以俯拍或45度角構圖，色彩飽和誘人，細節豐富令人垂涎。",
  characteristics:["精細食物質感","飽和誘人配色","俯拍構圖美學","豐富細節描繪"],
  aiPrompt:"請使用「食物插畫風」的視覺風格設計知識圖卡。以日本料理為主題的精細插畫風格，強調食物的色澤與質感，常以俯拍或45度角構圖，色彩飽和誘人，細節豐富令人垂涎。主要特徵包含：精細食物質感、飽和誘人配色、俯拍構圖美學、豐富細節描繪。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜食物插畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:27, nameCN:"粉彩插畫風", nameJP:"パステルイラスト", nameEN:"Pastel Color Illustration",
  category:"illustration",
  origin:"國際通用",
  scenes:["生活風格","身心靈"],
  description:"以馬卡龍色系為核心的柔和插畫風格，所有顏色均加入大量白色調低飽和度，整體呈現甜美夢幻的氛圍，適合女性向或生活類內容。",
  characteristics:["馬卡龍色系","低飽和甜美調","夢幻柔和氛圍","大量白色調色"],
  aiPrompt:"請使用「粉彩插畫風」的視覺風格設計知識圖卡。以馬卡龍色系為核心的柔和插畫風格，所有顏色均加入大量白色調低飽和度，整體呈現甜美夢幻的氛圍，適合女性向或生活類內容。主要特徵包含：馬卡龍色系、低飽和甜美調、夢幻柔和氛圍、大量白色調色。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜粉彩插畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:28, nameCN:"幾何插畫風", nameJP:"ジオメトリックイラスト", nameEN:"Geometric Illustration Style",
  category:"illustration",
  origin:"國際通用",
  scenes:["科技創業","商業職場"],
  description:"以幾何形體（三角形、圓形、多邊形）構成的現代插畫風格，形體邊緣銳利清晰，配色對比鮮明，結構感強，適合科技或商業主題。",
  characteristics:["幾何形體構成","銳利清晰邊緣","高對比配色","強烈結構感"],
  aiPrompt:"請使用「幾何插畫風」的視覺風格設計知識圖卡。以幾何形體（三角形、圓形、多邊形）構成的現代插畫風格，形體邊緣銳利清晰，配色對比鮮明，結構感強，適合科技或商業主題。主要特徵包含：幾何形體構成、銳利清晰邊緣、高對比配色、強烈結構感。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜幾何插畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:29, nameCN:"城市風景插畫", nameJP:"都市風景イラスト", nameEN:"Urban Cityscape Illustration",
  category:"illustration",
  origin:"日系",
  scenes:["生活風格","創意藝術"],
  description:"以日本城市街景為主題的插畫風格，混合現代高樓與傳統建築，黃昏或夜景配色最為常見，充滿都市孤獨的詩意美感。",
  characteristics:["日本街景建築","黃昏夜景配色","都市詩意孤獨感","現代傳統混合"],
  aiPrompt:"請使用「城市風景插畫」的視覺風格設計知識圖卡。以日本城市街景為主題的插畫風格，混合現代高樓與傳統建築，黃昏或夜景配色最為常見，充滿都市孤獨的詩意美感。主要特徵包含：日本街景建築、黃昏夜景配色、都市詩意孤獨感、現代傳統混合。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜城市風景插畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:30, nameCN:"室內場景插畫", nameJP:"インテリアイラスト", nameEN:"Cozy Interior Illustration",
  category:"illustration",
  origin:"日系",
  scenes:["生活風格","身心靈"],
  description:"日系居家場景插畫，以溫暖的燈光、整齊的書架、盆栽綠意為元素，俯視或斜視角構圖，傳遞靜謐舒適的「窩在家」氛圍。",
  characteristics:["溫暖室內燈光","整齊書架盆栽","俯視斜視角度","窩居舒適氛圍"],
  aiPrompt:"請使用「室內場景插畫」的視覺風格設計知識圖卡。日系居家場景插畫，以溫暖的燈光、整齊的書架、盆栽綠意為元素，俯視或斜視角構圖，傳遞靜謐舒適的「窩在家」氛圍。主要特徵包含：溫暖室內燈光、整齊書架盆栽、俯視斜視角度、窩居舒適氛圍。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜室內場景插畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:31, nameCN:"概念藝術插畫", nameJP:"コンセプトアート", nameEN:"Concept Art Style",
  category:"illustration",
  origin:"國際通用",
  scenes:["創意藝術","科技創業"],
  description:"電影或遊戲概念藝術的風格，強調宏觀場景的史詩感和光影效果，以細緻的環境設計和敘事性視角表達，色彩豐富而戲劇化。",
  characteristics:["史詩宏觀場景","戲劇化光影","細緻環境設計","敘事視角構圖"],
  aiPrompt:"請使用「概念藝術插畫」的視覺風格設計知識圖卡。電影或遊戲概念藝術的風格，強調宏觀場景的史詩感和光影效果，以細緻的環境設計和敘事性視角表達，色彩豐富而戲劇化。主要特徵包含：史詩宏觀場景、戲劇化光影、細緻環境設計、敘事視角構圖。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜概念藝術插畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:32, nameCN:"自然場景插畫", nameJP:"自然風景イラスト", nameEN:"Nature Scene Illustration",
  category:"illustration",
  origin:"國際通用",
  scenes:["身心靈","生活風格"],
  description:"以日本自然風光（森林、山川、海岸）為主題，筆觸輕柔，色彩清透，常有光線穿透葉片的「光斑」效果，呈現大自然的靜謐與生命力。",
  characteristics:["日本自然風光","輕柔清透筆觸","光斑葉透效果","靜謐生命氛圍"],
  aiPrompt:"請使用「自然場景插畫」的視覺風格設計知識圖卡。以日本自然風光（森林、山川、海岸）為主題，筆觸輕柔，色彩清透，常有光線穿透葉片的「光斑」效果，呈現大自然的靜謐與生命力。主要特徵包含：日本自然風光、輕柔清透筆觸、光斑葉透效果、靜謐生命氛圍。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜自然場景插畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:33, nameCN:"背景美術風", nameJP:"背景美術スタイル", nameEN:"Anime Background Art Style",
  category:"illustration",
  origin:"日系",
  scenes:["創意藝術","生活風格"],
  description:"動畫電影背景美術風格（如吉卜力工作室），以精細的手繪質感、豐富的環境細節和詩意的光線表現著稱，背景本身即是故事的主角。",
  characteristics:["精細手繪質感","豐富環境細節","詩意光線表現","背景即是主角"],
  aiPrompt:"請使用「背景美術風」的視覺風格設計知識圖卡。動畫電影背景美術風格（如吉卜力工作室），以精細的手繪質感、豐富的環境細節和詩意的光線表現著稱，背景本身即是故事的主角。主要特徵包含：精細手繪質感、豐富環境細節、詩意光線表現、背景即是主角。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜背景美術風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:34, nameCN:"廣告插畫風", nameJP:"広告イラスト", nameEN:"Japanese Commercial Illustration",
  category:"illustration",
  origin:"日系",
  scenes:["商業職場","知識學習"],
  description:"日本廣告設計的插畫風格，以簡潔有力的訴求視覺為核心，構圖清爽大膽，產品或主題元素突出，文字與圖像的排版比例精準到位。",
  characteristics:["簡潔有力視覺","大膽構圖排版","主題元素突出","文圖比例精準"],
  aiPrompt:"請使用「廣告插畫風」的視覺風格設計知識圖卡。日本廣告設計的插畫風格，以簡潔有力的訴求視覺為核心，構圖清爽大膽，產品或主題元素突出，文字與圖像的排版比例精準到位。主要特徵包含：簡潔有力視覺、大膽構圖排版、主題元素突出、文圖比例精準。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜廣告插畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:35, nameCN:"角色設計風", nameJP:"キャラクターデザイン", nameEN:"Character Design Sheet Style",
  category:"illustration",
  origin:"國際通用",
  scenes:["創意藝術","科技創業"],
  description:"動畫或遊戲角色設計圖的風格，包含正面側面旋轉圖、表情一覧和服裝細節，乾淨的白底配合清晰的線稿，充滿專業設定集的質感。",
  characteristics:["多角度旋轉圖","表情一覽設計","白底清晰線稿","專業設定集感"],
  aiPrompt:"請使用「角色設計風」的視覺風格設計知識圖卡。動畫或遊戲角色設計圖的風格，包含正面側面旋轉圖、表情一覧和服裝細節，乾淨的白底配合清晰的線稿，充滿專業設定集的質感。主要特徵包含：多角度旋轉圖、表情一覽設計、白底清晰線稿、專業設定集感。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜角色設計風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:36, nameCN:"雜誌插畫風", nameJP:"雑誌イラスト", nameEN:"Japanese Magazine Illustration",
  category:"illustration",
  origin:"日系",
  scenes:["生活風格","商業職場"],
  description:"日本時尚或生活雜誌插畫風格，以俐落的現代線條搭配精選的配色，常有女性人物或時尚元素，整體呈現都會高端的美感。",
  characteristics:["俐落現代線條","都會高端配色","時尚女性元素","雜誌版式美感"],
  aiPrompt:"請使用「雜誌插畫風」的視覺風格設計知識圖卡。日本時尚或生活雜誌插畫風格，以俐落的現代線條搭配精選的配色，常有女性人物或時尚元素，整體呈現都會高端的美感。主要特徵包含：俐落現代線條、都會高端配色、時尚女性元素、雜誌版式美感。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜雜誌插畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},

// ══════════════════════════════════════════
// 動漫次文化 (anime) — 12 styles
// ══════════════════════════════════════════
{
  id:37, nameCN:"賽璐璐動畫風", nameJP:"セルアニメスタイル", nameEN:"Cel Animation Style",
  category:"anime",
  origin:"日系",
  scenes:["創意藝術","生活風格"],
  description:"傳統手繪動畫膠片的上色風格，以平面純色填充、硬邊陰影和高光白點為特徵，色彩鮮明無漸層，充滿復古動畫的懷舊魅力。",
  characteristics:["平面純色填充","硬邊二分陰影","高光白點","無漸層鮮明色"],
  aiPrompt:"請使用「賽璐璐動畫風」的視覺風格設計知識圖卡。傳統手繪動畫膠片的上色風格，以平面純色填充、硬邊陰影和高光白點為特徵，色彩鮮明無漸層，充滿復古動畫的懷舊魅力。主要特徵包含：平面純色填充、硬邊二分陰影、高光白點、無漸層鮮明色。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜賽璐璐動畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:38, nameCN:"少女漫畫風", nameJP:"少女漫画スタイル", nameEN:"Shojo Manga Style",
  category:"anime",
  origin:"日系",
  scenes:["生活風格","創意藝術"],
  description:"以浪漫唯美為基調的少女漫畫風格，大而閃爍的眼睛、纖細的身形、散落的花瓣和閃亮特效是標誌性元素，常帶有情感張力和夢幻氛圍。",
  characteristics:["大閃爍眼睛","纖細人物比例","花瓣閃光特效","浪漫夢幻氛圍"],
  aiPrompt:"請使用「少女漫畫風」的視覺風格設計知識圖卡。以浪漫唯美為基調的少女漫畫風格，大而閃爍的眼睛、纖細的身形、散落的花瓣和閃亮特效是標誌性元素，常帶有情感張力和夢幻氛圍。主要特徵包含：大閃爍眼睛、纖細人物比例、花瓣閃光特效、浪漫夢幻氛圍。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜少女漫畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:39, nameCN:"少年漫畫風", nameJP:"少年漫画スタイル", nameEN:"Shonen Manga Style",
  category:"anime",
  origin:"日系",
  scenes:["運動健身","知識學習"],
  description:"以熱血動感為核心的少年漫畫風格，速度線、爆炸特效、誇張的肌肉和動作姿勢為標誌，黑白對比強烈，充滿腎上腺素的能量感。",
  characteristics:["速度線衝擊特效","誇張動作姿勢","強烈黑白對比","熱血能量感"],
  aiPrompt:"請使用「少年漫畫風」的視覺風格設計知識圖卡。以熱血動感為核心的少年漫畫風格，速度線、爆炸特效、誇張的肌肉和動作姿勢為標誌，黑白對比強烈，充滿腎上腺素的能量感。主要特徵包含：速度線衝擊特效、誇張動作姿勢、強烈黑白對比、熱血能量感。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜少年漫畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:40, nameCN:"成人向漫畫風", nameJP:"青年漫画スタイル", nameEN:"Seinen Manga Style",
  category:"anime",
  origin:"日系",
  scenes:["知識學習","商業職場"],
  description:"以成熟敘事為主的青年漫畫風格，寫實比例、精細的環境描寫和複雜的光影處理，少用誇張特效，強調心理深度和視覺沉浸感。",
  characteristics:["寫實人物比例","精細環境描繪","複雜光影處理","心理深度氛圍"],
  aiPrompt:"請使用「成人向漫畫風」的視覺風格設計知識圖卡。以成熟敘事為主的青年漫畫風格，寫實比例、精細的環境描寫和複雜的光影處理，少用誇張特效，強調心理深度和視覺沉浸感。主要特徵包含：寫實人物比例、精細環境描繪、複雜光影處理、心理深度氛圍。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜成人向漫畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:42, nameCN:"賽博龐克動漫風", nameJP:"サイバーパンクアニメ", nameEN:"Cyberpunk Anime Style",
  category:"anime",
  origin:"日系",
  scenes:["科技創業","創意藝術"],
  description:"結合日本動畫與科幻賽博龐克的視覺風格，霓虹燈光在雨夜中反射，高科技低生活的對比，配色以青色、洋紅和深紫夜色為主。",
  characteristics:["霓虹雨夜反射","高科技低生活","青色洋紅配色","賽博城市背景"],
  aiPrompt:"請使用「賽博龐克動漫風」的視覺風格設計知識圖卡。結合日本動畫與科幻賽博龐克的視覺風格，霓虹燈光在雨夜中反射，高科技低生活的對比，配色以青色、洋紅和深紫夜色為主。主要特徵包含：霓虹雨夜反射、高科技低生活、青色洋紅配色、賽博城市背景。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜賽博龐克動漫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:43, nameCN:"像素藝術風", nameJP:"ドット絵スタイル", nameEN:"Pixel Art / Dot Art Style",
  category:"anime",
  origin:"日系",
  scenes:["科技創業","生活風格"],
  description:"以像素點為最小單位構成圖像的復古數位藝術風格，16色或256色的限制配色，以明顯的方形像素粒子感為特徵，充滿復古遊戲懷舊感。",
  characteristics:["明顯像素粒子感","限制16-256色","方形像素構成","復古遊戲懷舊"],
  aiPrompt:"請使用「像素藝術風」的視覺風格設計知識圖卡。以像素點為最小單位構成圖像的復古數位藝術風格，16色或256色的限制配色，以明顯的方形像素粒子感為特徵，充滿復古遊戲懷舊感。主要特徵包含：明顯像素粒子感、限制16-256色、方形像素構成、復古遊戲懷舊。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜像素藝術風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:45, nameCN:"Lo-Fi 音樂風", nameJP:"ローファイスタイル", nameEN:"Lo-Fi Aesthetic Style",
  category:"anime",
  origin:"日系",
  scenes:["生活風格","知識學習"],
  description:"Lo-Fi 音樂文化的視覺語言，以溫暖昏黃的燈光、窗邊自習的少女、雨絲或落葉等為元素，整體色調偏橙黃暖色，傳遞放鬆學習的氛圍。",
  characteristics:["昏黃溫暖燈光","窗邊學習場景","雨絲落葉元素","橙黃暖色調"],
  aiPrompt:"請使用「Lo-Fi 音樂風」的視覺風格設計知識圖卡。Lo-Fi 音樂文化的視覺語言，以溫暖昏黃的燈光、窗邊自習的少女、雨絲或落葉等為元素，整體色調偏橙黃暖色，傳遞放鬆學習的氛圍。主要特徵包含：昏黃溫暖燈光、窗邊學習場景、雨絲落葉元素、橙黃暖色調。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜Lo-Fi 音樂風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:46, nameCN:"異世界奇幻風", nameJP:"異世界ファンタジー", nameEN:"Isekai Fantasy Style",
  category:"anime",
  origin:"日系",
  scenes:["創意藝術","生活風格"],
  description:"以穿越異世界為主題的動漫奇幻風格，魔法陣、龍、城堡和異域服裝為標誌，配色絢麗但帶有史詩厚重感，充滿冒險與期待感。",
  characteristics:["魔法陣城堡元素","絢麗史詩配色","奇幻服裝設計","冒險期待氛圍"],
  aiPrompt:"請使用「異世界奇幻風」的視覺風格設計知識圖卡。以穿越異世界為主題的動漫奇幻風格，魔法陣、龍、城堡和異域服裝為標誌，配色絢麗但帶有史詩厚重感，充滿冒險與期待感。主要特徵包含：魔法陣城堡元素、絢麗史詩配色、奇幻服裝設計、冒險期待氛圍。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜異世界奇幻風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:47, nameCN:"機甲科幻風", nameJP:"メカスタイル", nameEN:"Mecha Sci-Fi Style",
  category:"anime",
  origin:"日系",
  scenes:["科技創業","創意藝術"],
  description:"以巨型機器人機甲為主角的科幻動漫風格，金屬材質感、複雜的機械細節和動態激烈的戰鬥姿勢為核心，配色以鋼鐵灰為底色搭配高亮色。",
  characteristics:["金屬機械材質感","複雜機械細節","動態戰鬥姿勢","鋼鐵灰高亮配色"],
  aiPrompt:"請使用「機甲科幻風」的視覺風格設計知識圖卡。以巨型機器人機甲為主角的科幻動漫風格，金屬材質感、複雜的機械細節和動態激烈的戰鬥姿勢為核心，配色以鋼鐵灰為底色搭配高亮色。主要特徵包含：金屬機械材質感、複雜機械細節、動態戰鬥姿勢、鋼鐵灰高亮配色。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜機甲科幻風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:48, nameCN:"恐怖漫畫風", nameJP:"ホラー漫画スタイル", nameEN:"Horror Manga Style",
  category:"anime",
  origin:"日系",
  scenes:["創意藝術","生活風格"],
  description:"日本恐怖漫畫的視覺風格，以極端的黑白對比、異常扭曲的身體、密集的斜線陰影和不安的構圖製造心理恐懼感，細節令人毛骨悚然。",
  characteristics:["極端黑白對比","扭曲異常身體","密集斜線陰影","不安心理構圖"],
  aiPrompt:"請使用「恐怖漫畫風」的視覺風格設計知識圖卡。日本恐怖漫畫的視覺風格，以極端的黑白對比、異常扭曲的身體、密集的斜線陰影和不安的構圖製造心理恐懼感，細節令人毛骨悚然。主要特徵包含：極端黑白對比、扭曲異常身體、密集斜線陰影、不安心理構圖。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜恐怖漫畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:50, nameCN:"科幻動畫風", nameJP:"SFアニメスタイル", nameEN:"Sci-Fi Anime Style",
  category:"anime",
  origin:"日系",
  scenes:["科技創業","創意藝術"],
  description:"以未來科幻世界觀為主題的動畫風格，太空船、星際背景、宇宙服裝和全息界面為元素，色彩通常以深藍黑為底搭配能量光效。",
  characteristics:["太空星際背景","宇宙服全息界面","深藍黑底色","能量光效點綴"],
  aiPrompt:"請使用「科幻動畫風」的視覺風格設計知識圖卡。以未來科幻世界觀為主題的動畫風格，太空船、星際背景、宇宙服裝和全息界面為元素，色彩通常以深藍黑為底搭配能量光效。主要特徵包含：太空星際背景、宇宙服全息界面、深藍黑底色、能量光效點綴。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜科幻動畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:52, nameCN:"懷舊昭和動畫風", nameJP:"昭和レトロアニメ", nameEN:"Showa Retro Anime Style",
  category:"anime",
  origin:"日系",
  scenes:["生活風格","創意藝術"],
  description:"昭和時代（1960-80年代）日本動畫風格，以粗線條、簡單的色彩填充和充滿時代感的配色（橘棕黃）為特徵，帶有樸質的懷舊溫度。",
  characteristics:["粗線條簡單填色","橘棕黃時代配色","樸質懷舊溫度","60-80年代風格"],
  aiPrompt:"請使用「懷舊昭和動畫風」的視覺風格設計知識圖卡。昭和時代（1960-80年代）日本動畫風格，以粗線條、簡單的色彩填充和充滿時代感的配色（橘棕黃）為特徵，帶有樸質的懷舊溫度。主要特徵包含：粗線條簡單填色、橘棕黃時代配色、樸質懷舊溫度、60-80年代風格。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜懷舊昭和動畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},

// ══════════════════════════════════════════
// 設計風格 (design) — 15 styles
// ══════════════════════════════════════════
{
  id:53, nameCN:"日式極簡風", nameJP:"ミニマリズム", nameEN:"Japanese Minimalism",
  category:"design",
  origin:"日系",
  scenes:["知識學習","生活風格"],
  description:"以「間」（Ma）空間美學為核心的極簡設計，大量白色留白、單一主題元素、克制的排版，追求去除一切多餘元素後的純粹美感。",
  characteristics:["大量白色留白","單一主題元素","克制的排版","純粹去除雜念"],
  aiPrompt:"請使用「日式極簡風」的視覺風格設計知識圖卡。以「間」（Ma）空間美學為核心的極簡設計，大量白色留白、單一主題元素、克制的排版，追求去除一切多餘元素後的純粹美感。主要特徵包含：大量白色留白、單一主題元素、克制的排版、純粹去除雜念。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜日式極簡風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:54, nameCN:"昭和復古平面風", nameJP:"昭和レトロデザイン", nameEN:"Showa Retro Graphic Design",
  category:"design",
  origin:"日系",
  scenes:["生活風格","創意藝術"],
  description:"昭和時代日本平面設計的復古風格，以厚重的無襯線字體、幾何圖形、米黃和磚紅配色為特徵，常見海報式版面，散發濃郁的時代感。",
  characteristics:["厚重無襯線字體","海報式版面","米黃磚紅配色","幾何圖形裝飾"],
  aiPrompt:"請使用「昭和復古平面風」的視覺風格設計知識圖卡。昭和時代日本平面設計的復古風格，以厚重的無襯線字體、幾何圖形、米黃和磚紅配色為特徵，常見海報式版面，散發濃郁的時代感。主要特徵包含：厚重無襯線字體、海報式版面、米黃磚紅配色、幾何圖形裝飾。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜昭和復古平面風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:55, nameCN:"平成懷舊風", nameJP:"平成ノスタルジア", nameEN:"Heisei Nostalgia Style",
  category:"design",
  origin:"日系",
  scenes:["生活風格","創意藝術"],
  description:"1990-2000年代日本平成時代的懷舊美學，以泡沫經濟後的設計語言為靈感，常見半透明霧面、金屬光澤、幾何漸層和特定的數位感。",
  characteristics:["半透明霧面效果","金屬光澤質感","幾何漸層背景","90年代數位感"],
  aiPrompt:"請使用「平成懷舊風」的視覺風格設計知識圖卡。1990-2000年代日本平成時代的懷舊美學，以泡沫經濟後的設計語言為靈感，常見半透明霧面、金屬光澤、幾何漸層和特定的數位感。主要特徵包含：半透明霧面效果、金屬光澤質感、幾何漸層背景、90年代數位感。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜平成懷舊風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:56, nameCN:"Swiss 國際風", nameJP:"スイス国際スタイル", nameEN:"Swiss International Style",
  category:"design",
  origin:"國際通用",
  scenes:["商業職場","知識學習"],
  description:"來自瑞士的國際版式設計風格，以網格系統、赫維提卡字體、左對齊版式和黑白配色為核心，強調功能性與清晰的資訊層次。",
  characteristics:["嚴格網格系統","黑白功能配色","左對齊版式","資訊層次清晰"],
  aiPrompt:"請使用「Swiss 國際風」的視覺風格設計知識圖卡。來自瑞士的國際版式設計風格，以網格系統、赫維提卡字體、左對齊版式和黑白配色為核心，強調功能性與清晰的資訊層次。主要特徵包含：嚴格網格系統、黑白功能配色、左對齊版式、資訊層次清晰。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜Swiss 國際風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:57, nameCN:"包浩斯風", nameJP:"バウハウスデザイン", nameEN:"Bauhaus Design Style",
  category:"design",
  origin:"國際通用",
  scenes:["創意藝術","知識學習"],
  description:"20世紀最具影響力的設計風格，以基本幾何形（圓、三角、方）、三原色（紅黃藍）和去裝飾的功能主義為核心，形式永遠追隨功能。",
  characteristics:["基本幾何形體","紅黃藍三原色","功能主義無裝飾","形式追隨功能"],
  aiPrompt:"請使用「包浩斯風」的視覺風格設計知識圖卡。20世紀最具影響力的設計風格，以基本幾何形（圓、三角、方）、三原色（紅黃藍）和去裝飾的功能主義為核心，形式永遠追隨功能。主要特徵包含：基本幾何形體、紅黃藍三原色、功能主義無裝飾、形式追隨功能。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜包浩斯風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:58, nameCN:"波普藝術風", nameJP:"ポップアート", nameEN:"Pop Art Style",
  category:"design",
  origin:"國際通用",
  scenes:["創意藝術","生活風格"],
  description:"安迪·沃荷式的流行藝術風格，以高飽和度的平面色彩、重複的圖案矩陣、網點紋理和誇張的商業美學為特徵，視覺衝擊力極強。",
  characteristics:["高飽和平面色彩","重複圖案矩陣","網點印刷紋理","商業誇張美學"],
  aiPrompt:"請使用「波普藝術風」的視覺風格設計知識圖卡。安迪·沃荷式的流行藝術風格，以高飽和度的平面色彩、重複的圖案矩陣、網點紋理和誇張的商業美學為特徵，視覺衝擊力極強。主要特徵包含：高飽和平面色彩、重複圖案矩陣、網點印刷紋理、商業誇張美學。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜波普藝術風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:59, nameCN:"排版藝術風", nameJP:"タイポグラフィアート", nameEN:"Typography Art Style",
  category:"design",
  origin:"日系",
  scenes:["創意藝術","知識學習"],
  description:"以文字排版本身作為主要視覺元素的設計風格，文字大小、字重、方向的對比創造視覺張力，內容即是設計，適合以文字傳遞強烈訊息的主題。",
  characteristics:["文字即是設計","大小字重對比","方向角度變化","內容視覺張力"],
  aiPrompt:"請使用「排版藝術風」的視覺風格設計知識圖卡。以文字排版本身作為主要視覺元素的設計風格，文字大小、字重、方向的對比創造視覺張力，內容即是設計，適合以文字傳遞強烈訊息的主題。主要特徵包含：文字即是設計、大小字重對比、方向角度變化、內容視覺張力。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜排版藝術風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:60, nameCN:"抽象幾何風", nameJP:"アブストラクトジオメトリー", nameEN:"Abstract Geometric Style",
  category:"design",
  origin:"國際通用",
  scenes:["創意藝術","科技創業"],
  description:"以純幾何形體的重疊、透明度和色彩關係構成的抽象設計，不代表任何具象事物，以視覺節奏和色彩和諧為唯一目標，富有現代藝術氣質。",
  characteristics:["純幾何形體重疊","透明度色彩關係","無具象參照","視覺節奏和諧"],
  aiPrompt:"請使用「抽象幾何風」的視覺風格設計知識圖卡。以純幾何形體的重疊、透明度和色彩關係構成的抽象設計，不代表任何具象事物，以視覺節奏和色彩和諧為唯一目標，富有現代藝術氣質。主要特徵包含：純幾何形體重疊、透明度色彩關係、無具象參照、視覺節奏和諧。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜抽象幾何風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:61, nameCN:"剪紙藝術風", nameJP:"切り絵スタイル", nameEN:"Kirie Paper Cut Style",
  category:"design",
  origin:"日系",
  scenes:["創意藝術","生活風格"],
  description:"以剪紙技法模擬精密切割的藝術風格，以白色或單色為底，圖案以負空間切割方式呈現，邊緣銳利，光影穿透製造立體層次感。",
  characteristics:["負空間切割圖案","銳利清晰邊緣","白色單色底","光影穿透層次"],
  aiPrompt:"請使用「剪紙藝術風」的視覺風格設計知識圖卡。以剪紙技法模擬精密切割的藝術風格，以白色或單色為底，圖案以負空間切割方式呈現，邊緣銳利，光影穿透製造立體層次感。主要特徵包含：負空間切割圖案、銳利清晰邊緣、白色單色底、光影穿透層次。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜剪紙藝術風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:62, nameCN:"90年代美式日漫風", nameJP:"90年代風デザイン", nameEN:"90s Retro Japanese Design",
  category:"design",
  origin:"國際通用",
  scenes:["創意藝術","生活風格"],
  description:"1990年代日美文化融合的平面設計風格，以鮮豔的螢光色、迷彩或條紋圖案、破碎字型和街頭感版面為特徵，充滿那個時代的反叛活力。",
  characteristics:["螢光鮮豔配色","迷彩條紋圖案","破碎街頭字型","反叛活力氛圍"],
  aiPrompt:"請使用「90年代美式日漫風」的視覺風格設計知識圖卡。1990年代日美文化融合的平面設計風格，以鮮豔的螢光色、迷彩或條紋圖案、破碎字型和街頭感版面為特徵，充滿那個時代的反叛活力。主要特徵包含：螢光鮮豔配色、迷彩條紋圖案、破碎街頭字型、反叛活力氛圍。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜90年代美式日漫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:64, nameCN:"超現實主義風", nameJP:"シュルレアリズム", nameEN:"Surrealism Style",
  category:"design",
  origin:"國際通用",
  scenes:["創意藝術","生活風格"],
  description:"以夢境邏輯打破現實規則的超現實主義藝術風格，不可能的空間組合、比例錯位和意象堆疊，以視覺謎題引發思考和驚奇感。",
  characteristics:["夢境不可能空間","比例錯位意象","現實邏輯打破","視覺謎題驚奇"],
  aiPrompt:"請使用「超現實主義風」的視覺風格設計知識圖卡。以夢境邏輯打破現實規則的超現實主義藝術風格，不可能的空間組合、比例錯位和意象堆疊，以視覺謎題引發思考和驚奇感。主要特徵包含：夢境不可能空間、比例錯位意象、現實邏輯打破、視覺謎題驚奇。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜超現實主義風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:65, nameCN:"點彩畫風", nameJP:"点描画スタイル", nameEN:"Pointillism Style",
  category:"design",
  origin:"國際通用",
  scenes:["創意藝術","生活風格"],
  description:"以無數小點子代替線條和色塊的繪畫技法，近看是點陣，遠看則是完整圖像，色點的密度和顏色組合產生豐富的視覺混合效果。",
  characteristics:["無數色點構成","近點遠圖效果","視覺色彩混合","密度光影控制"],
  aiPrompt:"請使用「點彩畫風」的視覺風格設計知識圖卡。以無數小點子代替線條和色塊的繪畫技法，近看是點陣，遠看則是完整圖像，色點的密度和顏色組合產生豐富的視覺混合效果。主要特徵包含：無數色點構成、近點遠圖效果、視覺色彩混合、密度光影控制。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜點彩畫風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:66, nameCN:"剪貼拼貼風", nameJP:"コラージュスタイル", nameEN:"Collage / Mixed Media Style",
  category:"design",
  origin:"國際通用",
  scenes:["創意藝術","生活風格"],
  description:"將不同來源的紙材、照片和印刷品混合拼貼的藝術風格，邊緣粗糙自然，各元素質感不統一，充滿手作感和個性化的不完整之美。",
  characteristics:["多元素混合拼貼","粗糙自然邊緣","質感不統一","手作個性美感"],
  aiPrompt:"請使用「剪貼拼貼風」的視覺風格設計知識圖卡。將不同來源的紙材、照片和印刷品混合拼貼的藝術風格，邊緣粗糙自然，各元素質感不統一，充滿手作感和個性化的不完整之美。主要特徵包含：多元素混合拼貼、粗糙自然邊緣、質感不統一、手作個性美感。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜剪貼拼貼風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:67, nameCN:"故障藝術風", nameJP:"グリッチアート", nameEN:"Glitch Art Style",
  category:"design",
  origin:"國際通用",
  scenes:["科技創業","創意藝術"],
  description:"以數位訊號故障、資料損壞的視覺效果為美學靈感，RGB色差、掃描線噪點、像素錯位和失真等元素，呈現後數位時代的前衛視覺語言。",
  characteristics:["RGB色差分離","掃描線噪點","像素位移錯位","數位故障美學"],
  aiPrompt:"請使用「故障藝術風」的視覺風格設計知識圖卡。以數位訊號故障、資料損壞的視覺效果為美學靈感，RGB色差、掃描線噪點、像素錯位和失真等元素，呈現後數位時代的前衛視覺語言。主要特徵包含：RGB色差分離、掃描線噪點、像素位移錯位、數位故障美學。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜故障藝術風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:68, nameCN:"低多邊形風", nameJP:"ローポリゴン", nameEN:"Low Poly Style",
  category:"design",
  origin:"國際通用",
  scenes:["科技創業","創意藝術"],
  description:"以三角形多邊形面片構成圖像的現代設計風格，面片間色彩的微妙變化模擬光影，整體呈現幾何化的抽象美感，兼具現代感和科技感。",
  characteristics:["三角形面片構成","色彩光影模擬","幾何化抽象感","現代科技美感"],
  aiPrompt:"請使用「低多邊形風」的視覺風格設計知識圖卡。以三角形多邊形面片構成圖像的現代設計風格，面片間色彩的微妙變化模擬光影，整體呈現幾何化的抽象美感，兼具現代感和科技感。主要特徵包含：三角形面片構成、色彩光影模擬、幾何化抽象感、現代科技美感。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜低多邊形風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},

// ══════════════════════════════════════════
// 科技未來 (tech) — 15 styles
// ══════════════════════════════════════════
{
  id:71, nameCN:"霓虹燈風", nameJP:"ネオンライト", nameEN:"Neon Light Style",
  category:"tech",
  origin:"國際通用",
  scenes:["科技創業","創意藝術"],
  description:"以夜晚都市霓虹燈為靈感的視覺風格，深黑背景上呈現自發光的彩色線條，光暈效果明顯，以青色、洋紅和黃色為主要霓虹色，充滿夜晚城市的誘惑感。",
  characteristics:["深黑底自發光線","霓虹光暈效果","青色洋紅配色","夜晚城市誘惑"],
  aiPrompt:"請使用「霓虹燈風」的視覺風格設計知識圖卡。以夜晚都市霓虹燈為靈感的視覺風格，深黑背景上呈現自發光的彩色線條，光暈效果明顯，以青色、洋紅和黃色為主要霓虹色，充滿夜晚城市的誘惑感。主要特徵包含：深黑底自發光線、霓虹光暈效果、青色洋紅配色、夜晚城市誘惑。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜霓虹燈風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:72, nameCN:"全息投影風", nameJP:"ホログラフィック", nameEN:"Holographic Style",
  category:"tech",
  origin:"國際通用",
  scenes:["科技創業","創意藝術"],
  description:"以全息影像的彩虹折射光效為視覺語言，彩虹漸層在金屬或銀色底面上流動，呈現未來科技的神秘與美麗，常見於高端品牌設計。",
  characteristics:["彩虹折射光效","金屬銀色底面","色彩流動漸層","未來科技神秘感"],
  aiPrompt:"請使用「全息投影風」的視覺風格設計知識圖卡。以全息影像的彩虹折射光效為視覺語言，彩虹漸層在金屬或銀色底面上流動，呈現未來科技的神秘與美麗，常見於高端品牌設計。主要特徵包含：彩虹折射光效、金屬銀色底面、色彩流動漸層、未來科技神秘感。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜全息投影風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:73, nameCN:"3D 渲染風", nameJP:"3Dレンダリング", nameEN:"3D Render Style",
  category:"tech",
  origin:"國際通用",
  scenes:["科技創業","商業職場"],
  description:"以三維立體渲染為視覺手法，呈現真實光照、反射和陰影的立體物件，常見玻璃球、金屬幾何體和浮雕字體，質感逼真且富有現代感。",
  characteristics:["真實光照反射","逼真材質質感","立體幾何物件","現代科技美感"],
  aiPrompt:"請使用「3D 渲染風」的視覺風格設計知識圖卡。以三維立體渲染為視覺手法，呈現真實光照、反射和陰影的立體物件，常見玻璃球、金屬幾何體和浮雕字體，質感逼真且富有現代感。主要特徵包含：真實光照反射、逼真材質質感、立體幾何物件、現代科技美感。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜3D 渲染風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:74, nameCN:"電路板風", nameJP:"回路基板スタイル", nameEN:"Circuit Board Style",
  category:"tech",
  origin:"國際通用",
  scenes:["科技創業","知識學習"],
  description:"以電路板的導電線路圖案為視覺靈感，以深綠或黑色底配上金色或銀色電路線，賦予設計濃厚的科技工程感，常用於科技類教育內容。",
  characteristics:["導電線路圖案","深綠黑色底","金銀電路線","科技工程感"],
  aiPrompt:"請使用「電路板風」的視覺風格設計知識圖卡。以電路板的導電線路圖案為視覺靈感，以深綠或黑色底配上金色或銀色電路線，賦予設計濃厚的科技工程感，常用於科技類教育內容。主要特徵包含：導電線路圖案、深綠黑色底、金銀電路線、科技工程感。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜電路板風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:75, nameCN:"資料視覺化風", nameJP:"データビジュアライゼーション", nameEN:"Data Visualization Style",
  category:"tech",
  origin:"國際通用",
  scenes:["商業職場","科技創業"],
  description:"以資訊圖表為設計核心的視覺風格，折線圖、圓餅圖、熱力圖等視覺化元素成為設計語言，配色精準且功能導向，強調資訊傳遞效率。",
  characteristics:["圖表視覺化元素","精準功能配色","資訊層次清晰","數據美學設計"],
  aiPrompt:"請使用「資料視覺化風」的視覺風格設計知識圖卡。以資訊圖表為設計核心的視覺風格，折線圖、圓餅圖、熱力圖等視覺化元素成為設計語言，配色精準且功能導向，強調資訊傳遞效率。主要特徵包含：圖表視覺化元素、精準功能配色、資訊層次清晰、數據美學設計。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜資料視覺化風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:76, nameCN:"線框圖風", nameJP:"ワイヤーフレーム", nameEN:"Wireframe / Blueprint Style",
  category:"tech",
  origin:"國際通用",
  scenes:["科技創業","知識學習"],
  description:"以工程藍圖或設計線框為視覺靈感，深藍底色配白色細線描繪的幾何結構，呈現建築或產品設計的工程美感，精密且理性。",
  characteristics:["深藍底白色細線","幾何工程結構","建築藍圖美感","精密理性設計"],
  aiPrompt:"請使用「線框圖風」的視覺風格設計知識圖卡。以工程藍圖或設計線框為視覺靈感，深藍底色配白色細線描繪的幾何結構，呈現建築或產品設計的工程美感，精密且理性。主要特徵包含：深藍底白色細線、幾何工程結構、建築藍圖美感、精密理性設計。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜線框圖風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:77, nameCN:"新擬物設計風", nameJP:"ニューモーフィズム", nameEN:"Neumorphism Style",
  category:"tech",
  origin:"國際通用",
  scenes:["科技創業","生活風格"],
  description:"以柔和陰影模擬「從背景中浮出」的立體感的現代UI設計風格，背景與元素顏色幾乎相同，以雙色陰影（明暗）製造微妙的立體感。",
  characteristics:["柔和雙色陰影","背景元素同色","微妙浮出立體感","現代UI設計"],
  aiPrompt:"請使用「新擬物設計風」的視覺風格設計知識圖卡。以柔和陰影模擬「從背景中浮出」的立體感的現代UI設計風格，背景與元素顏色幾乎相同，以雙色陰影（明暗）製造微妙的立體感。主要特徵包含：柔和雙色陰影、背景元素同色、微妙浮出立體感、現代UI設計。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜新擬物設計風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:78, nameCN:"暗黑主題風", nameJP:"ダークモード", nameEN:"Dark Mode UI Style",
  category:"tech",
  origin:"國際通用",
  scenes:["科技創業","知識學習"],
  description:"程式設計師與開發者熟悉的 Dark Mode 介面風格，深灰或近黑的背景搭配高對比的白色文字，強調色通常為亮藍或亮紫，適合科技、程式設計、AI 工具等主題的知識圖卡。",
  characteristics:["Dark Mode 開發者風格","深灰近黑背景","程式設計科技主題","亮藍亮紫強調色"],
  aiPrompt:"請使用「暗黑主題風」的視覺風格設計知識圖卡。以深色背景為主的現代暗黑介面設計，深灰或近黑的背景搭配高對比的白色文字，強調色通常為亮藍或亮紫，呈現專業、沉穩的科技感。主要特徵包含：深灰近黑背景、高對比白色文字、亮藍亮紫強調色、專業沉穩科技感。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜暗黑主題風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:79, nameCN:"宇宙星空風", nameJP:"宇宙スタイル", nameEN:"Cosmic Space Style",
  category:"tech",
  origin:"國際通用",
  scenes:["身心靈","知識學習"],
  description:"以宇宙星空為視覺背景，以星雲、星系、行星和星光點點為元素，深邃的深藍黑配上星雲的紫粉色彩，傳遞無限與渺小的哲學感。",
  characteristics:["深邃星空背景","星雲紫粉色彩","星光點點元素","無限渺小哲學"],
  aiPrompt:"請使用「宇宙星空風」的視覺風格設計知識圖卡。以宇宙星空為視覺背景，以星雲、星系、行星和星光點點為元素，深邃的深藍黑配上星雲的紫粉色彩，傳遞無限與渺小的哲學感。主要特徵包含：深邃星空背景、星雲紫粉色彩、星光點點元素、無限渺小哲學。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜宇宙星空風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:80, nameCN:"極光風格", nameJP:"オーロラスタイル", nameEN:"Aurora / Northern Lights Style",
  category:"tech",
  origin:"國際通用",
  scenes:["身心靈","創意藝術"],
  description:"以北極光的流動色彩為靈感，在深夜藍黑底色上，綠色和洋紅的光帶流動飄移，呈現夢幻而科學的自然奇觀之美。",
  characteristics:["綠色洋紅光帶","深夜藍黑底","流動飄移效果","夢幻自然奇觀"],
  aiPrompt:"請使用「極光風格」的視覺風格設計知識圖卡。以北極光的流動色彩為靈感，在深夜藍黑底色上，綠色和洋紅的光帶流動飄移，呈現夢幻而科學的自然奇觀之美。主要特徵包含：綠色洋紅光帶、深夜藍黑底、流動飄移效果、夢幻自然奇觀。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜極光風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:81, nameCN:"漸層設計風", nameJP:"グラデーションデザイン", nameEN:"Gradient Design Style",
  category:"tech",
  origin:"國際通用",
  scenes:["科技創業","創意藝術"],
  description:"以大面積色彩漸層為主體的現代設計風格，色彩過渡柔和而大膽，常使用非傳統的色彩組合（如橙到紫、藍到粉），充滿活力的視覺衝擊力。",
  characteristics:["大面積色彩漸層","非傳統色彩組合","柔和大膽過渡","活力視覺衝擊"],
  aiPrompt:"請使用「漸層設計風」的視覺風格設計知識圖卡。以大面積色彩漸層為主體的現代設計風格，色彩過渡柔和而大膽，常使用非傳統的色彩組合（如橙到紫、藍到粉），充滿活力的視覺衝擊力。主要特徵包含：大面積色彩漸層、非傳統色彩組合、柔和大膽過渡、活力視覺衝擊。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜漸層設計風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:84, nameCN:"未來主義字體風", nameJP:"フューチャリズムタイポ", nameEN:"Futuristic Typography Style",
  category:"tech",
  origin:"國際通用",
  scenes:["科技創業","創意藝術"],
  description:"以未來感英文字體或漢字設計為主視覺的風格，字體通常帶有幾何感、切割感或發光效果，搭配技術性的版面元素，呈現科幻電影片頭的視覺感。",
  characteristics:["幾何切割感字體","發光文字效果","技術版面元素","科幻電影片頭感"],
  aiPrompt:"請使用「未來主義字體風」的視覺風格設計知識圖卡。以未來感英文字體或漢字設計為主視覺的風格，字體通常帶有幾何感、切割感或發光效果，搭配技術性的版面元素，呈現科幻電影片頭的視覺感。主要特徵包含：幾何切割感字體、發光文字效果、技術版面元素、科幻電影片頭感。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜未來主義字體風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:85, nameCN:"合成波風", nameJP:"シンセウェーブ", nameEN:"Synthwave / Retrowave Style",
  category:"tech",
  origin:"國際通用",
  scenes:["創意藝術","科技創業"],
  description:"80年代電子合成音樂的視覺化呈現，以日落紫橙漸層天空、延伸至遠方的方格地平線、棕櫚樹剪影和電子字體為標誌，充滿復古未來主義的魅力。",
  characteristics:["日落紫橙漸層天空","方格地平線","棕櫚樹剪影","復古未來電子感"],
  aiPrompt:"請使用「合成波風」的視覺風格設計知識圖卡。80年代電子合成音樂的視覺化呈現，以日落紫橙漸層天空、延伸至遠方的方格地平線、棕櫚樹剪影和電子字體為標誌，充滿復古未來主義的魅力。主要特徵包含：日落紫橙漸層天空、方格地平線、棕櫚樹剪影、復古未來電子感。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜合成波風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},

// ══════════════════════════════════════════
// 自然有機 (nature) — 8 styles
// ══════════════════════════════════════════
{
  id:86, nameCN:"春日櫻花風", nameJP:"春の桜スタイル", nameEN:"Sakura Cherry Blossom Style",
  category:"nature",
  origin:"日系",
  scenes:["生活風格","身心靈"],
  description:"以日本春天盛開的櫻花為主題，粉白色花瓣在淺藍天空或柔和米白底上飄落，表達日本「物哀」之美，短暫而珍貴的瞬間感動。",
  characteristics:["粉白花瓣飄落","淺藍米白底色","物哀短暫之美","春天療癒氛圍"],
  aiPrompt:"請使用「春日櫻花風」的視覺風格設計知識圖卡。以日本春天盛開的櫻花為主題，粉白色花瓣在淺藍天空或柔和米白底上飄落，表達日本「物哀」之美，短暫而珍貴的瞬間感動。主要特徵包含：粉白花瓣飄落、淺藍米白底色、物哀短暫之美、春天療癒氛圍。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜春日櫻花風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:87, nameCN:"秋楓紅葉風", nameJP:"秋の紅葉スタイル", nameEN:"Autumn Maple Leaf Style",
  category:"nature",
  origin:"日系",
  scenes:["生活風格","身心靈"],
  description:"以日本秋季紅葉為主題，深紅、橙黃和金色的楓葉在陽光下燃燒，象徵成熟與豐收，配色溫暖飽滿，呈現大自然的燦爛告別之美。",
  characteristics:["深紅橙金楓葉","燃燒般溫暖配色","成熟豐收象徵","大自然告別之美"],
  aiPrompt:"請使用「秋楓紅葉風」的視覺風格設計知識圖卡。以日本秋季紅葉為主題，深紅、橙黃和金色的楓葉在陽光下燃燒，象徵成熟與豐收，配色溫暖飽滿，呈現大自然的燦爛告別之美。主要特徵包含：深紅橙金楓葉、燃燒般溫暖配色、成熟豐收象徵、大自然告別之美。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜秋楓紅葉風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:88, nameCN:"夏日海洋風", nameJP:"夏の海スタイル", nameEN:"Japanese Summer Ocean Style",
  category:"nature",
  origin:"日系",
  scenes:["生活風格","運動健身"],
  description:"以日本夏日海岸為主題，清澈透明的淺藍海水、白色浪花和明亮陽光，呈現夏日生命力和開放自由的活力感，配色鮮亮清新。",
  characteristics:["清澈淺藍海水","白色浪花反光","明亮夏日陽光","自由活力感"],
  aiPrompt:"請使用「夏日海洋風」的視覺風格設計知識圖卡。以日本夏日海岸為主題，清澈透明的淺藍海水、白色浪花和明亮陽光，呈現夏日生命力和開放自由的活力感，配色鮮亮清新。主要特徵包含：清澈淺藍海水、白色浪花反光、明亮夏日陽光、自由活力感。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜夏日海洋風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:89, nameCN:"雪景冬日風", nameJP:"雪景色スタイル", nameEN:"Winter Snow Scene Style",
  category:"nature",
  origin:"日系",
  scenes:["生活風格","身心靈"],
  description:"以日本冬季雪景為主題，純白的雪覆蓋寺廟、松樹和城鎮，沉靜的白藍色調傳遞冬日的靜謐與純粹，帶有禪意的清澈感。",
  characteristics:["純白雪覆蓋景致","靜謐白藍色調","禪意清澈純粹","寺廟松樹元素"],
  aiPrompt:"請使用「雪景冬日風」的視覺風格設計知識圖卡。以日本冬季雪景為主題，純白的雪覆蓋寺廟、松樹和城鎮，沉靜的白藍色調傳遞冬日的靜謐與純粹，帶有禪意的清澈感。主要特徵包含：純白雪覆蓋景致、靜謐白藍色調、禪意清澈純粹、寺廟松樹元素。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜雪景冬日風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:90, nameCN:"植物學風", nameJP:"ボタニカルスタイル", nameEN:"Botanical Illustration Style",
  category:"nature",
  origin:"國際通用",
  scenes:["身心靈","創意藝術"],
  description:"以科學博物學插畫為靈感的植物風格，以精細的手繪植物細節、白色或米白底色搭配綠色和棕色色調，呈現維多利亞時代自然科學的典雅氣質。",
  characteristics:["精細手繪植物","白色米白底色","綠棕自然色調","博物學典雅感"],
  aiPrompt:"請使用「植物學風」的視覺風格設計知識圖卡。以科學博物學插畫為靈感的植物風格，以精細的手繪植物細節、白色或米白底色搭配綠色和棕色色調，呈現維多利亞時代自然科學的典雅氣質。主要特徵包含：精細手繪植物、白色米白底色、綠棕自然色調、博物學典雅感。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜植物學風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:91, nameCN:"花卉圖案風", nameJP:"フローラルパターン", nameEN:"Floral Pattern Style",
  category:"nature",
  origin:"國際通用",
  scenes:["生活風格","身心靈"],
  description:"以豐盛的花卉圖案布滿畫面的設計風格，以牡丹、玫瑰或野花為元素密集排列，配色可以是清新粉色系或濃郁深色系，充滿女性美感和生命力。",
  characteristics:["花卉密集排列","牡丹玫瑰主題","清新或濃郁配色","生命女性美感"],
  aiPrompt:"請使用「花卉圖案風」的視覺風格設計知識圖卡。以豐盛的花卉圖案布滿畫面的設計風格，以牡丹、玫瑰或野花為元素密集排列，配色可以是清新粉色系或濃郁深色系，充滿女性美感和生命力。主要特徵包含：花卉密集排列、牡丹玫瑰主題、清新或濃郁配色、生命女性美感。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜花卉圖案風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:92, nameCN:"森林系療癒風", nameJP:"森林ヒーリング", nameEN:"Forest Healing Style",
  category:"nature",
  origin:"國際通用",
  scenes:["身心靈","生活風格"],
  description:"以日本森林浴（Shinrin-yoku）為靈感的療癒視覺風格，陽光穿透翠綠林葉形成光暈，綠意盎然、空氣清新，傳遞大自然的療癒力量與生命能量。",
  characteristics:["陽光穿透林葉光暈","翠綠清新配色","大自然療癒力","森林浴氛圍"],
  aiPrompt:"請使用「森林系療癒風」的視覺風格設計知識圖卡。以日本森林浴（Shinrin-yoku）為靈感的療癒視覺風格，陽光穿透翠綠林葉形成光暈，綠意盎然、空氣清新，傳遞大自然的療癒力量與生命能量。主要特徵包含：陽光穿透林葉光暈、翠綠清新配色、大自然療癒力、森林浴氛圍。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜森林系療癒風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},
{
  id:94, nameCN:"竹林禪意風", nameJP:"竹林禅スタイル", nameEN:"Bamboo Zen Style",
  category:"nature",
  origin:"日系",
  scenes:["身心靈","生活風格"],
  description:"以日本竹林的靜謐美感為主題，修長的竹幹向上延伸，光影在竹葉間穿透，墨綠和淺金的配色傳遞東方哲學的靜定與向上生長的力量。",
  characteristics:["修長竹幹向上延伸","墨綠淺金配色","光影竹葉穿透","靜定向上哲學"],
  aiPrompt:"請使用「竹林禪意風」的視覺風格設計知識圖卡。以日本竹林的靜謐美感為主題，修長的竹幹向上延伸，光影在竹葉間穿透，墨綠和淺金的配色傳遞東方哲學的靜定與向上生長的力量。主要特徵包含：修長竹幹向上延伸、墨綠淺金配色、光影竹葉穿透、靜定向上哲學。整體畫面需保留足夠的文字排版空間，適合作為知識型社群圖卡或線上課程封面使用。",
  previewStyle:"background-image:url('images/儀式感系列｜竹林禪意風格｜Hook 圖卡.jpg');background-size:cover;background-position:center",
  previewEmoji:""
},

]; // end stylesData
