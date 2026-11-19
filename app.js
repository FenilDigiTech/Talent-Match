/* TalentMatch - app.js (PST_PD_005)
   Works with your index.html + styles.css. It draws everything into:
   #navbar-container, #app-root, #toast-container, #modal-container
   Parts: 1 Data | 2 Storage | 3 Match score | 4 Helpers | 5 Views | 6 Actions | 7 Router */

// ============ 1. SAMPLE DATA (fictional) ============
const SAMPLE_JOBS = [
  { id: "job-001", title: "Frontend Developer Intern", company: "Sample Tech", location: "Bengaluru", experienceLevel: "Internship", requiredSkills: ["HTML", "CSS", "JavaScript"], description: "Build and maintain responsive user interfaces." },
  { id: "job-002", title: "Junior Frontend Developer", company: "PixelWorks", location: "Pune", experienceLevel: "Entry Level", requiredSkills: ["HTML", "CSS", "JavaScript", "React"], description: "Create reusable UI components for client websites." },
  { id: "job-003", title: "Python Developer Intern", company: "DataNest", location: "Chennai", experienceLevel: "Internship", requiredSkills: ["Python", "Git", "SQL"], description: "Write small Python scripts and help clean data." },
  { id: "job-004", title: "Web Developer", company: "BrightApps", location: "Remote", experienceLevel: "Entry Level", requiredSkills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Git"], description: "Develop and maintain company landing pages." },
  { id: "job-005", title: "React Developer", company: "CodeCraft", location: "Hyderabad", experienceLevel: "Mid Level", requiredSkills: ["JavaScript", "React", "Git", "REST API"], description: "Build dashboards that talk to REST APIs." },
  { id: "job-006", title: "Backend Developer", company: "ServerHub", location: "Mumbai", experienceLevel: "Entry Level", requiredSkills: ["Python", "SQL", "Git", "REST API"], description: "Design simple APIs and database tables." },
  { id: "job-007", title: "Data Analyst Intern", company: "InsightLabs", location: "Ahmedabad", experienceLevel: "Internship", requiredSkills: ["Python", "SQL", "Excel"], description: "Prepare weekly reports from sample datasets." },
  { id: "job-008", title: "UI Developer", company: "DesignDock", location: "Bengaluru", experienceLevel: "Entry Level", requiredSkills: ["HTML", "CSS", "Bootstrap", "JavaScript"], description: "Turn design mockups into accessible pages." },
  { id: "job-009", title: "Full Stack Intern", company: "StackBridge", location: "Remote", experienceLevel: "Internship", requiredSkills: ["HTML", "CSS", "JavaScript", "Node.js", "SQL"], description: "Work on both frontend and backend tasks." },
  { id: "job-010", title: "QA Tester", company: "TestRight", location: "Pune", experienceLevel: "Entry Level", requiredSkills: ["Testing", "Git", "JavaScript"], description: "Test web apps and report bugs clearly." }
];
const SAMPLE_CANDIDATES = [
  { id: "candidate-001", displayName: "Candidate A", skills: ["HTML", "CSS", "JavaScript"], experienceLevel: "Entry Level", reviewStatus: "Reviewing" },
  { id: "candidate-002", displayName: "Candidate B", skills: ["HTML", "CSS", "JavaScript", "React", "Git"], experienceLevel: "Mid Level", reviewStatus: "Reviewing" },
  { id: "candidate-003", displayName: "Candidate C", skills: ["Python", "SQL", "Git"], experienceLevel: "Entry Level", reviewStatus: "Reviewing" },
  { id: "candidate-004", displayName: "Candidate D", skills: ["HTML", "CSS", "Bootstrap"], experienceLevel: "Internship", reviewStatus: "Reviewing" },
  { id: "candidate-005", displayName: "Candidate E", skills: ["JavaScript", "Node.js", "SQL", "REST API"], experienceLevel: "Entry Level", reviewStatus: "Reviewing" }
];
const DEFAULT_PROFILE = { id: "applicant-001", displayName: "Demo Applicant", skills: ["HTML", "CSS", "JavaScript"], experienceLevel: "Entry Level" };
const STATUSES = ["Reviewing", "Shortlisted", "Rejected"];
const LEVELS = ["Internship", "Entry Level", "Mid Level"];
const jobs = SAMPLE_JOBS; // jobs are read-only in this demo

// ============ 2. STORAGE (localStorage with safe loading) ============
const KEYS = { profile: "talentmatch_applicant_v1", shortlist: "talentmatch_shortlist_v1", candidates: "talentmatch_candidates_v1" };
let profile, shortlist, candidates;

function load(key, fallback, isValid) {
  try {
    const raw = localStorage.getItem(key);
    const value = raw ? JSON.parse(raw) : null;
    return value && isValid(value) ? value : structuredClone(fallback); // missing or broken data -> sample data
  } catch (error) {
    return structuredClone(fallback);
  }
}
function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch (error) { toast("Could not save your changes in this browser.", "danger"); }
}
function loadAll() {
  profile = load(KEYS.profile, DEFAULT_PROFILE, (v) => Array.isArray(v.skills));
  shortlist = load(KEYS.shortlist, [], Array.isArray);
  candidates = load(KEYS.candidates, SAMPLE_CANDIDATES, (v) => Array.isArray(v) && v.every((c) => Array.isArray(c.skills) && STATUSES.includes(c.reviewStatus)));
}

