/* global React */
const { useState } = React;

function JournalHero({ meta, featured }) {
  return (
    <section className="j-hero">
      <div className="j-hero__inner">
        <div className="j-hero__head">
          <p className="eyebrow">{meta.eyebrow}</p>
          <h1 className="display j-hero__title">{meta.title}</h1>
          <p className="j-hero__lead">{meta.lead}</p>
        </div>
        {featured ? (
          <a className="j-feature" href={`journal/${featured.slug}.html`}>
            <div className="j-feature__media">
              <window.Plate tone={featured.tone} ratio="16/10" />
              <span className="j-feature__tag">{featured.categoryName}</span>
            </div>
            <div className="j-feature__copy">
              <p className="j-feature__meta">{featured.date} · {featured.readTime} min</p>
              <h2 className="j-feature__h">{featured.title}</h2>
              <p className="j-feature__dek">{featured.dek}</p>
              <span className="link-arrow">Llegir <span aria-hidden="true">→</span></span>
            </div>
          </a>
        ) : null}
      </div>
    </section>
  );
}

function JournalFilters({ categories, active, setActive, counts }) {
  return (
    <div className="j-filters">
      <span className="j-filters__label">Filtrar per</span>
      <ul className="j-filters__list" role="tablist">
        {categories.map((c) => (
          <li key={c.slug}>
            <button
              role="tab"
              aria-selected={active === c.slug}
              className={`j-chip ${active === c.slug ? "is-active" : ""}`}
              onClick={() => setActive(c.slug)}>
              {c.name}
              <span className="j-chip__n">{counts[c.slug]}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function JournalGrid({ articles }) {
  if (!articles.length) {
    return <p className="j-empty">Encara no hi ha entrades en aquesta categoria. Aviat n'hi haurà.</p>;
  }
  return (
    <ul className="j-grid">
      {articles.map((a) => (
        <li key={a.slug} className="j-card">
          <a href={`journal/${a.slug}.html`}>
            <div className="j-card__media">
              <window.Plate tone={a.tone} ratio="5/4" />
            </div>
            <p className="j-card__meta">
              <span className="j-card__cat">{a.categoryName}</span>
              <span>·</span>
              <span>{a.readTime} min</span>
            </p>
            <h3 className="j-card__h">{a.title}</h3>
            <p className="j-card__dek">{a.dek}</p>
            <span className="link-arrow">Llegir <span aria-hidden="true">→</span></span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function JournalNewsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <section className="j-news">
      <div className="j-news__inner">
        <p className="eyebrow">Newsletter</p>
        <h2 className="title">Rep el Diari al teu correu.</h2>
        <p className="section__lead">
          Una nota mensual. Cap promoció comercial, cap pop-up, cap traça d'estratègia agressiva. Només el que estem llegint, escrivint i produint des de la vall.
        </p>
        <form className="j-news__form" onSubmit={submit}>
          <input
            type="email"
            placeholder="el-teu@correu.cat"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="btn btn--solid" type="submit" disabled={sent}>
            {sent ? "✓ Apuntat" : "Apuntar-m'hi"} <span aria-hidden="true">→</span>
          </button>
        </form>
        <p className="j-news__small">
          Pots donar-te de baixa quan vulguis. La política de privacitat és curta i raonable.
        </p>
      </div>
    </section>
  );
}

function JournalApp() {
  const [lang, setLang] = useState("cat");
  const t = window.ALPINEA_DATA[lang];
  const { meta, articles } = window.ALPINEA_JOURNAL;
  const [active, setActive] = useState("all");

  const featured = articles.find((a) => a.featured) || articles[0];
  const visible = active === "all" ? articles : articles.filter((a) => a.category === active);
  const counts = meta.categories.reduce((acc, c) => {
    acc[c.slug] = c.slug === "all" ? articles.length : articles.filter((a) => a.category === c.slug).length;
    return acc;
  }, {});

  return (
    <>
      <window.Header t={t} lang={lang} setLang={setLang} openContact={() => { window.location.href = "index.html#contact"; }} mode="journal" />
      <main className="journal-page">
        <JournalHero meta={meta} featured={featured} />
        <section className="j-listing section">
          <JournalFilters categories={meta.categories} active={active} setActive={setActive} counts={counts} />
          <JournalGrid articles={visible} />
        </section>
        <JournalNewsletter />
      </main>
      <window.Footer t={t} lang={lang} setLang={setLang} />
    </>
  );
}

window.JournalApp = JournalApp;
