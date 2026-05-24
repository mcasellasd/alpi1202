/* global React */
const { useState, useEffect, useRef } = React;

// ---------- Visual placeholder (image plate with painted scene) ----------
function Plate({ tone = "forest", caption, label, className = "", ratio = "4/5" }) {
  const palettes = {
    forest:  { sky: "#cfd6c5", mid: "#5a6f54", ground: "#1f2d20", accent: "#cfb98b" },
    lake:    { sky: "#dde6e8", mid: "#7c97a3", ground: "#2b3b48", accent: "#e8e0c9" },
    alpine:  { sky: "#e8e2d3", mid: "#9a9482", ground: "#2a2a28", accent: "#c08a4a" },
    wine:    { sky: "#e8d8c0", mid: "#9a4a3a", ground: "#3a1a1a", accent: "#d8c08a" },
    ice:     { sky: "#e8eef0", mid: "#a8b8c0", ground: "#3a4750", accent: "#cfd8dc" },
    stone:   { sky: "#dbd2c2", mid: "#8a7a64", ground: "#2a241c", accent: "#cfb98b" },
    crowd:   { sky: "#241c14", mid: "#a86434", ground: "#0e0a06", accent: "#f1d9ad" },
    table:   { sky: "#1a2620", mid: "#cfb98b", ground: "#0a1410", accent: "#a04a2b" },
    summit:  { sky: "#dbc8a0", mid: "#5a6f54", ground: "#1a2418", accent: "#f1e9d6" },
  };
  const p = palettes[tone] || palettes.forest;
  return (
    <figure className={`plate plate--${tone} ${className}`} style={{ aspectRatio: ratio }}>
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id={`sky-${tone}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor={p.sky} />
            <stop offset="1" stopColor={p.mid} stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id={`gnd-${tone}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor={p.mid} />
            <stop offset="1" stopColor={p.ground} />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill={`url(#sky-${tone})`} />
        {/* far ridge */}
        <path d="M0 280 L60 230 L120 260 L180 210 L240 245 L320 200 L400 240 L400 320 L0 320 Z"
              fill={p.mid} opacity="0.55" />
        {/* mid ridge */}
        <path d="M0 320 L80 270 L160 305 L240 260 L320 295 L400 270 L400 380 L0 380 Z"
              fill={p.mid} opacity="0.85" />
        {/* near ground */}
        <path d="M0 360 L100 330 L220 370 L320 340 L400 360 L400 500 L0 500 Z"
              fill={`url(#gnd-${tone})`} />
        {/* sun / moon */}
        <circle cx="310" cy="120" r="34" fill={p.accent} opacity="0.6" />
        <circle cx="310" cy="120" r="22" fill={p.accent} opacity="0.9" />
        {/* trees / details */}
        <g opacity="0.85">
          <path d="M40 360 l8 -28 l8 28 z" fill={p.ground}/>
          <path d="M62 368 l6 -22 l6 22 z" fill={p.ground}/>
          <path d="M340 372 l10 -34 l10 34 z" fill={p.ground}/>
          <path d="M360 380 l7 -22 l7 22 z" fill={p.ground}/>
        </g>
      </svg>
      {label ? <span className="plate__label">{label}</span> : null}
      {caption ? <figcaption className="plate__cap">{caption}</figcaption> : null}
    </figure>
  );
}

// ---------- Header ----------
// mode: "home" (default) · "journal" · "article" · "pack"
function Header({ t, lang, setLang, openContact, mode = "home" }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const isHome = mode === "home";
  const isJournal = mode === "journal";
  const sectionBase = isHome ? "" : isJournal ? "index.html" : "../index.html";
  const sec = (id) => `${sectionBase}#${id}`;
  const brandHref = isHome ? "#top" : isJournal ? "index.html" : "../index.html";
  const journalHref = isJournal ? "#top" : isHome ? "journal.html" : "../journal.html";
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="brand" href={brandHref} aria-label="Alpinea — home">
        <span className="brand__mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M2 26 L11 12 L16 19 L22 9 L30 26 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
            <circle cx="22" cy="9" r="1.6" fill="currentColor"/>
          </svg>
        </span>
        <span className="brand__type">ALPINEA</span>
        <span className="brand__sub">Cerdanya · est. MMXXVI</span>
      </a>
      <nav className="nav" aria-label="Primary">
        <a href={sec("about")}>{t.nav.about}</a>
        <a href={sec("services")}>{t.nav.services}</a>
        <a href={sec("packs")}>{t.nav.packs}</a>
        <a href={sec("venues")}>{t.nav.venues}</a>
        <a href={sec("team")}>{t.nav.team}</a>
        <a href={journalHref}>{t.nav.journal}</a>
        <a href={sec("contact")}>{t.nav.contact}</a>
      </nav>
      <div className="header-tools">
        <div className="lang" role="tablist" aria-label="Language">
          {["cat", "es", "en"].map((l) => (
            <button key={l} role="tab" aria-selected={lang === l}
                    className={lang === l ? "is-active" : ""}
                    onClick={() => setLang(l)}>{l.toUpperCase()}</button>
          ))}
        </div>
        <button className="btn btn--solid" onClick={openContact}>{t.nav.cta} <span aria-hidden="true">→</span></button>
      </div>
    </header>
  );
}

