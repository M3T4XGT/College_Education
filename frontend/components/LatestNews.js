import Image from "next/image";
import Link from "next/link";
import styles from "../styles/LatestNews.module.css";

export default function LatestNews() {
  const newsItems = [
    {
      id: 1,
      title:
        "Juniata College senior joins national cohort of Newman Civic Fellows",
      image: "/Newman.jpg", // place in /public
      link: "https://www.juniata.edu/about/news/archive.php?action=SHOWARTICLE&id=7223",
    },
    {
      id: 2,
      title:
        "A degree, fifty years in the making: Pete Lentini '75 completes his Juniata journey",
      image: "/Pete Lentini-6.jpg",
      link: "https://www.juniata.edu/about/news/",
    },
    {
      id: 3,
      title:
        "Juniata College Museum of Art brings William Scharf's legacy to life",
      image: "/JCMA-2.jpg",
      link: "https://www.juniata.edu/about/news/",
    },
  ];

  return (
    <section className={styles.latestNews}>
      {/* Section Title */}
      <div className={styles.sectionTitle}>
        <span>THE LATEST FROM JUNIATA COLLEGE</span>
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
