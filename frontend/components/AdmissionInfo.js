import styles from "../styles/AdmissionInfo.module.css";

export default function AdmissionInfo() {
  return (
    <section className={styles.admissionSection}>
      {/* Background image with gradient overlay */}
      <div className={styles.imageBox}>
        <img
          src="/watch-party-finals-1024-768.jpg"
          alt="College Students"
          className={styles.admissionImage}
        />
        {/* gradient overlay */}
        <div className={styles.imageOverlay}></div>
      </div>

      {/* Overlapping info box */}
      <div className={styles.infoBox}>
        <h2>Admission Information:</h2>

        <div className={styles.gridButtons}>
          <a href="/">First Year Applicants &gt;</a>
          <a href="/">Transfer Applicants &gt;</a>
          <a href="/">International Applicants &gt;</a>
          <a href="/">Graduate Program Applicants&gt;</a>
        </div>

        <div className={styles.longButtons}>
          <a href="/">Visit &gt;</a>
          <a href="/">Apply &gt;</a>
          <a href="/">Request Information &gt;</a>
        </div>
      </div>
    </section>
  );
}