// ---------- Hero ----------
function Hero({ t, openContact }) {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 className="display">
            {t.hero.title.map((line, i) => (
              <span key={i} className={`display__line display__line--${i}`}>
                {line}
              </span>
            ))}
          </h1>
          <p className="hero__lead">{t.hero.lead}</p>
          <div className="hero__ctas">
            <button className="btn btn--solid btn--lg" onClick={openContact}>
              {t.hero.ctaPrimary} <span aria-hidden="true">→</span>
            </button>
            <a className="btn btn--ghost btn--lg" href="#services">{t.hero.ctaSecondary}</a>
          </div>
        </div>
        <div className="hero__grid" aria-hidden="true">
          <Plate tone="summit" className="hero__plate hero__plate--a" ratio="3/4" />
          <Plate tone="crowd" className="hero__plate hero__plate--b" ratio="4/5" label="Estadi de Gel · 1.200 pax" />
          <Plate tone="table" className="hero__plate hero__plate--c" ratio="1/1" />
          <Plate tone="forest" className="hero__plate hero__plate--d" ratio="3/4" label="Cal Marrufès · 1.090 m" />
        </div>
      </div>
      <div className="hero__stats">
        {[t.hero.stat1, t.hero.stat2, t.hero.stat3].map(([n, l], i) => (
          <div key={i} className="stat">
            <span className="stat__num">{n}</span>
            <span className="stat__lbl">{l}</span>
          </div>
        ))}
        <div className="stat stat--badge">
          <svg viewBox="0 0 32 32" width="22" height="22" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M10 16 l4 4 l8 -8" stroke="currentColor" strokeWidth="1.4" fill="none"/>
          </svg>
          <span>Biosphere · MICE Sustainable Partner 2025</span>
        </div>
      </div>
    </section>
  );
}

