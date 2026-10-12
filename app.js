const state = {
  screen: "home",
  lang: "zh",
  country: "FR",
  source: null,
  imageData: null,
  stream: null,
  processingStep: 0,
};

const countries = [
  { code: "FR", flag: "🇫🇷", zh: "法国", fr: "France" },
  { code: "CN", flag: "🇨🇳", zh: "中国", fr: "Chine" },
  { code: "GB", flag: "🇬🇧", zh: "英国", fr: "Royaume-Uni" },
  { code: "US", flag: "🇺🇸", zh: "美国", fr: "États-Unis" },
  { code: "CA", flag: "🇨🇦", zh: "加拿大", fr: "Canada" },
  { code: "OTHER", flag: "🌍", zh: "其他国家", fr: "Autre pays" },
];

const copy = {
  zh: {
    "home.eyebrow":"ZERO SETTINGS PHOTO ID",
    "home.title":"AI 证件照",
    "home.subtitle":"拍一张，剩下交给 AI。立即拍摄或上传照片，系统自动完成优化与规范处理。",
    "capture.title":"立即拍摄",
    "capture.desc":"打开摄像头，现场拍摄证件照",
    "capture.cta":"开始拍摄",
    "upload.title":"上传照片功能",
    "upload.desc":"从手机相册或电脑中选择照片",
    "upload.cta":"选择照片",
    "home.micro":"无需选择尺寸、背景颜色或 DPI，复杂规则由系统自动处理。",
    "camera.title":"准备拍摄",
    "camera.desc":"正视镜头，保持自然表情和均匀光线。",
    "camera.tip":"请将脸部放在框内",
    "camera.cancel":"返回",
    "camera.error":"当前设备无法使用摄像头，请使用“上传照片功能”。",
    "preview.title":"这张照片可以吗？",
    "preview.desc":"确认后，AI 将自动进行检测、优化和规范处理。",
    "preview.good":"照片已准备好，可以继续",
    "preview.use":"使用这张照片",
    "preview.retake":"重新拍摄",
    "preview.reupload":"重新选择",
    "uploadPage.title":"上传一张照片",
    "uploadPage.desc":"选择清晰、正面、无遮挡的人像照片。",
    "uploadPage.drop":"拖放照片到这里，或从设备中选择",
    "uploadPage.format":"支持 JPG、PNG、WEBP",
    "processing.title":"正在制作您的证件照",
    "processing.desc":"请保持页面打开，很快就好。",
    "processing.1":"AI 检测中",
    "processing.1s":"检查照片质量和人物位置",
    "processing.2":"AI 优化中",
    "processing.2s":"优化背景与构图",
    "processing.3":"正在生成合规证件照",
    "processing.3s":"生成最终输出",
    "result.chip":"已完成",
    "result.title":"您的证件照已生成",
    "result.desc":"AI 已自动完成优化与规范处理。",
    "result.download":"下载证件照",
    "result.retake":"重新拍摄",
    "result.reupload":"上传另一张照片",
    "trust.ai":"AI 自动处理",
    "trust.privacy":"隐私优先",
    "trust.fast":"快速生成",
    "footer.privacy":"隐私",
    "footer.help":"帮助",
    "country.label":"国家 / 地区",
    "country.title":"选择证件照标准",
    "country.note":"尺寸、背景和人脸比例由系统自动处理，不需要手动设置。",
    "privacy.title":"隐私说明",
    "privacy.body":"JiZhao 的用户界面遵循“最少数据”原则。当前演示版的照片处理在浏览器本地完成，不会自动上传到服务器。正式接入 AI 服务前，应明确告知处理目的、保存期限和数据位置。",
    "help.title":"拍摄建议",
    "help.body":"请正视镜头，保持自然表情；避免帽子、滤镜和强烈阴影；选择光线均匀的环境。系统会自动处理尺寸和背景。",
    "error.title":"暂时无法继续",
    "error.action":"改用上传照片",
    "error.back":"返回首页"
  },
  fr: {
    "home.eyebrow":"PHOTO D’IDENTITÉ SANS RÉGLAGES",
    "home.title":"Photo d’identité IA",
    "home.subtitle":"Prenez ou importez une photo. JiZhao s’occupe automatiquement de l’optimisation et de la mise au format.",
    "capture.title":"Prendre une photo",
    "capture.desc":"Ouvrir l’appareil photo et prendre votre portrait",
    "capture.cta":"Ouvrir l’appareil photo",
    "upload.title":"Importer une photo",
    "upload.desc":"Choisir une photo depuis votre téléphone ou ordinateur",
    "upload.cta":"Choisir une photo",
    "home.micro":"Aucun réglage de taille, de fond ou de DPI : les règles sont gérées automatiquement.",
    "camera.title":"Prêt pour la photo",
    "camera.desc":"Regardez l’objectif, gardez une expression naturelle et une lumière uniforme.",
    "camera.tip":"Placez votre visage dans le cadre",
    "camera.cancel":"Retour",
    "camera.error":"La caméra n’est pas disponible sur cet appareil. Utilisez l’import de photo.",
    "preview.title":"Utiliser cette photo ?",
    "preview.desc":"Après confirmation, l’IA vérifie, optimise et prépare automatiquement la photo.",
    "preview.good":"La photo est prête à être traitée",
    "preview.use":"Utiliser cette photo",
    "preview.retake":"Reprendre la photo",
    "preview.reupload":"Choisir une autre photo",
    "uploadPage.title":"Importer une photo",
    "uploadPage.desc":"Choisissez une photo nette, de face et sans obstruction.",
    "uploadPage.drop":"Déposez votre photo ici ou choisissez-la sur votre appareil",
    "uploadPage.format":"JPG, PNG et WEBP acceptés",
    "processing.title":"Création de votre photo d’identité",
    "processing.desc":"Gardez cette page ouverte, cela sera rapide.",
    "processing.1":"Analyse IA",
    "processing.1s":"Vérification de la qualité et du positionnement",
    "processing.2":"Optimisation IA",
    "processing.2s":"Optimisation du fond et du cadrage",
    "processing.3":"Génération de la photo",
    "processing.3s":"Préparation du fichier final",
    "result.chip":"Terminé",
    "result.title":"Votre photo est prête",
    "result.desc":"L’IA a terminé l’optimisation et la mise au format.",
    "result.download":"Télécharger la photo",
    "result.retake":"Reprendre une photo",
    "result.reupload":"Importer une autre photo",
    "trust.ai":"Traitement IA",
    "trust.privacy":"Confidentialité",
    "trust.fast":"Génération rapide",
    "footer.privacy":"Confidentialité",
    "footer.help":"Aide",
    "country.label":"PAYS / RÉGION",
    "country.title":"Choisir le standard",
    "country.note":"La taille, le fond et le positionnement du visage sont gérés automatiquement.",
    "privacy.title":"Confidentialité",
    "privacy.body":"JiZhao applique un principe de minimisation des données. Dans cette version de démonstration, le traitement de la photo reste local dans le navigateur et aucune image n’est envoyée automatiquement à un serveur. Avant le raccordement à un service IA, la finalité, la durée de conservation et la localisation des données devront être indiquées clairement.",
    "help.title":"Conseils photo",
    "help.body":"Regardez l’objectif et gardez une expression naturelle. Évitez les chapeaux, filtres et ombres fortes. Choisissez une lumière uniforme. La taille et le fond sont gérés automatiquement.",
    "error.title":"Impossible de continuer",
    "error.action":"Importer une photo",
    "error.back":"Accueil"
  }
};

