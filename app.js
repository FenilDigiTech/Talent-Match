/**
 * TalentMatch — Lightweight Tech Job Search & Explainable Candidate Matching
 * Project ID: PST_PD_005 | Group: G408 | Batch: 2026 Level 3 (Stretch)
 * Engineers: Fenil Bhavinkumar Patel (PST-26-0025) & Aayush Hetalkumar Suthar (PST-26-0014)
 */

/* ==========================================================================
   1. SAMPLE DATASETS (Embedded for zero-dependency portability)
   ========================================================================== */
const SAMPLE_JOBS = [
  {
    id: "job-001",
    title: "Junior Frontend Developer",
    company: "PixelCraft Studios",
    location: "Remote",
    experienceLevel: "Entry-Level",
    requiredSkills: ["HTML5", "CSS3", "JavaScript", "Git"],
    description: "Join our dynamic design-engineering squad building responsive web applications with modern HTML, CSS, and vanilla JavaScript. Ideal for entry-level developers eager to craft accessible interfaces.",
    source: "Sample Dataset",
    externalUrl: null
  },
  {
    id: "job-002",
    title: "Senior React Engineer",
    company: "CloudScale Systems",
    location: "Bengaluru, India",
    experienceLevel: "Senior-Level",
    requiredSkills: ["React", "JavaScript", "TypeScript", "Redux", "REST API", "Git"],
    description: "Lead the frontend architecture of our multi-tenant cloud analytics dashboard. You will mentor junior developers, optimize Core Web Vitals, and collaborate on API contracts.",
    source: "Sample Dataset",
    externalUrl: null
  },
  {
    id: "job-003",
    title: "Full Stack JavaScript Developer",
    company: "Nexus FinTech Labs",
    location: "Hybrid (Mumbai, India)",
    experienceLevel: "Mid-Level",
    requiredSkills: ["JavaScript", "Node.js", "Express", "React", "MongoDB", "Git"],
    description: "Build high-throughput payment gateways and customer dashboards. You will work across both client-side interfaces and scalable Node.js microservices.",
    source: "Sample Dataset",
    externalUrl: null
  },
  {
    id: "job-004",
    title: "Backend Python / Django Specialist",
    company: "Veritas Health Informatics",
    location: "Remote",
    experienceLevel: "Mid-Level",
    requiredSkills: ["Python", "Django", "PostgreSQL", "Docker", "REST API"],
    description: "Develop secure, HIPAA-compliant backend services for telehealth consultation workflows. Strong relational schema design and automated testing required.",
    source: "Sample Dataset",
    externalUrl: null
  },
  {
    id: "job-005",
    title: "DevOps & Cloud Infrastructure Engineer",
    company: "AuraGrid Networks",
    location: "Pune, India",
    experienceLevel: "Mid-Level",
    requiredSkills: ["Docker", "Kubernetes", "AWS", "Linux", "CI/CD", "Git"],
    description: "Automate containerized deployments across multi-region Kubernetes clusters. Maintain automated CI/CD pipelines and infrastructure monitoring.",
    source: "Sample Dataset",
    externalUrl: null
  },
  {
    id: "job-006",
    title: "Mobile App Engineer (React Native)",
    company: "SwiftPulse Mobility",
    location: "Remote",
    experienceLevel: "Mid-Level",
    requiredSkills: ["React Native", "JavaScript", "TypeScript", "Redux", "Mobile UI"],
    description: "Craft cross-platform iOS and Android mobile experiences with 60fps animations, offline-first syncing, and push notification orchestration.",
    source: "Sample Dataset",
    externalUrl: null
  },
  {
    id: "job-007",
    title: "UI/UX Front-End Designer & Engineer",
    company: "Artisan Design Labs",
    location: "Hybrid (Ahmedabad, India)",
    experienceLevel: "Entry-Level",
    requiredSkills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Figma", "UI/UX"],
    description: "Bridge the gap between design mockups and production markup. Build pixel-perfect Bootstrap layouts, WCAG-compliant color contrasts, and interactive design prototypes.",
    source: "Sample Dataset",
    externalUrl: null
  },
  {
    id: "job-008",
    title: "Lead Software Architect",
    company: "Beacon Enterprise Solutions",
    location: "Hyderabad, India",
    experienceLevel: "Senior-Level",
    requiredSkills: ["Java", "Spring Boot", "Microservices", "Docker", "Kubernetes", "System Design"],
    description: "Design resilient distributed architectures handling tens of thousands of concurrent requests. Establish coding standards, review RFCs, and drive technical roadmaps.",
    source: "Sample Dataset",
    externalUrl: null
  },
  {
    id: "job-009",
    title: "QA Automation Engineer",
    company: "Optima Quality Labs",
    location: "Remote",
    experienceLevel: "Mid-Level",
    requiredSkills: ["JavaScript", "Playwright", "Cypress", "Git", "CI/CD"],
    description: "Create end-to-end regression suites and automated test harnesses for modern web applications. Help engineering teams ship bug-free releases every sprint.",
    source: "Sample Dataset",
    externalUrl: null
  },
  {
    id: "job-010",
    title: "Data Platform & ETL Developer",
    company: "DataVibe Analytics",
    location: "Bengaluru, India",
    experienceLevel: "Mid-Level",
    requiredSkills: ["Python", "SQL", "PostgreSQL", "Apache Spark", "Docker"],
    description: "Build high-volume streaming and batch ingestion pipelines. Transform raw telemetry data into clean analytical marts for business intelligence teams.",
    source: "Sample Dataset",
    externalUrl: null
  },
  {
    id: "job-011",
    title: "Junior Web Applications Intern",
    company: "InnovateX Tech Incubator",
    location: "Remote",
    experienceLevel: "Entry-Level",
    requiredSkills: ["HTML5", "CSS3", "JavaScript"],
    description: "An exciting entry-level internship working alongside senior mentors to build web components, documentation sites, and interactive tools for early-stage founders.",
    source: "Sample Dataset",
    externalUrl: null
  },
  {
    id: "job-012",
    title: "Open Source Technology Apprentice",
    company: "Community Code Foundation",
    location: "Remote",
    experienceLevel: "Entry-Level",
    requiredSkills: [],
    description: "An open exploratory apprenticeship designed for enthusiastic learners exploring career pathways in software. No prior technical requirements or required skills needed—we provide holistic mentorship and collaborative onboarding.",
    source: "Sample Dataset",
    externalUrl: null
  },
  {
    id: "job-013",
    title: "Staff Security Engineer",
    company: "CyberShield Defense",
    location: "Hybrid (Bengaluru, India)",
    experienceLevel: "Senior-Level",
    requiredSkills: ["Linux", "Python", "Docker", "OWASP", "Cloud Security", "Git"],
    description: "Safeguard cloud infrastructure and application attack surfaces through proactive threat modeling, vulnerability scanning, and secure code review practices.",
    source: "Sample Dataset",
    externalUrl: null
  }
];

const SAMPLE_CANDIDATES = [
  {
    id: "cand-001",
    displayName: "Aarav Sharma",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Git", "Bootstrap"],
    experienceLevel: "Entry-Level",
    reviewStatus: "Shortlisted"
  },
  {
    id: "cand-002",
    displayName: "Priya Nair",
    skills: ["React", "JavaScript", "TypeScript", "Redux", "REST API", "Git", "HTML5", "CSS3"],
    experienceLevel: "Senior-Level",
    reviewStatus: "Reviewing"
  },
  {
    id: "cand-003",
    displayName: "Rohan Deshmukh",
    skills: ["JavaScript", "Node.js", "Express", "React", "MongoDB", "Git", "Docker"],
    experienceLevel: "Mid-Level",
    reviewStatus: "Reviewing"
  },
  {
    id: "cand-004",
    displayName: "Sneha Iyer",
    skills: ["Python", "Django", "PostgreSQL", "Docker", "REST API", "Linux", "Git"],
    experienceLevel: "Mid-Level",
    reviewStatus: "Shortlisted"
  },
  {
    id: "cand-005",
    displayName: "Vikram Malhotra",
    skills: ["Docker", "Kubernetes", "AWS", "Linux", "CI/CD", "Git", "Python"],
    experienceLevel: "Mid-Level",
    reviewStatus: "Shortlisted"
  },
  {
    id: "cand-006",
    displayName: "Ananya Joshi",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Figma", "UI/UX"],
    experienceLevel: "Entry-Level",
    reviewStatus: "Rejected"
  },
  {
    id: "cand-007",
    displayName: "Karan Verma",
    skills: ["Java", "Spring Boot", "Microservices", "Docker", "Kubernetes", "System Design", "Git"],
    experienceLevel: "Senior-Level",
    reviewStatus: "Reviewing"
  },
  {
    id: "cand-008",
    displayName: "Dev Mehta",
    skills: ["HTML5", "CSS3", "JavaScript", "Python"],
    experienceLevel: "Entry-Level",
    reviewStatus: "Reviewing"
  }
];

const DEFAULT_APPLICANT = {
  id: "applicant-001",
  displayName: "Alex Morgan",
  skills: ["JavaScript", "HTML5", "CSS3", "React", "Git"],
  experienceLevel: "Mid-Level"
};

/* ==========================================================================
   2. STORAGE SERVICE (Safe LocalStorage with Try/Catch & Fallbacks)
   ========================================================================== */
const STORAGE_KEYS = {
  JOBS: 'talentmatch_jobs_v1',
  APPLICANT: 'talentmatch_applicant_v1',
  SHORTLIST: 'talentmatch_shortlist_v1',
  CANDIDATES: 'talentmatch_candidates_v1'
};

function safeGetItem(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (err) {
    console.warn(`[StorageService] Failed to read key "${key}":`, err);
    return null;
  }
}

function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (err) {
    console.error(`[StorageService] Failed to write key "${key}":`, err);
    return false;
  }
}

