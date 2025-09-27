const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Sample news data
const news = [
  {
    id: 1,
    slug: "welcome-week",
    title: "Welcome Week",
    content: "Lots of events for students!",
  },
  {
    id: 2,
    slug: "new-lab",
    title: "New Science Lab",
    content: "State-of-the-art facility now open.",
  },
];

// Sample programs data
const programs = [
  {
    id: 1,
    name: "Computer Science",
    description: "Learn algorithms, programming, and AI.",
  },
  {
    id: 2,
    name: "Biology",
    description: "Explore life sciences, ecology, and genetics.",
  },
  {
    id: 3,
    name: "Business Administration",
    description: "Gain skills in management, marketing, and finance.",
  },
];

// --- Routes ---
// News
app.get("/api/news", (req, res) => res.json(news));

// ✅ Get news by slug
app.get("/api/news/slug/:slug", (req, res) => {
  const article = news.find((n) => n.slug === req.params.slug);
  if (!article) return res.status(404).json({ message: "Not found" });
  res.json(article);
});

// ✅ Get news by id
app.get("/api/news/:id", (req, res) => {
  const article = news.find((n) => n.id.toString() === req.params.id);
  if (!article) return res.status(404).json({ message: "Not found" });
  res.json(article);
});

// Programs
app.get("/api/programs", (req, res) => res.json(programs));

// Get program by id
app.get("/api/programs/:id", (req, res) => {
  const program = programs.find((p) => p.id.toString() === req.params.id);
  if (!program) return res.status(404).json({ message: "Not found" });
  res.json(program);
});

const PORT = 4000;
app.listen(PORT, () =>
  console.log(`Backend running at http://localhost:${PORT}`)
);
