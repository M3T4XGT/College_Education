import styles from "../styles/StatsSection.module.css";
import stats from "../data/stats.json";

export default function StatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.imageOverlay}></div>
      <div className={styles.statsGrid}>
        {stats.map((item, index) => (
          <div key={index} className={styles.statCard}>
            <h2>{item.value}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
