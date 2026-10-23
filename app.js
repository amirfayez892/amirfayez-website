
const KEYS = {
  theme: "af-theme",
  lang: "af-lang",
  pass: "af-pass",
  site: "af-site-v2",
  session: "af-session",
};

// كلمة المرور الخاصة بك للوحة التحكم (يمكنك تعديلها هنا)
const ADMIN_PASSWORD_HASH = "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918"; // كلمة المرور الافتراضية: admin (يمكنك تغييرها)

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
    btnLogin: "دخول",
    dashEyebrow: "لوحة أمير",
    dashTitle: "عدّل كل شيء بسهولة",
    btnLogout: "خروج",
    all: "الكل",
    empty: "لا توجد مشاريع في هذا التصنيف بعد.",
    visit: "زيارة المشروع",
    sent: "وصلت الرسالة، وتم إرسال التنبيه.",
    authOld: "هذه اللوحة لك وحدك. منها تعدّل النصوص والمشاريع والأدوات واليوميات.",
    authTitleOld: "دخول أمير فقط",
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
    btnLogin: "Enter",
    dashEyebrow: "Amir studio",
    dashTitle: "Edit everything easily",
    btnLogout: "Leave",
    all: "All",
    empty: "No projects in this category yet.",
    visit: "Visit project",
    sent: "Message received, and the alert was sent.",
    authOld: "This panel is yours. Edit copy, projects, tools, and the journal.",
    authTitleOld: "Amir only",
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

// تشغيل وتحديث العرض عند التحميل
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem(KEYS.theme) || "dark";
  setTheme(savedTheme);
  document.documentElement.lang = lang === "ar" ? "ar" : "en";
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  renderAll();
  initEvents();
});

function renderAll() {
  const s = site();
  const u = ui();

  // النصوص الثابتة
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n");
    if (u[k]) el.textContent = u[k];
  });

  $("brandMark").textContent = s.mark;
  $("brandName").textContent = s.nameAr;
  $("brandSub").textContent = s.nameEn;
  $("langToggle").textContent = lang === "ar" ? "EN" : "العربية";

  $("heroEyebrow").textContent = field(s, "eyebrow");
  $("heroName").textContent = field(s, "name");
  $("heroTagline").textContent = field(s, "tagline");
  $("heroLede").textContent = field(s, "lede");

  $("heroWhatsapp").href = waHref("مرحباً أمير، تواصلت معك من موقعك الشخصي.");
  $("waButton").href = waHref("مرحباً أمير، أرغب بمناقشة مشروع معك.");

  // الميتا
  const metaList = lang === "ar" ? s.metaAr : s.metaEn;
  $("heroMeta").innerHTML = metaList
    .map((m) => `<li><span>${m.label}</span><strong>${m.value}</strong></li>`)
    .join("");

  // قسم عني
  $("aboutTitle").textContent = field(s, "aboutTitle");
  $("aboutP1").textContent = field(s, "aboutP1");
  $("aboutP2").textContent = field(s, "aboutP2");
  $("aboutQuote").textContent = field(s, "quote");
  $("projectCount").textContent = s.projects.length;

  // التواصل
  $("contactTitle").textContent = field(s, "contactTitle");
  $("contactLead").textContent = field(s, "contactLead");
  $("phoneLine").textContent = s.phone;

  // الفلاتر والمشاريع
  renderFilters();
  renderProjects();
  renderStack();
  renderJournal();

  $("footerCopy").textContent = u.footer(new Date().getFullYear(), s.nameAr);

  // شريط التعديل يظهر فقط إذا كنت مسجلاً الدخول
  if (loggedIn()) {
    $("editBar").hidden = false;
  } else {
    $("editBar").hidden = true;
  }
}

function renderFilters() {
  const u = ui();
  let html = `<button class="filter-btn ${filter === "all" ? "active" : ""}" data-cat="all">${u.all}</button>`;
  CATS.forEach((c) => {
    html += `<button class="filter-btn ${filter === c.id ? "active" : ""}" data-cat="${c.id}">${c[lang]}</button>`;
  });
  $("filters").innerHTML = html;

  $("filters").querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      filter = btn.getAttribute("data-cat");
      renderFilters();
      renderProjects();
    });
  });
}

function renderProjects() {
  const s = site();
  const u = ui();
  const list = filter === "all" ? s.projects : s.projects.filter((p) => p.cat === filter);

  if (list.length === 0) {
    $("projectGrid").innerHTML = "";
    $("emptyNote").hidden = false;
    $("emptyNote").textContent = u.empty;
    return;
  }

  $("emptyNote").hidden = true;
  $("projectGrid").innerHTML = list
    .map(
      (p) => `
    <article class="project-card" data-id="${p.id}">
      <img src="${p.image || FALLBACK_IMG}" alt="${field(p, "title")}" />
      <div class="body">
        <p class="eyebrow">${catLabel(p.cat)}</p>
        <h3>${field(p, "title")}</h3>
        <p>${field(p, "desc")}</p>
      </div>
    </article>`
    )
    .join("");

  $("projectGrid").querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      const p = s.projects.find((x) => x.id === id);
      if (p) openProjectModal(p);
    });
  });
}

function openProjectModal(p) {
  const u = ui();
  $("modalImage").src = p.image || FALLBACK_IMG;
  $("modalTag").textContent = catLabel(p.cat);
  $("modalTitle").textContent = field(p, "title");
  $("modalDesc").textContent = field(p, "desc");

  const link = $("modalLink");
  if (p.url) {
    link.href = p.url;
    link.textContent = u.visit;
    link.hidden = false;
  } else {
    link.hidden = true;
  }

  $("projectModal").hidden = false;
}

