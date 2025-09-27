import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* 🔹 Video Background */}
      <video
        className={styles.heroVideo}
        src="/home-background-desktop-FA24-v2.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* 🔹 Blue/Gray Overlay */}
      <div className={styles.heroOverlay}></div>

      {/* 🔹 Content */}
      <div className={styles.heroContent}>
        <img
          src="/150-mark-gold.svg"
          alt="150 Years Juniata College"
          className={styles.heroLogo}
        />

        <h1>
          Juniata College is celebrating 150 years of inquiry, integrity, and
          service throughout the 2025–2026 academic year.
        </h1>

        <a
          href="https://www.juniata.edu/about/just-the-facts/"
          className={styles.ctaButton}
        >
          Learn More Here →
        </a>
      </div>
    </section>
  );
}
