/* global React */
const { useState, useEffect } = React;

function ArticleBlock({ block, articleTone }) {
  switch (block.type) {
    case "lede":
      return <p className="a-lede">{block.text}</p>;
    case "p":
      return <p className="a-p">{block.text}</p>;
    case "h2":
      return <h2 className="a-h2">{block.text}</h2>;
    case "h3":
      return <h3 className="a-h3">{block.text}</h3>;
    case "pull":
      return (
        <blockquote className="a-pull">
          <span className="a-pull__mark" aria-hidden="true">"</span>
          <p>{block.text}</p>
        </blockquote>
      );
    case "image":
      return (
        <figure className="a-figure">
          <window.Plate tone={block.tone || articleTone} ratio="16/10" />
          {block.caption ? <figcaption>{block.caption}</figcaption> : null}
        </figure>
      );
    case "list":
      return (
        <ul className="a-list">
          {block.items.map((it, i) => (
            <li key={i}>
              <span className="a-list__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="a-list__txt">{it}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="a-quote">
          <p>"{block.text}"</p>
          {block.cite ? <cite>— {block.cite}</cite> : null}
        </blockquote>
      );
    default:
      return null;
  }
}

function ArticleProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="a-progress" aria-hidden="true">
      <div className="a-progress__bar" style={{ width: `${pct}%` }} />
    </div>
  );
}

function ArticleApp() {
  const [lang, setLang] = useState("cat");
  const t = window.ALPINEA_DATA[lang];
  const { meta, articles } = window.ALPINEA_JOURNAL;
  const slug = window.ARTICLE_SLUG;
  const article = articles.find((a) => a.slug === slug) || articles[0];
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  useEffect(() => {
    document.title = `${article.title} · ALPINEA Diari`;
    window.scrollTo(0, 0);
  }, [article]);

  return (
    <>
      <window.Header t={t} lang={lang} setLang={setLang} openContact={() => { window.location.href = "../index.html#contact"; }} mode="article" />
      <ArticleProgress />
      <main className="article-page">
        <header className="a-hero">
          <div className="a-hero__inner">
            <p className="a-back"><a href="../journal.html"><span aria-hidden="true">←</span> {meta.backToJournal}</a></p>
            <p className="a-eyebrow">{article.categoryName}</p>
            <h1 className="a-title">{article.title}</h1>
            <p className="a-dek">{article.dek}</p>
            <div className="a-byline">
              <div className="a-byline__col">
                <span className="a-byline__k">{meta.by}</span>
                <span className="a-byline__v">{article.author}</span>
              </div>
              <div className="a-byline__col">
                <span className="a-byline__k">{meta.publishedOn}</span>
                <span className="a-byline__v">{article.date}</span>
              </div>
              <div className="a-byline__col">
                <span className="a-byline__k">Lectura</span>
                <span className="a-byline__v">{article.readTime} {meta.minRead}</span>
              </div>
              <div className="a-byline__col a-byline__col--share">
                <span className="a-byline__k">{meta.share}</span>
                <span className="a-share">
                  <button onClick={() => navigator.clipboard?.writeText(window.location.href)} title="Copiar enllaç">⌘</button>
                  <a href="#" title="LinkedIn">in</a>
                  <a href="#" title="X">𝕏</a>
                </span>
              </div>
            </div>
          </div>
          <div className="a-cover">
            <window.Plate tone={article.tone} ratio="21/9" />
          </div>
        </header>

        <article className="a-body">
          <div className="a-body__inner">
            {article.body.map((b, i) => (
              <ArticleBlock key={i} block={b} articleTone={article.tone} />
            ))}
            <hr className="a-sep" />
            <p className="a-signature">— {article.author}</p>
          </div>
        </article>

        <section className="a-related">
          <div className="a-related__inner">
            <p className="eyebrow">{meta.related}</p>
            <ul className="a-related__grid">
              {related.map((a) => (
                <li key={a.slug}>
                  <a href={`${a.slug}.html`}>
                    <window.Plate tone={a.tone} ratio="5/4" />
                    <p className="a-related__meta">{a.categoryName} · {a.readTime} min</p>
                    <h3 className="a-related__h">{a.title}</h3>
                  </a>
                </li>
              ))}
            </ul>
            <div className="a-related__cta">
              <a className="btn btn--ghost" href="../journal.html">{meta.backToJournal} <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>
      </main>
      <window.Footer t={t} lang={lang} setLang={setLang} />
    </>
  );
}

window.ArticleApp = ArticleApp;
