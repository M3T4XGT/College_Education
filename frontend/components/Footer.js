import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Centered Logo Row */}
      <div className={styles.footerLogoRow}>
        <Image
          src="/full-logo-white.svg"
          alt="Juniata College Logo"
          width={180}
          height={180}
          className={styles.footerLogo}
        />
      </div>

      {/* 3 Column Layout */}
      <div className={styles.footerContainer}>
        {/* Left Column: Address */}
        <div className={`${styles.footerColumn} ${styles.footerAddress}`}>
          <h4 className={styles.collegeName}>Juniata College</h4>
          <p>Huntingdon, PA 16652</p>
          <p>
            <Link href="https://www.juniata.edu/admission/campus-visit/map.php">
              Campus & Parking Maps
            </Link>
          </p>
          <p>(877) 586-4282</p>
          <p>
            <Link href="https://www.juniata.edu/offices/human-resources/prospective-employee/openings.php">
              Careers at Juniata
            </Link>
          </p>
          <p>
            <Link href="https://www.juniata.edu/career-development/alumni/employing-students.php">
              Hire Juniata Grads
            </Link>
          </p>
        </div>

        {/* Middle Column: Quick Links */}
        <div className={styles.footerColumn}>
          <h4 className={styles.footerHeading}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li>
              <Link href="https://www.juniata.edu/offices/">Offices</Link>
            </li>
            <li>
              <Link href="https://juniata.bncollege.com/my-account/rental-order/orders">
                Bookstore
              </Link>
            </li>
            <li>
              <Link href="https://www.juniata.edu/academics/learning-commons">
                Library
              </Link>
            </li>
            <li>
              <Link href="https://www.juniata.edu/offices/billing/index.php">
                Billing
              </Link>
            </li>
            <li>
              <Link href="https://arch.juniata.edu/today-at-juniata">Arch</Link>
            </li>
          </ul>
        </div>

        {/* Right Column: Follow Juniata */}
        <div className={`${styles.footerColumn} ${styles.followJuniata}`}>
          <h4 className={styles.footerHeading}>Follow Juniata</h4>

          {/* Inline Links */}
          <div className={styles.followLinks}>
            <Link href="/news">News</Link>
            <span>|</span>
            <Link href="/events">Events</Link>
            <span>|</span>
            <Link
              href="https://www.youtube.com/user/JuniataCollege"
              target="_blank"
            >
              YouTube
            </Link>
          </div>

          {/* Social Media Directory */}
          <div className={styles.socialDirectory}>
            <Link href="/social-media-directory">Social Media Directory</Link>
          </div>

          {/* Social Icons */}
          <ul className={styles.socialIcons}>
            <li>
              <Link href="https://www.facebook.com/juniata" target="_blank">
                <Image
                  src="/facebook_j.svg"
                  alt="Facebook"
                  width={28}
                  height={28}
                />
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/juniatacollege" target="_blank">
                <Image src="/x_j.svg" alt="Twitter" width={28} height={28} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/juniata_college/"
                target="_blank"
              >
                <Image
                  src="/instagram_j.svg"
                  alt="Instagram"
                  width={28}
                  height={28}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/school/20355"
                target="_blank"
              >
                <Image
                  src="/linked-in_j.svg"
                  alt="LinkedIn"
                  width={28}
                  height={28}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/user/JuniataCollege"
                target="_blank"
              >
                <Image
                  src="/youtube_j.png"
                  alt="YouTube"
                  width={28}
                  height={28}
                />
              </Link>
            </li>
          </ul>

          {/* Athletics Link */}
          <p className={styles.athleticsLink}>
            <Link href="https://www.juniatasports.net/landing/index">
              JUNIATA ATHLETICS &gt;&gt;
            </Link>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      {/* Bottom bar */}
      {/* Bottom bar */}
      {/* Bottom bar */}
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Juniata College. All rights reserved.
        </p>

        <div className={styles.bottomLinks}>
          <Link href="https://www.juniata.edu/student-accessibility-services/">
            Accessibility Services
          </Link>
          <span>|</span>
          <Link href="https://www.juniata.edu/offices/security/">
            Campus Safety
          </Link>
          <span>|</span>
          <Link href="https://www.juniata.edu/magazine/impact-report/index.php">
            Access & Community Impact
          </Link>
          <span>|</span>
          <Link href="https://www.juniata.edu/offices/president/non-discrimination.php">
            EEO Statement
          </Link>
          <span>|</span>
          <Link href="https://www.juniata.edu/about/presidents-office/policies/academic-affairs/itls/ethical-responsible-use-of-eaglenet.php">
            Ethics Point
          </Link>
          <span>|</span>
          <Link href="https://www.juniata.edu/privacy-policy.php">
            Privacy Notice
          </Link>
          <span>|</span>
          <Link href="https://www.juniata.edu/about/presidents-office/policies/index.php">
            Terms of Service
          </Link>
          <span>|</span>
          <Link href="https://www.juniata.edu/offices/marketing/social-media-strategy/logo-usage.php">
            Trademarks
          </Link>
        </div>
      </div>
    </footer>
  );
}
