/* global React */
const { useState, useEffect, useRef } = React;

// ============================================================
// ALPINEA — Catàleg MICE 2026
// A unified, brochure-style catalog: cover, TOC, manifest,
// comparison, pack dossiers, modules, venues, conditions, CTA.
// ============================================================

function CatCover({ meta }) {
  return (
    <section className="cat-cover" id="cover">
      <div className="cat-cover__top">
        <span><em>ALPINEA</em><span className="cat-cover__rule"></span> Catàleg MICE 2026</span>
        <span>Vol. 01 <span className="cat-cover__rule"></span> Cerdanya · 1.200 m</span>
      </div>
      <div className="cat-cover__inner">
        <div>
          <p className="cat-cover__eyebrow">Edició MMXXVI · Set–Jun</p>
          <h1 className="cat-cover__title">
            Catàleg<br/>MICE<br/>
            <em>Cerdanya</em>
          </h1>
          <p className="cat-cover__lead">
            Quatre programes tancats per a comitès, equips comercials, premsa i clients VIP, dissenyats
            entre Puigcerdà, Llívia i Bellver. Cada pack és un punt de partida — el personalitzem amb tu
            en una trucada.
          </p>
          <dl className="cat-cover__meta">
            <div><dt>Edició</dt><dd>2026 · Vol. 01</dd></div>
            <div><dt>Packs</dt><dd>4 programes</dd></div>
            <div><dt>Espais</dt><dd>38 venues</dd></div>
            <div><dt>Vall</dt><dd>Cerdanya</dd></div>
          </dl>
        </div>
        <div className="cat-cover__art">
          <window.Plate tone="summit" className="cca-1" ratio="1/1" />
          <window.Plate tone="crowd" className="cca-2" ratio="1/1" />
          <window.Plate tone="table" className="cca-3" ratio="1/1" />
          <window.Plate tone="ice" className="cca-4" ratio="1/1" />
          <div className="cat-cover__stamp">
            Selecció<strong>2026</strong>Cerdanya
          </div>
        </div>
      </div>
    </section>
  );
}

