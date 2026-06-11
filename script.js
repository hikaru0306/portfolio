/* ==========================================================
   Portfolio bootstrap
   1) data.js から PORTFOLIO_DATA を取り出して DOM を組み立てる
   2) その後にスプラッシュ／スクロール監視／モーダル等の処理を起動
   ========================================================== */

document.documentElement.classList.add("js");

const D = window.PORTFOLIO_DATA || {};

/* ---- helpers ---- */
const esc = (s) => String(s == null ? "" : s)
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");

// HTML を許可するフィールド用（&mdash; 等のエンティティを通す）
const raw = (s) => (s == null ? "" : String(s));

const setHTML = (id, html) => {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
};

/* ============ 1. ヘッダー / スプラッシュ / フッター ============ */
function renderShell() {
  if (D.logo) setHTML("logo", esc(D.logo));

  if (Array.isArray(D.nav)) {
    setHTML("nav", D.nav.map(n => `<a href="${esc(n.href)}">${esc(n.text)}</a>`).join(""));
  }

  if (D.splash) {
    const t = D.splash.text || "";
    const splashTextEl = document.getElementById("splashText");
    if (splashTextEl) {
      splashTextEl.textContent = t;
      splashTextEl.setAttribute("data-text", t);
    }
    setHTML("splashSub", raw(D.splash.sub));
  }

  if (D.footer) setHTML("footerName", esc(D.footer.name));
}

/* ============ 2. ヒーロー ============ */
function renderHero() {
  if (!D.hero) return;
  const h = D.hero;
  const subLines = (h.sub || []).map(esc).join("<br>");
  const actions = (h.actions || []).map(a =>
    `<a class="btn${a.primary ? "" : " btn--secondary"}" href="${esc(a.href)}">${esc(a.text)}</a>`
  ).join("");
  setHTML("hero", `
    <p class="hero__label fade-in">${esc(h.label || "")}</p>
    <h1 class="hero__title fade-in">
      ${esc(h.title || "")}${h.year ? ` <span class="hero__year">${esc(h.year)}</span>` : ""}
    </h1>
    ${h.name ? `<p class="hero__name fade-in">${raw(h.name)}</p>` : ""}
    <p class="hero__sub fade-in">${subLines}</p>
    <div class="hero__actions fade-in">${actions}</div>
  `);
}

/* ============ 3. 仕事での実績 ============ */
function renderTimelineItem(it) {
  const tags = (it.tags || []).map(t =>
    `<span class="tl-tag tl-tag--${esc(t.kind)}">${esc(t.text)}</span>`
  ).join("");
  const items = (it.items || []).map(li => `<li>${esc(li)}</li>`).join("");
  const hasImage = !!it.image;
  const linkAttr = it.link ? ` href="${esc(it.link.href)}" target="_blank" rel="noreferrer"` : "";
  const titleTag = it.link ? "a" : "span";
  const titleInnerClass = it.link ? ` class="tl-title__link"` : "";
  const imageInner = `<img src="${esc(it.image)}" alt="${esc(it.imageAlt || it.title || "")}" loading="lazy" />`;
  const imageBlock = hasImage
    ? (it.link
        ? `<a class="tl-image"${linkAttr}>${imageInner}</a>`
        : `<div class="tl-image">${imageInner}</div>`)
    : "";
  const linkChip = it.link
    ? `<a class="tl-link"${linkAttr}>${esc(it.link.text)} ↗</a>`
    : "";
  const metaRow = (tags || linkChip)
    ? `<div class="tl-meta"><div class="tl-tags">${tags}</div>${linkChip}</div>`
    : "";
  return `
    <div class="tl-item fade-in${hasImage ? " tl-item--has-image" : ""}">
      <div class="tl-body">
        <div class="tl-head">
          <span class="tl-badge">${esc(it.badge)}</span>
          <div>
            <h4 class="tl-title">
              <${titleTag}${titleInnerClass}${linkAttr}>${esc(it.title)}</${titleTag}>
            </h4>
            ${metaRow}
          </div>
        </div>
        <ul class="tl-list">${items}</ul>
      </div>
      ${imageBlock}
    </div>`;
}