const StorageService = {
  init() {
    let jobs = safeGetItem(STORAGE_KEYS.JOBS);
    if (!Array.isArray(jobs) || jobs.length === 0) {
      jobs = JSON.parse(JSON.stringify(SAMPLE_JOBS));
      safeSetItem(STORAGE_KEYS.JOBS, jobs);
    }

    let candidates = safeGetItem(STORAGE_KEYS.CANDIDATES);
    if (!Array.isArray(candidates) || candidates.length === 0) {
      candidates = JSON.parse(JSON.stringify(SAMPLE_CANDIDATES));
      safeSetItem(STORAGE_KEYS.CANDIDATES, candidates);
    }

    let applicant = safeGetItem(STORAGE_KEYS.APPLICANT);
    if (!applicant || !applicant.displayName || !Array.isArray(applicant.skills)) {
      applicant = JSON.parse(JSON.stringify(DEFAULT_APPLICANT));
      safeSetItem(STORAGE_KEYS.APPLICANT, applicant);
    }

    let shortlist = safeGetItem(STORAGE_KEYS.SHORTLIST);
    if (!Array.isArray(shortlist)) {
      shortlist = [];
      safeSetItem(STORAGE_KEYS.SHORTLIST, shortlist);
    }

    return { jobs, candidates, applicant, shortlist };
  },

  getJobs() {
    const jobs = safeGetItem(STORAGE_KEYS.JOBS);
    if (Array.isArray(jobs) && jobs.length > 0) return jobs;
    const fallback = JSON.parse(JSON.stringify(SAMPLE_JOBS));
    safeSetItem(STORAGE_KEYS.JOBS, fallback);
    return fallback;
  },

  getJobById(id) {
    return this.getJobs().find((j) => j.id === id) || null;
  },

  getApplicant() {
    const applicant = safeGetItem(STORAGE_KEYS.APPLICANT);
    if (applicant && applicant.displayName && Array.isArray(applicant.skills)) {
      return applicant;
    }
    const fallback = JSON.parse(JSON.stringify(DEFAULT_APPLICANT));
    safeSetItem(STORAGE_KEYS.APPLICANT, fallback);
    return fallback;
  },

  saveApplicant(applicant) {
    const sanitized = {
      id: applicant.id || 'applicant-001',
      displayName: applicant.displayName.trim(),
      skills: applicant.skills.map((s) => s.trim()).filter(Boolean),
      experienceLevel: applicant.experienceLevel
    };
    return safeSetItem(STORAGE_KEYS.APPLICANT, sanitized);
  },

  getShortlist() {
    const list = safeGetItem(STORAGE_KEYS.SHORTLIST);
    return Array.isArray(list) ? list : [];
  },

  isShortlisted(jobId) {
    return this.getShortlist().includes(jobId);
  },

  toggleShortlist(jobId) {
    const list = this.getShortlist();
    const index = list.indexOf(jobId);
    let added = false;
    if (index === -1) {
      list.push(jobId);
      added = true;
    } else {
      list.splice(index, 1);
      added = false;
    }
    safeSetItem(STORAGE_KEYS.SHORTLIST, list);
    return { added, count: list.length, jobIds: list };
  },

  getCandidates() {
    const candidates = safeGetItem(STORAGE_KEYS.CANDIDATES);
    if (Array.isArray(candidates) && candidates.length > 0) return candidates;
    const fallback = JSON.parse(JSON.stringify(SAMPLE_CANDIDATES));
    safeSetItem(STORAGE_KEYS.CANDIDATES, fallback);
    return fallback;
  },

  getCandidateById(id) {
    return this.getCandidates().find((c) => c.id === id) || null;
  },

  updateCandidateStatus(id, newStatus) {
    const allowed = ['Shortlisted', 'Reviewing', 'Rejected'];
    if (!allowed.includes(newStatus)) {
      throw new Error(`Invalid candidate reviewStatus: ${newStatus}`);
    }
    const candidates = this.getCandidates();
    const target = candidates.find((c) => c.id === id);
    if (!target) return false;
    target.reviewStatus = newStatus;
    return safeSetItem(STORAGE_KEYS.CANDIDATES, candidates);
  },

  resetAll() {
    try {
      localStorage.removeItem(STORAGE_KEYS.JOBS);
      localStorage.removeItem(STORAGE_KEYS.APPLICANT);
      localStorage.removeItem(STORAGE_KEYS.SHORTLIST);
      localStorage.removeItem(STORAGE_KEYS.CANDIDATES);
      return this.init();
    } catch (err) {
      console.error('[StorageService] resetAll error:', err);
      return null;
    }
  }
};

/* ==========================================================================
   3. MATCH SCORING ALGORITHM (Exact Specification Implementation)
   ========================================================================== */
function calculateMatch(candidateSkills, requiredSkills) {
  const normalize = (s) => (s ? s.trim().toLowerCase() : '');
  const candidateSet = new Set((candidateSkills || []).map(normalize).filter(Boolean));
  const required = [...new Set((requiredSkills || []).map(normalize).filter(Boolean))];
  const matchedSkills = required.filter((s) => candidateSet.has(s));
  const missingSkills = required.filter((s) => !candidateSet.has(s));
  const score = required.length === 0 ? 0 : Math.round((matchedSkills.length / required.length) * 100);
  return { score, matchedSkills, missingSkills };
}

function restoreOriginalCase(originalList = [], normalizedList = []) {
  const dict = new Map();
  (originalList || []).forEach((skill) => {
    if (skill && typeof skill === 'string') {
      const key = skill.trim().toLowerCase();
      if (!dict.has(key)) dict.set(key, skill.trim());
    }
  });
  return (normalizedList || []).map((norm) => dict.get(norm) || norm);
}

function getScoreMetadata(score, requiredSkillCount = 1) {
  if (requiredSkillCount === 0) {
    return {
      label: 'No Requirements',
      badgeClass: 'bg-secondary text-white',
      textClass: 'text-secondary',
      bgClass: 'bg-secondary',
      description: 'No requirements to compare'
    };
  }

  if (score >= 80) {
    return {
      label: 'Strong Match',
      badgeClass: 'badge-score-high',
      textClass: 'text-success',
      bgClass: 'bg-success',
      description: 'High skill alignment with job criteria'
    };
  } else if (score >= 50) {
    return {
      label: 'Moderate Match',
      badgeClass: 'badge-score-mid',
      textClass: 'text-warning-emphasis',
      bgClass: 'bg-warning',
      description: 'Partial skill alignment with room for growth'
    };
  } else if (score > 0) {
    return {
      label: 'Low Match',
      badgeClass: 'badge-score-low',
      textClass: 'text-danger',
      bgClass: 'bg-danger',
      description: 'Developing skill alignment'
    };
  } else {
    return {
      label: 'No Match',
      badgeClass: 'badge-score-zero',
      textClass: 'text-muted',
      bgClass: 'bg-secondary',
      description: 'No overlapping skills detected'
    };
  }
}

const MATCH_EXPLANATION_DISCLAIMER =
  'This score reflects the required skills found in the profile. It measures skill overlap only, not hiring probability.';

const MATCH_FORMULA_TEXT =
  'Match Score = (Matched Required Skills ÷ Total Required Skills) × 100';

/* ==========================================================================
   4. VALIDATION UTILITIES
   ========================================================================== */
const ALLOWED_STATUSES = ['Shortlisted', 'Reviewing', 'Rejected'];
const ALLOWED_EXPERIENCE_LEVELS = ['Entry-Level', 'Mid-Level', 'Senior-Level'];

function validateApplicantProfile(profile) {
  const errors = {};
  if (!profile.displayName || typeof profile.displayName !== 'string') {
    errors.displayName = 'Display name is required.';
  } else {
    const trimmed = profile.displayName.trim();
    if (trimmed.length < 2) {
      errors.displayName = 'Display name must be at least 2 characters.';
    } else if (trimmed.length > 50) {
      errors.displayName = 'Display name cannot exceed 50 characters.';
    }
  }

  if (!profile.experienceLevel || !ALLOWED_EXPERIENCE_LEVELS.includes(profile.experienceLevel)) {
    errors.experienceLevel = 'Please select a valid experience level.';
  }

  if (!Array.isArray(profile.skills) || profile.skills.length === 0) {
    errors.skills = 'Please add at least one technical skill.';
  } else {
    const invalidSkill = profile.skills.find((s) => !s || s.trim().length === 0 || s.trim().length > 30);
    if (invalidSkill !== undefined) {
      errors.skills = 'Skills must be between 1 and 30 characters.';
    }
  }

  return { isValid: Object.keys(errors).length === 0, errors };
}

function validateSkillInput(skill, existingSkills = []) {
  if (!skill || typeof skill !== 'string') {
    return { isValid: false, error: 'Skill cannot be empty.', sanitized: '' };
  }
  const sanitized = skill.trim();
  if (sanitized.length < 2) {
    return { isValid: false, error: 'Skill name must be at least 2 characters.', sanitized };
  }
  if (sanitized.length > 30) {
    return { isValid: false, error: 'Skill name cannot exceed 30 characters.', sanitized };
  }
  const isDuplicate = existingSkills.some(
    (existing) => existing.trim().toLowerCase() === sanitized.toLowerCase()
  );
  if (isDuplicate) {
    return { isValid: false, error: `Skill "${sanitized}" is already in your profile.`, sanitized };
  }
  return { isValid: true, error: null, sanitized };
}

/* ==========================================================================
   5. REUSABLE UI RENDERING HELPERS
   ========================================================================== */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderDemoBanner() {
  return '';
}