// ============ 3. MATCH SCORE = matched / required x 100 ============
function calculateMatch(personSkills, requiredSkills) {
  const norm = (s) => s.trim().toLowerCase();
  const have = new Set(personSkills.map(norm));
  const seen = new Set();
  const required = requiredSkills.filter((s) => !seen.has(norm(s)) && seen.add(norm(s))); // remove duplicates
  const matchedSkills = required.filter((s) => have.has(norm(s)));
  const missingSkills = required.filter((s) => !have.has(norm(s)));
  const score = required.length === 0 ? 0 : Math.round((matchedSkills.length / required.length) * 100);
  return { score, matchedSkills, missingSkills, total: required.length };
}

// ============ 4. HELPERS ============
const $ = (selector) => document.querySelector(selector);
const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const ui = { mode: "applicant", query: "", level: "", location: "", sort: "score", cq: "", roleId: "" }; // screen-only state

function scoreBadge(m) {
  const kind = m.total === 0 ? "zero" : m.score >= 70 ? "high" : m.score >= 40 ? "mid" : "low";
  const label = { zero: "No requirements", high: "Strong match", mid: "Partial match", low: "Low match" }[kind];
  return `<span class="badge rounded-pill badge-score-${kind}">${m.score}/100 · ${label}</span>`;
}
function tag(skill, type) {
  const icon = type === "matched" ? '<i class="bi bi-check-circle-fill"></i>' : type === "missing" ? '<i class="bi bi-x-circle-fill"></i>' : "";
  return `<span class="skill-tag ${type === "plain" ? "" : "skill-tag-" + type}">${icon}${esc(skill)}</span>`;
}
const tags = (list, type) => list.map((s) => tag(s, type)).join(" ");
const emptyState = (msg, actionHtml = "") =>
  `<div class="card-custom p-4 text-center" role="status"><i class="bi bi-inbox fs-2 text-muted"></i><p class="my-2">${msg}</p>${actionHtml}</div>`;
const statCard = (value, label, cols = "col-6 col-md-3") =>
  `<div class="${cols}"><div class="card-custom summary-stat-card"><div class="summary-stat-val">${value}</div><div class="summary-stat-lbl">${label}</div></div></div>`;
const progress = (score) =>
  `<div class="progress" style="height:10px" role="progressbar" aria-label="Match score" aria-valuenow="${score}" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar" style="width:${score}%"></div></div>`;

function toast(message, type = "success") { // Bootstrap toast, shown bottom-right
  const el = document.createElement("div");
  el.className = `toast align-items-center text-bg-${type} border-0`;
  el.setAttribute("role", "status");
  el.innerHTML = `<div class="d-flex"><div class="toast-body">${esc(message)}</div><button class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button></div>`;
  $("#toast-container").appendChild(el);
  el.addEventListener("hidden.bs.toast", () => el.remove());
  new bootstrap.Toast(el, { delay: 2500 }).show();
}