function renderWorks() {
  if (!D.works) return;
  const w = D.works;
  const f = w.feature || {};

  const strengths = (f.strengths || []).map(s => `
    <div class="strength">
      <span class="strength__num">${esc(s.num)}</span>
      <span class="strength__text">${esc(s.text)}</span>
    </div>`).join("");

  const desc = (Array.isArray(f.desc) ? f.desc : [f.desc || ""]).map(esc).join("<br>");

  const overview = f.overview
    ? `<div class="feature-card__overview">
         <h4 class="feature-card__overview-title">ゲーム概要</h4>
         <p class="feature-card__overview-text">${(Array.isArray(f.overview) ? f.overview : [f.overview]).map(esc).join("<br>")}</p>
       </div>`
    : "";

  const focus = f.focus
    ? `<div class="feature-card__focus">
         <h4 class="feature-card__focus-title">${esc(f.focus.title || "意識したこと / こだわったこと")}</h4>
         <div class="focus-groups">
           ${(f.focus.groups || []).map(g => `
             <div class="focus-group">
               <h5 class="focus-group__heading">${esc(g.heading)}</h5>
               <ul class="focus-group__list">${(g.items || []).map(it => `<li>${esc(it)}</li>`).join("")}</ul>
             </div>`).join("")}
         </div>
       </div>`
    : "";

  const officialLink = f.officialLink
    ? ` <a class="official-link" href="${esc(f.officialLink.href)}" target="_blank" rel="noreferrer">${esc(f.officialLink.text)} ↗</a>`
    : "";

  const paid = (w.paidDLC || []).map(renderTimelineItem).join("");
  const free = (w.freeUpdates || []).map(renderTimelineItem).join("");

  const growth = w.growth ? `
    <div class="growth fade-in">
      <h4 class="growth__title">${esc(w.growth.title)}</h4>
      <div class="growth__track">
        ${(w.growth.steps || []).map(s => `
          <div class="growth__step">
            <span class="growth__label">${esc(s.label)}</span>
            <div class="growth__bar" style="--w:${Number(s.width) || 0}%">
              ${(s.items || []).map(i => `<span>${esc(i)}</span>`).join("")}
            </div>
          </div>`).join("")}
      </div>
    </div>` : "";

  setHTML("worksWrap", `
    <h2 class="sect__title fade-in">${esc(w.sectionTitle || "")}</h2>

    <div class="feature-card fade-in">
      <div class="feature-card__visual">
        <img src="${esc(f.image)}" alt="${esc(f.imageAlt || "")}" class="feature-card__img" />
      </div>
      <div class="feature-card__info">
        <span class="tag">${esc(f.tag || "")}</span>
        <h3 class="feature-card__title">${esc(f.title || "")}${officialLink}</h3>
        ${overview}
        <p class="feature-card__desc">${desc}</p>
        <div class="strengths">${strengths}</div>
      </div>
    </div>

    <h3 class="sub-heading fade-in">${esc(w.paidHeading || "")}</h3>
    <div class="timeline">${paid}</div>

    <h3 class="sub-heading fade-in" style="margin-top:48px;">${esc(w.freeHeading || "")}</h3>
    <p class="timeline-note fade-in">${esc(w.freeNote || "")}</p>
    <div class="timeline">${free}</div>

    ${growth}

    ${focus}
  `);
}

/* ============ 4. プロジェクト（自主／学生 共通） ============ */
function renderProjectIntent(intent) {
  if (!intent) return "";
  const items = (intent.items || []).map(it => `<li>${esc(it)}</li>`).join("");
  return `
    <div class="project__intent">
      <h4 class="project__intent-title">${esc(intent.title || "制作意図と狙い")}</h4>
      <ul class="project__intent-list">${items}</ul>
    </div>`;
}

function renderProjectExtra(r) {
  if (!r) return "";
  const leadHtml = r.lead ? `<p class="project__lead">${esc(r.lead)}</p>` : "";
  const intentHtml = renderProjectIntent(r.intent);
  if (r.type === "lead-kvs") {
    const kvs = (r.kvs || []).map(k => `
      <div class="kv"><dt>${esc(k.dt)}</dt><dd>${esc(k.dd)}</dd></div>`).join("");
    return `${leadHtml}<div class="kv-list">${kvs}</div>${intentHtml}`;
  }
  if (r.type === "lead") return `${leadHtml}${intentHtml}`;
  return intentHtml;
}

