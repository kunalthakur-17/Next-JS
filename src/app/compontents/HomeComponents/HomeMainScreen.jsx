import React from "react";

const skills = [
  ["Frontend", "React.js", "Next.js", "Redux", "Redux Saga", "TypeScript", "Tailwind CSS"],
  ["Backend", "Python", "FastAPI", "Node.js", "REST APIs", "GraphQL", "WebSockets"],
  ["Data", "PostgreSQL", "MongoDB", "SQL", "Query optimization", "API caching"],
  ["Quality", "Jest", "Pytest", "Docker", "Git", "OAuth 2.0", "Stripe"],
];

const projects = [
  {
    number: "01",
    title: "Analytics & Reporting",
    category: "Enterprise platform",
    description: "SSR dashboard with interactive charts, exportable reports, role-based access, optimized SQL queries, caching, and pagination.",
    tech: ["Next.js", "TypeScript", "GraphQL", "FastAPI"],
  },
  {
    number: "02",
    title: "Real-time Notifications",
    category: "Live activity system",
    description: "Instant cross-session notification and activity feeds with FastAPI WebSockets, reliable history, filtering, and efficient state updates.",
    tech: ["React", "WebSockets", "FastAPI", "PostgreSQL"],
  },
  {
    number: "03",
    title: "AI Social Automation",
    category: "AI workflow",
    description: "AI-powered content generation and scheduling workflow using OpenAI APIs with persistent posts, schedules, and publishing history.",
    tech: ["React", "Python", "OpenAI", "PostgreSQL"],
  },
];

const certifications = [
  "150+ LeetCode DSA Problems",
  "GitHub Copilot & AI Pair Programming",
  "Data Structures and Algorithms",
  "Database Management Systems",
  "Software Testing and Reuse",
  "Computer Networks",
];

function HomeMainScreen() {
  return (
    <main id="top">
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Available for opportunities</p>
          <h1>Building digital<br />products that <em>scale.</em></h1>
          <p className="hero-description">
            Software engineer crafting fast, accessible, and thoughtful applications
            across React, Next.js, TypeScript, Python, and FastAPI.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View my work <span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href="#experience">My experience</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Software engineering summary">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="code-card">
            <div className="code-card-header">
              <span className="window-dot red" /><span className="window-dot amber" /><span className="window-dot green" />
              <span className="code-label">developer.ts</span>
            </div>
            <pre><code><span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}
{"\n"}  name: <span className="code-green">&quot;Kunal Thakur&quot;</span>,
{"\n"}  role: <span className="code-green">&quot;Software Engineer&quot;</span>,
{"\n"}  experience: <span className="code-orange">5</span>,
{"\n"}  focus: [<span className="code-green">&quot;React&quot;</span>, <span className="code-green">&quot;Next.js&quot;</span>],
{"\n"}  passionate: <span className="code-orange">true</span>
{"\n"}{"}"};</code></pre>
          </div>
          <div className="stats-card"><strong>5+</strong><span>Years of experience</span></div>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-heading"><p className="section-kicker">01 / About</p><h2>Engineering with purpose.</h2></div>
        <div className="about-grid">
          <p className="about-lead">I turn complex requirements into fast, reliable digital experiences.</p>
          <div className="about-copy">
            <p>Software Engineer with 5+ years of experience building scalable, real-time, and data-intensive web applications.</p>
            <p>I specialize in React.js, Next.js, and TypeScript, with backend experience across Python, FastAPI, Node.js, and SQL databases. I own features end-to-end and work closely with product and engineering teams in Agile environments.</p>
          </div>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="section-shell">
          <div className="section-heading"><p className="section-kicker">02 / Experience</p><h2>Where I&apos;ve made an impact.</h2></div>
          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-meta"><span>2024 — 2026</span><span>Jaipur, IN</span></div>
              <div><h3>Hitori Tech Ltd</h3><p className="role">Software Engineer</p><p>Built production applications, reusable architectures, REST and GraphQL integrations, real-time WebSockets, secure authentication, performance optimization, automated AI workflows, and comprehensive testing.</p></div>
            </article>
            <article className="timeline-item">
              <div className="timeline-meta"><span>2022 — 2024</span><span>Chandigarh, IN</span></div>
              <div><h3>ROWTH Tech</h3><p className="role">Software Engineer</p><p>Delivered enterprise dashboards and inventory, supplier, dispatch, tender, and stock management platforms with reusable UI, responsive interfaces, role-based access, analytics, reporting, and API caching.</p></div>
            </article>
            <article className="timeline-item">
              <div className="timeline-meta"><span>2021 — 2022</span><span>Pune, IN</span></div>
              <div><h3>Avika Solutions</h3><p className="role">Front-End Engineer</p><p>Refactored 20+ reusable components and delivered dynamic forms, dashboards, tables, and reporting interfaces using React, Redux, TypeScript, and React Hook Form.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="projects section-shell" id="projects">
        <div className="section-heading project-heading"><div><p className="section-kicker">03 / Selected work</p><h2>Featured projects.</h2></div></div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-top"><span>{project.number}</span><span className="project-arrow">↗</span></div>
              <p className="project-category">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p>
              <div className="tag-list">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills section-shell" id="skills">
        <div className="section-heading"><p className="section-kicker">04 / Technical skills</p><h2>My toolkit.</h2></div>
        <div className="skills-grid">
          {skills.map(([title, ...items]) => (
            <article className="skill-card" key={title}>
              <h3>{title}</h3><div className="tag-list">{items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="education section-shell" id="education">
        <div className="section-heading"><p className="section-kicker">05 / Education & learning</p><h2>Continuous growth.</h2></div>
        <div className="education-grid">
          <article className="education-card"><p>MCA</p><h3>Master of Computer Applications</h3><span>Mangalayatan University · 2025 · 7.0 GPA</span></article>
          <article className="education-card"><p>Learning</p><h3>Courses & certifications</h3><div className="tag-list">{certifications.map((item) => <span key={item}>{item}</span>)}</div></article>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-card">
          <p className="section-kicker">06 / Contact</p><h2>Have a project in mind?<br /><em>Let&apos;s build it.</em></h2>
          <a className="button button-light" href="mailto:kunalthakur306@gmail.com">kunalthakur306@gmail.com <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  );
}

export default HomeMainScreen;