function breakdown(m, labels) { // explains the score (used for jobs AND candidates)
  const how = m.total === 0
    ? "No required skills are listed, so there is nothing to compare."
    : `${m.matchedSkills.length} of ${m.total} required skills matched (${m.matchedSkills.length} ÷ ${m.total} × 100 = ${m.score}).`;
  return `${progress(m.score)}
    <p class="small text-muted mt-2">${how} This score reflects the required skills found in the profile. It measures skill overlap only, not hiring probability.</p>
    <h3 class="h6">${labels[0]}</h3><div class="d-flex flex-wrap gap-2 mb-3">${tags(m.matchedSkills, "matched") || '<span class="small text-muted">None yet</span>'}</div>
    <h3 class="h6">${labels[1]}</h3><div class="d-flex flex-wrap gap-2">${tags(m.missingSkills, "missing") || '<span class="small text-muted">None - all required skills found</span>'}</div>`;
}

// ============ 5. VIEWS (each returns HTML for #app-root) ============
function renderNavbar(page) {
  const links = ui.mode === "recruiter"
    ? [["#/recruiter", "recruiter", "bi-people", "Candidate review"], ["#/data", "data", "bi-database", "Demo data"]]
    : [["#/jobs", "jobs", "bi-briefcase", "Jobs"], ["#/profile", "profile", "bi-person", "My profile"],
       ["#/shortlist", "shortlist", "bi-bookmark", `My shortlist <span class="badge text-bg-primary">${shortlist.length}</span>`], ["#/data", "data", "bi-database", "Demo data"]];
  $("#navbar-container").innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-custom sticky-top" aria-label="Main">
      <div class="container">
        <a class="navbar-brand navbar-brand-custom" href="#/jobs"><i class="bi bi-bullseye"></i>TalentMatch</a>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav-menu" aria-controls="nav-menu" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="nav-menu">
          <ul class="navbar-nav me-auto">${links.map(([href, id, icon, text]) =>
            `<li class="nav-item"><a class="nav-link ${page === id ? "active" : ""}" href="${href}" ${page === id ? 'aria-current="page"' : ""}><i class="bi ${icon}"></i> ${text}</a></li>`).join("")}</ul>
          <div class="mode-switcher-container" role="group" aria-label="Demo mode switcher (not a real login)">
            <a class="mode-switcher-btn ${ui.mode === "applicant" ? "active" : ""}" href="#/jobs">Applicant</a>
            <a class="mode-switcher-btn ${ui.mode === "recruiter" ? "active" : ""}" href="#/recruiter">Recruiter</a>
          </div>
        </div>
      </div>
    </nav>`;
}

// ---- S-01 Job search ----
function filteredJobs() {
  const q = ui.query.trim().toLowerCase();
  return jobs
    .filter((j) => [j.title, j.company, ...j.requiredSkills].join(" ").toLowerCase().includes(q)
      && (!ui.level || j.experienceLevel === ui.level) && (!ui.location || j.location === ui.location))
    .map((job) => ({ job, m: calculateMatch(profile.skills, job.requiredSkills) }))
    .sort((a, b) => (ui.sort === "score" ? b.m.score - a.m.score || a.job.title.localeCompare(b.job.title) : 0));
}
function jobCard({ job, m }) {
  const saved = shortlist.includes(job.id);
  return `<div class="col-md-6 col-xl-4"><article class="card-custom h-100 p-3 d-flex flex-column gap-2">
    <h2 class="h5 mb-0"><a class="text-decoration-none" href="#/jobs/${job.id}">${esc(job.title)}</a></h2>
    <div class="text-muted small"><i class="bi bi-building"></i> ${esc(job.company)} &middot; <i class="bi bi-geo-alt"></i> ${esc(job.location)} &middot; ${esc(job.experienceLevel)}</div>
    <div>${scoreBadge(m)}</div>${progress(m.score)}
    <div class="d-flex flex-wrap gap-1">${job.requiredSkills.map((s) => tag(s, m.matchedSkills.includes(s) ? "matched" : "plain")).join(" ")}</div>
    <div class="mt-auto d-flex gap-2 pt-2">
      <a class="btn btn-sm btn-outline-primary" href="#/jobs/${job.id}">View details</a>
      <button class="btn btn-sm ${saved ? "btn-primary" : "btn-outline-primary"}" data-action="toggle-shortlist" data-id="${job.id}" aria-pressed="${saved}"><i class="bi bi-bookmark${saved ? "-fill" : ""}"></i> ${saved ? "Shortlisted" : "Shortlist"}</button>
    </div></article></div>`;
}
function updateJobList() { // only redraws the results, so the search box keeps focus while typing
  const list = filteredJobs();
  $("#job-count").textContent = `${list.length} job${list.length === 1 ? "" : "s"} found`;
  $("#job-list").innerHTML = list.length ? list.map(jobCard).join("")
    : `<div class="col-12">${emptyState("No matching jobs found. Try a different keyword or clear your filters.", '<button class="btn btn-primary btn-sm" data-action="clear-filters">Clear filters</button>')}</div>`;
}
function viewJobs() {
  const opt = (list, current, all) => `<option value="">${all}</option>` + list.map((x) => `<option ${x === current ? "selected" : ""}>${x}</option>`).join("");
  const places = [...new Set(jobs.map((j) => j.location))].sort();
  return `<h1 class="h3 mb-3">Find a tech job</h1>
    <div class="row g-3 mb-3">${statCard(jobs.length, "Available jobs", "col-6 col-md-4")}${statCard(jobs.filter((j) => shortlist.includes(j.id)).length, "Shortlisted", "col-6 col-md-4")}${statCard(profile.skills.length, "Skills in my profile", "col-12 col-md-4")}</div>
    <div class="card-custom p-3 mb-3"><div class="row g-2">
      <div class="col-lg-5"><label for="job-q" class="visually-hidden">Search jobs</label><input id="job-q" type="search" class="form-control" placeholder="Search by job title, company, or skill…" value="${esc(ui.query)}"></div>
      <div class="col-6 col-lg-2"><label for="job-level" class="visually-hidden">Experience level</label><select id="job-level" class="form-select">${opt(LEVELS, ui.level, "All levels")}</select></div>
      <div class="col-6 col-lg-2"><label for="job-location" class="visually-hidden">Location</label><select id="job-location" class="form-select">${opt(places, ui.location, "All locations")}</select></div>
      <div class="col-12 col-lg-3"><label for="job-sort" class="visually-hidden">Sort</label><select id="job-sort" class="form-select"><option value="score" ${ui.sort === "score" ? "selected" : ""}>Sort: best match first</option><option value="default" ${ui.sort === "default" ? "selected" : ""}>Sort: default order</option></select></div>
    </div></div>
    <p id="job-count" class="text-muted small" aria-live="polite"></p><div id="job-list" class="row g-3"></div>`;
}

// ---- S-02 Job details ----
function viewJobDetails(id) {
  const job = jobs.find((j) => j.id === id);
  if (!job) return emptyState("This job could not be found.", '<a class="btn btn-primary btn-sm" href="#/jobs">Back to jobs</a>');
  const m = calculateMatch(profile.skills, job.requiredSkills), saved = shortlist.includes(job.id);
  return `<a href="#/jobs" class="text-decoration-none"><i class="bi bi-arrow-left"></i> Back to results</a>
    <article class="card-custom p-4 mt-3">
      <div class="d-flex flex-wrap justify-content-between gap-2">
        <div><h1 class="h3 mb-1">${esc(job.title)}</h1><div class="text-muted">${esc(job.company)} &middot; ${esc(job.location)} &middot; ${esc(job.experienceLevel)}</div></div>
        <div><button class="btn ${saved ? "btn-primary" : "btn-outline-primary"}" data-action="toggle-shortlist" data-id="${job.id}" aria-pressed="${saved}"><i class="bi bi-bookmark${saved ? "-fill" : ""}"></i> ${saved ? "Shortlisted" : "Shortlist"}</button></div>
      </div>
      <p class="mt-3">${esc(job.description)}</p><p class="mb-2">Your match: ${scoreBadge(m)}</p>
      ${breakdown(m, ["Skills you have", "Skills to work on"])}
    </article>`;
}

// ---- S-03 Applicant profile ----
function viewProfile() {
  return `<h1 class="h3 mb-3">My profile</h1><div class="row g-3">
    <div class="col-lg-7"><form id="profile-form" class="card-custom p-4" novalidate>
      <label for="skills-input" class="form-label fw-semibold">My skills</label>
      <input id="skills-input" class="form-control" value="${esc(profile.skills.join(", "))}" placeholder="HTML, CSS, JavaScript" aria-describedby="skills-help skills-error">
      <div id="skills-help" class="form-text">Separate skills with commas.</div><div id="skills-error" class="invalid-feedback"></div>
      <label for="level-input" class="form-label fw-semibold mt-3">Experience level</label>
      <select id="level-input" class="form-select">${LEVELS.map((l) => `<option ${l === profile.experienceLevel ? "selected" : ""}>${l}</option>`).join("")}</select>
      <button class="btn btn-primary mt-4" type="submit"><i class="bi bi-check2"></i> Save profile</button>
    </form></div>
    <div class="col-lg-5"><div class="card-custom p-4"><h2 class="h6">Current skills</h2><div class="d-flex flex-wrap gap-2">${tags(profile.skills, "plain")}</div>
      <p class="small text-muted mt-3 mb-0">Saving recalculates the match score of every job.</p></div></div></div>`;
}

// ---- S-04 Shortlist ----
function viewShortlist() {
  const saved = jobs.filter((j) => shortlist.includes(j.id)).map((job) => ({ job, m: calculateMatch(profile.skills, job.requiredSkills) }));
  return `<h1 class="h3 mb-3">My shortlist</h1>` + (saved.length
    ? `<div class="row g-3">${saved.map(jobCard).join("")}</div>`
    : emptyState("Your shortlist is empty. Save jobs you'd like to revisit.", '<a class="btn btn-primary btn-sm" href="#/jobs">Browse jobs</a>'));
}

// ---- S-05 / S-06 Recruiter dashboard + candidate review ----
function rankedCandidates(job) {
  const q = ui.cq.trim().toLowerCase();
  return candidates
    .filter((c) => [c.displayName, ...c.skills].join(" ").toLowerCase().includes(q))
    .map((c) => ({ c, m: calculateMatch(c.skills, job.requiredSkills) }))
    .sort((a, b) => b.m.score - a.m.score || a.c.displayName.localeCompare(b.c.displayName)); // highest score first
}
function statusControl(c) {
  return `<span class="badge status-badge-${c.reviewStatus.toLowerCase()} me-1">${c.reviewStatus}</span>
    <select class="form-select form-select-sm d-inline-block w-auto" data-status-id="${c.id}" aria-label="Review status for ${esc(c.displayName)}">${STATUSES.map((s) => `<option ${s === c.reviewStatus ? "selected" : ""}>${s}</option>`).join("")}</select>`;
}
function updateCandidateList() {
  const job = jobs.find((j) => j.id === ui.roleId), rows = rankedCandidates(job);
  if (!rows.length) { $("#cand-list").innerHTML = emptyState("No candidates match these filters.", '<button class="btn btn-primary btn-sm" data-action="clear-cand">Clear search</button>'); return; }
  const link = (c) => `#/recruiter/${job.id}/${c.id}`;
  $("#cand-list").innerHTML = `
    <div class="candidate-table-wrapper card-custom table-responsive"><table class="table align-middle mb-0">
      <caption class="visually-hidden">Candidates ranked by match score for ${esc(job.title)}</caption>
      <thead><tr><th scope="col">Candidate</th><th scope="col">Experience</th><th scope="col">Match score</th><th scope="col">Skills matched</th><th scope="col">Status</th></tr></thead>
      <tbody>${rows.map(({ c, m }) => `<tr><th scope="row"><a href="${link(c)}">${esc(c.displayName)}</a></th><td>${esc(c.experienceLevel)}</td><td>${scoreBadge(m)}</td><td>${m.matchedSkills.length}/${m.total}</td><td>${statusControl(c)}</td></tr>`).join("")}</tbody></table></div>
    <div class="candidate-cards-mobile">${rows.map(({ c, m }) => `<div class="card-custom p-3 mb-2">
      <a class="fw-semibold" href="${link(c)}">${esc(c.displayName)}</a> <span class="text-muted small">&middot; ${esc(c.experienceLevel)}</span>
      <div class="my-2">${scoreBadge(m)} <span class="small text-muted">${m.matchedSkills.length}/${m.total} skills</span></div>${statusControl(c)}</div>`).join("")}</div>`;
}
function viewRecruiter(roleId) {
  const job = jobs.find((j) => j.id === roleId) || jobs[0];
  ui.roleId = job.id;
  const count = (s) => candidates.filter((c) => c.reviewStatus === s).length;
  return `<h1 class="h3 mb-1">Candidate review</h1><p class="text-muted small">Demo-mode view. There is no real login or access control.</p>
    <div class="row g-3 mb-3">${statCard(candidates.length, "Candidates")}${statCard(count("Shortlisted"), "Shortlisted")}${statCard(count("Reviewing"), "Reviewing")}${statCard(count("Rejected"), "Rejected")}</div>
    <div class="card-custom p-3 mb-3"><div class="row g-2">
      <div class="col-md-7"><label for="role-select" class="form-label small fw-semibold mb-1">Role</label><select id="role-select" class="form-select">${jobs.map((j) => `<option value="${j.id}" ${j.id === job.id ? "selected" : ""}>${esc(j.title)} - ${esc(j.company)}</option>`).join("")}</select></div>
      <div class="col-md-5"><label for="cand-q" class="form-label small fw-semibold mb-1">Search candidates</label><input id="cand-q" type="search" class="form-control" placeholder="Name or skill…" value="${esc(ui.cq)}"></div>
    </div><p class="small text-muted mt-2 mb-0">Required skills: ${tags(job.requiredSkills, "plain")}</p></div>
    <div id="cand-list"></div>`;
}