function renderNavbar(activeRoute = '#/jobs', shortlistCount = 0) {
  const isRecruiter = activeRoute.startsWith('#/recruiter') || activeRoute.startsWith('#/candidate');

  return `
    <nav class="navbar navbar-expand-lg navbar-light navbar-custom border-bottom sticky-top" aria-label="Main Navigation">
      <div class="container">
        <a class="navbar-brand navbar-brand-custom" href="#/jobs">
          <i class="bi bi-briefcase-fill text-primary" aria-hidden="true"></i>
          <span>TalentMatch</span>
        </a>

        <!-- Perspective Switcher -->
        <div class="d-none d-md-flex align-items-center me-3" role="group" aria-label="Perspective switcher">
          <div class="mode-switcher-container">
            <a href="#/jobs" class="mode-switcher-btn ${!isRecruiter ? 'active' : ''}" role="button" aria-pressed="${!isRecruiter}">
              <i class="bi bi-person-fill me-1" aria-hidden="true"></i> Applicant
            </a>
            <a href="#/recruiter" class="mode-switcher-btn ${isRecruiter ? 'active' : ''}" role="button" aria-pressed="${isRecruiter}">
              <i class="bi bi-building me-1" aria-hidden="true"></i> Recruiter
            </a>
          </div>
        </div>

        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            <!-- Mobile Switcher -->
            <li class="nav-item d-md-none my-2 pb-2 border-bottom">
              <span class="small text-muted d-block mb-1 fw-semibold">Perspective:</span>
              <div class="btn-group w-100" role="group">
                <a href="#/jobs" class="btn btn-sm ${!isRecruiter ? 'btn-primary' : 'btn-outline-primary'}">Applicant</a>
                <a href="#/recruiter" class="btn btn-sm ${isRecruiter ? 'btn-primary' : 'btn-outline-primary'}">Recruiter</a>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link ${activeRoute === '#/jobs' ? 'active' : ''}" href="#/jobs">
                <i class="bi bi-search me-1" aria-hidden="true"></i> Explore Jobs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${activeRoute === '#/shortlist' ? 'active' : ''} position-relative" href="#/shortlist">
                <i class="bi bi-bookmark-heart me-1" aria-hidden="true"></i> My Shortlist
                <span id="shortlist-nav-count" class="badge rounded-pill bg-primary ms-1" aria-label="${shortlistCount} shortlisted jobs">${shortlistCount}</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${activeRoute === '#/profile' ? 'active' : ''}" href="#/profile">
                <i class="bi bi-person-gear me-1" aria-hidden="true"></i> Profile
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${activeRoute.startsWith('#/recruiter') ? 'active' : ''}" href="#/recruiter">
                <i class="bi bi-people-fill me-1" aria-hidden="true"></i> Recruiter Hub
              </a>
            </li>
            <li class="nav-item ms-lg-2">
              <a class="btn btn-outline-secondary btn-sm py-2 px-3 text-nowrap rounded-pill fw-medium" href="#/data" title="Data & Settings">
                <i class="bi bi-gear-fill me-1" aria-hidden="true"></i> Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}

function renderSummaryCard(title, value, icon, subtitle = '') {
  return `
    <div class="card card-custom h-100 summary-stat-card">
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <div class="summary-stat-lbl mb-1">${escapeHtml(title)}</div>
          <div class="summary-stat-val">${escapeHtml(String(value))}</div>
          ${subtitle ? `<div class="small text-muted mt-1">${escapeHtml(subtitle)}</div>` : ''}
        </div>
        <div class="rounded-circle bg-light p-3 text-primary fs-3 d-flex align-items-center justify-content-center" style="width: 54px; height: 54px;">
          <i class="${escapeHtml(icon)}" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  `;
}

function renderMatchScoreBadge(score, requiredSkillCount = 1) {
  const meta = getScoreMetadata(score, requiredSkillCount);
  if (requiredSkillCount === 0) {
    return `
      <span class="badge ${meta.badgeClass} d-inline-flex align-items-center gap-1 px-2 py-1 fs-7" title="${meta.description}">
        <i class="bi bi-slash-circle me-1" aria-hidden="true"></i>
        <span>0%</span>
        <span class="fw-normal">(${meta.label})</span>
      </span>
    `;
  }

  return `
    <span class="badge ${meta.badgeClass} d-inline-flex align-items-center gap-1 px-2.5 py-1 fs-7" title="${meta.description}">
      <i class="bi bi-bullseye me-1" aria-hidden="true"></i>
      <span class="fw-bold">${score}%</span>
      <span class="fw-semibold">· ${meta.label}</span>
    </span>
  `;
}

function renderStatusBadge(status) {
  const safe = escapeHtml(status);
  let badgeClass = 'status-badge-reviewing';
  let icon = 'bi-hourglass-split';

  if (status === 'Shortlisted') {
    badgeClass = 'status-badge-shortlisted';
    icon = 'bi-check-circle-fill';
  } else if (status === 'Rejected') {
    badgeClass = 'status-badge-rejected';
    icon = 'bi-x-circle-fill';
  }

  return `
    <span class="badge ${badgeClass} d-inline-flex align-items-center gap-1 px-2 py-1">
      <i class="bi ${icon}" aria-hidden="true"></i>
      <span>${safe}</span>
    </span>
  `;
}

function renderJobCard(job, applicantSkills = [], isShortlisted = false) {
  const match = calculateMatch(applicantSkills, job.requiredSkills);
  const requiredCount = job.requiredSkills ? job.requiredSkills.length : 0;

  return `
    <article class="card card-custom h-100 d-flex flex-column" data-job-id="${escapeHtml(job.id)}">
      <div class="card-body d-flex flex-column">
        <div class="d-flex justify-content-between align-items-start mb-2">
          <div>
            <span class="badge bg-light text-secondary border mb-1">${escapeHtml(job.experienceLevel)}</span>
            <h2 class="h5 card-title mb-1 text-dark">
              <a href="#/job/${encodeURIComponent(job.id)}" class="text-decoration-none text-dark hover-primary">
                ${escapeHtml(job.title)}
              </a>
            </h2>
            <div class="text-muted small fw-medium mb-2">
              <i class="bi bi-building me-1" aria-hidden="true"></i>${escapeHtml(job.company)}
              <span class="mx-1.5">·</span>
              <i class="bi bi-geo-alt me-1" aria-hidden="true"></i>${escapeHtml(job.location)}
            </div>
          </div>
          <div class="text-end">
            ${renderMatchScoreBadge(match.score, requiredCount)}
          </div>
        </div>

        <p class="card-text text-secondary small flex-grow-1 line-clamp-3 mb-3">
          ${escapeHtml(job.description)}
        </p>

        <div class="mb-3">
          <div class="small fw-semibold text-muted mb-1.5">Required Skills:</div>
          <div class="d-flex flex-wrap gap-1">
            ${
              requiredCount > 0
                ? job.requiredSkills
                    .map((skill) => {
                      const isMatched = match.matchedSkills.includes(skill.trim().toLowerCase());
                      return `
                        <span class="skill-tag ${isMatched ? 'skill-tag-matched' : ''}">
                          ${isMatched ? '<i class="bi bi-check2 text-success" aria-hidden="true"></i>' : ''}
                          ${escapeHtml(skill)}
                        </span>
                      `;
                    })
                    .join('')
                : '<span class="text-muted small fst-italic">No required skills specified</span>'
            }
          </div>
        </div>

        <div class="border-top pt-3 d-flex align-items-center justify-content-between mt-auto">
          <a href="#/job/${encodeURIComponent(job.id)}" class="btn btn-outline-primary btn-sm">
            <i class="bi bi-info-circle me-1" aria-hidden="true"></i> View Details
          </a>
          <button 
            type="button" 
            class="btn btn-sm ${isShortlisted ? 'btn-danger' : 'btn-outline-secondary'} shortlist-toggle-btn" 
            data-job-id="${escapeHtml(job.id)}"
            aria-pressed="${isShortlisted}"
            aria-label="${isShortlisted ? 'Remove ' + escapeHtml(job.title) + ' from shortlist' : 'Add ' + escapeHtml(job.title) + ' to shortlist'}"
          >
            <i class="bi ${isShortlisted ? 'bi-bookmark-check-fill' : 'bi-bookmark'}" aria-hidden="true"></i>
            <span class="ms-1">${isShortlisted ? 'Shortlisted' : 'Shortlist'}</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderSkillBreakdown(candidateSkills = [], requiredSkills = []) {
  const match = calculateMatch(candidateSkills, requiredSkills);
  const requiredCount = requiredSkills ? requiredSkills.length : 0;
  const originalMatched = restoreOriginalCase(requiredSkills, match.matchedSkills);
  const originalMissing = restoreOriginalCase(requiredSkills, match.missingSkills);

  if (requiredCount === 0) {
    return `
      <div class="alert alert-secondary border py-3 px-3 my-3" role="region" aria-label="Skill Match Breakdown">
        <div class="d-flex align-items-center gap-2 mb-2">
          <i class="bi bi-info-circle-fill text-secondary fs-5" aria-hidden="true"></i>
          <h4 class="h6 mb-0 fw-bold">Skill Match Explanation</h4>
        </div>
        <p class="mb-1 text-muted"><strong>Score: 0%</strong> (No requirements to compare)</p>
        <p class="small text-muted mb-0">This entry specifies no required technical criteria to measure skill overlap.</p>
        <div class="border-top pt-2 mt-2 text-muted small fst-italic">
          ${escapeHtml(MATCH_EXPLANATION_DISCLAIMER)}
        </div>
      </div>
    `;
  }

  const meta = getScoreMetadata(match.score, requiredCount);

  return `
    <div class="card card-custom p-3 my-3" role="region" aria-label="Skill Match Breakdown">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h4 class="h6 mb-0 fw-bold d-flex align-items-center gap-1.5">
          <i class="bi bi-cpu text-primary" aria-hidden="true"></i> Explainable Skill Match Breakdown
        </h4>
        ${renderMatchScoreBadge(match.score, requiredCount)}
      </div>

      <!-- Match Progress Bar -->
      <div class="progress mb-3" style="height: 10px;" role="progressbar" aria-valuenow="${match.score}" aria-valuemin="0" aria-valuemax="100" aria-label="Skill Match Score Progress">
        <div class="progress-bar ${meta.bgClass}" style="width: ${match.score}%;"></div>
      </div>

      <div class="row g-3">
        <!-- Matched Skills -->
        <div class="col-md-6">
          <div class="small fw-bold text-success mb-2 d-flex align-items-center gap-1">
            <i class="bi bi-check-circle-fill" aria-hidden="true"></i> Matched Skills (${originalMatched.length} of ${requiredCount})
          </div>
          <div class="d-flex flex-wrap gap-1">
            ${
              originalMatched.length > 0
                ? originalMatched
                    .map((s) => `<span class="skill-tag skill-tag-matched"><i class="bi bi-check2" aria-hidden="true"></i> ${escapeHtml(s)}</span>`)
                    .join('')
                : '<span class="text-muted small fst-italic">None matched</span>'
            }
          </div>
        </div>

        <!-- Missing Skills / Skills to work on -->
        <div class="col-md-6">
          <div class="small fw-bold text-danger mb-2 d-flex align-items-center gap-1">
            <i class="bi bi-exclamation-triangle-fill" aria-hidden="true"></i> Skills to work on (${originalMissing.length})
          </div>
          <div class="d-flex flex-wrap gap-1">
            ${
              originalMissing.length > 0
                ? originalMissing
                    .map((s) => `<span class="skill-tag skill-tag-missing"><i class="bi bi-x" aria-hidden="true"></i> ${escapeHtml(s)}</span>`)
                    .join('')
                : '<span class="text-success small fw-medium"><i class="bi bi-stars me-1" aria-hidden="true"></i>All required skills covered!</span>'
            }
          </div>
        </div>
      </div>

      <div class="border-top pt-2 mt-3">
        <div class="small text-muted mb-1">
          <strong>Formula:</strong> <code>${escapeHtml(MATCH_FORMULA_TEXT)}</code>
        </div>
        <div class="small text-muted fst-italic">
          ${escapeHtml(MATCH_EXPLANATION_DISCLAIMER)}
        </div>
      </div>
    </div>
  `;
}

function renderEmptyState(title, message, actionHtml = '') {
  return `
    <div class="text-center py-5 px-3 card card-custom my-4" role="status">
      <div class="text-muted mb-3" style="font-size: 2.8rem;">
        <i class="bi bi-inbox" aria-hidden="true"></i>
      </div>
      <h3 class="h5 fw-bold text-dark mb-2">${escapeHtml(title)}</h3>
      <p class="text-muted max-w-md mx-auto mb-3" style="max-width: 480px;">${escapeHtml(message)}</p>
      ${actionHtml ? `<div>${actionHtml}</div>` : ''}
    </div>
  `;
}

function showToast(message, variant = 'primary') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const id = `toast-${Date.now()}`;
  const icon = variant === 'success' || variant === 'primary' ? 'bi-check-circle-fill' : 'bi-info-circle-fill';
  const html = `
    <div id="${id}" class="toast align-items-center text-bg-${variant} border-0 show shadow" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body d-flex align-items-center gap-2">
          <i class="bi ${icon} fs-5" aria-hidden="true"></i>
          <span>${escapeHtml(message)}</span>
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  `;

  container.insertAdjacentHTML('beforeend', html);
  const element = document.getElementById(id);

  setTimeout(() => {
    if (element && element.parentNode) {
      element.classList.remove('show');
      setTimeout(() => element.remove(), 250);
    }
  }, 4000);
}

