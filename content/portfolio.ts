/**
 * Portfolio content, derived strictly from content/resume.md.
 * presentation components read from here; update the resume first, then this file.
 */

export const identity = {
  name: "Mohammad Moghaddam",
  title: "Administrative & Operations Manager",
  discipline: "Project Control · Procurement · Commercial Operations · Organizational Development",
  location: "Tehran, Iran",
  email: "peymusic69@gmail.com",
  phone: "+98 937 200 1384",
  phoneHref: "+989372001384",
  positioning:
    "I structure the operational side of organizations: how work is planned, procured, documented and reported. My work sits between project execution, procurement and management reporting, turning scattered activity into controlled, visible process.",
} as const;

export const profile = {
  lead: "Administrative and operations professional working across project control, procurement, commercial operations, warehouse management and document administration.",
  body: [
    "Experienced in coordinating cross-functional teams, structuring operational processes and improving workflow visibility so management decisions rest on reliable information.",
    "Works with Microsoft Project, Primavera, Jira, Trello, CRM platforms and the Microsoft Office suite as working instruments rather than reporting artifacts.",
  ],
} as const;

export type FocusArea = {
  code: string;
  title: string;
  line: string;
};

export const focusAreas: FocusArea[] = [
  {
    code: "01",
    title: "Operational management",
    line: "Office administration, operational coordination, correspondence and process standardization.",
  },
  {
    code: "02",
    title: "Project planning & control",
    line: "Project planning, progress tracking, activity follow-up and delivery coordination.",
  },
  {
    code: "03",
    title: "Procurement & supply",
    line: "Procurement workflows, purchase requests, supplier coordination, warehousing and logistics.",
  },
  {
    code: "04",
    title: "Organizational development",
    line: "Performance evaluation frameworks, goal monitoring and consistent measurement across units.",
  },
  {
    code: "05",
    title: "Process standardization",
    line: "Document control, filing structures, registration and retention procedures.",
  },
  {
    code: "06",
    title: "Management reporting",
    line: "Reporting redesign, workflow visibility and information quality for decision-making.",
  },
];

export type Role = {
  company: string;
  roles: string[];
  location: string;
  period: string;
  current?: boolean;
  achievements: { title: string; detail: string }[];
  impact: string;
};

