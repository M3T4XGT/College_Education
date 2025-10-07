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
          alt="My College Logo"
          width={180}
          height={180}
          className={styles.footerLogo}
        />
      </div>

      {/* 3 Column Layout */}
      <div className={styles.footerContainer}>
        {/* Left Column: Address */}
        <div className={`${styles.footerColumn} ${styles.footerAddress}`}>
          <h4 className={styles.collegeName}>My College</h4>
          <p>Pittsburg, PA 16652</p>
          <p>
            <Link href="/">Campus & Parking Maps</Link>
          </p>
          <p>(877) 586-4282</p>
          <p>
            <Link href="/">Careers at College</Link>
          </p>
          <p>
            <Link href="/">Hire College Grads</Link>
          </p>
        </div>

        {/* Middle Column: Quick Links */}
        <div className={styles.footerColumn}>
          <h4 className={styles.footerHeading}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li>
              <Link href="/">Offices</Link>
            </li>
            <li>
              <Link href="/">Bookstore</Link>
            </li>
            <li>
              <Link href="/">Library</Link>
            </li>
            <li>
              <Link href="/">Billing</Link>
            </li>
            <li>
              <Link href="/">Arch</Link>
            </li>
          </ul>
        </div>

        {/* Right Column: Follow College */}
        <div className={`${styles.footerColumn} ${styles.followJuniata}`}>
          <h4 className={styles.footerHeading}>Follow College</h4>

          {/* Inline Links */}
          <div className={styles.followLinks}>
            <Link href="/">News</Link>
            <span>|</span>
            <Link href="/">Events</Link>
            <span>|</span>
            <Link href="/">YouTube</Link>
          </div>

          {/* Social Media Directory */}
          <div className={styles.socialDirectory}>
            <Link href="/">Social Media Directory</Link>
          </div>

          {/* Social Icons */}
          <ul className={styles.socialIcons}>
            <li>
              <Link href="/">
                <Image
                  src="/facebook_j.svg"
                  alt="Facebook"
                  width={28}
                  height={28}
                />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image src="/x_j.svg" alt="Twitter" width={28} height={28} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image
                  src="/instagram_j.svg"
                  alt="Instagram"
                  width={28}
                  height={28}
                />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image
                  src="/linked-in_j.svg"
                  alt="LinkedIn"
                  width={28}
                  height={28}
                />
              </Link>
            </li>
            <li>
              <Link href="/">
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
            <Link href="/">College ATHLETICS &gt;&gt;</Link>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} My College. All rights reserved.
        </p>

        <div className={styles.bottomLinks}>
          <Link href="/">Accessibility Services</Link>
          <span>|</span>
          <Link href="/">Campus Safety</Link>
          <span>|</span>
          <Link href="/">Access & Community Impact</Link>
          <span>|</span>
          <Link href="/">EEO Statement</Link>
          <span>|</span>
          <Link href="/">Ethics Point</Link>
          <span>|</span>
          <Link href="/">Privacy Notice</Link>
          <span>|</span>
          <Link href="/">Terms of Service</Link>
          <span>|</span>
          <Link href="/">Trademarks</Link>
        </div>
      </div>
    </footer>
  );
}