function updateNavShortlistCount() {
  const countEl = document.getElementById('shortlist-nav-count');
  if (countEl) {
    const count = StorageService.getShortlist().length;
    countEl.textContent = count;
    countEl.setAttribute('aria-label', `${count} shortlisted jobs`);
  }
}

/* ==========================================================================
   6. SCREEN CONTROLLERS (S-01 to S-08)
   ========================================================================== */
let currentSearchQuery = '';
let currentExpFilter = 'ALL';
let currentLocationFilter = 'ALL';
let workingSkills = [];

// Recruiter filter state
let selectedJobId = null;
let candidateSearchQuery = '';
let candidateStatusFilter = 'ALL';
let candidateSortOrder = 'SCORE_DESC';

/**
 * Screen S-01: Job Search / Catalogue
 */
function renderJobsScreen(container) {
  const jobs = StorageService.getJobs();
  const applicant = StorageService.getApplicant();
  const shortlist = StorageService.getShortlist();

  const locations = ['ALL', ...new Set(jobs.map((j) => j.location).filter(Boolean))];
  const expLevels = ['ALL', 'Entry-Level', 'Mid-Level', 'Senior-Level'];

  const filteredJobs = filterJobs(jobs, applicant.skills, {
    query: currentSearchQuery,
    expLevel: currentExpFilter,
    location: currentLocationFilter
  });

  const avgMatch = jobs.length
    ? Math.round(
        jobs.reduce((acc, j) => acc + calculateMatch(applicant.skills, j.requiredSkills).score, 0) /
          jobs.length
      )
    : 0;

  const html = `
    <div class="py-4">
      <header class="mb-4">
        <h1 class="h2 fw-bold text-dark mb-1">Find Your Next Tech Role</h1>
        <p class="text-secondary mb-0">
          Personalized candidate-job matching calculated in real-time based on your skills profile.
        </p>
      </header>

      <section class="row g-3 mb-4" aria-label="Job Statistics">
        <div class="col-sm-6 col-lg-4">
          ${renderSummaryCard('Available Jobs', jobs.length, 'bi bi-briefcase', 'Curated sample positions')}
        </div>
        <div class="col-sm-6 col-lg-4">
          ${renderSummaryCard('My Shortlist', shortlist.length, 'bi bi-bookmark-heart', 'Saved for follow-up')}
        </div>
        <div class="col-sm-12 col-lg-4">
          ${renderSummaryCard('Average Skill Overlap', `${avgMatch}%`, 'bi bi-graph-up', `Profile: ${applicant.skills.length} skills listed`)}
        </div>
      </section>

      <section class="card card-custom p-3 mb-4" aria-label="Search and Filter Jobs">
        <div class="row g-3">
          <div class="col-lg-6">
            <label for="job-search-input" class="form-label small fw-semibold text-muted">
              Search Roles
            </label>
            <div class="input-group">
              <span class="input-group-text bg-white border-end-0 text-muted" id="search-addon">
                <i class="bi bi-search" aria-hidden="true"></i>
              </span>
              <input
                type="search"
                id="job-search-input"
                class="form-control border-start-0 ps-0"
                placeholder="Search by job title, company, or skill…"
                value="${escapeHtml(currentSearchQuery)}"
                aria-describedby="search-addon"
              />
              ${
                currentSearchQuery
                  ? `<button class="btn btn-outline-secondary" type="button" id="clear-search-btn" aria-label="Clear search input">
                      <i class="bi bi-x-lg" aria-hidden="true"></i>
                    </button>`
                  : ''
              }
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <label for="filter-exp" class="form-label small fw-semibold text-muted">Experience Level</label>
            <select id="filter-exp" class="form-select">
              ${expLevels
                .map(
                  (lvl) =>
                    `<option value="${lvl}" ${currentExpFilter === lvl ? 'selected' : ''}>${lvl === 'ALL' ? 'All Experience Levels' : lvl}</option>`
                )
                .join('')}
            </select>
          </div>

          <div class="col-sm-6 col-lg-3">
            <label for="filter-location" class="form-label small fw-semibold text-muted">Location</label>
            <select id="filter-location" class="form-select">
              ${locations
                .map(
                  (loc) =>
                    `<option value="${loc}" ${currentLocationFilter === loc ? 'selected' : ''}>${loc === 'ALL' ? 'All Locations' : loc}</option>`
                )
                .join('')}
            </select>
          </div>
        </div>

        ${
          currentSearchQuery || currentExpFilter !== 'ALL' || currentLocationFilter !== 'ALL'
            ? `
            <div class="d-flex align-items-center justify-content-between pt-3 mt-3 border-top flex-wrap gap-2">
              <div class="small text-muted">
                Showing <strong>${filteredJobs.length}</strong> of <strong>${jobs.length}</strong> jobs
              </div>
              <button id="reset-filters-btn" class="btn btn-link btn-sm text-decoration-none p-0 text-danger">
                <i class="bi bi-x-circle me-1" aria-hidden="true"></i> Clear all filters
              </button>
            </div>
            `
            : ''
        }
      </section>

      <section aria-label="Job Search Results" id="jobs-results-container">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h2 class="h5 fw-bold mb-0 text-dark">
            Available Tech Roles
            <span class="badge bg-light text-secondary border ms-2">${filteredJobs.length}</span>
          </h2>
          <span class="small text-muted d-none d-sm-inline">
            Scores dynamically adapt to your <a href="#/profile" class="text-decoration-none">Applicant Profile</a>
          </span>
        </div>

        ${
          filteredJobs.length === 0
            ? renderEmptyState(
                'No matching jobs found',
                'No matching jobs found. Try a different keyword or clear your filters.',
                `<button id="empty-clear-filters-btn" class="btn btn-primary btn-sm"><i class="bi bi-arrow-counterclockwise me-1"></i> Clear filters</button>`
              )
            : `
            <div class="row g-3">
              ${filteredJobs
                .map((job) => {
                  const isSaved = shortlist.includes(job.id);
                  return `
                    <div class="col-md-6 col-xl-4">
                      ${renderJobCard(job, applicant.skills, isSaved)}
                    </div>
                  `;
                })
                .join('')}
            </div>
            `
        }
      </section>
    </div>
  `;

  container.innerHTML = html;
  attachJobEvents(container);
}

function filterJobs(jobs, applicantSkills, { query, expLevel, location }) {
  const q = query.trim().toLowerCase();

  return jobs.filter((job) => {
    if (expLevel !== 'ALL' && job.experienceLevel !== expLevel) return false;
    if (location !== 'ALL' && job.location !== location) return false;
    if (q) {
      const matchTitle = job.title.toLowerCase().includes(q);
      const matchCompany = job.company.toLowerCase().includes(q);
      const matchSkills = job.requiredSkills.some((s) => s.toLowerCase().includes(q));
      if (!matchTitle && !matchCompany && !matchSkills) return false;
    }
    return true;
  });
}

function attachJobEvents(container) {
  const searchInput = container.querySelector('#job-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderJobsScreen(container);
    });
  }

  const clearSearchBtn = container.querySelector('#clear-search-btn');
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      currentSearchQuery = '';
      renderJobsScreen(container);
    });
  }

  const expFilter = container.querySelector('#filter-exp');
  if (expFilter) {
    expFilter.addEventListener('change', (e) => {
      currentExpFilter = e.target.value;
      renderJobsScreen(container);
    });
  }

  const locationFilter = container.querySelector('#filter-location');
  if (locationFilter) {
    locationFilter.addEventListener('change', (e) => {
      currentLocationFilter = e.target.value;
      renderJobsScreen(container);
    });
  }

  const resetFiltersBtn = container.querySelector('#reset-filters-btn');
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      currentSearchQuery = '';
      currentExpFilter = 'ALL';
      currentLocationFilter = 'ALL';
      renderJobsScreen(container);
    });
  }

  const emptyClearBtn = container.querySelector('#empty-clear-filters-btn');
  if (emptyClearBtn) {
    emptyClearBtn.addEventListener('click', () => {
      currentSearchQuery = '';
      currentExpFilter = 'ALL';
      currentLocationFilter = 'ALL';
      renderJobsScreen(container);
    });
  }

  container.querySelectorAll('.shortlist-toggle-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const jobId = btn.getAttribute('data-job-id');
      const res = StorageService.toggleShortlist(jobId);
      if (res.added) {
        showToast('Job added to your shortlist.', 'primary');
      } else {
        showToast('Job removed from your shortlist.', 'secondary');
      }
      updateNavShortlistCount();
      renderJobsScreen(container);
    });
  });
}

/**
 * Screen S-02: Job Details Screen
 */