const app = document.getElementById("app");
const fileInput = document.getElementById("fileInput");
const countryDialog = document.getElementById("countryDialog");
const infoDialog = document.getElementById("infoDialog");

function t(key){ return copy[state.lang][key] || key; }

function currentCountry(){ return countries.find(c => c.code === state.country) || countries[0]; }

function stopCamera(){
  if(state.stream){
    state.stream.getTracks().forEach(track => track.stop());
    state.stream = null;
  }
}

function setScreen(screen){
  stopCamera();
  state.screen = screen;
  render();
  window.scrollTo({top:0,behavior:"smooth"});
}

function renderHome(){
  app.innerHTML = `
    <section class="hero">
      <p class="eyebrow">${t("home.eyebrow")}</p>
      <h1>${t("home.title")}</h1>
      <p>${t("home.subtitle")}</p>
    </section>
    <section class="action-grid" aria-label="主要操作">
      <article class="action-card primary">
        <div class="action-icon" aria-hidden="true">📷</div>
        <h2>${t("capture.title")}</h2>
        <p>${t("capture.desc")}</p>
        <button class="btn btn-primary" id="captureStart" type="button">${t("capture.cta")} <span aria-hidden="true">→</span></button>
      </article>
      <article class="action-card">
        <div class="action-icon" aria-hidden="true">↑</div>
        <h2>${t("upload.title")}</h2>
        <p>${t("upload.desc")}</p>
        <button class="btn btn-dark" id="uploadStart" type="button">${t("upload.cta")} <span aria-hidden="true">→</span></button>
      </article>
    </section>
    <p class="microcopy">${t("home.micro")}</p>
  `;
  document.getElementById("captureStart").onclick = () => setScreen("camera");
  document.getElementById("uploadStart").onclick = () => setScreen("upload");
}

