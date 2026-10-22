const KEYS = {
  theme: "af-theme",
  lang: "af-lang",
  pass: "af-pass",
  site: "af-site-v2",
  session: "af-session",
};

const FALLBACK_IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1'%3E%3Cstop stop-color='%23111118'/%3E%3Cstop offset='1' stop-color='%23362b16'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='800' height='500'/%3E%3Ctext x='400' y='260' text-anchor='middle' fill='%23e8c36a' font-size='42' font-family='serif'%3EAmir%3C/text%3E%3C/svg%3E";

const CATS = [
  { id: "web", ar: "ويب", en: "Web" },
  { id: "apps", ar: "تطبيقات", en: "Apps" },
  { id: "ui", ar: "تجربة واجهة", en: "UI Experience" },
  { id: "identity", ar: "هويات", en: "Identity" },
];

const UI = {
  ar: {
    navAbout: "من أنا",
    navWork: "المشاريع",
    navStack: "أدواتي",
    navJournal: "اليوميات",
    navContact: "تواصل",
    navCta: "ابدأ حديثاً",
    btnWork: "شاهد الأعمال",
    btnAbout: "تعرف عليّ",
    aboutEyebrow: "من أنا",
    statProjects: "مشروع منشور",
    statOwner: "صاحب الموقع",
    statCare: "اهتمام بالتفاصيل",
    workEyebrow: "الأعمال",
    workTitle: "مشاريع مختارة",
    stackEyebrow: "Tech Stack & Uses",
    stackTitle: "أدواتي وسيت أب العمل",
    stackLead: "التقنيات والمعدات التي أعتمد عليها في البرمجة والتصميم.",
    journalEyebrow: "اليوميات",
    journalTitle: "سجل التحديثات",
    journalLead: "أفكار، تحديات، ولقطات سريعة أثناء البناء.",
    contactEyebrow: "تواصل ذكي",
    labelName: "الاسم",
    labelEmail: "البريد",
    labelMessage: "الرسالة",
    btnSend: "إرسال الآن",
    adminEntry: "دخول خاص",
    editHint: "وضع التعديل مفتوح. غيّر أي شيء من اللوحة.",
    editOpen: "تعديل الموقع",
    privacy: "خصوصية",
    labelPassword: "كلمة المرور",
    labelPassword2: "تأكيد كلمة المرور",
    btnLogin: "دخول",
    dashEyebrow: "لوحة أمير",
    dashTitle: "عدّل كل شيء بسهولة",
    btnLogout: "خروج",
    all: "الكل",
    empty: "لا توجد مشاريع في هذا التصنيف بعد.",
    visit: "زيارة المشروع",
    sent: "وصلت الرسالة، وتم إرسال التنبيه.",
    authOld: "هذه اللوحة لك وحدك. منها تعدّل النصوص والمشاريع والأدوات واليوميات.",
    authNew: "أول مرة؟ اختر كلمة مرور لا يراها أحد غيرك.",
    authTitleOld: "دخول أمير فقط",
    authTitleNew: "أنشئ كلمة المرور الخاصة",
    footer: (y, n) => `© ${y} ${n}. كل الحقوق محفوظة.`,
    tabs: { site: "الموقع", projects: "المشاريع", stack: "الأدوات", journal: "اليوميات", contact: "التواصل", inbox: "الرسائل" },
  },
  en: {
    navAbout: "About",
    navWork: "Work",
    navStack: "Uses",
    navJournal: "Journal",
    navContact: "Contact",
    navCta: "Start a talk",
    btnWork: "See work",
    btnAbout: "About me",
    aboutEyebrow: "About",
    statProjects: "Published projects",
    statOwner: "Site owner",
    statCare: "Care for detail",
    workEyebrow: "Selected",
    workTitle: "Chosen projects",
    stackEyebrow: "Tech Stack & Uses",
    stackTitle: "Tools and setup",
    stackLead: "The stack and kit I rely on for code and design.",
    journalEyebrow: "Journal",
    journalTitle: "Update log",
    journalLead: "Ideas, hard problems, and quick shots while building.",
    contactEyebrow: "Smart contact",
    labelName: "Name",
    labelEmail: "Email",
    labelMessage: "Message",
    btnSend: "Send now",
    adminEntry: "Private entry",
    editHint: "Edit mode is on. Change anything from the panel.",
    editOpen: "Edit site",
    privacy: "Private",
    labelPassword: "Password",
    labelPassword2: "Confirm password",
    btnLogin: "Enter",
    dashEyebrow: "Amir studio",
    dashTitle: "Edit everything easily",
    btnLogout: "Leave",
    all: "All",
    empty: "No projects in this category yet.",
    visit: "Visit project",
    sent: "Message received, and the alert was sent.",
    authOld: "This panel is yours. Edit copy, projects, tools, and the journal.",
    authNew: "First time? Choose a password only you know.",
    authTitleOld: "Amir only",
    authTitleNew: "Create your private password",
    footer: (y, n) => `© ${y} ${n}. All rights reserved.`,
    tabs: { site: "Site", projects: "Projects", stack: "Tools", journal: "Journal", contact: "Contact", inbox: "Inbox" },
  },
};

