import styles from "../styles/Academics.module.css";

export default function Academics() {
  return (
    <section className={styles.academicsSection}>
      <div className={styles.academicsContainer}>
        {/* Left: Illustration / Image */}
        {/* <div className={styles.academicsImage}>
          <img src="/founders-summer-1680-500.jpg" alt="Academics at OSU" />
        </div> */}

        {/* Right: Text content */}
        <div className={styles.academicsContent}>
          <h2 className={styles.sectionTitle}>Academics</h2>
          <p>
            <strong>At Juniata the Emphasis is On You</strong> and 96% of our
            students who graduate do so in four years, and 95% are employed or
            in grad school six months after graduation.
          </p>

          <div className={styles.academicsStats}>
            <a
              href="https://www.juniata.edu/academics/areas-of-study.php"
              className={styles.statLink}
            >
              All Programs →
            </a>
            <a
              href="https://www.juniata.edu/academics/accelerated-dual-degrees/"
              className={styles.statLink}
            >
              See Our Dual Degree Offerings →
            </a>
            <a
              href="https://www.juniata.edu/academics/graduate-programs/"
              className={styles.statLink}
            >
              Master's Programs →
            </a>
          </div>

          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search all academic programs"
              aria-label="Search academic programs"
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </section>
  );
}
