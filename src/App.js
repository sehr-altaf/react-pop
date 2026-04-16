import { useState } from "react";

// ── Styles ──────────────────────────────────────────────────────────────────
const styles = {
  // Global
  root: {
    fontFamily: "'Georgia', serif",
    minHeight: "100vh",
    background: "#faf9f6",
    color: "#1a1a1a",
  },

  // Navbar
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2.5rem",
    height: "60px",
    background: "#1a1a1a",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  navLogo: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#f0e6d3",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  navLinks: {
    display: "flex",
    gap: "8px",
  },
  navBtn: (active) => ({
    background: active ? "#c9a96e" : "transparent",
    color: active ? "#1a1a1a" : "#c9a96e",
    border: "1px solid #c9a96e",
    borderRadius: "4px",
    padding: "6px 18px",
    fontSize: "13px",
    letterSpacing: "1px",
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "all 0.2s",
  }),

  // ── HOME PAGE ──────────────────────────────────────────────────────────────
  hero: {
    background: "#1a1a1a",
    color: "#f0e6d3",
    padding: "6rem 2.5rem 5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    borderBottom: "4px solid #c9a96e",
  },
  heroEyebrow: {
    fontSize: "11px",
    letterSpacing: "4px",
    textTransform: "uppercase",
    color: "#c9a96e",
    marginBottom: "1.5rem",
  },
  heroTitle: {
    fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
    fontWeight: "700",
    lineHeight: 1.1,
    marginBottom: "1.5rem",
    maxWidth: "700px",
  },
  heroSub: {
    fontSize: "16px",
    color: "#b0a898",
    maxWidth: "480px",
    lineHeight: 1.8,
    marginBottom: "2.5rem",
  },
  heroCta: {
    background: "#c9a96e",
    color: "#1a1a1a",
    border: "none",
    padding: "14px 36px",
    fontSize: "13px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontWeight: "700",
    cursor: "pointer",
    fontFamily: "inherit",
    borderRadius: "2px",
    transition: "opacity 0.2s",
  },

  // Features section
  featuresSection: {
    padding: "5rem 2.5rem",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  sectionLabel: {
    fontSize: "11px",
    letterSpacing: "4px",
    textTransform: "uppercase",
    color: "#c9a96e",
    marginBottom: "0.75rem",
  },
  sectionTitle: {
    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
    fontWeight: "700",
    marginBottom: "3rem",
    maxWidth: "500px",
    lineHeight: 1.2,
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
  },
  featureCard: {
    background: "#fff",
    border: "1px solid #e8e4dd",
    borderRadius: "6px",
    padding: "2rem 1.75rem",
    borderTop: "3px solid #c9a96e",
  },
  featureIcon: {
    fontSize: "28px",
    marginBottom: "1rem",
  },
  featureName: {
    fontSize: "15px",
    fontWeight: "700",
    marginBottom: "0.5rem",
    letterSpacing: "0.5px",
  },
  featureDesc: {
    fontSize: "14px",
    color: "#6b6660",
    lineHeight: 1.7,
  },

  // Testimonial strip
  testimonialStrip: {
    background: "#f0e6d3",
    padding: "4rem 2.5rem",
    textAlign: "center",
    borderTop: "1px solid #d8cfc4",
    borderBottom: "1px solid #d8cfc4",
  },
  testimonialQuote: {
    fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
    fontStyle: "italic",
    color: "#3a3530",
    maxWidth: "640px",
    margin: "0 auto 1.25rem",
    lineHeight: 1.7,
  },
  testimonialAuthor: {
    fontSize: "12px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#8a7f74",
  },

  // ── ABOUT PAGE ─────────────────────────────────────────────────────────────
  aboutHero: {
    background: "#2a241e",
    color: "#f0e6d3",
    padding: "5rem 2.5rem",
    display: "flex",
    gap: "4rem",
    alignItems: "center",
    flexWrap: "wrap",
    borderBottom: "4px solid #c9a96e",
  },
  aboutHeroText: {
    flex: 1,
    minWidth: "260px",
  },
  aboutHeroTitle: {
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    fontWeight: "700",
    lineHeight: 1.15,
    marginBottom: "1.25rem",
  },
  aboutHeroDesc: {
    fontSize: "15px",
    color: "#b0a898",
    lineHeight: 1.85,
    maxWidth: "420px",
  },
  aboutHeroVisual: {
    flex: "0 0 260px",
    height: "260px",
    background: "#c9a96e22",
    border: "1px solid #c9a96e55",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "80px",
  },

  // Stats
  statsRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1px",
    background: "#e8e4dd",
    borderBottom: "1px solid #e8e4dd",
  },
  statBox: {
    flex: "1 1 160px",
    background: "#fff",
    padding: "2.5rem 2rem",
    textAlign: "center",
  },
  statNum: {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: "700",
    color: "#c9a96e",
    lineHeight: 1,
    marginBottom: "0.5rem",
  },
  statLabel: {
    fontSize: "12px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#8a7f74",
  },

  // Team
  teamSection: {
    padding: "5rem 2.5rem",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "24px",
    marginTop: "3rem",
  },
  teamCard: {
    background: "#fff",
    border: "1px solid #e8e4dd",
    borderRadius: "6px",
    overflow: "hidden",
    textAlign: "center",
  },
  teamAvatar: {
    height: "140px",
    background: "#2a241e",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "48px",
  },
  teamBody: {
    padding: "1.25rem 1rem",
  },
  teamName: {
    fontSize: "15px",
    fontWeight: "700",
    marginBottom: "4px",
  },
  teamRole: {
    fontSize: "12px",
    color: "#c9a96e",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },

  // Footer
  footer: {
    background: "#1a1a1a",
    color: "#6b6660",
    textAlign: "center",
    padding: "2rem",
    fontSize: "13px",
    letterSpacing: "1px",
  },
};