async function initCamera(){
  const video = document.getElementById("cameraVideo");
  try{
    state.stream = await navigator.mediaDevices.getUserMedia({
      video:{facingMode:"user",width:{ideal:1080},height:{ideal:1350}},
      audio:false
    });
    video.srcObject = state.stream;
    await video.play();
  }catch(e){
    state.error = t("camera.error");
    state.screen = "error";
    render();
  }
}

function renderCamera(){
  app.innerHTML = `
    <section class="flow-wrap">
      <div class="flow-head">
        <h1>${t("camera.title")}</h1>
        <p>${t("camera.desc")}</p>
      </div>
      <div class="panel">
        <div class="camera-frame">
          <video id="cameraVideo" autoplay playsinline muted></video>
          <div class="face-guide" aria-hidden="true"></div>
          <div class="camera-tip">${t("camera.tip")}</div>
        </div>
        <div class="capture-row">
          <button class="btn btn-ghost" id="cameraBack" type="button">${t("camera.cancel")}</button>
          <button class="capture-btn" id="shutter" aria-label="${t("capture.title")}" type="button"></button>
          <span style="width:72px"></span>
        </div>
      </div>
    </section>
  `;
  document.getElementById("cameraBack").onclick = () => setScreen("home");
  document.getElementById("shutter").onclick = captureFrame;
  initCamera();
}

function captureFrame(){
  const video = document.getElementById("cameraVideo");
  if(!video.videoWidth) return;
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video,0,0);
  state.imageData = canvas.toDataURL("image/jpeg",0.92);
  state.source = "camera";
  setScreen("preview");
}

function openPicker(){ fileInput.click(); }

function renderUpload(){
  app.innerHTML = `
    <section class="flow-wrap">
      <div class="flow-head">
        <h1>${t("uploadPage.title")}</h1>
        <p>${t("uploadPage.desc")}</p>
      </div>
      <div class="panel">
        <div class="upload-zone" id="dropZone" tabindex="0" role="button" aria-label="${t("upload.cta")}">
          <div>
            <div class="upload-icon" aria-hidden="true">↑</div>
            <h2>${t("upload.title")}</h2>
            <p>${t("uploadPage.drop")}<br><small>${t("uploadPage.format")}</small></p>
            <button class="btn btn-dark" id="chooseFile" type="button">${t("upload.cta")}</button>
          </div>
        </div>
        <div class="controls"><button class="btn btn-ghost" id="uploadBack" type="button">${t("camera.cancel")}</button></div>
      </div>
    </section>
  `;
  const zone = document.getElementById("dropZone");
  document.getElementById("chooseFile").onclick = (e) => {e.stopPropagation();openPicker();};
  document.getElementById("uploadBack").onclick = () => setScreen("home");
  zone.onclick = openPicker;
  zone.onkeydown = (e) => { if(e.key==="Enter"||e.key===" ") openPicker(); };
  ["dragenter","dragover"].forEach(name => zone.addEventListener(name,e=>{e.preventDefault();zone.classList.add("dragover")}));
  ["dragleave","drop"].forEach(name => zone.addEventListener(name,e=>{e.preventDefault();zone.classList.remove("dragover")}));
  zone.addEventListener("drop",e=>handleFile(e.dataTransfer.files[0]));
}

function handleFile(file){
  if(!file || !/^image\/(jpeg|png|webp)$/.test(file.type)) return;
  const reader = new FileReader();
  reader.onload = () => {
    state.imageData = reader.result;
    state.source = "upload";
    setScreen("preview");
  };
  reader.readAsDataURL(file);
}

function renderPreview(){
  const redo = state.source === "camera" ? t("preview.retake") : t("preview.reupload");
  app.innerHTML = `
    <section class="flow-wrap">
      <div class="flow-head">
        <h1>${t("preview.title")}</h1>
        <p>${t("preview.desc")}</p>
      </div>
      <div class="panel">
        <div class="photo-frame"><img src="${state.imageData}" alt="照片预览"></div>
        <div class="preview-meta">✓ ${t("preview.good")}</div>
        <div class="controls">
          <button class="btn btn-secondary" id="redo" type="button">${redo}</button>
          <button class="btn btn-dark" id="confirmPhoto" type="button">${t("preview.use")} →</button>
        </div>
      </div>
    </section>
  `;
  document.getElementById("redo").onclick = () => setScreen(state.source === "camera" ? "camera" : "upload");
  document.getElementById("confirmPhoto").onclick = () => {
    state.processingStep = 0;
    setScreen("processing");
    runProcessing();
  };
}