function renderJobDetailsScreen(container, jobId) {
  const job = StorageService.getJobById(jobId);
  const applicant = StorageService.getApplicant();
  const shortlist = StorageService.getShortlist();

  if (!job) {
    container.innerHTML = `
      <div class="py-5">
        ${renderEmptyState(
          'Job Not Found',
          `The requested job with ID "${escapeHtml(jobId)}" does not exist in the sample dataset.`,
          `<a href="#/jobs" class="btn btn-primary"><i class="bi bi-arrow-left me-1"></i> Back to Jobs</a>`
        )}
      </div>
    `;
    return;
  }

  const isShortlisted = shortlist.includes(job.id);
  const match = calculateMatch(applicant.skills, job.requiredSkills);
  const requiredCount = job.requiredSkills ? job.requiredSkills.length : 0;

  const html = `
    <div class="py-4">
      <nav aria-label="Breadcrumb" class="mb-3">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item"><a href="#/jobs" class="text-decoration-none">Jobs</a></li>
          <li class="breadcrumb-item active" aria-current="page">${escapeHtml(job.title)}</li>
        </ol>
      </nav>

      <div class="card card-custom p-4 mb-4">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 pb-3 border-bottom">
          <div>
            <div class="d-flex align-items-center gap-2 mb-1 flex-wrap">
              <span class="badge bg-primary-subtle text-primary border">${escapeHtml(job.experienceLevel)}</span>
              <span class="badge bg-light text-secondary border">${escapeHtml(job.source)}</span>
            </div>
            <h1 class="h2 fw-bold text-dark mb-1">${escapeHtml(job.title)}</h1>
            <div class="text-secondary fw-medium">
              <i class="bi bi-building me-1" aria-hidden="true"></i><strong>${escapeHtml(job.company)}</strong>
              <span class="mx-2">·</span>
              <i class="bi bi-geo-alt me-1" aria-hidden="true"></i>${escapeHtml(job.location)}
            </div>
          </div>

          <div class="d-flex align-items-center gap-2 flex-wrap">
            <button
              id="detail-shortlist-btn"
              type="button"
              class="btn ${isShortlisted ? 'btn-danger' : 'btn-outline-primary'} px-3"
              aria-pressed="${isShortlisted}"
            >
              <i class="bi ${isShortlisted ? 'bi-bookmark-check-fill' : 'bi-bookmark'} me-1" aria-hidden="true"></i>
              <span>${isShortlisted ? 'In Shortlist (Click to remove)' : 'Add to Shortlist'}</span>
            </button>
            <a href="#/jobs" class="btn btn-outline-secondary">
              <i class="bi bi-arrow-left me-1" aria-hidden="true"></i> Back
            </a>
          </div>
        </div>

        <!-- Explainable Skill Breakdown -->
        ${renderSkillBreakdown(applicant.skills, job.requiredSkills)}

        <!-- Job Description -->
        <div class="mt-4">
          <h2 class="h5 fw-bold text-dark mb-2">Role Overview & Responsibilities</h2>
          <p class="text-secondary lh-lg" style="white-space: pre-line;">${escapeHtml(job.description)}</p>
        </div>

        <!-- Required Skills List -->
        <div class="mt-3">
          <h2 class="h6 fw-bold text-dark mb-2">Required Core Competencies</h2>
          <div class="d-flex flex-wrap gap-1.5">
            ${
              requiredCount > 0
                ? job.requiredSkills
                    .map((s) => {
                      const isMatched = match.matchedSkills.includes(s.trim().toLowerCase());
                      return `
                        <span class="skill-tag ${isMatched ? 'skill-tag-matched' : ''}">
                          ${isMatched ? '<i class="bi bi-check2 text-success" aria-hidden="true"></i>' : ''}
                          ${escapeHtml(s)}
                        </span>
                      `;
                    })
                    .join('')
                : '<span class="text-muted fst-italic">No formal technical requirements specified for this role.</span>'
            }
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  const detailShortlistBtn = container.querySelector('#detail-shortlist-btn');
  if (detailShortlistBtn) {
    detailShortlistBtn.addEventListener('click', () => {
      const res = StorageService.toggleShortlist(job.id);
      if (res.added) {
        showToast('Job added to your shortlist.', 'primary');
      } else {
        showToast('Job removed from your shortlist.', 'secondary');
      }
      updateNavShortlistCount();
      renderJobDetailsScreen(container, jobId);
    });
  }
}

/**
 * Screen S-04: My Shortlist Screen
 */
function renderShortlistScreen(container) {
  const shortlistIds = StorageService.getShortlist();
  const jobs = StorageService.getJobs();
  const applicant = StorageService.getApplicant();

  const shortlistedJobs = jobs.filter((j) => shortlistIds.includes(j.id));

  const html = `
    <div class="py-4">
      <header class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div>
          <h1 class="h2 fw-bold text-dark mb-1">My Shortlisted Positions</h1>
          <p class="text-secondary mb-0">Review and track jobs you've marked for application follow-up.</p>
        </div>
        <a href="#/jobs" class="btn btn-outline-primary btn-sm">
          <i class="bi bi-plus-circle me-1" aria-hidden="true"></i> Find More Jobs
        </a>
      </header>

      ${
        shortlistedJobs.length === 0
          ? renderEmptyState(
              'Your shortlist is empty',
              'Your shortlist is empty. Save jobs you’d like to revisit.',
              `<a href="#/jobs" class="btn btn-primary"><i class="bi bi-search me-1"></i> Browse Jobs</a>`
            )
          : `
          <div class="row g-3">
            ${shortlistedJobs
              .map(
                (job) => `
                <div class="col-md-6 col-xl-4">
                  ${renderJobCard(job, applicant.skills, true)}
                </div>
              `
              )
              .join('')}
          </div>
          `
      }
    </div>
  `;

  container.innerHTML = html;
  attachJobEvents(container);
}

/**
 * Screen S-03: Applicant Profile Screen
 */
function renderProfileScreen(container) {
  const applicant = StorageService.getApplicant();
  workingSkills = [...applicant.skills];

  const html = `
    <div class="py-4">
      <header class="mb-4">
        <div class="d-flex align-items-center gap-2 mb-1">
          <span class="badge bg-primary-subtle text-primary border">Applicant Portal</span>
          <span class="small text-muted fw-semibold">Interactive Profile</span>
        </div>
        <h1 class="h2 fw-bold text-dark mb-1">My Applicant Profile</h1>
        <p class="text-secondary mb-0">
          Manage your skills portfolio and experience tier. Changing your skills instantly updates your match scores across all job openings.
        </p>
      </header>

      <div class="row g-4">
        <div class="col-lg-8">
          <div class="card card-custom p-4">
            <form id="profile-form" novalidate aria-label="Applicant Profile Form">
              <div class="mb-3">
                <label for="profile-name" class="form-label fw-bold text-dark">
                  Display Name <span class="text-danger" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="profile-name"
                  class="form-control form-control-lg fs-6"
                  value="${escapeHtml(applicant.displayName)}"
                  required
                  maxlength="50"
                  aria-describedby="profile-name-feedback"
                />
                <div id="profile-name-feedback" class="invalid-feedback" role="alert"></div>
                <div class="form-text small text-muted">Your preferred public name shown in recruiter mock searches.</div>
              </div>

              <div class="mb-3">
                <label for="profile-exp" class="form-label fw-bold text-dark">
                  Experience Level <span class="text-danger" aria-hidden="true">*</span>
                </label>
                <select id="profile-exp" class="form-select form-select-lg fs-6" aria-describedby="profile-exp-feedback">
                  ${ALLOWED_EXPERIENCE_LEVELS.map(
                    (lvl) => `<option value="${lvl}" ${applicant.experienceLevel === lvl ? 'selected' : ''}>${lvl}</option>`
                  ).join('')}
                </select>
                <div id="profile-exp-feedback" class="invalid-feedback" role="alert"></div>
                <div class="form-text small text-muted">Select your approximate industry experience tier.</div>
              </div>

              <div class="mb-4">
                <label for="skill-input" class="form-label fw-bold text-dark">
                  Technical Skills <span class="text-danger" aria-hidden="true">*</span>
                </label>
                <div class="input-group">
                  <input
                    type="text"
                    id="skill-input"
                    class="form-control"
                    placeholder="e.g. TypeScript, React, Docker, Python…"
                    maxlength="30"
                    aria-describedby="skill-input-feedback"
                  />
                  <button type="button" id="add-skill-btn" class="btn btn-outline-primary">
                    <i class="bi bi-plus-circle me-1" aria-hidden="true"></i> Add Skill
                  </button>
                </div>
                <div id="skill-input-feedback" class="invalid-feedback d-block" style="display: none !important;" role="alert"></div>
                <div class="form-text small text-muted mb-2">Type a skill and click Add or press Enter.</div>

                <div class="p-3 bg-light rounded border">
                  <div class="small fw-semibold text-muted mb-2">Current Profile Skills (<span id="skill-count-badge">${workingSkills.length}</span>):</div>
                  <div id="skills-chip-container" class="d-flex flex-wrap gap-1.5" role="list" aria-label="Profile Skills List">
                    ${renderSkillChips(workingSkills)}
                  </div>
                  <div id="skills-list-feedback" class="text-danger small mt-2" style="display: none;" role="alert"></div>
                </div>
              </div>

              <div class="border-top pt-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
                <button type="submit" id="save-profile-btn" class="btn btn-primary px-4">
                  <i class="bi bi-floppy-fill me-1" aria-hidden="true"></i> Save Profile
                </button>
                <span class="small text-muted">Saves to local browser storage & updates score cache</span>
              </div>
            </form>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card card-custom p-3 bg-white mb-3">
            <h2 class="h6 fw-bold text-dark mb-2 d-flex align-items-center gap-1.5">
              <i class="bi bi-lightbulb-fill text-warning" aria-hidden="true"></i> How Matching Works
            </h2>
            <p class="small text-secondary mb-2">
              Every job opening lists core technical requirements. TalentMatch computes:
            </p>
            <div class="p-2 bg-light rounded small text-dark mb-2 font-monospace">
              (Matched Skills ÷ Required Skills) × 100
            </div>
            <p class="small text-secondary mb-0">
              Add skills to see your match scores increase across relevant jobs immediately!
            </p>
          </div>

          <div class="card card-custom p-3 bg-white">
            <h2 class="h6 fw-bold text-dark mb-2">Profile Actions</h2>
            <div class="d-grid gap-2">
              <a href="#/jobs" class="btn btn-outline-secondary btn-sm text-start">
                <i class="bi bi-search me-1" aria-hidden="true"></i> View Jobs With My Skills
              </a>
              <a href="#/shortlist" class="btn btn-outline-secondary btn-sm text-start">
                <i class="bi bi-bookmark-heart me-1" aria-hidden="true"></i> Review My Shortlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;
  attachProfileEvents(container);
}

function renderSkillChips(skills) {
  if (skills.length === 0) {
    return `<span class="text-muted small fst-italic">No skills added yet. Add at least one technical skill.</span>`;
  }

  return skills
    .map(
      (skill, idx) => `
      <span class="skill-tag skill-tag-matched d-inline-flex align-items-center gap-1" role="listitem">
        <span>${escapeHtml(skill)}</span>
        <button
          type="button"
          class="btn-close btn-close-dark btn-sm remove-skill-btn"
          data-skill-index="${idx}"
          style="font-size: 0.65rem;"
          aria-label="Remove ${escapeHtml(skill)} skill"
        ></button>
      </span>
    `
    )
    .join('');
}

