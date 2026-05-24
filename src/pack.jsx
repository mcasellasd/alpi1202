/* global React, ALPINEA_PACKS, ALPINEA_DATA */
const { useState, useEffect } = React;

// ---------- Pack Header (breadcrumbs + hero) ----------
function PackHeader({ pack, meta }) {
  return (
    <header className="pk-hero">
      <div className="pk-back">
        <a href="../index.html">{meta.backToHome}</a>
        <span> · </span>
        <a href="../packs/cataleg-mice.html">{meta.backToPacks}</a>
      </div>
      <div className="pk-hero__inner">
        <p className="eyebrow">{meta.eyebrow} — {pack.code}</p>
        <h1 className="pk-title">{pack.name}</h1>
        <p className="pk-tag">{pack.tag}</p>
        <p className="pk-hero-text">{pack.hero}</p>
        <dl className="pk-facts">
          <div>
            <dt>{meta.labels.duration}</dt>
            <dd>{pack.duration}</dd>
          </div>
          <div>
            <dt>{meta.labels.group}</dt>
            <dd>{pack.group}</dd>
          </div>
          <div>
            <dt>{meta.labels.season}</dt>
            <dd>{pack.season}</dd>
          </div>
          <div className="pk-facts__price">
            <dt>{meta.labels.from}</dt>
            <dd><strong>{pack.priceFrom.split(' ')[0]}</strong><span>{pack.priceFrom.split(' ')[1] || meta.labels.perPax}</span></dd>
          </div>
        </dl>
        <p className="pk-tagline">{pack.tagline}</p>
        <div className="pk-hero__ctas">
          <button className="btn btn--solid btn--lg">{meta.cta.book} <span aria-hidden="true">→</span></button>
          <button className="btn btn--ghost btn--lg">{meta.cta.custom} <span aria-hidden="true">→</span></button>
        </div>
      </div>
    </header>
  );
}k-body pk-section" id="glance">
      <div className="pk-section__head">
        <h2 className="title">{meta.sections.glance}</h2>
        <p className="pk-hero-text">{pack.idealFor}</p>
      </div>
      <ul className="pk-glance__list">
        {pack.glance.map(([label, desc], i) => (
          <li key={i}>
            <strong className="pk-glance__k">{label}</strong>
            <p className="pk-glance__v"
      <ul className="glance-list">
        {pack.glance.map(([label, desc], i) => (
          <li key={i} className="glance-item">
            <strong>{label}</strong>
            <p>{desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ---------- Pack Itinerary ----------
function PackItinerary({ pack, meta }) {
  const [expandedDay, setExpandedDay] = useState(0);
  return (k-body pk-section" id="itinerary">
      <div className="pk-section__head">
        <h2 className="title">{meta.sections.itinerary}</h2>
      </div>
      <div className="pk-itin__tabs">
        {pack.itinerary.map((day, dayIdx) => (
          <button
            key={dayIdx}
            className={`pk-itin__tab ${expandedDay === dayIdx ? "is-active" : ""}`}
            onClick={() => setExpandedDay(expandedDay === dayIdx ? -1 : dayIdx)}>
            <span className="pk-itin__tab-n">{meta.labels.day} {day.day}</span>
            <span className="pk-itin__tab-t">{day.title}</span>
          </button>
        ))}
      </div>
      {pack.itinerary.map((day, dayIdx) => expandedDay === dayIdx && (
        <ul key={dayIdx} className="pk-itin__timeline">
          {day.blocks.map(([time, activity, desc, location], blockIdx) => (
            <li key={blockIdx}>
              <span className="pk-itin__time">{time}</span>
              <span className="pk-itin__dot" aria-hidden="true"></span>
              <div className="pk-itin__content">
                <h3 className="pk-itin__label">{activity}</h3>
                <p className="pk-itin__what">{desc}</p>
                <span className="pk-itin__where">{location}</span>
              </div>
            </li>
          ))}
        </ul>
      ))}
      </div>
    </section>
  );
}

// ---------- Pack Activities ----------
function PackActivities({ pack, meta }) {
  return (
    <section className="pk-body pk-section" id="activities">
      <div className="pk-section__head">
        <h2 className="title">{meta.sections.activities}</h2>
      </div>
      <ul className="pk-act__grid">
        {pack.activities.map((act, i) => (
          <li key={i} className="pk-act">
            <window.Plate tone={act.tone} ratio="4/3" />
            <h3 className="pk-act__h">{act.name}</h3>
            <dl className="pk-act__meta">
              <div><strong>{act.duration}</strong></div>
              <div><strong>{act.level}</strong></div>
            </dl>
            <p className="pk-act__d">{act.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ---------- Pack Locations ----------
function PackLocations({ pack, meta }) {
  return (
    <section className="pack-locations" id="locations">
      <div className="section__head">
        <h2 className="title">{meta.sections.locations}</h2>
      </div>
      <ul className="locations-list">
        {pack.locations.map((loc, i) => (
          <li key={i} className="location-card">
            <div className="location-card__media">
              <window.Plate tone={loc.tone} ratio="16/9" />
            </div>
            <div classNamk-body pk-section" id="locations">
      <div className="pk-section__head">
        <h2 className="title">{meta.sections.locations}</h2>
      </div>
      <div className="pk-loc__layout">
        <ul className="pk-loc__list">
          {pack.locations.map((loc, i) => (
            <li key={i} className="pk-loc">
              <div className="pk-loc__media">
                <window.Plate tone={loc.tone} ratio="1/1" />
                <span className="pk-loc__n">{i + 1}</span>
              </div>
              <div className="pk-loc__copy">
                <h3 className="pk-loc__h">{loc.name}</h3>
                <p className="pk-loc__place">{loc.place}</p>
                <p className="pk-loc__role">{loc.role}</p>
                {loc.capacity && loc.capacity !== "—" && (
                  <p className="pk-loc__cap">{meta.labels.capacity}: {loc.capacity}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div2 className="title">{meta.sections.includes}</h2>
      </div>
      <div className="includes-grid">
        <div className="includes-column">
          <h3 className="includes-h">{meta.labels.includes}</h3>
          <ul className="k-body pk-section" id="includes">
      <div className="pk-section__head">
        <h2 className="title">{meta.sections.includes}</h2>
      </div>
      <div className="pk-incl__grid">
        <div>
          <h3 className="pk-incl__h pk-incl__h--in">{meta.labels.includes}</h3>
          <ul className="pk-incl__list pk-incl__list--in">
            {pack.includes.map((item, i) => (
              <li key={i}>
                <span className="pk-incl__bullet">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="pk-incl__h pk-incl__h--out">{meta.labels.excludes}</h3>
          <ul className="pk-incl__list pk-incl__list--out">
            {pack.excludes.map((item, i) => (
              <li key={i}>
                <span className="pk-incl__bullet
  );
}

// ---------- Pack Pricing ----------
function PackPricing({ pack, meta }) {
  return (
    <section className="pack-pricing" id="pricing">
      <div className="section__head">
        <h2 className="title">{meta.sections.pricing}</h2>
      </div>
      <div className="pricing-box">
        <p className="pricing-base">
          <span className="pricing-label">{meta.labels.base}</span>
  const priceParts = pack.priceFrom.split(' ');
  return (
    <section className="pk-body pk-section" id="pricing">
      <div className="pk-section__head">
        <h2 className="title">{meta.sections.pricing}</h2>
      </div>
      <div className="pk-price__card">
        <div className="pk-price__main">
          <span className="pk-price__k">{meta.labels.base}</span>
          <div className="pk-price__v">
            <strong>{priceParts[0]}</strong>
            <span>{meta.labels.perPax}</span>
          </div>
        </div>
        <p className="pk-price__legaldx] = useState(-1);
  return (
    <section className="pack-faq" id="faq">
      <div className="section__head">
        <h2 className="title">{meta.sections.faq}</h2>
      </div>
      <ul className="faq-list">
        {pack.faqs.map(([k-body pk-section" id="faq">
      <div className="pk-section__head">
        <h2 className="title">{meta.sections.faq}</h2>
      </div>
      <ul className="pk-faqs__list">
        {pack.faqs.map(([q, a], i) => (
          <li key={i} className={expandedIdx === i ? "is-open" : ""}>
            <button onClick={() => setExpandedIdx(expandedIdx === i ? -1 : i)}>
              <span className="pk-faqs__n">{i + 1}</span>
              <span className="pk-faqs__q">{q}</span>
              <span className={`pk-faqs__chev ${expandedIdx === i ? "is-open" : ""}`} aria-hidden="true">+</span>
            </button>
            <div className="pk-faqs__a">
              <p>{a}</p>
            </div>
}

// ---------- Pack Gallery ----------
function PackGallery({ pack, meta }) {
  return (
    <section className="pack-gallery" id="gallery">
      <div className="section__head">
        <h2 className="title">{meta.sections.gallery}</h2>
      </div>
      <ul className="gallery-grid">
        {pack.gallery.mapk-body pk-section" id="gallery">
      <div className="pk-section__head">
        <h2 className="title">{meta.sections.gallery}</h2>
      </div>
      <ul className="pk-gal__grid">
        {pack.gallery.map(([tone, caption], i) => (
          <li key={i} className={`pk-gal__cell pk-gal__cell--${i}`}>
            <window.Plate tone={tone} ratio="1/1" caption={caption} /
}

// ---------- Pack Contact ----------
function PackContact({ pack, meta }) {
  return (
    <section className="pack-contact" id="contact">
      <div className="section__head">
        <h2 className="title">{meta.sections.contact}</h2>
        <p className="section__lead">{pack.tagline}</p>
      </div>
      <div className="contact-ctas">
        <button className="btn btn--solid btn--lg">
          {meta.cta.book}k-contact pk-section" id="contact">
      <div className="pk-body">
        <div className="pk-contact__inner">
          <div>
            <p className="eyebrow">{meta.sections.contact}</p>
            <h2 className="title">{pack.name}</h2>
            <p className="section__lead">{pack.idealFor}</p>
          </div>
          <div>
            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
              <button className="btn btn--solid btn--lg">
                {meta.cta.book} <span aria-hidden="true">→</span>
              </button>
              <button className="btn btn--ghost btn--lg">
                {meta.cta.custom} <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div() {
  const slug = window.PACK_SLUG || "cims-estrategia";
  const pack = ALPINEA_PACKS.packs[slug];
  const meta = ALPINEA_PACKS.meta;

  if (!pack) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center' }}>
        <p>Pack not found: {slug}</p>
      </div>
    );
  }

  return (
    <>
      <PackHeader pack={pack} meta={meta} />
      <main className="pk-page">
        <PackGlance pack={pack} meta={meta} />
        <PackItinerary pack={pack} meta={meta} />
        <PackActivities pack={pack} meta={meta} />
        <PackLocations pack={pack} meta={meta} />
        <PackIncludes pack={pack} meta={meta} />
        <PackPricing pack={pack} meta={meta} />
        <PackFAQ pack={pack} meta={meta} />
        <PackGallery pack={pack} meta={meta} />
        <PackContact pack={pack} meta={meta} />
      </main>
    </>
  );
}

// Export to window for in-browser JSX loading
window.PackApp = PackApp;
