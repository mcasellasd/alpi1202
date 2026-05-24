/* global React, ALPINEA_PACKS, ALPINEA_DATA */
const { useState, useEffect } = React;

// ---------- Pack Header (breadcrumbs + hero) ----------
function PackHeader({ pack, meta }) {
  return (
    <header className="pack-header">
      <div className="pack-header__crumbs">
        <a href="../index.html">{meta.backToHome}</a>
        <span>·</span>
        <a href="../packs/cataleg-mice.html">{meta.backToPacks}</a>
      </div>
      <div className="pack-header__inner">
        <p className="eyebrow">{meta.eyebrow} — {pack.code}</p>
        <h1 className="display">{pack.name}</h1>
        <p className="pack-header__tag">{pack.tag}</p>
        <p className="pack-header__lead">{pack.hero}</p>
        <dl className="pack-header__meta">
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
          <div>
            <dt>{meta.labels.from}</dt>
            <dd>{pack.priceFrom}</dd>
          </div>
        </dl>
      </div>
    </header>
  );
}

// ---------- Pack Glance (at a glance table) ----------
function PackGlance({ pack, meta }) {
  return (
    <section className="pack-glance" id="glance">
      <div className="section__head">
        <h2 className="title">{meta.sections.glance}</h2>
      </div>
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
  return (
    <section className="pack-itinerary" id="itinerary">
      <div className="section__head">
        <h2 className="title">{meta.sections.itinerary}</h2>
      </div>
      <div className="itinerary-days">
        {pack.itinerary.map((day, dayIdx) => (
          <div key={dayIdx} className="itinerary-day">
            <button
              className={`itinerary-day__header ${expandedDay === dayIdx ? "is-expanded" : ""}`}
              onClick={() => setExpandedDay(expandedDay === dayIdx ? -1 : dayIdx)}>
              <span className="itinerary-day__num">{meta.labels.day} {day.day}</span>
              <span className="itinerary-day__title">{day.title}</span>
              <span className="itinerary-day__toggle" aria-hidden="true">↓</span>
            </button>
            {expandedDay === dayIdx && (
              <ul className="itinerary-blocks">
                {day.blocks.map(([time, activity, desc, location], blockIdx) => (
                  <li key={blockIdx} className="itinerary-block">
                    <div className="itinerary-block__time">{time}</div>
                    <div className="itinerary-block__content">
                      <strong>{activity}</strong>
                      <p>{desc}</p>
                      <span className="itinerary-block__location">{location}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- Pack Activities ----------
function PackActivities({ pack, meta }) {
  return (
    <section className="pack-activities" id="activities">
      <div className="section__head">
        <h2 className="title">{meta.sections.activities}</h2>
      </div>
      <ul className="activities-grid">
        {pack.activities.map((act, i) => (
          <li key={i} className="activity-card">
            <div className="activity-card__media">
              <window.Plate tone={act.tone} ratio="4/3" />
            </div>
            <div className="activity-card__content">
              <h3 className="activity-card__h">{act.name}</h3>
              <dl className="activity-card__meta">
                <div>
                  <dt>{meta.labels.durationTitle}</dt>
                  <dd>{act.duration}</dd>
                </div>
                <div>
                  <dt>{meta.labels.level}</dt>
                  <dd>{act.level}</dd>
                </div>
              </dl>
              <p className="activity-card__desc">{act.desc}</p>
            </div>
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
            <div className="location-card__content">
              <h3 className="location-card__h">{loc.name}</h3>
              <p className="location-card__place">{loc.place}</p>
              <p className="location-card__role">{loc.role}</p>
              {loc.capacity && loc.capacity !== "—" && (
                <p className="location-card__cap"><strong>{meta.labels.capacity}:</strong> {loc.capacity}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ---------- Pack Includes/Excludes ----------
function PackIncludes({ pack, meta }) {
  return (
    <section className="pack-includes" id="includes">
      <div className="section__head">
        <h2 className="title">{meta.sections.includes}</h2>
      </div>
      <div className="includes-grid">
        <div className="includes-column">
          <h3 className="includes-h">{meta.labels.includes}</h3>
          <ul className="includes-list">
            {pack.includes.map((item, i) => (
              <li key={i}>
                <span className="includes-check">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="includes-column">
          <h3 className="includes-h">{meta.labels.excludes}</h3>
          <ul className="excludes-list">
            {pack.excludes.map((item, i) => (
              <li key={i}>
                <span className="excludes-check">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
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
          <span className="pricing-amount">{pack.priceFrom}</span>
          <span className="pricing-unit">{meta.labels.perPax}</span>
        </p>
        <p className="pricing-note">{meta.legal}</p>
      </div>
    </section>
  );
}

// ---------- Pack FAQ ----------
function PackFAQ({ pack, meta }) {
  const [expandedIdx, setExpandedIdx] = useState(-1);
  return (
    <section className="pack-faq" id="faq">
      <div className="section__head">
        <h2 className="title">{meta.sections.faq}</h2>
      </div>
      <ul className="faq-list">
        {pack.faqs.map(([q, a], i) => (
          <li key={i} className="faq-item">
            <button
              className={`faq-q ${expandedIdx === i ? "is-expanded" : ""}`}
              onClick={() => setExpandedIdx(expandedIdx === i ? -1 : i)}>
              {q}
              <span className="faq-toggle" aria-hidden="true">+</span>
            </button>
            {expandedIdx === i && (
              <p className="faq-a">{a}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

// ---------- Pack Gallery ----------
function PackGallery({ pack, meta }) {
  return (
    <section className="pack-gallery" id="gallery">
      <div className="section__head">
        <h2 className="title">{meta.sections.gallery}</h2>
      </div>
      <ul className="gallery-grid">
        {pack.gallery.map(([tone, caption], i) => (
          <li key={i} className="gallery-item">
            <div className="gallery-media">
              <window.Plate tone={tone} ratio="5/4" caption={caption} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
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
          {meta.cta.book} <span aria-hidden="true">→</span>
        </button>
        <button className="btn btn--ghost btn--lg">
          {meta.cta.custom} <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}

// ---------- Pack App (main component) ----------
function PackApp() {
  const slug = window.PACK_SLUG || "cims-estrategia";
  const pack = ALPINEA_PACKS.packs[slug];
  const meta = ALPINEA_PACKS.meta;

  if (!pack) {
    return (
      <div className="error-state">
        <p>Pack not found: {slug}</p>
      </div>
    );
  }

  return (
    <>
      <PackHeader pack={pack} meta={meta} />
      <main className="pack-main">
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
