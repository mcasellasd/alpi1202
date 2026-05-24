/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;

function App() {
  const [lang, setLang] = useState("cat");
  const t = window.ALPINEA_DATA[lang];
  const contactRef = useRef(null);

  // Tweaks
  const TWEAKS_DEFAULTS = /*EDITMODE-BEGIN*/{
    "palette": "forest",
    "displayFont": "serif",
    "density": "comfortable",
    "heroLayout": "grid"
  }/*EDITMODE-END*/;
  const [tweaks, setTweak] = window.useTweaks(TWEAKS_DEFAULTS);

  // Apply tweaks to root
  useEffect(() => {
    const r = document.documentElement;
    const palettes = {
      forest: { bg: "#f5f1ea", ink: "#1a2418", paper: "#ffffff", accent: "#1f3a2a", accent2: "#a04a2b", muted: "#8a8478" },
      midnight: { bg: "#0e1a14", ink: "#f1ede2", paper: "#152620", accent: "#cfb98b", accent2: "#e89060", muted: "#7a8278" },
      sand: { bg: "#ebe4d4", ink: "#2a2418", paper: "#f7f2e6", accent: "#4a3a24", accent2: "#a86434", muted: "#8a8270" },
      slate: { bg: "#eaecef", ink: "#0f1620", paper: "#ffffff", accent: "#1a3a5a", accent2: "#a86434", muted: "#6b7280" },
    };
    const p = palettes[tweaks.palette] || palettes.forest;
    Object.entries(p).forEach(([k, v]) => r.style.setProperty(`--${k}`, v));
    r.style.setProperty("--font-display",
      tweaks.displayFont === "sans" ? "'Marcellus', 'Cormorant Garamond', serif"
      : tweaks.displayFont === "modern" ? "'Tenor Sans', 'Marcellus', serif"
      : "'Cormorant Garamond', 'EB Garamond', serif");
    r.style.setProperty("--gap", tweaks.density === "compact" ? "5rem" : tweaks.density === "airy" ? "11rem" : "8rem");
    r.dataset.hero = tweaks.heroLayout;
  }, [tweaks]);

  const openContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <window.Header t={t} lang={lang} setLang={setLang} openContact={openContact} />
      <main>
        <window.Hero t={t} openContact={openContact} />
        <window.About t={t} />
        <window.Services t={t} openContact={openContact} />
        <window.Packs t={t} openContact={openContact} />
        <window.Venues t={t} />
        <window.Team t={t} />
        <window.Journal t={t} />
        <window.Contact t={t} contactRef={contactRef} />
      </main>
      <window.Footer t={t} lang={lang} setLang={setLang} />

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection title="Brand">
          <window.TweakColor
            label="Palette"
            value={tweaks.palette}
            onChange={(v) => setTweak("palette", v)}
            options={[
              ["#1f3a2a","#f5f1ea","#a04a2b"],
              ["#cfb98b","#0e1a14","#e89060"],
              ["#4a3a24","#ebe4d4","#a86434"],
              ["#1a3a5a","#eaecef","#a86434"],
            ]}
            optionLabels={["Forest","Midnight","Sand","Slate"]}
            optionValues={["forest","midnight","sand","slate"]}
          />
        </window.TweakSection>
        <window.TweakSection title="Type">
          <window.TweakRadio
            label="Display font"
            value={tweaks.displayFont}
            onChange={(v) => setTweak("displayFont", v)}
            options={[
              { value: "serif", label: "Cormorant" },
              { value: "sans",  label: "Marcellus" },
              { value: "modern", label: "Tenor" },
            ]}
          />
        </window.TweakSection>
        <window.TweakSection title="Layout">
          <window.TweakRadio
            label="Density"
            value={tweaks.density}
            onChange={(v) => setTweak("density", v)}
            options={[
              { value: "compact", label: "Compact" },
              { value: "comfortable", label: "Comfort" },
              { value: "airy", label: "Airy" },
            ]}
          />
          <window.TweakRadio
            label="Hero"
            value={tweaks.heroLayout}
            onChange={(v) => setTweak("heroLayout", v)}
            options={[
              { value: "grid", label: "Image grid" },
              { value: "single", label: "Single image" },
            ]}
          />
        </window.TweakSection>
      </window.TweaksPanel>
    </>
  );
}

// Tiny shim: TweakColor in starter expects single colors; we pass palette arrays.
// Patch it to accept optionValues + optionLabels mapping.
(function patchColor() {
  const orig = window.TweakColor;
  if (!orig) return;
  window.TweakColor = function PatchedTweakColor(props) {
    if (props.optionValues) {
      const { optionValues, optionLabels = [], options, value, onChange, label } = props;
      return (
        <div className="tweak tweak--color">
          <label className="tweak__label">{label}</label>
          <div className="tweak__swatches">
            {options.map((palette, i) => {
              const v = optionValues[i];
              const isActive = v === value;
              return (
                <button key={i} type="button"
                  className={`swatch-card ${isActive ? "is-active" : ""}`}
                  onClick={() => onChange(v)}
                  title={optionLabels[i]}>
                  <span className="swatch-card__strip">
                    {palette.map((c, j) => (
                      <span key={j} className="swatch-card__chip" style={{ background: c }} />
                    ))}
                  </span>
                  <span className="swatch-card__name">{optionLabels[i]}</span>
                </button>
              );
            })}
          </div>
        </div>
      );
    }
    return orig(props);
  };
})();

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