// ---------- About ----------
function About({ t }) {
  return (
    <section className="about section" id="about">
      <div className="section__head">
        <p className="eyebrow">{t.about.eyebrow}</p>
      </div>
      <div className="about__grid">
        <h2 className="title">{t.about.title}</h2>
        <div className="about__body">
          {t.about.body.map((p, i) => <p key={i}>{p}</p>)}
          <a className="link-arrow" href="#team">{t.nav.team} <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <ul className="pillars">
        {t.about.pillars.map(([n, name, desc], i) => (
          <li key={i} className="pillar">
            <span className="pillar__n">{n}</span>
            <h3 className="pillar__h">{name}</h3>
            <p className="pillar__d">{desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ---------- Services ----------
function Services({ t, openContact }) {
  const [active, setActive] = useState(0);
  const cat = t.services.categories[active];
  return (
    <section className="services section" id="services">
      <div className="section__head">
        <p className="eyebrow">{t.services.eyebrow}</p>
        <h2 className="title">{t.services.title}</h2>
        <p className="section__lead">{t.services.lead}</p>
      </div>
      <div className="services__layout">
        <ul className="menu" role="tablist" aria-label={t.services.eyebrow}>
          {t.services.categories.map((c, i) => (
            <li key={i}>
              <button
                role="tab"
                aria-selected={active === i}
                className={`menu__row ${active === i ? "is-active" : ""}`}
                onClick={() => setActive(i)}>
                <span className="menu__tag">{c.tag}</span>
                <span className="menu__name">{c.name}</span>
                <span className="menu__chev" aria-hidden="true">→</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="menu-detail" role="tabpanel">
          <Plate tone={["forest","alpine","ice","stone","crowd","summit","table","wine"][active % 8]} ratio="5/4" />
          <div className="menu-detail__copy">
            <p className="menu-detail__tag">{cat.tag}</p>
            <h3 className="menu-detail__h">{cat.name}</h3>
            <p className="menu-detail__d">{cat.desc}</p>
            <ul className="menu-detail__items">
              {cat.items.map((it, i) => <li key={i}>{it}</li>)}
            </ul>
            <button className="btn btn--solid" onClick={openContact}>{t.nav.cta} <span aria-hidden="true">→</span></button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Packs ----------
function Packs({ t, openContact }) {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="packs section" id="packs">
      <div className="section__head">
        <p className="eyebrow">{t.packs.eyebrow}</p>
        <h2 className="title">{t.packs.title}</h2>
        <p className="section__lead">{t.packs.lead}</p>
      </div>
      <ul className="packs__grid">
        {t.packs.list.map((p, i) => {
          const isOpen = openIdx === i;
          return (
            <li key={i} className={`pack ${isOpen ? "is-open" : ""}`}>
              <a className="pack__media" href={p.slug ? `packs/${p.slug}.html` : "#"} aria-label={`${p.name} — veure pack complet`}>
                <Plate tone={p.tone} ratio="4/3" />
                <span className="pack__code">{p.code}</span>
                <span className="pack__tag">{p.tag}</span>
              </a>
              <div className="pack__body">
                <h3 className="pack__name">
                  {p.slug
                    ? <a href={`packs/${p.slug}.html`}>{p.name}</a>
                    : p.name}
                </h3>
                <p className="pack__tagline">{p.tagline}</p>
                <dl className="pack__facts">
                  <div><dt>{t.packs.labels.duration}</dt><dd>{p.duration}</dd></div>
                  <div><dt>{t.packs.labels.group}</dt><dd>{p.group}</dd></div>
                  <div><dt>{t.packs.labels.season}</dt><dd>{p.season}</dd></div>
                  <div className="pack__price">
                    <dt>{t.packs.labels.from}</dt>
                    <dd><strong>{p.price}</strong><span>/ pax</span></dd>
                  </div>
                </dl>
                <button
                  className="pack__toggle"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}>
                  <span>{t.packs.labels.includes}</span>
                  <span className={`pack__toggle-icon ${isOpen ? "is-open" : ""}`} aria-hidden="true">+</span>
                </button>
                <ul className={`pack__includes ${isOpen ? "is-open" : ""}`}>
                  {p.includes.map(([k, v], j) => (
                    <li key={j}>
                      <span className="pack__incl-k">{k}</span>
                      <span className="pack__incl-v">{v}</span>
                    </li>
                  ))}
                </ul>
                <div className="pack__cta">
                  {p.slug ? (
                    <a className="btn btn--solid" href={`packs/${p.slug}.html`}>
                      Veure pack complet <span aria-hidden="true">→</span>
                    </a>
                  ) : (
                    <button className="btn btn--solid" onClick={openContact}>
                      {t.packs.ctaPack} <span aria-hidden="true">→</span>
                    </button>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="packs__foot">
        <p className="packs__note">{t.packs.note}</p>
        <button className="btn btn--ghost" onClick={openContact}>{t.packs.ctaCustom} <span aria-hidden="true">→</span></button>
      </div>
    </section>
  );
}

// ---------- Venues ----------
function Venues({ t }) {
  return (
    <section className="venues section" id="venues">
      <div className="section__head">
        <p className="eyebrow">{t.venues.eyebrow}</p>
        <h2 className="title">{t.venues.title}</h2>
        <p className="section__lead">{t.venues.lead}</p>
      </div>
      <ul className="venues__grid">
        {t.venues.list.map((v, i) => (
          <li key={i} className="venue">
            <Plate tone={v.tone} ratio="4/5" />
            <div className="venue__meta">
              <div>
                <h3 className="venue__h">{v.name}</h3>
                <p className="venue__place">{v.place} · {v.capacity}</p>
              </div>
              <ul className="venue__tags">
                {v.tags.map((tag, j) => <li key={j}>{tag}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ---------- Team ----------
function Team({ t }) {
  return (
    <section className="team section" id="team">
      <div className="section__head">
        <p className="eyebrow">{t.team.eyebrow}</p>
        <h2 className="title">{t.team.title}</h2>
        <p className="section__lead">{t.team.lead}</p>
      </div>
      <ul className="team__grid">
        {t.team.members.map(([n, role, bio], i) => (
          <li key={i} className="member">
            <Plate tone={["stone","forest","wine","alpine"][i%4]} ratio="3/4" />
            <h3 className="member__h">{n}</h3>
            <p className="member__r">{role}</p>
            <p className="member__b">{bio}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ---------- Journal ----------
function Journal({ t }) {
  // Pull featured posts from journal data if available; fall back to t.journal.posts
  const journal = window.ALPINEA_JOURNAL;
  const posts = journal ? journal.articles.slice(0, 3) : null;
  return (
    <section className="journal section" id="journal">
      <div className="section__head section__head--row">
        <div>
          <p className="eyebrow">{t.journal.eyebrow}</p>
          <h2 className="title">{t.journal.title}</h2>
          <p className="section__lead">{t.journal.lead}</p>
        </div>
        <a className="btn btn--ghost" href="journal.html">
          {t.nav.journal} <span aria-hidden="true">→</span>
        </a>
      </div>
      <ul className="journal__grid">
        {posts ? posts.map((p, i) => (
          <li key={i} className="post">
            <a href={`journal/${p.slug}.html`}>
              <Plate tone={p.tone} ratio="5/4" />
              <p className="post__k">{p.categoryName} · {p.readTime} min</p>
              <h3 className="post__h">{p.title}</h3>
              <span className="link-arrow">→</span>
            </a>
          </li>
        )) : t.journal.posts.map(([k, h, m], i) => (
          <li key={i} className="post">
            <Plate tone={["lake","crowd","summit"][i%3]} ratio="5/4" />
            <p className="post__k">{k} · {m}</p>
            <h3 className="post__h">{h}</h3>
            <span className="link-arrow">→</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ---------- Contact ----------
function Contact({ t, contactRef }) {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    type: t.contact.types[0], date: "", guests: "", message: "",
  });
  const [sent, setSent] = useState(false);
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <section className="contact section" id="contact" ref={contactRef}>
      <div className="contact__inner">
        <div className="contact__head">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 className="title">{t.contact.title}</h2>
          <p className="section__lead">{t.contact.lead}</p>
          <ul className="contact__info">
            {t.contact.info.map(([k, v], i) => (
              <li key={i}>
                <span className="contact__info-k">{k}</span>
                <span className="contact__info-v">{v}</span>
              </li>
            ))}
          </ul>
        </div>
        <form className="contact__form" onSubmit={submit}>
          <div className="field field--half">
            <label>{t.contact.fields.name}</label>
            <input required value={form.name} onChange={update("name")} placeholder="Núria Brangulí"/>
          </div>
          <div className="field field--half">
            <label>{t.contact.fields.company}</label>
            <input value={form.company} onChange={update("company")} placeholder="Empresa SL"/>
          </div>
          <div className="field field--half">
            <label>{t.contact.fields.email}</label>
            <input type="email" required value={form.email} onChange={update("email")} placeholder="hola@empresa.cat"/>
          </div>
          <div className="field field--half">
            <label>{t.contact.fields.phone}</label>
            <input value={form.phone} onChange={update("phone")} placeholder="+34 600 00 00 00"/>
          </div>
          <div className="field">
            <label>{t.contact.fields.type}</label>
            <select value={form.type} onChange={update("type")}>
              {t.contact.types.map((tt) => <option key={tt}>{tt}</option>)}
            </select>
          </div>
          <div className="field field--half">
            <label>{t.contact.fields.date}</label>
            <input value={form.date} onChange={update("date")} placeholder="Q2 2026"/>
          </div>
          <div className="field field--half">
            <label>{t.contact.fields.guests}</label>
            <input value={form.guests} onChange={update("guests")} placeholder="120"/>
          </div>
          <div className="field">
            <label>{t.contact.fields.message}</label>
            <textarea rows="4" value={form.message} onChange={update("message")} />
          </div>
          <button type="submit" className="btn btn--solid btn--lg" disabled={sent}>
            {sent ? "✓" : t.contact.fields.submit} <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer({ t, lang, setLang }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <p className="site-footer__manifesto">{t.footer.manifesto}</p>
        <div className="site-footer__brand">
          <span className="brand__type">ALPINEA</span>
          <span className="brand__sub">est. MMXXVI · Puigcerdà</span>
        </div>
      </div>
      <div className="site-footer__cols">
        <div>
          <p className="site-footer__h">A</p>
          <ul>
            <li><a href="#about">{t.nav.about}</a></li>
            <li><a href="#services">{t.nav.services}</a></li>
            <li><a href="#packs">{t.nav.packs}</a></li>
            <li><a href="#venues">{t.nav.venues}</a></li>
            <li><a href="#team">{t.nav.team}</a></li>
          </ul>
        </div>
        <div>
          <p className="site-footer__h">B</p>
          <ul>
            <li><a href="#journal">{t.nav.journal}</a></li>
            <li><a href="#contact">{t.nav.contact}</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div>
          <p className="site-footer__h">C</p>
          <ul>
            {t.footer.legal.map((l, i) => <li key={i}><a href="#">{l}</a></li>)}
          </ul>
        </div>
        <div>
          <p className="site-footer__h">D</p>
          <ul className="site-footer__lang">
            {["cat","es","en"].map((l) => (
              <li key={l}>
                <button className={lang === l ? "is-active" : ""} onClick={() => setLang(l)}>
                  {l === "cat" ? "Català" : l === "es" ? "Español" : "English"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>{t.footer.copy}</span>
        <span>Web by Alpinea Studio · 2026</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Header, Hero, About, Services, Packs, Venues, Team, Journal, Contact, Footer, Plate });