function renderProjectRight(r) {
  if (!r) return "";
  if (r.videoLocal) {
    const orientCls = r.videoOrientation === "landscape" ? " video--local-land" : "";
    return `
      <div class="video video--local${orientCls}">
        <video src="${esc(r.videoLocal)}" controls preload="metadata" playsinline${r.poster ? ` poster="${esc(r.poster)}"` : ""}></video>
      </div>`;
  }
  switch (r.type) {
    case "video":
      return `
        <div class="video">
          <iframe src="${esc(r.src)}" title="${esc(r.title || "")}" loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>`;
    case "iframe": {
      const styleAttr = r.style ? ` style="${esc(r.style)}"` : "";
      const allowAttr = r.allow ? ` allow="${esc(r.allow)}"` : "";
      const cap = r.caption ? `<p class="caption">${esc(r.caption)}</p>` : "";
      return `
        <div class="video">
          <iframe src="${esc(r.src)}" title="${esc(r.title || "")}" loading="lazy"${styleAttr}${allowAttr}></iframe>
        </div>
        ${cap}`;
    }
    case "proto-tabs": {
      const tabs = r.tabs || [];
      const btns = tabs.map((t, i) =>
        `<button class="proto-tab-btn${i === 0 ? " is-active" : ""}" data-idx="${i}">${esc(t.label)}</button>`
      ).join("");
      const frames = tabs.map((t, i) =>
        `<iframe class="proto-frame${i === 0 ? " is-active" : ""}" data-idx="${i}" src="${i === 0 ? esc(t.src) : ""}" data-src="${esc(t.src)}" title="${esc(t.label)}" loading="lazy" allowfullscreen></iframe>`
      ).join("");
      return `
        <div class="proto-tabs">
          <div class="proto-tab-btns">${btns}</div>
          <div class="proto-frames">${frames}</div>
        </div>`;
    }
    default:
      return "";
  }
}

function renderProjectCard(p) {
  const tagPair = (p.tags || []).map(t =>
    `<span class="${esc(t.class)}">${esc(t.text)}</span>`
  ).join("");

  const link = p.link
    ? ` <a class="official-link" href="${esc(p.link.href)}" target="_blank" rel="noreferrer">${esc(p.link.text)} ↗</a>`
    : "";

  const meta = (p.meta || []).map(m => `
    <div>
      <h4>${esc(m.heading)}</h4>
      <ul>${(m.items || []).map(it => `<li>${esc(it)}</li>`).join("")}</ul>
    </div>`).join("");

  const titleBlock = p.icon
    ? `<div class="project__title-row">
         <img class="project__icon" src="${esc(p.icon)}" alt="${esc(p.title || "")} icon" loading="lazy" />
         <h3 class="project__title">${esc(p.title || "")}</h3>
       </div>`
    : `<h3 class="project__title">${esc(p.title || "")}</h3>`;

  const protoDetails = (p.protoDetails || []).map(d => `
    <div class="proto-detail">
      <h4 class="proto-detail__title">${esc(d.title)}</h4>
      <dl class="proto-detail__dl">
        <div><dt>概要</dt><dd>${esc(d.overview)}</dd></div>
        <div><dt>狙い</dt><dd>${esc(d.aim)}</dd></div>
      </dl>
    </div>`).join("");
  const protoDetailsBlock = protoDetails
    ? `<div class="proto-details">${protoDetails}</div>` : "";

  const extra = renderProjectExtra(p.right);
  const extraBlock = extra ? `<div class="project__extra">${extra}</div>` : "";
  const right = renderProjectRight(p.right);
  const rightBlock = right ? `<div class="project__right">${right}</div>` : "";
  const noRightCls = right ? "" : " project--no-right";

  return `
    <article class="project fade-in${noRightCls}">
      <div class="project__left">
        <div class="tag-pair">${tagPair}</div>
        ${titleBlock}
        <p class="project__catch">${esc(p.catch || "")}${link}</p>
        <div class="project__meta">${meta}</div>
        ${protoDetailsBlock}
        ${extraBlock}
      </div>
      ${rightBlock}
    </article>`;
}

