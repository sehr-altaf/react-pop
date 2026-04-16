import React, { useEffect, useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink: #0e0c09;
    --paper: #f5f0e8;
    --accent: #c84b2f;
    --muted: #8c8070;
    --border: #d4cdc0;
  }

  body {
    background: var(--paper);
    color: var(--ink);
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
  }

  .fp-root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }


  .fp-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 3rem;
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    background: var(--paper);
    z-index: 10;
  }

  .fp-logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.35rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--ink);
    text-decoration: none;
  }

  .fp-logo span { color: var(--accent); }

  .fp-nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  .fp-nav-links a {
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.2s;
  }

  .fp-nav-links a:hover { color: var(--ink); }

  .fp-nav-cta {
    background: var(--ink);
    color: var(--paper) !important;
    padding: 0.5rem 1.25rem;
    border-radius: 2px;
    transition: background 0.2s !important;
  }

  .fp-nav-cta:hover { background: var(--accent) !important; color: var(--paper) !important; }

  
  .fp-hero {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    padding: 5rem 3rem 4rem;
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;
    align-items: center;
  }

  .fp-hero-text { padding-right: 4rem; }

  .fp-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent);
    font-weight: 500;
    margin-bottom: 1.5rem;
    opacity: 0;
    animation: fadeUp 0.6s 0.1s forwards;
  }

  .fp-eyebrow::before {
    content: '';
    display: block;
    width: 2rem;
    height: 1px;
    background: var(--accent);
  }

  .fp-heading {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.8rem, 5vw, 4.2rem);
    line-height: 1.08;
    letter-spacing: -0.02em;
    color: var(--ink);
    margin-bottom: 1.5rem;
    opacity: 0;
    animation: fadeUp 0.6s 0.25s forwards;
  }

  .fp-heading em {
    font-style: italic;
    color: var(--accent);
  }

  .fp-sub {
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--muted);
    max-width: 42ch;
    margin-bottom: 2.5rem;
    font-weight: 300;
    opacity: 0;
    animation: fadeUp 0.6s 0.4s forwards;
  }

  .fp-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
    opacity: 0;
    animation: fadeUp 0.6s 0.55s forwards;
  }

  .btn-primary {
    background: var(--accent);
    color: #fff;
    border: none;
    padding: 0.85rem 2rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    cursor: pointer;
    border-radius: 2px;
    transition: background 0.2s, transform 0.15s;
  }

  .btn-primary:hover { background: #a83a20; transform: translateY(-1px); }

  .btn-ghost {
    background: none;
    border: 1px solid var(--border);
    color: var(--ink);
    padding: 0.85rem 2rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    border-radius: 2px;
    transition: border-color 0.2s, background 0.2s;
  }

  .btn-ghost:hover { border-color: var(--ink); background: rgba(14,12,9,0.04); }


  .fp-hero-visual {
    position: relative;
    height: 480px;
    opacity: 0;
    animation: fadeIn 0.8s 0.3s forwards;
  }

  .fp-card-stack {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .fp-card {
    position: absolute;
    border-radius: 4px;
    overflow: hidden;
  }

  .card-main {
    width: 78%;
    height: 85%;
    top: 0;
    right: 0;
    background: var(--ink);
    display: flex;
    flex-direction: column;
    padding: 2rem;
    color: var(--paper);
  }

  .card-main-label {
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: auto;
  }

  .card-main-number {
    font-family: 'Playfair Display', serif;
    font-size: 4rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0.25rem;
  }

  .card-main-desc {
    font-size: 0.8rem;
    color: var(--muted);
    font-weight: 300;
  }

  .card-main-bar {
    margin-top: 1.5rem;
    height: 3px;
    background: rgba(245,240,232,0.1);
    border-radius: 2px;
    overflow: hidden;
  }

  .card-main-bar-fill {
    height: 100%;
    background: var(--accent);
    width: 0%;
    border-radius: 2px;
    animation: barGrow 1.2s 0.9s cubic-bezier(0.4,0,0.2,1) forwards;
  }

  .card-accent {
    width: 48%;
    height: 42%;
    bottom: 0;
    left: 0;
    background: var(--accent);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-shadow: 8px 8px 0 var(--ink);
  }

  .card-accent-tag {
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(245,240,232,0.7);
    margin-bottom: 0.5rem;
  }

  .card-accent-value {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    color: #fff;
    font-weight: 700;
  }

 
  .fp-stats {
    border-top: 1px solid var(--border);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;
  }

  .fp-stat {
    padding: 2rem 3rem;
    border-right: 1px solid var(--border);
    opacity: 0;
    animation: fadeUp 0.5s forwards;
  }

  .fp-stat:last-child { border-right: none; }
  .fp-stat:nth-child(1) { animation-delay: 0.6s; }
  .fp-stat:nth-child(2) { animation-delay: 0.75s; }
  .fp-stat:nth-child(3) { animation-delay: 0.9s; }

  .fp-stat-number {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--ink);
  }

  .fp-stat-number span { color: var(--accent); }

  .fp-stat-label {
    font-size: 0.8rem;
    color: var(--muted);
    margin-top: 0.25rem;
    font-weight: 300;
  }

 
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes barGrow {
    from { width: 0%; }
    to   { width: 73%; }
  }


  @media (max-width: 768px) {
    .fp-nav { padding: 1.25rem 1.5rem; }
    .fp-nav-links { display: none; }
    .fp-hero { grid-template-columns: 1fr; padding: 3rem 1.5rem 2rem; }
    .fp-hero-text { padding-right: 0; }
    .fp-hero-visual { height: 320px; margin-top: 2rem; }
    .fp-stats { grid-template-columns: 1fr; }
    .fp-stat { border-right: none; border-bottom: 1px solid var(--border); padding: 1.5rem; }
  }
`;

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = 2847;
    const duration = 1400;
    const step = 16;
    const increment = (target / duration) * step;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + increment, target);
      setCount(Math.floor(current));
      if (current >= target) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="fp-root">


        <nav className="fp-nav">
          <a href="#" className="fp-logo">Arc<span>.</span>Studio</a>
          <ul className="fp-nav-links">
            <li><a href="#">Work</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#" className="fp-nav-cta">Get Started</a></li>
          </ul>
        </nav>


        <section className="fp-hero">
          <div className="fp-hero-text">
            <p className="fp-eyebrow">Design &amp; Strategy Studio</p>
            <h1 className="fp-heading">
              Craft that<br /><em>moves</em><br />markets.
            </h1>
            <p className="fp-sub">
              We shape brands, products, and digital experiences that resonate with the people who matter most to your business.
            </p>
            <div className="fp-actions">
              <button className="btn-primary">View Our Work</button>
              <button className="btn-ghost">Learn More</button>
            </div>
          </div>

          <div className="fp-hero-visual">
            <div className="fp-card-stack">
              <div className="fp-card card-main">
                <span className="card-main-label">Projects Delivered</span>
                <div className="card-main-number">{count.toLocaleString()}</div>
                <div className="card-main-desc">Across 40+ countries</div>
                <div className="card-main-bar">
                  <div className="card-main-bar-fill" />
                </div>
              </div>
              <div className="fp-card card-accent">
                <div className="card-accent-tag">Avg. ROI</div>
                <div className="card-accent-value">3.8×</div>
              </div>
            </div>
          </div>
        </section>

        <div className="fp-stats">
          {[
            { value: "12+", label: "Years of experience" },
            { value: "98%", label: "Client satisfaction rate" },
            { value: "40", label: "Countries reached" },
          ].map(({ value, label }) => (
            <div className="fp-stat" key={label}>
              <div className="fp-stat-number">
                {value.replace(/\d+/, (n) => (
                  <span key={n}>{n}</span>
                ))}
                {value}
              </div>
              <div className="fp-stat-label">{label}</div>
            </div>
          ))}
        </div>
        <div className="fp-section">helloo </div>


      </div>

    </>
  );
}