// ---- S-07 Candidate details ----
function viewCandidate(roleId, candId) {
  const job = jobs.find((j) => j.id === roleId), c = candidates.find((x) => x.id === candId);
  if (!job || !c) return emptyState("This candidate could not be found.", '<a class="btn btn-primary btn-sm" href="#/recruiter">Back to candidates</a>');
  const m = calculateMatch(c.skills, job.requiredSkills);
  return `<a href="#/recruiter/${job.id}" class="text-decoration-none"><i class="bi bi-arrow-left"></i> Back to candidates</a>
    <article class="card-custom p-4 mt-3">
      <div class="d-flex flex-wrap justify-content-between gap-2"><div><h1 class="h3 mb-1">${esc(c.displayName)}</h1><div class="text-muted">${esc(c.experienceLevel)} &middot; applying for ${esc(job.title)}</div></div><div>${statusControl(c)}</div></div>
      <p class="mt-3 mb-2">Match score: ${scoreBadge(m)}</p>
      ${breakdown(m, ["Matched skills", "Missing skills"])}
      <h3 class="h6 mt-3">All skills on profile</h3><div class="d-flex flex-wrap gap-2">${tags(c.skills, "plain")}</div>
    </article>`;
}

// ---- S-08 Demo data controls ----
function viewData() {
  return `<h1 class="h3 mb-3">Demo data</h1><div class="card-custom p-4">
    <p class="mb-2">Demo data only. Jobs and candidate profiles are fictional.</p>
    <p class="text-muted">Your profile, shortlist and candidate statuses are saved in this browser (localStorage). Reset to go back to the original sample records.</p>
    <button class="btn btn-outline-danger" data-action="ask-reset"><i class="bi bi-arrow-counterclockwise"></i> Reset demo data</button></div>`;
}