function attachProfileEvents(container) {
  const form = container.querySelector('#profile-form');
  const nameInput = container.querySelector('#profile-name');
  const expSelect = container.querySelector('#profile-exp');
  const skillInput = container.querySelector('#skill-input');
  const addSkillBtn = container.querySelector('#add-skill-btn');
  const chipContainer = container.querySelector('#skills-chip-container');
  const skillInputFeedback = container.querySelector('#skill-input-feedback');
  const skillsListFeedback = container.querySelector('#skills-list-feedback');
  const skillCountBadge = container.querySelector('#skill-count-badge');

  function updateChips() {
    chipContainer.innerHTML = renderSkillChips(workingSkills);
    if (skillCountBadge) skillCountBadge.textContent = workingSkills.length;

    chipContainer.querySelectorAll('.remove-skill-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-skill-index'), 10);
        workingSkills.splice(idx, 1);
        updateChips();
      });
    });
  }

  function handleAddSkill() {
    const val = skillInput.value;
    const result = validateSkillInput(val, workingSkills);

    if (!result.isValid) {
      skillInput.classList.add('is-invalid');
      skillInputFeedback.textContent = result.error;
      skillInputFeedback.style.setProperty('display', 'block', 'important');
      return;
    }

    skillInput.classList.remove('is-invalid');
    skillInputFeedback.style.setProperty('display', 'none', 'important');
    workingSkills.push(result.sanitized);
    skillInput.value = '';
    skillsListFeedback.style.display = 'none';
    updateChips();
    skillInput.focus();
  }

  addSkillBtn.addEventListener('click', handleAddSkill);

  skillInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  });

  updateChips();

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const candidateProfile = {
      displayName: nameInput.value,
      experienceLevel: expSelect.value,
      skills: workingSkills
    };

    const validation = validateApplicantProfile(candidateProfile);

    nameInput.classList.remove('is-invalid');
    expSelect.classList.remove('is-invalid');
    skillsListFeedback.style.display = 'none';

    if (!validation.isValid) {
      if (validation.errors.displayName) {
        nameInput.classList.add('is-invalid');
        const fb = container.querySelector('#profile-name-feedback');
        if (fb) fb.textContent = validation.errors.displayName;
      }
      if (validation.errors.experienceLevel) {
        expSelect.classList.add('is-invalid');
        const fb = container.querySelector('#profile-exp-feedback');
        if (fb) fb.textContent = validation.errors.experienceLevel;
      }
      if (validation.errors.skills) {
        skillsListFeedback.textContent = validation.errors.skills;
        skillsListFeedback.style.display = 'block';
      }
      return;
    }

    StorageService.saveApplicant(candidateProfile);
    showToast('Your profile has been saved.', 'success');
  });
}

/**
 * Screen S-05 & S-06: Recruiter Hub & Candidate Review
 */
function renderRecruiterScreen(container, routeJobId = null) {
  const jobs = StorageService.getJobs();
  const candidates = StorageService.getCandidates();

  if (jobs.length === 0) {
    container.innerHTML = `
      <div class="py-5">
        ${renderEmptyState(
          'No Jobs Found',
          'Please seed or reset sample data from the Settings screen.',
          `<a href="#/data" class="btn btn-primary">Go to Settings</a>`
        )}
      </div>
    `;
    return;
  }

  if (routeJobId && jobs.some((j) => j.id === routeJobId)) {
    selectedJobId = routeJobId;
  } else if (!selectedJobId || !jobs.some((j) => j.id === selectedJobId)) {
    selectedJobId = jobs[0].id;
  }

  const activeJob = jobs.find((j) => j.id === selectedJobId) || jobs[0];

  const candidatesWithScores = candidates.map((cand) => {
    const match = calculateMatch(cand.skills, activeJob.requiredSkills);
    return {
      ...cand,
      score: match.score,
      matchedSkills: match.matchedSkills,
      missingSkills: match.missingSkills
    };
  });

  const shortlistedCount = candidates.filter((c) => c.reviewStatus === 'Shortlisted').length;
  const reviewingCount = candidates.filter((c) => c.reviewStatus === 'Reviewing').length;
  const rejectedCount = candidates.filter((c) => c.reviewStatus === 'Rejected').length;

  const filteredCandidates = filterAndSortCandidates(candidatesWithScores, {
    query: candidateSearchQuery,
    status: candidateStatusFilter,
    sort: candidateSortOrder
  });

  const html = `
    <div class="py-4">
      <header class="mb-4 d-flex justify-content-between align-items-center flex-wrap gap-2">
        <div>
          <div class="d-flex align-items-center gap-2 mb-1">
            <span class="badge bg-primary-subtle text-primary border">Recruiter Dashboard</span>
          </div>
          <h1 class="h2 fw-bold text-dark mb-1">Candidate Matching & Review</h1>
          <p class="text-secondary mb-0">Evaluate candidates ranked transparently by skill overlap against job requisitions.</p>
        </div>
        <div class="d-flex gap-2">
          <button id="export-candidates-csv-btn" class="btn btn-outline-secondary btn-sm" title="Export candidate evaluation data as CSV">
            <i class="bi bi-download me-1" aria-hidden="true"></i> Export CSV
          </button>
        </div>
      </header>

      <section class="card card-custom p-3 mb-4 bg-white" aria-label="Select Target Requisition">
        <div class="row align-items-center g-3">
          <div class="col-md-6">
            <label for="recruiter-job-select" class="form-label small fw-bold text-dark mb-1">
              <i class="bi bi-briefcase-fill text-primary me-1" aria-hidden="true"></i> Target Job Requisition
            </label>
            <select id="recruiter-job-select" class="form-select form-select-lg fs-6">
              ${jobs
                .map(
                  (job) => `
                <option value="${escapeHtml(job.id)}" ${job.id === activeJob.id ? 'selected' : ''}>
                  ${escapeHtml(job.title)} — ${escapeHtml(job.company)} (${job.experienceLevel})
                </option>
              `
                )
                .join('')}
            </select>
          </div>

          <div class="col-md-6">
            <div class="p-2 bg-light rounded border">
              <div class="small fw-semibold text-dark mb-1">Required Requisition Skills:</div>
              <div class="d-flex flex-wrap gap-1">
                ${
                  activeJob.requiredSkills && activeJob.requiredSkills.length > 0
                    ? activeJob.requiredSkills
                        .map((s) => `<span class="skill-tag">${escapeHtml(s)}</span>`)
                        .join('')
                    : '<span class="text-muted small fst-italic">No required skills specified (Match score = 0%)</span>'
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="row g-3 mb-4" aria-label="Candidate Status Metrics">
        <div class="col-6 col-lg-3">
          ${renderSummaryCard('Total Candidates', candidates.length, 'bi bi-people', 'Pool in database')}
        </div>
        <div class="col-6 col-lg-3">
          ${renderSummaryCard('Shortlisted', shortlistedCount, 'bi bi-check-circle', 'Accepted for interview')}
        </div>
        <div class="col-6 col-lg-3">
          ${renderSummaryCard('In Review', reviewingCount, 'bi bi-hourglass-split', 'Pending evaluation')}
        </div>
        <div class="col-6 col-lg-3">
          ${renderSummaryCard('Rejected', rejectedCount, 'bi bi-x-circle', 'Not proceeding')}
        </div>
      </section>

      <section class="card card-custom p-3 mb-4" aria-label="Candidate Filtering and Sorting">
        <div class="row g-3 align-items-center">
          <div class="col-md-5">
            <label for="cand-search-input" class="form-label small fw-semibold text-muted">Search Candidates</label>
            <div class="input-group">
              <span class="input-group-text bg-white border-end-0 text-muted">
                <i class="bi bi-search" aria-hidden="true"></i>
              </span>
              <input
                type="search"
                id="cand-search-input"
                class="form-control border-start-0 ps-0"
                placeholder="Search candidate name or skill…"
                value="${escapeHtml(candidateSearchQuery)}"
              />
            </div>
          </div>

          <div class="col-sm-6 col-md-3">
            <label for="cand-status-filter" class="form-label small fw-semibold text-muted">Review Status</label>
            <select id="cand-status-filter" class="form-select">
              <option value="ALL" ${candidateStatusFilter === 'ALL' ? 'selected' : ''}>All Statuses</option>
              <option value="Shortlisted" ${candidateStatusFilter === 'Shortlisted' ? 'selected' : ''}>Shortlisted</option>
              <option value="Reviewing" ${candidateStatusFilter === 'Reviewing' ? 'selected' : ''}>Reviewing</option>
              <option value="Rejected" ${candidateStatusFilter === 'Rejected' ? 'selected' : ''}>Rejected</option>
            </select>
          </div>

          <div class="col-sm-6 col-md-4">
            <label for="cand-sort-select" class="form-label small fw-semibold text-muted">Sort By</label>
            <select id="cand-sort-select" class="form-select">
              <option value="SCORE_DESC" ${candidateSortOrder === 'SCORE_DESC' ? 'selected' : ''}>Match Score (High to Low)</option>
              <option value="SCORE_ASC" ${candidateSortOrder === 'SCORE_ASC' ? 'selected' : ''}>Match Score (Low to High)</option>
              <option value="NAME_ASC" ${candidateSortOrder === 'NAME_ASC' ? 'selected' : ''}>Candidate Name (A-Z)</option>
            </select>
          </div>
        </div>

        ${
          candidateSearchQuery || candidateStatusFilter !== 'ALL'
            ? `
            <div class="d-flex align-items-center justify-content-between pt-3 mt-3 border-top flex-wrap gap-2">
              <div class="small text-muted">
                Displaying <strong>${filteredCandidates.length}</strong> of <strong>${candidates.length}</strong> candidates
              </div>
              <button id="reset-cand-filters-btn" class="btn btn-link btn-sm text-decoration-none p-0 text-danger">
                <i class="bi bi-x-circle me-1" aria-hidden="true"></i> Clear filters
              </button>
            </div>
          `
            : ''
        }
      </section>

      <section aria-label="Candidate Rankings">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h2 class="h5 fw-bold text-dark mb-0">
            Ranked Candidates for ${escapeHtml(activeJob.title)}
            <span class="badge bg-light text-secondary border ms-2">${filteredCandidates.length}</span>
          </h2>
          <span class="small text-muted">Transparent formula applied</span>
        </div>

        ${
          filteredCandidates.length === 0
            ? renderEmptyState(
                'No Candidates Found',
                'No candidate matches the selected filters or search keyword.',
                `<button id="empty-clear-cand-btn" class="btn btn-primary btn-sm"><i class="bi bi-arrow-counterclockwise me-1"></i> Reset Candidate Filters</button>`
              )
            : `
            <div class="candidate-table-wrapper card card-custom overflow-hidden mb-4">
              <div class="table-responsive">
                <table class="table table-hover align-middle mb-0" aria-label="Candidate Match Table">
                  <thead class="table-light">
                    <tr>
                      <th scope="col" style="width: 25%;">Candidate</th>
                      <th scope="col" style="width: 15%;">Experience</th>
                      <th scope="col" style="width: 20%;">Match Score</th>
                      <th scope="col" style="width: 22%;">Skills Overview</th>
                      <th scope="col" style="width: 18%;">Review Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${filteredCandidates
                      .map((cand) => renderCandidateTableRow(cand, activeJob))
                      .join('')}
                  </tbody>
                </table>
              </div>
            </div>

            <div class="candidate-cards-mobile">
              <div class="row g-3">
                ${filteredCandidates
                  .map((cand) => renderCandidateMobileCard(cand, activeJob))
                  .join('')}
              </div>
            </div>
          `
        }
      </section>
    </div>
  `;

  container.innerHTML = html;
  attachRecruiterEvents(container, activeJob);
}

