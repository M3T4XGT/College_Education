import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NewsDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:4000/api/news/${id}`)
        .then((res) => res.json())
        .then((data) => setArticle(data));
    }
  }, [id]);

  if (!article) return <p className="p-8">Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="mt-4">{article.content}</p>
    </div>
  );
}
