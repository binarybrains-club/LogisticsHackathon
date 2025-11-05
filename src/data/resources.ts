export type Resource = {
  company: {
    logoPath: string;
    name: string;
  };
  title: string;
  description?: string;
  links: { href: string; label: string }[];
};
export const RESOURCES: Resource[] = [
  {
    company: {
      name: "IBM",
      logoPath: "IBM.png",
    },
    title: "Learning Path: AI - IBM Skills Build",
    description:
      "En este apartado encontrará cómo, como estudiante, obtener créditos en IBM Cloud para usar sus IA, dentro de un learning‑path que también incluye cursos adicionales, como desarrollo web.",

    links: [
      {
        href: "https://ibm.biz/BdbSEA",
        label:
          "UPIICSA AI Summit: Aprende de los datos rápido y sin programar usando IA y reclama una credencial digital.",
      },
      {
        href: "https://skills.yourlearning.ibm.com/channel/CNL_LCB_1569538212365",
        label: "Communication Skills",
      },
    ],
  },
  {
    company: {
      name: "IBM",
      logoPath: "IBM.png",
    },
    title: "Learning Path:  JavaScript Web Development -IBM Skills Build",
    description:
      "En este apartado, dirigido a estudiantes, encontrará el learning‑path “Web Development: Learn JavaScript”, que reúne todos los recursos y ejercicios necesarios para dominar JavaScript desde cero y avanzar paso a paso en el desarrollo web.",

    links: [
      {
        href: "https://skills.yourlearning.ibm.com/channel/CNL_LCB_1616532512410",
        label: "Web Development: Learn JavaScript",
      },
    ],
  },
  {
    company: {
      name: "LDM",
      logoPath: "LDM.png",
    },
    title: "",
    description: "",
    links: [],
  },
];