const DEFAULT_SITE = {
  nameAr: "أمير فايز",
  nameEn: "Amir Fayez",
  mark: "أ",
  eyebrowAr: "مساحة شخصية · تصميم وبرمجة",
  eyebrowEn: "Personal studio · design and code",
  taglineAr: "يصنع تجارب رقمية بهدوء، ودقة، وضوء.",
  taglineEn: "Makes digital work with quiet, precision, and light.",
  ledeAr: "موقع شخصي لعرض أعمالي كما أريد أن تُرى: واضح، فاخر، وخاص. الزوار يشاهدون. أنا وحدي من يعدّل.",
  ledeEn: "A personal site for work as I want it seen: clear, considered, and private. Visitors watch. Only I edit.",
  aboutTitleAr: "أهتم بالتفاصيل التي يشعر بها الناس دون أن يسمّوها.",
  aboutTitleEn: "I care about the details people feel before they name them.",
  aboutP1Ar: "أبني واجهات ومواقع تبدو وكأنها صُنعت لشخص واحد، لا لقالب جاهز.",
  aboutP1En: "I build interfaces that feel made for one person, not a template.",
  aboutP2Ar: "هذا الموقع هو دفتري العلني: مشاريع، أدوات، ويوميات أثناء العمل.",
  aboutP2En: "This site is my public notebook: projects, tools, and notes while working.",
  quoteAr: "«الجمال ليس زخرفة. الجمال هو أن كل شيء في مكانه.»",
  quoteEn: "“Beauty is not decoration. Beauty is everything in its place.”",
  contactTitleAr: "إن كان لديك مشروع يستحق عناية.",
  contactTitleEn: "If you have a project that needs care.",
  contactLeadAr: "راسلني عبر النموذج أو واتساب. تصل الرسالة إليّ فورًا.",
  contactLeadEn: "Write through the form or WhatsApp. I get it at once.",
  metaAr: [
    { label: "المقر", value: "يعمل عن بعد" },
    { label: "الحالة", value: "متاح لمشاريع مختارة" },
    { label: "اللغة", value: "العربية · English" },
  ],
  metaEn: [
    { label: "Base", value: "Remote" },
    { label: "Status", value: "Open for chosen work" },
    { label: "Language", value: "Arabic · English" },
  ],
  phone: "01289845911",
  webhooks: { telegram: "", email: "", whatsapp: "", generic: "" },
  projects: [
    {
      id: "p1",
      cat: "web",
      titleAr: "مساحة التعلّم",
      titleEn: "Learn space",
      descAr: "منصة هادئة لعرض الدروس والتجارب البرمجية بواجهة عربية أنيقة.",
      descEn: "A quiet platform for lessons and code experiments in Arabic.",
      url: "",
      image: FALLBACK_IMG,
    },
    {
      id: "p2",
      cat: "ui",
      titleAr: "دفتر الضوء",
      titleEn: "Light notebook",
      descAr: "دراسة بصرية للوضع الليلي المضيء: توهج ذهبي، وحركة خفيفة، وهدوء.",
      descEn: "A visual study of luminous night mode: gold glow, soft motion, quiet.",
      url: "",
      image: FALLBACK_IMG,
    },
    {
      id: "p3",
      cat: "identity",
      titleAr: "بطاقة شخصية",
      titleEn: "Personal mark",
      descAr: "هوية رقمية باسم أمير فايز، تُقدّم الاسم والأعمال دون ضجيج.",
      descEn: "A digital identity for Amir Fayez: name and work, without noise.",
      url: "",
      image: FALLBACK_IMG,
    },
    {
      id: "p4",
      cat: "apps",
      titleAr: "تطبيق الملاحظات",
      titleEn: "Notes app",
      descAr: "تطبيق خفيف لتسجيل الأفكار السريعة أثناء البرمجة.",
      descEn: "A light app for catching ideas while coding.",
      url: "",
      image: FALLBACK_IMG,
    },
  ],
  tools: [
    { id: "t1", icon: "⌘", titleAr: "البرمجة", titleEn: "Code", descAr: "HTML · CSS · JavaScript · Git", descEn: "HTML · CSS · JavaScript · Git" },
    { id: "t2", icon: "◇", titleAr: "التصميم", titleEn: "Design", descAr: "Figma · Typographic layout · Color", descEn: "Figma · Type · Color systems" },
    { id: "t3", icon: "✦", titleAr: "السيت أب", titleEn: "Setup", descAr: "Windows · VS Code · Chrome", descEn: "Windows · VS Code · Chrome" },
    { id: "t4", icon: "◎", titleAr: "العمل", titleEn: "Craft", descAr: "RTL · Dark UI · Motion", descEn: "RTL · Dark UI · Motion" },
  ],
  posts: [
    {
      id: "j1",
      date: "2026-10-22",
      titleAr: "إطلاق المساحة الشخصية",
      titleEn: "The studio goes live",
      bodyAr: "بنيت الموقع ليكون دفترًا حيًا: عربي وإنجليزي، ومشاريع أضيفها بنفسي.",
      bodyEn: "Built the site as a living notebook: Arabic and English, with projects I add myself.",
    },
    {
      id: "j2",
      date: "2026-10-20",
      titleAr: "تحدي الإضاءة الليلية",
      titleEn: "Night light challenge",
      bodyAr: "الوضع الليلي لا يكون مظلمًا فقط. يحتاج توهجًا ذهبيًا خفيفًا كي يبقى حيًا.",
      bodyEn: "Dark mode is not only darkness. It needs a little gold so it stays alive.",
    },
  ],
  messages: [],
};

