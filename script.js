const CONTACT = {
  phone: "+971542117384",
  whatsapp: "971542117384",
  email: "syedamehwish993@gmail.com",
  linkedin: "https://www.linkedin.com/in/mehwish-hasny-2890412b7/",
  github: "https://github.com/Mehwishhasny",
  upwork: "https://www.upwork.com/freelancers/~01baff158144d18210"
};
const CONTACT_EMAIL = CONTACT.email.trim();

const projects = [
  [
    "Real Estate",
    "web",
    "REAL ESTATE / WEBSITE",
    "A property-focused business website with mortgage services, responsive navigation and enquiry pathways.",
    ["HTML", "CSS", "JavaScript"],
    "https://aizestate.com/",
    "#d9e2e8",
    "#253b50",
  ],
  [
    "MailPilot Pro",
    "app",
    "EMAIL / WEB APPLICATION",
    "An email campaign builder with account authentication, campaign design and user-owned SMTP integration.",
    ["Python", "Streamlit", "Supabase"],
    "https://mailpilot-pro.streamlit.app/",
    "#e5d8ec",
    "#51425f",
  ],
  [
    "MC Homes",
    "web",
    "REAL ESTATE / WEBSITE",
    "A responsive home rental company website with property presentation and contact sections.",
    ["HTML", "CSS", "JavaScript"],
    "https://mchomes.ae/index.html",
    "#e6d7b8",
    "#182a3b",
  ],
  [
    "Lumina Commerce",
    "app",
    "ECOMMERCE / PROTOTYPE",
    "An online storefront with database-backed products, checkout simulation and order tracking.",
    ["JavaScript", "Supabase", "SQL"],
    "https://lumina-ecommerce-ten.vercel.app/",
    "#ead8c9",
    "#674a37",
  ],
  [
    "Appointment Studio",
    "app",
    "BOOKING / BUSINESS APPLICATION",
    "A professional online appointment booking platform featuring customer registration, secure email verification, guest booking, appointment history and a dedicated admin dashboard. Integrated with Google Sheets for automated data storage, booking management, status tracking and CSV reporting.",
    ["HTML", "CSS", "JavaScript", "Google Sheets", "Google Apps Script"],
    "https://tinyurl.com/appointment-studio",
    "#F8F6F2",
    "#2F343A",
  ],
  [
    "Menu-Based Chatbot",
    "ai",
    "CHATBOT / AUTOMATION",
    "An interactive, menu-driven chatbot designed to automate customer inquiries, provide instant responses, guide users through predefined options and simplify business communication.",
    ["HTML", "CSS", "TypeScript", "Chatbot Automation"],
    "https://chatbot-roan-mu.vercel.app/",
    "#e7d5df",
    "#624659",
  ],
  [
    "TeacherHub",
    "app",
    "EDUCATION / MOBILE PROTOTYPE",
    "A teacher resource discovery and flashcard creation app with locally saved resources.",
    ["Expo", "React Native"],
    "",
    "#e5e3c9",
    "#5a5d39",
  ],
];
const root = document.querySelector("#projects");
function render(filter) {
  if (!root) return;
  root.replaceChildren();
  projects
    .filter((p) => filter === "all" || p[1] === filter)
    .forEach((p) => {
      const el = document.createElement("article");
      el.className = "project";
      el.innerHTML = `<div class="preview" style="--tone:${p[6]};--dark:${p[7]}"><div class="mock" aria-hidden="true"><div class="mockbar">● ● ● &nbsp; Concept preview</div><div class="mockbody"><div class="mockside">${p[0]}<div class="mockline"></div><div class="mockline"></div></div><div class="mockmain"><strong>${p[0]}</strong><small>PROJECT INTERFACE / ILLUSTRATION</small><div class="mocktiles"><i></i><i></i><i></i></div><div class="mockline"></div><div class="mockline"></div></div></div></div></div><div class="projectbody"><div class="meta">${p[2]}</div><h3>${p[0]}</h3><p>${p[3]}</p><div class="tags">${p[4].map((t) => `<span>${t}</span>`).join("")}</div><button class="detailbtn" data-project="${projects.indexOf(p)}">Explore project →</button>${p[5] ? `<a href="${p[5]}" target="_blank" rel="noopener noreferrer">Visit live project ↗</a>` : ""}</div>`;
      root.append(el);
    });
}
render("all");
document.querySelectorAll("[data-filter]").forEach((b) => {
  b.setAttribute("aria-pressed", String(b.classList.contains("active")));
  b.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((x) => {
      x.classList.toggle("active", x === b);
      x.setAttribute("aria-pressed", String(x === b));
    });
    render(b.dataset.filter);
  });
});
const menu = document.querySelector("#menu"),
  nav = document.querySelector("#navlinks");
