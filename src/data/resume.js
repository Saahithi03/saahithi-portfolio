export const profile = {
  name: "Saahithi Chevuri",
  role: "Full-stack & AI developer",
  headline:
    "Full-stack developer building reliable web apps and AI-powered features.",
  location: "Hyderabad, India",
  email: "saahithi.che@gmail.com",
  phone: "+91 8148058889",
  github: "", // add your GitHub URL
  linkedin: "", // add your LinkedIn URL
  summary:
    "I'm a full-stack developer with almost 2 years of experience building production web applications in JavaScript and Python. I design REST APIs with Node.js, Express and FastAPI, build React front ends, and add LLM-powered features such as automated reporting and resume analysis. I've shipped HR and education products, fixed 20+ production issues, and worked in Agile teams with US-based clients. I'm looking for full-stack, backend or AI engineering roles.",
};

export const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java"] },
  {
    group: "Frontend",
    items: ["React.js", "Redux", "Microfrontend architecture"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "FastAPI"],
  },
  { group: "Databases", items: ["MySQL", "MongoDB", "PostgreSQL"] },
  {
    group: "AI and ML",
    items: [
      "LLM APIs",
      "RAG",
      "Prompt engineering",
      "PyTorch",
      "NumPy",
      "Pandas",
    ],
  },
  {
    group: "Tools",
    items: [
      "Git",
      "GitHub Copilot",
      "Bitbucket",
      "Postman",
      "Jira",
      "Agile / Scrum",
    ],
  },
];

export const experience = [
  {
    company: "Greenwood High School",
    title: "Full-stack & AI developer (freelance)",
    subtitle: "Assessment and student analytics platform",
    period: "Apr 2026 – Present",
    points: [
      "Designed and built an end-to-end assessment platform for a school. Teachers tag questions by topic and generate question papers from those tags, which streamlines how assessments are created and managed.",
      "Built 10+ REST API endpoints with Node.js and Express on a SQL database, covering question management, assessments, answer evaluation and student performance reporting.",
      "Developed the React interfaces for managing questions and assessments, evaluating answers and viewing performance reports.",
      "Implemented analytics across 10+ topics that track question distribution, correct and incorrect responses, and student accuracy, so teachers can see learning gaps and class-wide patterns.",
      "Integrated an LLM to turn performance data into written student summaries and actionable insights, which cuts the time spent preparing reports by hand.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "SQL", "LLM APIs"],
  },
  {
    company: "Ncompass Tech Studio",
    title: "Software developer (full-stack)",
    subtitle: "HR and accounts management product (BSuite) and client work",
    period: "Jan 2025 – Feb 2026",
    points: [
      "Delivered features across React and Node.js and contributed to 2+ production modules.",
      "Developed and scaled BSuite, an HR and accounts management system. Designed and implemented secure authentication and role-based access control (RBAC) so each user only sees what their role allows.",
      "Resolved 20+ production issues by debugging both frontend and backend behavior, diagnosing performance bottlenecks and shipping fixes.",
      "Optimized frontend rendering and API calls to make key workflows faster and more reliable.",
      "Worked in Agile/Scrum sprints with 5+ cross-functional teammates and a US-based client (PhoneX), delivering sprint tasks and hotfixes with 100% on-time delivery.",
      "Used Git-based workflows and helped with deployments, covering feature releases and bug fixes across development and production environments.",
    ],
    stack: ["React.js", "Node.js", "REST APIs", "Git", "Agile / Scrum"],
  },
];

export const projects = [
  {
    name: "AI Resume Job Analyser",
    period: "May 2026 – Aug 2026",
    description:
      "Compares a resume against a job description and shows how well the skills line up, so applicants know what to tailor.",
    points: [
      "Built a full-stack application with a React.js frontend and a Python backend.",
      "Developed FastAPI REST APIs that connect the frontend to the AI processing and inference workflow.",
      "Designed an interactive dashboard showing match scores, matched and missing skills, and actionable recommendations for targeted applications.",
    ],
    stack: ["React.js", "Python", "FastAPI"],
    link: "", // add repo or live demo URL
  },
];

export const education = {
  degree: "B.Tech in Computer Science",
  school: "SRM University, Chennai",
  period: "Aug 2021 – May 2025",
  cgpa: "8.5 / 10",
  courses: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Operating Systems",
    "Computer Networks",
    "Database Management Systems",
  ],
};