const $ = (id) => document.getElementById(id);
let lang = localStorage.getItem(KEYS.lang) || "ar";
let filter = "all";
let adminTab = "site";
let editingId = "";

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function site() {
  const stored = read(KEYS.site, null);
  if (stored) return stored;
  write(KEYS.site, DEFAULT_SITE);
  return structuredClone(DEFAULT_SITE);
}

function saveSite(next) {
  write(KEYS.site, next);
}

function ui() {
  return UI[lang];
}

function field(obj, key) {
  return obj[key + (lang === "ar" ? "Ar" : "En")] || obj[key + "Ar"] || obj[key + "En"] || "";
}

function catLabel(id) {
  const cat = CATS.find((c) => c.id === id);
  return cat ? cat[lang] : id;
}

function waNumber(phone) {
  const digits = String(phone || "").replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("20")) return digits;
  if (digits.startsWith("0")) return "20" + digits.slice(1);
  return digits;
}

function waHref(text = "") {
  const n = waNumber(site().phone);
  return `https://wa.me/${n}?text=${encodeURIComponent(text)}`;
}

async function hash(text) {
  const data = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(KEYS.theme, theme);
}

function setLang(next) {
  lang = next;
  localStorage.setItem(KEYS.lang, next);
  document.documentElement.lang = next === "ar" ? "ar" : "en";
  document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  renderAll();
}

function loggedIn() {
  return sessionStorage.getItem(KEYS.session) === "1";
}

function applyI18n() {
  const pack = ui();
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = pack[el.dataset.i18n] || "";
  });
}