function CatToc({ packs }) {
  const items = [
    ["00", "Manifest", "Per què aquest catàleg"],
    ["01", "Comparativa", "Els quatre packs, d'una ullada"],
    ...packs.map((p, i) => [p.code, p.name, p.tag]),
    ["05", "Mòduls a la carta", "Activitats i extres modulars"],
    ["06", "Xarxa d'espais", "Sis venues d'una xarxa de 38"],
    ["07", "Condicions", "Preus, terminis, política"],
    ["08", "Contacte", "Parla amb el teu director"],
  ];
  return (
    <section className="cat-toc" id="index">
      <div className="cat-body cat-toc__inner">
        <p className="cat-toc__title"><small>Índex</small>Catàleg 2026</p>
        <nav className="cat-toc__list">
          {items.map((it, i) => {
            const [n, t, p] = it;
            const slug = n.startsWith("P") ? `pack-${n}` : `s-${n}`;
            return (
              <a key={i} href={`#${slug}`}>
                <span className="cat-toc__n">{n}</span>
                <span className="cat-toc__t">{t}</span>
                <span className="cat-toc__p">{p}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </section>
  );
}

function CatManifest() {
  return (
    <section className="cat-manifest" id="s-00">
      <div className="cat-manifest__grid">
        <p className="cat-manifest__label">00 — Manifest</p>
        <div>
          <p className="cat-manifest__text">
            Treballem en una vall de 70 km <em>on tothom es coneix</em>. Per això podem oferir
            quatre packs que <em>realment funcionen</em>: hem dormit, dinat i caminat per
            cadascun dels espais abans d'incorporar-los a aquest catàleg.
          </p>
          <p className="cat-manifest__sig">
            <span><strong>Núria Brangulí</strong><br/>Direcció general</span>
            <span><strong>Marc Pons</strong><br/>Direcció de producció</span>
            <span><strong>Jordi Tomàs</strong><br/>DMC &amp; operacions</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function CatCompare({ packs }) {
  const toneDot = (tone) => {
    const map = {
      alpine: "#9a9482", crowd: "#a86434", ice: "#a8b8c0",
      forest: "#5a6f54", stone: "#8a7a64", wine: "#9a4a3a",
    };
    return map[tone] || "#999";
  };
  const rows = [
    ["Tagline", (p) => p.tagline, "tagline"],
    ["Durada", (p) => p.duration],
    ["Grup", (p) => p.group],
    ["Temporada", (p) => p.season],
    ["Preu des de", (p) => <><strong>{p.priceFrom}</strong> / pax</>],
    ["Ideal per a", (p) => p.idealFor],
  ];
  return (
    <section className="cat-section" id="s-01">
      <div className="cat-body">
        <header className="cat-section__head">
          <span className="cat-section__n">01</span>
          <h2 className="cat-section__h">
            <small>Comparativa</small>
            Els quatre packs, d'una ullada.
          </h2>
        </header>
        <p className="cat-section__lead">
          Una taula per veure'ls junts: durada, mida, temporada i preu base. Tots són
          personalitzables; aquesta versió és el nostre punt de partida més habitual.
        </p>
        <div className="cat-compare">
          <table>
            <thead>
              <tr>
                <th className="cat-compare__row-h"></th>
                {packs.map((p) => (
                  <th key={p.code}>
                    <small>{p.code} · {p.tag}</small>
                    <span className="cat-compare__tone" style={{ background: toneDot(p.tone) }}></span>
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, fn, cls], i) => (
                <tr key={i} className={cls ? `cat-compare__${cls}` : ""}>
                  <td className="cat-compare__row-h">{label}</td>
                  {packs.map((p) => <td key={p.code}>{fn(p)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function CatPack({ pack, index }) {
  return (
    <article className="cat-pack" id={`pack-${pack.code}`}>
      <div className="cat-body">
        <header className="cat-pack__head">
          <div>
            <div className="cat-pack__id">
              <span className="cat-pack__code">{pack.code}</span>
              <span className="cat-pack__tag">{pack.tag}</span>
            </div>
            <h2 className="cat-pack__name">{pack.name}</h2>
            <p className="cat-pack__tagline">{pack.tagline}</p>
          </div>
          <div className="cat-pack__media">
            <window.Plate tone={pack.tone} ratio="16/9" />
            <span className="cat-pack__media-cap">Pack {pack.code} · {pack.duration}</span>
          </div>
        </header>

        <div className="cat-pack__body">
          <div>
            <p className="cat-pack__hero-text">{pack.hero}</p>

            <dl className="cat-pack__facts">
              <div><dt>Durada</dt><dd>{pack.duration}</dd></div>
              <div><dt>Grup</dt><dd>{pack.group}</dd></div>
              <div><dt>Temporada</dt><dd>{pack.season}</dd></div>
              <div><dt>Des de</dt><dd><strong>{pack.priceFrom}</strong><span className="unit">/ pax</span></dd></div>
            </dl>

            <div className="cat-pack__ideal">
              <span className="cat-pack__ideal-k">Ideal per a</span>
              <p className="cat-pack__ideal-v">{pack.idealFor}</p>
            </div>

            <div className="cat-pack__actions">
              <a className="btn btn--solid" href={`packs/${pack.slug}.html`}>
                Veure el pack complet <span aria-hidden="true">→</span>
              </a>
              <a className="btn btn--ghost" href="#s-08">Reservar</a>
            </div>
          </div>

          <div>
            <ul className="cat-pack__glance">
              {pack.glance.map(([k, v], i) => (
                <li key={i}>
                  <span className="cat-pack__glance-k">{k}</span>
                  <span className="cat-pack__glance-v">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="cat-pack__deep">
          <div>
            <h4 className="cat-pack__deep-h">Què inclou</h4>
            <ul className="cat-pack__deep-list cat-pack__deep-list--in">
              {pack.includes.slice(0, 6).map((it, i) => <li key={i}>{it}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="cat-pack__deep-h">Activitats principals</h4>
            <ul className="cat-pack__deep-list cat-pack__deep-list--in">
              {pack.activities.map((a, i) => (
                <li key={i}><strong style={{color: "var(--ink)", fontWeight: 500}}>{a.name}</strong> · {a.duration}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

function CatModules({ packs }) {
  // Aggregate all activities across packs as "modules a la carta"
  const all = [];
  packs.forEach((p) => {
    p.activities.forEach((a) => {
      if (!all.find((x) => x.name === a.name)) {
        all.push({ ...a, from: p.code });
      }
    });
  });
  return (
    <section className="cat-section" id="s-05">
      <div className="cat-body">
        <header className="cat-section__head">
          <span className="cat-section__n">05</span>
          <h2 className="cat-section__h">
            <small>Mòduls a la carta</small>
            Activitats i extres que pots afegir a qualsevol pack.
          </h2>
        </header>
        <p className="cat-section__lead">
          Els nostres mòduls més reservats. Es poden combinar amb qualsevol dels quatre packs
          o utilitzar com a punt de partida d'un programa a mida.
        </p>
        <div className="cat-modules__grid">
          {all.map((m, i) => (
            <div key={i} className="cat-module">
              <p className="cat-module__n">M{String(i + 1).padStart(2, "0")}</p>
              <h3 className="cat-module__h">{m.name}</h3>
              <p className="cat-module__d">{m.desc}</p>
              <div className="cat-module__meta">
                <span><strong>{m.duration}</strong></span>
                <span>Nivell · {m.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CatVenues({ t }) {
  const venues = t.venues.list;
  return (
    <section className="cat-section" id="s-06">
      <div className="cat-body">
        <header className="cat-section__head">
          <span className="cat-section__n">06</span>
          <h2 className="cat-section__h">
            <small>Xarxa d'espais</small>
            Sis venues seleccionats d'una xarxa de 38.
          </h2>
        </header>
        <p className="cat-section__lead">{t.venues.lead}</p>
        <div className="cat-venues__grid">
          {venues.map((v, i) => (
            <article key={i} className="cat-venue">
              <div className="cat-venue__media">
                <window.Plate tone={v.tone} ratio="4/3" />
                <span className="cat-venue__num">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <p className="cat-venue__place">{v.place}</p>
                <h3 className="cat-venue__h">{v.name}</h3>
                <p className="cat-venue__cap">{v.capacity}</p>
                <ul className="cat-venue__tags">
                  {v.tags.map((tag, j) => <li key={j}>{tag}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CatConditions() {
  const includes = [
    "Acompanyament d'una sola persona (account director) des de la primera trucada.",
    "Pressupost detallat amb tots els proveïdors visibles, en menys de 5 dies laborables.",
    "Producció integral: logística, F&B, allotjament, activitats, transfers i AV.",
    "Briefing inicial gratuït (1 trucada de 45 min) sense compromís.",
    "Acta visual o aftermovie, segons pack, com a lliurable final.",
  ];
  const excludes = [
    "Transports d'origen (vols, AVE) fins als punts d'arribada acordats.",
    "Begudes premium fora dels maridatges contractats.",
    "Despeses personals i propines de l'equip de servei.",
    "IVA i taxes turístiques municipals.",
    "Assegurances específiques (esquí, esports, anul·lació) — gestionables apart.",
  ];
  return (
    <section className="cat-cond" id="s-07">
      <div className="cat-cond__inner">
        <header className="cat-cond__head">
          <span className="cat-section__n">07</span>
          <h2 className="cat-section__h">
            <small>Condicions</small>
            Com treballem, què inclouen els preus i què no.
          </h2>
        </header>
        <div className="cat-cond__grid">
          <div className="cat-cond__col">
            <h3>El que sempre inclou</h3>
            <ul className="cat-cond__list">
              {includes.map((it, i) => (
                <li key={i}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="cat-cond__col">
            <h3>El que no inclou per defecte</h3>
            <ul className="cat-cond__list">
              {excludes.map((it, i) => (
                <li key={i}>
                  <span>—</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="cat-cond__legal">
          Preus per persona, IVA no inclòs. Disponibilitat segons temporada. Mínim el nombre indicat
          de pax. Tots els nostres packs es poden adaptar a la mida del grup, al sector i a objectius
          específics; la versió base d'aquest catàleg és el punt de partida.
          © 2026 ALPINEA SL · CIF B-09877654 · Inscrita al Registre Mercantil de Girona.
        </p>
      </div>
    </section>
  );
}

function CatCta() {
  return (
    <section className="cat-cta" id="s-08">
      <div className="cat-cta__inner">
        <div>
          <p className="eyebrow" style={{color: "color-mix(in oklab, white 70%, transparent)"}}>08 — Contacte</p>
          <h2 className="cat-cta__title">
            Trucada de 45 min,<br/>
            <em>i et tornem una proposta concreta en 5 dies.</em>
          </h2>
          <p className="cat-cta__lead">
            Sigui un dels packs d'aquest catàleg o una versió a mida, el procés és el mateix:
            t'escoltem, et proposem i ho produïm. Sense intermediaris.
          </p>
          <div className="cat-cta__actions">
            <a className="btn btn--solid btn--lg" href="index.html#contact">
              Sol·licitar proposta <span aria-hidden="true">→</span>
            </a>
            <a className="btn btn--ghost btn--lg" href="#" onClick={(e) => { e.preventDefault(); window.print(); }}>
              Descarregar catàleg (PDF)
            </a>
          </div>
        </div>
        <ul className="cat-cta__info">
          <li>
            <span className="cat-cta__info-k">Estudi</span>
            <span className="cat-cta__info-v">Plaça dels Herois, 4 · 17520 Puigcerdà</span>
          </li>
          <li>
            <span className="cat-cta__info-k">Email</span>
            <span className="cat-cta__info-v">hola@alpinea.cat</span>
          </li>
          <li>
            <span className="cat-cta__info-k">Telèfon</span>
            <span className="cat-cta__info-v">+34 972 14 02 88</span>
          </li>
          <li>
            <span className="cat-cta__info-k">Horari</span>
            <span className="cat-cta__info-v">Dl–Dv · 9.00–18.30</span>
          </li>
          <li>
            <span className="cat-cta__info-k">Resposta</span>
            <span className="cat-cta__info-v">&lt; 24 h laborables · pressupost en 5 dies</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

function CatSideNav({ packs }) {
  const stops = [
    ["00", "s-00", "Manifest"],
    ["01", "s-01", "Comparativa"],
    ...packs.map((p) => [p.code, `pack-${p.code}`, p.name]),
    ["05", "s-05", "Mòduls"],
    ["06", "s-06", "Espais"],
    ["07", "s-07", "Condicions"],
    ["08", "s-08", "Contacte"],
  ];
  const [active, setActive] = useState("s-00");
  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight / 2;
      let best = stops[0][1];
      for (const [, id] of stops) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= mid) best = id;
      }
      setActive(best);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
  };
  return (
    <nav className="cat-snav" aria-label="Catalog index">
      {stops.map(([n, id, tip]) => (
        <button
          key={id}
          className={active === id ? "is-active" : ""}
          data-tip={tip}
          onClick={() => scrollTo(id)}
          aria-label={tip}
        >
          {n}
        </button>
      ))}
    </nav>
  );
}

function CatalegApp() {
  const [lang, setLang] = useState("cat");
  const t = window.ALPINEA_DATA[lang];
  const packsMap = window.ALPINEA_PACKS.packs;
  const packs = ["cims-estrategia", "kick-off-cerdanya", "snow-incentive", "estiu-editorial"].map(
    (slug) => packsMap[slug]
  );

  useEffect(() => {
    document.title = "Catàleg MICE 2026 · ALPINEA";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <window.Header
        t={t} lang={lang} setLang={setLang}
        openContact={() => {
          document.getElementById("s-08")?.scrollIntoView({ behavior: "smooth" });
        }}
        mode="article"
      />
      <CatSideNav packs={packs} />
      <main className="cat-page">
        <CatCover />
        <CatToc packs={packs} />
        <div className="cat-body">
          <CatManifest />
          <CatCompare packs={packs} />
          {packs.map((p, i) => <CatPack key={p.slug} pack={p} index={i} />)}
          <CatModules packs={packs} />
          <CatVenues t={t} />
        </div>
        <CatConditions />
        <CatCta />
      </main>
      <window.Footer t={t} lang={lang} setLang={setLang} />
    </>
  );
}

window.CatalegApp = CatalegApp;