// ============ 6. ACTIONS (clicks, typing, forms) ============
function toggleShortlist(id) {
  const added = !shortlist.includes(id);
  shortlist = added ? [...shortlist, id] : shortlist.filter((x) => x !== id);
  save(KEYS.shortlist, shortlist); // stays after refresh
  toast(added ? "Job added to your shortlist." : "Job removed from your shortlist.");
  router(true);
}
function saveProfile() {
  const input = $("#skills-input"), error = $("#skills-error");
  const skills = input.value.split(",").map((s) => s.trim()).filter(Boolean);
  const message = skills.length === 0 ? "Add at least one skill, for example: HTML, CSS."
    : skills.some((s) => s.length > 30) ? "Each skill must be 30 characters or fewer." : "";
  if (message) { input.classList.add("is-invalid"); error.textContent = message; input.focus(); return; } // keeps what was typed
  profile = { ...profile, skills, experienceLevel: $("#level-input").value };
  save(KEYS.profile, profile);
  toast("Your profile has been saved.");
  location.hash = "#/jobs"; // jobs are redrawn, so every score is recalculated
}
function changeStatus(id, status) {
  const c = candidates.find((x) => x.id === id);
  if (!c || !STATUSES.includes(status)) return; // only valid statuses are allowed
  c.reviewStatus = status;
  save(KEYS.candidates, candidates);
  toast("Candidate status updated.");
  router(true);
  const again = $(`[data-status-id="${id}"]`); if (again) again.focus();
}
function askReset() {
  $("#modal-container").innerHTML = `<div class="modal fade" id="reset-modal" tabindex="-1" aria-labelledby="reset-title" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content">
    <div class="modal-header"><h2 class="modal-title h5" id="reset-title">Reset demo data?</h2><button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
    <div class="modal-body">Your saved changes will be replaced with the original sample records.</div>
    <div class="modal-footer"><button class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button><button class="btn btn-danger" data-action="reset-now">Reset</button></div></div></div></div>`;
  new bootstrap.Modal($("#reset-modal")).show();
}
function resetNow() {
  const modal = $("#reset-modal");
  if (modal) bootstrap.Modal.getInstance(modal).hide();
  Object.values(KEYS).forEach((k) => localStorage.removeItem(k));
  Object.assign(ui, { query: "", level: "", location: "", sort: "score", cq: "" });
  loadAll();
  toast("Demo data has been reset.");
  location.hash = "#/jobs";
  router();
}

