import { useState, useEffect } from "react";

export default function App() {
  const [page, setPage] = useState("home");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  return (
    <div style={styles.root}>
      {/* Global animation */}
      <style>{globalStyles}</style>

      {/* NAVBAR */}
      <nav style={styles.nav}>
        <div style={styles.logo}>Aurum</div>
        <div style={styles.navLinks}>
          <button style={styles.navBtn(page === "home")} onClick={() => setPage("home")}>Home</button>
          <button style={styles.navBtn(page === "about")} onClick={() => setPage("about")}>About</button>
        </div>
      </nav>

      {/* PAGE SWITCH */}
      <div style={{ animation: "fadeIn 0.6s ease" }}>
        {page === "home" && <Home visible={visible} goToAbout={() => setPage("about")} />}
        {page === "about" && <About />}
      </div>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Aurum Studio — Built for modern teams
      </footer>
    </div>
  );
}

/* ================= HOME ================= */
function Home({ visible, goToAbout }) {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          ...styles.hero,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s ease",
        }}
      >
        <p style={styles.eyebrow}>Welcome to Aurum Studio</p>

        <h1 style={styles.title}>
          Build stunning <span style={{ color: "#c9a96e" }}>digital experiences</span>
        </h1>

        <p style={styles.sub}>
          We design and develop premium web experiences with modern UI,
          animations, and performance-first architecture.
        </p>

        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            style={styles.primaryBtn}
            onClick={goToAbout}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Get Started →
          </button>

          <button style={styles.outlineBtn}>Live Demo</button>
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why choose us</h2>

        <div style={styles.grid}>
          {features.map((f) => (
            <div
              key={f.title}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={styles.icon}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p style={{ color: "#aaa" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Ready to build something amazing?</h2>
        <button style={styles.primaryBtn}>Start your project</button>
      </section>
    </>
  );
}

/* ================= ABOUT ================= */
function About() {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>About Us</h2>
      <p style={{ maxWidth: "600px", color: "#aaa" }}>
        We are a small but powerful team focused on crafting modern, scalable,
        and high-performance web applications. Every pixel and every interaction
        is designed with purpose.
      </p>

      <div style={styles.grid}>
        {team.map((t) => (
          <div key={t.name} style={styles.card}>
            <div style={styles.icon}>{t.emoji}</div>
            <h3>{t.name}</h3>
            <p style={{ color: "#c9a96e" }}>{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= DATA ================= */
const features = [
  { icon: "⚡", title: "Fast Performance", desc: "Optimized for speed and scalability." },
  { icon: "🎨", title: "Modern Design", desc: "Clean UI with smooth animations." },
  { icon: "🔒", title: "Secure", desc: "Best practices for safety and reliability." },
  { icon: "🚀", title: "Scalable", desc: "Built for growth and expansion." },
];

const team = [
  { emoji: "👨‍💻", name: "Sehr Dev", role: "Frontend Developer" },
  { emoji: "🎨", name: "UI Designer", role: "Design Lead" },
];

/* ================= STYLES ================= */
const styles = {
  root: {
    fontFamily: "sans-serif",
    background: "#0f0f14",
    color: "#fff",
    minHeight: "100vh",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    background: "#0f0f14",
    borderBottom: "1px solid #222",
  },

  logo: {
    fontWeight: "bold",
    fontSize: "20px",
  },

  navLinks: {
    display: "flex",
    gap: "10px",
  },

  navBtn: (active) => ({
    background: active ? "#c9a96e" : "transparent",
    border: "1px solid #c9a96e",
    color: active ? "#000" : "#c9a96e",
    padding: "6px 14px",
    cursor: "pointer",
  }),

  hero: {
    padding: "6rem 2rem",
    textAlign: "center",
  },

  eyebrow: {
    color: "#c9a96e",
    letterSpacing: "2px",
  },

  title: {
    fontSize: "3rem",
    margin: "1rem 0",
  },

  sub: {
    color: "#aaa",
    maxWidth: "500px",
    margin: "0 auto 2rem",
  },

  primaryBtn: {
    background: "#c9a96e",
    color: "#000",
    padding: "12px 24px",
    border: "none",
    cursor: "pointer",
    transition: "0.3s",
  },

  outlineBtn: {
    border: "1px solid #c9a96e",
    color: "#c9a96e",
    padding: "12px 24px",
    background: "transparent",
    cursor: "pointer",
  },

  section: {
    padding: "4rem 2rem",
    textAlign: "center",
  },

  sectionTitle: {
    marginBottom: "2rem",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "#1a1a22",
    padding: "2rem",
    borderRadius: "10px",
    transition: "0.3s",
  },

  icon: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },

  cta: {
    padding: "4rem 2rem",
    textAlign: "center",
    background: "#15151d",
  },

  footer: {
    textAlign: "center",
    padding: "2rem",
    color: "#666",
  },
};

/* ================= GLOBAL CSS ================= */
const globalStyles = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px);}
  to { opacity: 1; transform: translateY(0);}
}
`;