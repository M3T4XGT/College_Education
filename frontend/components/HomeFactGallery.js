import styles from "../styles/HomeFactGallery.module.css";

export default function HomeFactGallery() {
  return (
    <section className={styles.homeFactsGallery}>
      {/* Slot A: Image + overlay */}
      <div className={styles.homeFactsGallery__a}>
        <img src="/fact-gallery-image-1.avif" alt="University Ranking" />
        <figure className={styles.homeFactsGallery__aContent}>
          <p>Ranked #18 of 83 Best Colleges for Biology in Pennsylvania</p>
          <figcaption>
            <a href="/">Niche</a>, 2024
          </figcaption>
        </figure>
      </div>

      {/* Slot B: Image only */}
      <div className={styles.homeFactsGallery__b}>
        <img src="/solar-eclipse-2024-500-400.jpg" alt="Campus Life" />
      </div>

      {/* Slot C: Orange frame card */}
      <div className={styles.homeFactsGallery__c}>
        <figure className={styles.homeFactsGallery__cContent}>
          <p>Experiential education at its finest.</p>
          <figcaption>
            <a href="/">My-college-website</a>, 2025
          </figcaption>
        </figure>
      </div>

      {/* Slot D: Image only */}
      <div className={styles.homeFactsGallery__d}>
        <img src="/mountain-day-2023-147-100-500.jpg" alt="Campus Path" />
      </div>

      {/* Slot E: Orange frame card */}
      <div className={styles.homeFactsGallery__e}>
        <figure className={styles.homeFactsGallery__eContent}>
          <p>#92 in National Liberal Arts Colleges</p>
          <figcaption>
            <a href="/">Newsweek</a>, 2026 Edition
          </figcaption>
        </figure>
      </div>

      {/* Slot F: Image + overlay */}
      <div className={styles.homeFactsGallery__f}>
        <img src="/grad.jpg" alt="Sustainability Award" />
        <figure className={styles.homeFactsGallery__fContent}>
          <p>Top Performers on Social Mobility</p>
          <figcaption>
            <a
              href="/"
              style={{ color: "#ffffff", textDecoration: "underline" }}
            >
              Times Higher Education Impact Rankings
            </a>
            , 2023
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
