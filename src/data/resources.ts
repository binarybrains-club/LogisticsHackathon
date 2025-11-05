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
    title: "Learning Path: JavaScript Web Development - IBM Skills Build",
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
    title: "Capacitaciones para Ingeniería Industrial",
    description: "",
    links: [
      {
        href: "https://drive.google.com/drive/folders/1SyG24k4ArkHfZt9DZGpeh9rMdA4nX5DB",
        label: "Capacitaciones de LDM",
      },
    ],
  },
  {
    company: {
      name: "LDM",
      logoPath: "LDM.png",
    },
    title: "Diagramas de Flujo del Proceso (AS-IS)",
    description: "",
    links: [
      {
        label: "AS-IS Caja Cobro Calzando a México",
        href: "/LogisticsHackathon/challenges/AS-IS Caja Cobro Calzando a México.pdf",
      },
      {
        label: "AS-IS Calidad Calzando a México",
        href: "/LogisticsHackathon/challenges/AS-IS Calidad Calzando a México.pdf",
      },
      {
        label: "AS-IS Control de inventarios Calzando a México",
        href: "/LogisticsHackathon/challenges/AS-IS Control de inventarios Calzando a México.pdf",
      },
      {
        label: "AS-IS Recibo Calzando a México",
        href: "/LogisticsHackathon/challenges/AS-IS Recibo Calzando a México.pdf",
      },
      {
        label: "AS-IS Resurtido Calzando a México",
        href: "/LogisticsHackathon/challenges/AS-IS Resurtido Calzando a México.pdf",
      },
      {
        label: "AS-IS Separación Calzando a México",
        href: "/LogisticsHackathon/challenges/AS-IS Separación Calzando a México.pdf",
      },
      {
        label: "AS-IS Surtido Calzando a México",
        href: "/LogisticsHackathon/challenges/AS-IS Surtido Calzando a México.pdf",
      },
    ],
  },
  {
    company: {
      name: "LDM",
      logoPath: "LDM.png",
    },
    title: "Excel con datos de inventario y Venta por sucursal",
    description: "",
    links: [
      {
        label: "Inventario y Ventas para coberturas de Calzando a México",
        href:
          "/LogisticsHackathon/challenges/Inventario y Ventas para coberturas de Calzando a México.xlsx",
      },
    ],
  },
  {
    company: {
      name: "LDM",
      logoPath: "LDM.png",
    },
    title: "Caso de Negocio",
    description: "",
    links: [
      {
        label: "Caso de Negocio - UPIICSA Revisado",
        href: "/LogisticsHackathon/challenges/Caso de Negocio - UPIICSA Revisado.pdf",
      },
    ],
  },
  {
    company: {
      name: "LDM",
      logoPath: "LDM.png",
    },
    title: "Matriz de Roles As Is (LDM)",
    description: "",
    links: [
      {
        label: "Matriz de Roles As Is (LDM)",
        href: "/LogisticsHackathon/challenges/Matriz de Roles As Is (LDM).xlsx",
      },
    ],
  },
];
