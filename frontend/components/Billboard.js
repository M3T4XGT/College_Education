import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Billboard.module.css";

export default function Billboard() {
  return (
    <section className={styles.billboard}>
      {/* Background image */}
      <div className={styles.billboardImage}>
        <Image
          src="/learning-commons-exterior.jpg" // <-- put your JPG in /public
          alt="College Campus"
          fill
          priority
          className={styles.bgImage}
        />
      </div>

      {/* Overlay box */}
      <div className={styles.billboardOverlay}>
        <p>
          Gifts to College support students, faculty, programs and more. Your
          generosity will impact the College family for generations to come!
        </p>
        <Link href="/">
          <button className={styles.giveButton}>GIVE TO College</button>
        </Link>
      </div>
    </section>
  );
}