function renderCandidateTableRow(cand, activeJob) {
  const reqCount = activeJob.requiredSkills ? activeJob.requiredSkills.length : 0;
  return `
    <tr data-candidate-id="${escapeHtml(cand.id)}">
      <td>
        <div class="fw-bold text-dark">
          <a href="#/candidate/${encodeURIComponent(cand.id)}?jobId=${encodeURIComponent(activeJob.id)}" class="text-decoration-none text-dark hover-primary">
            ${escapeHtml(cand.displayName)}
          </a>
        </div>
        <div class="text-muted small">ID: ${escapeHtml(cand.id)}</div>
      </td>
      <td>
        <span class="badge bg-light text-secondary border">${escapeHtml(cand.experienceLevel)}</span>
      </td>
      <td>
        ${renderMatchScoreBadge(cand.score, reqCount)}
      </td>
      <td>
        <div class="d-flex flex-wrap gap-1">
          ${cand.skills
            .slice(0, 3)
            .map((s) => `<span class="skill-tag">${escapeHtml(s)}</span>`)
            .join('')}
          ${cand.skills.length > 3 ? `<span class="small text-muted">+${cand.skills.length - 3}</span>` : ''}
        </div>
      </td>
      <td>
        <div class="d-flex align-items-center gap-2">
          <select class="form-select form-select-sm candidate-status-select" data-candidate-id="${escapeHtml(cand.id)}" aria-label="Update status for ${escapeHtml(cand.displayName)}">
            ${ALLOWED_STATUSES.map(
              (st) => `<option value="${st}" ${cand.reviewStatus === st ? 'selected' : ''}>${st}</option>`
            ).join('')}
          </select>
          <a href="#/candidate/${encodeURIComponent(cand.id)}?jobId=${encodeURIComponent(activeJob.id)}" class="btn btn-sm btn-outline-secondary py-1 px-2" title="View Full Details">
            <i class="bi bi-chevron-right" aria-hidden="true"></i>
          </a>
        </div>
      </td>
    </tr>
  `;
}

function renderCandidateMobileCard(cand, activeJob) {
  const reqCount = activeJob.requiredSkills ? activeJob.requiredSkills.length : 0;
  return `
    <div class="col-12" data-candidate-id="${escapeHtml(cand.id)}">
      <div class="card card-custom p-3">
        <div class="d-flex justify-content-between align-items-start mb-2">
          <div>
            <h3 class="h6 fw-bold mb-1">
              <a href="#/candidate/${encodeURIComponent(cand.id)}?jobId=${encodeURIComponent(activeJob.id)}" class="text-decoration-none text-dark">
                ${escapeHtml(cand.displayName)}
              </a>
            </h3>
            <span class="badge bg-light text-secondary border mb-1">${escapeHtml(cand.experienceLevel)}</span>
          </div>
          <div>
            ${renderMatchScoreBadge(cand.score, reqCount)}
          </div>
        </div>

        <div class="mb-3">
          <div class="small fw-semibold text-muted mb-1">Skills:</div>
          <div class="d-flex flex-wrap gap-1">
            ${cand.skills
              .map((s) => `<span class="skill-tag">${escapeHtml(s)}</span>`)
              .join('')}
          </div>
        </div>

        <div class="border-top pt-2 d-flex justify-content-between align-items-center gap-2">
          <div class="flex-grow-1">
            <label class="visually-hidden" for="mob-select-${escapeHtml(cand.id)}">Review Status</label>
            <select id="mob-select-${escapeHtml(cand.id)}" class="form-select form-select-sm candidate-status-select" data-candidate-id="${escapeHtml(cand.id)}">
              ${ALLOWED_STATUSES.map(
                (st) => `<option value="${st}" ${cand.reviewStatus === st ? 'selected' : ''}>${st}</option>`
              ).join('')}
            </select>
          </div>
          <a href="#/candidate/${encodeURIComponent(cand.id)}?jobId=${encodeURIComponent(activeJob.id)}" class="btn btn-outline-primary btn-sm text-nowrap">
            View Details
          </a>
        </div>
      </div>
    </div>
  `;
}

function filterAndSortCandidates(candidates, { query, status, sort }) {
  const q = query.trim().toLowerCase();

  const filtered = candidates.filter((cand) => {
    if (status !== 'ALL' && cand.reviewStatus !== status) return false;
    if (q) {
      const matchName = cand.displayName.toLowerCase().includes(q);
      const matchSkill = cand.skills.some((s) => s.toLowerCase().includes(q));
      if (!matchName && !matchSkill) return false;
    }
    return true;
  });

  filtered.sort((a, b) => {
    if (sort === 'SCORE_DESC') {
      if (b.score !== a.score) return b.score - a.score;
      return a.displayName.localeCompare(b.displayName);
    } else if (sort === 'SCORE_ASC') {
      if (a.score !== b.score) return a.score - b.score;
      return a.displayName.localeCompare(b.displayName);
    } else if (sort === 'NAME_ASC') {
      return a.displayName.localeCompare(b.displayName);
    }
    return 0;
  });

  return filtered;
}

function attachRecruiterEvents(container, activeJob) {
  const jobSelect = container.querySelector('#recruiter-job-select');
  if (jobSelect) {
    jobSelect.addEventListener('change', (e) => {
      selectedJobId = e.target.value;
      renderRecruiterScreen(container, selectedJobId);
    });
  }

  const searchInput = container.querySelector('#cand-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      candidateSearchQuery = e.target.value;
      renderRecruiterScreen(container, activeJob.id);
    });
  }

  const statusFilter = container.querySelector('#cand-status-filter');
  if (statusFilter) {
    statusFilter.addEventListener('change', (e) => {
      candidateStatusFilter = e.target.value;
      renderRecruiterScreen(container, activeJob.id);
    });
  }

  const sortSelect = container.querySelector('#cand-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      candidateSortOrder = e.target.value;
      renderRecruiterScreen(container, activeJob.id);
    });
  }

  const resetBtn = container.querySelector('#reset-cand-filters-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      candidateSearchQuery = '';
      candidateStatusFilter = 'ALL';
      renderRecruiterScreen(container, activeJob.id);
    });
  }

  const emptyClearBtn = container.querySelector('#empty-clear-cand-btn');
  if (emptyClearBtn) {
    emptyClearBtn.addEventListener('click', () => {
      candidateSearchQuery = '';
      candidateStatusFilter = 'ALL';
      renderRecruiterScreen(container, activeJob.id);
    });
  }

  container.querySelectorAll('.candidate-status-select').forEach((sel) => {
    sel.addEventListener('change', (e) => {
      const candId = sel.getAttribute('data-candidate-id');
      const newStatus = e.target.value;
      try {
        StorageService.updateCandidateStatus(candId, newStatus);
        showToast('Candidate status updated.', 'success');
        renderRecruiterScreen(container, activeJob.id);
      } catch (err) {
        console.error(err);
      }
    });
  });

  const exportBtn = container.querySelector('#export-candidates-csv-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      exportCandidatesCsv(activeJob);
    });
  }
}

/**
 * Screen S-07: Candidate Details Screen
 */
