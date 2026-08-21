import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: "bazaario",
    title: "Bazaario",
    category: "Full Stack / E-Commerce",
    status: "Production",
    description: "A modern full-stack commerce platform featuring robust API routing, scalable database schema, dynamic asset hosting, Cloudinary media processing, and secure payment processing.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Firebase",
      "Cloudinary",
      "Razorpay"
    ],
    liveUrl: "https://bazaario-com-1.onrender.com",
    githubUrl: "https://bazaario-com-1.onrender.com"
  },
  {
    id: "ai-interview-platform",
    title: "AI Interview Prep Platform",
    category: "AI / Full Stack",
    status: "Production",
    description: "An intelligent interview preparation ecosystem featuring AI-driven mock interviews, dynamic answer evaluation, question generation, and detailed performance analytics.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "FastAPI / Node.js",
      "LLM API Integration",
      "PostgreSQL"
    ],
    liveUrl: "https://ai-interview-platform-smoky.vercel.app/dashboard",
    githubUrl: "https://ai-interview-platform-smoky.vercel.app/dashboard"
  },
  {
    id: "personal-expenditure-tracker",
    title: "Personal Expenditure Tracker",
    category: "Full Stack / Finance",
    status: "Production",
    description: "A full-stack financial management platform providing real-time expense tracking, interactive category visualizer, transaction management, and automated spending analytics.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js / Express",
      "MongoDB / PostgreSQL",
      "Recharts"
    ],
    liveUrl: "https://prsnl-expnenditure-tracker.vercel.app/",
    githubUrl: "https://prsnl-expnenditure-tracker.vercel.app/"
  },
  {
    id: "hackmate",
    title: "HackMate",
    category: "AI / Full Stack",
    status: "Production",
    description: "An intelligent platform designed to help hackathon participants discover compatible teammates using profile information, skill vectors, and project interests.",
    technologies: [
      "React",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "Firebase",
      "WebSockets",
      "Scikit-learn"
    ],
    liveUrl: "https://hack-mate-frontend.vercel.app/",
    githubUrl: "https://hack-mate-frontend.vercel.app/"
  },
  {
    id: "ai-cyber-defence",
    title: "AI Defence Cyber Incident Correlation Assistant",
    category: "AI / Cybersecurity",
    status: "Research",
    description: "A research prototype system exploring real-time security telemetry normalization, anomaly feature extraction, and automated incident correlation for incident response.",
    technologies: [
      "Python",
      "FastAPI",
      "Scikit-learn",
      "Security Event Normalization",
      "Telemetry Pipelines"
    ],
    architectureOverview: "Security Events -> Normalization -> Feature Extraction -> Correlation -> AI Analysis -> Incident Intelligence -> Response Recommendation"
  },
  {
    id: "tinyml-smart-device",
    title: "TinyML Smart Edge Device",
    category: "AI / IoT / Embedded",
    status: "Experimental",
    description: "An embedded sensor platform integrating low-power TinyML models on microcontroller hardware for real-time edge intelligence.",
    technologies: [
      "Arduino UNO",
      "ESP32",
      "Embedded Sensors",
      "TinyML",
      "C/C++"
    ],
    completedCapabilities: [
      "Sensor Telemetry Pipeline"
    ],
    plannedCapabilities: [
      "Gesture Recognition",
      "Wake Word Detection",
      "Fall Detection"
    ]
  }
];