menu.addEventListener("click", () =>
  menu.setAttribute("aria-expanded", String(nav.classList.toggle("open"))),
);
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }),
);
document.querySelector("#inquiry").addEventListener("submit", async (e) => {
  e.preventDefault();
  const d = new FormData(e.target),
    body = `Name: ${d.get("name")}\nProject: ${d.get("type")}\n\n${d.get("message")}`,
    status = document.querySelector("#status");
  if (CONTACT_EMAIL) {
    location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Portfolio inquiry: " + d.get("type"))}&body=${encodeURIComponent(body)}`;
    status.textContent =
      "Your email application will open. Please send the message there.";
  } else {
    try {
      await navigator.clipboard.writeText(body);
      status.textContent =
        "Inquiry copied. Direct contact is not configured yet.";
    } catch {
      status.textContent =
        "Direct contact is not configured yet. Please copy your message manually.";
    }
  }
});

// The featured slideshow is optional: the page can omit Selected Work.
if (["slide", "dots", "pause", "prev", "next"].every(id => document.getElementById(id))) {
const features = projects.map((_, index) => index);
let current = 0,
  playing = !matchMedia("(prefers-reduced-motion: reduce)").matches;
const slide = document.querySelector("#slide"),
  dots = document.querySelector("#dots"),
  pause = document.querySelector("#pause");
function showSlide() {
  const p = projects[features[current]];
  slide.innerHTML = `<div class="slidecopy"><div class="meta">${p[2]}</div><h3>${p[0]}</h3><p>${p[3]}</p><div class="tags">${p[4].map((t) => `<span>${t}</span>`).join("")}</div><button class="btn detailbtn" data-project="${features[current]}">Explore project →</button></div><div class="slidevisual"><div class="screenbar">● ● ● <span>PROJECT OVERVIEW</span></div><div class="screencontent"><small>${p[2]}</small><strong>${p[0]}</strong><div class="screenblocks"><i></i><i></i><i></i></div><div class="screenline"></div><div class="screenline short"></div><small>Illustrative project preview</small></div></div>`;
  dots.replaceChildren();
  features.forEach((_, i) => {
    const b = document.createElement("button");
    b.setAttribute("aria-label", `Show project ${i + 1}`);
    b.setAttribute("aria-pressed", String(i === current));
    b.onclick = () => {
      current = i;
      showSlide();
    };
    dots.append(b);
  });
}
function move(n) {
  current = (current + n + features.length) % features.length;
  showSlide();
}
document.querySelector("#prev").onclick = () => move(-1);
document.querySelector("#next").onclick = () => move(1);
function syncPause() {
  pause.textContent = playing ? "Pause" : "Play";
  pause.setAttribute(
    "aria-label",
    playing ? "Pause slideshow" : "Play slideshow",
  );
}
pause.onclick = () => {
  playing = !playing;
  syncPause();
};
syncPause();
showSlide();
setInterval(() => {
  if (
    playing &&
    !document.hidden &&
    !document.querySelector(".featured")?.matches(":hover,:focus-within") &&
    !document.querySelector("#details")?.open
  )
    move(1);
}, 6500);
}
const details = document.querySelector("#details");
const specifics = [
  [
    "Responsive property presentation",
    "Mortgage service information",
    "Enquiry navigation",
  ],
  [
    "Account authentication",
    "Campaign design and SMTP testing",
    "Contact and delivery workflows",
  ],
  [
    "Property presentation",
    "Mobile navigation",
    "Contact and enquiry sections",
  ],
  [
    "Product browsing",
    "Simulated checkout (no real payments)",
    "Order tracking",
  ],
  [
    "Guest booking and customer accounts",
    "Email verification and appointment history",
    "Google Sheets integration and administrator booking management",
  ],
  [
    "Menu-driven customer interactions",
    "Predefined responses and guided options",
    "Automated business inquiries",
  ],
  ["Resource discovery", "Saved resources", "Flashcard creation"],
];
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-project]");
  if (!b || !details || !document.querySelector("#detailContent")) return;
  const i = Number(b.dataset.project),
    p = projects[i];
  document.querySelector("#detailContent").innerHTML =
    `<div class="meta">${p[2]}</div><h2>${p[0]}</h2><p>${p[3]}</p><h3>Project highlights</h3><ul>${(specifics[i] || []).map((x) => `<li>${x}</li>`).join("")}</ul><h3>Technology stack</h3><div class="tags">${p[4].map((t) => `<span>${t}</span>`).join("")}</div>${p[5] ? `<a class="btn" href="${p[5]}" target="_blank" rel="noopener noreferrer">Open live project ↗</a>` : "<p>Portfolio project overview · public demo not linked.</p>"}`;
  details.showModal();
});
document.querySelector("#closeDetails")?.addEventListener("click", () => details?.close());
details?.addEventListener("click", (e) => {
  if (e.target === details) details.close();
});
if (
  "IntersectionObserver" in window &&
  !matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      }),
    { threshold: 0.08 },
  );
  document.querySelectorAll(".section,.strip").forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}
