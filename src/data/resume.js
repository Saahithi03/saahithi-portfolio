export const profile = {
  name: "Saahithi Chevuri",
  role: "Full-stack developer",
  location: "Hyderabad, India",
  email: "saahithi.che@gmail.com",
  phone: "+91 8148058889",
  github: "", // add your GitHub URL
  linkedin: "", // add your LinkedIn URL
  summary:
    "I build production-ready web applications end to end: React interfaces, Node and Python APIs, and LLM features that make products smarter. I have almost 2 years of professional experience shipping features, fixing hard production bugs and improving performance.",
};

export const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java"] },
  { group: "Frontend", items: ["React.js", "Redux", "Microfrontend architecture"] },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs", "FastAPI"] },
  { group: "Databases", items: ["MySQL", "MongoDB", "PostgreSQL"] },
  { group: "AI and ML", items: ["LLM APIs", "RAG", "Prompt engineering", "PyTorch", "NumPy", "Pandas"] },
  { group: "Tools", items: ["Git", "GitHub Copilot", "Bitbucket", "Postman", "Jira", "Agile / Scrum"] },
];

export const experience = [
  {
    company: "Greenwood High School",
    title: "Freelance developer",
    period: "Apr 2026 – Present",
    points: [
      "Built a full-stack assessment platform that generates question papers from topic tags.",
      "Wrote 10+ REST endpoints and React interfaces for question management, assessments, answer evaluation and student reports (Node.js, Express.js, SQL).",
      "Added analytics across 10+ topics showing question distribution, correct and incorrect responses, and student accuracy, so teachers can spot learning gaps.",
      "Integrated LLM-generated student performance summaries, cutting manual report preparation.",
    ],
  },
  {
    company: "Ncompass Tech Studio",
    title: "Software developer",
    period: "Jan 2025 – Feb 2026",
    points: [
      "Delivered features across React and Node.js in 2+ production modules.",
      "Developed and scaled BSuite, an HR and accounts management system, with secure authentication and role-based access control (RBAC).",
      "Resolved 20+ production issues, diagnosed performance bottlenecks, and optimized frontend rendering and API calls.",
      "Worked in Agile/Scrum sprints with 5+ cross-functional teammates and US-based client PhoneX, with 100% on-time delivery of sprint tasks and hotfixes.",
      "Supported Git-based releases and deployments across development and production.",
    ],
  },
];

export const projects = [
  {
    name: "AI Resume Job Analyser",
    period: "May 2026 – Aug 2026",
    description:
      "Compares a resume against a job description and shows how well the skills line up.",
    points: [
      "Full-stack app with a React.js frontend and Python backend.",
      "FastAPI REST APIs connect the frontend to AI processing and inference.",
      "Dashboard with match scores, matched and missing skills, and recommendations.",
    ],
    stack: ["React.js", "Python", "FastAPI", "LLM APIs"],
    link: "", // add repo or live demo URL
  },
];

export const education = {
  degree: "B.Tech in Computer Science",
  school: "SRM University, Chennai",
  period: "Aug 2021 – May 2025",
  courses: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Operating Systems",
    "Computer Networks",
    "Database Management Systems",
  ],
};