function renderProjectsSection(targetId, data) {
  if (!data) return;
  const cards = (data.items || []).map(renderProjectCard).join("");
  setHTML(targetId, `
    <h2 class="sect__title fade-in">${esc(data.sectionTitle || "")}</h2>
    <div class="projects">${cards}</div>
  `);
}

/* ============ 5. スキル ============ */
function renderSkills() {
  if (!D.skills) return;
  const cards = (D.skills.cards || []).map(c => {
    const bars = (c.bars || []).map(b => `
      <li><span>${esc(b.label)}</span><div class="bar"><div class="bar__fill" data-level="${esc(b.level)}"></div></div></li>`).join("");
    return `
      <div class="skill-card fade-in">
        <h3>${esc(c.title)}</h3>
        <ul class="skill-bars">${bars}</ul>
      </div>`;
  }).join("");

  setHTML("skillsWrap", `
    <h2 class="sect__title fade-in">${esc(D.skills.sectionTitle || "")}</h2>
    <div class="skills-grid">${cards}</div>
  `);
}

/* ============ 6. 自己紹介 ============ */
function renderAbout() {
  if (!D.about) return;
  const a = D.about;
  const intro = (Array.isArray(a.intro) ? a.intro : [a.intro || ""]).map(esc).join("<br>");
  const dl = (a.dl || []).map(d => `<div><dt>${esc(d.dt)}</dt><dd>${esc(d.dd)}</dd></div>`).join("");
  const tags = (a.plays && a.plays.tags ? a.plays.tags : []).map(t => `<span>${esc(t)}</span>`).join("");

  setHTML("aboutWrap", `
    <h2 class="sect__title fade-in">${esc(a.sectionTitle || "")}</h2>
    <div class="about-grid">
      <div class="about-card fade-in">
        <p class="about-card__text">${intro}</p>
        <dl class="about-dl">${dl}</dl>
      </div>
      <div class="about-card fade-in">
        <h3>${esc(a.plays ? a.plays.heading : "")}</h3>
        <p class="secondary">${esc(a.plays ? a.plays.text : "")}</p>
        <div class="tag-row">${tags}</div>
      </div>
    </div>
  `);
}

/* ============ 7. 連絡先 ============ */
function renderContact() {
  if (!D.contact) return;
  const c = D.contact;
  const items = (c.items || []).map(it => `
    <div class="contact__item">
      <div class="secondary">${esc(it.label)}</div>
      <div class="mono">${esc(it.value)}</div>
    </div>`).join("");

  setHTML("contactWrap", `
    <h2 class="sect__title fade-in">${esc(c.sectionTitle || "")}</h2>
    <div class="contact fade-in">
      <div class="contact__row">${items}</div>
      <p class="contact__note">${esc(c.note || "")}</p>
    </div>
  `);
}

/* ============ 描画実行 ============ */
renderShell();
renderHero();
renderWorks();
renderProjectsSection("personalWrap", D.personal);
renderProjectsSection("studentWrap", D.student);
renderSkills();
renderAbout();
renderContact();

/* ==========================================================
   ↓↓↓ ここから先は描画後に動かす既存ロジック ↓↓↓
   ========================================================== */

// =============================================
// Splash intro
// =============================================
const splash = document.getElementById("splash");
if (splash) {
  const removeSplash = () => {
    if (!splash || splash.classList.contains("is-out")) return;
    splash.classList.add("is-out");
    setTimeout(() => splash.remove(), 800);
  };
  setTimeout(removeSplash, 1400);
  window.addEventListener("keydown", removeSplash, { once: true });
  splash.addEventListener("click", removeSplash);
}

// =============================================
// Year
// =============================================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// =============================================
// Mobile menu
// =============================================
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuBtn.classList.toggle("is-open", open);
});
nav?.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("is-open");
    menuBtn?.classList.remove("is-open");
  }
});

// =============================================
// Hero entrance — trigger after splash
// =============================================
const hero = document.querySelector(".hero");
if (hero) {
  setTimeout(() => {
    hero.classList.add("is-visible");
  }, 1200);
}

