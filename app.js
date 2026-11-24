/**
 * TalentMatch.dev - Modern Career & Explainable Job Matching Platform
 * Tagline: "TalentMatch.dev – One Platform. Every Career Opportunity."
 * Technology Stack: HTML5, CSS3, Vanilla JavaScript (ES6+), Bootstrap 5, LocalStorage
 * Project ID: PST_PD_005
 * 
 * PHASES IMPLEMENTED:
 * Phase 3: Jobs & Internships Portal
 * Phase 4: AI-Style Skill Matching System
 * Phase 7: Recruiter & Company Dashboard
 * Phase 9: Admin Panel
 * Phase 10: Final Integration, Testing & Optimization
 * 
 * UNSELECTED PHASES REMOVED:
 * Unselected modules removed: Social Networking, Hackathons & Competitions, Messaging & Notifications
 */

// ============ BIG TECH COMPANY LOGOS (High-Fidelity Vectors) ============
const COMPANY_LOGOS = {
  Google: `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.79-2.11-6.74-4.96H1.23v3.15C3.26 21.36 7.34 24 12 24z"/><path fill="#FBBC05" d="M5.26 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.23C.45 8.16 0 9.97 0 12s.45 3.84 1.23 5.39l4.03-3.15z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.23 6.61l4.03 3.15c.95-2.85 3.62-4.96 6.74-4.96z"/></svg>`,
  Microsoft: `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#F25022" d="M1 1h10v10H1z"/><path fill="#7FBA00" d="M13 1h10v10H13z"/><path fill="#00A4EF" d="M1 13h10v10H1z"/><path fill="#FFB900" d="M13 13h10v10H13z"/></svg>`,
  Amazon: `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#FF9900" d="M13.8 17.5c-4.4 2.6-9.6 1.3-12.8-.7-.4-.3 0-.8.4-.6 3.1 1.8 8.4 2.7 12.3-.2.6-.4 1.1.2.1.8z"/><path fill="#FF9900" d="M15.1 15.8c-.3-.4-1.9-.2-2.6-.1-.2 0-.3-.2-.1-.3 1.3-.9 3.4-.6 3.7-.2.3.4-.1 2.5-1.3 3.5-.2.1-.3 0-.3-.2.3-.7.9-2.3.6-2.7z"/><path fill="#232F3E" d="M14.5 12.1c0 1.9-.9 2.9-2.4 2.9-1.2 0-2-.8-2-2.2 0-2.3 1.8-2.7 4.4-2.7v2zm2.1 3.5c-.1-.2-.2-.5-.2-1.3-.6.9-1.6 1.6-3 1.6-1.8 0-3.3-1.1-3.3-3.2 0-2.4 1.8-3.6 4.9-3.6h1.4V8.8c0-1.2-.6-1.8-2.1-1.8-1.2 0-2.2.5-2.5 1.2-.1.2-.3.3-.5.3l-1.3-.5c-.2-.1-.3-.4-.2-.6.7-1.4 2.3-2.2 4.6-2.2 2.6 0 4.1 1.2 4.1 3.7v4.6c0 1 .4 1.3.8 1.8.2.2.1.5-.1.6l-1.3 1c-.3.1-.5.1-.6-.1z"/></svg>`,
  Meta: `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#0668E1" d="M12 4.8C7.5 4.8 4.2 8.3 4.2 12s3.3 7.2 7.8 7.2c2.4 0 4.6-1 6-2.6l-2-1.7c-1 1.1-2.4 1.8-4 1.8-3 0-5.3-2.2-5.3-4.7s2.3-4.7 5.3-4.7c1.6 0 3 .7 4 1.8l2-1.7C16.6 5.8 14.4 4.8 12 4.8zm7.8 4.2c-1.3 0-2.4.7-3 1.7l1.9 1.6c.3-.5.7-.8 1.1-.8 1 0 1.7.8 1.7 1.8s-.7 1.8-1.7 1.8c-.4 0-.8-.3-1.1-.8l-1.9 1.6c.6 1 1.7 1.7 3 1.7 2.2 0 4.2-2.1 4.2-4.5s-2-4.5-4.2-4.5z"/></svg>`,
  Apple: `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#000000" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.06-1.87.94-2.97-.93.04-2.09.63-2.73 1.4-.56.65-.99 1.76-.86 2.84 1.05.08 2.02-.49 2.65-1.27z"/></svg>`,
  Netflix: `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#E50914" d="M4.5 1.5h3.6v21H4.5zM15.9 1.5h3.6v21h-3.6z"/><path fill="#B81D24" d="M4.5 1.5l11.4 21h3.6l-11.4-21z"/></svg>`,
  Spotify: `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#1DB954" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.5 17.3c-.2.3-.6.4-.9.2-2.5-1.5-5.6-1.9-9.3-1-.4.1-.7-.1-.8-.5-.1-.4.1-.7.5-.8 4.1-1 7.5-.5 10.3 1.2.3.2.4.6.2.9zm1.5-3.3c-.3.4-.8.5-1.2.3-3-1.8-7.5-2.4-11-1.3-.4.1-.9-.1-1-.6-.1-.4.1-.9.6-1 4.1-1.2 9.1-.6 12.4 1.5.4.1.5.7.2 1.1zm.1-3.4c-3.6-2.1-9.5-2.3-12.9-1.3-.5.2-1.1-.1-1.3-.7-.2-.5.1-1.1.7-1.3 4-1.2 10.5-1 14.6 1.5.5.3.6.9.3 1.4-.3.5-1 .6-1.4.4z"/></svg>`,
  Stripe: `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#635BFF" d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C17.652.709 15.11 0 12.102 0 6.643 0 2.929 2.879 2.929 7.422c0 4.708 3.518 6.438 6.84 7.64 2.457.886 3.327 1.554 3.327 2.502 0 .979-.844 1.493-2.227 1.493-2.029 0-4.79-.979-6.819-2.172l-.89 5.568C5.008 23.376 7.848 24 10.748 24c5.787 0 9.771-2.738 9.771-7.422-.001-4.707-3.49-6.398-6.543-7.428z"/></svg>`,
  Uber: `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#000000" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5-7.5-3.358-7.5-7.5 3.358-7.5 7.5-7.5zm-3 4.5v6h6v-6H9zm1.5 1.5h3v3h-3v-3z"/></svg>`,
  Adobe: `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#FF0000" d="M14.5 3H24v18h-4.8l-4.7-11.7zm-5 0H0v18h4.8l4.7-11.7zm2.5 7.5L16.2 21h-3.6l-1.6-4.2h-3.9L12 10.5z"/></svg>`
};

function companyBadge(companyName, size = 20) {
  const logoSvg = COMPANY_LOGOS[companyName];
  if (logoSvg) {
    return `<span class="company-logo-badge d-inline-flex align-items-center justify-content-center" style="width:${size}px; height:${size}px;">${logoSvg}</span>`;
  }
  const initials = (companyName || "TM").slice(0, 2).toUpperCase();
  return `<span class="company-logo-fallback d-inline-flex align-items-center justify-content-center rounded bg-primary-subtle text-primary fw-bold" style="width:${size}px; height:${size}px; font-size:${Math.round(size*0.45)}px;">${initials}</span>`;
}

// ============ COMPANY PROFILES METADATA ============
const COMPANY_PROFILES = {
  Google: {
    name: "Google",
    industry: "Information Technology & Cloud",
    headquarters: "Mountain View, CA",
    website: "https://careers.google.com",
    employees: "180,000+",
    description: "Google organizes the world's information and makes it universally accessible and useful through world-class engineering, cloud platforms, and generative AI research.",
    openingsCount: 3
  },
  Microsoft: {
    name: "Microsoft",
    industry: "Cloud & Enterprise Software",
    headquarters: "Redmond, WA",
    website: "https://careers.microsoft.com",
    employees: "220,000+",
    description: "Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge through Azure, GitHub, Office, and Windows developer tools.",
    openingsCount: 3
  },
  Amazon: {
    name: "Amazon",
    industry: "E-Commerce & Cloud Infrastructure (AWS)",
    headquarters: "Seattle, WA",
    website: "https://amazon.jobs",
    employees: "1,500,000+",
    description: "Amazon is guided by four principles: customer obsession, passion for invention, commitment to operational excellence, and long-term thinking powering AWS and retail.",
    openingsCount: 2
  },
  Meta: {
    name: "Meta",
    industry: "Social Technology, AI & Open-Source",
    headquarters: "Menlo Park, CA",
    website: "https://metacareers.com",
    employees: "67,000+",
    description: "Meta builds technologies that help people connect, find communities, and grow businesses, and is a pioneer in open-source AI frameworks (Llama, PyTorch, React).",
    openingsCount: 3
  },
  Apple: {
    name: "Apple",
    industry: "Consumer Electronics & Software Ecosystems",
    headquarters: "Cupertino, CA",
    website: "https://apple.com/careers",
    employees: "160,000+",
    description: "Apple leads the world in innovation with iPhone, iPad, Mac, Apple Watch, iOS, and dedicated silicon hardware/software co-design.",
    openingsCount: 1
  },
  Netflix: {
    name: "Netflix",
    industry: "Entertainment & Distributed Systems",
    headquarters: "Los Gatos, CA",
    website: "https://jobs.netflix.com",
    employees: "13,000+",
    description: "Netflix is the world's leading streaming entertainment service with 270+ million paid memberships enjoying TV series, documentaries, and feature films.",
    openingsCount: 1
  },
  Spotify: {
    name: "Spotify",
    industry: "Audio Streaming & Web Technologies",
    headquarters: "Stockholm, Sweden",
    website: "https://spotifyjobs.com",
    employees: "9,000+",
    description: "Spotify transformed music listening forever. Today, Spotify is the world's most popular audio streaming subscription service.",
    openingsCount: 2
  },
  Stripe: {
    name: "Stripe",
    industry: "Financial Infrastructure & Developer APIs",
    headquarters: "South San Francisco, CA & Dublin",
    website: "https://stripe.com/jobs",
    employees: "8,000+",
    description: "Stripe is a technology company that builds economic infrastructure for the internet, empowering startups to public companies to accept payments securely.",
    openingsCount: 2
  },
  Uber: {
    name: "Uber",
    industry: "Mobility & Autonomous Logistics",
    headquarters: "San Francisco, CA",
    website: "https://uber.com/careers",
    employees: "30,000+",
    description: "Uber ignites opportunity by setting the world in motion, transforming mobility, food delivery, and autonomous transport networks worldwide.",
    openingsCount: 1
  },
  Adobe: {
    name: "Adobe",
    industry: "Digital Media & Creative Cloud",
    headquarters: "San Jose, CA",
    website: "https://adobe.com/careers",
    employees: "29,000+",
    description: "Adobe is changing the world through digital experiences, empowering creative professionals with Photoshop, Illustrator, Acrobat, and Firefly AI.",
    openingsCount: 2
  }
};

// ============ SAMPLE DATA (20 Realistic Tech Jobs & Internships) ============
const SAMPLE_JOBS = [
  {
    id: "job-001",
    title: "Senior Frontend Engineer",
    company: "Google",
    location: "Bengaluru",
    workplaceType: "Hybrid",
    jobType: "Full-time",
    experienceLevel: "Mid Level",
    salary: "$130,000 - $160,000",
    postedDate: "2026-11-24T10:30:00",
    deadline: "2026-12-31",
    requiredSkills: ["HTML", "CSS", "JavaScript", "TypeScript"],
    description: "Architect and build high-performance web applications across Google Cloud and Search ecosystems with modern web standards.",
    responsibilities: [
      "Design and maintain scalable frontend architectures using Vanilla JavaScript and TypeScript.",
      "Optimize Core Web Vitals to deliver sub-100ms response times for millions of daily active users.",
      "Collaborate with UX research and engineering teams across Mountain View and Bengaluru.",
      "Ensure adherence to WCAG 2.1 AA accessibility guidelines across all user interfaces."
    ],
    eligibility: [
      "B.S. or M.S. in Computer Science or equivalent practical experience.",
      "3+ years of experience building modern frontend applications with HTML5, CSS3, and modern JavaScript.",
      "Strong understanding of browser rendering pipelines and memory optimization."
    ],
    active: true
  },
  {
    id: "job-002",
    title: "Cloud Solutions Developer",
    company: "Microsoft",
    location: "Hyderabad",
    workplaceType: "Remote",
    jobType: "Full-time",
    experienceLevel: "Mid Level",
    salary: "$120,000 - $145,000",
    postedDate: "2026-11-24T07:15:00",
    deadline: "2026-12-25",
    requiredSkills: ["JavaScript", "React", "TypeScript", "Azure"],
    description: "Create resilient cloud micro-frontends and developer tooling powering the Microsoft Azure ecosystem.",
    responsibilities: [
      "Develop modular cloud portal experiences for Microsoft Azure enterprise customers.",
      "Integrate cloud REST APIs and real-time telemetry dashboards using modern JavaScript.",
      "Implement robust automated unit and end-to-end testing pipelines."
    ],
    eligibility: [
      "2+ years of professional cloud development experience.",
      "Proficiency with modern JavaScript, React/TypeScript, and Azure services."
    ],
    active: true
  },
  {
    id: "job-003",
    title: "Full Stack Systems Engineer",
    company: "Amazon",
    location: "Bengaluru",
    workplaceType: "On-site",
    jobType: "Full-time",
    experienceLevel: "Mid Level",
    salary: "$125,000 - $155,000",
    postedDate: "2026-11-23T18:45:00",
    deadline: "2026-12-20",
    requiredSkills: ["JavaScript", "Node.js", "AWS", "SQL"],
    description: "Build robust, low-latency microservices and high-throughput transaction backends for Amazon AWS infrastructure.",
    responsibilities: [
      "Architect backend APIs using Node.js, AWS Lambda, DynamoDB, and PostgreSQL.",
      "Monitor and tune high-scale production systems processing thousands of requests per second.",
      "Lead design reviews and mentor junior engineering team members."
    ],
    eligibility: [
      "B.S. in Software Engineering or equivalent experience.",
      "Experience with cloud distributed systems and relational database schemas."
    ],
    active: true
  },
  {
    id: "job-004",
    title: "React Platform Engineer",
    company: "Meta",
    location: "Remote",
    workplaceType: "Remote",
    jobType: "Full-time",
    experienceLevel: "Mid Level",
    salary: "$140,000 - $175,000",
    postedDate: "2026-11-23T11:20:00",
    deadline: "2026-12-28",
    requiredSkills: ["JavaScript", "React", "GraphQL", "CSS"],
    description: "Help scale Meta's open-source frontend infrastructure and internal component design systems across global products.",
    responsibilities: [
      "Maintain and improve core UI primitives utilized by thousands of internal developers.",
      "Streamline GraphQL data-fetching pipelines and client-side caching strategies.",
      "Participate in open-source development and web community RFC discussions."
    ],
    eligibility: [
      "Extensive background in React internals, virtual DOM diffing, and performance profiling.",
      "Strong understanding of CSS architecture and cross-browser consistency."
    ],
    active: true
  },
  {
    id: "job-005",
    title: "Core Web Experience Engineer",
    company: "Apple",
    location: "Cupertino",
    workplaceType: "Hybrid",
    jobType: "Full-time",
    experienceLevel: "Mid Level",
    salary: "$135,000 - $165,000",
    postedDate: "2026-11-22T14:10:00",
    deadline: "2026-12-30",
    requiredSkills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    description: "Craft pixel-perfect, accessible interactive product showcases on Apple.com viewed by hundreds of millions worldwide.",
    responsibilities: [
      "Develop fluid, hardware-accelerated CSS and Canvas web animations for flagship product launches.",
      "Ensure smooth 60fps performance across Apple Safari and modern web browsers.",
      "Partner closely with Human Interface designers to implement uncompromising visual fidelity."
    ],
    eligibility: [
      "Obsessive attention to visual detail, typography, and micro-interactions.",
      "Mastery of modern CSS animations, SVG rendering, and semantic HTML5."
    ],
    active: true
  },
  {
    id: "job-006",
    title: "Streaming Infrastructure Developer",
    company: "Netflix",
    location: "Los Gatos",
    workplaceType: "Remote",
    jobType: "Full-time",
    experienceLevel: "Mid Level",
    salary: "$145,000 - $180,000",
    postedDate: "2026-11-21T09:30:00",
    deadline: "2027-01-10",
    requiredSkills: ["JavaScript", "Node.js", "Docker", "REST API"],
    description: "Develop resilient client-side streaming telemetry SDKs and microservices for the global Netflix application ecosystem.",
    responsibilities: [
      "Implement adaptive bitrate diagnostics and telemetry collection libraries.",
      "Deploy containerized microservices using Docker and cloud orchestration.",
      "Participate in 24/7 on-call rotation for critical video delivery microservices."
    ],
    eligibility: [
      "Strong experience with Node.js async concurrency, streams, and Docker.",
      "Familiarity with media streaming protocols (HLS, DASH) is a plus."
    ],
    active: true
  },
  {
    id: "job-007",
    title: "Data & Insights Engineer",
    company: "Spotify",
    location: "Stockholm",
    workplaceType: "Remote",
    jobType: "Full-time",
    experienceLevel: "Mid Level",
    salary: "$120,000 - $150,000",
    postedDate: "2026-11-20T16:00:00",
    deadline: "2026-12-18",
    requiredSkills: ["Python", "SQL", "JavaScript", "REST API"],
    description: "Engineer data pipelines and internal analytical dashboards that empower audio creators and music curators.",
    responsibilities: [
      "Build automated data ingestion scripts in Python connecting to analytical data warehouses.",
      "Create interactive dashboard interfaces using modern JavaScript data visualization libraries."
    ],
    eligibility: [
      "Proficiency in SQL, relational databases, and Python data structures.",
      "Experience with REST API design and frontend data binding."
    ],
    active: true
  },
  {
    id: "job-008",
    title: "UI & Design Systems Developer",
    company: "Stripe",
    location: "Dublin",
    workplaceType: "Remote",
    jobType: "Full-time",
    experienceLevel: "Mid Level",
    salary: "$130,000 - $160,000",
    postedDate: "2026-11-19T13:40:00",
    deadline: "2026-12-24",
    requiredSkills: ["CSS", "HTML", "JavaScript", "Figma", "UI Design"],
    description: "Build developer-first payment checkout experiences, design token pipelines, and world-class developer documentation.",
    responsibilities: [
      "Maintain Stripe's design tokens and component libraries across web and mobile web.",
      "Partner with product designers to bridge the gap between Figma mockups and production code."
    ],
    eligibility: [
      "Deep understanding of CSS variables, modular CSS architectures, and design tokens.",
      "Strong portfolio demonstrating beautiful, accessible web applications."
    ],
    active: true
  },
  {
    id: "job-009",
    title: "Full Stack Mobility Engineer",
    company: "Uber",
    location: "Bengaluru",
    workplaceType: "Hybrid",
    jobType: "Full-time",
    experienceLevel: "Mid Level",
    salary: "$125,000 - $150,000",
    postedDate: "2026-11-18T10:15:00",
    deadline: "2026-12-22",
    requiredSkills: ["JavaScript", "Node.js", "React", "SQL"],
    description: "Build high-throughput dispatch orchestration tools and real-time driver partner web platforms.",
    responsibilities: [
      "Build responsive web applications for Uber driver operations and fleet management.",
      "Optimize real-time geospatial data queries and backend services."
    ],
    eligibility: [
      "Experience building full-stack web applications with React, Node.js, and SQL.",
      "Comfort with agile release cycles and CI/CD pipelines."
    ],
    active: true
  },
  {
    id: "job-010",
    title: "Creative Cloud UI Developer",
    company: "Adobe",
    location: "Noida",
    workplaceType: "On-site",
    jobType: "Full-time",
    experienceLevel: "Entry Level",
    salary: "$105,000 - $130,000",
    postedDate: "2026-11-17T11:00:00",
    deadline: "2026-12-15",
    requiredSkills: ["HTML", "CSS", "JavaScript", "Git"],
    description: "Build next-generation in-browser creative tools powering Adobe Photoshop on the Web and Creative Cloud services.",
    responsibilities: [
      "Implement responsive canvas and web components for in-browser creative editing.",
      "Work with WebAssembly and WebGL engineers to integrate fast image processing."
    ],
    eligibility: [
      "B.Tech / B.E. in Computer Science, IT, or equivalent.",
      "Solid foundations in HTML5, CSS3, DOM manipulation, and Git version control."
    ],
    active: true
  },
  {
    id: "job-011",
    title: "Web Performance Specialist",
    company: "Google",
    location: "Hyderabad",
    workplaceType: "Remote",
    jobType: "Full-time",
    experienceLevel: "Senior Level",
    salary: "$145,000 - $175,000",
    postedDate: "2026-11-24T05:30:00",
    deadline: "2027-01-15",
    requiredSkills: ["JavaScript", "HTML", "CSS", "Web Performance"],
    description: "Drive core performance initiatives across Google's web properties, ensuring compliance with modern Web Vitals benchmarks.",
    responsibilities: [
      "Analyze and debug runtime memory leaks, paint flashing, and input latency across high-traffic apps.",
      "Write performance automated tooling and conduct training workshops for engineering divisions."
    ],
    eligibility: [
      "5+ years in frontend engineering with proven track record in web performance optimization."
    ],
    active: true
  },
  {
    id: "job-012",
    title: "Software Engineer — Azure AI",
    company: "Microsoft",
    location: "Bengaluru",
    workplaceType: "Hybrid",
    jobType: "Full-time",
    experienceLevel: "Mid Level",
    salary: "$130,000 - $160,000",
    postedDate: "2026-11-23T20:00:00",
    deadline: "2026-12-31",
    requiredSkills: ["JavaScript", "Python", "Azure", "REST API"],
    description: "Develop enterprise developer portals and SDK integrations for Azure OpenAI and cognitive services.",
    responsibilities: [
      "Design developer-facing web portals and API playgrounds for foundation AI models.",
      "Write comprehensive SDK documentation, code samples, and quickstart guides."
    ],
    eligibility: [
      "Demonstrated ability in JavaScript and Python with familiarity in RESTful web services."
    ],
    active: true
  },
  // --- DEDICATED INTERNSHIP ROLES ---
  {
    id: "job-013",
    title: "Junior Frontend Engineer",
    company: "Amazon",
    location: "Bengaluru",
    workplaceType: "Hybrid",
    jobType: "Full-time",
    experienceLevel: "Entry Level",
    salary: "$95,000 - $115,000 / year",
    postedDate: "2026-11-24T09:00:00",
    deadline: "2026-12-15",
    requiredSkills: ["HTML", "CSS", "JavaScript", "Git"],
    description: "Join Amazon as a 6-month Software Development Engineering Intern. Build customer-facing e-commerce web widgets and learn directly from senior principal mentors.",
    responsibilities: [
      "Develop accessible, localized frontend components for Amazon marketplace product pages.",
      "Participate in weekly sprint planning, code reviews, and technical brown-bag sessions.",
      "Present final intern project to leadership with direct Pre-Placement Offer (PPO) evaluation."
    ],
    eligibility: [
      "Currently pursuing B.S./B.Tech/M.S. in Computer Science or related degree graduating in 2026 or 2027.",
      "Strong coding foundation in JavaScript, HTML, CSS, and basic algorithms.",
      "Available for full-time 6-month internship."
    ],
    active: true
  },
  {
    id: "job-014",
    title: "Associate Software Engineer",
    company: "Google",
    location: "Bengaluru",
    workplaceType: "Hybrid",
    jobType: "Full-time",
    experienceLevel: "Entry Level",
    salary: "$110,000 - $130,000 / year",
    postedDate: "2026-11-24T08:30:00",
    deadline: "2026-12-20",
    requiredSkills: ["JavaScript", "HTML", "CSS", "TypeScript"],
    description: "Experience Google's 12-week summer engineering internship program. Work directly on real-world projects that impact billions of global users.",
    responsibilities: [
      "Work closely with a dedicated Google Host Mentor on production code bases.",
      "Implement user interface features and automated test coverage.",
      "Attend tech talks, Google I/O watch parties, and engineering brown-bag workshops."
    ],
    eligibility: [
      "Enrolled in a Bachelor's or Master's program in Computer Science.",
      "Comfortable with HTML/CSS and Vanilla JavaScript fundamentals."
    ],
    active: true
  },
  {
    id: "job-015",
    title: "Junior Cloud Engineer",
    company: "Microsoft",
    location: "Hyderabad",
    workplaceType: "Remote",
    jobType: "Full-time",
    experienceLevel: "Entry Level",
    salary: "$100,000 - $120,000 / year",
    postedDate: "2026-11-23T15:00:00",
    deadline: "2026-12-18",
    requiredSkills: ["JavaScript", "TypeScript", "Azure", "Git"],
    description: "6-month internship with Microsoft Azure engineering team. Learn cloud application architecture and build automated developer tooling.",
    responsibilities: [
      "Build client-side plugins and monitoring widgets for developer portals.",
      "Contribute to open-source developer documentation and GitHub repositories."
    ],
    eligibility: [
      "Penultimate or final-year engineering students with coursework in Operating Systems and Web Tech."
    ],
    active: true
  },
  {
    id: "job-016",
    title: "Junior Web UI Engineer",
    company: "Meta",
    location: "Remote",
    workplaceType: "Remote",
    jobType: "Full-time",
    experienceLevel: "Entry Level",
    salary: "$105,000 - $125,000 / year",
    postedDate: "2026-11-22T17:30:00",
    deadline: "2026-12-22",
    requiredSkills: ["HTML", "CSS", "JavaScript", "React"],
    description: "Meta 3-month summer internship for aspiring frontend developers. Build fast, reactive interfaces with mentorship from core framework engineers.",
    responsibilities: [
      "Contribute UI components and documentation for internal design systems.",
      "Profile and optimize rendering performance for mobile web interfaces."
    ],
    eligibility: [
      "Students graduating in 2026/2027 with demonstrated personal web development projects."
    ],
    active: true
  },
  {
    id: "job-017",
    title: "Associate Web Platform Engineer",
    company: "Spotify",
    location: "Remote",
    workplaceType: "Remote",
    jobType: "Full-time",
    experienceLevel: "Entry Level",
    salary: "$98,000 - $118,000 / year",
    postedDate: "2026-11-21T12:00:00",
    deadline: "2026-12-25",
    requiredSkills: ["HTML", "CSS", "JavaScript", "REST API"],
    description: "Help build the web player experience for millions of music fans around the world. Gain hands-on exposure to audio web APIs.",
    responsibilities: [
      "Develop playlist and artist profile UI components.",
      "Collaborate with international squads across Stockholm, London, and New York."
    ],
    eligibility: [
      "Passionate student or self-taught web developer with strong JavaScript portfolio."
    ],
    active: true
  },
  {
    id: "job-018",
    title: "Payments Integration Developer",
    company: "Stripe",
    location: "San Francisco",
    workplaceType: "Remote",
    jobType: "Full-time",
    experienceLevel: "Mid Level",
    salary: "$130,000 - $160,000",
    postedDate: "2026-11-20T14:00:00",
    deadline: "2026-12-30",
    requiredSkills: ["JavaScript", "TypeScript", "REST API", "Git"],
    description: "Design seamless, resilient developer API documentation and web SDK wrappers for Stripe payments infrastructure.",
    responsibilities: [
      "Build interactive checkout examples and client-side testing sandboxes.",
      "Engage with third-party developers to resolve integration hurdles."
    ],
    eligibility: [
      "2+ years experience writing production JavaScript and REST integrations."
    ],
    active: true
  },
  {
    id: "job-019",
    title: "Quality & Automation Engineer",
    company: "Adobe",
    location: "Bengaluru",
    workplaceType: "Hybrid",
    jobType: "Full-time",
    experienceLevel: "Mid Level",
    salary: "$110,000 - $135,000",
    postedDate: "2026-11-19T16:30:00",
    deadline: "2026-12-28",
    requiredSkills: ["JavaScript", "Testing", "Git", "Cypress"],
    description: "Write automated end-to-end testing suites verifying visual accuracy and accessibility across Creative Cloud web tools.",
    responsibilities: [
      "Maintain automated Cypress and Playwright test suites.",
      "Prevent visual regression across cross-platform browsers."
    ],
    eligibility: [
      "Solid knowledge of JavaScript testing patterns and CI/CD automation."
    ],
    active: true
  },
  {
    id: "job-020",
    title: "Machine Learning Operations Engineer",
    company: "Meta",
    location: "Remote",
    workplaceType: "Remote",
    jobType: "Full-time",
    experienceLevel: "Senior Level",
    salary: "$150,000 - $185,000",
    postedDate: "2026-11-18T18:00:00",
    deadline: "2027-01-05",
    requiredSkills: ["Python", "Docker", "REST API", "Git"],
    description: "Deploy and optimize low-latency model inference pipelines powering Meta's open-source generative AI services.",
    responsibilities: [
      "Package and serve open-source language models using Docker and Kubernetes.",
      "Build developer monitoring telemetry for GPU cluster utilization."
    ],
    eligibility: [
      "4+ years experience deploying production machine learning workflows."
    ],
    active: true
  }
];

// ============ SAMPLE CANDIDATES (Recruiter Candidate Review Pool) ============
const SAMPLE_CANDIDATES = [
  {
    id: "cand-001",
    jobId: "job-001",
    displayName: "Maya Patel",
    email: "maya.patel@demo.dev",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
    experienceLevel: "Mid Level",
    education: "B.Tech in Computer Science, IIT Bombay",
    experience: "3 years as Frontend Developer @ FinTech Labs",
    reviewStatus: "Shortlisted",
    appliedDate: "2026-11-24T11:00:00",
    note: "Strong proficiency in TypeScript and Google Web Vitals."
  },
  {
    id: "cand-002",
    jobId: "job-001",
    displayName: "Devendra Sharma",
    email: "devendra.s@demo.dev",
    skills: ["HTML", "CSS", "JavaScript"],
    experienceLevel: "Entry Level",
    education: "B.E. in IT, Pune University",
    experience: "1 year junior web developer",
    reviewStatus: "Under Review",
    appliedDate: "2026-11-24T10:45:00",
    note: "Solid foundations, needs mentorship in TypeScript."
  },
  {
    id: "cand-003",
    jobId: "job-001",
    displayName: "Ananya Joshi",
    email: "ananya.j@demo.dev",
    skills: ["JavaScript", "React", "HTML"],
    experienceLevel: "Mid Level",
    education: "M.S. in Software Systems, BITS Pilani",
    experience: "2.5 years React frontend developer",
    reviewStatus: "Applied",
    appliedDate: "2026-11-24T09:30:00",
    note: "Application submitted recently."
  },
  {
    id: "cand-004",
    jobId: "job-001",
    displayName: "Kabir Mehta",
    email: "kabir.m@demo.dev",
    skills: ["HTML", "Figma", "UI Design"],
    experienceLevel: "Entry Level",
    education: "B.Des in Digital Experience",
    experience: "UI design intern",
    reviewStatus: "Rejected",
    appliedDate: "2026-11-23T16:00:00",
    note: "Missing mandatory JavaScript and TypeScript programming skills."
  },
  {
    id: "cand-005",
    jobId: "job-002",
    displayName: "Rohan Varma",
    email: "rohan.v@demo.dev",
    skills: ["JavaScript", "React", "TypeScript", "Azure"],
    experienceLevel: "Mid Level",
    education: "B.Tech in CS, NIT Warangal",
    experience: "3 years Cloud Solutions Developer",
    reviewStatus: "Interview",
    appliedDate: "2026-11-24T08:00:00",
    note: "100% skill match. Passed initial technical screen."
  },
  {
    id: "cand-006",
    jobId: "job-002",
    displayName: "Pooja Reddy",
    email: "pooja.r@demo.dev",
    skills: ["JavaScript", "React", "TypeScript"],
    experienceLevel: "Entry Level",
    education: "B.E. in CSE, Osmania University",
    experience: "1.5 years frontend engineer",
    reviewStatus: "Shortlisted",
    appliedDate: "2026-11-23T19:00:00",
    note: "Strong candidate; learning Azure services."
  },
  {
    id: "cand-007",
    jobId: "job-013",
    displayName: "Alex Morgan",
    email: "alex.morgan@talentmatch.dev",
    skills: ["HTML", "CSS", "JavaScript", "Git"],
    experienceLevel: "Entry Level",
    education: "B.S. in Computer Science, UC Berkeley (Class of 2025)",
    experience: "Frontend Engineering Intern @ NextWave Tech",
    reviewStatus: "Interview",
    appliedDate: "2026-11-24T09:15:00",
    note: "100% skill match for Amazon Frontend Intern. Portfolio verified."
  },
  {
    id: "cand-008",
    jobId: "job-013",
    displayName: "Sneha Pillai",
    email: "sneha.p@demo.dev",
    skills: ["HTML", "CSS", "JavaScript"],
    experienceLevel: "Entry Level",
    education: "B.Tech in IT, Delhi Technological University",
    experience: "College web club lead",
    reviewStatus: "Under Review",
    appliedDate: "2026-11-24T09:20:00",
    note: "Strong academic record and coursework."
  },
  {
    id: "cand-009",
    jobId: "job-004",
    displayName: "Karthik Nair",
    email: "karthik.n@demo.dev",
    skills: ["JavaScript", "React", "GraphQL", "CSS"],
    experienceLevel: "Mid Level",
    education: "B.E. in Computer Science, Anna University",
    experience: "3 years React Developer @ CloudScale",
    reviewStatus: "Selected",
    appliedDate: "2026-11-22T10:00:00",
    note: "Outstanding code challenge performance. Formal offer extended."
  },
  {
    id: "cand-010",
    jobId: "job-004",
    displayName: "Siddharth Rao",
    email: "siddharth.r@demo.dev",
    skills: ["JavaScript", "React", "CSS"],
    experienceLevel: "Entry Level",
    education: "B.Tech in CSE, IIIT Hyderabad",
    experience: "Frontend Developer",
    reviewStatus: "Under Review",
    appliedDate: "2026-11-23T14:00:00",
    note: "Good React fundamentals; GraphQL skills developing."
  }
];