function renderCandidateDetailsScreen(container, candidateId, targetJobId = null) {
  const candidate = StorageService.getCandidateById(candidateId);
  const jobs = StorageService.getJobs();

  if (!candidate) {
    container.innerHTML = `
      <div class="py-5">
        ${renderEmptyState(
          'Candidate Not Found',
          `The requested candidate with ID "${escapeHtml(candidateId)}" does not exist in sample records.`,
          `<a href="#/recruiter" class="btn btn-primary"><i class="bi bi-arrow-left me-1"></i> Back to Recruiter Hub</a>`
        )}
      </div>
    `;
    return;
  }

  const activeJob = jobs.find((j) => j.id === targetJobId) || jobs[0] || { requiredSkills: [], title: 'General Profile' };

  const html = `
    <div class="py-4">
      <nav aria-label="Breadcrumb" class="mb-3">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item"><a href="#/recruiter" class="text-decoration-none">Recruiter Hub</a></li>
          <li class="breadcrumb-item active" aria-current="page">${escapeHtml(candidate.displayName)}</li>
        </ol>
      </nav>

      <div class="card card-custom p-4 mb-4">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 pb-3 border-bottom">
          <div>
            <div class="d-flex align-items-center gap-2 mb-1 flex-wrap">
              <span class="badge bg-primary-subtle text-primary border">${escapeHtml(candidate.experienceLevel)}</span>
              ${renderStatusBadge(candidate.reviewStatus)}
            </div>
            <h1 class="h2 fw-bold text-dark mb-1">${escapeHtml(candidate.displayName)}</h1>
            <div class="text-secondary small">
              Candidate ID: <code>${escapeHtml(candidate.id)}</code>
            </div>
          </div>

          <div class="d-flex align-items-center gap-2 flex-wrap">
            <a href="#/recruiter" class="btn btn-outline-secondary">
              <i class="bi bi-arrow-left me-1" aria-hidden="true"></i> Back to Candidates
            </a>
          </div>
        </div>

        <div class="p-3 bg-light rounded border my-3 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2">
          <div>
            <div class="small fw-semibold text-muted text-uppercase">Evaluated Against Position:</div>
            <div class="fw-bold text-dark fs-6">${escapeHtml(activeJob.title)} — ${escapeHtml(activeJob.company)}</div>
          </div>
          <div class="d-flex align-items-center gap-2">
            <label for="detail-status-select" class="small fw-bold text-dark text-nowrap">Review Status:</label>
            <select id="detail-status-select" class="form-select form-select-sm" style="min-width: 140px;">
              ${ALLOWED_STATUSES.map(
                (st) => `<option value="${st}" ${candidate.reviewStatus === st ? 'selected' : ''}>${st}</option>`
              ).join('')}
            </select>
          </div>
        </div>

        <!-- Explainable Skill Breakdown -->
        ${renderSkillBreakdown(candidate.skills, activeJob.requiredSkills)}

        <div class="mt-4">
          <h2 class="h6 fw-bold text-dark mb-2">Candidate Skills Portfolio (${candidate.skills.length})</h2>
          <div class="d-flex flex-wrap gap-1.5">
            ${candidate.skills
              .map((s) => `<span class="skill-tag">${escapeHtml(s)}</span>`)
              .join('')}
          </div>
        </div>

        <div class="mt-4 border-top pt-3">
          <h2 class="h6 fw-bold text-dark mb-2">Professional Experience Classification</h2>
          <p class="text-secondary mb-0">
            Self-reported experience bracket: <strong>${escapeHtml(candidate.experienceLevel)}</strong>. Profile has been verified for sample evaluation within TalentMatch.
          </p>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  const detailSelect = container.querySelector('#detail-status-select');
  if (detailSelect) {
    detailSelect.addEventListener('change', (e) => {
      const newStatus = e.target.value;
      StorageService.updateCandidateStatus(candidate.id, newStatus);
      showToast('Candidate status updated.', 'success');
      renderCandidateDetailsScreen(container, candidateId, targetJobId);
    });
  }
}

function exportCandidatesCsv(activeJob) {
  const candidates = StorageService.getCandidates();
  const headers = ['Candidate ID', 'Display Name', 'Experience Level', 'Review Status', 'Match Score (%)', 'Skills'];

  const rows = candidates.map((c) => {
    const match = calculateMatch(c.skills, activeJob.requiredSkills);
    return [
      `"${c.id}"`,
      `"${c.displayName.replace(/"/g, '""')}"`,
      `"${c.experienceLevel}"`,
      `"${c.reviewStatus}"`,
      match.score,
      `"${c.skills.join(', ').replace(/"/g, '""')}"`
    ].join(',');
  });

  const csvContent = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `talentmatch_candidates_${activeJob.id}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('Candidates exported to CSV successfully.', 'primary');
}

/**
 * Screen S-08: Data & Demo Controls Screen
 */
function renderDataControlsScreen(container) {
  const jobs = StorageService.getJobs();
  const candidates = StorageService.getCandidates();
  const applicant = StorageService.getApplicant();
  const shortlist = StorageService.getShortlist();

  const html = `
    <div class="py-4">
      <header class="mb-4">
        <div class="d-flex align-items-center gap-2 mb-1">
          <span class="badge bg-secondary-subtle text-secondary border">System Diagnostics</span>
          <span class="small text-muted fw-semibold">Settings</span>
        </div>
        <h1 class="h2 fw-bold text-dark mb-1">Data & Storage Settings</h1>
        <p class="text-secondary mb-0">
          Inspect client-side localStorage state, verify schema conformance, or reset data to original records.
        </p>
      </header>

      <div class="row g-4">
        <div class="col-lg-6">
          <div class="card card-custom p-4 mb-4">
            <h2 class="h5 fw-bold text-dark mb-3 d-flex align-items-center gap-2">
              <i class="bi bi-arrow-counterclockwise text-danger" aria-hidden="true"></i> Sample Data Reset
            </h2>
            <p class="text-secondary small mb-3">
              Reset all saved profile tweaks, shortlist bookmarks, and candidate review decisions back to the initial sample records.
            </p>
            <div class="alert alert-warning py-2 px-3 small border mb-4">
              <i class="bi bi-exclamation-triangle-fill me-1" aria-hidden="true"></i>
              <strong>Notice:</strong> This action clears <code>talentmatch_*_v1</code> keys in localStorage and reloads original datasets.
            </div>
            <button id="open-reset-modal-btn" class="btn btn-outline-danger" type="button">
              <i class="bi bi-trash3 me-1" aria-hidden="true"></i> Reset All Data…
            </button>
          </div>

          <div class="card card-custom p-4">
            <h2 class="h6 fw-bold text-dark mb-2">Simulate Malformed Storage (AT10 Verification)</h2>
            <p class="small text-secondary mb-3">
              Test resilience by injecting malformed data into localStorage. TalentMatch detects corruption and falls back gracefully.
            </p>
            <button id="corrupt-storage-btn" class="btn btn-outline-secondary btn-sm" type="button">
              <i class="bi bi-bug me-1" aria-hidden="true"></i> Corrupt Storage & Refresh
            </button>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="card card-custom p-4">
            <h2 class="h5 fw-bold text-dark mb-3 d-flex align-items-center gap-2">
              <i class="bi bi-hdd-network text-primary" aria-hidden="true"></i> Active Storage State
            </h2>
            <ul class="list-group list-group-flush small">
              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                <div>
                  <strong>Jobs Stored:</strong>
                  <div class="text-muted"><code>talentmatch_jobs_v1</code></div>
                </div>
                <span class="badge bg-primary rounded-pill">${jobs.length} items</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                <div>
                  <strong>Candidates Stored:</strong>
                  <div class="text-muted"><code>talentmatch_candidates_v1</code></div>
                </div>
                <span class="badge bg-primary rounded-pill">${candidates.length} items</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                <div>
                  <strong>Active Shortlist:</strong>
                  <div class="text-muted"><code>talentmatch_shortlist_v1</code></div>
                </div>
                <span class="badge bg-primary rounded-pill">${shortlist.length} jobs</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                <div>
                  <strong>Applicant Profile:</strong>
                  <div class="text-muted"><code>talentmatch_applicant_v1</code></div>
                </div>
                <span class="text-end">
                  <div class="fw-semibold">${escapeHtml(applicant.displayName)}</div>
                  <div class="text-muted">${applicant.skills.length} skills</div>
                </span>
              </li>
            </ul>

            <div class="mt-3 p-3 bg-light rounded border">
              <div class="small fw-semibold text-muted mb-1">Architecture Note:</div>
              <p class="small text-muted mb-0">
                Zero derived data (scores, matched/missing skill lists) is persisted. Scores are computed dynamically on the fly per architectural mandate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  const openResetBtn = container.querySelector('#open-reset-modal-btn');
  if (openResetBtn) {
    openResetBtn.addEventListener('click', () => {
      showResetConfirmationModal();
    });
  }

  const corruptBtn = container.querySelector('#corrupt-storage-btn');
  if (corruptBtn) {
    corruptBtn.addEventListener('click', () => {
      localStorage.setItem('talentmatch_jobs_v1', 'MALFORMED_JSON_STRING_###');
      showToast('Injected corrupted storage payload. Reloading app…', 'warning');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }
}

function showResetConfirmationModal() {
  const modalContainer = document.getElementById('modal-container');
  if (!modalContainer) return;

  const html = `
    <div class="modal fade show d-block" id="reset-confirm-modal" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="resetModalLabel" style="background-color: rgba(15, 23, 42, 0.5);">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content border-0 shadow-lg">
          <div class="modal-header border-bottom-0 pb-0">
            <h3 class="modal-title h5 fw-bold text-dark d-flex align-items-center gap-2" id="resetModalLabel">
              <i class="bi bi-exclamation-triangle-fill text-danger" aria-hidden="true"></i> Reset Sample Data
            </h3>
            <button type="button" class="btn-close" id="modal-close-x" aria-label="Close"></button>
          </div>
          <div class="modal-body py-3">
            <p class="text-secondary mb-0">
              Reset demo data? Your saved changes will be replaced with the original sample records.
            </p>
          </div>
          <div class="modal-footer border-top-0 pt-0">
            <button type="button" class="btn btn-outline-secondary" id="modal-cancel-btn">Cancel</button>
            <button type="button" class="btn btn-danger" id="modal-confirm-btn">
              <i class="bi bi-arrow-counterclockwise me-1" aria-hidden="true"></i> Yes, Reset Data
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  modalContainer.innerHTML = html;

  const closeBtn = modalContainer.querySelector('#modal-close-x');
  const cancelBtn = modalContainer.querySelector('#modal-cancel-btn');
  const confirmBtn = modalContainer.querySelector('#modal-confirm-btn');

  function closeModal() {
    modalContainer.innerHTML = '';
  }

  closeBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);

  confirmBtn.addEventListener('click', () => {
    confirmBtn.disabled = true;
    confirmBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span> Resetting…`;
    StorageService.resetAll();
    closeModal();
    showToast('Demo data restored to initial sample state.', 'success');
    updateNav('#/jobs');
    window.location.hash = '#/jobs';
  });
}

/* ==========================================================================
   7. ROUTER & APPLICATION LIFECYCLE
   ========================================================================== */
function matchRoute(pattern, path) {
  const patternSegments = pattern.split('/').filter(Boolean);
  const pathSegments = path.split('/').filter(Boolean);

  if (patternSegments.length !== pathSegments.length) return null;

  const params = {};
  for (let i = 0; i < patternSegments.length; i++) {
    if (patternSegments[i].startsWith(':')) {
      const paramName = patternSegments[i].slice(1);
      params[paramName] = decodeURIComponent(pathSegments[i]);
    } else if (patternSegments[i] !== pathSegments[i]) {
      return null;
    }
  }
  return { params };
}

function handleRouting() {
  const appContainer = document.getElementById('app-root');
  const rawHash = window.location.hash || '#/jobs';
  const [pathPart, queryPart] = rawHash.split('?');
  const path = pathPart.replace(/^#/, '') || '/jobs';
  const queryParams = new URLSearchParams(queryPart || '');

  const routes = {
    '/jobs': () => {
      updateNav('#/jobs');
      renderJobsScreen(appContainer);
    },
    '/job/:id': (params) => {
      updateNav('#/jobs');
      renderJobDetailsScreen(appContainer, params.id);
    },
    '/profile': () => {
      updateNav('#/profile');
      renderProfileScreen(appContainer);
    },
    '/shortlist': () => {
      updateNav('#/shortlist');
      renderShortlistScreen(appContainer);
    },
    '/recruiter': () => {
      updateNav('#/recruiter');
      renderRecruiterScreen(appContainer);
    },
    '/candidates/:jobId': (params) => {
      updateNav('#/recruiter');
      renderRecruiterScreen(appContainer, params.jobId);
    },
    '/candidate/:id': (params) => {
      updateNav('#/recruiter');
      renderCandidateDetailsScreen(appContainer, params.id, queryParams.get('jobId'));
    },
    '/data': () => {
      updateNav('#/data');
      renderDataControlsScreen(appContainer);
    }
  };

  let matched = false;
  for (const [pattern, handler] of Object.entries(routes)) {
    const match = matchRoute(pattern, path);
    if (match) {
      matched = true;
      handler(match.params);
      break;
    }
  }

  if (!matched) {
    updateNav('#/jobs');
    appContainer.innerHTML = `
      <div class="py-5">
        ${renderEmptyState(
          'Page Not Found',
          `The requested route "${escapeHtml(path)}" does not exist.`,
          `<a href="#/jobs" class="btn btn-primary"><i class="bi bi-house me-1"></i> Return to Job Explorer</a>`
        )}
      </div>
    `;
  }
}

function updateNav(activeRoute) {
  const navContainer = document.getElementById('navbar-container');
  if (navContainer) {
    const shortlistCount = StorageService.getShortlist().length;
    navContainer.innerHTML = renderNavbar(activeRoute, shortlistCount);
  }
}

function initApp() {
  const bannerContainer = document.getElementById('demo-banner-container');
  if (bannerContainer) bannerContainer.innerHTML = renderDemoBanner();

  StorageService.init();

  window.addEventListener('hashchange', handleRouting);

  if (!window.location.hash) {
    window.location.hash = '#/jobs';
  } else {
    handleRouting();
  }
}

document.addEventListener('DOMContentLoaded', initApp);