export const majorExperience: Role[] = [
  {
    company: "Arman Pandar Hasti",
    roles: ["Senior Planning & Development Specialist"],
    location: "Tehran, Iran",
    period: "2026 — Present",
    current: true,
    achievements: [
      {
        title: "Scrum-ban workflow management system",
        detail:
          "Established a structured approach to task assignment, prioritization and progress tracking, with clear visibility into responsibilities and workflow status.",
      },
      {
        title: "Management reporting redesign",
        detail:
          "Reworked management reporting processes to raise information quality, support performance monitoring and strengthen decision-making.",
      },
      {
        title: "Corporate profile & organizational fact sheet",
        detail:
          "Collected, analyzed and consolidated organizational data into a single structured reference.",
      },
      {
        title: "Holding-wide performance evaluation framework",
        detail:
          "Designed a framework for goal monitoring and consistent performance measurement across business units and subsidiaries.",
      },
    ],
    impact:
      "Strengthened planning, performance monitoring and management reporting across corporate and holding levels, with emphasis on process standardization and data-informed decisions.",
  },
  {
    company: "Parto Fanavar Sharif",
    roles: [
      "Procurement & Project Supply Supervisor",
      "Operations Supervisor",
      "Project Planning & Control Specialist",
      "Document Control (DCC) Specialist",
    ],
    location: "Tehran, Iran",
    period: "2023 — 2026",
    achievements: [
      {
        title: "Integrated project procurement system",
        detail:
          "Designed end-to-end coverage from requirements identification and purchase requests through supplier coordination and procurement status tracking.",
      },
      {
        title: "Petty cash management",
        detail:
          "Reviewed expense procedures, transaction records and supporting documentation to strengthen financial transparency and traceability.",
      },
      {
        title: "End-to-end planning & monitoring",
        detail:
          "Supported progress tracking, activity follow-up and coordination across execution teams from initiation through completion and handover.",
      },
      {
        title: "Workflow integration",
        detail:
          "Connected project execution, procurement and document control workflows to improve cross-functional coordination and tracking of deliverables.",
      },
    ],
    impact:
      "Improved operational alignment across project planning, procurement, financial administration and document control, supporting more coordinated project delivery.",
  },
  {
    company: "Farazan Sazeh Darya",
    roles: [
      "Administrative, HR & Personnel Administration Supervisor",
      "Senior Document Control (DCC) Specialist",
    ],
    location: "Tehran, Iran",
    period: "2020 — 2023",
    achievements: [
      {
        title: "Contract & payroll administration",
        detail:
          "Designed project processes covering personnel contracts, timesheets, attendance data, payroll administration and supporting records.",
      },
      {
        title: "Filing & correspondence system",
        detail:
          "Established structured registration, classification, numbering, circulation and archiving for project documents.",
      },
      {
        title: "Standardized HR processes",
        detail:
          "Coordinated personnel administration, employee records and project requirements under consistent administrative procedures.",
      },
      {
        title: "Document control & records management",
        detail:
          "Applied consistent registration, retention and tracking procedures across project documentation.",
      },
    ],
    impact:
      "Established a structured foundation for document management, contract administration, personnel records and payroll-related processes in a project-based environment.",
  },
  {
    company: "Milad Tower",
    roles: ["Warehouse Manager"],
    location: "Tehran, Iran",
    period: "2020",
    achievements: [
      {
        title: "Warehouse management system",
        detail:
          "Redesigned and reimplemented inventory processes to align with the organizational structure and the needs of restaurants and operating units.",
      },
      {
        title: "Inventory & material flows",
        detail:
          "Improved procedures for requisition, receipt, storage and issuance.",
      },
      {
        title: "Warehouse structure",
        detail:
          "Developed a structure informed by consumption patterns and the requirements of internal stakeholders.",
      },
    ],
    impact:
      "Improved inventory control, material traceability and coordination between warehouse operations and business units.",
  },
];

export const earlierExperience = [
  {
    company: "Mehrgan Arad Armeh",
    role: "Sales Support & Commercial Specialist",
    location: "Iran",
    period: "2019 — 2020",
    line: "Followed up on sales activities, maintained customer communications, registered orders and coordinated with internal departments.",
  },
  {
    company: "Parvaz System",
    role: "Senior Commercial Specialist",
    location: "Iran",
    period: "2018 — 2019",
    line: "Managed customer and supplier communications, followed up on contracts, coordinated orders and supported day-to-day commercial processes.",
  },
  {
    company: "Novin Film Advertising Agency",
    role: "Senior Commercial Specialist",
    location: "Iran",
    period: "2017 — 2018",
    line: "Coordinated commercial activities and advertising projects, maintained customer communications and registered orders.",
  },
] as const;

export type Achievement = {
  code: string;
  title: string;
  scope: string;
  detail: string;
};

export const achievements: Achievement[] = [
  {
    code: "A-01",
    title: "Scrum-ban workflow implementation",
    scope: "Workflow management",
    detail:
      "Introduced a structured Scrum-ban system for task assignment, prioritization and progress tracking, giving teams clear ownership and workflow visibility.",
  },
  {
    code: "A-02",
    title: "Holding-wide performance evaluation framework",
    scope: "Organizational performance",
    detail:
      "Designed a framework for goal monitoring and consistent measurement across business units and subsidiaries.",
  },
  {
    code: "A-03",
    title: "Management reporting redesign",
    scope: "Management reporting",
    detail:
      "Restructured reporting processes to improve information quality and support performance monitoring and decision-making.",
  },
  {
    code: "A-04",
    title: "Integrated procurement management",
    scope: "Procurement & supply",
    detail:
      "Built an integrated procurement system spanning requirements identification, purchase requests, supplier coordination and status tracking.",
  },
  {
    code: "A-05",
    title: "Project planning & control",
    scope: "Project delivery",
    detail:
      "Supported planning and monitoring across the full project cycle, from initiation through completion and handover.",
  },
  {
    code: "A-06",
    title: "Document control standardization",
    scope: "Document control",
    detail:
      "Established structured registration, classification, numbering, circulation and archiving for project documentation.",
  },
  {
    code: "A-07",
    title: "Contract & payroll administration",
    scope: "HR & financial administration",
    detail:
      "Structured personnel contracts, timesheets, attendance data and payroll administration with supporting records.",
  },
  {
    code: "A-08",
    title: "Warehouse management redesign",
    scope: "Warehouse & inventory",
    detail:
      "Redesigned inventory and material flows, aligning warehouse structure with consumption patterns and the needs of operating units.",
  },
];