// ── Data ─────────────────────────────────────────────────────────────────────
const features = [
  { icon: "✦", name: "Crafted with Intent", desc: "Every decision is deliberate — from spacing to tone, nothing is accidental." },
  { icon: "◈", name: "Built to Scale", desc: "Architecture that grows with your needs, without technical debt piling up." },
  { icon: "⬡", name: "Always Reliable", desc: "99.9% uptime backed by proactive monitoring and redundant infrastructure." },
  { icon: "◎", name: "Human-Centered", desc: "Designed for real people. Accessibility and clarity are non-negotiable." },
];

const team = [
  { emoji: "🧑‍💼", name: "Amir Hasan", role: "Founder & CEO" },
  { emoji: "👩‍🎨", name: "Lena Fischer", role: "Design Lead" },
  { emoji: "👨‍💻", name: "Raj Patel", role: "Engineering" },
  { emoji: "👩‍📣", name: "Cleo Martin", role: "Growth" },
];

const stats = [
  { num: "12K+", label: "Customers" },
  { num: "98%", label: "Satisfaction" },
  { num: "6 yrs", label: "In Business" },
  { num: "40+", label: "Countries" },
];

// ── Pages ─────────────────────────────────────────────────────────────────────
function HomePage({ goToAbout }) {
  return (
    <div>
      {/* Hero */}
      <section style={styles.hero}>
        <p style={styles.heroEyebrow}>Welcome to Aurum Studio</p>
        <h1 style={styles.heroTitle}>Where craft meets clarity.</h1>
        <p style={styles.heroSub}>
          We build digital experiences that are precise, purposeful, and built to last. No noise — just work that matters.
        </p>
        <button style={styles.heroCta} onClick={goToAbout}>
          Our Story →
        </button>
      </section>

      {/* Features */}
      <section style={styles.featuresSection}>
        <p style={styles.sectionLabel}>What we believe</p>
        <h2 style={styles.sectionTitle}>Principles we refuse to compromise on.</h2>
        <div style={styles.featuresGrid}>
          {features.map((f) => (
            <div key={f.name} style={styles.featureCard}>
              <div style={styles.featureIcon}>{f.icon}</div>
              <div style={styles.featureName}>{f.name}</div>
              <div style={styles.featureDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section style={styles.testimonialStrip}>
        <p style={styles.testimonialQuote}>
          "Working with Aurum was the first time a studio truly understood what we were trying to say — and then said it better."
        </p>
        <p style={styles.testimonialAuthor}>— Nadia K., Co-founder at Forma</p>
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section style={styles.aboutHero}>
        <div style={styles.aboutHeroText}>
          <p style={{ ...styles.heroEyebrow, marginBottom: "1rem" }}>Who we are</p>
          <h1 style={styles.aboutHeroTitle}>Small team. Big standards.</h1>
          <p style={styles.aboutHeroDesc}>
            Aurum Studio was founded on a simple belief: the best work comes from people who care deeply, move deliberately, and never settle for "good enough." We are a small, focused studio — and that's exactly the point.
          </p>
        </div>
        <div style={styles.aboutHeroVisual}>🏛️</div>
      </section>

      {/* Stats */}
      <div style={styles.statsRow}>
        {stats.map((s) => (
          <div key={s.label} style={styles.statBox}>
            <div style={styles.statNum}>{s.num}</div>
            <div style={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Team */}
      <section style={styles.teamSection}>
        <p style={styles.sectionLabel}>The people</p>
        <h2 style={styles.sectionTitle}>Meet the team behind the work.</h2>
        <div style={styles.teamGrid}>
          {team.map((t) => (
            <div key={t.name} style={styles.teamCard}>
              <div style={styles.teamAvatar}>{t.emoji}</div>
              <div style={styles.teamBody}>
                <div style={styles.teamName}>{t.name}</div>
                <div style={styles.teamRole}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={styles.root}>
      {/* Navbar */}
      <nav style={styles.nav}>
        <div style={styles.navLogo}>Aurum</div>
        <div style={styles.navLinks}>
          <button style={styles.navBtn(page === "home")} onClick={() => setPage("home")}>Home</button>
          <button style={styles.navBtn(page === "about")} onClick={() => setPage("about")}>About</button>
        </div>
      </nav>

      {/* Pages */}
      {page === "home" && <HomePage goToAbout={() => setPage("about")} />}
      {page === "about" && <AboutPage />}

      {/* Footer */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Aurum Studio — All rights reserved.
      </footer>
    </div>
  );
}