function renderPublic() {
  const s = site();
  const pack = ui();
  $("brandMark").textContent = s.mark || "أ";
  $("brandName").textContent = field(s, "name");
  $("brandSub").textContent = lang === "ar" ? s.nameEn : s.nameAr;
  $("heroEyebrow").textContent = field(s, "eyebrow");
  $("heroName").textContent = field(s, "name");
  $("heroTagline").textContent = field(s, "tagline");
  $("heroLede").textContent = field(s, "lede");
  $("aboutTitle").textContent = field(s, "aboutTitle");
  $("aboutP1").textContent = field(s, "aboutP1");
  $("aboutP2").textContent = field(s, "aboutP2");
  $("aboutQuote").textContent = field(s, "quote");
  $("contactTitle").textContent = field(s, "contactTitle");
  $("contactLead").textContent = field(s, "contactLead");
  $("projectCount").textContent = String((s.projects || []).length);
  $("footerCopy").textContent = pack.footer(new Date().getFullYear(), field(s, "name"));
  $("langToggle").textContent = lang === "ar" ? "EN" : "عربي";
  $("emptyNote").textContent = pack.empty;
  $("modalLink").textContent = pack.visit;
  $("phoneLine").textContent = s.phone;
  $("waButton").href = waHref(lang === "ar" ? "مرحبا أمير، تواصلت من موقعك." : "Hi Amir, I found your site.");
  $("heroWhatsapp").href = $("waButton").href;
  $("heroWhatsapp").textContent = `WhatsApp ${s.phone}`;
  $("waButton").textContent = `WhatsApp ${s.phone}`;

  const meta = lang === "ar" ? s.metaAr : s.metaEn;
  $("heroMeta").innerHTML = (meta || [])
    .map((m) => `<li><span>${m.label}</span>${m.value}</li>`)
    .join("");

  applyI18n();
  renderFilters();
  renderProjects();
  renderStack();
  renderJournal();
  $("editBar").hidden = !loggedIn();
}

function renderFilters() {
  const pack = ui();
  const tags = [{ id: "all", label: pack.all }, ...CATS.map((c) => ({ id: c.id, label: c[lang] }))];
  $("filters").innerHTML = tags
    .map((t) => `<button class="filter-btn${filter === t.id ? " active" : ""}" data-tag="${t.id}">${t.label}</button>`)
    .join("");
}

function renderProjects() {
  const s = site();
  const list = (s.projects || []).filter((p) => filter === "all" || p.cat === filter);
  $("emptyNote").hidden = list.length > 0;
  $("projectGrid").innerHTML = list
    .map(
      (p) => `
      <article class="project-card" data-id="${p.id}">
        <img src="${p.image || FALLBACK_IMG}" alt="" />
        <div class="body">
          <p class="eyebrow">${catLabel(p.cat)}</p>
          <h3>${field(p, "title")}</h3>
          <p>${field(p, "desc")}</p>
        </div>
      </article>`
    )
    .join("");
}

function renderStack() {
  const s = site();
  $("stackGrid").innerHTML = (s.tools || [])
    .map(
      (t) => `
      <article class="stack-card" tabindex="0">
        <span class="stack-icon">${t.icon || "●"}</span>
        <h3>${field(t, "title")}</h3>
        <p>${field(t, "desc")}</p>
      </article>`
    )
    .join("");
}

function renderJournal() {
  const s = site();
  $("timeline").innerHTML = (s.posts || [])
    .map(
      (p) => `
      <article class="time-item">
        <time>${p.date}</time>
        <h3>${field(p, "title")}</h3>
        <p>${field(p, "body")}</p>
      </article>`
    )
    .join("");
}

function openProject(id) {
  const p = site().projects.find((item) => item.id === id);
  if (!p) return;
  $("modalImage").src = p.image || FALLBACK_IMG;
  $("modalTag").textContent = catLabel(p.cat);
  $("modalTitle").textContent = field(p, "title");
  $("modalDesc").textContent = field(p, "desc");
  const link = $("modalLink");
  if (p.url) {
    link.hidden = false;
    link.href = p.url;
  } else {
    link.hidden = true;
  }
  $("projectModal").hidden = false;
}