// ============ SAMPLE USERS (Admin Panel Management) ============
const SAMPLE_USERS = [
  {
    id: "usr-001",
    name: "Alex Morgan",
    email: "alex.morgan@talentmatch.dev",
    role: "candidate",
    headline: "Aspiring Full-Stack Software Engineer",
    status: "active",
    joinedDate: "2026-10-15"
  },
  {
    id: "usr-002",
    name: "Maya Patel",
    email: "maya.patel@demo.dev",
    role: "candidate",
    headline: "Frontend Engineer | Web Performance",
    status: "active",
    joinedDate: "2026-10-20"
  },
  {
    id: "usr-003",
    name: "Sarah Jenkins",
    email: "sarah.j@google.com",
    role: "recruiter",
    company: "Google",
    headline: "Senior Technical Talent Partner @ Google",
    status: "active",
    joinedDate: "2026-09-01"
  },
  {
    id: "usr-004",
    name: "Vikram Nair",
    email: "vikram.n@microsoft.com",
    role: "recruiter",
    company: "Microsoft",
    headline: "Cloud Engineering Recruiter @ Microsoft",
    status: "active",
    joinedDate: "2026-08-15"
  },
  {
    id: "usr-005",
    name: "David Kim",
    email: "david.kim@stripe.com",
    role: "recruiter",
    company: "Stripe",
    headline: "Technical Talent Lead @ Stripe",
    status: "active",
    joinedDate: "2026-07-20"
  },
  {
    id: "usr-006",
    name: "Admin Root",
    email: "admin@talentmatch.dev",
    role: "admin",
    headline: "Platform Operations & System Administrator",
    status: "active",
    joinedDate: "2026-01-01"
  }
];

// ============ SAMPLE CANDIDATE APPLICATIONS (Application Tracker) ============
const SAMPLE_APPLICATIONS = [
  {
    id: "app-001",
    jobId: "job-001",
    jobTitle: "Senior Frontend Engineer",
    company: "Google",
    location: "Bengaluru",
    salary: "$130,000 - $160,000",
    appliedDate: "2026-11-23T14:30:00",
    status: "Shortlisted",
    matchScore: 85,
    note: "Your profile has been shortlisted by Sarah Jenkins. Technical screening scheduled."
  },
  {
    id: "app-002",
    jobId: "job-004",
    jobTitle: "React Platform Engineer",
    company: "Meta",
    location: "Remote",
    salary: "$140,000 - $175,000",
    appliedDate: "2026-11-22T09:15:00",
    status: "Under Review",
    matchScore: 90,
    note: "Hiring committee is actively reviewing your project portfolio."
  },
  {
    id: "app-003",
    jobId: "job-013",
    jobTitle: "Frontend Engineering Intern",
    company: "Amazon",
    location: "Bengaluru",
    salary: "$3,500/month Stipend",
    appliedDate: "2026-11-20T16:45:00",
    status: "Interview",
    matchScore: 100,
    note: "Interview invitation sent! Check your registered email for schedule options."
  }
];

// ============ DEFAULT CANDIDATE PROFILE ============
const DEFAULT_PROFILE = {
  id: "applicant-001",
  displayName: "Alex Morgan",
  headline: "Aspiring Full-Stack Software Engineer | Passionate about Modern Web & AI",
  about: "Software developer dedicated to creating intuitive, high-performance web applications. Experienced in JavaScript (ES6+), React ecosystem concepts, HTML5/CSS3, and REST API integration with a strong focus on clean code and accessibility.",
  location: "San Francisco, CA & Remote",
  email: "alex.morgan@talentmatch.dev",
  phone: "+1 (555) 234-5678",
  skills: ["HTML", "CSS", "JavaScript", "React", "Git", "REST API", "Node.js", "SQL"],
  topSkills: ["JavaScript", "React", "HTML/CSS"],
  experienceLevel: "Entry Level",
  
  profileViews: 142,
  avatarUrl: "",
  coverUrl: "",
  openToWork: true,
  education: [
    {
      id: "edu-1",
      school: "University of California, Berkeley",
      degree: "B.S. in Computer Science",
      field: "Software Engineering & Computer Systems",
      startYear: "2021",
      endYear: "2025",
      desc: "Coursework in Data Structures & Algorithms, Operating Systems, Database Management, and Web Architecture. Dean's Honor List."
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Frontend Engineering Intern",
      company: "NextWave Tech",
      type: "Internship",
      location: "San Francisco, CA (Remote)",
      startDate: "Jun 2024",
      endDate: "Sep 2024",
      desc: "Engineered reusable, high-performance UI components, optimized Core Web Vitals to achieve 96+ Lighthouse scores, and collaborated with cross-functional product teams."
    },
    {
      id: "exp-2",
      role: "Junior Web Developer",
      company: "Campus Tech Labs",
      type: "Part-time",
      location: "Berkeley, CA",
      startDate: "Jan 2023",
      endDate: "May 2024",
      desc: "Developed student portal interfaces, automated event registration workflows, and maintained responsive layouts across mobile and desktop devices."
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "TalentMatch.dev Career & Matching Platform",
      desc: "Explainable skill-matching engine and career development platform built with pure vanilla JS, accessible HTML5, and modern CSS.",
      techs: ["JavaScript", "HTML5", "CSS3", "localStorage"],
      githubUrl: "https://github.com/alexmorgan/talentmatch",
      liveUrl: "https://talentmatch.dev"
    },
    {
      id: "proj-2",
      title: "CloudTelemetry Real-Time Dashboard",
      desc: "Interactive dashboard providing low-latency metric visualization, alerting, and data graphing.",
      techs: ["React", "JavaScript", "REST API", "CSS"],
      githubUrl: "https://github.com/alexmorgan/cloud-telemetry",
      liveUrl: "https://cloudtelemetry.dev"
    }
  ],
  certifications: [
    {
      id: "cert-1",
      name: "AWS Certified Cloud Practitioner",
      org: "Amazon Web Services (AWS)",
      issueDate: "July 2024",
      credentialUrl: "https://aws.amazon.com/verification"
    },
    {
      id: "cert-2",
      name: "Meta Certified Front-End Developer",
      org: "Meta",
      issueDate: "December 2023",
      credentialUrl: "https://coursera.org/verify/meta-frontend"
    }
  ],
  achievements: [
    {
      id: "ach-1",
      title: "1st Place — Global Web Accessibility Sprint 2025",
      date: "February 2025",
      desc: "Created an automated contrast auditing and screen-reader assistance extension adopted by over 2,000 developers."
    }
  ],
  resume: {
    fileName: "Alex_Morgan_Software_Engineer_Resume.pdf",
    fileSize: "248 KB",
    uploadDate: "2026-11-20",
    dataUrl: ""
  }
};

const STATUSES = ["Applied", "Under Review", "Shortlisted", "Interview", "Selected", "Rejected"];
const LEVELS = ["Entry Level", "Mid Level", "Senior Level", "Lead / Staff"];

// ============ 2. STORAGE (Unified LocalStorage with safe fallbacks) ============
const KEYS = {
  profile: "talentmatch_applicant_v2",
  shortlist: "talentmatch_shortlist_v1",
  candidates: "talentmatch_candidates_v2",
  session: "talentmatch_session_v1",
  jobs: "talentmatch_jobs_v1",
  applications: "talentmatch_applications_v1",
  users: "talentmatch_users_v1",
  savedJobs: "talentmatch_saved_jobs_v1",
  settings: "talentmatch_settings_v1"
};

let profile, shortlist, candidates, session, jobs, applications, users, savedJobs;

function load(key, fallback, isValid) {
  try {
    const raw = localStorage.getItem(key);
    const value = raw ? JSON.parse(raw) : null;
    return value && isValid(value) ? value : structuredClone(fallback);
  } catch (error) {
    return structuredClone(fallback);
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    toast("Could not save your changes in this browser localStorage.", "danger");
  }
}

function loadAll() {
  profile = load(KEYS.profile, DEFAULT_PROFILE, (v) => Array.isArray(v.skills));
  shortlist = load(KEYS.shortlist, ["cand-001", "cand-007"], Array.isArray);
  candidates = load(KEYS.candidates, SAMPLE_CANDIDATES, (v) => Array.isArray(v) && v.length > 0);
  session = load(KEYS.session, { loggedIn: true, name: "Alex Morgan", email: "alex.morgan@talentmatch.dev", role: "candidate", provider: "Developer" }, (v) => typeof v === "object" && v !== null);
  jobs = load(KEYS.jobs, SAMPLE_JOBS, (v) => Array.isArray(v) && v.length > 0);
  applications = load(KEYS.applications, SAMPLE_APPLICATIONS, Array.isArray);
  users = load(KEYS.users, SAMPLE_USERS, Array.isArray);
  savedJobs = load(KEYS.savedJobs, ["job-001", "job-004", "job-013"], Array.isArray);
}

function resetPlatformData() {
  localStorage.removeItem(KEYS.profile);
  localStorage.removeItem(KEYS.shortlist);
  localStorage.removeItem(KEYS.candidates);
  localStorage.removeItem(KEYS.session);
  localStorage.removeItem(KEYS.jobs);
  localStorage.removeItem(KEYS.applications);
  localStorage.removeItem(KEYS.users);
  localStorage.removeItem(KEYS.savedJobs);
  localStorage.removeItem(KEYS.settings);
  loadAll();
  toast("Platform demo data has been successfully reset to factory defaults!", "success");
  router();
}

// ============ UI FILTER & NAVIGATION STATE ============
const ui = {
  role: "candidate", // 'candidate' | 'recruiter' | 'admin'
  mode: "applicant",
  query: "",
  company: "",
  dateFilter: "all",
  customFrom: "",
  customTill: "",
  level: "",
  location: "",
  workplaceType: "all", // 'all' | 'Remote' | 'Hybrid' | 'On-site'
  jobType: "", // '' | 'Full-time' | 'Internship' | 'Contract'
  sort: "score", // 'score' | 'newest' | 'oldest' | 'company-az' | 'company-za'
  cq: "",
  roleId: "",
  profileMode: "edit",
  recruiterTab: "jobs", // 'jobs' | 'candidates' | 'shortlist'
  adminTab: "users", // 'users' | 'jobs' | 'companies' | 'applications' | 'settings'
  statusFilter: "all"
};

// ============ 3. MATCH ENGINE (EXPLAINABLE OVERLAP FORMULA) ============
/**
 * Match Score = (Number of Matched Required Skills / Total Required Skills) × 100
 * Fully transparent, beginner-friendly mathematical overlap calculation.
 */
function calculateMatch(personSkills, requiredSkills) {
  if (!personSkills || !Array.isArray(personSkills)) personSkills = [];
  if (!requiredSkills || !Array.isArray(requiredSkills)) requiredSkills = [];

  const norm = (s) => s.trim().toLowerCase();
  const have = new Set(personSkills.map(norm));
  const seen = new Set();
  const required = requiredSkills.filter((s) => !seen.has(norm(s)) && seen.add(norm(s)));
  const matchedSkills = required.filter((s) => have.has(norm(s)));
  const missingSkills = required.filter((s) => !have.has(norm(s)));
  const score = required.length === 0 ? 0 : Math.round((matchedSkills.length / required.length) * 100);
  return { score, matchedSkills, missingSkills, total: required.length };
}