// =============================================
// Hero title — soft fade-up after splash
// =============================================
const heroTitle = document.querySelector(".hero__title");
if (heroTitle) {
  // entrance is handled in CSS via .hero.is-visible
}

// =============================================
// Scroll reveal — fade-in with stagger
// =============================================
function assignStagger() {
  const groups = [
    ".skills-grid",
    ".concepts",
    ".about-grid",
    ".strengths",
    ".hero__actions",
    ".contact__row",
    ".timeline",
    ".projects",
  ];
  groups.forEach((sel) => {
    document.querySelectorAll(sel).forEach((parent) => {
      const children = parent.querySelectorAll(".fade-in, .skill-card, .concept, .about-card, .strength, .tl-item");
      children.forEach((child, i) => {
        child.style.setProperty("--stagger", String(i));
      });
    });
  });

  document.querySelectorAll(".tech-list").forEach((list) => {
    list.querySelectorAll("span").forEach((chip, i) => {
      chip.style.transitionDelay = `${i * 55}ms`;
    });
  });

  document.querySelectorAll(".tag-row").forEach((row) => {
    row.querySelectorAll("span").forEach((tag, i) => {
      tag.style.transitionDelay = `${i * 70}ms`;
    });
  });
}
assignStagger();

const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
      }
    }
  },
  { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".fade-in, .tl-item").forEach((el) => revealObserver.observe(el));

document.querySelectorAll(".feature-card").forEach((card) => {
  revealObserver.observe(card);
});

// =============================================
// Skill bars — fill on scroll
// =============================================
const skillObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll(".bar__fill");
        bars.forEach((bar, i) => {
          bar.style.setProperty("--level", bar.dataset.level || "3");
          bar.style.setProperty("--bar-stagger", String(i));
        });
        requestAnimationFrame(() => {
          entry.target.classList.add("is-animated");
        });
        skillObserver.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.2 }
);
document.querySelectorAll(".skill-card").forEach((card) => skillObserver.observe(card));

// =============================================
// Active nav tracking on scroll
// =============================================
const sections = Array.from(document.querySelectorAll(".sect[id]"));
const navLinks = document.querySelectorAll(".nav a[href^='#']");

function updateActiveNav() {
  const offset = 120;
  const scrollY = window.scrollY + offset;
  let currentId = "";
  for (const s of sections) {
    if (s.offsetTop <= scrollY) currentId = s.id;
  }
  navLinks.forEach((link) => {
    const isActive = currentId && link.getAttribute("href") === `#${currentId}`;
    link.classList.toggle("is-active", !!isActive);
  });
}
window.addEventListener("scroll", updateActiveNav, { passive: true });
window.addEventListener("resize", updateActiveNav);
updateActiveNav();

// (corner deco removed)

// =============================================
// Click ripple on buttons
// =============================================
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const ripple = document.createElement("span");
    ripple.style.cssText = `
      position:absolute; pointer-events:none;
      left:${e.offsetX}px; top:${e.offsetY}px;
      width:8px; height:8px; border-radius:50%;
      background:rgba(255,255,255,.55);
      transform:translate(-50%,-50%); z-index:10;
      animation:ripple .55s ease-out forwards;
    `;
    if (!document.getElementById("rippleKey")) {
      const s = document.createElement("style");
      s.id = "rippleKey";
      s.textContent = `@keyframes ripple { to { transform:translate(-50%,-50%) scale(28); opacity:0; } }`;
      document.head.appendChild(s);
    }
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// =============================================
// Proto-tabs switching
// =============================================
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".proto-tab-btn");
  if (!btn) return;
  const wrap = btn.closest(".proto-tabs");
  if (!wrap) return;
  const idx = Number(btn.dataset.idx);
  wrap.querySelectorAll(".proto-tab-btn").forEach(b => b.classList.toggle("is-active", Number(b.dataset.idx) === idx));
  wrap.querySelectorAll(".proto-frame").forEach(f => {
    const active = Number(f.dataset.idx) === idx;
    if (active && !f.getAttribute('src')) f.setAttribute('src', f.dataset.src);
    f.classList.toggle("is-active", active);
  });
});