function compressImage(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const max = 1100;
        const scale = Math.min(1, max / img.width);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function val(form, name) {
  return form.querySelector(`[name="${name}"]`)?.value?.trim() || "";
}

function renderAdmin() {
  const pack = ui();
  const tabs = pack.tabs;
  $("adminTabs").innerHTML = Object.entries(tabs)
    .map(([id, label]) => `<button type="button" class="tab${adminTab === id ? " active" : ""}" data-tab="${id}">${label}</button>`)
    .join("");
  const pane = $("adminPane");
  const s = site();
  if (adminTab === "site") {
    pane.innerHTML = `
      <form id="siteForm" class="admin-form">
        <div class="two">
          <label>الاسم عربي<input name="nameAr" value="${esc(s.nameAr)}" /></label>
          <label>Name EN<input name="nameEn" value="${esc(s.nameEn)}" /></label>
        </div>
        <label>الرمز<input name="mark" value="${esc(s.mark)}" /></label>
        <div class="two">
          <label>العنوان الفرعي عربي<input name="eyebrowAr" value="${esc(s.eyebrowAr)}" /></label>
          <label>Eyebrow EN<input name="eyebrowEn" value="${esc(s.eyebrowEn)}" /></label>
        </div>
        <div class="two">
          <label>الجملة الذهبية عربي<textarea name="taglineAr">${esc(s.taglineAr)}</textarea></label>
          <label>Tagline EN<textarea name="taglineEn">${esc(s.taglineEn)}</textarea></label>
        </div>
        <div class="two">
          <label>المقدمة عربي<textarea name="ledeAr">${esc(s.ledeAr)}</textarea></label>
          <label>Intro EN<textarea name="ledeEn">${esc(s.ledeEn)}</textarea></label>
        </div>
        <div class="two">
          <label>عنوان من أنا عربي<textarea name="aboutTitleAr">${esc(s.aboutTitleAr)}</textarea></label>
          <label>About title EN<textarea name="aboutTitleEn">${esc(s.aboutTitleEn)}</textarea></label>
        </div>
        <div class="two">
          <label>فقرة 1 عربي<textarea name="aboutP1Ar">${esc(s.aboutP1Ar)}</textarea></label>
          <label>Paragraph 1 EN<textarea name="aboutP1En">${esc(s.aboutP1En)}</textarea></label>
        </div>
        <div class="two">
          <label>فقرة 2 عربي<textarea name="aboutP2Ar">${esc(s.aboutP2Ar)}</textarea></label>
          <label>Paragraph 2 EN<textarea name="aboutP2En">${esc(s.aboutP2En)}</textarea></label>
        </div>
        <div class="two">
          <label>اقتباس عربي<textarea name="quoteAr">${esc(s.quoteAr)}</textarea></label>
          <label>Quote EN<textarea name="quoteEn">${esc(s.quoteEn)}</textarea></label>
        </div>
        <div class="two">
          <label>تواصل عربي<textarea name="contactTitleAr">${esc(s.contactTitleAr)}</textarea></label>
          <label>Contact title EN<textarea name="contactTitleEn">${esc(s.contactTitleEn)}</textarea></label>
        </div>
        <div class="two">
          <label>وصف التواصل عربي<textarea name="contactLeadAr">${esc(s.contactLeadAr)}</textarea></label>
          <label>Contact lead EN<textarea name="contactLeadEn">${esc(s.contactLeadEn)}</textarea></label>
        </div>
        <button class="btn btn-gold" type="submit">حفظ النصوص</button>
      </form>`;
    $("siteForm").onsubmit = (e) => {
      e.preventDefault();
      const f = e.currentTarget;
      const next = { ...site() };
      [
        "nameAr",
        "nameEn",
        "mark",
        "eyebrowAr",
        "eyebrowEn",
        "taglineAr",
        "taglineEn",
        "ledeAr",
        "ledeEn",
        "aboutTitleAr",
        "aboutTitleEn",
        "aboutP1Ar",
        "aboutP1En",
        "aboutP2Ar",
        "aboutP2En",
        "quoteAr",
        "quoteEn",
        "contactTitleAr",
        "contactTitleEn",
        "contactLeadAr",
        "contactLeadEn",
      ].forEach((k) => (next[k] = val(f, k)));
      saveSite(next);
      renderAll();
    };
  } else if (adminTab === "projects") {
    pane.innerHTML = `
      <form id="projectForm" class="admin-form">
        <div class="two">
          <label>عنوان عربي<input name="titleAr" required /></label>
          <label>Title EN<input name="titleEn" required /></label>
        </div>
        <label>التصنيف
          <select name="cat">${CATS.map((c) => `<option value="${c.id}">${c.ar} / ${c.en}</option>`).join("")}</select>
        </label>
        <div class="two">
          <label>وصف عربي<textarea name="descAr" required></textarea></label>
          <label>Description EN<textarea name="descEn" required></textarea></label>
        </div>
        <label>الرابط<input name="url" dir="ltr" /></label>
        <label>صورة<input name="image" type="file" accept="image/*" /></label>
        <input type="hidden" name="editId" />
        <button class="btn btn-gold" type="submit">حفظ المشروع</button>
      </form>
      <div class="admin-list" id="adminList"></div>`;
    const list = $("adminList");
    list.innerHTML = s.projects
      .map(
        (p) => `
        <div class="admin-item">
          <div><strong>${p.titleAr}</strong><br /><small>${catLabel(p.cat)}</small></div>
          <div class="admin-row">
            <button class="btn btn-ghost" data-edit="${p.id}" type="button">تعديل</button>
            <button class="danger" data-del="${p.id}" type="button">حذف</button>
          </div>
        </div>`
      )
      .join("");
    $("projectForm").onsubmit = async (e) => {
      e.preventDefault();
      const f = e.currentTarget;
      const file = f.image.files[0];
      const current = site();
      const editId = val(f, "editId");
      let image = FALLBACK_IMG;
      if (editId) {
        const old = current.projects.find((p) => p.id === editId);
        image = old?.image || FALLBACK_IMG;
      }
      if (file) image = await compressImage(file);
      const item = {
        id: editId || crypto.randomUUID(),
        cat: val(f, "cat"),
        titleAr: val(f, "titleAr"),
        titleEn: val(f, "titleEn"),
        descAr: val(f, "descAr"),
        descEn: val(f, "descEn"),
        url: val(f, "url"),
        image,
      };
      const projects = editId
        ? current.projects.map((p) => (p.id === editId ? item : p))
        : [item, ...current.projects];
      saveSite({ ...current, projects });
      f.reset();
      editingId = "";
      renderAll();
      renderAdmin();
    };
    list.onclick = (e) => {
      const del = e.target.dataset.del;
      const edit = e.target.dataset.edit;
      if (del) {
        const current = site();
        saveSite({ ...current, projects: current.projects.filter((p) => p.id !== del) });
        renderAll();
        renderAdmin();
      }
      if (edit) {
        const p = site().projects.find((x) => x.id === edit);
        const f = $("projectForm");
        f.titleAr.value = p.titleAr;
        f.titleEn.value = p.titleEn;
        f.descAr.value = p.descAr;
        f.descEn.value = p.descEn;
        f.url.value = p.url || "";
        f.cat.value = p.cat;
        f.editId.value = p.id;
      }
    };
  } else if (adminTab === "stack") {
    pane.innerHTML = `
      <form id="toolForm" class="admin-form">
        <label>أيقونة<input name="icon" placeholder="⌘" /></label>
        <div class="two">
          <label>عنوان عربي<input name="titleAr" required /></label>
          <label>Title EN<input name="titleEn" required /></label>
        </div>
        <div class="two">
          <label>تفاصيل عربي<textarea name="descAr" required></textarea></label>
          <label>Details EN<textarea name="descEn" required></textarea></label>
        </div>
        <input type="hidden" name="editId" />
        <button class="btn btn-gold" type="submit">حفظ الأداة</button>
      </form>
      <div class="admin-list" id="toolList"></div>`;
    bindSimpleList("tools", "toolForm", "toolList", ["icon", "titleAr", "titleEn", "descAr", "descEn"]);
  } else if (adminTab === "journal") {
    pane.innerHTML = `
      <form id="postForm" class="admin-form">
        <label>التاريخ<input name="date" type="date" required /></label>
        <div class="two">
          <label>عنوان عربي<input name="titleAr" required /></label>
          <label>Title EN<input name="titleEn" required /></label>
        </div>
        <div class="two">
          <label>النص عربي<textarea name="bodyAr" required></textarea></label>
          <label>Body EN<textarea name="bodyEn" required></textarea></label>
        </div>
        <input type="hidden" name="editId" />
        <button class="btn btn-gold" type="submit">نشر اللقطة</button>
      </form>
      <div class="admin-list" id="postList"></div>`;
    bindSimpleList("posts", "postForm", "postList", ["date", "titleAr", "titleEn", "bodyAr", "bodyEn"]);
  } else if (adminTab === "contact") {
    pane.innerHTML = `
      <form id="hookForm" class="admin-form">
        <label>رقم الواتساب<input name="phone" value="${esc(s.phone)}" dir="ltr" /></label>
        <p class="auth-hint">ضع روابط التنبيه الفوري. اترك الفارغ إن لم تستخدمه.</p>
        <label>Telegram webhook / Bot URL<input name="telegram" value="${esc(s.webhooks.telegram)}" dir="ltr" placeholder="https://api.telegram.org/bot.../sendMessage?chat_id=..." /></label>
        <label>Email webhook (Formspree / Web3Forms)<input name="email" value="${esc(s.webhooks.email)}" dir="ltr" placeholder="https://formspree.io/f/xxxx" /></label>
        <label>WhatsApp webhook (CallMeBot أو أي رابط)<input name="whatsapp" value="${esc(s.webhooks.whatsapp)}" dir="ltr" /></label>
        <label>Webhook عام<input name="generic" value="${esc(s.webhooks.generic)}" dir="ltr" /></label>
        <button class="btn btn-gold" type="submit">حفظ التواصل</button>
        <button class="btn btn-ghost" id="exportBtn" type="button">تصدير نسخة</button>
        <label>استيراد نسخة<input id="importFile" type="file" accept="application/json" /></label>
      </form>`;
    $("hookForm").onsubmit = (e) => {
      e.preventDefault();
      const f = e.currentTarget;
      saveSite({
        ...site(),
        phone: val(f, "phone"),
        webhooks: {
          telegram: val(f, "telegram"),
          email: val(f, "email"),
          whatsapp: val(f, "whatsapp"),
          generic: val(f, "generic"),
        },
      });
      renderAll();
    };
    $("exportBtn").onclick = () => {
      const blob = new Blob([JSON.stringify(site(), null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "amir-fayez-site.json";
      a.click();
    };
    $("importFile").onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const data = JSON.parse(await file.text());
      saveSite({ ...DEFAULT_SITE, ...data });
      renderAll();
      renderAdmin();
    };
  } else {
    const inbox = s.messages || [];
    pane.innerHTML = inbox.length
      ? `<div class="inbox">${inbox
          .map(
            (m) => `<article><div><strong>${esc(m.name)}</strong> · ${esc(m.email)}<p>${esc(m.message)}</p><small>${m.at || ""}</small></div></article>`
          )
          .join("")}</div>`
      : `<p class="auth-hint">لا رسائل بعد.</p>`;
  }
}

function bindSimpleList(key, formId, listId, fields) {
  const s = site();
  const list = $(listId);
  list.innerHTML = (s[key] || [])
    .map(
      (item) => `
      <div class="admin-item">
        <div><strong>${item.titleAr}</strong></div>
        <div class="admin-row">
          <button class="btn btn-ghost" data-edit="${item.id}" type="button">تعديل</button>
          <button class="danger" data-del="${item.id}" type="button">حذف</button>
        </div>
      </div>`
    )
    .join("");
  $(formId).onsubmit = (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    const current = site();
    const editId = val(f, "editId");
    const item = { id: editId || crypto.randomUUID() };
    fields.forEach((name) => (item[name] = val(f, name)));
    const arr = current[key] || [];
    const nextArr = editId ? arr.map((x) => (x.id === editId ? item : x)) : [item, ...arr];
    saveSite({ ...current, [key]: nextArr });
    f.reset();
    renderAll();
    renderAdmin();
  };
  list.onclick = (e) => {
    const del = e.target.dataset.del;
    const edit = e.target.dataset.edit;
    if (del) {
      const current = site();
      saveSite({ ...current, [key]: current[key].filter((x) => x.id !== del) });
      renderAll();
      renderAdmin();
    }
    if (edit) {
      const item = site()[key].find((x) => x.id === edit);
      const f = $(formId);
      fields.forEach((name) => {
        if (f[name]) f[name].value = item[name] || "";
      });
      f.editId.value = item.id;
    }
  };
}

function esc(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

async function notify(msg) {
  const s = site();
  const text = `رسالة جديدة من ${msg.name}\n${msg.email}\n${msg.phone || s.phone}\n${msg.message}`;
  const payload = { ...msg, phone: s.phone, source: "amir-fayez" };
  const jobs = [];
  const { telegram, email, whatsapp, generic } = s.webhooks || {};
  if (telegram) {
    const url = telegram.includes("text=") ? telegram : `${telegram}${telegram.includes("?") ? "&" : "?"}text=${encodeURIComponent(text)}`;
    jobs.push(fetch(url, { mode: "no-cors" }).catch(() => null));
  }
  if (whatsapp) {
    const url = whatsapp.includes("text=") ? whatsapp : `${whatsapp}${whatsapp.includes("?") ? "&" : "?"}text=${encodeURIComponent(text)}`;
    jobs.push(fetch(url, { mode: "no-cors" }).catch(() => null));
  }
  if (email) {
    jobs.push(
      fetch(email, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
        mode: "no-cors",
      }).catch(() => null)
    );
  }
  if (generic) {
    jobs.push(
      fetch(generic, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        mode: "no-cors",
      }).catch(() => null)
    );
  }
  await Promise.all(jobs);
}

function showAdmin() {
  $("adminModal").hidden = false;
  const hasPass = Boolean(localStorage.getItem(KEYS.pass));
  if (loggedIn()) {
    $("authView").hidden = true;
    $("dashView").hidden = false;
    renderAdmin();
    $("editBar").hidden = false;
    return;
  }
  $("authView").hidden = false;
  $("dashView").hidden = true;
  $("authPass2Wrap").hidden = hasPass;
  $("authTitle").textContent = hasPass ? ui().authTitleOld : ui().authTitleNew;
  $("authHint").textContent = hasPass ? ui().authOld : ui().authNew;
}

function renderAll() {
  renderPublic();
}

function initTheme() {
  const saved = localStorage.getItem(KEYS.theme);
  const theme = saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  setTheme(theme);
}

initTheme();
setLang(lang);

$("themeToggle").addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  setTheme(next);
});

