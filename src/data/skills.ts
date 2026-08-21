import { SkillCategory } from '@/types';

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", category: "Languages" },
      { name: "Java", category: "Languages" },
      { name: "JavaScript", category: "Languages" },
      { name: "TypeScript", category: "Languages" },
      { name: "SQL", category: "Languages" }
    ]
  },
  {
    title: "AI / ML",
    skills: [
      { name: "Machine Learning", category: "AI / ML" },
      { name: "Deep Learning", category: "AI / ML" },
      { name: "NLP", category: "AI / ML" },
      { name: "Computer Vision", category: "AI / ML" },
      { name: "Scikit-learn", category: "AI / ML" },
      { name: "TensorFlow", category: "AI / ML" },
      { name: "PyTorch", category: "AI / ML" }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", category: "Frontend" },
      { name: "Next.js", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Framer Motion", category: "Frontend" },
      { name: "GSAP", category: "Frontend" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "FastAPI", category: "Backend" },
      { name: "REST APIs", category: "Backend" },
      { name: "WebSockets", category: "Backend" }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", category: "Database" },
      { name: "Firebase", category: "Database" },
      { name: "SQLAlchemy", category: "Database" },
      { name: "Alembic", category: "Database" }
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", category: "Tools" },
      { name: "GitHub", category: "Tools" },
      { name: "Docker", category: "Tools" },
      { name: "Vercel", category: "Tools" },
      { name: "Railway", category: "Tools" },
      { name: "Render", category: "Tools" }
    ]
  },
  {
    title: "Hardware / IoT",
    skills: [
      { name: "Arduino", category: "Hardware" },
      { name: "ESP32", category: "Hardware" },
      { name: "Sensors", category: "Hardware" },
      { name: "TinyML", category: "Hardware" },
      { name: "IoT", category: "Hardware" }
    ]
  }
];
