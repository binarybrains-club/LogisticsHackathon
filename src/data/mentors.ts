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
    technologies: ["Intelgiencia Artificial", "Python", "Javascript/Typescript", "Java"],
    role:
      "Delivery Consultant Data & AI and Sustainability @ IBM | AI Lead & Co-founder @ BinaryBrains",
    profilePath: "/LogisticsHackathon/mentors/eduardo.jpg",
  },
];
