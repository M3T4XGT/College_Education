import Image from "next/image";
import Link from "next/link";
import styles from "../styles/LatestNews.module.css";

export default function LatestNews() {
  const newsItems = [
    {
      id: 1,
      title: "My College senior joins national cohort of Newman Civic Fellows",
      image: "/Newman.jpg",
      link: "/",
    },
    {
      id: 2,
      title:
        "A degree, fifty years in the making: Pete Lentini '75 completes his college journey",
      image: "/Pete Lentini-6.jpg",
      link: "/",
    },
    {
      id: 3,
      title: "My College Museum of Art brings William Scharf's legacy to life",
      image: "/JCMA-2.jpg",
      link: "/",
    },
  ];

  return (
    <section className={styles.latestNews}>
      {/* Section Title */}
      <div className={styles.sectionTitle}>
        <span>THE LATEST FROM MY COLLEGE</span>
      </div>

      {/* News Grid */}
      <div className={styles.newsGrid}>
        {newsItems.map((item) => (
          <Link key={item.id} href={item.link} className={styles.newsCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
              />
            </div>
            <p className={styles.newsTitle}>{item.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
