export type Mentor = {
  name: string;
  technologies: string[];
  role: string;
  profilePath: string;
};
export const MENTORS: Mentor[] = [
  {
    name: "Eduardo Gamaliel Garcia Zavala",
    technologies: [
      "Frontend Development",
      "Preact",
      "React",
      "Astro",
      "Deno",
      "Node.js",
      "Tailwindcss",
      "HTML",
      "CSS",
      "Javascript/Typescript",
    ],
    role: "Consultor @ itprove | Frontend Lead @ BinaryBrains | OSS Contributor @ JSR",
    profilePath: "/LogisticsHackathon/mentors/gamaliel.jpeg",
  },
  {
    name: "Eduardo Dominguez Navarrete",
    technologies: [
      "Inteligencia Artificial",
      "Python",
      "Javascript/Typescript",
      "Java",
      "Watsonx AI",
      "Watsonx Orchestrate",
    ],
    role:
      "Delivery Consultant Data & AI and Sustainability @ IBM | AI Lead & Co-founder @ BinaryBrains",
    profilePath: "/LogisticsHackathon/mentors/eduardo.jpg",
  },
  {
    name: "Erandi Abigaíl García",
    technologies: [
      "Python",
      "SQL",
      "Javascript",
      "Inteligencia Artificial",
      "Watsonx AI",
      "Watsonx Orchestrate",
    ],
    role: "AI Engineer @ IBM",
    profilePath: "/LogisticsHackathon/mentors/erandi.jpg",
  },
  {
    name: "Manuel Ortiz",
    technologies: [
      "Azure",
      "Cloud Computing",
      "Xcode",
      "Swift",
      "Devops",
      "Kubernetes",
    ],
    role: "Microsoft DevOps MVP | Cloud & Software Engineer",
    profilePath: "/LogisticsHackathon/mentors/manu.jpeg",
  },
];