(() => {
  const root = document.querySelector(".workspace");
  if (!root) return;
  const q = (id) => document.getElementById(id);
  const scenes = [
    [
      "Web development",
      "index.html",
      "BUILD / WEB",
      [
        '<main class="experience">',
        "  <h1>Build something useful.</h1>",
        "  <button>Explore</button>",
        "</main>",
        "// Responsive. Accessible. Modern.",
      ],
    ],
    [
      "Python development",
      "app.py",
      "RUN / PYTHON",
      [
        "import streamlit as st",
        'st.title("Business dashboard")',
        "data = load_records()",
        "st.dataframe(data)",
        ">>> Application ready",
      ],
    ],
    [
      "Database engineering",
      "schema.sql",
      "QUERY / DATABASE",
      [
        "SELECT project, status",
        "FROM public.projects",
        "WHERE status = 'active'",
        "ORDER BY project;",
        "-- Query completed",
      ],
    ],
    [
      "AI development",
      "assistant.py",
      "MODEL / AI",
      [
        "def assist(request):",
        "    context = retrieve(request)",
        "    result = model.generate(context)",
        "    return result",
        ">>> Response prepared",
      ],
    ],
    [
      "Responsive design",
      "style.css",
      "LAYOUT / RESPONSIVE",
      [
        ".layout {",
        "  display: grid;",
        "  grid-template-columns: repeat(",
        "    auto-fit, minmax(240px, 1fr));",
        "}",
      ],
    ],
    [
      "Business automation",
      "workflow.js",
      "FLOW / AUTOMATION",
      [
        "async function workflow(event) {",
        "  const data = validate(event);",
        "  await saveRecord(data);",
        "  await notifyTeam(data);",
        "}",
      ],
    ],
  ];
  const frame = (x, y, w, h) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="#243550" stroke="#60a5fa"/>`;
  const label = (x, y, t) =>
    `<text x="${x}" y="${y}" fill="#bfdbfe" font-size="10" font-family="monospace" text-anchor="middle">${t}</text>`;
  const link = (x, y, a, b) =>
    `<path d="M${x} ${y} L${a} ${b}" stroke="#60a5fa" stroke-width="2" class="wsFlow"/>`;
  const node = (x, y) =>
    `<circle cx="${x}" cy="${y}" r="5" fill="#93c5fd" class="wsPulse"/>`;
  const bars = (x, y) =>
    [0, 1, 2]
      .map(
        (n) =>
          `<rect x="${x}" y="${y + n * 10}" width="${60 - n * 12}" height="4" rx="2" fill="#60a5fa" opacity="${1 - n * 0.2}"/>`,
      )
      .join("");
  function visual(i) {
    let v = "";
    if (i === 0) {
      v =
        frame(24, 12, 150, 76) +
        bars(39, 29) +
        frame(187, 12, 148, 76) +
        `<rect x="199" y="24" width="124" height="22" rx="3" fill="#60a5fa"/>` +
        bars(201, 55) +
        link(174, 50, 187, 50);
    } else if (i === 1) {
      v =
        frame(25, 12, 310, 76) +
        label(85, 32, "PYTHON / RUN") +
        bars(40, 44) +
        [0, 1, 2, 3, 4]
          .map(
            (n) =>
              `<rect x="${190 + n * 25}" y="${75 - (n + 1) * 10}" width="15" height="${(n + 1) * 10}" fill="#60a5fa" rx="2"/>`,
          )
          .join("");
    } else if (i === 2 || i === 5) {
      let names =
        i === 2
          ? ["CLIENT", "API", "DATABASE"]
          : ["INPUT", "PROCESS", "OUTPUT"];
      v =
        [0, 1, 2]
          .map(
            (n) =>
              frame(12 + n * 120, 29, 96, 42) +
              label(60 + n * 120, 54, names[n]),
          )
          .join("") +
        link(108, 50, 132, 50) +
        link(228, 50, 252, 50);
    } else if (i === 3) {
      let pts = [
        [45, 25],
        [45, 75],
        [150, 15],
        [150, 50],
        [150, 85],
        [270, 25],
        [270, 75],
        [325, 50],
      ];
      v =
        pts
          .slice(0, 2)
          .map((a) =>
            pts
              .slice(2, 5)
              .map((b) => link(...a, ...b))
              .join(""),
          )
          .join("") +
        pts
          .slice(2, 5)
          .map((a) =>
            pts
              .slice(5, 7)
              .map((b) => link(...a, ...b))
              .join(""),
          )
          .join("") +
        pts
          .slice(5, 7)
          .map((a) => link(...a, ...pts[7]))
          .join("") +
        pts.map((a) => node(...a)).join("");
    } else {
      v =
        frame(32, 10, 208, 80) +
        frame(255, 22, 48, 70) +
        `<rect x="44" y="20" width="184" height="20" rx="3" fill="#60a5fa"/><rect x="262" y="30" width="34" height="18" rx="2" fill="#60a5fa"/>` +
        bars(48, 50) +
        bars(140, 50) +
        [0, 1, 2]
          .map(
            (n) =>
              `<rect x="262" y="${55 + n * 9}" width="34" height="5" fill="#93c5fd"/>`,
          )
          .join("");
    }
    return `<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg">${v}</svg>`;
  }
  let index = 0,
    timer,
    rotation,
    paused = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const dots = q("wsDots");
  scenes.forEach((s, i) => {
    const b = document.createElement("button");
    b.setAttribute("aria-label", s[0]);
    b.onclick = () => show(i);
    dots.append(b);
  });
  function show(i) {
    clearInterval(timer);
    clearTimeout(rotation);
    index = (i + scenes.length) % scenes.length;
    const s = scenes[index];
    q("wsFile").textContent = s[1];
    q("wsStatus").textContent = s[2];
    q("wsLabel").textContent = `0${index + 1} / ${s[0]}`;
    q("wsVisual").innerHTML = visual(index);
    [...dots.children].forEach((b, j) =>
      b.setAttribute("aria-current", j === index ? "true" : "false"),
    );
    const code = q("wsCode");
    code.replaceChildren();
    const lines = s[3].map((l, j) => {
      let el = document.createElement("span");
      el.className = "wsLine";
      el.dataset.n = String(j + 1).padStart(2, "0");
      code.append(el);
      return el;
    });
    let line = 0,
      char = 0;
    const cursor = document.createElement("span");
    cursor.className = "wsCursor";
    function finish() {
      lines.forEach((el, j) => (el.textContent = s[3][j]));
      clearInterval(timer);
    }
    if (paused) {
      finish();
    } else {
      timer = setInterval(() => {
        if (document.hidden) return;
        if (line >= lines.length) {
          cursor.remove();
          clearInterval(timer);
          return;
        }
        lines[line].textContent = s[3][line].slice(0, ++char);
        lines[line].append(cursor);
        if (char >= s[3][line].length) {
          line++;
          char = 0;
        }
      }, 24);
      rotation = setTimeout(() => show(index + 1), 7200);
    }
    root.classList.toggle("paused", paused);
    q("wsPause").textContent = paused ? "▶" : "Ⅱ";
    q("wsPause").setAttribute(
      "aria-label",
      paused ? "Play workspace animation" : "Pause workspace animation",
    );
  }
  q("wsPrev").onclick = () => show(index - 1);
  q("wsNext").onclick = () => show(index + 1);
  q("wsPause").onclick = () => {
    paused = !paused;
    show(index);
  };
  show(0);
})();