function renderStack() {
  const s = site();
  $("stackGrid").innerHTML = s.tools
    .map(
      (t) => `
    <div class="stack-card">
      <span class="stack-icon">${t.icon || "⌘"}</span>
      <h3>${field(t, "title")}</h3>
      <p>${field(t, "desc")}</p>
    </div>`
    )
    .join("");
}

function renderJournal() {
  const s = site();
  $("timeline").innerHTML = s.posts
    .map(
      (j) => `
    <article class="time-item">
      <time>${j.date}</time>
      <h3>${field(j, "title")}</h3>
      <p>${field(j, "body")}</p>
    </article>`
    )
    .join("");
}

function initEvents() {
  // تبديل اللغة
  $("langToggle").addEventListener("click", () => {
    setLang(lang === "ar" ? "en" : "ar");
  });

  // تبديل المظهر
  $("themeToggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });

  // فتح وإغلاق المودالز
  $("adminOpen").addEventListener("click", () => {
    openAdminModal();
  });

  $("openEditor").addEventListener("click", () => {
    openAdminModal();
  });

  document.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-close");
      $(id).hidden = true;
    });
  });

  // نموذج التواصل
  $("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const msg = {
      id: "m_" + Date.now(),
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
      date: new Date().toISOString().split("T")[0],
    };

    const s = site();
    s.messages.unshift(msg);
    saveSite(s);

    $("formStatus").textContent = ui().sent;
    e.target.reset();
  });

  // نموذج تسجيل الدخول الخاص بك فقط
  $("authForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const passInput = $("authPass").value;
    const inputHash = await hash(passInput);

    if (inputHash === ADMIN_PASSWORD_HASH) {
      sessionStorage.setItem(KEYS.session, "1");
      $("authStatus").textContent = "";
      $("authView").hidden = true;
      $("dashView").hidden = false;
      renderDashboard();
      $("editBar").hidden = false;
    } else {
      $("authStatus").textContent = lang === "ar" ? "كلمة المرور غير صحيحة" : "Incorrect password";
    }
  });

  $("logoutBtn").addEventListener("click", () => {
    sessionStorage.removeItem(KEYS.session);
    $("adminModal").hidden = true;
    $("editBar").hidden = true;
  });
}

function openAdminModal() {
  $("authPass").value = "";
  $("authStatus").textContent = "";

  if (loggedIn()) {
    $("authView").hidden = true;
    $("dashView").hidden = false;
    renderDashboard();
  } else {
    $("authView").hidden = false;
    $("dashView").hidden = true;
    $("authTitle").textContent = ui().authTitleOld;
    $("authHint").textContent = ui().authOld;
  }
  $("adminModal").hidden = false;
}

function renderDashboard() {
  const tabs = ui().tabs;
  let html = "";
  for (const k in tabs) {
    html += `<button class="tab ${adminTab === k ? "active" : ""}" data-tab="${k}">${tabs[k]}</button>`;
  }
  $("adminTabs").innerHTML = html;

  $("adminTabs").querySelectorAll(".tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      adminTab = btn.getAttribute("data-tab");
      renderDashboard();
    });
  });

  renderAdminPane();
}

function renderAdminPane() {
  const pane = $("adminPane");
  const s = site();

  if (adminTab === "site") {
    pane.innerHTML = `
      <form id="siteEditForm" class="admin-form">
        <label>الاسم (عربي)<input name="nameAr" value="${s.nameAr}" /></label>
        <label>الاسم (إنجليزي)<input name="nameEn" value="${s.nameEn}" /></label>
        <label>العنوان الترويجي (عربي)<input name="taglineAr" value="${s.taglineAr}" /></label>
        <label>رقم الواتساب<input name="phone" value="${s.phone}" /></label>
        <button class="btn btn-gold" type="submit">حفظ التغييرات</button>
      </form>`;

    $("siteEditForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      s.nameAr = fd.get("nameAr");
      s.nameEn = fd.get("nameEn");
      s.taglineAr = fd.get("taglineAr");
      s.phone = fd.get("phone");
      saveSite(s);
      renderAll();
      alert("تم الحفظ بنجاح!");
    });
  } else if (adminTab === "projects") {
    pane.innerHTML = `
      <div class="admin-list">
        ${s.projects
          .map(
            (p) => `
          <div class="admin-item">
            <span><strong>${p.titleAr}</strong> (${catLabel(p.cat)})</span>
            <button class="danger" onclick="deleteProject('${p.id}')">حذف</button>
          </div>`
          )
          .join("")}
      </div>`;
  } else if (adminTab === "inbox") {
    pane.innerHTML = `
      <div class="inbox">
        ${
          s.messages.length === 0
            , s.messages.length === 0 ? "<p>لا توجد رسائل جديدة.</p>" : s.messages.map(m => `
              <article>
                <div><strong>${m.name}</strong> (${m.email})<p>${m.message}</p></div>
                <small>${m.date}</small>
              </article>`).join("")
        }
      </div>`;
  } else {
    pane.innerHTML = `<p>قريباً...</p>`;
  }
}

function deleteProject(id) {
  const s = site();
  s.projects = s.projects.filter((p) => p.id !== id);
  saveSite(s);
  renderDashboard();
  renderAll();
}