$("langToggle").addEventListener("click", () => setLang(lang === "ar" ? "en" : "ar"));

$("filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  filter = btn.dataset.tag;
  renderFilters();
  renderProjects();
});

$("projectGrid").addEventListener("click", (e) => {
  const card = e.target.closest(".project-card");
  if (card) openProject(card.dataset.id);
});

document.querySelectorAll("[data-close]").forEach((btn) => {
  btn.addEventListener("click", () => $(btn.dataset.close).hidden = true);
});

["projectModal", "adminModal"].forEach((id) => {
  $(id).addEventListener("click", (e) => {
    if (e.target.id === id) $(id).hidden = true;
  });
});

$("adminOpen").addEventListener("click", showAdmin);
$("openEditor").addEventListener("click", showAdmin);

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "a") {
    e.preventDefault();
    showAdmin();
  }
});

$("authForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const pass = $("authPass").value.trim();
  const stored = localStorage.getItem(KEYS.pass);
  const hashed = await hash(pass);
  if (!stored) {
    const again = $("authPass2").value.trim();
    if (pass.length < 4 || pass !== again) {
      $("authStatus").textContent = lang === "ar" ? "كلمة المرور غير متطابقة أو قصيرة." : "Password mismatch or too short.";
      return;
    }
    localStorage.setItem(KEYS.pass, hashed);
  } else if (hashed !== stored) {
    $("authStatus").textContent = lang === "ar" ? "كلمة المرور غير صحيحة." : "Wrong password.";
    return;
  }
  sessionStorage.setItem(KEYS.session, "1");
  $("authForm").reset();
  showAdmin();
  renderAll();
});

$("logoutBtn").addEventListener("click", () => {
  sessionStorage.removeItem(KEYS.session);
  $("adminModal").hidden = true;
  $("editBar").hidden = true;
});

$("adminTabs").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-tab]");
  if (!btn) return;
  adminTab = btn.dataset.tab;
  renderAdmin();
});

$("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const msg = {
    name: String(data.get("name") || "").trim(),
    email: String(data.get("email") || "").trim(),
    message: String(data.get("message") || "").trim(),
    at: new Date().toISOString(),
  };
  const current = site();
  saveSite({ ...current, messages: [msg, ...(current.messages || [])] });
  $("formStatus").textContent = ui().sent;
  e.currentTarget.reset();
  await notify(msg);
});

window.addEventListener("pointermove", (e) => {
  document.querySelector(".cursor-glow").style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