(()=>{const el=document.getElementById('mzAutomationText');if(!el||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const messages=['Reading source data...','Checking business conditions...','Categorizing records...','Segregating data into relevant sheets...','Updating connected spreadsheets...','Workflow completed successfully.'];let i=0,n=0;function tick(){el.textContent=messages[i].slice(0,++n);if(n<messages[i].length)setTimeout(tick,35);else setTimeout(()=>{i=(i+1)%messages.length;n=0;tick()},1200)}tick()})();

// Direct contact cards and footer icons
(() => {
  const icons = {
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72l.7 3.08a2 2 0 0 1-.57 2.11L8 10a16 16 0 0 0 6 6l1.1-1.24a2 2 0 0 1 2.11-.57l3.07.7A2 2 0 0 1 22 16.92z"/>',
    whatsapp: '<path d="M20.5 3.5A11 11 0 0 0 3 16.5L2 22l5.5-1A11 11 0 0 0 20.5 3.5Z"/><path d="M8 7c-2 1-1 5 2 8s6 3 7 1l-3-2-1 1c-2-1-3-2-4-4l1-1z"/>',
    email: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7L22 6"/>',
    linkedin: '<rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 10v7m0-10h.01M11 17v-7m0 3a3 3 0 0 1 6 0v4"/>',
    github: '<path d="M9 19c-4 1-4-2-6-2m12 5v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a13 13 0 0 0-6.2 0C6.3 1.3 5.2 1.6 5.2 1.6a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.2 6.4 6.2 6.7A3.4 3.4 0 0 0 9 18.1V22"/>',
    upwork: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18m-11 0v2h4v-2"/>'
  };
  const svg = key => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[key]}</svg>`;
  const phone = CONTACT.phone.trim();
  const whatsapp = CONTACT.whatsapp.trim();
  const tel = phone.replace(/[^+\d]/g, "");
  const wa = whatsapp.replace(/\D/g, "");
  const safeUrl = value => {
    try { const url = new URL(value.trim()); return url.protocol === "https:" ? url.href : ""; }
    catch { return ""; }
  };
  const entries = [
    ["phone", "Phone", phone, tel ? `tel:${tel}` : ""],
    ["whatsapp", "WhatsApp", whatsapp, wa ? `https://wa.me/${wa}` : ""],
    ["email", "Email", CONTACT_EMAIL, CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : ""],
    ["linkedin", "LinkedIn", "Connect professionally", safeUrl(CONTACT.linkedin)],
    ["github", "GitHub", "Explore my code", safeUrl(CONTACT.github)],
    ["upwork", "Upwork", "Hire me for a project", safeUrl(CONTACT.upwork)]
  ].filter(entry => entry[3]);
  const cards = document.getElementById("contactLinks");
  const footer = document.getElementById("footerLinks");
  function makeLink(key, label, description, href, compact) {
    const a = document.createElement("a");
    a.href = href;
    a.setAttribute("aria-label", label + (description ? ": " + description : ""));
    a.title = label;
    if (href.startsWith("https:")) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    if (compact) { a.innerHTML = svg(key); return a; }
    a.className = "mz-contact-link";
    const icon = document.createElement("span");
    icon.className = "mz-contact-icon";
    icon.innerHTML = svg(key);
    const copy = document.createElement("span");
    copy.className = "mz-contact-copy";
    const name = document.createElement("strong");
    name.textContent = label;
    const sub = document.createElement("small");
    sub.textContent = description;
    copy.append(name, sub);
    a.append(icon, copy);
    return a;
  }
  if (cards && entries.length) {
    entries.forEach(entry => cards.append(makeLink(...entry, false)));
    cards.hidden = false;
  }
  if (footer && entries.length) {
    entries.forEach(entry => footer.append(makeLink(...entry, true)));
    footer.hidden = false;
  }
})();
