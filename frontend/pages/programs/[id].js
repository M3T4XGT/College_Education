import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProgramDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [program, setProgram] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:4000/api/programs/${id}`)
        .then((res) => res.json())
        .then((data) => setProgram(data));
    }
  }, [id]);

  if (!program) return <p className="p-8">Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{program.name}</h1>
      <p className="text-gray-700 mb-6">{program.description}</p>
      <p className="italic text-gray-500">
        More details about the {program.name} program will go here...
      </p>
    </div>
  );
}