function renderProcessing(){
  const steps = [1,2,3].map((n,i)=>{
    const cls = i < state.processingStep ? "done" : i === state.processingStep ? "active" : "";
    const icon = i < state.processingStep ? "✓" : n;
    return `<div class="step ${cls}"><span class="step-dot">${icon}</span><div><div>${t("processing."+n)}</div><small>${t("processing."+n+"s")}</small></div></div>`;
  }).join("");
  app.innerHTML = `
    <section class="flow-wrap">
      <div class="panel processing-card">
        <div class="loader" aria-hidden="true"></div>
        <h2>${t("processing.title")}</h2>
        <p>${t("processing.desc")}</p>
        <div class="steps">${steps}</div>
      </div>
    </section>
  `;
}

function runProcessing(){
  const advance = () => {
    if(state.screen !== "processing") return;
    state.processingStep += 1;
    if(state.processingStep >= 3){
      setTimeout(()=>setScreen("result"),700);
      return;
    }
    renderProcessing();
    setTimeout(advance,1050);
  };
  setTimeout(advance,1050);
}

function renderResult(){
  app.innerHTML = `
    <section class="flow-wrap">
      <div class="panel result-grid">
        <div class="result-photo"><img src="${state.imageData}" alt="生成的证件照"></div>
        <div class="result-copy">
          <span class="success-chip">✓ ${t("result.chip")}</span>
          <h1>${t("result.title")}</h1>
          <p>${t("result.desc")}</p>
          <div class="result-actions">
            <button class="btn btn-dark" id="downloadBtn" type="button">↓ ${t("result.download")}</button>
            <button class="btn btn-secondary" id="retakeBtn" type="button">${t("result.retake")}</button>
            <button class="btn btn-ghost" id="reuploadBtn" type="button">${t("result.reupload")}</button>
          </div>
        </div>
      </div>
    </section>
  `;
  document.getElementById("downloadBtn").onclick = downloadPhoto;
  document.getElementById("retakeBtn").onclick = () => setScreen("camera");
  document.getElementById("reuploadBtn").onclick = () => setScreen("upload");
}

function downloadPhoto(){
  const a = document.createElement("a");
  a.href = state.imageData;
  a.download = `jizhao-${state.country.toLowerCase()}-photo.jpg`;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function renderError(){
  app.innerHTML = `
    <section class="flow-wrap">
      <div class="panel error-card">
        <div class="error-icon">!</div>
        <h1>${t("error.title")}</h1>
        <p style="color:var(--muted);line-height:1.6">${state.error || t("camera.error")}</p>
        <div class="controls">
          <button class="btn btn-ghost" id="errorHome" type="button">${t("error.back")}</button>
          <button class="btn btn-dark" id="errorUpload" type="button">${t("error.action")}</button>
        </div>
      </div>
    </section>
  `;
  document.getElementById("errorHome").onclick = () => setScreen("home");
  document.getElementById("errorUpload").onclick = () => setScreen("upload");
}

function render(){
  if(state.screen==="home") renderHome();
  else if(state.screen==="camera") renderCamera();
  else if(state.screen==="upload") renderUpload();
  else if(state.screen==="preview") renderPreview();
  else if(state.screen==="processing") renderProcessing();
  else if(state.screen==="result") renderResult();
  else renderError();
  applyStaticCopy();
  updateHeader();
}

function applyStaticCopy(){
  document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));
}

function updateHeader(){
  const c = currentCountry();
  document.getElementById("countryFlag").textContent = c.flag;
  document.getElementById("countryName").textContent = c[state.lang];
  document.getElementById("langBtn").textContent = state.lang === "zh" ? "FR" : "中文";
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "fr";
}

function buildCountryGrid(){
  const grid = document.getElementById("countryGrid");
  grid.innerHTML = countries.map(c=>`
    <button class="country-option ${c.code===state.country?"active":""}" data-country="${c.code}" type="button">
      <span class="flag">${c.flag}</span><span>${c[state.lang]}</span>
    </button>
  `).join("");
  grid.querySelectorAll("[data-country]").forEach(btn=>btn.onclick=()=>{
    state.country = btn.dataset.country;
    countryDialog.close();
    render();
  });
}

document.getElementById("countryBtn").onclick = () => {buildCountryGrid();countryDialog.showModal();};
document.getElementById("langBtn").onclick = () => {state.lang = state.lang === "zh" ? "fr" : "zh";render();};
document.querySelector("[data-close-dialog]").onclick = () => countryDialog.close();
document.querySelector("[data-close-info]").onclick = () => infoDialog.close();
document.addEventListener("click",e=>{
  const trigger = e.target.closest("[data-modal]");
  if(!trigger) return;
  const kind = trigger.dataset.modal;
  document.getElementById("infoTitle").textContent = t(kind+".title");
  document.getElementById("infoBody").innerHTML = `<p>${t(kind+".body")}</p>`;
  infoDialog.showModal();
});
fileInput.addEventListener("change",e=>handleFile(e.target.files[0]));
window.addEventListener("beforeunload",stopCamera);

render();