document.addEventListener("click", (e) => { // one listener handles every data-action button
  const el = e.target.closest("[data-action]"); if (!el) return;
  const action = el.dataset.action;
  if (action === "toggle-shortlist") toggleShortlist(el.dataset.id);
  if (action === "clear-filters") { Object.assign(ui, { query: "", level: "", location: "" }); router(true); }
  if (action === "clear-cand") { ui.cq = ""; router(true); }
  if (action === "ask-reset") askReset();
  if (action === "reset-now") resetNow();
});
document.addEventListener("input", (e) => {
  if (e.target.id === "job-q") { ui.query = e.target.value; updateJobList(); }
  if (e.target.id === "cand-q") { ui.cq = e.target.value; updateCandidateList(); }
});
document.addEventListener("change", (e) => {
  const t = e.target;
  if (t.id === "job-level") { ui.level = t.value; updateJobList(); }
  if (t.id === "job-location") { ui.location = t.value; updateJobList(); }
  if (t.id === "job-sort") { ui.sort = t.value; updateJobList(); }
  if (t.id === "role-select") location.hash = "#/recruiter/" + t.value;
  if (t.dataset.statusId) changeStatus(t.dataset.statusId, t.value);
});
document.addEventListener("submit", (e) => {
  if (e.target.id === "profile-form") { e.preventDefault(); saveProfile(); }
});

// ============ 7. ROUTER - the address (#/jobs, #/profile ...) picks the screen ============
function router(keepScroll = false) {
  const [first, a, b] = location.hash.replace(/^#\/?/, "").split("/");
  const page = first || "jobs";
  if (page === "recruiter") ui.mode = "recruiter";
  else if (["jobs", "profile", "shortlist"].includes(page)) ui.mode = "applicant";
  try {
    const views = {
      jobs: () => (a ? viewJobDetails(a) : viewJobs()),
      profile: viewProfile, shortlist: viewShortlist, data: viewData,
      recruiter: () => (b ? viewCandidate(a, b) : viewRecruiter(a))
    };
    renderNavbar(page);
    $("#app-root").innerHTML = (views[page] || views.jobs)();
    if (page === "jobs" && !a) updateJobList();
    if (page === "recruiter" && !b) updateCandidateList();
  } catch (error) {
    console.error(error);
    $("#app-root").innerHTML = emptyState("We couldn't load this page. Try reloading the sample data.", '<button class="btn btn-primary btn-sm" data-action="reset-now">Reload sample data</button>');
  }
  if (!keepScroll) window.scrollTo(0, 0);
}
window.addEventListener("hashchange", () => router());

loadAll();
router();
