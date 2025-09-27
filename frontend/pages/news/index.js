import { useEffect, useState } from "react";
import Link from "next/link";

export default function NewsList() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">All News</h1>
      <ul className="space-y-2">
        {news.map((n) => (
          <li key={n.id} className="p-4 border rounded bg-gray-50">
            <Link href={`/news/${n.id}`}>{n.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