export type Competency = {
  code: string;
  title: string;
  items: string[];
};

export const competencies: Competency[] = [
  {
    code: "C-01",
    title: "Operations Management",
    items: [
      "Office administration",
      "Operational coordination",
      "Correspondence",
      "Filing structures",
      "Process standardization",
    ],
  },
  {
    code: "C-02",
    title: "Project Planning & Control",
    items: [
      "Project planning",
      "Progress tracking",
      "Activity follow-up",
      "Delivery coordination",
    ],
  },
  {
    code: "C-03",
    title: "Procurement & Supply Chain",
    items: [
      "Procurement workflows",
      "Purchase requests",
      "Supplier coordination",
      "Warehousing",
      "Logistics",
    ],
  },
  {
    code: "C-04",
    title: "Organizational Performance",
    items: [
      "Management reporting",
      "Performance evaluation frameworks",
      "Workflow visibility",
      "Process improvement",
    ],
  },
  {
    code: "C-05",
    title: "Administrative Management",
    items: [
      "Document control",
      "Records management",
      "Retention procedures",
      "Contract administration",
    ],
  },
  {
    code: "C-06",
    title: "HR & Personnel Administration",
    items: [
      "Personnel records",
      "Contract administration",
      "Timesheets",
      "Attendance",
      "Payroll support",
    ],
  },
  {
    code: "C-07",
    title: "Financial Administration",
    items: [
      "Petty cash management",
      "Expense recording",
      "Financial documentation",
    ],
  },
  {
    code: "C-08",
    title: "Commercial Operations",
    items: [
      "Customer & supplier relations",
      "Sales support",
      "Order coordination",
      "CRM systems",
    ],
  },
];

export const tools = [
  "Microsoft Project",
  "Primavera",
  "Jira",
  "Trello",
  "Microsoft Office",
  "CRM Platforms",
] as const;

export const methodologies = [
  {
    name: "Agile",
    line: "Iterative delivery principles applied to operational planning and follow-up.",
  },
  {
    name: "Scrum",
    line: "Framework training and practical implementation, including Scrum Master responsibilities.",
  },
  {
    name: "Scrum-ban",
    line: "Workflow management combining structured prioritization with continuous flow.",
  },
] as const;

export const training = [
  {
    name: "Project Management & Control with Microsoft Project",
    provider: "",
  },
  { name: "Project Management & Control", provider: "" },
  {
    name: "Introduction to Scrum Master and Practical Implementation of Scrum",
    provider: "Scrum Iran",
  },
  { name: "Scrum Fundamentals", provider: "Scrum School" },
] as const;

export const education = {
  degree: "Bachelor's Degree in Industrial Management",
  institution: "Islamic Azad University",
} as const;

export const languages = [
  { name: "Persian", level: "Native" },
  { name: "English", level: "Professional Working Proficiency" },
] as const;

export const sections = [
  { id: "overview", label: "Overview", code: "01" },
  { id: "experience", label: "Experience", code: "02" },
  { id: "achievements", label: "Achievements", code: "03" },
  { id: "competencies", label: "Competencies", code: "04" },
  { id: "tools", label: "Tools", code: "05" },
  { id: "education", label: "Education", code: "06" },
  { id: "contact", label: "Contact", code: "07" },
] as const;