// ============ 4. HELPERS & FORMATTERS ============
const $ = (selector) => document.querySelector(selector);
const esc = (t) => String(t || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function formatRelativeDate(isoStr) {
  if (!isoStr) return "Recently posted";
  const postDate = new Date(isoStr);
  const now = new Date();
  const diffMs = now - postDate;
  if (isNaN(diffMs)) return "Recently posted";
  const diffSec = Math.floor(diffMs / 1000);
  
  if (diffSec < 60) return "Posted just now";
  if (diffSec < 3600) {
    const mins = Math.max(1, Math.floor(diffSec / 60));
    return `Posted ${mins} ${mins === 1 ? 'minute' : 'minutes'} ago`;
  }
  if (diffSec < 86400) {
    const hours = Math.floor(diffSec / 3600);
    return `Posted ${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  }
  if (diffSec < 172800) {
    return "Posted Yesterday";
  }
  const days = Math.floor(diffSec / 86400);
  if (days < 30) {
    return `Posted ${days} days ago`;
  }
  return `Posted on ${postDate.toLocaleDateString("en-US", { day: 'numeric', month: 'long', year: 'numeric' })}`;
}

function formatExactDate(isoStr) {
  if (!isoStr) return "24 November 2026, 10:30 AM";
  const d = new Date(isoStr);
  if (isNaN(d.getTime())) return isoStr;
  return d.toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

function calcProfileCompletion(user) {
  if (!user) user = profile || DEFAULT_PROFILE;
  let score = 0;
  const missing = [];

  if (user.avatarUrl) score += 10;
  else missing.push("Upload a profile photo (+10%)");

  if (user.headline && user.headline.trim().length > 10) score += 10;
  else missing.push("Add a professional headline (+10%)");

  if (user.about && user.about.trim().length > 30) score += 15;
  else missing.push("Write a detailed About summary (+15%)");

  if (user.education && user.education.length > 0) score += 15;
  else missing.push("Add your education history (+15%)");

  if (user.experience && user.experience.length > 0) score += 15;
  else missing.push("Add work or internship experience (+15%)");

  if (user.skills && user.skills.length >= 3) score += 15;
  else missing.push("Add at least 3 technical skills (+15%)");

  if (user.projects && user.projects.length > 0) score += 10;
  else missing.push("Showcase a project (+10%)");

  if (user.certifications && user.certifications.length > 0) score += 10;
  else missing.push("Add a verified certification (+10%)");

  return { score: Math.min(100, score), missing };
}

function scoreBadge(m) {
  const kind = m.total === 0 ? "zero" : m.score >= 70 ? "high" : m.score >= 40 ? "mid" : "low";
  const label = { zero: "No requirements", high: "Strong match", mid: "Partial match", low: "Low match" }[kind];
  return `<span class="badge rounded-pill badge-score-${kind} px-2.5 py-1 fw-semibold">${m.score}% · ${label}</span>`;
}

function toast(message, type = "success") {
  const c = $("#toast-container");
  if (!c) return;
  const el = document.createElement("div");
  el.className = `toast align-items-center text-bg-${type} border-0 show shadow-lg mb-2`;
  el.setAttribute("role", "alert");
  el.setAttribute("aria-live", "assertive");
  el.setAttribute("aria-atomic", "true");
  el.innerHTML = `<div class="d-flex"><div class="toast-body fw-medium">${esc(message)}</div><button class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button></div>`;
  c.appendChild(el);
  setTimeout(() => el.remove(), 4000);
}


// ============ 5. MODERN PROFESSIONAL HORIZONTAL NAVBAR ============
function renderNavbar(page) {
  const container = $("#navbar-container");
  if (!container) return;

  if (page === "login" || page === "signup") {
    container.innerHTML = "";
    return;
  }

  const currentRole = ui.role || (session && session.role) || "candidate";

  // Build role-specific navigation links
  let navItems = [];
  if (currentRole === "candidate") {
    navItems = [
      { id: "home", label: "Home", icon: "bi-house-door-fill", href: "#/home" },
      { id: "jobs", label: "Jobs", icon: "bi-briefcase-fill", href: "#/jobs" },
      { id: "skill-matching", label: "Skill Match", icon: "bi-cpu-fill", href: "#/skill-matching" },
      { id: "saved", label: "Saved", icon: "bi-bookmark-heart-fill", href: "#/saved", badge: (savedJobs && savedJobs.length) ? String(savedJobs.length) : null },
      { id: "applications", label: "Applied", icon: "bi-send-check-fill", href: "#/applications", badge: (applications && applications.length) ? String(applications.length) : null }
    ];
  } else if (currentRole === "recruiter") {
    navItems = [
      { id: "recruiter", label: "Recruiter Hub", icon: "bi-speedometer2", href: "#/recruiter" },
      { id: "recruiter-jobs", label: "Manage Jobs", icon: "bi-card-checklist", href: "#/recruiter/jobs" },
      { id: "recruiter-candidates", label: "Candidates", icon: "bi-people-fill", href: "#/recruiter/candidates", badge: (candidates && candidates.length) ? String(candidates.length) : null },
      { id: "shortlist", label: "Shortlisted", icon: "bi-star-fill", href: "#/shortlist", badge: (shortlist && shortlist.length) ? String(shortlist.length) : null }
    ];
  } else if (currentRole === "admin") {
    navItems = [
      { id: "admin", label: "Admin Panel", icon: "bi-shield-shaded", href: "#/admin" },
      { id: "admin-users", label: "Users", icon: "bi-person-gear", href: "#/admin/users" },
      { id: "admin-jobs", label: "Platform Jobs", icon: "bi-briefcase", href: "#/admin/jobs" },
      { id: "admin-companies", label: "Companies", icon: "bi-building-gear", href: "#/admin/companies" },
      { id: "admin-settings", label: "Settings", icon: "bi-sliders", href: "#/admin/settings" }
    ];
  }

  // Gracefully format candidate display name so it never renders as single letter
  const rawSessionName = (session && session.name ? session.name.trim() : "");
  const rawProfileName = (profile && profile.displayName ? profile.displayName.trim() : "");
  let userName = rawProfileName.length >= 3 ? rawProfileName : (rawSessionName.length >= 3 ? rawSessionName : "Alex Morgan");
  const userInitial = userName.charAt(0).toUpperCase();
  const userEmail = (session && session.email ? session.email : "alex.morgan@talentmatch.dev");

  const navHtml = `
    <nav class="tm-navbar-wrapper sticky-top" aria-label="Main navigation">
      <div class="container-xl d-flex align-items-center justify-content-between py-2 px-3">
        
        <!-- Left: Brand Logo & Search -->
        <div class="d-flex align-items-center gap-3">
          <a class="d-flex align-items-center gap-2 text-decoration-none" href="${currentRole === 'candidate' ? '#/home' : currentRole === 'recruiter' ? '#/recruiter' : '#/admin'}">
            <span class="tm-brand-logo-icon">
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="2.5" stroke-dasharray="3 2"/>
                <circle cx="16" cy="16" r="7.5" fill="currentColor"/>
                <circle cx="16" cy="16" r="3" fill="#FFFFFF"/>
              </svg>
            </span>
            <div class="d-flex flex-column">
              <span class="fw-bold tracking-tight lh-1 text-dark fs-5">TalentMatch<span class="text-primary">.dev</span></span>
              <span class="text-muted fw-semibold d-none d-sm-inline" style="font-size: 0.65rem; letter-spacing: -0.2px;">One Platform. Every Career Opportunity.</span>
            </div>
          </a>

          <!-- Global Search (Clean, expandable) -->
          <div class="tm-nav-search-bar d-none d-md-flex align-items-center ms-2">
            <i class="bi bi-search tm-search-icon"></i>
            <input type="text" id="global-search-input" class="form-control form-control-sm border-0 bg-transparent shadow-none" placeholder="Search tech jobs, skills, companies..." value="${esc(ui.query || "")}">
            ${ui.query ? `<button class="btn btn-link btn-sm p-0 text-muted" id="clear-global-search" title="Clear search"><i class="bi bi-x-circle-fill"></i></button>` : ""}
          </div>
        </div>

        <!-- Center / Right: Navigation Links & User Menu in a Single Horizontal Row -->
        <div class="d-flex align-items-center gap-1 gap-md-2 ms-auto">
          
          <!-- Horizontal Nav Links -->
          <ul class="nav tm-navbar-links-row align-items-center m-0 p-0">
            ${navItems.map(item => {
              const isActive = (page === item.id) || (page === "recruiter" && item.id.startsWith("recruiter")) || (page === "admin" && item.id.startsWith("admin"));
              return `
                <li class="nav-item">
                  <a class="nav-link tm-nav-item-link ${isActive ? "active" : ""}" href="${item.href}" id="nav-link-${item.id}">
                    <span class="position-relative d-inline-block tm-nav-icon-box">
                      <i class="bi ${item.icon}"></i>
                      ${item.badge ? `<span class="tm-nav-badge-pill">${item.badge}</span>` : ""}
                    </span>
                    <span class="tm-nav-label">${item.label}</span>
                  </a>
                </li>
              `;
            }).join("")}

            ${currentRole === 'recruiter' ? `
              <li class="nav-item ms-1 d-none d-sm-block">
                <button type="button" class="btn btn-sm btn-primary rounded-pill px-3 fw-semibold shadow-sm" data-action="open-post-job-modal">
                  <i class="bi bi-plus-circle me-1"></i> Post Job
                </button>
              </li>
            ` : ""}
          </ul>

          <!-- User Menu & Auth Actions -->
          <div class="d-flex align-items-center ms-2 ms-lg-3 ps-2 ps-lg-3 border-start">
            ${(session && session.loggedIn) ? `
              <!-- User Profile Dropdown -->
              <div class="dropdown">
                <button class="btn p-0 border-0 shadow-none d-flex align-items-center gap-2" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="tm-profile-dropdown-btn">
                  <div class="tm-nav-avatar">
                    ${profile && profile.avatarUrl ? `<img src="${profile.avatarUrl}" alt="${esc(userName)}" class="w-100 h-100 rounded-circle object-fit-cover">` : userInitial}
                  </div>
                  <div class="d-none d-lg-flex flex-column text-start lh-1">
                    <span class="fw-semibold text-dark small text-truncate" style="max-width: 105px;">${esc(userName)}</span>
                    <span class="text-muted" style="font-size: 0.68rem;">${currentRole === 'admin' ? 'Admin' : currentRole === 'recruiter' ? 'Recruiter' : 'Candidate'}</span>
                  </div>
                  <i class="bi bi-chevron-down text-muted" style="font-size: 0.72rem;"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end shadow-lg border-0 rounded-4 p-2 tm-profile-dropdown" aria-labelledby="tm-profile-dropdown-btn" style="min-width: 220px;">
                  <li class="px-3 py-2 border-bottom mb-1">
                    <div class="fw-bold text-dark lh-sm text-truncate">${esc(userName)}</div>
                    <div class="text-muted small text-truncate" style="font-size:0.75rem;">${esc(userEmail)}</div>
                    <span class="badge ${currentRole === 'admin' ? 'bg-danger' : currentRole === 'recruiter' ? 'bg-info text-white' : 'bg-primary-subtle text-primary border border-primary'} rounded-pill mt-1.5" style="font-size: 0.65rem;">
                      ${currentRole.toUpperCase()}
                    </span>
                  </li>
                  <li>
                    <a class="dropdown-item py-2 rounded-2" href="#/profile">
                      <i class="bi bi-person-circle me-2 text-primary"></i> View My Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item py-2 rounded-2" href="#/settings">
                      <i class="bi bi-gear me-2 text-secondary"></i> Preferences &amp; Settings
                    </a>
                  </li>
                  <li><hr class="dropdown-divider my-1"></li>
                  <li>
                    <a class="dropdown-item py-2 text-danger rounded-2" href="javascript:void(0)" data-action="logout">
                      <i class="bi bi-box-arrow-right me-2"></i> Log out
                    </a>
                  </li>
                </ul>
              </div>
            ` : `
              <a href="#/login" class="btn btn-sm btn-outline-primary rounded-pill px-3 fw-semibold">Sign In</a>
              <a href="#/signup" class="btn btn-sm btn-primary rounded-pill px-3 fw-semibold shadow-sm ms-1.5">Sign Up</a>
            `}
          </div>

        </div>

      </div>
    </nav>
  `;

  container.innerHTML = navHtml;
}


// ============ 6. CAREER & OPPORTUNITY DASHBOARD (viewHome) ============
function viewHome() {
  const user = profile || DEFAULT_PROFILE;
  const compMetrics = calcProfileCompletion(user);

  // Gracefully format candidate name so it never renders as single letter
  const rawSessionName = (session && session.name ? session.name.trim() : "");
  const rawProfileName = (user && user.displayName ? user.displayName.trim() : "");
  const candidateName = rawProfileName.length >= 3 ? rawProfileName : (rawSessionName.length >= 3 ? rawSessionName : "Alex Morgan");

  // Dynamically calculate recommended jobs based on candidate skills
  const allRanked = jobs.map(j => {
    const match = calculateMatch(user.skills, j.requiredSkills);
    return { job: j, match };
  }).sort((a, b) => b.match.score - a.match.score);

  // Show top 3 spacious, clean recommendations
  const topRecommendations = allRanked.slice(0, 3);

  return `
    <div class="container-xl py-4">
      <!-- SPACIOUS, LIGHT & ELEGANT WELCOME HERO -->
      <div class="card tm-card border-0 p-4 p-md-5 mb-4 shadow-sm bg-white position-relative overflow-hidden">
        <div class="position-absolute end-0 top-0 opacity-10 pe-none d-none d-lg-block" style="transform: translate(10%, -15%);">
          <svg width="260" height="260" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="45" stroke="#2563EB" stroke-width="2" stroke-dasharray="6 3"/>
            <circle cx="50" cy="50" r="30" stroke="#3B82F6" stroke-width="3"/>
            <circle cx="50" cy="50" r="14" fill="#2563EB"/>
          </svg>
        </div>

        <div class="position-relative z-1" style="max-width: 760px;">
          <div class="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-primary-subtle text-primary border border-primary-subtle small fw-semibold mb-3">
            <i class="bi bi-stars"></i>
            <span>TalentMatch.dev – One Platform. Every Career Opportunity.</span>
          </div>
          <h1 class="display-6 fw-bold text-dark mb-2">Welcome back, ${esc(candidateName)}!</h1>
          <p class="text-muted fs-6 mb-4" style="line-height: 1.65;">
            Explore verified engineering jobs and transparent skill overlap calculations. Upload your resume below to apply to opportunities in one click.
          </p>
          <div class="d-flex flex-wrap gap-2.5">
            <a href="#/jobs" class="btn btn-primary rounded-pill px-4 py-2 fw-semibold shadow-sm">
              <i class="bi bi-search me-1.5"></i> Browse Tech Jobs
            </a>
            <a href="#/skill-matching" class="btn btn-outline-secondary rounded-pill px-3 py-2 fw-semibold">
              <i class="bi bi-cpu me-1.5"></i> AI Skill Match Engine
            </a>
          </div>
        </div>
      </div>

      <!-- SPACIOUS 2-COLUMN DASHBOARD (8 Cols Main + 4 Cols Sidebar) -->
      <div class="row g-4">
        <!-- ================= MAIN COLUMN (8 COLS - AIRY & READABLE) ================= -->
        <div class="col-lg-8">
          <!-- RESUME UPLOAD & MANAGEMENT CENTER (PROMINENT FOR ALL) -->
          <div class="card tm-card border-0 shadow-sm p-4 mb-4 bg-white" id="home-resume-card">
            <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
              <div class="d-flex align-items-center gap-2.5">
                <div class="rounded-3 bg-danger-subtle text-danger d-inline-flex align-items-center justify-content-center" style="width: 42px; height: 42px;">
                  <i class="bi bi-file-earmark-pdf-fill fs-4"></i>
                </div>
                <div>
                  <h2 class="h5 fw-bold mb-0 text-dark">My Resume / CV</h2>
                  <span class="text-muted small">Keep your verified resume uploaded for instant 1-click job applications</span>
                </div>
              </div>
              <span class="badge ${user.resume && user.resume.fileName ? 'bg-success-subtle text-success border border-success' : 'bg-warning-subtle text-warning-emphasis border border-warning'} rounded-pill px-3 py-1.5 fw-semibold">
                ${user.resume && user.resume.fileName ? '✓ Ready to Apply' : 'Action Needed'}
              </span>
            </div>

            ${user.resume && user.resume.fileName ? `
              <div class="p-3.5 rounded-3 bg-light border d-flex justify-content-between align-items-center flex-wrap gap-3">
                <div class="d-flex align-items-center gap-3">
                  <i class="bi bi-file-earmark-text-fill text-danger fs-2"></i>
                  <div>
                    <strong class="text-dark d-block fs-6">${esc(user.resume.fileName)}</strong>
                    <span class="text-muted small">${esc(user.resume.fileSize || '248 KB')} &middot; Uploaded on ${esc(user.resume.uploadDate || '2026-11-20')}</span>
                  </div>
                </div>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                  <button type="button" class="btn btn-outline-primary btn-sm rounded-pill px-3 fw-semibold" onclick="toast('Opening resume preview...', 'info')">
                    <i class="bi bi-download me-1"></i> Preview / Download
                  </button>
                  <label class="btn btn-outline-secondary btn-sm rounded-pill px-3 fw-semibold mb-0 cursor-pointer">
                    <i class="bi bi-arrow-repeat me-1"></i> Replace File
                    <input type="file" id="resume-file-input" class="d-none" accept=".pdf,.docx,.txt">
                  </label>
                  <button type="button" class="btn btn-outline-danger btn-sm rounded-pill p-1.5 px-2" data-action="delete-resume" title="Remove Resume">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            ` : `
              <div class="tm-resume-dropzone cursor-pointer" data-action="trigger-resume-upload">
                <input type="file" id="tm-resume-file-input" class="d-none" accept=".pdf,.docx,.txt">
                <i class="bi bi-cloud-arrow-up text-primary fs-1 d-block mb-2"></i>
                <h3 class="h6 fw-bold text-dark mb-1">Upload Your Resume Document</h3>
                <p class="text-muted small mb-3">Drag &amp; drop your PDF or DOCX file here, or click to browse (Max 3MB)</p>
                <button type="button" class="btn btn-primary btn-sm rounded-pill px-4 fw-semibold shadow-sm">
                  <i class="bi bi-upload me-1.5"></i> Select Resume File
                </button>
              </div>
            `}
          </div>

          <!-- TOP CAREER RECOMMENDATIONS (SPACIOUS & AIRY) -->
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h2 class="h5 fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                <i class="bi bi-stars text-primary"></i> Recommended For You &ndash; Top Matches
              </h2>
              <span class="text-muted small">Calculated from your technical skills with transparent formula</span>
            </div>
            <a href="#/jobs" class="btn btn-sm btn-link text-decoration-none fw-semibold">
              Explore All (${jobs.length}) <i class="bi bi-arrow-right"></i>
            </a>
          </div>

          <!-- Opportunities List (Spacious & Clean) -->
          <div class="d-flex flex-column gap-3 mb-4">
            ${topRecommendations.map(({ job: j, match: m }) => {
              const isSaved = savedJobs && savedJobs.includes(j.id);
              const isApplied = applications && applications.some(a => a.jobId === j.id);

              return `
                <div class="card tm-card border-0 shadow-sm p-4 bg-white hover-shadow transition-all">
                  <div class="d-flex justify-content-between align-items-start gap-3 flex-wrap mb-3">
                    <div class="d-flex align-items-start gap-3">
                      ${companyBadge(j.company, 46)}
                      <div>
                        <h3 class="h5 fw-bold mb-1 text-dark">
                          <a href="#/jobs/${j.id}" class="text-dark text-decoration-none hover-text-primary">${esc(j.title)}</a>
                        </h3>
                        <div class="text-muted small d-flex align-items-center gap-2 flex-wrap">
                          <span class="fw-semibold text-primary cursor-pointer" data-action="view-company-modal" data-company="${esc(j.company)}">${esc(j.company)}</span>
                          <span>&middot;</span>
                          <span><i class="bi bi-geo-alt"></i> ${esc(j.location)}</span>
                          <span class="badge bg-light text-secondary border rounded-pill">${esc(j.workplaceType || 'Hybrid')}</span>
                          <span class="badge bg-primary-subtle text-primary border rounded-pill">${esc(j.jobType)}</span>
                        </div>
                      </div>
                    </div>
                    <button type="button" class="btn btn-sm ${isSaved ? 'text-warning' : 'text-muted'} p-1.5" data-action="toggle-save-job" data-job-id="${j.id}" title="${isSaved ? 'Remove from Saved' : 'Save Job'}">
                      <i class="bi ${isSaved ? 'bi-bookmark-fill fs-5' : 'bi-bookmark fs-5'}"></i>
                    </button>
                  </div>

                  <p class="text-muted small mb-3 line-clamp-2" style="line-height: 1.6;">
                    ${esc(j.description)}
                  </p>

                  <div class="d-flex flex-wrap gap-1.5 mb-3.5">
                    ${j.requiredSkills.map(sk => {
                      const hasSkill = user.skills && user.skills.some(s => s.toLowerCase() === sk.toLowerCase());
                      return `
                        <span class="badge ${hasSkill ? 'bg-success-subtle text-success border border-success' : 'bg-light text-secondary border'} rounded-pill px-2.5 py-1" style="font-size:0.75rem;">
                          ${hasSkill ? '✓ ' : ''}${esc(sk)}
                        </span>
                      `;
                    }).join("")}
                  </div>

                  <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 pt-3 border-top">
                    <div class="d-flex align-items-center gap-3">
                      <span class="fw-bold text-dark small">${esc(j.salary)}</span>
                      ${scoreBadge(m)}
                    </div>
                    <div class="d-flex gap-2">
                      <a href="#/jobs/${j.id}" class="btn btn-outline-secondary btn-sm rounded-pill px-3 fw-semibold">
                        View Role
                      </a>
                      ${isApplied ? `
                        <button type="button" class="btn btn-success btn-sm rounded-pill px-3.5 fw-semibold" disabled>
                          <i class="bi bi-check2-circle me-1"></i> Applied
                        </button>
                      ` : `
                        <button type="button" class="btn btn-primary btn-sm rounded-pill px-3.5 fw-semibold shadow-sm" data-action="open-apply-modal" data-job-id="${j.id}">
                          Quick Apply
                        </button>
                      `}
                    </div>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <!-- ================= SIDEBAR (4 COLS - UNCLUTTERED) ================= -->
        <div class="col-lg-4">
          <!-- Candidate Readiness & Profile Strength -->
          <div class="card tm-card border-0 shadow-sm p-4 mb-4 bg-white">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h3 class="h6 fw-bold text-dark mb-0">Candidate Profile Strength</h3>
              <span class="badge bg-primary rounded-pill">${compMetrics.score}%</span>
            </div>
            <div class="progress rounded-pill mb-3" style="height: 8px;">
              <div class="progress-bar bg-primary rounded-pill" style="width: ${compMetrics.score}%;"></div>
            </div>
            <p class="text-muted small mb-3" style="line-height: 1.55;">
              ${compMetrics.missing.length > 0 ? `Tip: ${compMetrics.missing[0]}` : 'Your profile is fully completed and ready for recruiters!'}
            </p>
            <a href="#/profile" class="btn btn-outline-primary btn-sm rounded-pill w-100 fw-semibold">
              <i class="bi bi-person-gear me-1"></i> Edit Profile &amp; Skills
            </a>
          </div>

          <!-- Active Applications Status Card -->
          <div class="card tm-card border-0 shadow-sm p-4 mb-4 bg-white">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h3 class="h6 fw-bold text-dark mb-0 d-flex align-items-center gap-1.5">
                <i class="bi bi-send-check text-primary"></i> Application Status
              </h3>
              <a href="#/applications" class="small text-decoration-none fw-semibold">View All</a>
            </div>

            ${applications && applications.length > 0 ? `
              <div class="d-flex flex-column gap-2.5">
                ${applications.slice(0, 3).map(app => `
                  <div class="p-2.5 rounded-3 bg-light border-start border-3 ${app.status === 'Shortlisted' ? 'border-warning' : app.status === 'Interview' ? 'border-success' : 'border-primary'}">
                    <div class="d-flex justify-content-between align-items-center">
                      <strong class="text-dark small text-truncate" style="max-width: 150px;">${esc(app.jobTitle)}</strong>
                      <span class="badge ${app.status === 'Shortlisted' ? 'bg-warning-subtle text-warning-emphasis' : app.status === 'Interview' ? 'bg-success-subtle text-success' : 'bg-primary-subtle text-primary'} rounded-pill" style="font-size:0.68rem;">
                        ${esc(app.status)}
                      </span>
                    </div>
                    <div class="text-muted" style="font-size:0.75rem;">${esc(app.company)} &middot; ${formatRelativeDate(app.appliedDate)}</div>
                  </div>
                `).join("")}
              </div>
            ` : `
              <p class="text-muted small mb-0">No active applications. Apply to roles to track them here.</p>
            `}
          </div>

          <!-- Top Hiring Employers Spotlight -->
          <div class="card tm-card border-0 shadow-sm p-4 mb-4 bg-white">
            <h3 class="h6 fw-bold text-dark mb-3 d-flex align-items-center gap-2">
              <i class="bi bi-building-check text-info"></i> Hiring Tech Companies
            </h3>
            <div class="d-flex flex-column gap-2">
              ${["Google", "Microsoft", "Meta", "Amazon", "Apple", "Stripe"].map(cName => {
                const count = jobs.filter(j => j.company.toLowerCase() === cName.toLowerCase()).length;
                return `
                  <div class="d-flex justify-content-between align-items-center py-1.5 border-bottom">
                    <div class="d-flex align-items-center gap-2.5 cursor-pointer" data-action="view-company-modal" data-company="${cName}">
                      ${companyBadge(cName, 26)}
                      <span class="text-dark small fw-semibold">${cName}</span>
                    </div>
                    <button type="button" class="btn btn-outline-secondary btn-sm py-0.5 px-2.5 rounded-pill small" data-action="view-company-modal" data-company="${cName}" style="font-size:0.75rem;">
                      ${count} ${count === 1 ? 'role' : 'roles'}
                    </button>
                  </div>
                `;
              }).join("")}
            </div>
          </div>

          <!-- Need to Hire Banner -->
          <div class="card tm-card border-0 shadow-sm p-4 bg-primary-subtle border-primary">
            <h4 class="h6 fw-bold text-dark mb-1 d-flex align-items-center gap-1.5">
              <i class="bi bi-building text-primary"></i> Employer / Recruiter?
            </h4>
            <p class="text-muted small mb-3" style="line-height: 1.55;">
              Post verified developer roles, review candidate skill matches, and shortlist applicants.
            </p>
            <button type="button" class="btn btn-primary btn-sm rounded-pill w-100 fw-semibold" data-action="switch-role" data-role="recruiter">
              Open Recruiter Hub
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}



// ============ 7. PHASE 3: JOBS & INTERNSHIPS PORTAL (NEAT & SPACIOUS) ============

let jobsDisplayLimit = 6;

function filteredJobs() {
  const q = (ui.query || "").trim().toLowerCase();
  const comp = (ui.company || "").trim().toLowerCase();
  const now = new Date();

  return jobs
    .filter((j) => {
      // 1. Keyword search
      const matchesQuery = !q || [j.title, j.company, ...(j.requiredSkills || []), j.description || ""].join(" ").toLowerCase().includes(q);
      
      // 2. Company filter
      const matchesCompany = !comp || j.company.toLowerCase().includes(comp);
      
      // 3. Experience level filter
      const matchesLevel = !ui.level || j.experienceLevel === ui.level;
      
      // 4. Location filter
      const matchesLocation = !ui.location || j.location.toLowerCase().includes(ui.location.toLowerCase());

      // 5. Workplace type filter
      const matchesWorkplace = !ui.workplaceType || ui.workplaceType === "all" || (j.workplaceType && j.workplaceType.toLowerCase() === ui.workplaceType.toLowerCase());

      // 6. Job type filter
      const matchesType = !ui.jobType || j.jobType === ui.jobType;

      // 7. Date Posted filter
      let matchesDate = true;
      if (ui.dateFilter && ui.dateFilter !== "all" && j.postedDate) {
        const postTime = new Date(j.postedDate);
        const diffMs = now - postTime;
        const diffHours = diffMs / (1000 * 60 * 60);

        if (ui.dateFilter === "1h") matchesDate = diffHours <= 1;
        else if (ui.dateFilter === "24h") matchesDate = diffHours <= 24;
        else if (ui.dateFilter === "3d") matchesDate = diffHours <= 72;
        else if (ui.dateFilter === "7d") matchesDate = diffHours <= 168;
        else if (ui.dateFilter === "15d") matchesDate = diffHours <= 360;
        else if (ui.dateFilter === "30d") matchesDate = diffHours <= 720;
        else if (ui.dateFilter === "custom") {
          if (ui.customFrom) matchesDate = matchesDate && postTime >= new Date(ui.customFrom);
          if (ui.customTill) {
            const tillDate = new Date(ui.customTill);
            tillDate.setHours(23, 59, 59, 999);
            matchesDate = matchesDate && postTime <= tillDate;
          }
        }
      }

      return matchesQuery && matchesCompany && matchesLevel && matchesLocation && matchesWorkplace && matchesType && matchesDate;
    })
    .map((job) => ({ job, m: calculateMatch(profile.skills, job.requiredSkills) }))
    .sort((a, b) => {
      if (ui.sort === "newest") return new Date(b.job.postedDate || 0) - new Date(a.job.postedDate || 0);
      if (ui.sort === "oldest") return new Date(a.job.postedDate || 0) - new Date(b.job.postedDate || 0);
      if (ui.sort === "company-az") return a.job.company.localeCompare(b.job.company);
      if (ui.sort === "company-za") return b.job.company.localeCompare(a.job.company);
      return b.m.score - a.m.score;
    });
}

function jobCard(item) {
  const { job, m } = item;
  const isSaved = savedJobs && savedJobs.includes(job.id);
  const isApplied = applications && applications.some(a => a.jobId === job.id);
  const relativeDate = formatRelativeDate(job.postedDate);
  const exactDate = formatExactDate(job.postedDate);

  return `
    <article class="card tm-card mb-3 p-4 position-relative bg-white shadow-sm hover-shadow transition-all" id="job-card-${job.id}" aria-labelledby="job-title-${job.id}">
      <div class="d-flex justify-content-between align-items-start gap-3 mb-3">
        <div class="d-flex align-items-center gap-3">
          ${companyBadge(job.company, 44)}
          <div>
            <h3 class="h5 mb-1 fw-bold" id="job-title-${job.id}">
              <a href="#/jobs/${job.id}" class="text-dark text-decoration-none hover-text-primary">${esc(job.title)}</a>
            </h3>
            <div class="text-muted small d-flex align-items-center gap-2 flex-wrap">
              <span class="text-primary fw-semibold cursor-pointer" data-action="view-company-modal" data-company="${esc(job.company)}">
                ${esc(job.company)}
              </span>
              <span>&middot;</span>
              <span><i class="bi bi-geo-alt"></i> ${esc(job.location)}</span>
              <span class="badge bg-light text-secondary border rounded-pill">${esc(job.workplaceType || "Hybrid")}</span>
              <span class="badge bg-primary-subtle text-primary border rounded-pill">${esc(job.jobType)}</span>
            </div>
          </div>
        </div>

        <button type="button" class="btn btn-sm ${isSaved ? 'text-warning' : 'text-muted'} p-1.5" data-action="toggle-save-job" data-job-id="${job.id}" title="${isSaved ? 'Remove from Saved' : 'Save Job'}">
          <i class="bi ${isSaved ? 'bi-bookmark-fill fs-5' : 'bi-bookmark fs-5'}"></i>
        </button>
      </div>

      <p class="text-muted small mb-3" style="line-height: 1.6;">${esc(job.description)}</p>

      <!-- Skills breakdown pills -->
      <div class="d-flex flex-wrap gap-1.5 mb-3">
        ${job.requiredSkills.map(s => {
          const hasIt = profile.skills && profile.skills.map(x => x.toLowerCase()).includes(s.toLowerCase());
          return `<span class="badge ${hasIt ? 'bg-success-subtle text-success border border-success' : 'bg-light text-muted border'} rounded-pill px-2.5 py-1" style="font-size:0.75rem;">
            ${hasIt ? '✓ ' : ''}${esc(s)}
          </span>`;
        }).join("")}
      </div>

      <div class="d-flex justify-content-between align-items-center pt-3 border-top flex-wrap gap-2">
        <div class="d-flex align-items-center gap-2 flex-wrap">
          ${scoreBadge(m)}
          <span class="text-muted small"><i class="bi bi-cash-stack"></i> ${esc(job.salary)}</span>
          <span class="badge bg-light text-muted border rounded-pill small" title="${esc(exactDate)}">
            <i class="bi bi-clock me-1"></i>${esc(relativeDate)}
          </span>
        </div>
        <div class="d-flex gap-2">
          <a href="#/jobs/${job.id}" class="btn btn-outline-primary btn-sm rounded-pill px-3.5 fw-semibold">
            Details
          </a>
          ${isApplied ? `
            <a href="#/applications" class="btn btn-success btn-sm rounded-pill px-3.5 fw-semibold">
              <i class="bi bi-check2"></i> Applied
            </a>
          ` : `
            <button type="button" class="btn btn-primary btn-sm rounded-pill px-4 fw-semibold shadow-sm" data-action="open-apply-modal" data-job-id="${job.id}">
              Apply Now
            </button>
          `}
        </div>
      </div>
    </article>
  `;
}

function renderActiveFilterChips() {
  const chips = [];
  if (ui.query) chips.push({ label: `Search: "${ui.query}"`, key: "query" });
  if (ui.company) chips.push({ label: `Company: ${ui.company}`, key: "company" });
  if (ui.workplaceType && ui.workplaceType !== "all") chips.push({ label: `Workplace: ${ui.workplaceType}`, key: "workplaceType" });
  if (ui.jobType) chips.push({ label: `Type: ${ui.jobType}`, key: "jobType" });
  if (ui.level) chips.push({ label: `Level: ${ui.level}`, key: "level" });
  if (ui.location) chips.push({ label: `Location: ${ui.location}`, key: "location" });
  if (ui.dateFilter && ui.dateFilter !== "all") {
    const dateLabels = {
      "1h": "Last 1 Hour",
      "24h": "Last 24 Hours",
      "3d": "Last 3 Days",
      "7d": "Last 7 Days",
      "15d": "Last 15 Days",
      "30d": "Last 30 Days",
      "custom": `Range: ${ui.customFrom || 'Start'} to ${ui.customTill || 'End'}`
    };
    chips.push({ label: `Date: ${dateLabels[ui.dateFilter] || ui.dateFilter}`, key: "dateFilter" });
  }

  if (chips.length === 0) return "";

  return `
    <div class="d-flex flex-wrap align-items-center gap-2 mb-3 p-2.5 rounded-3 bg-light border">
      <span class="small fw-semibold text-muted me-1"><i class="bi bi-funnel-fill"></i> Active Filters:</span>
      ${chips.map(c => `
        <span class="tm-filter-chip">
          ${esc(c.label)}
          <button type="button" class="btn-close p-0 ms-1.5" style="font-size:0.6rem;" data-action="remove-filter-chip" data-key="${c.key}" aria-label="Remove filter"></button>
        </span>
      `).join("")}
      <button type="button" class="btn btn-link btn-sm p-0 ms-auto text-danger fw-semibold text-decoration-none small" data-action="clear-all-filters">
        Clear All
      </button>
    </div>
  `;
}

function updateJobList() {
  const listEl = $("#jobs-list");
  const countEl = $("#matching-jobs-count");
  const chipsEl = $("#active-filter-chips-container");
  const paginationEl = $("#jobs-pagination-controls");
  if (!listEl) return;

  const results = filteredJobs();
  if (countEl) countEl.textContent = results.length;
  if (chipsEl) chipsEl.innerHTML = renderActiveFilterChips();

  if (results.length === 0) {
    listEl.innerHTML = `
      <div class="text-center py-5 bg-white rounded-4 border p-4 shadow-sm">
        <i class="bi bi-search display-5 text-muted mb-3 d-block"></i>
        <h3 class="h5 fw-bold text-dark mb-1">No Matching Opportunities Found</h3>
        <p class="text-muted small mb-3" style="max-width: 420px; margin: 0 auto; line-height:1.6;">
          We couldn't find any openings matching your search criteria. Try clearing some filters or searching for a different skill or company.
        </p>
        <button type="button" class="btn btn-primary btn-sm rounded-pill px-4 fw-semibold" data-action="clear-all-filters">
          Reset All Filters
        </button>
      </div>
    `;
    if (paginationEl) paginationEl.innerHTML = "";
    return;
  }

  // Display limited subset to keep page neat, clean, and fast to read
  const visibleSubset = results.slice(0, jobsDisplayLimit);
  listEl.innerHTML = visibleSubset.map(jobCard).join("");

  // Clean Load More / Pagination controller
  if (paginationEl) {
    if (results.length > jobsDisplayLimit) {
      paginationEl.innerHTML = `
        <div class="text-center py-3">
          <p class="text-muted small mb-2">Showing <strong>${visibleSubset.length}</strong> of <strong>${results.length}</strong> verified opportunities</p>
          <button type="button" class="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold" id="load-more-jobs-btn">
            Load More Opportunities (${results.length - visibleSubset.length} remaining)
          </button>
        </div>
      `;
    } else {
      paginationEl.innerHTML = `
        <div class="text-center py-3">
          <span class="text-muted small">All <strong>${results.length}</strong> matching opportunities displayed.</span>
        </div>
      `;
    }
  }
}

function viewJobs() {
  const companyList = Object.keys(COMPANY_PROFILES);

  return `
    <div class="container-xl py-4">
      <!-- Title & Clean Header -->
      <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <div>
          <h1 class="h3 fw-bold text-dark mb-1 d-flex align-items-center gap-2">
            <i class="bi bi-briefcase-fill text-primary"></i> Verified Tech Opportunities
          </h1>
          <p class="text-muted small mb-0">Search and discover engineering jobs, cloud roles, and developer positions.</p>
        </div>
        <div class="d-flex align-items-center gap-2">
          <span class="badge bg-primary-subtle text-primary border rounded-pill px-3 py-1.5 fw-semibold small">
            <i class="bi bi-patch-check-fill me-1"></i> Verified Openings
          </span>
          <button type="button" class="btn btn-outline-secondary btn-sm rounded-pill px-3" data-action="toggle-advanced-filters">
            <i class="bi bi-sliders me-1"></i> Filter Options
          </button>
        </div>
      </div>

      <!-- STREAMLINED, NEAT & CLEAN SEARCH BAR -->
      <div class="card tm-card border-0 shadow-sm p-4 mb-4 bg-white">
        <!-- Main Search Inputs -->
        <div class="row g-3 align-items-center mb-3">
          <div class="col-md-7">
            <div class="input-group input-group-lg">
              <span class="input-group-text bg-white border-end-0 text-muted"><i class="bi bi-search"></i></span>
              <input type="text" id="job-search-input" class="form-control border-start-0 fs-6" placeholder="Job title, technical skills (React, Node, TypeScript)..." value="${esc(ui.query)}">
            </div>
          </div>
          <div class="col-md-5">
            <div class="input-group input-group-lg">
              <span class="input-group-text bg-white border-end-0 text-muted"><i class="bi bi-building"></i></span>
              <input type="text" id="company-search-input" class="form-control border-start-0 fs-6" placeholder="Search company (Google, Meta)..." list="company-suggestions" value="${esc(ui.company)}">
              <datalist id="company-suggestions">
                ${companyList.map(c => `<option value="${c}">${c} (${COMPANY_PROFILES[c].industry})</option>`).join("")}
              </datalist>
            </div>
          </div>
        </div>

        <!-- Clean Quick Filter Pills (Clickable & Breathable) -->
        <div class="d-flex flex-wrap align-items-center gap-2 pt-2 border-top">
          <span class="text-muted small fw-semibold me-1">Quick Filters:</span>
          <button type="button" class="btn btn-sm rounded-pill px-3 ${(!ui.workplaceType || ui.workplaceType === 'all') ? 'btn-primary' : 'btn-outline-secondary'}" data-action="quick-filter-workplace" data-val="all">All Modes</button>
          <button type="button" class="btn btn-sm rounded-pill px-3 ${ui.workplaceType === 'Remote' ? 'btn-primary' : 'btn-outline-secondary'}" data-action="quick-filter-workplace" data-val="Remote"><i class="bi bi-laptop me-1"></i>Remote</button>
          <button type="button" class="btn btn-sm rounded-pill px-3 ${ui.workplaceType === 'Hybrid' ? 'btn-primary' : 'btn-outline-secondary'}" data-action="quick-filter-workplace" data-val="Hybrid">Hybrid</button>
          <button type="button" class="btn btn-sm rounded-pill px-3 ${ui.workplaceType === 'On-site' ? 'btn-primary' : 'btn-outline-secondary'}" data-action="quick-filter-workplace" data-val="On-site">On-site</button>

          <span class="text-muted mx-1">&middot;</span>

          <button type="button" class="btn btn-sm rounded-pill px-3 ${(!ui.jobType) ? 'btn-primary' : 'btn-outline-secondary'}" data-action="quick-filter-type" data-val="">All Types</button>
          <button type="button" class="btn btn-sm rounded-pill px-3 ${ui.jobType === 'Full-time' ? 'btn-primary' : 'btn-outline-secondary'}" data-action="quick-filter-type" data-val="Full-time">Full-time</button>
          <button type="button" class="btn btn-sm rounded-pill px-3 ${ui.jobType === 'Contract' ? 'btn-primary' : 'btn-outline-secondary'}" data-action="quick-filter-type" data-val="Contract">Contract</button>
        </div>

        <!-- Expandable Advanced Filters Box (Keeps screen neat unless opened) -->
        <div id="advanced-filters-panel" class="mt-3 pt-3 border-top d-none">
          <div class="row g-3">
            <div class="col-md-4">
              <label class="form-label small fw-semibold text-muted">Experience Level</label>
              <select class="form-select form-select-sm" id="level-filter-select">
                <option value="" ${!ui.level ? 'selected' : ''}>All Experience Levels</option>
                                <option value="Entry Level" ${ui.level === 'Entry Level' ? 'selected' : ''}>Entry Level</option>
                <option value="Mid Level" ${ui.level === 'Mid Level' ? 'selected' : ''}>Mid Level</option>
                <option value="Senior Level" ${ui.level === 'Senior Level' ? 'selected' : ''}>Senior Level</option>
              </select>
            </div>
            <div class="col-md-4">
              <label class="form-label small fw-semibold text-muted">Date Posted</label>
              <select class="form-select form-select-sm" id="date-filter-select">
                <option value="all" ${ui.dateFilter === 'all' ? 'selected' : ''}>Any Time</option>
                <option value="1h" ${ui.dateFilter === '1h' ? 'selected' : ''}>Last 1 Hour</option>
                <option value="24h" ${ui.dateFilter === '24h' ? 'selected' : ''}>Last 24 Hours</option>
                <option value="3d" ${ui.dateFilter === '3d' ? 'selected' : ''}>Last 3 Days</option>
                <option value="7d" ${ui.dateFilter === '7d' ? 'selected' : ''}>Last 7 Days</option>
                <option value="15d" ${ui.dateFilter === '15d' ? 'selected' : ''}>Last 15 Days</option>
                <option value="30d" ${ui.dateFilter === '30d' ? 'selected' : ''}>Last 30 Days</option>
                <option value="custom" ${ui.dateFilter === 'custom' ? 'selected' : ''}>Custom Date Range</option>
              </select>
            </div>
            <div class="col-md-4">
              <label class="form-label small fw-semibold text-muted">Sort By</label>
              <select class="form-select form-select-sm" id="sort-select">
                <option value="score" ${ui.sort === 'score' ? 'selected' : ''}>Best Match / Relevance</option>
                <option value="newest" ${ui.sort === 'newest' ? 'selected' : ''}>Newest First</option>
                <option value="oldest" ${ui.sort === 'oldest' ? 'selected' : ''}>Oldest First</option>
                <option value="company-az" ${ui.sort === 'company-az' ? 'selected' : ''}>Company (A-Z)</option>
                <option value="company-za" ${ui.sort === 'company-za' ? 'selected' : ''}>Company (Z-A)</option>
              </select>
            </div>
          </div>

          <!-- Custom Date Range Row -->
          <div id="custom-date-container" class="mt-2 pt-2 border-top ${ui.dateFilter === 'custom' ? '' : 'd-none'}">
            <div class="row g-2 align-items-center">
              <div class="col-md-5 d-flex align-items-center gap-2">
                <label class="small fw-semibold text-muted text-nowrap">From:</label>
                <input type="date" class="form-control form-control-sm" id="custom-from-date" value="${esc(ui.customFrom)}">
              </div>
              <div class="col-md-5 d-flex align-items-center gap-2">
                <label class="small fw-semibold text-muted text-nowrap">Till:</label>
                <input type="date" class="form-control form-control-sm" id="custom-till-date" value="${esc(ui.customTill)}">
              </div>
              <div class="col-md-2">
                <button type="button" class="btn btn-outline-primary btn-sm rounded-pill w-100" id="apply-custom-dates-btn">
                  Apply Dates
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Active Filter Chips Container -->
      <div id="active-filter-chips-container">
        ${renderActiveFilterChips()}
      </div>

      <!-- Results Count Status -->
      <div class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-muted small">
          Found <strong class="text-dark" id="matching-jobs-count">${filteredJobs().length}</strong> opportunities
        </span>
      </div>

      <!-- Job Cards List -->
      <div id="jobs-list">
        <!-- Rendered via updateJobList() -->
      </div>

      <!-- Pagination / Load More Controls -->
      <div id="jobs-pagination-controls"></div>
    </div>
  `;
}

function viewInternships() {
  location.hash = "#/jobs";
  return viewJobs();
}

function viewJobDetails(jobId) {
  const job = jobs.find(j => j.id === jobId) || jobs[0];
  const m = calculateMatch(profile.skills, job.requiredSkills);
  const isSaved = savedJobs && savedJobs.includes(job.id);
  const existingApp = applications && applications.find(a => a.jobId === job.id);
  const relativeDate = formatRelativeDate(job.postedDate);
  const exactDate = formatExactDate(job.postedDate);

  return `
    <div class="container-xl py-4">
      <div class="mb-3">
        <a href="#/jobs" class="text-decoration-none text-muted small fw-semibold hover-text-primary">
          <i class="bi bi-arrow-left"></i> Back to all opportunities
        </a>
      </div>

      <div class="row g-4">
        <!-- Main Job Description (8 cols - spacious & readable) -->
        <div class="col-lg-8">
          <div class="card tm-card border-0 shadow-sm p-4 p-md-5 mb-4 bg-white">
            <div class="d-flex justify-content-between align-items-start gap-3 mb-4 flex-wrap">
              <div class="d-flex align-items-center gap-3">
                ${companyBadge(job.company, 52)}
                <div>
                  <h1 class="h3 fw-bold text-dark mb-1">${esc(job.title)}</h1>
                  <div class="d-flex align-items-center gap-2 text-muted small flex-wrap">
                    <span class="text-primary fw-semibold cursor-pointer fs-6" data-action="view-company-modal" data-company="${esc(job.company)}">
                      ${esc(job.company)}
                    </span>
                    <span>&middot;</span>
                    <span><i class="bi bi-geo-alt"></i> ${esc(job.location)}</span>
                    <span class="badge bg-light text-secondary border rounded-pill">${esc(job.workplaceType || "Hybrid")}</span>
                    <span class="badge bg-primary-subtle text-primary border rounded-pill">${esc(job.jobType)}</span>
                  </div>
                </div>
              </div>

              <button type="button" class="btn ${isSaved ? 'btn-warning text-dark' : 'btn-outline-secondary'} btn-sm rounded-pill px-3.5 py-1.5 fw-semibold" data-action="toggle-save-job" data-job-id="${job.id}">
                <i class="bi ${isSaved ? 'bi-bookmark-fill' : 'bi-bookmark'} me-1"></i> ${isSaved ? 'Saved' : 'Save'}
              </button>
            </div>

            <!-- Key Highlights Strip -->
            <div class="row g-3 p-3.5 bg-light rounded-4 mb-4 text-center text-sm-start">
              <div class="col-sm-4">
                <span class="text-muted small d-block">Compensation</span>
                <strong class="text-success fs-6">${esc(job.salary)}</strong>
              </div>
              <div class="col-sm-4 border-start border-end">
                <span class="text-muted small d-block">Experience Level</span>
                <strong class="text-dark fs-6">${esc(job.experienceLevel)}</strong>
              </div>
              <div class="col-sm-4">
                <span class="text-muted small d-block">Posting Timestamp</span>
                <strong class="text-dark fs-6" title="${esc(exactDate)}">${esc(relativeDate)}</strong>
              </div>
            </div>

            <!-- About the Role -->
            <h2 class="h5 fw-bold text-dark mb-2">About the Role</h2>
            <p class="text-muted mb-4" style="line-height: 1.7; font-size: 0.98rem;">${esc(job.description)}</p>

            <!-- Key Responsibilities -->
            <h2 class="h5 fw-bold text-dark mb-2">Key Responsibilities</h2>
            <ul class="text-muted mb-4 ps-3" style="line-height: 1.7; font-size: 0.95rem;">
              ${(job.responsibilities || [
                "Collaborate with multi-disciplinary engineering teams to ship reliable software.",
                "Ensure high test coverage and compliance with web standards.",
                "Participate in design architectural discussions and code reviews."
              ]).map(r => `<li class="mb-1.5">${esc(r)}</li>`).join("")}
            </ul>

            <!-- Eligibility & Requirements -->
            <h2 class="h5 fw-bold text-dark mb-2">Eligibility &amp; Qualifications</h2>
            <ul class="text-muted mb-4 ps-3" style="line-height: 1.7; font-size: 0.95rem;">
              ${(job.eligibility || [
                "Bachelor's or Master's degree in Computer Science, related field, or equivalent practical experience.",
                "Demonstrated proficiency in required core technical skills.",
                "Strong analytical and problem-solving mindset."
              ]).map(e => `<li class="mb-1.5">${esc(e)}</li>`).join("")}
            </ul>

            <!-- Required Skills Tag Cloud -->
            <h2 class="h5 fw-bold text-dark mb-2">Required Technical Skills</h2>
            <div class="d-flex flex-wrap gap-2 mb-4">
              ${job.requiredSkills.map(s => {
                const hasIt = profile.skills && profile.skills.map(x => x.toLowerCase()).includes(s.toLowerCase());
                return `
                  <span class="badge ${hasIt ? 'bg-success-subtle text-success border border-success' : 'bg-light text-muted border'} px-3 py-1.5 rounded-pill fw-semibold">
                    ${hasIt ? '✓ Matched: ' : '+ Missing: '}${esc(s)}
                  </span>
                `;
              }).join("")}
            </div>

            <!-- Action Bar -->
            <div class="d-flex justify-content-between align-items-center pt-4 border-top flex-wrap gap-3">
              <span class="text-muted small">
                <i class="bi bi-calendar-event me-1"></i> Deadline: <strong>${esc(job.deadline || '31 December 2026')}</strong>
              </span>
              <div class="d-flex gap-2">
                ${existingApp ? `
                  <a href="#/applications" class="btn btn-success rounded-pill px-4 py-2 fw-semibold shadow-sm">
                    <i class="bi bi-check2-circle me-1"></i> Application Submitted (${existingApp.status})
                  </a>
                ` : `
                  <button type="button" class="btn btn-primary rounded-pill px-4 py-2 fw-semibold shadow" data-action="open-apply-modal" data-job-id="${job.id}">
                    <i class="bi bi-send-fill me-1"></i> Apply to this Role
                  </button>
                `}
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar: Match Breakdown & Company (4 cols) -->
        <div class="col-lg-4">
          <!-- Skill Match Card -->
          <div class="card tm-card border-0 shadow-sm p-4 mb-4 bg-white">
            <h3 class="h6 fw-bold text-dark mb-3 d-flex align-items-center gap-2">
              <i class="bi bi-cpu-fill text-primary"></i> Explainable Skill Match
            </h3>

            <div class="text-center mb-3">
              <div class="display-5 fw-bold text-primary mb-1">${m.score}%</div>
              <div class="progress rounded-pill mb-2" style="height: 8px;">
                <div class="progress-bar ${m.score >= 70 ? 'bg-success' : m.score >= 40 ? 'bg-warning' : 'bg-danger'} rounded-pill" style="width: ${m.score}%;"></div>
              </div>
              <span class="badge ${m.score >= 70 ? 'bg-success-subtle text-success border border-success' : 'bg-warning-subtle text-warning-emphasis border'} rounded-pill px-3 py-1 fw-semibold">
                ${m.score >= 70 ? 'Strong Candidate Match' : m.score >= 40 ? 'Moderate Compatibility' : 'Skills Gap Detected'}
              </span>
            </div>

            <!-- Matched Skills -->
            <div class="mb-3">
              <span class="text-muted small fw-semibold d-block mb-1">
                Matched Skills (${m.matchedSkills.length}/${m.total}):
              </span>
              <div class="d-flex flex-wrap gap-1">
                ${m.matchedSkills.length > 0 ? m.matchedSkills.map(s => `
                  <span class="badge bg-success-subtle text-success border border-success rounded-pill small">✓ ${esc(s)}</span>
                `).join("") : `<span class="text-muted small">None yet.</span>`}
              </div>
            </div>

            <!-- Missing Skills -->
            <div class="mb-3">
              <span class="text-muted small fw-semibold d-block mb-1">
                Missing Skills (${m.missingSkills.length}):
              </span>
              <div class="d-flex flex-wrap gap-1">
                ${m.missingSkills.length > 0 ? m.missingSkills.map(s => `
                  <span class="badge bg-danger-subtle text-danger border border-danger rounded-pill small">+ ${esc(s)}</span>
                `).join("") : `<span class="text-success small fw-semibold">All required skills met!</span>`}
              </div>
            </div>

            <p class="text-muted small mb-0 p-2.5 rounded bg-light border" style="font-size:0.75rem; line-height: 1.5;">
              <i class="bi bi-info-circle text-primary"></i> <strong>Formula:</strong> (Matched Skills / Total Required) &times; 100. Overlap indicator for learning guidance.
            </p>
          </div>

          <!-- Company Overview Card -->
          <div class="card tm-card border-0 shadow-sm p-4 bg-white">
            <h3 class="h6 fw-bold text-dark mb-3">About ${esc(job.company)}</h3>
            <div class="d-flex align-items-center gap-2 mb-2">
              ${companyBadge(job.company, 32)}
              <strong class="text-dark">${esc(job.company)}</strong>
            </div>
            <p class="text-muted small mb-3" style="line-height: 1.55;">
              ${COMPANY_PROFILES[job.company] ? esc(COMPANY_PROFILES[job.company].description) : "Global technology organization hiring software engineering talent."}
            </p>
            <button type="button" class="btn btn-outline-primary btn-sm rounded-pill w-100 fw-semibold" data-action="view-company-modal" data-company="${esc(job.company)}">
              View Company Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function viewSavedJobs() {
  const savedList = jobs.filter(j => savedJobs && savedJobs.includes(j.id));

  return `
    <div class="container-xl py-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 class="h3 fw-bold text-dark mb-1 d-flex align-items-center gap-2">
            <i class="bi bi-bookmark-heart-fill text-warning"></i> My Saved Opportunities
          </h1>
          <p class="text-muted small mb-0">Jobs and internships bookmarked for later application.</p>
        </div>
        <span class="badge bg-light text-dark border rounded-pill px-3 py-1.5 fw-semibold">
          ${savedList.length} ${savedList.length === 1 ? 'Saved Role' : 'Saved Roles'}
        </span>
      </div>

      ${savedList.length > 0 ? `
        <div class="d-flex flex-column gap-3">
          ${savedList.map(j => {
            const m = calculateMatch(profile.skills, j.requiredSkills);
            return jobCard({ job: j, m });
          }).join("")}
        </div>
      ` : `
        <div class="card tm-card border-0 shadow-sm p-5 text-center bg-white">
          <i class="bi bi-bookmark-dash display-4 text-muted mb-3 d-block"></i>
          <h2 class="h5 fw-bold text-dark mb-1">No Saved Jobs Yet</h2>
          <p class="text-muted small mb-4" style="max-width: 400px; margin: 0 auto; line-height:1.6;">
            When you browse verified engineering jobs and internships, click the bookmark icon to save roles here for easy tracking.
          </p>
          <div>
            <a href="#/jobs" class="btn btn-primary rounded-pill px-4 fw-semibold shadow-sm">
              Browse Tech Jobs
            </a>
          </div>
        </div>
      `}
    </div>
  `;
}

function viewApplications() {
  return `
    <div class="container-xl py-4">
      <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div>
          <h1 class="h3 fw-bold text-dark mb-1 d-flex align-items-center gap-2">
            <i class="bi bi-send-check-fill text-primary"></i> Application Tracker
          </h1>
          <p class="text-muted small mb-0">Monitor the review status of your active job and internship applications.</p>
        </div>
        <a href="#/jobs" class="btn btn-outline-primary btn-sm rounded-pill px-3.5 fw-semibold">
          <i class="bi bi-plus-circle me-1"></i> Explore More Roles
        </a>
      </div>

      ${applications && applications.length > 0 ? `
        <div class="card tm-card border-0 shadow-sm overflow-hidden bg-white">
          <div class="table-responsive">
            <table class="table table-hover align-middle mb-0">
              <thead class="table-light">
                <tr class="small text-muted text-uppercase">
                  <th class="ps-4">Role &amp; Company</th>
                  <th>Applied Date</th>
                  <th>Skill Match</th>
                  <th>Status</th>
                  <th>Reviewer Notes</th>
                  <th class="text-end pe-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                ${applications.map(app => {
                  const statusColors = {
                    "Applied": "bg-primary-subtle text-primary border-primary",
                    "Under Review": "bg-info-subtle text-info border-info",
                    "Shortlisted": "bg-warning-subtle text-warning-emphasis border-warning",
                    "Interview": "bg-success-subtle text-success border-success",
                    "Selected": "bg-success text-white",
                    "Rejected": "bg-danger-subtle text-danger border-danger"
                  };
                  return `
                    <tr>
                      <td class="ps-4">
                        <div class="d-flex align-items-center gap-3">
                          ${companyBadge(app.company, 34)}
                          <div>
                            <strong class="text-dark d-block">${esc(app.jobTitle)}</strong>
                            <span class="text-muted small">${esc(app.company)} &middot; ${esc(app.location || 'Bengaluru')}</span>
                          </div>
                        </div>
                      </td>
                      <td class="small text-muted">
                        ${formatRelativeDate(app.appliedDate)}
                      </td>
                      <td>
                        <span class="badge bg-light text-dark border rounded-pill fw-semibold">
                          ${app.matchScore || 85}% Match
                        </span>
                      </td>
                      <td>
                        <span class="badge rounded-pill border px-2.5 py-1 ${statusColors[app.status] || 'bg-light text-dark'}">
                          ${esc(app.status)}
                        </span>
                      </td>
                      <td class="small text-muted" style="max-width: 260px;">
                        ${esc(app.note || "Application received in demo storage.")}
                      </td>
                      <td class="text-end pe-4">
                        <button type="button" class="btn btn-outline-danger btn-sm rounded-pill px-3 py-1" data-action="withdraw-application" data-app-id="${app.id}">
                          Withdraw
                        </button>
                      </td>
                    </tr>
                  `;
                }).join("")}
              </tbody>
            </table>
          </div>
        </div>
      ` : `
        <div class="card tm-card border-0 shadow-sm p-5 text-center bg-white">
          <i class="bi bi-envelope-open display-4 text-muted mb-3 d-block"></i>
          <h2 class="h5 fw-bold text-dark mb-1">No Applications Submitted</h2>
          <p class="text-muted small mb-4" style="max-width: 420px; margin: 0 auto; line-height:1.6;">
            You haven't submitted any job or internship applications yet. Find roles that match your skills and apply in 1-click.
          </p>
          <div>
            <a href="#/jobs" class="btn btn-primary rounded-pill px-4 fw-semibold shadow-sm">
              Browse Tech Openings
            </a>
          </div>
        </div>
      `}
    </div>
  `;
}

function viewCompanyModal(companyName) {
  const profileData = COMPANY_PROFILES[companyName] || {
    name: companyName,
    industry: "Technology & Software",
    headquarters: "Bengaluru & Global",
    website: "https://careers.google.com",
    employees: "10,000+",
    description: "Global technology organization hiring software engineering talent.",
    openingsCount: 2
  };

  const companyOpenings = jobs.filter(j => j.company.toLowerCase() === companyName.toLowerCase());

  const modalHtml = `
    <div class="modal fade show d-block" id="company-profile-modal" tabindex="-1" style="background: rgba(15, 23, 42, 0.65);" aria-modal="true" role="dialog">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          <div class="modal-header border-0 bg-primary text-white p-4">
            <div class="d-flex align-items-center gap-3">
              <div class="bg-white p-2 rounded-3 shadow-sm d-flex align-items-center justify-content-center" style="width:50px; height:50px;">
                ${companyBadge(companyName, 36)}
              </div>
              <div>
                <h2 class="h5 fw-bold mb-0 text-white">${esc(profileData.name)}</h2>
                <span class="text-white-50 small">${esc(profileData.industry)} &middot; ${esc(profileData.headquarters)}</span>
              </div>
            </div>
            <button type="button" class="btn-close btn-close-white" data-action="close-modal" aria-label="Close"></button>
          </div>

          <div class="modal-body p-4">
            <p class="text-muted mb-4" style="line-height:1.65;">${esc(profileData.description)}</p>

            <div class="row g-2 p-3 bg-light rounded-3 mb-4 text-center">
              <div class="col-4">
                <span class="text-muted small d-block">Industry</span>
                <strong class="text-dark small">${esc(profileData.industry)}</strong>
              </div>
              <div class="col-4 border-start border-end">
                <span class="text-muted small d-block">Headquarters</span>
                <strong class="text-dark small">${esc(profileData.headquarters)}</strong>
              </div>
              <div class="col-4">
                <span class="text-muted small d-block">Official Site</span>
                <a href="${esc(profileData.website)}" target="_blank" rel="noopener" class="small fw-semibold text-primary text-decoration-none">
                  Visit Careers <i class="bi bi-box-arrow-up-right"></i>
                </a>
              </div>
            </div>

            <h3 class="h6 fw-bold mb-3 text-dark">Active Opportunities at ${esc(companyName)} (${companyOpenings.length})</h3>

            <div class="d-flex flex-column gap-2.5" style="max-height: 320px; overflow-y: auto;">
              ${companyOpenings.length > 0 ? companyOpenings.map(j => {
                const m = calculateMatch(profile.skills, j.requiredSkills);
                return `
                  <div class="p-3 rounded-3 border bg-white d-flex justify-content-between align-items-center flex-wrap gap-2 hover-shadow transition-all">
                    <div>
                      <strong class="text-dark d-block">${esc(j.title)}</strong>
                      <span class="text-muted small">${esc(j.location)} &middot; ${esc(j.jobType)} &middot; ${esc(j.salary)}</span>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                      ${scoreBadge(m)}
                      <a href="#/jobs/${j.id}" class="btn btn-primary btn-sm rounded-pill px-3.5" data-action="close-modal">
                        View Role
                      </a>
                    </div>
                  </div>
                `;
              }).join("") : `
                <p class="text-muted small mb-0">No open positions currently listed for ${esc(companyName)}.</p>
              `}
            </div>
          </div>

          <div class="modal-footer border-0 bg-light p-3 px-4">
            <button type="button" class="btn btn-secondary btn-sm rounded-pill px-4" data-action="close-modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  $("#modal-container").innerHTML = modalHtml;
}

function openApplicationModal(jobId) {
  const job = jobs.find(j => j.id === jobId);
  if (!job) return;

  const m = calculateMatch(profile.skills, job.requiredSkills);

  const modalHtml = `
    <div class="modal fade show d-block" id="apply-modal" tabindex="-1" style="background: rgba(15, 23, 42, 0.65);" aria-modal="true" role="dialog">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          <div class="modal-header border-0 bg-primary text-white p-3 px-4">
            <h2 class="h6 fw-bold mb-0 text-white d-flex align-items-center gap-2">
              <i class="bi bi-send-fill"></i> Submit Application to ${esc(job.company)}
            </h2>
            <button type="button" class="btn-close btn-close-white" data-action="close-modal" aria-label="Close"></button>
          </div>

          <form id="apply-form" data-job-id="${job.id}">
            <div class="modal-body p-4">
              <div class="p-3 bg-light rounded-3 mb-3">
                <strong class="text-dark d-block fs-6">${esc(job.title)}</strong>
                <span class="text-muted small">${esc(job.company)} &middot; ${esc(job.location)} &middot; ${esc(job.salary)}</span>
              </div>

              <div class="d-flex align-items-center justify-content-between p-2.5 rounded-3 bg-primary-subtle border border-primary mb-3">
                <span class="small fw-semibold text-primary">Your Skill Match:</span>
                ${scoreBadge(m)}
              </div>

              <div class="mb-3">
                <label class="form-label small fw-semibold text-dark">Applicant Full Name</label>
                <input type="text" class="form-control" value="${esc(profile.displayName || 'Alex Morgan')}" readonly>
              </div>

              <div class="mb-3">
                <label class="form-label small fw-semibold text-dark">Contact Email</label>
                <input type="email" class="form-control" value="${esc(profile.email || 'alex.morgan@talentmatch.dev')}" readonly>
              </div>

              <!-- RESUME SELECTOR & DIRECT UPLOAD IN MODAL -->
              <div class="mb-3">
                <div class="d-flex justify-content-between align-items-center mb-1">
                  <label class="form-label small fw-semibold text-dark mb-0">Attached Resume / CV</label>
                  <button type="button" class="btn btn-link p-0 text-primary small text-decoration-none fw-semibold" data-action="trigger-resume-upload">
                    <i class="bi bi-upload me-1"></i> Upload Different Resume
                  </button>
                </div>
                <div class="p-3 rounded-3 border bg-light d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center gap-2.5">
                    <i class="bi bi-file-earmark-pdf-fill text-danger fs-4"></i>
                    <div>
                      <span class="small text-dark fw-bold d-block">${esc(profile.resume && profile.resume.fileName ? profile.resume.fileName : 'Alex_Morgan_Resume.pdf')}</span>
                      <span class="text-muted" style="font-size:0.75rem;">${esc(profile.resume && profile.resume.fileSize ? profile.resume.fileSize : '248 KB')} &middot; Verified Local File</span>
                    </div>
                  </div>
                  <span class="badge bg-success-subtle text-success border border-success">Ready</span>
                </div>
                <input type="file" id="resume-file-input" accept=".pdf,.doc,.docx" class="d-none">
              </div>

              <div class="mb-3">
                <label class="form-label small fw-semibold text-dark">Note to Hiring Recruiter (Optional)</label>
                <textarea class="form-control" rows="3" id="apply-cover-note" placeholder="Share why your technical skills and coursework match this position..."></textarea>
              </div>

              <div class="alert alert-info py-2 px-3 small border-0 mb-0">
                <i class="bi bi-shield-check me-1"></i> <strong>Frontend Demo:</strong> Application will be logged in your LocalStorage tracker.
              </div>
            </div>

            <div class="modal-footer border-0 bg-light p-3 px-4">
              <button type="button" class="btn btn-secondary btn-sm rounded-pill px-3" data-action="close-modal">Cancel</button>
              <button type="submit" class="btn btn-primary btn-sm rounded-pill px-4 fw-semibold shadow">Submit Application</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  $("#modal-container").innerHTML = modalHtml;
}


// ============ 8. PHASE 4: AI-STYLE SKILL MATCHING SYSTEM ============

function viewSkillMatching() {
  const user = profile || DEFAULT_PROFILE;
  const userSkills = user.skills || [];

  // Determine currently selected job for simulation
  const selectedJobId = ui.selectedJobId || (jobs[0] ? jobs[0].id : "job-001");
  const selectedJob = jobs.find(j => j.id === selectedJobId) || jobs[0];
  const simMatch = calculateMatch(userSkills, selectedJob.requiredSkills);

  // Suggestions of high-demand industry skills not yet in candidate profile
  const popularSkills = [
    "TypeScript", "React", "Node.js", "Python", "SQL", "Docker", "AWS", "Azure",
    "GraphQL", "Next.js", "Cypress", "Figma", "REST API", "Testing"
  ];
  const missingSuggestions = popularSkills.filter(s => !userSkills.map(x => x.toLowerCase()).includes(s.toLowerCase()));

  // All jobs ranked by candidate skill match
  const rankedJobs = jobs.map(j => {
    const m = calculateMatch(userSkills, j.requiredSkills);
    return { job: j, match: m };
  }).sort((a, b) => b.match.score - a.match.score);

  return `
    <div class="container-xl py-4">
      <!-- Title & Algorithm Explainer Hero (Clean, Light SaaS Style) -->
      <div class="card tm-card border-0 p-4 p-md-5 mb-4 shadow-sm bg-white position-relative overflow-hidden">
        <div class="position-absolute end-0 top-0 opacity-10 pe-none d-none d-lg-block" style="transform: translate(10%, -15%);">
          <svg width="240" height="240" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="45" stroke="#2563EB" stroke-width="2" stroke-dasharray="6 3"/>
            <circle cx="50" cy="50" r="30" stroke="#3B82F6" stroke-width="3"/>
            <circle cx="50" cy="50" r="14" fill="#2563EB"/>
          </svg>
        </div>

        <div class="row align-items-center g-4 position-relative z-1">
          <div class="col-lg-8">
            <span class="badge bg-primary-subtle text-primary border border-primary-subtle fw-semibold px-3 py-1 rounded-pill mb-2.5">
              <i class="bi bi-cpu-fill me-1"></i> Explainable Skill Match Engine
            </span>
            <h1 class="h3 fw-bold text-dark mb-2">Transparent Compatibility Analysis</h1>
            <p class="text-muted mb-3" style="max-width: 650px; line-height: 1.65;">
              TalentMatch.dev uses a transparent mathematical overlap algorithm instead of opaque black-box machine learning. Understand exactly why you match a role and which technologies to learn next.
            </p>
            <div class="d-inline-flex align-items-center gap-2 p-2 px-3 rounded-pill bg-light border text-dark small">
              <i class="bi bi-calculator text-primary"></i>
              <span><strong>Formula:</strong> Match Score = (Matched Required Skills / Total Required Skills) &times; 100</span>
            </div>
          </div>
          <div class="col-lg-4 text-lg-end">
            <div class="p-3.5 rounded-4 bg-light border text-center d-inline-block shadow-sm" style="min-width: 220px;">
              <span class="text-muted small fw-semibold d-block mb-1">Your Technical Skills</span>
              <div class="display-6 fw-bold text-primary mb-1">${userSkills.length}</div>
              <span class="badge bg-success-subtle text-success border border-success rounded-pill px-3 py-1">Active Profile</span>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-4">
        <!-- ================= LEFT COLUMN: CANDIDATE SKILLS MANAGEMENT ================= -->
        <div class="col-lg-5">
          <!-- Skills Manager Card -->
          <div class="card tm-card border-0 shadow-sm p-4 mb-4 bg-white">
            <h2 class="h6 fw-bold text-dark mb-2 d-flex align-items-center gap-2">
              <i class="bi bi-tools text-primary"></i> Manage Your Technical Skills
            </h2>
            <p class="text-muted small mb-3">Add or remove skills to instantly recalculate your match scores across all active engineering jobs.</p>

            <!-- Add Skill Form -->
            <form id="add-skill-form" class="mb-3">
              <div class="input-group">
                <input type="text" id="new-skill-input" class="form-control" placeholder="Add skill (e.g. Docker, Python, TypeScript)..." required>
                <button type="submit" class="btn btn-primary px-3 fw-semibold">
                  <i class="bi bi-plus-lg me-1"></i> Add
                </button>
              </div>
            </form>

            <!-- Current Skills Tag Cloud -->
            <label class="form-label small fw-semibold text-dark mb-1.5">Your Active Skills (${userSkills.length}):</label>
            <div class="d-flex flex-wrap gap-1.5 p-3 rounded-3 bg-light border mb-3" style="min-height: 80px;">
              ${userSkills.length > 0 ? userSkills.map(skill => `
                <span class="badge bg-primary text-white px-2.5 py-1.5 rounded-pill d-inline-flex align-items-center gap-1.5 shadow-sm" style="font-size:0.8rem;">
                  ${esc(skill)}
                  <button type="button" class="btn-close btn-close-white p-0" style="font-size:0.6rem;" data-action="remove-user-skill" data-skill="${esc(skill)}" aria-label="Remove skill"></button>
                </span>
              `).join("") : `<span class="text-muted small">No skills added yet. Add your core technical skills above.</span>`}
            </div>

            <!-- Recommended Skills to Add -->
            ${missingSuggestions.length > 0 ? `
              <label class="form-label small fw-semibold text-dark mb-1.5">Recommended In-Demand Skills:</label>
              <div class="d-flex flex-wrap gap-1">
                ${missingSuggestions.slice(0, 8).map(s => `
                  <button type="button" class="btn btn-outline-secondary btn-sm rounded-pill py-0.5 px-2.5 small" data-action="quick-add-skill" data-skill="${esc(s)}" title="Add to profile">
                    + ${esc(s)}
                  </button>
                `).join("")}
              </div>
            ` : ""}
          </div>

          <!-- Formula & Explainability Reference -->
          <div class="card tm-card border-0 shadow-sm p-4 bg-white">
            <h3 class="h6 fw-bold text-dark mb-2 d-flex align-items-center gap-2">
              <i class="bi bi-info-circle text-info"></i> How Compatibility Is Measured
            </h3>
            <p class="text-muted small mb-2" style="line-height:1.6;">
              TalentMatch measures direct intersections between a candidate's verified skill inventory and the employer's explicit required skills list:
            </p>
            <ul class="text-muted small ps-3 mb-3" style="line-height:1.6;">
              <li><strong>70% &ndash; 100%:</strong> High Compatibility &ndash; Fast-track candidate review.</li>
              <li><strong>40% &ndash; 69%:</strong> Moderate Compatibility &ndash; Recommended for interview with upskilling.</li>
              <li><strong>Below 40%:</strong> Foundational Match &ndash; Skill gaps identified below.</li>
            </ul>
            <div class="p-2.5 rounded-3 bg-light border small text-muted">
              <i class="bi bi-shield-check text-success me-1"></i> Transparent calculations prevent hidden bias.
            </div>
          </div>
        </div>

        <!-- ================= RIGHT COLUMN: INTERACTIVE ROLE SIMULATOR ================= -->
        <div class="col-lg-7">
          <!-- Role Compatibility Simulator Card -->
          <div class="card tm-card border-0 shadow-sm p-4 mb-4 bg-white">
            <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
              <div>
                <h2 class="h5 fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                  <i class="bi bi-sliders text-primary"></i> Interactive Role Compatibility Simulator
                </h2>
                <span class="text-muted small">Select any active job opening to simulate how you match</span>
              </div>
              <span class="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-3 py-1 fw-semibold">
                Real-Time Recalculation
              </span>
            </div>

            <!-- Role Selector Dropdown -->
            <div class="mb-4">
              <label class="form-label small fw-semibold text-muted">Target Opportunity to Test:</label>
              <select class="form-select form-select-lg shadow-sm" id="simulator-job-select">
                ${jobs.map(j => `
                  <option value="${j.id}" ${j.id === selectedJobId ? "selected" : ""}>
                    ${esc(j.title)} @ ${esc(j.company)} (${esc(j.location)})
                  </option>
                `).join("")}
              </select>
            </div>

            <!-- Simulation Results Overview -->
            <div class="p-4 rounded-4 bg-light border mb-4">
              <div class="row align-items-center g-3">
                <div class="col-sm-4 text-center border-sm-end pe-sm-3">
                  <div class="mb-2">
                    ${companyBadge(selectedJob.company, 48)}
                  </div>
                  <h3 class="h6 fw-bold text-dark mb-0">${esc(selectedJob.title)}</h3>
                  <span class="text-muted small">${esc(selectedJob.company)}</span>
                  <div class="display-5 fw-bold text-primary mt-2 mb-1">${simMatch.score}%</div>
                  <span class="badge ${simMatch.score >= 70 ? 'bg-success-subtle text-success border border-success' : simMatch.score >= 40 ? 'bg-warning-subtle text-warning-emphasis border border-warning' : 'bg-danger-subtle text-danger border border-danger'} rounded-pill px-3 py-1 fw-semibold">
                    ${simMatch.score >= 70 ? 'Strong Match' : simMatch.score >= 40 ? 'Partial Match' : 'Skill Gap'}
                  </span>
                </div>

                <div class="col-sm-8 ps-sm-4">
                  <!-- Matched Skills -->
                  <div class="mb-3">
                    <span class="small fw-semibold text-success d-block mb-1.5">
                      <i class="bi bi-check-circle-fill me-1"></i> Matched Required Skills (${simMatch.matchedSkills.length}/${simMatch.total}):
                    </span>
                    <div class="d-flex flex-wrap gap-1.5">
                      ${simMatch.matchedSkills.length > 0 ? simMatch.matchedSkills.map(s => `
                        <span class="badge bg-success-subtle text-success border border-success rounded-pill px-3 py-1">✓ ${esc(s)}</span>
                      `).join("") : `<span class="text-muted small">No overlapping skills found.</span>`}
                    </div>
                  </div>

                  <!-- Missing Skills -->
                  <div class="mb-3">
                    <span class="small fw-semibold text-danger d-block mb-1.5">
                      <i class="bi bi-x-circle-fill me-1"></i> Missing Skills to Learn (${simMatch.missingSkills.length}):
                    </span>
                    <div class="d-flex flex-wrap gap-1.5">
                      ${simMatch.missingSkills.length > 0 ? simMatch.missingSkills.map(s => `
                        <button type="button" class="btn btn-outline-danger btn-sm rounded-pill py-0.5 px-2.5 small" data-action="quick-add-skill" data-skill="${esc(s)}" title="Click to add to your skills">
                          + Add ${esc(s)} to Profile
                        </button>
                      `).join("") : `<span class="text-success small fw-semibold">You meet 100% of the required skills!</span>`}
                    </div>
                  </div>

                  <!-- Math Explanation -->
                  <div class="p-2.5 rounded-3 bg-white border small text-muted">
                    <code>Score = (${simMatch.matchedSkills.length} matched / ${simMatch.total} total) &times; 100 = ${simMatch.score}%</code>
                  </div>
                </div>
              </div>
            </div>

            <!-- Action buttons -->
            <div class="d-flex justify-content-end gap-2 flex-wrap">
              <a href="#/jobs/${selectedJob.id}" class="btn btn-outline-primary btn-sm rounded-pill px-3.5 py-1.5 fw-semibold">
                View Full Role Details
              </a>
              <button type="button" class="btn btn-primary btn-sm rounded-pill px-4 py-1.5 fw-semibold shadow-sm" data-action="open-apply-modal" data-job-id="${selectedJob.id}">
                Apply to this Position
              </button>
            </div>
          </div>

          <!-- Recommended Jobs Ranked by Match Score -->
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h3 class="h6 fw-bold text-dark mb-0 d-flex align-items-center gap-2">
              <i class="bi bi-sort-numeric-down text-primary"></i> All Opportunities Ranked by Your Match Score
            </h3>
            <span class="text-muted small">Top matches first</span>
          </div>

          <div class="d-flex flex-column gap-2.5 mb-4">
            ${rankedJobs.slice(0, 6).map(({ job: rj, match: rm }) => `
              <div class="p-3.5 rounded-3 border bg-white shadow-sm d-flex justify-content-between align-items-center flex-wrap gap-3 hover-shadow transition-all">
                <div class="d-flex align-items-center gap-3">
                  ${companyBadge(rj.company, 36)}
                  <div>
                    <h4 class="h6 fw-bold mb-0 text-dark">
                      <a href="#/jobs/${rj.id}" class="text-dark text-decoration-none hover-text-primary">${esc(rj.title)}</a>
                    </h4>
                    <span class="text-muted small">${esc(rj.company)} &middot; ${esc(rj.location)} &middot; ${esc(rj.salary)}</span>
                  </div>
                </div>
                <div class="d-flex align-items-center gap-2.5">
                  ${scoreBadge(rm)}
                  <a href="#/jobs/${rj.id}" class="btn btn-outline-primary btn-sm rounded-pill px-3 fw-semibold">
                    View
                  </a>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}



// ============ 9. PHASE 7: RECRUITER & COMPANY DASHBOARD ============

function viewRecruiter(subTab) {
  if (!subTab) {
    const hash = location.hash.replace(/^#\/?/, "");
    if (hash.includes("jobs")) subTab = "jobs";
    else if (hash.includes("candidates")) subTab = "candidates";
    else subTab = "hub";
  }

  const isShortlistView = location.hash.startsWith("#/shortlist");
  if (isShortlistView) subTab = "shortlist";

  // Recruiter statistics
  const totalJobsPosted = jobs.length;
  const totalApps = candidates.length;
  const shortlistedCount = candidates.filter(c => c.reviewStatus === "Shortlisted" || (shortlist && shortlist.includes(c.id))).length;
  const reviewingCount = candidates.filter(c => c.reviewStatus === "Under Review" || c.reviewStatus === "Applied").length;
  const rejectedCount = candidates.filter(c => c.reviewStatus === "Rejected").length;

  return `
    <div class="container py-3">
      <!-- Recruiter Hub Header -->
      <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <div>
          <span class="badge bg-info-subtle text-info border border-info rounded-pill px-3 py-1 fw-semibold mb-1">
            <i class="bi bi-building me-1"></i> Recruiter &amp; Talent Acquisition Workspace
          </span>
          <h1 class="h3 fw-bold text-dark mb-0">Hiring Pipeline &amp; Applicant Management</h1>
          <p class="text-muted small mb-0">Review candidates, track application review stages, and publish verified openings.</p>
        </div>
        <div class="d-flex gap-2">
          <button type="button" class="btn btn-primary rounded-pill px-4 fw-semibold shadow-sm" data-action="open-post-job-modal">
            <i class="bi bi-plus-circle me-1"></i> Post a New Job
          </button>
        </div>
      </div>

      <!-- KPI Metrics Cards Row -->
      <div class="row g-3 mb-4">
        <div class="col-md-3 col-6">
          <div class="card tm-card border-0 shadow-sm p-3 text-center">
            <span class="text-muted small d-block mb-1">Total Active Jobs</span>
            <div class="h3 fw-bold text-dark mb-0">${totalJobsPosted}</div>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="card tm-card border-0 shadow-sm p-3 text-center">
            <span class="text-muted small d-block mb-1">Total Applicants</span>
            <div class="h3 fw-bold text-primary mb-0">${totalApps}</div>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="card tm-card border-0 shadow-sm p-3 text-center">
            <span class="text-muted small d-block mb-1">Shortlisted Talent</span>
            <div class="h3 fw-bold text-warning-emphasis mb-0">${shortlistedCount}</div>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="card tm-card border-0 shadow-sm p-3 text-center">
            <span class="text-muted small d-block mb-1">Under Review</span>
            <div class="h3 fw-bold text-info mb-0">${reviewingCount}</div>
          </div>
        </div>
      </div>

      <!-- Pipeline Progress Bar -->
      <div class="card tm-card border-0 shadow-sm p-3 mb-4">
        <div class="d-flex justify-content-between align-items-center mb-1.5 small">
          <span class="fw-semibold text-dark">Hiring Funnel Status Distribution</span>
          <span class="text-muted">${totalApps} Total Candidates Reviewed</span>
        </div>
        <div class="progress rounded-pill" style="height: 10px;">
          <div class="progress-bar bg-warning" style="width: ${(shortlistedCount/Math.max(1, totalApps))*100}%;" title="Shortlisted (${shortlistedCount})"></div>
          <div class="progress-bar bg-info" style="width: ${(reviewingCount/Math.max(1, totalApps))*100}%;" title="Under Review (${reviewingCount})"></div>
          <div class="progress-bar bg-danger" style="width: ${(rejectedCount/Math.max(1, totalApps))*100}%;" title="Rejected (${rejectedCount})"></div>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-2 small text-muted" style="font-size:0.75rem;">
          <span><span class="badge bg-warning text-dark">&nbsp;</span> Shortlisted: ${shortlistedCount}</span>
          <span><span class="badge bg-info">&nbsp;</span> Under Review: ${reviewingCount}</span>
          <span><span class="badge bg-danger">&nbsp;</span> Rejected: ${rejectedCount}</span>
        </div>
      </div>

      <!-- Recruiter Subtabs Navigation Strip -->
      <ul class="nav nav-pills tm-card p-1.5 bg-white border-0 shadow-sm rounded-pill mb-4" role="tablist">
        <li class="nav-item flex-fill text-center">
          <a class="nav-link rounded-pill py-2 fw-semibold ${subTab === 'hub' || subTab === 'jobs' ? 'active' : ''}" href="#/recruiter/jobs">
            <i class="bi bi-briefcase me-1"></i> Active Job Postings (${jobs.length})
          </a>
        </li>
        <li class="nav-item flex-fill text-center">
          <a class="nav-link rounded-pill py-2 fw-semibold ${subTab === 'candidates' ? 'active' : ''}" href="#/recruiter/candidates">
            <i class="bi bi-people me-1"></i> Candidate Applications (${candidates.length})
          </a>
        </li>
        <li class="nav-item flex-fill text-center">
          <a class="nav-link rounded-pill py-2 fw-semibold ${subTab === 'shortlist' ? 'active' : ''}" href="#/shortlist">
            <i class="bi bi-star-fill text-warning me-1"></i> Shortlisted Profiles (${shortlistedCount})
          </a>
        </li>
      </ul>

      <!-- Tab Content Area -->
      ${subTab === 'candidates' || subTab === 'shortlist' ? renderRecruiterCandidatesTab(subTab === 'shortlist') : renderRecruiterJobsTab()}
    </div>
  `;
}

function renderRecruiterJobsTab() {
  return `
    <div>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="h5 fw-bold text-dark mb-0">Posted Job &amp; Internship Listings</h2>
        <span class="text-muted small">Showing all active company openings</span>
      </div>

      <div class="card tm-card border-0 shadow-sm overflow-hidden">
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead class="table-light">
              <tr class="small text-muted text-uppercase">
                <th class="ps-4">Job Title &amp; Company</th>
                <th>Workplace &amp; Location</th>
                <th>Type</th>
                <th>Posted Date</th>
                <th>Status</th>
                <th class="text-end pe-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${jobs.map(j => {
                const appCount = candidates.filter(c => c.jobId === j.id).length;
                return `
                  <tr>
                    <td class="ps-4">
                      <div class="d-flex align-items-center gap-2.5">
                        ${companyBadge(j.company, 32)}
                        <div>
                          <strong class="text-dark d-block">${esc(j.title)}</strong>
                          <span class="text-muted small">${esc(j.company)} &middot; <span class="badge bg-light text-primary border">${appCount} Applicants</span></span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="text-dark small d-block">${esc(j.location)}</span>
                      <span class="badge bg-light text-secondary border rounded-pill" style="font-size:0.72rem;">${esc(j.workplaceType || 'Hybrid')}</span>
                    </td>
                    <td>
                      <span class="badge ${j.jobType === 'Internship' ? 'bg-success-subtle text-success border border-success' : 'bg-primary-subtle text-primary border'} rounded-pill">
                        ${esc(j.jobType)}
                      </span>
                    </td>
                    <td class="small text-muted">
                      ${formatRelativeDate(j.postedDate)}
                    </td>
                    <td>
                      <span class="badge ${j.active !== false ? 'bg-success-subtle text-success border border-success' : 'bg-secondary-subtle text-secondary'} rounded-pill">
                        ${j.active !== false ? 'Active' : 'Closed'}
                      </span>
                    </td>
                    <td class="text-end pe-4">
                      <div class="btn-group btn-group-sm">
                        <button type="button" class="btn btn-outline-secondary" data-action="toggle-job-status" data-job-id="${j.id}" title="Toggle Active/Closed">
                          <i class="bi ${j.active !== false ? 'bi-pause-circle' : 'bi-play-circle'}"></i>
                        </button>
                        <a href="#/jobs/${j.id}" class="btn btn-outline-primary" title="View Public Listing">
                          <i class="bi bi-eye"></i>
                        </a>
                        <button type="button" class="btn btn-outline-danger" data-action="delete-job" data-job-id="${j.id}" title="Delete Listing">
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderRecruiterCandidatesTab(onlyShortlist = false) {
  let displayCandidates = [...candidates];
  if (onlyShortlist) {
    displayCandidates = displayCandidates.filter(c => c.reviewStatus === "Shortlisted" || (shortlist && shortlist.includes(c.id)));
  }

  return `
    <div>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="h5 fw-bold text-dark mb-0">${onlyShortlist ? 'Shortlisted Candidates' : 'Candidate Review Pool'}</h2>
        <span class="text-muted small">Showing ${displayCandidates.length} candidate applications</span>
      </div>

      ${displayCandidates.length > 0 ? `
        <div class="card tm-card border-0 shadow-sm overflow-hidden">
          <div class="table-responsive">
            <table class="table table-hover align-middle mb-0">
              <thead class="table-light">
                <tr class="small text-muted text-uppercase">
                  <th class="ps-4">Candidate</th>
                  <th>Applying For</th>
                  <th>Skills Profile</th>
                  <th>Skill Match %</th>
                  <th>Review Status</th>
                  <th class="text-end pe-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                ${displayCandidates.map(c => {
                  const targetJob = jobs.find(j => j.id === c.jobId) || jobs[0];
                  const m = calculateMatch(c.skills, targetJob.requiredSkills);
                  const isStarred = shortlist && shortlist.includes(c.id);

                  return `
                    <tr>
                      <td class="ps-4">
                        <div class="d-flex align-items-center gap-2.5">
                          <div class="tm-avatar-circle" style="width:36px; height:36px; font-size:0.85rem;">
                            ${(c.displayName || 'C')[0]}
                          </div>
                          <div>
                            <strong class="text-dark d-block">${esc(c.displayName)}</strong>
                            <span class="text-muted small">${esc(c.education || 'Computer Science Graduate')}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <strong class="text-dark small d-block">${esc(targetJob.title)}</strong>
                        <span class="text-muted small">${esc(targetJob.company)}</span>
                      </td>
                      <td>
                        <div class="d-flex flex-wrap gap-1" style="max-width: 220px;">
                          ${c.skills.slice(0, 3).map(s => `<span class="badge bg-light text-dark border rounded-pill" style="font-size:0.7rem;">${esc(s)}</span>`).join("")}
                          ${c.skills.length > 3 ? `<span class="badge bg-light text-muted border rounded-pill" style="font-size:0.7rem;">+${c.skills.length - 3}</span>` : ""}
                        </div>
                      </td>
                      <td>
                        <div class="d-flex align-items-center gap-2">
                          ${scoreBadge(m)}
                        </div>
                      </td>
                      <td>
                        <select class="form-select form-select-sm rounded-pill status-changer-select" data-cand-id="${c.id}" style="width: 140px; font-size:0.8rem;">
                          ${STATUSES.map(s => `
                            <option value="${s}" ${c.reviewStatus === s ? 'selected' : ''}>${s}</option>
                          `).join("")}
                        </select>
                      </td>
                      <td class="text-end pe-4">
                        <div class="btn-group btn-group-sm">
                          <button type="button" class="btn btn-sm ${isStarred ? 'btn-warning text-dark' : 'btn-outline-secondary'}" data-action="toggle-candidate-star" data-cand-id="${c.id}" title="${isStarred ? 'Starred' : 'Star Candidate'}">
                            <i class="bi ${isStarred ? 'bi-star-fill' : 'bi-star'}"></i>
                          </button>
                          <button type="button" class="btn btn-outline-primary btn-sm" data-action="view-candidate-profile" data-cand-id="${c.id}">
                            View Profile
                          </button>
                        </div>
                      </td>
                    </tr>
                  `;
                }).join("")}
              </tbody>
            </table>
          </div>
        </div>
      ` : `
        <div class="card tm-card border-0 shadow-sm p-5 text-center">
          <i class="bi bi-people display-4 text-muted mb-3 d-block"></i>
          <h3 class="h5 fw-bold text-dark mb-1">No Candidates in this Stage</h3>
          <p class="text-muted small mb-0">Candidate submissions for your posted roles will appear here for review.</p>
        </div>
      `}
    </div>
  `;
}

function viewCandidateModal(candId) {
  const cand = candidates.find(c => c.id === candId) || candidates[0];
  const targetJob = jobs.find(j => j.id === cand.jobId) || jobs[0];
  const m = calculateMatch(cand.skills, targetJob.requiredSkills);

  const modalHtml = `
    <div class="modal fade show d-block" id="candidate-detail-modal" tabindex="-1" style="background: rgba(15, 23, 42, 0.65);" aria-modal="true" role="dialog">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          <div class="modal-header border-0 bg-primary text-white p-4">
            <div class="d-flex align-items-center gap-3">
              <div class="tm-avatar-circle" style="width:52px; height:52px; font-size:1.4rem; background:rgba(255,255,255,0.2); border:2px solid #FFFFFF;">
                ${(cand.displayName || 'C')[0]}
              </div>
              <div>
                <h2 class="h5 fw-bold mb-0 text-white">${esc(cand.displayName)}</h2>
                <span class="text-white-50 small">Applied for ${esc(targetJob.title)} @ ${esc(targetJob.company)}</span>
              </div>
            </div>
            <button type="button" class="btn-close btn-close-white" data-action="close-modal" aria-label="Close"></button>
          </div>

          <div class="modal-body p-4">
            <!-- Review Stage & Match Strip -->
            <div class="d-flex justify-content-between align-items-center p-3 rounded-3 bg-light border mb-4 flex-wrap gap-2">
              <div>
                <span class="text-muted small d-block">Review Stage:</span>
                <span class="badge bg-primary rounded-pill px-3 py-1.5 fw-semibold">${esc(cand.reviewStatus)}</span>
              </div>
              <div>
                <span class="text-muted small d-block">Skill Compatibility Score:</span>
                ${scoreBadge(m)}
              </div>
              <div>
                <button type="button" class="btn btn-outline-danger btn-sm rounded-pill" onclick="toast('Demo Candidate Resume Downloaded: ${cand.displayName.replace(/\s+/g, '_')}_CV.pdf', 'success')">
                  <i class="bi bi-file-earmark-pdf me-1"></i> Download Resume
                </button>
              </div>
            </div>

            <!-- Candidate Background Details -->
            <h3 class="h6 fw-bold text-dark mb-2">Education &amp; Credentials</h3>
            <p class="text-muted small mb-4">${esc(cand.education || 'B.Tech in Computer Science & Engineering')}</p>

            <h3 class="h6 fw-bold text-dark mb-2">Experience History</h3>
            <p class="text-muted small mb-4">${esc(cand.experience || 'Previous software engineering internships and web development coursework.')}</p>

            <!-- Skills Breakdown for Applied Role -->
            <h3 class="h6 fw-bold text-dark mb-2">Technical Skills Breakdown</h3>
            <div class="d-flex flex-wrap gap-1.5 mb-4">
              ${cand.skills.map(s => {
                const isReq = targetJob.requiredSkills.map(x => x.toLowerCase()).includes(s.toLowerCase());
                return `
                  <span class="badge ${isReq ? 'bg-success-subtle text-success border border-success' : 'bg-light text-muted border'} rounded-pill px-2.5 py-1">
                    ${isReq ? '✓ Required: ' : ''}${esc(s)}
                  </span>
                `;
              }).join("")}
            </div>

            <!-- Recruiter Notes -->
            <div class="p-3 bg-light-subtle rounded-3 border">
              <label class="form-label small fw-semibold text-dark mb-1">Recruiter Internal Assessment Notes:</label>
              <textarea class="form-control form-control-sm" rows="2" id="cand-internal-note" placeholder="Add confidential review observations...">${esc(cand.note || '')}</textarea>
            </div>
          </div>

          <div class="modal-footer border-0 bg-light p-3 px-4 d-flex justify-content-between">
            <button type="button" class="btn btn-secondary btn-sm rounded-pill px-4" data-action="close-modal">Close</button>
            <button type="button" class="btn btn-primary btn-sm rounded-pill px-4 fw-semibold" onclick="const n=$('#cand-internal-note'); if(n){ cand.note=n.value; save(KEYS.candidates, candidates); toast('Candidate review notes saved!', 'success'); }">
              Save Notes
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  $("#modal-container").innerHTML = modalHtml;
}

function openPostJobModal() {
  const modalHtml = `
    <div class="modal fade show d-block" id="post-job-modal" tabindex="-1" style="background: rgba(15, 23, 42, 0.65);" aria-modal="true" role="dialog">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          <div class="modal-header border-0 bg-primary text-white p-3 px-4">
            <h2 class="h6 fw-bold mb-0 text-white d-flex align-items-center gap-2">
              <i class="bi bi-briefcase-fill"></i> Publish New Opportunity
            </h2>
            <button type="button" class="btn-close btn-close-white" data-action="close-modal" aria-label="Close"></button>
          </div>

          <form id="post-job-form">
            <div class="modal-body p-4" style="max-height: 70vh; overflow-y: auto;">
              <div class="row g-3">
                <div class="col-md-7">
                  <label class="form-label small fw-semibold">Job Title *</label>
                  <input type="text" class="form-control" id="pj-title" placeholder="e.g. Senior Frontend Engineer" required>
                </div>
                <div class="col-md-5">
                  <label class="form-label small fw-semibold">Company Name *</label>
                  <input type="text" class="form-control" id="pj-company" placeholder="e.g. Google, Microsoft, Meta" value="${esc(session && session.company ? session.company : 'Google')}" required>
                </div>

                <div class="col-md-4">
                  <label class="form-label small fw-semibold">Job Type</label>
                  <select class="form-select" id="pj-type">
                    <option value="Full-time">Full-time</option>
                    <option value="Internship">Internship</option>
                    <option value="Contract">Contract</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label class="form-label small fw-semibold">Workplace Mode</label>
                  <select class="form-select" id="pj-workplace">
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="On-site">On-site</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label class="form-label small fw-semibold">Experience Level</label>
                  <select class="form-select" id="pj-level">
                    <option value="Entry Level">Entry Level</option>
                    <option value="Mid Level" selected>Mid Level</option>
                    <option value="Senior Level">Senior Level</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div class="col-md-6">
                  <label class="form-label small fw-semibold">Location (City, Country)</label>
                  <input type="text" class="form-control" id="pj-location" placeholder="e.g. Bengaluru, India" value="Bengaluru" required>
                </div>
                <div class="col-md-6">
                  <label class="form-label small fw-semibold">Salary / Stipend Range</label>
                  <input type="text" class="form-control" id="pj-salary" placeholder="e.g. $130,000 - $160,000 or $3,500/mo" value="$120,000 - $150,000" required>
                </div>

                <div class="col-12">
                  <label class="form-label small fw-semibold">Required Technical Skills (Comma-separated) *</label>
                  <input type="text" class="form-control" id="pj-skills" placeholder="e.g. HTML, CSS, JavaScript, React, TypeScript" required>
                  <span class="text-muted" style="font-size:0.75rem;">Skills entered will power the mathematical match engine for applicants.</span>
                </div>

                <div class="col-12">
                  <label class="form-label small fw-semibold">Job Description *</label>
                  <textarea class="form-control" rows="3" id="pj-description" placeholder="Describe the mission, scope, and impact of this role..." required></textarea>
                </div>

                <div class="col-md-6">
                  <label class="form-label small fw-semibold">Application Deadline</label>
                  <input type="date" class="form-control" id="pj-deadline" value="2026-12-31">
                </div>
              </div>
            </div>

            <div class="modal-footer border-0 bg-light p-3 px-4">
              <button type="button" class="btn btn-secondary btn-sm rounded-pill px-4" data-action="close-modal">Cancel</button>
              <button type="submit" class="btn btn-primary btn-sm rounded-pill px-4 fw-semibold shadow">Publish Opportunity</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  $("#modal-container").innerHTML = modalHtml;
}



// ============ 10. PHASE 9: ADMIN PANEL ============

function viewAdmin(subTab) {
  if (!subTab) {
    const hash = location.hash.replace(/^#\/?/, "");
    if (hash.includes("users")) subTab = "users";
    else if (hash.includes("jobs")) subTab = "jobs";
    else if (hash.includes("companies")) subTab = "companies";
    else if (hash.includes("applications")) subTab = "applications";
    else if (hash.includes("settings")) subTab = "settings";
    else subTab = "overview";
  }

  // Admin platform KPIs
  const totalUsers = users ? users.length : 0;
  const totalCandidates = users ? users.filter(u => u.role === "candidate").length : 0;
  const totalRecruiters = users ? users.filter(u => u.role === "recruiter").length : 0;
  const totalCompaniesCount = Object.keys(COMPANY_PROFILES).length;
  const totalJobsCount = jobs ? jobs.length : 0;
  const totalActiveJobs = jobs ? jobs.filter(j => j.active !== false).length : 0;
  const totalAppsCount = (applications ? applications.length : 0) + (candidates ? candidates.length : 0);

  return `
    <div class="container py-3">
      <!-- Admin Workspace Header -->
      <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
        <div>
          <span class="badge bg-danger-subtle text-danger border border-danger rounded-pill px-3 py-1 fw-semibold mb-1">
            <i class="bi bi-shield-lock-fill me-1"></i> Platform Administration &amp; Governance
          </span>
          <h1 class="h3 fw-bold text-dark mb-0">System Control Center</h1>
          <p class="text-muted small mb-0">Manage platform users, verify listings, audit applications, and monitor platform health.</p>
        </div>
        <div>
          <button type="button" class="btn btn-outline-danger btn-sm rounded-pill px-3 fw-semibold" data-action="ask-reset">
            <i class="bi bi-arrow-counterclockwise me-1"></i> Reset Platform Data
          </button>
        </div>
      </div>



      <!-- Admin KPIs Overview Cards -->
      <div class="row g-2.5 mb-4">
        <div class="col-lg-2 col-md-4 col-6">
          <div class="card tm-card border-0 shadow-sm p-3 text-center">
            <span class="text-muted small d-block mb-1">Registered Users</span>
            <div class="h4 fw-bold text-dark mb-0">${totalUsers}</div>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <div class="card tm-card border-0 shadow-sm p-3 text-center">
            <span class="text-muted small d-block mb-1">Candidates</span>
            <div class="h4 fw-bold text-primary mb-0">${totalCandidates}</div>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <div class="card tm-card border-0 shadow-sm p-3 text-center">
            <span class="text-muted small d-block mb-1">Recruiters</span>
            <div class="h4 fw-bold text-info mb-0">${totalRecruiters}</div>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <div class="card tm-card border-0 shadow-sm p-3 text-center">
            <span class="text-muted small d-block mb-1">Companies</span>
            <div class="h4 fw-bold text-dark mb-0">${totalCompaniesCount}</div>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <div class="card tm-card border-0 shadow-sm p-3 text-center">
            <span class="text-muted small d-block mb-1">Active Jobs</span>
            <div class="h4 fw-bold text-success mb-0">${totalActiveJobs}</div>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <div class="card tm-card border-0 shadow-sm p-3 text-center">
            <span class="text-muted small d-block mb-1">Applications</span>
            <div class="h4 fw-bold text-warning-emphasis mb-0">${totalAppsCount}</div>
          </div>
        </div>
      </div>

      <!-- Admin Subtabs Pill Bar -->
      <ul class="nav nav-pills tm-card p-1.5 bg-white border-0 shadow-sm rounded-pill mb-4" role="tablist">
        <li class="nav-item flex-fill text-center">
          <a class="nav-link rounded-pill py-2 fw-semibold ${subTab === 'overview' || subTab === 'users' ? 'active bg-danger text-white' : ''}" href="#/admin/users">
            <i class="bi bi-people me-1"></i> User Accounts (${users.length})
          </a>
        </li>
        <li class="nav-item flex-fill text-center">
          <a class="nav-link rounded-pill py-2 fw-semibold ${subTab === 'jobs' ? 'active bg-danger text-white' : ''}" href="#/admin/jobs">
            <i class="bi bi-briefcase me-1"></i> Platform Jobs (${jobs.length})
          </a>
        </li>
        <li class="nav-item flex-fill text-center">
          <a class="nav-link rounded-pill py-2 fw-semibold ${subTab === 'companies' ? 'active bg-danger text-white' : ''}" href="#/admin/companies">
            <i class="bi bi-building me-1"></i> Companies (${totalCompaniesCount})
          </a>
        </li>
        <li class="nav-item flex-fill text-center">
          <a class="nav-link rounded-pill py-2 fw-semibold ${subTab === 'applications' ? 'active bg-danger text-white' : ''}" href="#/admin/applications">
            <i class="bi bi-send-check me-1"></i> All Applications (${totalAppsCount})
          </a>
        </li>
        <li class="nav-item flex-fill text-center">
          <a class="nav-link rounded-pill py-2 fw-semibold ${subTab === 'settings' ? 'active bg-danger text-white' : ''}" href="#/admin/settings">
            <i class="bi bi-sliders me-1"></i> Maintenance
          </a>
        </li>
      </ul>

      <!-- Subtab Content Body -->
      ${
        subTab === 'jobs' ? renderAdminJobsTab() :
        subTab === 'companies' ? renderAdminCompaniesTab() :
        subTab === 'applications' ? renderAdminApplicationsTab() :
        subTab === 'settings' ? renderAdminSettingsTab() :
        renderAdminUsersTab()
      }
    </div>
  `;
}

function renderAdminUsersTab() {
  return `
    <div>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="h5 fw-bold text-dark mb-0">Registered User Accounts</h2>
        <span class="text-muted small">Showing ${users.length} total platform accounts</span>
      </div>

      <div class="card tm-card border-0 shadow-sm overflow-hidden">
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead class="table-light">
              <tr class="small text-muted text-uppercase">
                <th class="ps-4">User</th>
                <th>Role</th>
                <th>Affiliation / Title</th>
                <th>Status</th>
                <th>Joined Date</th>
                <th class="text-end pe-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${users.map(u => `
                <tr>
                  <td class="ps-4">
                    <div class="d-flex align-items-center gap-2.5">
                      <div class="tm-avatar-circle" style="width:34px; height:34px; font-size:0.8rem; background:${u.role === 'admin' ? '#EF4444' : u.role === 'recruiter' ? '#0284C7' : '#2563EB'};">
                        ${(u.name || 'U')[0]}
                      </div>
                      <div>
                        <strong class="text-dark d-block">${esc(u.name)}</strong>
                        <span class="text-muted small">${esc(u.email)}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="badge ${u.role === 'admin' ? 'bg-danger-subtle text-danger border-danger' : u.role === 'recruiter' ? 'bg-info-subtle text-info border-info' : 'bg-primary-subtle text-primary border-primary'} rounded-pill text-uppercase" style="font-size:0.7rem;">
                      ${esc(u.role)}
                    </span>
                  </td>
                  <td class="small text-muted">
                    ${esc(u.company ? `${u.company} (${u.headline})` : u.headline)}
                  </td>
                  <td>
                    <span class="badge ${u.status === 'active' ? 'bg-success-subtle text-success border border-success' : 'bg-secondary-subtle text-secondary'} rounded-pill">
                      ${u.status === 'active' ? 'Active' : 'Suspended'}
                    </span>
                  </td>
                  <td class="small text-muted">
                    ${esc(u.joinedDate || '2026-10-15')}
                  </td>
                  <td class="text-end pe-4">
                    <div class="btn-group btn-group-sm">
                      <button type="button" class="btn btn-outline-secondary" data-action="toggle-user-status" data-user-id="${u.id}" title="Toggle Active / Suspended">
                        <i class="bi ${u.status === 'active' ? 'bi-person-slash' : 'bi-person-check'}"></i>
                      </button>
                      <button type="button" class="btn btn-outline-danger" data-action="delete-user" data-user-id="${u.id}" title="Delete User">
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderAdminJobsTab() {
  return `
    <div>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="h5 fw-bold text-dark mb-0">Platform Job Moderation</h2>
        <span class="text-muted small">${jobs.length} total listings</span>
      </div>

      <div class="card tm-card border-0 shadow-sm overflow-hidden">
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead class="table-light">
              <tr class="small text-muted text-uppercase">
                <th class="ps-4">Title &amp; Company</th>
                <th>Type</th>
                <th>Location</th>
                <th>Compensation</th>
                <th>Status</th>
                <th class="text-end pe-4">Moderation</th>
              </tr>
            </thead>
            <tbody>
              ${jobs.map(j => `
                <tr>
                  <td class="ps-4">
                    <div class="d-flex align-items-center gap-2.5">
                      ${companyBadge(j.company, 30)}
                      <div>
                        <strong class="text-dark d-block">${esc(j.title)}</strong>
                        <span class="text-muted small">${esc(j.company)}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="badge ${j.jobType === 'Internship' ? 'bg-success-subtle text-success' : 'bg-primary-subtle text-primary'} rounded-pill">
                      ${esc(j.jobType)}
                    </span>
                  </td>
                  <td class="small text-muted">${esc(j.location)} (${esc(j.workplaceType || 'Hybrid')})</td>
                  <td class="small text-success fw-semibold">${esc(j.salary)}</td>
                  <td>
                    <span class="badge ${j.active !== false ? 'bg-success-subtle text-success border border-success' : 'bg-secondary-subtle text-secondary'} rounded-pill">
                      ${j.active !== false ? 'Active' : 'Deactivated'}
                    </span>
                  </td>
                  <td class="text-end pe-4">
                    <div class="btn-group btn-group-sm">
                      <button type="button" class="btn btn-outline-secondary" data-action="toggle-job-status" data-job-id="${j.id}" title="Toggle Active/Deactivated">
                        <i class="bi ${j.active !== false ? 'bi-eye-slash' : 'bi-eye'}"></i>
                      </button>
                      <button type="button" class="btn btn-outline-danger" data-action="delete-job" data-job-id="${j.id}" title="Remove Listing">
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderAdminCompaniesTab() {
  const companiesList = Object.values(COMPANY_PROFILES);

  return `
    <div>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="h5 fw-bold text-dark mb-0">Verified Tech Organizations</h2>
        <span class="text-muted small">${companiesList.length} registered tech giants</span>
      </div>

      <div class="card tm-card border-0 shadow-sm overflow-hidden">
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead class="table-light">
              <tr class="small text-muted text-uppercase">
                <th class="ps-4">Company</th>
                <th>Industry Sector</th>
                <th>Headquarters</th>
                <th>Team Scale</th>
                <th>Openings</th>
                <th class="text-end pe-4">Directory</th>
              </tr>
            </thead>
            <tbody>
              ${companiesList.map(comp => {
                const openings = jobs.filter(j => j.company.toLowerCase() === comp.name.toLowerCase()).length;
                return `
                  <tr>
                    <td class="ps-4">
                      <div class="d-flex align-items-center gap-2.5">
                        ${companyBadge(comp.name, 34)}
                        <div>
                          <strong class="text-dark d-block">${esc(comp.name)}</strong>
                          <span class="text-muted small">${esc(comp.website)}</span>
                        </div>
                      </div>
                    </td>
                    <td class="small text-dark">${esc(comp.industry)}</td>
                    <td class="small text-muted">${esc(comp.headquarters)}</td>
                    <td class="small text-muted">${esc(comp.employees)}</td>
                    <td>
                      <span class="badge bg-primary-subtle text-primary border rounded-pill">
                        ${openings} Active Roles
                      </span>
                    </td>
                    <td class="text-end pe-4">
                      <button type="button" class="btn btn-outline-primary btn-sm rounded-pill px-3" data-action="view-company-modal" data-company="${comp.name}">
                        Profile
                      </button>
                    </td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderAdminApplicationsTab() {
  return `
    <div>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="h5 fw-bold text-dark mb-0">Platform Applications Audit</h2>
        <span class="text-muted small">${applications.length} candidate submissions logged</span>
      </div>

      <div class="card tm-card border-0 shadow-sm overflow-hidden">
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead class="table-light">
              <tr class="small text-muted text-uppercase">
                <th class="ps-4">Applicant</th>
                <th>Target Job &amp; Company</th>
                <th>Submission Time</th>
                <th>Compatibility</th>
                <th>Current Status</th>
                <th class="text-end pe-4">Audit</th>
              </tr>
            </thead>
            <tbody>
              ${applications.map(app => `
                <tr>
                  <td class="ps-4">
                    <strong class="text-dark d-block">${esc(app.candidateName || 'Alex Morgan')}</strong>
                    <span class="text-muted small">${esc(app.candidateEmail || 'alex.morgan@talentmatch.dev')}</span>
                  </td>
                  <td>
                    <div class="d-flex align-items-center gap-2">
                      ${companyBadge(app.company, 24)}
                      <div>
                        <strong class="text-dark small d-block">${esc(app.jobTitle)}</strong>
                        <span class="text-muted small">${esc(app.company)}</span>
                      </div>
                    </div>
                  </td>
                  <td class="small text-muted">${formatExactDate(app.appliedDate)}</td>
                  <td><span class="badge bg-light text-dark border rounded-pill">${app.matchScore || 85}%</span></td>
                  <td>
                    <span class="badge bg-primary-subtle text-primary border rounded-pill">
                      ${esc(app.status)}
                    </span>
                  </td>
                  <td class="text-end pe-4">
                    <button type="button" class="btn btn-outline-danger btn-sm rounded-pill px-2.5 py-1" data-action="withdraw-application" data-app-id="${app.id}">
                      Delete Record
                    </button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderAdminSettingsTab() {
  return `
    <div class="card tm-card border-0 shadow-sm p-4">
      <h2 class="h5 fw-bold text-dark mb-3">Platform Maintenance &amp; Factory Reset</h2>
      <p class="text-muted small mb-4">
        TalentMatch.dev is built with zero backend dependencies, persisting records entirely in browser LocalStorage. Use the controls below to verify storage utilization or reset all platform listings, candidates, and users.
      </p>

      <div class="row g-3 mb-4">
        <div class="col-md-4">
          <div class="p-3 rounded-3 bg-light border text-center">
            <span class="text-muted small d-block">Platform Release</span>
            <strong class="text-dark">v2.4.0 (Vanilla JS)</strong>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 rounded-3 bg-light border text-center">
            <span class="text-muted small d-block">Storage Engine</span>
            <strong class="text-primary">HTML5 LocalStorage</strong>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 rounded-3 bg-light border text-center">
            <span class="text-muted small d-block">Active Roles Covered</span>
            <strong class="text-success">Candidate &middot; Recruiter &middot; Admin</strong>
          </div>
        </div>
      </div>

      <div class="border-top pt-4">
        <h3 class="h6 fw-bold text-danger mb-1">Destructive Action: Reset Platform Data</h3>
        <p class="text-muted small mb-3">
          This will wipe all customized LocalStorage keys (jobs, applications, shortlist, skills, and resume) and restore pristine initial platform data.
        </p>
        <button type="button" class="btn btn-danger btn-sm rounded-pill px-4 fw-semibold shadow-sm" data-action="ask-reset">
          <i class="bi bi-arrow-counterclockwise me-1"></i> Reset All Data to Defaults
        </button>
      </div>
    </div>
  `;
}


function viewProfile() {
  const user = profile || DEFAULT_PROFILE;
  const isPublicMode = ui.profileMode === "public";
  const compMetrics = calcProfileCompletion(user);

  return `
    <div class="container py-3">
      <!-- Mode Switcher Strip (My Profile vs Public Profile View) -->
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="d-flex align-items-center gap-2">
          <span class="badge ${isPublicMode ? 'bg-info-subtle text-info border' : 'bg-primary-subtle text-primary border'} px-3 py-1.5 rounded-pill fw-semibold">
            <i class="bi ${isPublicMode ? 'bi-eye' : 'bi-pencil-square'} me-1"></i>
            ${isPublicMode ? "Public Profile Mode (How Recruiters & Connections View You)" : "My Profile (Editing & Management Mode)"}
          </span>
        </div>
        <div class="d-flex gap-2">
          <button type="button" class="btn btn-sm ${isPublicMode ? 'btn-primary' : 'btn-outline-secondary'} rounded-pill px-3" data-action="toggle-profile-mode">
            <i class="bi ${isPublicMode ? 'bi-pencil-fill' : 'bi-eye-fill'} me-1"></i>
            ${isPublicMode ? "Switch to Edit Mode" : "Preview Public View"}
          </button>
          <button type="button" class="btn btn-outline-danger btn-sm rounded-pill px-3" data-action="logout">
            <i class="bi bi-box-arrow-right me-1"></i> Log out
          </button>
        </div>
      </div>

      <div class="row g-3">
        <!-- ================= MAIN COLUMN (HEADER & SECTIONS) ================= -->
        <div class="col-lg-8">
          <!-- 1. PROFILE HEADER CARD -->
          <div class="card tm-card border-0 shadow-sm overflow-hidden mb-3">
            <!-- Cover Photo with Upload Button -->
            <div class="tm-cover-banner position-relative" style="height: 160px; background: ${user.coverUrl ? `url('${user.coverUrl}') center/cover` : 'linear-gradient(135deg, #1E1B4B, #2563EB, #7C3AED)'};">
              ${!isPublicMode ? `
                <label class="btn btn-sm btn-light position-absolute top-0 end-0 m-3 rounded-pill px-3 shadow-xs cursor-pointer" title="Change cover photo">
                  <i class="bi bi-camera-fill me-1"></i> Change Cover
                  <input type="file" id="cover-file-input" accept="image/*" class="d-none">
                </label>
              ` : ""}
            </div>

            <!-- Profile Info & Avatar -->
            <div class="p-4 pt-0 position-relative">
              <div class="d-flex flex-column flex-sm-row justify-content-between align-items-sm-end gap-3 mb-3">
                <div class="position-relative" style="margin-top: -55px;">
                  <div class="tm-avatar-lg" style="width: 110px; height: 110px; border: 4px solid #FFFFFF; font-size: 2.6rem;">
                    ${user.avatarUrl ? `<img src="${user.avatarUrl}" alt="${esc(user.displayName)}" class="w-100 h-100 rounded-circle object-fit-cover">` : (user.displayName || "A")[0]}
                  </div>
                  ${!isPublicMode ? `
                    <label class="btn btn-sm btn-primary position-absolute bottom-0 end-0 rounded-circle p-1.5 shadow-sm cursor-pointer" style="width: 32px; height: 32px; display:flex; align-items:center; justify-content:center;" title="Change profile photo">
                      <i class="bi bi-camera-fill"></i>
                      <input type="file" id="avatar-file-input" accept="image/*" class="d-none">
                    </label>
                  ` : ""}
                </div>

                <!-- Header Actions -->
                <div class="d-flex flex-wrap gap-2">
                  ${!isPublicMode ? `
                    <button type="button" class="btn btn-primary btn-sm rounded-pill px-4 shadow-xs fw-semibold" data-action="open-edit-intro-modal">
                      <i class="bi bi-pencil me-1"></i> Edit Intro
                    </button>
                    ${user.resume && user.resume.fileName ? `
                      <button type="button" class="btn btn-outline-primary btn-sm rounded-pill px-3 fw-semibold" data-action="download-resume-btn">
                        <i class="bi bi-file-earmark-pdf me-1 text-danger"></i> Resume
                      </button>
                    ` : ""}
                  ` : `
                    <button type="button" class="btn btn-primary btn-sm rounded-pill px-4 fw-semibold" onclick="this.innerHTML='<i class=\'bi bi-check2\'></i> Connected'; this.disabled=true;">
                      <i class="bi bi-person-plus me-1"></i> Connect
                    </button>
                    
                  `}
                </div>
              </div>

              <!-- Name & Headline -->
              <h1 class="h4 fw-bold text-dark mb-1 d-flex align-items-center gap-2">
                <span>${esc(user.displayName)}</span>
                <i class="bi bi-patch-check-fill text-primary fs-6" title="Verified Candidate Profile"></i>
              </h1>
              
              <p class="text-dark fw-medium small mb-2">${esc(user.headline || "Full-Stack Software Engineer | Modern Web & AI")}</p>

              <div class="text-muted small d-flex flex-wrap gap-2 mb-3">
                <span><i class="bi bi-geo-alt"></i> ${esc(user.location || "San Francisco, CA & Remote")}</span>
                <span>&middot;</span>
                <span class="text-primary fw-semibold"><i class="bi bi-patch-check"></i> Verified Profile</span>
                <span>&middot;</span>
                <span><i class="bi bi-envelope"></i> ${esc(user.email || "alex.morgan@talentmatch.dev")}</span>
              </div>

              <div class="p-2.5 rounded-3 bg-light border d-inline-flex align-items-center gap-2 small">
                <span class="badge bg-success text-white rounded-pill px-2 py-1">Open to Work</span>
                <span class="text-muted">Software Engineer, Frontend Developer, Full-Stack Roles</span>
              </div>
            </div>
          </div>

          <!-- 2. ABOUT SECTION -->
          <div class="card tm-card border-0 shadow-sm p-4 mb-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h2 class="h5 fw-bold text-dark mb-0">About</h2>
              ${!isPublicMode ? `
                <button type="button" class="btn btn-sm btn-light border rounded-pill px-3" data-action="open-edit-about-modal">
                  <i class="bi bi-pencil me-1"></i> Edit
                </button>
              ` : ""}
            </div>
            <p class="text-muted small mb-0 whitespace-pre-line leading-relaxed">${esc(user.about || "No summary added yet. Add a short summary highlighting your passion, experience, and key strengths.")}</p>
          </div>

          <!-- 3. EXPERIENCE SECTION -->
          <div class="card tm-card border-0 shadow-sm p-4 mb-3">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h2 class="h5 fw-bold text-dark mb-0">Experience</h2>
              ${!isPublicMode ? `
                <button type="button" class="btn btn-sm btn-outline-primary rounded-pill px-3" data-action="open-add-exp-modal">
                  <i class="bi bi-plus-lg me-1"></i> Add Experience
                </button>
              ` : ""}
            </div>

            <div class="d-flex flex-column gap-3">
              ${(user.experience || []).length ? user.experience.map((exp, idx) => `
                <div class="d-flex justify-content-between align-items-start gap-2 pb-3 ${idx < user.experience.length - 1 ? 'border-bottom' : ''}">
                  <div class="d-flex align-items-start gap-3">
                    <div class="p-2 rounded-3 bg-light border text-primary fs-4" style="width: 44px; height: 44px; display:flex; align-items:center; justify-content:center;">
                      <i class="bi bi-briefcase-fill"></i>
                    </div>
                    <div>
                      <h3 class="h6 fw-bold mb-0 text-dark">${esc(exp.role)}</h3>
                      <div class="text-muted small">${esc(exp.company)} &middot; ${esc(exp.type || "Full-time")}</div>
                      <div class="text-muted small">${esc(exp.startDate || "")} - ${esc(exp.endDate || "Present")} &middot; ${esc(exp.location || "")}</div>
                      ${exp.desc ? `<p class="text-secondary small mt-1.5 mb-0">${esc(exp.desc)}</p>` : ""}
                    </div>
                  </div>
                  ${!isPublicMode ? `
                    <button type="button" class="btn btn-sm text-danger border-0 p-1" data-action="delete-exp-item" data-id="${exp.id || idx}" title="Delete experience">
                      <i class="bi bi-trash3"></i>
                    </button>
                  ` : ""}
                </div>
              `).join("") : `<p class="text-muted small mb-0">No experience added yet.</p>`}
            </div>
          </div>

          <!-- 4. EDUCATION SECTION -->
          <div class="card tm-card border-0 shadow-sm p-4 mb-3">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h2 class="h5 fw-bold text-dark mb-0">Education</h2>
              ${!isPublicMode ? `
                <button type="button" class="btn btn-sm btn-outline-primary rounded-pill px-3" data-action="open-add-edu-modal">
                  <i class="bi bi-plus-lg me-1"></i> Add Education
                </button>
              ` : ""}
            </div>

            <div class="d-flex flex-column gap-3">
              ${(user.education || []).length ? user.education.map((edu, idx) => `
                <div class="d-flex justify-content-between align-items-start gap-2 pb-3 ${idx < user.education.length - 1 ? 'border-bottom' : ''}">
                  <div class="d-flex align-items-start gap-3">
                    <div class="p-2 rounded-3 bg-light border text-primary fs-4" style="width: 44px; height: 44px; display:flex; align-items:center; justify-content:center;">
                      <i class="bi bi-mortarboard-fill"></i>
                    </div>
                    <div>
                      <h3 class="h6 fw-bold mb-0 text-dark">${esc(edu.school)}</h3>
                      <div class="text-muted small">${esc(edu.degree)} ${edu.field ? `&middot; ${esc(edu.field)}` : ""}</div>
                      <div class="text-muted small">${esc(edu.startYear || "")} - ${esc(edu.endYear || "")}</div>
                      ${edu.desc ? `<p class="text-secondary small mt-1.5 mb-0">${esc(edu.desc)}</p>` : ""}
                    </div>
                  </div>
                  ${!isPublicMode ? `
                    <button type="button" class="btn btn-sm text-danger border-0 p-1" data-action="delete-edu-item" data-id="${edu.id || idx}" title="Delete education">
                      <i class="bi bi-trash3"></i>
                    </button>
                  ` : ""}
                </div>
              `).join("") : `<p class="text-muted small mb-0">No education added yet.</p>`}
            </div>
          </div>

          <!-- 5. SKILLS SECTION -->
          <div class="card tm-card border-0 shadow-sm p-4 mb-3" id="skills-section">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h2 class="h5 fw-bold text-dark mb-0">Skills &amp; Expertise</h2>
            </div>
            <p class="text-muted small mb-3">Skills directly influence your explainable AI match percentage across all open roles.</p>

            ${!isPublicMode ? `
              <!-- Inline Add Skill Form -->
              <div class="input-group input-group-sm mb-3">
                <input type="text" id="new-skill-input" class="form-control" placeholder="Add a new skill (e.g. TypeScript, Docker, GraphQL)...">
                <button class="btn btn-primary px-3" data-action="add-single-skill"><i class="bi bi-plus-lg me-1"></i> Add Skill</button>
              </div>
            ` : ""}

            <div class="d-flex flex-wrap gap-2">
              ${(user.skills || []).map(s => `
                <span class="badge bg-light text-dark border px-3 py-2 rounded-pill d-inline-flex align-items-center gap-1.5 fs-7 shadow-xs">
                  <span>${esc(s)}</span>
                  ${!isPublicMode ? `
                    <button type="button" class="btn-close p-0 ms-1" style="font-size:0.65rem;" data-action="remove-skill-tag" data-skill="${esc(s)}" aria-label="Remove skill"></button>
                  ` : ""}
                </span>
              `).join("")}
            </div>
          </div>

          <!-- 6. PROJECTS SECTION -->
          <div class="card tm-card border-0 shadow-sm p-4 mb-3">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h2 class="h5 fw-bold text-dark mb-0">Projects</h2>
              ${!isPublicMode ? `
                <button type="button" class="btn btn-sm btn-outline-primary rounded-pill px-3" data-action="open-add-proj-modal">
                  <i class="bi bi-plus-lg me-1"></i> Add Project
                </button>
              ` : ""}
            </div>

            <div class="row g-3">
              ${(user.projects || []).length ? user.projects.map((proj, idx) => `
                <div class="col-md-6">
                  <div class="card h-100 border rounded-3 p-3 bg-light d-flex flex-column justify-content-between">
                    <div>
                      <div class="d-flex justify-content-between align-items-start gap-1 mb-1">
                        <h3 class="h6 fw-bold mb-0 text-dark">${esc(proj.title)}</h3>
                        ${!isPublicMode ? `
                          <button type="button" class="btn btn-sm text-danger border-0 p-0" data-action="delete-proj-item" data-id="${proj.id || idx}">
                            <i class="bi bi-trash3"></i>
                          </button>
                        ` : ""}
                      </div>
                      <p class="text-muted small mb-2">${esc(proj.desc)}</p>
                      <div class="d-flex flex-wrap gap-1 mb-3">
                        ${(proj.techs || []).map(t => `<span class="badge bg-white text-secondary border small">${esc(t)}</span>`).join("")}
                      </div>
                    </div>
                    <div class="d-flex gap-2 pt-2 border-top">
                      ${proj.githubUrl ? `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-dark rounded-pill py-0.5 px-2.5 small"><i class="bi bi-github me-1"></i> Code</a>` : ""}
                      ${proj.liveUrl ? `<a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary rounded-pill py-0.5 px-2.5 small"><i class="bi bi-box-arrow-up-right me-1"></i> Live Demo</a>` : ""}
                    </div>
                  </div>
                </div>
              `).join("") : `<div class="col-12"><p class="text-muted small mb-0">No projects added yet.</p></div>`}
            </div>
          </div>

          <!-- 7. CERTIFICATIONS & ACHIEVEMENTS -->
          <div class="card tm-card border-0 shadow-sm p-4 mb-3">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h2 class="h5 fw-bold text-dark mb-0">Certifications &amp; Achievements</h2>
              ${!isPublicMode ? `
                <div class="d-flex gap-2">
                  <button type="button" class="btn btn-sm btn-outline-primary rounded-pill px-3" data-action="open-add-cert-modal">
                    <i class="bi bi-plus-lg me-1"></i> Add Cert
                  </button>
                  <button type="button" class="btn btn-sm btn-outline-purple rounded-pill px-3" data-action="open-add-ach-modal">
                    <i class="bi bi-plus-lg me-1"></i> Add Achievement
                  </button>
                </div>
              ` : ""}
            </div>

            <!-- Certifications List -->
            <h3 class="h6 fw-semibold text-secondary mb-2">Licenses &amp; Certifications</h3>
            <div class="d-flex flex-column gap-2 mb-4">
              ${(user.certifications || []).length ? user.certifications.map((cert, idx) => `
                <div class="p-2.5 rounded-3 bg-light border d-flex justify-content-between align-items-center flex-wrap gap-2">
                  <div>
                    <strong class="text-dark small d-block">${esc(cert.name)}</strong>
                    <span class="text-muted small">${esc(cert.org)} &middot; Issued ${esc(cert.issueDate || "2024")}</span>
                  </div>
                  <div class="d-flex align-items-center gap-2">
                    ${cert.credentialUrl ? `<a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-secondary rounded-pill py-0.5 px-2.5 small">Show Credential</a>` : ""}
                    ${!isPublicMode ? `
                      <button type="button" class="btn btn-sm text-danger border-0 p-1" data-action="delete-cert-item" data-id="${cert.id || idx}"><i class="bi bi-trash3"></i></button>
                    ` : ""}
                  </div>
                </div>
              `).join("") : `<p class="text-muted small">No certifications listed.</p>`}
            </div>

            <!-- Achievements List -->
            <h3 class="h6 fw-semibold text-secondary mb-2">Honors &amp; Awards</h3>
            <div class="d-flex flex-column gap-2">
              ${(user.achievements || []).length ? user.achievements.map((ach, idx) => `
                <div class="p-2.5 rounded-3 bg-light border d-flex justify-content-between align-items-center flex-wrap gap-2">
                  <div>
                    <strong class="text-dark small d-block"><i class="bi bi-trophy-fill text-warning me-1"></i>${esc(ach.title)}</strong>
                    <span class="text-muted small">${esc(ach.desc || "")} &middot; ${esc(ach.date || "")}</span>
                  </div>
                  ${!isPublicMode ? `
                    <button type="button" class="btn btn-sm text-danger border-0 p-1" data-action="delete-ach-item" data-id="${ach.id || idx}"><i class="bi bi-trash3"></i></button>
                  ` : ""}
                </div>
              `).join("") : `<p class="text-muted small mb-0">No achievements listed.</p>`}
            </div>
          </div>
        </div>

        <!-- ================= SIDEBAR COLUMN ================= -->
        <div class="col-lg-4">
          <!-- RESUME MANAGEMENT CARD -->
          <div class="card tm-card border-0 shadow-sm p-4 mb-3">
            <h3 class="h6 fw-bold text-dark mb-2 d-flex align-items-center gap-1.5">
              <i class="bi bi-file-earmark-pdf-fill text-danger fs-5"></i> Resume Management
            </h3>
            <p class="text-muted small mb-3">Your uploaded resume is accessible when applying to verified tech roles.</p>

            ${user.resume && user.resume.fileName ? `
              <div class="p-3 rounded-3 bg-light border mb-3">
                <div class="d-flex align-items-center gap-2 mb-1">
                  <i class="bi bi-file-pdf text-danger fs-4"></i>
                  <div class="line-clamp-1">
                    <strong class="text-dark small d-block text-truncate">${esc(user.resume.fileName)}</strong>
                    <span class="text-muted" style="font-size:0.75rem;">${esc(user.resume.fileSize)} &middot; Uploaded ${esc(user.resume.uploadDate)}</span>
                  </div>
                </div>
              </div>

              <div class="d-flex flex-column gap-2">
                <button type="button" class="btn btn-primary btn-sm rounded-pill w-100 fw-semibold" data-action="download-resume-btn">
                  <i class="bi bi-download me-1"></i> Download Resume
                </button>
                ${!isPublicMode ? `
                  <div class="d-flex gap-2">
                    <label class="btn btn-outline-secondary btn-sm rounded-pill w-100 cursor-pointer mb-0">
                      <i class="bi bi-arrow-repeat me-1"></i> Replace
                      <input type="file" id="resume-file-input" accept=".pdf,.doc,.docx" class="d-none">
                    </label>
                    <button type="button" class="btn btn-outline-danger btn-sm rounded-pill w-100" data-action="delete-resume-btn">
                      <i class="bi bi-trash3 me-1"></i> Delete
                    </button>
                  </div>
                ` : ""}
              </div>
            ` : `
              <div class="p-3 text-center rounded-3 border border-dashed mb-3 bg-light">
                <i class="bi bi-cloud-arrow-up text-primary fs-3 d-block mb-1"></i>
                <span class="text-dark small fw-semibold d-block">No resume uploaded</span>
                <span class="text-muted small" style="font-size:0.75rem;">Upload PDF or DOCX up to 3MB</span>
              </div>
              ${!isPublicMode ? `
                <label class="btn btn-primary btn-sm rounded-pill w-100 cursor-pointer mb-0">
                  <i class="bi bi-upload me-1"></i> Upload Resume
                  <input type="file" id="resume-file-input" accept=".pdf,.doc,.docx" class="d-none">
                </label>
              ` : ""}
            `}
          </div>

          <!-- PROFILE COMPLETION WIDGET -->
          <div class="card tm-card border-0 shadow-sm p-4 mb-3">
            <h3 class="h6 fw-bold text-dark mb-2 d-flex justify-content-between align-items-center">
              <span>Profile Strength</span>
              <span class="text-primary">${compMetrics.score}%</span>
            </h3>

            <div class="progress mb-3" style="height: 8px;" role="progressbar" aria-valuenow="${compMetrics.score}" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-primary" style="width: ${compMetrics.score}%;"></div>
            </div>

            <h4 class="small fw-semibold text-secondary mb-2" style="font-size:0.75rem;">Profile Breakdown:</h4>
            <div class="d-flex flex-column gap-1.5 small mb-3">
              ${compMetrics.checklist.map(item => `
                <div class="d-flex justify-content-between align-items-center">
                  <span class="${item.done ? 'text-dark' : 'text-muted'}">
                    <i class="bi ${item.done ? 'bi-check-circle-fill text-success' : 'bi-circle text-muted'} me-1.5"></i>
                    ${item.label}
                  </span>
                  <span class="badge ${item.done ? 'bg-success-subtle text-success' : 'bg-light text-muted border'} small">${item.weight}%</span>
                </div>
              `).join("")}
            </div>

            ${compMetrics.pending.length && !isPublicMode ? `
              <button class="btn btn-light btn-sm rounded-pill w-100 text-primary fw-semibold" data-action="${compMetrics.pending[0].action || 'open-edit-intro-modal'}">
                + Complete Next: ${compMetrics.pending[0].label}
              </button>
            ` : ""}
          </div>

          <!-- PROFILE VISIBILITY SETTINGS -->
          <div class="card tm-card border-0 shadow-sm p-4">
            <h3 class="h6 fw-bold text-dark mb-2">Profile Visibility</h3>
            <p class="text-muted small mb-3">Control how hiring managers and recruiters discover your candidate profile.</p>
            <div class="form-check form-switch mb-2">
              <input class="form-check-input" type="checkbox" id="profileOpenSwitch" ${user.openToWork ? 'checked' : ''} onchange="profile.openToWork = this.checked; save(KEYS.profile, profile); toast('Profile visibility updated', 'success');">
              <label class="form-check-label small" for="profileOpenSwitch">Open to Recruiter Outreach</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="publicSearchSwitch" checked>
              <label class="form-check-label small" for="publicSearchSwitch">Index profile in TalentMatch directory</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}



function openEditIntroModal() {
  const u = profile || DEFAULT_PROFILE;
  $("#modal-container").innerHTML = `
    <div class="modal fade show d-block" id="edit-intro-modal" tabindex="-1" style="background: rgba(15,23,42,0.6); backdrop-filter: blur(4px);">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          <div class="modal-header border-0 bg-primary text-white p-3 px-4">
            <h5 class="modal-title h6 fw-semibold"><i class="bi bi-pencil-square me-2"></i>Edit Professional Intro</h5>
            <button type="button" class="btn-close btn-close-white" data-action="close-modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <div class="mb-3">
              <label class="form-label small fw-semibold text-secondary">Full Name</label>
              <input type="text" id="intro-name-input" class="form-control" value="${esc(u.displayName)}">
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold text-secondary">Professional Headline</label>
              <textarea id="intro-headline-input" class="form-control" rows="2">${esc(u.headline || "")}</textarea>
              <div class="form-text small">e.g. Full-Stack Developer | Passionate about Modern Web & AI</div>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold text-secondary">Location</label>
              <input type="text" id="intro-location-input" class="form-control" value="${esc(u.location || "")}" placeholder="City, State / Remote">
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="intro-opentowork-input" ${u.openToWork ? 'checked' : ''}>
              <label class="form-check-label small" for="intro-opentowork-input">Show "Open to Work" status badge</label>
            </div>
          </div>
          <div class="modal-footer border-0 p-3 px-4 bg-light d-flex justify-content-between">
            <button type="button" class="btn btn-outline-secondary btn-sm px-3 rounded-pill" data-action="close-modal">Cancel</button>
            <button type="button" class="btn btn-primary btn-sm px-4 rounded-pill fw-semibold" data-action="save-intro-modal">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function openEditAboutModal() {
  const u = profile || DEFAULT_PROFILE;
  $("#modal-container").innerHTML = `
    <div class="modal fade show d-block" id="edit-about-modal" tabindex="-1" style="background: rgba(15,23,42,0.6); backdrop-filter: blur(4px);">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          <div class="modal-header border-0 bg-primary text-white p-3 px-4">
            <h5 class="modal-title h6 fw-semibold"><i class="bi bi-file-text me-2"></i>Edit About Summary</h5>
            <button type="button" class="btn-close btn-close-white" data-action="close-modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <label class="form-label small fw-semibold text-secondary">Professional Introduction</label>
            <textarea id="about-text-input" class="form-control" rows="6" placeholder="Highlight your background, core technical proficiencies, past accomplishments, and what roles you are currently seeking...">${esc(u.about || "")}</textarea>
            <div class="form-text small mt-2">Writing 30+ words significantly increases recruiter engagement and profile completion score.</div>
          </div>
          <div class="modal-footer border-0 p-3 px-4 bg-light d-flex justify-content-between">
            <button type="button" class="btn btn-outline-secondary btn-sm px-3 rounded-pill" data-action="close-modal">Cancel</button>
            <button type="button" class="btn btn-primary btn-sm px-4 rounded-pill fw-semibold" data-action="save-about-modal">Save Summary</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function openAddExperienceModal() {
  $("#modal-container").innerHTML = `
    <div class="modal fade show d-block" id="add-exp-modal" tabindex="-1" style="background: rgba(15,23,42,0.6); backdrop-filter: blur(4px);">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          <div class="modal-header border-0 bg-primary text-white p-3 px-4">
            <h5 class="modal-title h6 fw-semibold"><i class="bi bi-briefcase me-2"></i>Add Work Experience</h5>
            <button type="button" class="btn-close btn-close-white" data-action="close-modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <div class="mb-3">
              <label class="form-label small fw-semibold text-secondary">Job Title</label>
              <input type="text" id="exp-role-input" class="form-control" placeholder="e.g. Frontend Engineering Intern" required>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold text-secondary">Company Name</label>
              <input type="text" id="exp-company-input" class="form-control" placeholder="e.g. NextWave Technologies" required>
            </div>
            <div class="row g-2 mb-3">
              <div class="col-6">
                <label class="form-label small fw-semibold text-secondary">Employment Type</label>
                <select id="exp-type-input" class="form-select">
                  <option selected>Full-time</option>
                  <option>Contract</option>
                  <option>Part-time</option>
                </select>
              </div>
              <div class="col-6">
                <label class="form-label small fw-semibold text-secondary">Location</label>
                <input type="text" id="exp-loc-input" class="form-control" placeholder="e.g. Remote">
              </div>
            </div>
            <div class="row g-2 mb-3">
              <div class="col-6">
                <label class="form-label small fw-semibold text-secondary">Start Date</label>
                <input type="text" id="exp-start-input" class="form-control" placeholder="e.g. Jun 2024">
              </div>
              <div class="col-6">
                <label class="form-label small fw-semibold text-secondary">End Date</label>
                <input type="text" id="exp-end-input" class="form-control" placeholder="e.g. Present">
              </div>
            </div>
            <div class="mb-2">
              <label class="form-label small fw-semibold text-secondary">Description & Key Contributions</label>
              <textarea id="exp-desc-input" class="form-control" rows="3" placeholder="Describe the systems you developed, technologies leveraged, and results achieved..."></textarea>
            </div>
          </div>
          <div class="modal-footer border-0 p-3 px-4 bg-light d-flex justify-content-between">
            <button type="button" class="btn btn-outline-secondary btn-sm px-3 rounded-pill" data-action="close-modal">Cancel</button>
            <button type="button" class="btn btn-primary btn-sm px-4 rounded-pill fw-semibold" data-action="save-exp-modal">Save Experience</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function openAddEducationModal() {
  $("#modal-container").innerHTML = `
    <div class="modal fade show d-block" id="add-edu-modal" tabindex="-1" style="background: rgba(15,23,42,0.6); backdrop-filter: blur(4px);">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          <div class="modal-header border-0 bg-primary text-white p-3 px-4">
            <h5 class="modal-title h6 fw-semibold"><i class="bi bi-mortarboard me-2"></i>Add Education</h5>
            <button type="button" class="btn-close btn-close-white" data-action="close-modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <div class="mb-3">
              <label class="form-label small fw-semibold text-secondary">School / University</label>
              <input type="text" id="edu-school-input" class="form-control" placeholder="e.g. UC Berkeley" required>
            </div>
            <div class="row g-2 mb-3">
              <div class="col-6">
                <label class="form-label small fw-semibold text-secondary">Degree</label>
                <input type="text" id="edu-degree-input" class="form-control" placeholder="e.g. B.S." required>
              </div>
              <div class="col-6">
                <label class="form-label small fw-semibold text-secondary">Field of Study</label>
                <input type="text" id="edu-field-input" class="form-control" placeholder="e.g. Computer Science">
              </div>
            </div>
            <div class="row g-2 mb-3">
              <div class="col-6">
                <label class="form-label small fw-semibold text-secondary">Start Year</label>
                <input type="text" id="edu-start-input" class="form-control" placeholder="e.g. 2021">
              </div>
              <div class="col-6">
                <label class="form-label small fw-semibold text-secondary">End Year (or Expected)</label>
                <input type="text" id="edu-end-input" class="form-control" placeholder="e.g. 2025">
              </div>
            </div>
            <div class="mb-2">
              <label class="form-label small fw-semibold text-secondary">Description / Honors</label>
              <textarea id="edu-desc-input" class="form-control" rows="2" placeholder="Relevant coursework, awards, extracurriculars..."></textarea>
            </div>
          </div>
          <div class="modal-footer border-0 p-3 px-4 bg-light d-flex justify-content-between">
            <button type="button" class="btn btn-outline-secondary btn-sm px-3 rounded-pill" data-action="close-modal">Cancel</button>
            <button type="button" class="btn btn-primary btn-sm px-4 rounded-pill fw-semibold" data-action="save-edu-modal">Save Education</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function openAddProjectModal() {
  $("#modal-container").innerHTML = `
    <div class="modal fade show d-block" id="add-proj-modal" tabindex="-1" style="background: rgba(15,23,42,0.6); backdrop-filter: blur(4px);">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          <div class="modal-header border-0 bg-primary text-white p-3 px-4">
            <h5 class="modal-title h6 fw-semibold"><i class="bi bi-code-slash me-2"></i>Add Project Showcase</h5>
            <button type="button" class="btn-close btn-close-white" data-action="close-modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <div class="mb-3">
              <label class="form-label small fw-semibold text-secondary">Project Title</label>
              <input type="text" id="proj-title-input" class="form-control" placeholder="e.g. Explainable AI Career Matcher" required>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold text-secondary">Description</label>
              <textarea id="proj-desc-input" class="form-control" rows="3" placeholder="What does this project do and how was it engineered?"></textarea>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold text-secondary">Technologies Used (comma separated)</label>
              <input type="text" id="proj-techs-input" class="form-control" placeholder="e.g. JavaScript, HTML5, CSS3, REST API">
            </div>
            <div class="row g-2 mb-2">
              <div class="col-6">
                <label class="form-label small fw-semibold text-secondary">GitHub Repository URL</label>
                <input type="url" id="proj-github-input" class="form-control" placeholder="https://github.com/...">
              </div>
              <div class="col-6">
                <label class="form-label small fw-semibold text-secondary">Live Demo URL</label>
                <input type="url" id="proj-live-input" class="form-control" placeholder="https://...">
              </div>
            </div>
          </div>
          <div class="modal-footer border-0 p-3 px-4 bg-light d-flex justify-content-between">
            <button type="button" class="btn btn-outline-secondary btn-sm px-3 rounded-pill" data-action="close-modal">Cancel</button>
            <button type="button" class="btn btn-primary btn-sm px-4 rounded-pill fw-semibold" data-action="save-proj-modal">Save Project</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function openAddCertModal() {
  $("#modal-container").innerHTML = `
    <div class="modal fade show d-block" id="add-cert-modal" tabindex="-1" style="background: rgba(15,23,42,0.6); backdrop-filter: blur(4px);">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          <div class="modal-header border-0 bg-primary text-white p-3 px-4">
            <h5 class="modal-title h6 fw-semibold"><i class="bi bi-award me-2"></i>Add License or Certification</h5>
            <button type="button" class="btn-close btn-close-white" data-action="close-modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <div class="mb-3">
              <label class="form-label small fw-semibold text-secondary">Certificate Name</label>
              <input type="text" id="cert-name-input" class="form-control" placeholder="e.g. AWS Certified Developer" required>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold text-secondary">Issuing Organization</label>
              <input type="text" id="cert-org-input" class="form-control" placeholder="e.g. Amazon Web Services, Meta, Google" required>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold text-secondary">Issue Date</label>
              <input type="text" id="cert-date-input" class="form-control" placeholder="e.g. August 2024">
            </div>
            <div class="mb-2">
              <label class="form-label small fw-semibold text-secondary">Credential URL (optional)</label>
              <input type="url" id="cert-url-input" class="form-control" placeholder="https://...">
            </div>
          </div>
          <div class="modal-footer border-0 p-3 px-4 bg-light d-flex justify-content-between">
            <button type="button" class="btn btn-outline-secondary btn-sm px-3 rounded-pill" data-action="close-modal">Cancel</button>
            <button type="button" class="btn btn-primary btn-sm px-4 rounded-pill fw-semibold" data-action="save-cert-modal">Save Certification</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function openAddAchModal() {
  $("#modal-container").innerHTML = `
    <div class="modal fade show d-block" id="add-ach-modal" tabindex="-1" style="background: rgba(15,23,42,0.6); backdrop-filter: blur(4px);">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          <div class="modal-header border-0 bg-primary text-white p-3 px-4">
            <h5 class="modal-title h6 fw-semibold"><i class="bi bi-trophy me-2"></i>Add Honor or Achievement</h5>
            <button type="button" class="btn-close btn-close-white" data-action="close-modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <div class="mb-3">
              <label class="form-label small fw-semibold text-secondary">Achievement Title</label>
              <input type="text" id="ach-title-input" class="form-control" placeholder="e.g. 1st Place — Web Innovation Showcase" required>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold text-secondary">Date / Year</label>
              <input type="text" id="ach-date-input" class="form-control" placeholder="e.g. 2025">
            </div>
            <div class="mb-2">
              <label class="form-label small fw-semibold text-secondary">Description</label>
              <textarea id="ach-desc-input" class="form-control" rows="3" placeholder="Briefly describe the award, project impact, and recognition..."></textarea>
            </div>
          </div>
          <div class="modal-footer border-0 p-3 px-4 bg-light d-flex justify-content-between">
            <button type="button" class="btn btn-outline-secondary btn-sm px-3 rounded-pill" data-action="close-modal">Cancel</button>
            <button type="button" class="btn btn-primary btn-sm px-4 rounded-pill fw-semibold" data-action="save-ach-modal">Save Achievement</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-action]");
  if (!el) return;
  const action = el.dataset.action;

  // Shortlist & Apply
  if (action === "toggle-shortlist") toggleShortlist(el.dataset.id);
  if (action === "open-post-job") openPostJobModal();
  if (action === "apply-job") {
    const jobId = el.dataset.id;
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;

    if (!applications.includes(jobId)) {
      applications.push(jobId);
      save(KEYS.applications, applications);
    }

    const candName = (session && session.name) ? session.name : (profile.displayName || "Alex Morgan");
    const existingCand = candidates.find(c => c.jobId === jobId && (c.id === "applicant-" + jobId || c.displayName.toLowerCase() === candName.toLowerCase()));
    if (!existingCand) {
      candidates.unshift({
        id: "applicant-" + jobId,
        jobId: jobId,
        displayName: candName,
        skills: [...profile.skills],
        experienceLevel: profile.experienceLevel || "Entry Level",
        reviewStatus: "Reviewing"
      });
      save(KEYS.candidates, candidates);
    }

    toast(`Application submitted for ${job.title}! Recruiter can now review your profile.`, "success");
    router(true);
  }

  // Jobs Search & Filter Actions
  if (action === "open-company-modal") {
    viewCompanyModal(el.dataset.company);
  }
  if (action === "filter-by-company-btn") {
    ui.company = el.dataset.company || "";
    $("#modal-container").innerHTML = "";
    location.hash = "#/jobs";
    router(true);
  }
  if (action === "quick-company-filter") {
    const comp = el.dataset.company;
    ui.company = (ui.company.toLowerCase() === comp.toLowerCase()) ? "" : comp;
    const inp = $("#job-company-q");
    if (inp) inp.value = ui.company;
    updateJobList();
  }
  if (action === "remove-filter-chip") {
    const type = el.dataset.filterType;
    if (type === "query") { ui.query = ""; const q = $("#job-q"); if (q) q.value = ""; }
    if (type === "company") { ui.company = ""; const c = $("#job-company-q"); if (c) c.value = ""; }
    if (type === "date") { ui.dateFilter = "all"; const d = $("#job-date"); if (d) d.value = "all"; $("#custom-date-container")?.classList.add("d-none"); }
    if (type === "level") { ui.level = ""; const l = $("#job-level"); if (l) l.value = ""; }
    if (type === "location") { ui.location = ""; const loc = $("#job-location"); if (loc) loc.value = ""; }
    if (type === "jobType") { ui.jobType = ""; const jt = $("#job-type"); if (jt) jt.value = ""; }
    updateJobList();
  }
  if (action === "clear-all-filters") {
    Object.assign(ui, { query: "", company: "", dateFilter: "all", customFrom: "", customTill: "", level: "", location: "", jobType: "", sort: "score" });
    const jq = $("#job-q"), jc = $("#job-company-q"), jd = $("#job-date"), jl = $("#job-level"), jloc = $("#job-location"), jt = $("#job-type"), js = $("#job-sort");
    if (jq) jq.value = "";
    if (jc) jc.value = "";
    if (jd) jd.value = "all";
    if (jl) jl.value = "";
    if (jloc) jloc.value = "";
    if (jt) jt.value = "";
    if (js) js.value = "score";
    $("#custom-date-container")?.classList.add("d-none");
    updateJobList();
    toast("All filters cleared.", "info");
  }
  if (action === "apply-custom-date") {
    const from = $("#custom-from") ? $("#custom-from").value : "";
    const till = $("#custom-till") ? $("#custom-till").value : "";
    ui.customFrom = from;
    ui.customTill = till;
    updateJobList();
    toast(`Applied custom date range: ${from || "Start"} to ${till || "End"}`);
  }
  if (action === "clear-filters") { Object.assign(ui, { query: "", level: "", location: "" }); router(true); }
  if (action === "clear-cand") { ui.cq = ""; router(true); }
  if (action === "ask-reset") askReset();
  if (action === "reset-now") resetNow();

  // Feed Actions
  if (action === "toggle-post-composer") {
    const form = $("#post-composer-form");
    if (form) {
      form.classList.toggle("d-none");
      if (!form.classList.contains("d-none")) {
        const inp = $("#post-content-input");
        if (inp) inp.focus();
      }
    }
  }
  if (action === "cancel-post") {
    const form = $("#post-composer-form");
    if (form) form.classList.add("d-none");
    const input = $("#post-content-input");
    if (input) input.value = "";
    const wrap = $("#post-image-preview-wrap");
    if (wrap) wrap.classList.add("d-none");
    const prev = $("#post-image-preview");
    if (prev) prev.src = "";
  }
  if (action === "add-post-hashtag") {
    const tag = el.dataset.tag;
    const input = $("#post-content-input");
    if (input) {
      input.value = (input.value.trim() ? input.value.trim() + " " : "") + tag + " ";
      input.focus();
    }
  }
  if (action === "use-preset-post-image") {
    const wrap = $("#post-image-preview-wrap");
    const prev = $("#post-image-preview");
    if (wrap && prev) {
      prev.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80";
      wrap.classList.remove("d-none");
      toast("Sample tech preview image attached!", "info");
    }
  }
  if (action === "remove-post-image") {
    const wrap = $("#post-image-preview-wrap");
    const prev = $("#post-image-preview");
    if (wrap && prev) {
      prev.src = "";
      wrap.classList.add("d-none");
    }
  }
  if (action === "publish-post") {
    const input = $("#post-content-input");
    const content = input ? input.value.trim() : "";
    if (!content) {
      toast("Please write something before publishing your post.", "warning");
      return;
    }
    const prev = $("#post-image-preview");
    const imageUrl = (prev && $("#post-image-preview-wrap") && !$("#post-image-preview-wrap").classList.contains("d-none")) ? prev.src : "";
    
    const newPost = {
      id: "post-" + Date.now(),
      authorId: profile.id || "applicant-001",
      authorName: profile.displayName || "Alex Morgan",
      authorHeadline: profile.headline || "Full-Stack Software Engineer",
      authorAvatar: profile.avatarUrl || "",
      postedDate: new Date().toISOString(),
      content,
      imageUrl,
      likes: 1,
      likedByMe: true,
      shares: 0,
      comments: []
    };
    posts.unshift(newPost);
    save(KEYS.posts, posts);
    toast("Post published to professional feed!", "success");
    router(true);
  }
  if (action === "like-post") {
    const postId = el.dataset.postId;
    const p = posts.find(x => x.id === postId);
    if (p) {
      p.likedByMe = !p.likedByMe;
      p.likes = (p.likes || 0) + (p.likedByMe ? 1 : -1);
      save(KEYS.posts, posts);
      router(true);
    }
  }
  if (action === "toggle-comment-box") {
    const postId = el.dataset.postId;
    const box = document.getElementById("comments-box-" + postId);
    if (box) box.classList.toggle("d-none");
  }
  if (action === "submit-comment") {
    const postId = el.dataset.postId;
    const input = document.getElementById("comment-input-" + postId);
    const text = input ? input.value.trim() : "";
    if (!text) return;
    const p = posts.find(x => x.id === postId);
    if (p) {
      if (!Array.isArray(p.comments)) p.comments = [];
      p.comments.push({
        id: "c-" + Date.now(),
        author: profile.displayName || "Alex Morgan",
        headline: profile.headline || "Software Engineer",
        text,
        time: "Just now"
      });
      save(KEYS.posts, posts);
      input.value = "";
      toast("Comment posted!", "success");
      router(true);
    }
  }
  if (action === "delete-post") {
    const postId = el.dataset.postId;
    posts = posts.filter(x => x.id !== postId);
    save(KEYS.posts, posts);
    toast("Post deleted from feed.", "info");
    router(true);
  }
  if (action === "share-post") {
    toast("Post link copied to clipboard! (Share URL generated)", "success");
  }
  if (action === "follow-company") {
    const comp = el.dataset.company;
    if (el.textContent.includes("Following")) {
      el.innerHTML = "+ Follow";
      el.className = "btn btn-outline-secondary btn-sm py-0.5 px-2.5 rounded-pill small";
      toast(`Unfollowed ${comp}`, "info");
    } else {
      el.innerHTML = '<i class="bi bi-check2"></i> Following';
      el.className = "btn btn-primary btn-sm py-0.5 px-2.5 rounded-pill small";
      toast(`Now following ${comp} for career updates!`, "success");
    }
  }
  if (action === "connect-person") {
    const name = el.dataset.name;
    el.innerHTML = '<i class="bi bi-check2"></i> Requested';
    el.disabled = true;
    profile.connectionsCount = (profile.connectionsCount || 482) + 1;
    save(KEYS.profile, profile);
    toast(`Connection request sent to ${name}!`, "success");
  }

  // Profile Actions & Modals
  if (action === "toggle-profile-mode") {
    ui.profileMode = (ui.profileMode === "public") ? "edit" : "public";
    router(true);
  }
  if (action === "open-edit-intro-modal" || action === "open-edit-intro") openEditIntroModal();
  if (action === "save-intro-modal") {
    const name = $("#intro-name-input") ? $("#intro-name-input").value.trim() : profile.displayName;
    const headline = $("#intro-headline-input") ? $("#intro-headline-input").value.trim() : profile.headline;
    const loc = $("#intro-location-input") ? $("#intro-location-input").value.trim() : profile.location;
    const open = $("#intro-opentowork-input") ? $("#intro-opentowork-input").checked : true;
    if (name) profile.displayName = name;
    profile.headline = headline;
    profile.location = loc;
    profile.openToWork = open;
    save(KEYS.profile, profile);
    $("#modal-container").innerHTML = "";
    toast("Professional intro saved!", "success");
    renderNavbar(location.hash.replace("#/", ""));
    router(true);
  }
  if (action === "open-edit-about-modal" || action === "open-edit-about") openEditAboutModal();
  if (action === "save-about-modal") {
    const about = $("#about-text-input") ? $("#about-text-input").value.trim() : profile.about;
    profile.about = about;
    save(KEYS.profile, profile);
    $("#modal-container").innerHTML = "";
    toast("About summary updated!", "success");
    router(true);
  }
  if (action === "open-add-exp-modal" || action === "open-add-exp") openAddExperienceModal();
  if (action === "save-exp-modal") {
    const role = $("#exp-role-input") ? $("#exp-role-input").value.trim() : "";
    const comp = $("#exp-company-input") ? $("#exp-company-input").value.trim() : "";
    if (!role || !comp) { toast("Please enter role and company name.", "warning"); return; }
    if (!Array.isArray(profile.experience)) profile.experience = [];
    profile.experience.unshift({
      id: "exp-" + Date.now(),
      role,
      company: comp,
      type: $("#exp-type-input") ? $("#exp-type-input").value : "Full-time",
      location: $("#exp-loc-input") ? $("#exp-loc-input").value.trim() : "Remote",
      startDate: $("#exp-start-input") ? $("#exp-start-input").value.trim() : "2024",
      endDate: $("#exp-end-input") ? $("#exp-end-input").value.trim() : "Present",
      desc: $("#exp-desc-input") ? $("#exp-desc-input").value.trim() : ""
    });
    save(KEYS.profile, profile);
    $("#modal-container").innerHTML = "";
    toast("Experience added!", "success");
    router(true);
  }
  if (action === "delete-exp-item") {
    const id = el.dataset.id;
    profile.experience = (profile.experience || []).filter((x, idx) => x.id !== id && idx != id);
    save(KEYS.profile, profile);
    toast("Experience removed.", "info");
    router(true);
  }
  if (action === "open-add-edu-modal" || action === "open-add-edu") openAddEducationModal();
  if (action === "save-edu-modal") {
    const school = $("#edu-school-input") ? $("#edu-school-input").value.trim() : "";
    const degree = $("#edu-degree-input") ? $("#edu-degree-input").value.trim() : "";
    if (!school || !degree) { toast("Please specify school and degree.", "warning"); return; }
    if (!Array.isArray(profile.education)) profile.education = [];
    profile.education.unshift({
      id: "edu-" + Date.now(),
      school,
      degree,
      field: $("#edu-field-input") ? $("#edu-field-input").value.trim() : "",
      startYear: $("#edu-start-input") ? $("#edu-start-input").value.trim() : "",
      endYear: $("#edu-end-input") ? $("#edu-end-input").value.trim() : "",
      desc: $("#edu-desc-input") ? $("#edu-desc-input").value.trim() : ""
    });
    save(KEYS.profile, profile);
    $("#modal-container").innerHTML = "";
    toast("Education added!", "success");
    router(true);
  }
  if (action === "delete-edu-item") {
    const id = el.dataset.id;
    profile.education = (profile.education || []).filter((x, idx) => x.id !== id && idx != id);
    save(KEYS.profile, profile);
    toast("Education entry removed.", "info");
    router(true);
  }
  if (action === "add-single-skill") {
    const input = $("#new-skill-input");
    const skill = input ? input.value.trim() : "";
    if (!skill) return;
    if (!Array.isArray(profile.skills)) profile.skills = [];
    if (!profile.skills.some(s => s.toLowerCase() === skill.toLowerCase())) {
      profile.skills.push(skill);
      save(KEYS.profile, profile);
      toast(`Added skill: "${skill}". Job matches recalculated!`, "success");
      router(true);
    } else {
      toast(`"${skill}" is already in your skills list.`, "info");
    }
  }
  if (action === "remove-skill-tag") {
    const skill = el.dataset.skill;
    profile.skills = (profile.skills || []).filter(s => s !== skill);
    save(KEYS.profile, profile);
    toast(`Removed "${skill}".`, "info");
    router(true);
  }
  if (action === "focus-skills") {
    const input = $("#new-skill-input");
    if (input) input.focus();
  }
  if (action === "open-add-proj-modal" || action === "open-add-proj") openAddProjectModal();
  if (action === "save-proj-modal") {
    const title = $("#proj-title-input") ? $("#proj-title-input").value.trim() : "";
    if (!title) { toast("Please enter project title.", "warning"); return; }
    const techs = $("#proj-techs-input") ? $("#proj-techs-input").value.split(",").map(s => s.trim()).filter(Boolean) : [];
    if (!Array.isArray(profile.projects)) profile.projects = [];
    profile.projects.unshift({
      id: "proj-" + Date.now(),
      title,
      desc: $("#proj-desc-input") ? $("#proj-desc-input").value.trim() : "",
      techs,
      githubUrl: $("#proj-github-input") ? $("#proj-github-input").value.trim() : "",
      liveUrl: $("#proj-live-input") ? $("#proj-live-input").value.trim() : ""
    });
    save(KEYS.profile, profile);
    $("#modal-container").innerHTML = "";
    toast("Project added to portfolio!", "success");
    router(true);
  }
  if (action === "delete-proj-item") {
    const id = el.dataset.id;
    profile.projects = (profile.projects || []).filter((x, idx) => x.id !== id && idx != id);
    save(KEYS.profile, profile);
    toast("Project removed.", "info");
    router(true);
  }
  if (action === "open-add-cert-modal" || action === "open-add-cert") openAddCertModal();
  if (action === "save-cert-modal") {
    const name = $("#cert-name-input") ? $("#cert-name-input").value.trim() : "";
    const org = $("#cert-org-input") ? $("#cert-org-input").value.trim() : "";
    if (!name || !org) { toast("Please provide certificate name and organization.", "warning"); return; }
    if (!Array.isArray(profile.certifications)) profile.certifications = [];
    profile.certifications.unshift({
      id: "cert-" + Date.now(),
      name,
      org,
      issueDate: $("#cert-date-input") ? $("#cert-date-input").value.trim() : "2024",
      credentialUrl: $("#cert-url-input") ? $("#cert-url-input").value.trim() : ""
    });
    save(KEYS.profile, profile);
    $("#modal-container").innerHTML = "";
    toast("Certification saved!", "success");
    router(true);
  }
  if (action === "delete-cert-item") {
    const id = el.dataset.id;
    profile.certifications = (profile.certifications || []).filter((x, idx) => x.id !== id && idx != id);
    save(KEYS.profile, profile);
    toast("Certification removed.", "info");
    router(true);
  }
  if (action === "open-add-ach-modal") openAddAchModal();
  if (action === "save-ach-modal") {
    const title = $("#ach-title-input") ? $("#ach-title-input").value.trim() : "";
    if (!title) { toast("Please enter achievement title.", "warning"); return; }
    if (!Array.isArray(profile.achievements)) profile.achievements = [];
    profile.achievements.unshift({
      id: "ach-" + Date.now(),
      title,
      date: $("#ach-date-input") ? $("#ach-date-input").value.trim() : "2025",
      desc: $("#ach-desc-input") ? $("#ach-desc-input").value.trim() : ""
    });
    save(KEYS.profile, profile);
    $("#modal-container").innerHTML = "";
    toast("Achievement saved!", "success");
    router(true);
  }
  if (action === "delete-ach-item") {
    const id = el.dataset.id;
    profile.achievements = (profile.achievements || []).filter((x, idx) => x.id !== id && idx != id);
    save(KEYS.profile, profile);
    toast("Achievement removed.", "info");
    router(true);
  }
  if (action === "download-resume-btn") {
    if (profile.resume && profile.resume.fileName) {
      const a = document.createElement("a");
      a.href = profile.resume.dataUrl || "data:text/plain;charset=utf-8," + encodeURIComponent("TalentMatch Verified Resume for " + profile.displayName);
      a.download = profile.resume.fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      toast(`Downloading ${profile.resume.fileName}...`, "info");
    } else {
      toast("No resume file uploaded yet.", "warning");
    }
  }
  if (action === "delete-resume-btn") {
    profile.resume = null;
    save(KEYS.profile, profile);
    toast("Resume deleted from your profile.", "info");
    router(true);
  }

  // Auth & System Actions
  if (action === "toggle-password") {
    const input = $("#auth-password");
    if (input) {
      const isPass = input.type === "password";
      input.type = isPass ? "text" : "password";
      const icon = el.querySelector("i");
      if (icon) icon.className = `bi bi-eye${isPass ? "-slash" : ""}`;
    }
  }
  if (action === "quick-fill") {
    const isApp = el.dataset.fill === "applicant";
    const email = $("#auth-email"), pass = $("#auth-password");
    if (email) email.value = isApp ? "alex.morgan@talentmatch.dev" : "recruiter@cloudscale.io";
    if (pass) pass.value = isApp ? "TalentMatch2026!" : "RecruiterPro2026!";
    toast(`Loaded ${isApp ? "Developer (Alex Morgan)" : "Tech Recruiter"} credentials. Click Sign In!`, "info");
  }
  if (action === "select-role") {
    document.querySelectorAll(".auth-role-card").forEach((c) => c.classList.remove("selected"));
    el.classList.add("selected");
    const roleInput = $("#auth-selected-role");
    if (roleInput) roleInput.value = el.dataset.role;
  }
  if (action === "social-login") {
    const provider = el.dataset.provider;
    if (provider === "GitHub") openGithubAuthModal();
    else if (provider === "Google") openGoogleAuthModal();
  }
  if (action === "confirm-github-login") {
    el.disabled = true;
    el.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Connecting to GitHub...`;
    setTimeout(() => {
      const modal = $("#oauth-github-modal");
      if (modal) bootstrap.Modal.getInstance(modal).hide();
      session = {
        loggedIn: true,
        provider: "GitHub",
        name: "Alex Morgan",
        username: "alexmorgan-dev",
        email: "alex.morgan@talentmatch.dev",
        role: "applicant"
      };
      save(KEYS.session, session);
      profile.displayName = "Alex Morgan";
      save(KEYS.profile, profile);
      toast("Successfully authenticated with GitHub as @alexmorgan-dev! Welcome Alex.", "success");
      location.hash = "#/home";
      router();
    }, 450);
  }
  if (action === "confirm-google-login") {
    const isRecruiter = el.dataset.account === "recruiter";
    const email = isRecruiter ? "recruiter@cloudscale.io" : "alex.morgan@talentmatch.dev";
    const name = isRecruiter ? "Alex M. (CloudScale)" : "Alex Morgan";
    el.disabled = true;
    el.innerHTML = `<div class="text-center w-100 py-2"><span class="spinner-border spinner-border-sm me-2" role="status"></span>Signing in to Google...</div>`;
    setTimeout(() => {
      const modal = $("#oauth-google-modal");
      if (modal) bootstrap.Modal.getInstance(modal).hide();
      session = {
        loggedIn: true,
        provider: "Google",
        name,
        email,
        role: isRecruiter ? "recruiter" : "applicant"
      };
      save(KEYS.session, session);
      if (!isRecruiter) {
        profile.displayName = "Alex Morgan";
        save(KEYS.profile, profile);
      }
      toast(`Signed in with Google as ${email}! Welcome back.`, "success");
      location.hash = isRecruiter ? "#/recruiter" : "#/home";
      router();
    }, 450);
  }
  if (action === "logout") {
    session = { loggedIn: false };
    save(KEYS.session, session);
    toast("Signed out successfully.");
    router(true);
  }
  if (action === "forgot-password") {
    showForgotPasswordModal();
  }
  if (action === "close-modal") {
    $("#modal-container").innerHTML = "";
  }
  if (action === "confirm-reset-password") {
    const email = $("#reset-email-input") ? $("#reset-email-input").value : "alex.morgan@talentmatch.dev";
    if ($("#auth-password")) {
      $("#auth-password").value = "TalentMatch2026!";
      $("#auth-password").type = "text";
    }
    $("#modal-container").innerHTML = "";
    toast(`Demo password set to "TalentMatch2026!" for ${email}`, "success");
  }
});

// Dynamic Inputs listener
document.addEventListener("input", (e) => {
  const id = e.target.id;
  if (id === "job-q") { ui.query = e.target.value; updateJobList(); }
  if (id === "job-company-q") { ui.company = e.target.value; updateJobList(); }
  if (id === "cand-q") { ui.cq = e.target.value; updateCandidateList(); }
});

// Dynamic Changes listener (File API + Filters)
document.addEventListener("change", (e) => {
  const t = e.target;

  // Jobs Filters
  if (t.id === "job-date") {
    ui.dateFilter = t.value;
    const customBox = $("#custom-date-container");
    if (customBox) {
      if (t.value === "custom") customBox.classList.remove("d-none");
      else customBox.classList.add("d-none");
    }
    updateJobList();
  }
  if (t.id === "job-level") { ui.level = t.value; updateJobList(); }
  if (t.id === "job-location") { ui.location = t.value; updateJobList(); }
  if (t.id === "job-type") { ui.jobType = t.value; updateJobList(); }
  if (t.id === "job-sort") { ui.sort = t.value; updateJobList(); }
  if (t.id === "role-select") location.hash = "#/recruiter/" + t.value;
  if (t.dataset.statusId) changeStatus(t.dataset.statusId, t.value);

  // File Upload Handlers (HTML5 FileReader API)
  if (t.id === "avatar-file-input" && t.files && t.files[0]) {
    const reader = new FileReader();
    reader.onload = (ev) => {
      profile.avatarUrl = ev.target.result;
      save(KEYS.profile, profile);
      toast("Profile photo updated successfully!", "success");
      renderNavbar(location.hash.replace("#/", ""));
      router(true);
    };
    reader.readAsDataURL(t.files[0]);
  }

  if (t.id === "cover-file-input" && t.files && t.files[0]) {
    const reader = new FileReader();
    reader.onload = (ev) => {
      profile.coverUrl = ev.target.result;
      save(KEYS.profile, profile);
      toast("Cover image updated!", "success");
      router(true);
    };
    reader.readAsDataURL(t.files[0]);
  }

  if (t.id === "post-image-file-input" && t.files && t.files[0]) {
    const reader = new FileReader();
    reader.onload = (ev) => {
      const prev = $("#post-image-preview");
      const wrap = $("#post-image-preview-wrap");
      if (prev && wrap) {
        prev.src = ev.target.result;
        wrap.classList.remove("d-none");
      }
    };
    reader.readAsDataURL(t.files[0]);
  }

  if (t.id === "resume-file-input" && t.files && t.files[0]) {
    const file = t.files[0];
    if (file.size > 3 * 1024 * 1024) {
      toast("File size exceeds 3MB browser limit. Please select a compressed file.", "warning");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      profile.resume = {
        fileName: file.name,
        fileSize: (file.size / 1024).toFixed(0) + " KB",
        uploadDate: new Date().toISOString().split("T")[0],
        dataUrl: ev.target.result
      };
      save(KEYS.profile, profile);
      toast(`Resume "${file.name}" uploaded successfully!`, "success");
      router(true);
    };
    reader.readAsDataURL(file);
  }
});
document.addEventListener("submit", (e) => {
  if (e.target.id === "profile-form") { e.preventDefault(); saveProfile(); }
  if (e.target.id === "post-job-form") {
    e.preventDefault();
    const title = $("#new-job-title").value.trim();
    const company = $("#new-job-company").value.trim();
    const location = $("#new-job-location").value.trim();
    const experienceLevel = $("#new-job-level").value;
    const skillsRaw = $("#new-job-skills").value;
    const description = $("#new-job-desc").value.trim();

    const requiredSkills = skillsRaw.split(",").map(s => s.trim()).filter(Boolean);
    if (!requiredSkills.length) {
      toast("Please specify at least one required skill.", "warning");
      return;
    }

    const newJob = {
      id: "job-" + String(Date.now()).slice(-4),
      title,
      company,
      location,
      experienceLevel,
      requiredSkills,
      description
    };

    jobs.unshift(newJob);
    save(KEYS.jobs, jobs);

    // Add 2 realistic applicants specifically for this new position
    candidates.unshift(
      {
        id: "cand-" + newJob.id + "-1",
        jobId: newJob.id,
        displayName: "Sanjay Singhania",
        skills: [...requiredSkills.slice(0, Math.max(1, requiredSkills.length - 1)), "Git"],
        experienceLevel: experienceLevel,
        reviewStatus: "Reviewing"
      },
      {
        id: "cand-" + newJob.id + "-2",
        jobId: newJob.id,
        displayName: "Tara Alvares",
        skills: [...requiredSkills],
        experienceLevel: experienceLevel,
        reviewStatus: "Shortlisted"
      }
    );
    save(KEYS.candidates, candidates);

    const modal = $("#post-job-modal");
    if (modal) bootstrap.Modal.getInstance(modal).hide();

    toast(`Job "${title}" published successfully with applicants pool! Visible in Jobs explorer.`, "success");
    ui.roleId = newJob.id;
    location.hash = "#/recruiter/" + newJob.id;
    router();
  }
  if (e.target.id === "auth-form") {
    e.preventDefault();
    const mode = e.target.dataset.mode;
    const btn = $("#auth-submit-btn");
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Authenticating...`;
    }
    setTimeout(() => {
      if (mode === "signup") {
        const pwd = $("#auth-password") ? $("#auth-password").value : "";
        const confirmPwd = $("#auth-confirm-password") ? $("#auth-confirm-password").value : "";
        if (pwd.length < 8) {
          toast("Password must be at least 8 characters long.", "warning");
          if (btn) { btn.disabled = false; btn.innerHTML = `<span>Create Developer Account</span><i class="bi bi-arrow-right"></i>`; }
          return;
        }
        if (pwd !== confirmPwd) {
          toast("Passwords do not match. Please verify your confirmation password.", "danger");
          if (btn) { btn.disabled = false; btn.innerHTML = `<span>Create Developer Account</span><i class="bi bi-arrow-right"></i>`; }
          return;
        }
        const nameInput = $("#auth-name");
        if (nameInput && nameInput.value.trim()) {
          profile.displayName = nameInput.value.trim();
          save(KEYS.profile, profile);
        }
        const role = $("#auth-selected-role") ? $("#auth-selected-role").value : "applicant";
        session = {
          loggedIn: true,
          provider: "Email",
          name: profile.displayName,
          email: $("#auth-email") ? $("#auth-email").value : "alex.morgan@talentmatch.dev",
          role
        };
        save(KEYS.session, session);
        toast(`Account created! Welcome to TalentMatch, ${profile.displayName}.`, "success");
        location.hash = role === "recruiter" ? "#/recruiter" : "#/jobs";
      } else {
        const email = $("#auth-email") ? $("#auth-email").value : "alex.morgan@talentmatch.dev";
        const isRecruiter = email.toLowerCase().includes("recruiter");
        session = {
          loggedIn: true,
          provider: "Email",
          name: isRecruiter ? "Recruiter" : "Alex Morgan",
          email,
          role: isRecruiter ? "recruiter" : "applicant"
        };
        save(KEYS.session, session);
        toast(`Welcome back! Signed in as ${email}.`, "success");
        location.hash = isRecruiter ? "#/recruiter" : "#/jobs";
      }
    }, 600);
  }
});

// ============ 7. ROUTER - the address (#/jobs, #/profile ...) picks the screen ============

// ============ PHASE 1 EXTENDED ROUTE VIEWS (LinkedIn, Internshala, Unstop Ecosystem) ============



// ============ OFFICIAL CORPORATE RECRUITER & CAREER AUTHENTICATION ============

let codingCanvasAnimId = null;
let typewriterTimer = null;

// Abstract Tech Company Symbols (Corporate Inspired, Non-Trademark)
const CORP_TECH_LOGOS = [
  {
    name: "Google",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12C2 14.5 2.9 16.8 4.4 18.5" stroke="#4285F4" stroke-width="2.5" stroke-linecap="round"/><path d="M4.4 18.5C6.2 20.7 9 22 12 22C17.52 22 22 17.52 22 12C22 10.6 21.7 9.3 21.2 8.1" stroke="#34A853" stroke-width="2.5" stroke-linecap="round"/><path d="M21.2 8.1C20.2 5.6 18.3 3.6 15.8 2.6" stroke="#FBBC05" stroke-width="2.5" stroke-linecap="round"/><path d="M15.8 2.6C14.6 2.2 13.3 2 12 2" stroke="#EA4335" stroke-width="2.5" stroke-linecap="round"/><path d="M12 12H21.5" stroke="#4285F4" stroke-width="2.5" stroke-linecap="round"/><circle cx="12" cy="12" r="3" fill="#4285F4"/></svg>`
  },
  {
    name: "Microsoft",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="1.5" fill="#F25022"/><rect x="13" y="3" width="8" height="8" rx="1.5" fill="#7FBA00"/><rect x="3" y="13" width="8" height="8" rx="1.5" fill="#00A4EF"/><rect x="13" y="13" width="8" height="8" rx="1.5" fill="#FFB900"/></svg>`
  },
  {
    name: "Amazon",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 14C8 18 16 18 20 14" stroke="#FF9900" stroke-width="2.5" stroke-linecap="round"/><path d="M18 13.5L20.5 14L19.5 16.5" stroke="#FF9900" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="7" r="4" stroke="#1E293B" stroke-width="2.2"/></svg>`
  },
  {
    name: "Meta",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7 16C4.5 16 3 14 3 12C3 10 4.5 8 7 8C9.5 8 11.5 12 12 12C12.5 12 14.5 8 17 8C19.5 8 21 10 21 12C21 14 19.5 16 17 16C14.5 16 12.5 12 12 12C11.5 12 9.5 16 7 16Z" stroke="#2563EB" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  },
  {
    name: "NVIDIA",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 12C3 7 7 3 12 3C17 3 21 7 21 12C21 16 18 19.5 14 20.7" stroke="#10B981" stroke-width="2.4" stroke-linecap="round"/><path d="M6 12C6 8.7 8.7 6 12 6C15.3 6 18 8.7 18 12C18 14.5 16.5 16.8 14 17.6" stroke="#10B981" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="12" r="2.5" fill="#10B981"/></svg>`
  },
  {
    name: "Apple",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 4C13 2.5 14.5 2 15 2C15 3.5 14 5 12.5 5.8C12.3 5.2 12.1 4.6 12 4Z" fill="#475569"/><path d="M17.5 13C17.5 10.5 19.5 9.5 19.6 9.4C18.4 7.7 16.5 7.5 15.8 7.4C14.2 7.2 12.5 8.4 11.7 8.4C10.8 8.4 9.5 7.4 8.2 7.4C6.5 7.4 4.9 8.4 4.1 9.9C2.3 12.9 3.6 17.5 5.4 20C6.3 21.2 7.3 22.5 8.6 22.5C9.9 22.5 10.4 21.7 11.9 21.7C13.4 21.7 13.9 22.5 15.2 22.5C16.6 22.5 17.5 21.3 18.3 20C19.3 18.6 19.7 17.2 19.8 17.1C19.6 17 17.5 16.2 17.5 13Z" fill="#475569"/></svg>`
  },
  {
    name: "GitHub",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.446 4.87 20.198 8.84 21.524C9.34 21.617 9.52 21.306 9.52 21.042C9.52 20.804 9.51 20.024 9.51 19.182C7 19.646 6.35 18.57 6.15 18.006C6.04 17.724 5.55 16.837 5.12 16.598C4.77 16.406 4.26 15.938 5.11 15.926C5.91 15.914 6.48 16.669 6.67 16.974C7.58 18.522 9.05 18.09 9.64 17.814C9.73 17.154 9.99 16.71 10.28 16.458C8.02 16.206 5.65 15.33 5.65 11.434C5.65 10.318 6.05 9.406 6.7 8.686C6.6 8.434 6.24 7.378 6.8 5.962C6.8 5.962 7.66 5.686 9.61 7.006C10.43 6.778 11.3 6.67 12.17 6.67C13.04 6.67 13.91 6.778 14.73 7.006C16.68 5.674 17.54 5.962 17.54 5.962C18.1 7.378 17.74 8.434 17.64 8.686C18.29 9.406 18.69 10.306 18.69 11.434C18.69 15.342 16.31 16.206 14.05 16.458C14.42 16.782 14.74 17.394 14.74 18.354C14.74 19.722 14.73 20.826 14.73 21.042C14.73 21.306 14.91 21.629 15.42 21.524C19.38 20.198 22.25 16.434 22.25 12.017C22.25 6.484 17.77 2 12 2Z" fill="#24292F"/></svg>`
  },
  {
    name: "Stripe",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#6366F1"/><path d="M12.5 8.5C11 8.5 10.2 9 10.2 9.8C10.2 11.4 14.5 10.8 14.5 13.5C14.5 15.2 13 16 11.5 16C9.8 16 8.5 15.1 8.5 15.1L9 13.5C9 13.5 10.2 14.2 11.4 14.2C12.6 14.2 13 13.8 13 13.2C13 11.5 8.7 12.2 8.7 9.5C8.7 7.9 10.2 7 11.8 7C13.2 7 14.3 7.6 14.3 7.6L13.8 9.2C13.8 9.2 12.8 8.5 12.5 8.5Z" fill="#FFFFFF"/></svg>`
  },
  {
    name: "OpenAI",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#0D9488" stroke-width="2.2"/><path d="M12 6V12L17 9" stroke="#0D9488" stroke-width="2" stroke-linecap="round"/><path d="M12 12L7 15" stroke="#0D9488" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="12" r="2.5" fill="#0D9488"/></svg>`
  }
];

function renderMarqueeBadges(rowList) {
  return rowList.map(item => `
    <div class="tm-corp-badge">
      ${item.svg}
      <span class="tm-corp-name">${item.name}</span>
      <span class="tm-corp-verified-dot"></span>
    </div>
  `).join("");
}

function viewAuth(mode = "login") {
  const isSignup = mode === "signup";

  // Create alternating company badge orders for natural corporate stream variation
  const row1 = [...CORP_TECH_LOGOS];
  const row2 = [...CORP_TECH_LOGOS].reverse();
  const row3 = [...CORP_TECH_LOGOS.slice(4), ...CORP_TECH_LOGOS.slice(0, 4)];
  const row4 = [...row2.slice(3), ...row2.slice(0, 3)];

  return `
    <div class="auth-page-wrapper">
      
      <!-- Premium Corporate Marquee Streams (Smooth Linear Web Animations) -->
      <div class="auth-corporate-streams-bg" aria-hidden="true">
        <!-- Stream Track 1 (Top, Left-to-Right) -->
        <div class="tm-marquee-row stream-y-1">
          <div class="tm-marquee-track ltr-track">
            <div class="tm-marquee-content">${renderMarqueeBadges(row1)}</div>
            <div class="tm-marquee-content" aria-hidden="true">${renderMarqueeBadges(row1)}</div>
          </div>
        </div>

        <!-- Stream Track 2 (Upper-Mid, Right-to-Left) -->
        <div class="tm-marquee-row stream-y-2">
          <div class="tm-marquee-track rtl-track">
            <div class="tm-marquee-content">${renderMarqueeBadges(row2)}</div>
            <div class="tm-marquee-content" aria-hidden="true">${renderMarqueeBadges(row2)}</div>
          </div>
        </div>

        <!-- Stream Track 3 (Lower-Mid, Left-to-Right) -->
        <div class="tm-marquee-row stream-y-3">
          <div class="tm-marquee-track ltr-track-alt">
            <div class="tm-marquee-content">${renderMarqueeBadges(row3)}</div>
            <div class="tm-marquee-content" aria-hidden="true">${renderMarqueeBadges(row3)}</div>
          </div>
        </div>

        <!-- Stream Track 4 (Bottom, Right-to-Left) -->
        <div class="tm-marquee-row stream-y-4">
          <div class="tm-marquee-track rtl-track-alt">
            <div class="tm-marquee-content">${renderMarqueeBadges(row4)}</div>
            <div class="tm-marquee-content" aria-hidden="true">${renderMarqueeBadges(row4)}</div>
          </div>
        </div>

        <!-- Soft Central Vignette for Maximum Auth Form Legibility -->
        <div class="auth-vignette-center"></div>
      </div>

      <!-- Central Corporate Authentication Card -->
      <div class="auth-scene-container">
        <div class="auth-card-clean">
          
          <!-- Corporate Brand Header -->
          <div class="auth-clean-brand text-center mb-4">
            <div class="auth-corporate-logo mx-auto mb-3">
              <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="14" stroke="#2563EB" stroke-width="2.5" stroke-dasharray="3 2"/>
                <circle cx="16" cy="16" r="7.5" fill="#2563EB"/>
                <circle cx="16" cy="16" r="3" fill="#FFFFFF"/>
              </svg>
            </div>

            <h1 class="auth-clean-title mb-1">TalentMatch<span class="text-primary">.dev</span></h1>
            <p class="text-muted small mb-0">Official Engineering Recruitment &amp; Career Platform</p>
          </div>

          <!-- Mode Switcher Tabs (Corporate Navigation) -->
          <nav class="auth-clean-tabs mb-4" aria-label="Authentication navigation">
            <a href="#/login" class="auth-clean-tab-btn ${!isSignup ? "active" : ""}">
              <i class="bi bi-box-arrow-in-right me-1.5"></i> Sign In
            </a>
            <a href="#/signup" class="auth-clean-tab-btn ${isSignup ? "active" : ""}">
              <i class="bi bi-person-plus me-1.5"></i> Create Account
            </a>
          </nav>

          <!-- Authentication Form -->
          <form id="auth-form" data-mode="${mode}" novalidate>
            ${isSignup ? `
              <div class="mb-3">
                <label for="auth-name" class="form-label small fw-semibold text-dark mb-1">Full Legal Name</label>
                <div class="input-group">
                  <span class="input-group-text bg-white border-end-0 text-muted"><i class="bi bi-person"></i></span>
                  <input type="text" id="auth-name" class="form-control border-start-0 ps-0" placeholder="e.g. Alex Morgan" required>
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label small fw-semibold text-dark mb-1">Account Role</label>
                <div class="row g-2">
                  <div class="col-6">
                    <div class="auth-role-item selected" data-action="select-role" data-role="applicant">
                      <i class="bi bi-code-slash text-primary"></i>
                      <span class="small fw-semibold">Candidate (Dev)</span>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="auth-role-item" data-action="select-role" data-role="recruiter">
                      <i class="bi bi-building text-info"></i>
                      <span class="small fw-semibold">Recruiter (Hiring)</span>
                    </div>
                  </div>
                </div>
                <input type="hidden" id="auth-selected-role" value="applicant">
              </div>
            ` : ""}

            <div class="mb-3">
              <label for="auth-email" class="form-label small fw-semibold text-dark mb-1">Corporate or Personal Email</label>
              <div class="input-group">
                <span class="input-group-text bg-white border-end-0 text-muted"><i class="bi bi-envelope"></i></span>
                <input type="email" id="auth-email" class="form-control border-start-0 ps-0" placeholder="name@company.com" required>
              </div>
            </div>

            <div class="mb-3">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <label for="auth-password" class="form-label small fw-semibold text-dark mb-0">Password</label>
                ${!isSignup ? `<a href="javascript:void(0)" class="small text-decoration-none text-primary" data-action="forgot-password">Forgot password?</a>` : ""}
              </div>
              <div class="input-group">
                <span class="input-group-text bg-white border-end-0 text-muted"><i class="bi bi-lock"></i></span>
                <input type="password" id="auth-password" class="form-control border-start-0 border-end-0 ps-0" placeholder="${isSignup ? 'Create secure password (8+ chars)' : 'Enter your password'}" required>
                <button type="button" class="input-group-text bg-white text-muted border-start-0 cursor-pointer" data-action="toggle-password" aria-label="Toggle password visibility">
                  <i class="bi bi-eye"></i>
                </button>
              </div>
            </div>

            ${isSignup ? `
              <div class="mb-3">
                <label for="auth-confirm-password" class="form-label small fw-semibold text-dark mb-1">Confirm Password</label>
                <div class="input-group">
                  <span class="input-group-text bg-white border-end-0 text-muted"><i class="bi bi-shield-lock"></i></span>
                  <input type="password" id="auth-confirm-password" class="form-control border-start-0 ps-0" placeholder="Re-enter your password" required>
                </div>
              </div>

              <div class="form-check mb-4 small">
                <input class="form-check-input" type="checkbox" id="auth-terms" checked required>
                <label class="form-check-label text-muted" for="auth-terms">
                  I agree to the <a href="javascript:void(0)" class="text-decoration-none">Terms of Service</a> &amp; <a href="javascript:void(0)" class="text-decoration-none">Privacy Policy</a>.
                </label>
              </div>
            ` : `
              <div class="form-check mb-4 small">
                <input class="form-check-input" type="checkbox" id="auth-remember" checked>
                <label class="form-check-label text-muted" for="auth-remember">
                  Keep me signed in on this device
                </label>
              </div>
            `}

            <button type="submit" class="btn btn-primary w-100 py-2.5 rounded-3 fw-semibold shadow-sm mb-3" id="auth-submit-btn">
              <span>${isSignup ? "Create Corporate Account" : "Sign In to TalentMatch"}</span>
              <i class="bi bi-arrow-right ms-1.5"></i>
            </button>

            <!-- SSO Single Sign-On Divider -->
            <div class="auth-divider-clean mb-3">
              <span>Or sign in with SSO</span>
            </div>

            <div class="row g-2 mb-4">
              <div class="col-6">
                <button type="button" class="btn btn-outline-secondary w-100 rounded-3 py-2 small fw-semibold d-flex align-items-center justify-content-center gap-2" data-action="social-login" data-provider="GitHub">
                  <i class="bi bi-github fs-6 text-dark"></i> GitHub
                </button>
              </div>
              <div class="col-6">
                <button type="button" class="btn btn-outline-secondary w-100 rounded-3 py-2 small fw-semibold d-flex align-items-center justify-content-center gap-2" data-action="social-login" data-provider="Google">
                  <i class="bi bi-google fs-6 text-danger"></i> Google
                </button>
              </div>
            </div>

            <!-- Security & Compliance Assurance -->
            <div class="text-center pt-3 border-top">
              <p class="text-muted mb-0" style="font-size: 0.72rem; line-height: 1.5;">
                <i class="bi bi-shield-check text-success me-1"></i> 256-bit TLS encrypted session &middot; SOC 2 Type II compliant standards
              </p>
            </div>
          </form>

        </div>
      </div>
    </div>
  `;
}



// ============ 11. CONFIRMATION & SETTINGS MODALS ============

function showConfirmModal(title, message, confirmText, onConfirm) {
  const modalHtml = `
    <div class="modal fade show d-block" id="confirm-modal" tabindex="-1" style="background: rgba(15, 23, 42, 0.65);" aria-modal="true" role="dialog">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          <div class="modal-header border-0 bg-danger text-white p-3 px-4">
            <h2 class="h6 fw-bold mb-0 text-white d-flex align-items-center gap-2">
              <i class="bi bi-exclamation-triangle-fill"></i> ${esc(title)}
            </h2>
            <button type="button" class="btn-close btn-close-white" data-action="close-modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <p class="text-muted mb-0">${esc(message)}</p>
          </div>
          <div class="modal-footer border-0 bg-light p-3 px-4">
            <button type="button" class="btn btn-secondary btn-sm rounded-pill px-3" data-action="close-modal">Cancel</button>
            <button type="button" class="btn btn-danger btn-sm rounded-pill px-4 fw-semibold shadow-sm" id="confirm-modal-action-btn">${esc(confirmText)}</button>
          </div>
        </div>
      </div>
    </div>
  `;
  $("#modal-container").innerHTML = modalHtml;

  const btn = $("#confirm-modal-action-btn");
  if (btn) {
    btn.onclick = () => {
      $("#modal-container").innerHTML = "";
      onConfirm();
    };
  }
}

function viewSettings() {
  return `
    <div class="container py-3">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 class="h4 fw-bold text-dark mb-1 d-flex align-items-center gap-2">
            <i class="bi bi-gear-fill text-secondary"></i> Preferences &amp; Platform Settings
          </h1>
          <p class="text-muted small mb-0">Manage demo account details and LocalStorage options.</p>
        </div>
      </div>

      <div class="row g-3">
        <div class="col-lg-8">
          <div class="card tm-card border-0 shadow-sm p-4 mb-3">
            <h2 class="h6 fw-bold text-dark mb-3">Account Information (Frontend Demo)</h2>
            <div class="mb-3">
              <label class="form-label small fw-semibold">Display Name</label>
              <input type="text" class="form-control" value="${esc(profile.displayName || 'Alex Morgan')}" id="settings-name-input">
            </div>
            <div class="mb-3">
              <label class="form-label small fw-semibold">Registered Email</label>
              <input type="email" class="form-control" value="${esc(session.email || 'alex.morgan@talentmatch.dev')}" readonly>
            </div>
            <div class="form-check form-switch mb-3">
              <input class="form-check-input" type="checkbox" id="publicProfileSwitch" ${profile.openToWork ? 'checked' : ''}>
              <label class="form-check-label small" for="publicProfileSwitch">Show my profile to hiring tech recruiters (Open to Work)</label>
            </div>
            <button type="button" class="btn btn-primary btn-sm rounded-pill px-4 fw-semibold" id="save-settings-btn">
              Save Account Changes
            </button>
          </div>

          <div class="card tm-card border-0 shadow-sm p-4">
            <h2 class="h6 fw-bold text-danger mb-2">Reset Demo Environment</h2>
            <p class="text-muted small mb-3">
              Restore default jobs, sample candidate applicants, and platform user accounts back to original values.
            </p>
            <button type="button" class="btn btn-outline-danger btn-sm rounded-pill px-4 fw-semibold" data-action="ask-reset">
              <i class="bi bi-arrow-counterclockwise me-1"></i> Factory Reset Demo Storage
            </button>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card tm-card border-0 shadow-sm p-4 bg-light">
            <h3 class="h6 fw-bold text-dark mb-2">TalentMatch.dev Architecture</h3>
            <p class="text-muted small mb-2">
              <strong>Tagline:</strong> "TalentMatch.dev – One Platform. Every Career Opportunity."
            </p>
            <p class="text-muted small mb-3">
              Built 100% with semantic HTML5, modern CSS3 Flexbox/Grid, and modular Vanilla JavaScript (ES6+). Zero external frameworks.
            </p>
            <div class="small text-muted border-top pt-2">
              <div>&bull; Project ID: <strong>PST_PD_005</strong></div>
              <div>&bull; Storage: <strong>HTML5 LocalStorage</strong></div>
              <div>&bull; Match Formula: <strong>Explainable Overlap</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============ 12. CENTRAL EVENT DISPATCHER ============

document.addEventListener("click", (e) => {

  if (e.target.id === "load-more-jobs-btn") {
    jobsDisplayLimit += 6;
    updateJobList();
    return;
  }

  const target = e.target.closest("[data-action]");
  if (!target) return;
  const action = target.getAttribute("data-action");

  // 1. Role Switcher
  if (action === "switch-role") {
    const newRole = target.getAttribute("data-role");
    if (newRole) {
      ui.role = newRole;
      session.role = newRole;
      save(KEYS.session, session);
      toast(`Switched perspective to ${newRole === 'admin' ? 'Admin Mode' : newRole === 'recruiter' ? 'Recruiter Mode' : 'Candidate Mode'}!`, "info");
      if (newRole === "recruiter") location.hash = "#/recruiter";
      else if (newRole === "admin") location.hash = "#/admin";
      else location.hash = "#/home";
      router();
    }
    return;
  }

  // 2. Job Save Toggle
  if (action === "toggle-save-job") {
    const jId = target.getAttribute("data-job-id");
    if (!savedJobs) savedJobs = [];
    const idx = savedJobs.indexOf(jId);
    if (idx >= 0) {
      savedJobs.splice(idx, 1);
      toast("Job removed from saved list.", "secondary");
    } else {
      savedJobs.push(jId);
      toast("Job saved successfully! Track it in Saved Jobs.", "success");
    }
    save(KEYS.savedJobs, savedJobs);
    router(true);
    return;
  }

  // 3. Open Apply Modal
  if (action === "open-apply-modal") {
    const jId = target.getAttribute("data-job-id");
    openApplicationModal(jId);
    return;
  }

  // 4. Withdraw Application
  if (action === "withdraw-application") {
    const appId = target.getAttribute("data-app-id");
    showConfirmModal("Withdraw Application", "Are you sure you want to withdraw this application? This action cannot be undone.", "Withdraw", () => {
      applications = applications.filter(a => a.id !== appId);
      save(KEYS.applications, applications);
      toast("Application has been withdrawn.", "warning");
      router(true);
    });
    return;
  }

  // 5. View Company Modal
  if (action === "view-company-modal") {
    const comp = target.getAttribute("data-company");
    if (comp) viewCompanyModal(comp);
    return;
  }

  // 6. Recruiter: Toggle Job Active/Closed
  if (action === "toggle-job-status") {
    const jId = target.getAttribute("data-job-id");
    const targetJob = jobs.find(j => j.id === jId);
    if (targetJob) {
      targetJob.active = targetJob.active === false ? true : false;
      save(KEYS.jobs, jobs);
      toast(`Job status updated: ${targetJob.active ? 'Active' : 'Closed'}`, "info");
      router(true);
    }
    return;
  }

  // 7. Recruiter / Admin: Delete Job
  if (action === "delete-job") {
    const jId = target.getAttribute("data-job-id");
    showConfirmModal("Delete Job Opportunity", "Are you sure you want to delete this job listing? It will be removed from all discovery views.", "Delete", () => {
      jobs = jobs.filter(j => j.id !== jId);
      save(KEYS.jobs, jobs);
      toast("Job listing removed.", "warning");
      router(true);
    });
    return;
  }

  // 8. Recruiter: Toggle Candidate Star / Shortlist
  if (action === "toggle-candidate-star") {
    const cId = target.getAttribute("data-cand-id");
    if (!shortlist) shortlist = [];
    const idx = shortlist.indexOf(cId);
    if (idx >= 0) {
      shortlist.splice(idx, 1);
      toast("Candidate removed from shortlist.", "secondary");
    } else {
      shortlist.push(cId);
      const cand = candidates.find(c => c.id === cId);
      if (cand && cand.reviewStatus !== "Shortlisted") {
        cand.reviewStatus = "Shortlisted";
        save(KEYS.candidates, candidates);
      }
      toast("Candidate added to Shortlist!", "success");
    }
    save(KEYS.shortlist, shortlist);
    router(true);
    return;
  }

  // 9. Recruiter: View Candidate Profile Modal
  if (action === "view-candidate-profile") {
    const cId = target.getAttribute("data-cand-id");
    viewCandidateModal(cId);
    return;
  }

  // 10. Admin: Toggle User Status
  if (action === "toggle-user-status") {
    const uId = target.getAttribute("data-user-id");
    const u = users.find(x => x.id === uId);
    if (u) {
      u.status = u.status === "active" ? "suspended" : "active";
      save(KEYS.users, users);
      toast(`User ${u.name} is now ${u.status}!`, "info");
      router(true);
    }
    return;
  }

  // 11. Admin: Delete User
  if (action === "delete-user") {
    const uId = target.getAttribute("data-user-id");
    showConfirmModal("Delete User Account", "Are you sure you want to permanently delete this user account from demo records?", "Delete", () => {
      users = users.filter(x => x.id !== uId);
      save(KEYS.users, users);
      toast("User account deleted.", "warning");
      router(true);
    });
    return;
  }


  // Quick Filters & Advanced Panel Toggle
  if (action === "toggle-advanced-filters") {
    const p = document.getElementById("tm-advanced-filters-panel");
    if (p) p.classList.toggle("d-none");
    return;
  }

  if (action === "quick-filter-workplace") {
    const val = target.getAttribute("data-val");
    ui.workplaceType = val;
    jobsDisplayLimit = 6;
    router(true);
    return;
  }

  if (action === "quick-filter-type") {
    const val = target.getAttribute("data-val");
    ui.jobType = val;
    jobsDisplayLimit = 6;
    router(true);
    return;
  }

  if (action === "trigger-resume-upload") {
    const rIn = document.getElementById("tm-resume-file-input") || document.getElementById("apply-resume-input");
    if (rIn) rIn.click();
    return;
  }

  // 12. Filter Chips
  if (action === "remove-filter-chip") {
    const key = target.getAttribute("data-key");
    if (key === "query") ui.query = "";
    else if (key === "company") ui.company = "";
    else if (key === "workplaceType") ui.workplaceType = "all";
    else if (key === "jobType") ui.jobType = "";
    else if (key === "level") ui.level = "";
    else if (key === "location") ui.location = "";
    else if (key === "dateFilter") { ui.dateFilter = "all"; ui.customFrom = ""; ui.customTill = ""; }
    updateJobList();
    return;
  }

  if (action === "clear-all-filters") {
    ui.query = "";
    ui.company = "";
    ui.workplaceType = "all";
    ui.jobType = "";
    ui.level = "";
    ui.location = "";
    ui.dateFilter = "all";
    ui.customFrom = "";
    ui.customTill = "";
    const qIn = $("#job-search-input"); if (qIn) qIn.value = "";
    const cIn = $("#company-search-input"); if (cIn) cIn.value = "";
    const wSel = $("#workplace-filter-select"); if (wSel) wSel.value = "all";
    const jSel = $("#job-type-filter-select"); if (jSel) jSel.value = "";
    const lSel = $("#level-filter-select"); if (lSel) lSel.value = "";
    const dSel = $("#date-filter-select"); if (dSel) dSel.value = "all";
    updateJobList();
    toast("All search filters reset.", "secondary");
    return;
  }

  // 13. Skill Matching: Remove Skill
  if (action === "remove-user-skill") {
    const sk = target.getAttribute("data-skill");
    profile.skills = (profile.skills || []).filter(s => s.toLowerCase() !== sk.toLowerCase());
    save(KEYS.profile, profile);
    toast(`Skill '${sk}' removed. Match scores recalculated!`, "info");
    router(true);
    return;
  }

  // 14. Skill Matching: Quick Add Skill
  if (action === "quick-add-skill") {
    const sk = target.getAttribute("data-skill");
    if (!profile.skills) profile.skills = [];
    if (!profile.skills.map(x => x.toLowerCase()).includes(sk.toLowerCase())) {
      profile.skills.push(sk);
      save(KEYS.profile, profile);
      toast(`Skill '${sk}' added to your profile! Match score boosted.`, "success");
      router(true);
    }
    return;
  }

  // 15. Open Post Job Modal
  if (action === "open-post-job-modal") {
    openPostJobModal();
    return;
  }

  // 16. Ask Reset
  if (action === "ask-reset") {
    showConfirmModal("Reset Platform Demo Data", "This will reset all modified jobs, applications, candidate statuses, and profiles back to initial factory defaults. Proceed?", "Reset Defaults", () => {
      resetPlatformData();
    });
    return;
  }

  // 17. Close Modals
  if (action === "close-modal") {
    $("#modal-container").innerHTML = "";
    return;
  }

  // 18. Auth actions
  if (action === "quick-fill") {
    const role = target.getAttribute("data-fill");
    const eIn = $("#auth-email"), pIn = $("#auth-password");
    if (eIn && pIn) {
      if (role === "developer" || role === "applicant") {
        eIn.value = "alex.morgan@talentmatch.dev";
        pIn.value = "TalentMatch2026!";
      } else {
        eIn.value = "sarah.j@google.com";
        pIn.value = "Recruiter2026!";
      }
      toast(`Quick-filled credentials for ${role}!`, "info");
    }
    return;
  }

  if (action === "toggle-password") {
    const pIn = $("#auth-password");
    const eye = target.querySelector("i") || target;
    if (pIn) {
      if (pIn.type === "password") {
        pIn.type = "text";
        if (eye) eye.className = "bi bi-eye-slash";
      } else {
        pIn.type = "password";
        if (eye) eye.className = "bi bi-eye";
      }
    }
    return;
  }

  if (action === "forgot-password") {
    showForgotPasswordModal();
    return;
  }

  if (action === "logout") {
    session.loggedIn = false;
    save(KEYS.session, session);
    toast("You have logged out successfully.", "info");
    location.hash = "#/login";
    return;
  }

  // 19. Profile Modals & Mode Toggle
  if (action === "toggle-profile-mode") {
    ui.profileMode = ui.profileMode === "public" ? "edit" : "public";
    toast(`Switched to ${ui.profileMode === "public" ? "Public Recruiter View Mode" : "Profile Edit Mode"}!`, "info");
    router(true);
    return;
  }

  if (action === "open-edit-intro-modal") { openEditIntroModal(); return; }
  if (action === "open-edit-about-modal") { openEditAboutModal(); return; }
  if (action === "open-add-exp-modal") { openAddExperienceModal(); return; }
  if (action === "open-add-edu-modal") { openAddEducationModal(); return; }
  if (action === "open-add-proj-modal") { openAddProjectModal(); return; }
  if (action === "open-add-cert-modal") { openAddCertModal(); return; }
  if (action === "open-add-ach-modal") { openAddAchModal(); return; }

  if (action === "delete-exp") {
    const id = target.getAttribute("data-id");
    profile.experience = (profile.experience || []).filter(x => x.id !== id);
    save(KEYS.profile, profile);
    toast("Experience entry deleted.", "info");
    router(true);
    return;
  }

  if (action === "delete-edu") {
    const id = target.getAttribute("data-id");
    profile.education = (profile.education || []).filter(x => x.id !== id);
    save(KEYS.profile, profile);
    toast("Education entry deleted.", "info");
    router(true);
    return;
  }

  if (action === "delete-proj") {
    const id = target.getAttribute("data-id");
    profile.projects = (profile.projects || []).filter(x => x.id !== id);
    save(KEYS.profile, profile);
    toast("Project entry deleted.", "info");
    router(true);
    return;
  }

  if (action === "delete-cert") {
    const id = target.getAttribute("data-id");
    profile.certifications = (profile.certifications || []).filter(x => x.id !== id);
    save(KEYS.profile, profile);
    toast("Certification entry deleted.", "info");
    router(true);
    return;
  }

  if (action === "delete-ach") {
    const id = target.getAttribute("data-id");
    profile.achievements = (profile.achievements || []).filter(x => x.id !== id);
    save(KEYS.profile, profile);
    toast("Achievement entry deleted.", "info");
    router(true);
    return;
  }

  if (action === "trigger-avatar-upload") {
    const inEl = $("#avatar-file-input");
    if (inEl) inEl.click();
    return;
  }

  if (action === "trigger-cover-upload") {
    const inEl = $("#cover-file-input");
    if (inEl) inEl.click();
    return;
  }

  if (action === "download-resume-btn") {
    toast(`Downloading verified resume: ${profile.resume && profile.resume.fileName ? profile.resume.fileName : 'Resume.pdf'}`, "success");
    return;
  }

  if (action === "delete-resume-btn") {
    showConfirmModal("Delete Stored Resume", "Are you sure you want to remove your stored resume document?", "Delete", () => {
      profile.resume = null;
      save(KEYS.profile, profile);
      toast("Stored resume removed.", "warning");
      router(true);
    });
    return;
  }
});

// Submit Listeners
document.addEventListener("submit", (e) => {
  // 1. Application Submit Form
  if (e.target.id === "apply-form") {
    e.preventDefault();
    const jId = e.target.getAttribute("data-job-id");
    const job = jobs.find(j => j.id === jId);
    if (!job) return;

    const note = $("#apply-cover-note") ? $("#apply-cover-note").value.trim() : "";
    const m = calculateMatch(profile.skills, job.requiredSkills);

    const newApp = {
      id: "app-" + Date.now(),
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      location: job.location,
      salary: job.salary,
      appliedDate: new Date().toISOString(),
      status: "Applied",
      matchScore: m.score,
      note: note || "Application submitted via 1-click apply."
    };

    if (!applications) applications = [];
    // remove duplicate if exists
    applications = applications.filter(a => a.jobId !== job.id);
    applications.unshift(newApp);
    save(KEYS.applications, applications);

    // Also add candidate entry to recruiter pool
    candidates.unshift({
      id: "cand-" + Date.now(),
      jobId: job.id,
      displayName: profile.displayName || "Alex Morgan",
      email: profile.email || "alex.morgan@talentmatch.dev",
      skills: [...(profile.skills || [])],
      experienceLevel: profile.experienceLevel || "Entry Level",
      education: profile.education && profile.education[0] ? `${profile.education[0].degree}, ${profile.education[0].school}` : "B.S. in Computer Science",
      experience: profile.experience && profile.experience[0] ? `${profile.experience[0].role} @ ${profile.experience[0].company}` : "Frontend Developer",
      reviewStatus: "Applied",
      appliedDate: new Date().toISOString(),
      note: note
    });
    save(KEYS.candidates, candidates);

    $("#modal-container").innerHTML = "";
    toast(`Application submitted to ${job.company} successfully! Track it under Applications.`, "success");
    router(true);
    return;
  }

  // 2. Post Job Form
  if (e.target.id === "post-job-form") {
    e.preventDefault();
    const title = $("#pj-title").value.trim();
    const company = $("#pj-company").value.trim();
    const jobType = $("#pj-type").value;
    const workplaceType = $("#pj-workplace").value;
    const experienceLevel = $("#pj-level").value;
    const location = $("#pj-location").value.trim();
    const salary = $("#pj-salary").value.trim();
    const skills = $("#pj-skills").value.split(",").map(s => s.trim()).filter(Boolean);
    const description = $("#pj-description").value.trim();
    const deadline = $("#pj-deadline") ? $("#pj-deadline").value : "2026-12-31";

    if (!title || !company || skills.length === 0 || !description) {
      toast("Please complete all required fields.", "danger");
      return;
    }

    const newJob = {
      id: "job-" + Date.now(),
      title,
      company,
      jobType,
      workplaceType,
      experienceLevel,
      location,
      salary,
      requiredSkills: skills,
      description,
      responsibilities: [
        "Deliver high-quality software aligned with business goals.",
        "Collaborate actively with teammates and mentor peers.",
        "Maintain high test coverage and accessibility standards."
      ],
      eligibility: [
        "Relevant technical background or industry equivalent experience.",
        "Demonstrated proficiency in required core technical skills."
      ],
      postedDate: new Date().toISOString(),
      deadline,
      active: true
    };

    jobs.unshift(newJob);
    save(KEYS.jobs, jobs);

    $("#modal-container").innerHTML = "";
    toast("New job opening published successfully!", "success");
    router(true);
    return;
  }

  // 3. Add Skill Form
  if (e.target.id === "add-skill-form") {
    e.preventDefault();
    const inEl = $("#new-skill-input");
    if (!inEl) return;
    const sk = inEl.value.trim();
    if (sk) {
      if (!profile.skills) profile.skills = [];
      if (!profile.skills.map(x => x.toLowerCase()).includes(sk.toLowerCase())) {
        profile.skills.push(sk);
        save(KEYS.profile, profile);
        toast(`Skill '${sk}' added to your profile!`, "success");
        router(true);
      } else {
        toast(`Skill '${sk}' is already in your profile!`, "info");
      }
      inEl.value = "";
    }
    return;
  }

  // 4. Auth Sign In / Sign Up Form
  if (e.target.id === "auth-form" || e.target.id === "auth-clean-form") {
    e.preventDefault();
    const isSignup = location.hash.includes("signup") || e.target.getAttribute("data-mode") === "signup";
    const eIn = $("#auth-email");
    const pIn = $("#auth-password");
    const nIn = $("#auth-name");
    const rIn = $("#auth-selected-role");

    if (!eIn || !eIn.value.trim()) {
      toast("Please enter your email address.", "warning");
      if (eIn) eIn.focus();
      return;
    }

    if (!pIn || !pIn.value.trim()) {
      toast("Please enter your password.", "warning");
      if (pIn) pIn.focus();
      return;
    }

    if (isSignup && pIn.value.length < 6) {
      toast("Password should be at least 6 characters long.", "warning");
      pIn.focus();
      return;
    }

    const email = eIn.value.trim();
    const chosenRole = (rIn && rIn.value) ? rIn.value : "candidate";
    let rawName = (nIn && nIn.value.trim()) ? nIn.value.trim() : "";
    if (!rawName) {
      const handle = email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, l => l.toUpperCase());
      rawName = (handle.length >= 3) ? handle : (chosenRole === "recruiter" ? "Tech Recruiter" : "Alex Morgan");
    }

    session.loggedIn = true;
    session.email = email;
    session.name = rawName;
    session.role = chosenRole === "recruiter" ? "recruiter" : "candidate";
    ui.role = session.role;

    profile.displayName = rawName;
    profile.email = email;

    save(KEYS.session, session);
    save(KEYS.profile, profile);

    toast(isSignup ? "Account created successfully! Welcome to TalentMatch.dev." : "Signed in successfully!", "success");
    location.hash = "#/home";
    router();
    return;
  }
});

// Change Listeners
document.addEventListener("change", (e) => {
  // 1. Recruiter Status Changer
  if (e.target.classList.contains("status-changer-select")) {
    const cId = e.target.getAttribute("data-cand-id");
    const newStatus = e.target.value;
    const cand = candidates.find(c => c.id === cId);
    if (cand) {
      cand.reviewStatus = newStatus;
      save(KEYS.candidates, candidates);
      toast(`Candidate ${cand.displayName} marked as ${newStatus}!`, "info");
    }
    return;
  }

  // 2. Simulator Job Selection
  if (e.target.id === "simulator-job-select") {
    ui.selectedJobId = e.target.value;
    router(true);
    return;
  }

  // 3. Filters
  if (e.target.id === "workplace-filter-select") {
    ui.workplaceType = e.target.value;
    updateJobList();
    return;
  }

  if (e.target.id === "job-type-filter-select") {
    ui.jobType = e.target.value;
    updateJobList();
    return;
  }

  if (e.target.id === "level-filter-select") {
    ui.level = e.target.value;
    updateJobList();
    return;
  }

  if (e.target.id === "date-filter-select") {
    ui.dateFilter = e.target.value;
    const cC = $("#custom-date-container");
    if (cC) {
      if (ui.dateFilter === "custom") cC.classList.remove("d-none");
      else cC.classList.add("d-none");
    }
    updateJobList();
    return;
  }

  if (e.target.id === "sort-select") {
    ui.sort = e.target.value;
    updateJobList();
    return;
  }

  // 4. File uploads
  if (e.target.id === "avatar-file-input") {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (re) => {
        profile.avatarUrl = re.target.result;
        save(KEYS.profile, profile);
        toast("Profile photo updated!", "success");
        router(true);
      };
      reader.readAsDataURL(file);
    }
    return;
  }

  if (e.target.id === "cover-file-input") {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (re) => {
        profile.coverUrl = re.target.result;
        save(KEYS.profile, profile);
        toast("Cover banner updated!", "success");
        router(true);
      };
      reader.readAsDataURL(file);
    }
    return;
  }

  if (e.target.id === "resume-file-input") {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        toast("Resume file size exceeds 3MB limit.", "danger");
        return;
      }
      profile.resume = {
        fileName: file.name,
        fileSize: Math.round(file.size / 1024) + " KB",
        uploadDate: new Date().toISOString().split("T")[0],
        dataUrl: ""
      };
      save(KEYS.profile, profile);
      toast("Resume uploaded successfully!", "success");
      router(true);
    }
    return;
  }
});

// Input Listeners
document.addEventListener("input", (e) => {
  if (e.target.id === "global-search-input" || e.target.id === "global-search-mobile") {
    ui.query = e.target.value;
    if (location.hash !== "#/jobs" && !location.hash.startsWith("#/jobs")) {
      location.hash = "#/jobs";
    } else {
      updateJobList();
    }
    return;
  }

  if (e.target.id === "job-search-input") {
    ui.query = e.target.value;
    updateJobList();
    return;
  }

  if (e.target.id === "company-search-input") {
    ui.company = e.target.value;
    updateJobList();
    return;
  }
});

// Settings save button
document.addEventListener("click", (e) => {

  if (e.target.id === "load-more-jobs-btn") {
    jobsDisplayLimit += 6;
    updateJobList();
    return;
  }

  if (e.target.id === "save-settings-btn") {
    const n = $("#settings-name-input");
    const pSw = $("#publicProfileSwitch");
    if (n && n.value.trim()) {
      profile.displayName = n.value.trim();
      if (session) session.name = profile.displayName;
    }
    if (pSw) {
      profile.openToWork = pSw.checked;
    }
    save(KEYS.profile, profile);
    save(KEYS.session, session);
    toast("Settings saved successfully!", "success");
    router();
  }

  if (e.target.id === "apply-custom-dates-btn") {
    const fIn = $("#custom-from-date");
    const tIn = $("#custom-till-date");
    if (fIn) ui.customFrom = fIn.value;
    if (tIn) ui.customTill = tIn.value;
    updateJobList();
    toast("Custom date range filter applied.", "info");
  }

  if (e.target.id === "clear-global-search") {
    ui.query = "";
    const g1 = $("#global-search-input"), g2 = $("#global-search-mobile");
    if (g1) g1.value = "";
    if (g2) g2.value = "";
    if (location.hash.startsWith("#/jobs")) updateJobList();
  }
});

// ============ 12B. SEMANTIC PLATFORM FOOTER ============
function renderFooter(page) {
  const container = $("#footer-container");
  if (!container) return;

  if (page === "login" || page === "signup") {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = `
    <footer class="tm-main-footer py-5 border-top bg-white mt-auto" aria-label="Platform footer">
      <div class="container-xl">
        <!-- Top Footer Grid -->
        <div class="row g-4 mb-4">
          <!-- Col 1: Brand & Tagline & Mission -->
          <div class="col-lg-4 col-md-6">
            <div class="d-flex align-items-center gap-2 mb-2.5">
              <span class="tm-brand-logo-icon">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="2.5" stroke-dasharray="3 2"/>
                  <circle cx="16" cy="16" r="7.5" fill="currentColor"/>
                  <circle cx="16" cy="16" r="3" fill="#FFFFFF"/>
                </svg>
              </span>
              <span class="fw-bold fs-5 tracking-tight lh-1 text-dark">TalentMatch<span class="text-primary">.dev</span></span>
            </div>
            <p class="text-primary fw-semibold small mb-2">
              “TalentMatch.dev – One Platform. Every Career Opportunity.”
            </p>
            <p class="text-muted small mb-3" style="max-width: 340px; line-height: 1.55;">
              An explainable tech career matching platform connecting developers and students with verified engineering jobs and technology careers through transparent skill overlap algorithms.
            </p>
            <div class="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-success-subtle text-success border border-success-subtle small fw-medium">
              <i class="bi bi-circle-fill" style="font-size: 0.5rem;"></i>
              <span>Platform Online &middot; All Systems Operational</span>
            </div>
          </div>

          <!-- Col 2: For Candidates -->
          <div class="col-lg-2 col-md-3 col-6">
            <h4 class="tm-footer-heading">For Candidates</h4>
            <ul class="list-unstyled mb-0 d-flex flex-column gap-2">
              <li><a href="#/jobs" class="tm-footer-link">Browse Tech Jobs</a></li>
                            <li><a href="#/skill-matching" class="tm-footer-link">AI Skill Match Engine</a></li>
              <li><a href="#/saved" class="tm-footer-link">Saved Opportunities</a></li>
              <li><a href="#/applications" class="tm-footer-link">Application Tracker</a></li>
              <li><a href="#/profile" class="tm-footer-link">Candidate Profile &amp; CV</a></li>
            </ul>
          </div>

          <!-- Col 3: For Employers -->
          <div class="col-lg-3 col-md-3 col-6">
            <h4 class="tm-footer-heading">For Employers</h4>
            <ul class="list-unstyled mb-0 d-flex flex-column gap-2">
              <li><a href="#/recruiter" class="tm-footer-link">Recruiter Pipeline Hub</a></li>
              <li><a href="#/recruiter/jobs" class="tm-footer-link">Manage Active Postings</a></li>
              <li><a href="#/recruiter/candidates" class="tm-footer-link">Candidate Review Pool</a></li>
              <li><a href="#/shortlist" class="tm-footer-link">Shortlisted Talent</a></li>
              <li><a href="javascript:void(0)" class="tm-footer-link" data-action="open-post-job-modal">Publish a New Role</a></li>
              <li><a href="#/home" class="tm-footer-link">Top Partner Employers</a></li>
            </ul>
          </div>

          <!-- Col 4: Platform & Governance -->
          <div class="col-lg-3 col-md-6">
            <h4 class="tm-footer-heading">Platform &amp; System</h4>
            <ul class="list-unstyled mb-3 d-flex flex-column gap-2">
              <li><a href="#/admin" class="tm-footer-link">Admin Control Center</a></li>
              <li><a href="#/admin/users" class="tm-footer-link">Registered User Accounts</a></li>
              <li><a href="#/admin/companies" class="tm-footer-link">Verified Companies Directory</a></li>
              <li><a href="#/admin/settings" class="tm-footer-link">Platform Maintenance &amp; Reset</a></li>
              <li><a href="#/settings" class="tm-footer-link">Account Preferences</a></li>
            </ul>
            <div class="p-2.5 rounded-3 bg-light border">
              <span class="text-dark small fw-semibold d-block mb-1">Pure Frontend Architecture</span>
              <p class="text-muted mb-0" style="font-size:0.75rem;">
                Powered 100% by HTML5, CSS3, ES6+ Vanilla JS, and LocalStorage. Zero backend dependencies.
              </p>
            </div>
          </div>
        </div>

        <!-- Bottom Copyright & Back to Top -->
        <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 pt-4 border-top">
          <div class="text-muted small">
            &copy; 2026 <strong>TalentMatch.dev</strong>. All rights reserved. Built for engineering excellence.
          </div>
          <div class="d-flex align-items-center gap-3">
            <span class="text-muted small d-none d-sm-inline">Project ID: <code>PST_PD_005</code></span>
            <a href="#main-content" class="text-decoration-none text-muted small d-flex align-items-center gap-1 hover-text-primary">
              <i class="bi bi-arrow-up-circle"></i> Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// ============ 13. ROUTER & LIFECYCLE ============

function router(keepScroll = false) {
  const [first, a, b] = location.hash.replace(/^#\/?/, "").split("/");
  let page = first;
  const isAuth = page === "login" || page === "signup";

  // Enforce Auth Gateway: If not logged in, only allow login / signup
  if (!session || !session.loggedIn) {
    if (!isAuth) {
      page = "login";
      location.hash = "#/login";
    }
  } else {
    // If logged in and at empty root or auth page, redirect to home
    if (!page || page === "login" || page === "signup") {
      page = "home";
      location.hash = "#/home";
    }
  }

  const main = $("#main-content");

  if (isAuth) {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.classList.add("auth-mode");
    if (main) main.className = "auth-main-full";
  } else {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    document.body.classList.remove("auth-mode");
    if (main) main.className = "container-xl my-3";
  }

  if (!isAuth) {
    if (codingCanvasAnimId) {
      cancelAnimationFrame(codingCanvasAnimId);
      codingCanvasAnimId = null;
    }
    if (typewriterTimer) {
      clearTimeout(typewriterTimer);
      typewriterTimer = null;
    }
  }

  // Auto-sync UI role with page navigation
  if (page === "recruiter") ui.role = "recruiter";
  else if (page === "admin") ui.role = "admin";
  else if (["home", "jobs", "internships", "skill-matching", "saved", "applications"].includes(page)) {
    if (ui.role !== "admin" && ui.role !== "recruiter") ui.role = "candidate";
  }

  try {
    const views = {
      home: viewHome,
      jobs: () => (a ? viewJobDetails(a) : viewJobs()),
      internships: () => { location.hash = "#/jobs"; return viewJobs(); },
      "skill-matching": viewSkillMatching,
      saved: viewSavedJobs,
      applications: viewApplications,
      profile: viewProfile,
      shortlist: () => viewRecruiter("shortlist"),
      recruiter: () => viewRecruiter(a),
      admin: () => viewAdmin(a),
      settings: viewSettings,
      login: () => viewAuth("login"),
      signup: () => viewAuth("signup")
    };

    renderNavbar(page);
    renderFooter(page);
    const contentFn = views[page] || views.jobs;
    $("#app-root").innerHTML = contentFn();

    if (page === "jobs" && !a) updateJobList();
  } catch (error) {
    console.error("Router error:", error);
    $("#app-root").innerHTML = `
      <div class="text-center py-5">
        <h2 class="h5 fw-bold text-dark mb-2">Notice: Page Encountered an Issue</h2>
        <p class="text-muted small mb-3">We couldn't render this view. Try restoring default sample records.</p>
        <button class="btn btn-primary btn-sm rounded-pill px-4" data-action="ask-reset">Restore Defaults</button>
      </div>
    `;
  }

  if (!keepScroll) window.scrollTo(0, 0);
}

window.addEventListener("hashchange", () => router());

// Initialize platform on DOM ready
loadAll();
router();


