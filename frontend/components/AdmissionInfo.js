import styles from "../styles/AdmissionInfo.module.css";

export default function AdmissionInfo() {
  return (
    <section className={styles.admissionSection}>
      {/* Background image with gradient overlay */}
      <div className={styles.imageBox}>
        <img
          src="/watch-party-finals-1024-768.jpg"
          alt="Juniata Students"
          className={styles.admissionImage}
        />
        {/* gradient overlay */}
        <div className={styles.imageOverlay}></div>
      </div>

      {/* Overlapping info box */}
      <div className={styles.infoBox}>
        <h2>Admission Information:</h2>

        <div className={styles.gridButtons}>
          <a href="https://www.juniata.edu/admission/apply/">
            First Year Applicants &gt;
          </a>
          <a href="https://www.juniata.edu/admission/apply/apply-transfer.php">
            Transfer Applicants &gt;
          </a>
          <a href="https://www.juniata.edu/academics/departments/international/international-students/application-costs.php">
            International Applicants &gt;
          </a>
          <a href="https://www.juniata.edu/academics/graduate-programs/index.php">
            Graduate Program Applicants&gt;
          </a>
        </div>

        <div className={styles.longButtons}>
          <a href="https://www.juniata.edu/admission/campus-visit/">
            Visit &gt;
          </a>
          <a href="https://www.juniata.edu/admission/apply/">Apply &gt;</a>
          <a href="https://apply.juniata.edu/register/requestinfo">
            Request Information &gt;
          </a>
        </div>
      </div>
    </section>
  );
}
