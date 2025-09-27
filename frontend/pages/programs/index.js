import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProgramsList() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/programs")
      .then((res) => res.json())
      .then((data) => setPrograms(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Academic Programs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {programs.map((p) => (
          <div
            key={p.id}
            className="p-6 bg-white border rounded shadow hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p className="text-gray-600 mb-4">{p.description}</p>
            <Link
              href={`/programs/${p.id}`}
              className="text-blue-600 underline font-medium"
            >
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
