/**
 * Job Opportunities Demonstration Data
 * Per Section 3.4, 3.5, and Master Project Brief:
 * Fictional vacancies are clearly marked as sample/demonstration content for UI layout evaluation.
 * Includes both open and closed vacancies to demonstrate application blocking on expired listings.
 */

export const JOBS_DATA = [
  {
    id: "gts-eng-2026-01",
    title: "Senior Full Stack Software Engineer",
    department: "Engineering",
    employmentType: "Full-time",
    location: "Bengaluru, India",
    workMode: "Hybrid",
    experience: "4 - 7 Years",
    openings: 2,
    salaryRange: "Disclosed upon interview stage",
    deadline: "2026-12-31",
    status: "open", // open | closed
    isFeatured: true,
    isSampleNotice: "Demonstration Listing: Provided for UI layout verification. Not an official active hire.",
    summary: "Lead the design and development of enterprise-grade web applications utilizing modern React.js frontends and Node.js backend microservices.",
    responsibilities: [
      "Architect and build robust, scalable web applications using React.js, Node.js, and PostgreSQL.",
      "Collaborate closely with cross-functional teams to translate business requirements into technical architectures.",
      "Design and maintain clean, secure RESTful APIs with rigorous input validation and error handling.",
      "Mentor junior software engineers, conduct code reviews, and champion engineering best practices.",
      "Optimize application performance, database queries, and frontend bundle delivery."
    ],
    qualifications: [
      "Bachelor's or Master's degree in Computer Science, Information Technology, or related discipline.",
      "Demonstrated track record of delivering production-grade web applications.",
      "Strong understanding of software engineering fundamentals, data structures, and algorithms."
    ],
    technicalSkills: [
      "React.js",
      "Node.js & Express.js",
      "PostgreSQL & Prisma ORM",
      "TypeScript & JavaScript (ES6+)",
      "RESTful API Architecture",
      "Git & CI/CD Workflows"
    ]
  },
  {
    id: "gts-eng-2026-02",
    title: "Frontend UI/UX Engineer",
    department: "Product Engineering",
    employmentType: "Full-time",
    location: "Bengaluru, India",
    workMode: "Hybrid",
    experience: "2 - 5 Years",
    openings: 3,
    salaryRange: "Competitive industry standards",
    deadline: "2026-12-25",
    status: "open",
    isFeatured: true,
    isSampleNotice: "Demonstration Listing: Provided for UI layout verification. Not an official active hire.",
    summary: "Craft responsive, accessible, and high-performance user interfaces that adhere to modern corporate design standards.",
    responsibilities: [
      "Develop reusable component libraries using React.js and modern CSS frameworks like Tailwind CSS.",
      "Implement pixel-perfect responsive layouts adapted across mobile, tablet, laptop, and 4K displays.",
      "Ensure web accessibility (WCAG 2.1 AA compliance) and cross-browser compatibility.",
      "Optimize frontend performance, Core Web Vitals, and client-side rendering speeds."
    ],
    qualifications: [
      "Bachelor's degree in Computer Science, Design, or equivalent practical experience.",
      "Strong portfolio demonstrating responsive web design and component-driven architecture.",
      "Keen eye for corporate typography, micro-interactions, and visual hierarchy."
    ],
    technicalSkills: [
      "React.js",
      "Tailwind CSS / PostCSS",
      "JavaScript (ES6+) & TypeScript",
      "Responsive Web Design",
      "Figma to Code workflows",
      "Vite & Modern Build Tooling"
    ]
  },
  {
    id: "gts-qa-2026-03",
    title: "Quality Assurance & Test Automation Specialist",
    department: "Quality Assurance",
    employmentType: "Full-time",
    location: "Bengaluru, India",
    workMode: "On-site",
    experience: "3 - 6 Years",
    openings: 1,
    salaryRange: "Commensurate with experience",
    deadline: "2026-12-20",
    status: "open",
    isFeatured: true,
    isSampleNotice: "Demonstration Listing: Provided for UI layout verification. Not an official active hire.",
    summary: "Establish automated testing pipelines, execute rigorous integration verification, and safeguard software reliability.",
    responsibilities: [
      "Develop and maintain automated test suites for frontend UI and backend REST APIs.",
      "Perform cross-browser, cross-device, regression, and load testing.",
      "Integrate automated test runs into CI/CD deployment pipelines.",
      "Document detailed defect reports and collaborate with development teams for prompt resolution."
    ],
    qualifications: [
      "Degree in Computer Science, IT, or related engineering discipline.",
      "Demonstrated experience with modern automation frameworks such as Playwright, Cypress, or Selenium.",
      "Strong knowledge of QA methodologies, test planning, and defect tracking."
    ],
    technicalSkills: [
      "Playwright / Cypress",
      "API Testing (Postman)",
      "JavaScript / TypeScript",
      "CI/CD Integration",
      "Performance Testing (k6/JMeter)"
    ]
  },
  {
    id: "gts-cloud-2026-04",
    title: "Cloud Infrastructure & DevOps Engineer",
    department: "Infrastructure",
    employmentType: "Full-time",
    location: "Bengaluru, India",
    workMode: "Hybrid",
    experience: "3 - 5 Years",
    openings: 1,
    salaryRange: "Disclosed upon interview stage",
    deadline: "2026-12-15",
    status: "open",
    isFeatured: false,
    isSampleNotice: "Demonstration Listing: Provided for UI layout verification. Not an official active hire.",
    summary: "Manage cloud environments, container orchestration, and continuous integration/continuous deployment pipelines.",
    responsibilities: [
      "Maintain containerized deployment environments using Docker and orchestration tools.",
      "Automate infrastructure provisioning using Infrastructure as Code (Terraform).",
      "Configure centralized monitoring, log aggregation, and alert systems.",
      "Enforce cloud security practices, IAM role segmentation, and automated backups."
    ],
    qualifications: [
      "Bachelor's degree in IT, Computer Engineering, or equivalent experience.",
      "Hands-on experience managing Linux server environments and cloud platforms."
    ],
    technicalSkills: [
      "Linux System Administration",
      "Docker & Containers",
      "AWS / Cloud Foundations",
      "CI/CD Automation",
      "Terraform / IaC"
    ]
  },
  {
    id: "gts-intern-2026-05",
    title: "Software Development Engineering Intern",
    department: "Engineering",
    employmentType: "Internship",
    location: "Bengaluru, India",
    workMode: "On-site",
    experience: "Fresh Graduate / Final Year",
    openings: 4,
    salaryRange: "Monthly stipend provided",
    deadline: "2026-11-30",
    status: "open",
    isFeatured: false,
    isSampleNotice: "Demonstration Listing: Provided for UI layout verification. Not an official active hire.",
    summary: "An intensive internship program for aspiring software developers to gain hands-on experience building enterprise software under senior engineering mentorship.",
    responsibilities: [
      "Assist in developing feature components under the guidance of lead developers.",
      "Write unit tests and participate in sprint planning sessions.",
      "Learn and apply software engineering best practices, Git collaboration, and clean code principles."
    ],
    qualifications: [
      "Pursuing or recently completed B.E./B.Tech/MCA in Computer Science or related fields.",
      "Foundational proficiency in JavaScript, HTML5, CSS3, and basic database concepts.",
      "Eager willingness to learn and collaborate in an engineering environment."
    ],
    technicalSkills: [
      "JavaScript & React.js basics",
      "HTML5 & Modern CSS",
      "SQL Fundamentals",
      "Git & GitHub basics"
    ]
  },
  {
    id: "gts-closed-sample",
    title: "Technical Project Coordinator (Position Filled)",
    department: "Operations",
    employmentType: "Full-time",
    location: "Bengaluru, India",
    workMode: "On-site",
    experience: "3 - 5 Years",
    openings: 1,
    salaryRange: "Not disclosed",
    deadline: "2026-10-15",
    status: "closed", // To demonstrate that closed vacancies do NOT allow applications
    isFeatured: false,
    isSampleNotice: "Sample Closed Vacancy: Demonstrates that expired/closed positions prevent application submissions as mandated by the SRS.",
    summary: "This vacancy is closed. Applications are no longer accepted for this archived position.",
    responsibilities: [
      "Coordinate project deliverables across technical and client stakeholder teams.",
      "Maintain milestone schedules and risk logs."
    ],
    qualifications: [
      "Relevant degree and previous technical project management experience."
    ],
    technicalSkills: ["Agile/Scrum", "Jira", "Technical Communication"]
  }
];
