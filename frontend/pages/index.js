import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [news, setNews] = useState([]);
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data));

    fetch("http://localhost:4000/api/programs")
      .then((res) => res.json())
      .then((data) => setPrograms(data));
  }, []);
}
