/**
 * Services Data
 * Note: As per Section 3.3 of the SRS and Master Project Brief, final service names
 * are subject to company approval. The following are standard software services
 * development placeholders designed to model the exact data schema required by Phase 1.
 */

export const SERVICES_DATA = [
  {
    id: "enterprise-application-development",
    slug: "enterprise-application-development",
    title: "Enterprise Application Development",
    category: "Software Engineering",
    iconName: "Code2",
    shortDescription: "Custom end-to-end software solutions engineered for scalability, security, and enterprise integration.",
    fullDescription: "GTSInfo builds scalable, mission-critical enterprise systems designed to streamline business workflows, modernize legacy operations, and support high-volume transaction processing with robust architectural patterns.",
    capabilities: [
      "Custom Full-Stack Web Applications",
      "Microservices & Event-Driven Architecture",
      "Legacy System Modernization & Migration",
      "Secure API Design & System Integration",
      "Enterprise Database Design & Performance Tuning"
    ],
    technologies: ["React.js", "Node.js", "PostgreSQL", "TypeScript", "REST/GraphQL"],
    status: "published",
    displayOrder: 1,
    isPlaceholderNotice: "Notice: Standard development placeholder. Final service catalog details to be approved by GTSInfo management."
  },
  {
    id: "cloud-infrastructure-devops",
    slug: "cloud-infrastructure-devops",
    title: "Cloud & Infrastructure Solutions",
    category: "Cloud Engineering",
    iconName: "Cloud",
    shortDescription: "Secure cloud architectures, CI/CD pipeline automation, and resilient infrastructure management.",
    fullDescription: "We assist organizations in architecting resilient cloud environments, automating build and deployment workflows, and ensuring maximum uptime through modern infrastructure management best practices.",
    capabilities: [
      "Cloud Architecture & Migration Planning",
      "CI/CD Pipeline Automation & Tooling",
      "Containerization & Orchestration",
      "Infrastructure Monitoring & Reliability Engineering",
      "Cloud Cost Optimization & Security Compliance"
    ],
    technologies: ["Docker", "Kubernetes", "AWS / Azure", "Terraform", "GitHub Actions"],
    status: "published",
    displayOrder: 2,
    isPlaceholderNotice: "Notice: Standard development placeholder. Final service catalog details to be approved by GTSInfo management."
  },
  {
    id: "data-engineering-analytics",
    slug: "data-engineering-analytics",
    title: "Data Engineering & Analytics",
    category: "Data & Insights",
    iconName: "Database",
    shortDescription: "Robust data pipelines, centralized warehousing, and actionable business intelligence capabilities.",
    fullDescription: "Transform operational data into structured, actionable insights. We design data ingestion pipelines, warehouse models, and real-time visualization dashboards tailored to business analytics needs.",
    capabilities: [
      "Data Pipeline & ETL Workflow Engineering",
      "Relational & Dimensional Data Modeling",
      "Business Intelligence Dashboards & Reporting",
      "Data Governance & Quality Assurance",
      "Secure Analytics Storage & Access Control"
    ],
    technologies: ["PostgreSQL", "Python", "Apache Spark", "Airflow", "Metabase / PowerBI"],
    status: "published",
    displayOrder: 3,
    isPlaceholderNotice: "Notice: Standard development placeholder. Final service catalog details to be approved by GTSInfo management."
  },
  {
    id: "quality-engineering-assurance",
    slug: "quality-engineering-assurance",
    title: "Quality Engineering & Testing",
    category: "Quality Assurance",
    iconName: "ShieldCheck",
    shortDescription: "Comprehensive test automation, functional validation, and performance benchmarking for reliable software.",
    fullDescription: "Ensuring software reliability and compliance through structured test automation frameworks, API validation, regression testing, and rigorous security verification protocols.",
    capabilities: [
      "Automated End-to-End & Integration Testing",
      "API Testing & Performance Benchmarking",
      "Security & Vulnerability Assessment",
      "Cross-Browser & Cross-Device Verification",
      "Continuous Quality Gate Integration"
    ],
    technologies: ["Playwright", "Cypress", "Jest", "Postman", "SonarQube"],
    status: "published",
    displayOrder: 4,
    isPlaceholderNotice: "Notice: Standard development placeholder. Final service catalog details to be approved by GTSInfo management."
  },
  {
    id: "digital-product-engineering",
    slug: "digital-product-engineering",
    title: "Digital Product Engineering",
    category: "Product Design & UI",
    iconName: "Layout",
    shortDescription: "User-centric UI/UX design, rapid prototyping, and responsive frontend systems for high engagement.",
    fullDescription: "Crafting intuitive digital interfaces that combine aesthetic design systems with modular frontend codebases, ensuring seamless responsiveness across all screen sizes and device types.",
    capabilities: [
      "Design Systems & Component Libraries",
      "Responsive Web & Mobile-Ready Interfaces",
      "Usability Audits & Interactive Prototyping",
      "Frontend Performance & Core Web Vitals Optimization",
      "WCAG Accessibility Compliance"
    ],
    technologies: ["React.js", "Tailwind CSS", "Figma", "HTML5/CSS3", "Vite"],
    status: "published",
    displayOrder: 5,
    isPlaceholderNotice: "Notice: Standard development placeholder. Final service catalog details to be approved by GTSInfo management."
  },
  {
    id: "it-consulting-architecture",
    slug: "it-consulting-architecture",
    title: "IT Advisory & Architecture Strategy",
    category: "Advisory & Strategy",
    iconName: "Compass",
    shortDescription: "Strategic technology roadmapping, system architecture audits, and digital transformation consulting.",
    fullDescription: "Guiding businesses through technology choices, architecture assessments, and execution roadmaps that align modern software practices with strategic commercial objectives.",
    capabilities: [
      "Technology Stack Evaluation & Roadmapping",
      "System Architecture & Scalability Audits",
      "Security & Data Protection Compliance Advisory",
      "Vendor & Technical Due Diligence",
      "DevOps Culture & Engineering Best Practices"
    ],
    technologies: ["Enterprise Architecture", "Security Standards", "Cloud Frameworks"],
    status: "published",
    displayOrder: 6,
    isPlaceholderNotice: "Notice: Standard development placeholder. Final service catalog details to be approved by GTSInfo management."
  }
];
