import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [news, setNews] = useState([]);
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => setNews(data));

    fetch("/")
      .then((res) => res.json())
      .then((data) => setPrograms(data));
  }, []);
}
