import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Download, ExternalLink, Code2, Database, Cpu, Workflow } from "lucide-react";
import "./styles.css";

const projects = [
  {
    id: "01",
    name: "CENTRALHRMS",
    type: "ENTERPRISE HRMS / PAYROLL",
    stack: "PYTHON · FRAPPE · ERPNEXT · MARIADB · REST",
    impact: "90% LESS MANUAL VERIFICATION",
    text: "An enterprise HR and payroll platform supporting 10,000+ employees across 30+ Saudi companies. Built compliance validation, payroll automation, GOSI checks, overtime processing and production-safe migrations.",
    metric: "10K+",
    label: "EMPLOYEES",
  },
  {
    id: "02",
    name: "SPIDER",
    type: "AI CODING AGENT / VS CODE",
    stack: "TYPESCRIPT · VSCODE API · CURSOR SDK · OPENROUTER",
    impact: "AUTONOMOUS SOFTWARE ENGINEERING",
    text: "An AI coding agent built for VS Code. Spider connects model reasoning with workspace context, streaming events, sessions, permissions and tool execution — designed as an extensible agent runtime rather than a chat box.",
    metric: "01",
    label: "AGENT",
    live: "https://github.com/Ahmadpasha1221/spider",
  },
  {
    id: "03",
    name: "ALPHAX",
    type: "MULTI-TENANT SAAS",
    stack: "PYTHON · FRAPPE · JAVASCRIPT · MARIADB",
    impact: "4–6 WEEKS → 2–3 DAYS",
    text: "Automated site provisioning for HR infrastructure, turning repetitive company configuration into a repeatable deployment workflow for 15+ companies and 25,000+ employees.",
    metric: "86%",
    label: "FASTER IMPLEMENTATION",
  },
  {
    id: "04",
    name: "FMS",
    type: "AI-POWERED TICKETING",
    stack: "PYTHON · DJANGO · DRF · MYSQL · JAVASCRIPT",
    impact: "40% FASTER RESOLUTION",
    text: "A ticketing platform for Singapore Changi Airport that unifies support calls, transcription, timestamps, customer data and issue context in one operational dashboard.",
    metric: "200+",
    label: "MONTHLY TICKETS",
  },
  {
    id: "05",
    name: "COACH MANAGER",
    type: "FLEET MANAGEMENT MIDDLEWARE",
    stack: "PYTHON · XML · REST · SOAP · JSON",
    impact: "97% FASTER LOOKUPS",
    text: "Middleware connecting vehicle, driver and scheduling systems. XML-to-JSON transformation and unified APIs removed the need for managers to check three separate systems.",
    metric: "500+",
    label: "BUSES",
  },
];

const skills = ["PYTHON", "DJANGO", "DRF", "FRAPPE", "ERPNEXT", "MARIADB", "MYSQL", "JAVASCRIPT", "REST APIs", "SOAP", "XML", "JSON", "GIT", "LINUX", "POSTMAN"];

function Marquee({ children, reverse=false, className="" }) {
  return (
    <div className={`marquee ${reverse ? "marquee--reverse" : ""} ${className}`} aria-hidden="true">
      <div className="marquee__track">
        {[0,1,2,3].map((i) => <span key={i}>{children}</span>)}
      </div>
    </div>
  );
}

function SpiderCore() {
  const [active, setActive] = useState(false);
  return (
    <div className={`spider-stage ${active ? "is-active" : ""}`} onClick={() => setActive(v => !v)} role="button" tabIndex="0" aria-label="Interactive Spider agent visualization">
      <div className="spider-hud hud-top">AGENT.RUNTIME <span>● ONLINE</span></div>
      <div className="spider-hud hud-bottom">CLICK / TAP TO ACTIVATE</div>
      <div className="spider-grid" />
      <div className="spider-core">
        <div className="core-ring ring-a" />
        <div className="core-ring ring-b" />
        <div className="core-ring ring-c" />
        <div className="core-eye">S</div>
        {[...Array(8)].map((_, i) => <i className={`spider-leg leg-${i+1}`} key={i} />)}
        <div className="core-label">SPIDER</div>
      </div>
      <div className="orbit orbit-a"><span>CONTEXT</span></div>
      <div className="orbit orbit-b"><span>TOOLS</span></div>
      <div className="orbit orbit-c"><span>MODEL</span></div>
      <div className="agent-nodes">
        <span className="node node-1">FILES</span>
        <span className="node node-2">TERMINAL</span>
        <span className="node node-3">GIT</span>
        <span className="node node-4">PATCH</span>
      </div>
    </div>
  );
}

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span><b>{children}</b></div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 0.55], [1, 1.18]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener("click", () => setMenuOpen(false));
    });
  }, []);

  return (
    <div className="site">
      <div className="noise" />
      <a className="skip-link" href="#main">SKIP TO CONTENT</a>

      <header className="nav">
        <a href="#" className="brand">APS<span>®</span></a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"}>
          <a href="#work">WORK</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#stack">STACK</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation">
          {menuOpen ? <X size={25}/> : <Menu size={25}/>}
        </button>
      </header>

      <main id="main">
        <section className="hero" ref={heroRef}>
          <motion.div className="hero-copy" style={{ scale: heroScale, opacity: heroOpacity }}>
            <div className="eyebrow"><span className="pulse" /> PYTHON SOFTWARE DEVELOPER · ELURU / INDIA</div>
            <h1>
              AHMAD
              <span className="hero-accent">PASHA</span>
            </h1>
            <div className="hero-bottom">
              <p>BUILDING ENTERPRISE SYSTEMS, AI-POWERED PRODUCTS AND SOFTWARE THAT TURNS COMPLEX OPERATIONS INTO SIMPLE WORKFLOWS.</p>
              <a className="big-link" href="#work">ENTER THE WORK <ArrowDownRight size={28}/></a>
            </div>
          </motion.div>
          <div className="hero-number" aria-hidden="true">01</div>
        </section>

        <Marquee className="accent-marquee">
          PYTHON / AI AGENTS / ERP SYSTEMS / SAAS / API ARCHITECTURE / AUTOMATION / PYTHON / AI AGENTS /
        </Marquee>

        <section className="intro section">
          <SectionLabel number="01">THE ENGINEER</SectionLabel>
          <div className="intro-grid">
            <h2>I BUILD SOFTWARE WHERE <em>BUSINESS LOGIC</em> MEETS ENGINEERING.</h2>
            <div className="intro-text">
              <p>Python software developer with 1.9+ years of hands-on experience across enterprise applications, AI-powered systems, SaaS platforms and middleware.</p>
              <p>My work sits close to the operational layer: payroll, compliance, integrations, production migrations, workflows and developer tooling.</p>
              <div className="signature-line">PYTHON-FIRST. SYSTEM-MINDED. PRODUCT-FOCUSED.</div>
            </div>
          </div>
        </section>

        <section className="numbers-section">
          <div className="number-cell"><strong>90%</strong><span>MANUAL VERIFICATION REDUCTION</span></div>
          <div className="number-cell"><strong>85%</strong><span>PAYROLL ERROR REDUCTION</span></div>
          <div className="number-cell"><strong>86%</strong><span>IMPLEMENTATION TIME REDUCTION</span></div>
          <div className="number-cell"><strong>97%</strong><span>MANAGER LOOKUP TIME REDUCTION</span></div>
        </section>

        <section id="work" className="work section">
          <SectionLabel number="02">SELECTED WORK</SectionLabel>
          <div className="work-intro">
            <h2>REAL SYSTEMS.<br/><span>REAL CONSTRAINTS.</span></h2>
            <p>Not just interfaces. Production software where reliability, data integrity and business rules matter.</p>
          </div>
          <div className="projects">
            {projects.map((project, index) => (
              <article className={`project-card ${project.name === "SPIDER" ? "project-card--spider" : ""}`} key={project.id}>
                <div className="project-top">
                  <span className="project-id">{project.id}</span>
                  <span>{project.type}</span>
                </div>
                <div className="project-body">
                  <div>
                    <h3>{project.name}</h3>
                    <p className="project-impact">{project.impact}</p>
                  </div>
                  {project.name === "SPIDER" ? <div className="mini-spider"><SpiderCore /></div> : <div className="project-metric"><strong>{project.metric}</strong><span>{project.label}</span></div>}
                </div>
                <div className="project-bottom">
                  <p>{project.text}</p>
                  <div className="project-actions">
                    <span className="stack">{project.stack}</span>
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={18}/></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="spider-feature section">
          <SectionLabel number="03">SPIDER / THE BUILD</SectionLabel>
          <div className="spider-feature-grid">
            <div>
              <p className="feature-kicker">VS CODE · AI AGENT · OPEN SOURCE</p>
              <h2>NOT A CHAT BOX.<br/><span>AN AGENT RUNTIME.</span></h2>
              <p className="feature-copy">Spider is designed around the engineering loop: understand the workspace, reason over context, execute tools, stream progress, ask for permission when needed, persist sessions and recover safely.</p>
              <div className="feature-points">
                <div><Code2/><span>WORKSPACE CONTEXT + CODE INTELLIGENCE</span></div>
                <div><Workflow/><span>STREAMING EVENTS + SESSION LIFECYCLE</span></div>
                <div><Cpu/><span>MODEL / TOOL / RUNTIME ARCHITECTURE</span></div>
                <div><Database/><span>PERMISSION + SAFETY CONTROLS</span></div>
              </div>
              <a className="button-primary" href="https://github.com/Ahmadpasha1221/spider" target="_blank" rel="noreferrer">VIEW SPIDER ON GITHUB <ArrowUpRight/></a>
            </div>
            <SpiderCore />
          </div>
        </section>

        <Marquee reverse>ENGINEERING / AUTOMATION / INTEGRATION / SYSTEMS / AI / ENGINEERING / AUTOMATION / INTEGRATION / SYSTEMS / AI /</Marquee>

        <section id="experience" className="experience section">
          <SectionLabel number="04">EXPERIENCE</SectionLabel>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">DEC 2024 — PRESENT</div>
              <div><h3>JUNIOR SOFTWARE DEVELOPER</h3><p>NEOTEC INTEGRATED SOLUTIONS · HYDERABAD / SAUDI ARABIA</p><p className="timeline-copy">Architecting and enhancing CentralHRMS, enterprise payroll and HR operations for 10,000+ employees across 30+ Saudi companies.</p></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">MAY 2024 — SEP 2024</div>
              <div><h3>JUNIOR SOFTWARE DEVELOPER — INTERN</h3><p>SPRITLE SOFTWARE · CHENNAI</p><p className="timeline-copy">Built an AI-powered airport ticketing system and Python middleware integrations for enterprise operations.</p></div>
            </div>
          </div>
        </section>

        <section id="stack" className="stack-section">
          <SectionLabel number="05">TECHNICAL STACK</SectionLabel>
          <div className="skill-wall">
            {skills.map((skill, i) => <span key={skill} style={{"--i": i}}>{skill}</span>)}
          </div>
        </section>

        <section className="education section">
          <SectionLabel number="06">EDUCATION</SectionLabel>
          <div className="education-grid">
            <strong>B.SC. MECS</strong>
            <div><p>SIR C R REDDY COLLEGE · ELURU</p><p>FEBRUARY 2021 — AUGUST 2023 · GPA 7.28</p></div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-number">07</div>
          <p>HAVE A HARD PROBLEM?</p>
          <h2>LET'S BUILD<br/><span>THE SYSTEM.</span></h2>
          <div className="contact-actions">
            <a className="button-primary" href="mailto:ahmadpashashaiks@gmail.com">START A CONVERSATION <Mail/></a>
            <a className="button-outline" href="/resume.pdf" download>DOWNLOAD RESUME <Download/></a>
          </div>
          <div className="socials">
            <a href="https://github.com/Ahmadpasha1221" target="_blank" rel="noreferrer"><Github/> GITHUB</a>
            <a href="https://www.linkedin.com/in/ahmadpasha" target="_blank" rel="noreferrer"><Linkedin/> LINKEDIN</a>
            <a href="mailto:ahmadpashashaiks@gmail.com"><Mail/> EMAIL</a>
          </div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} AHMAD PASHA SHAIK</span><span>BUILT WITH REACT · VITE · MOTION</span><span>INDIA / +91 97016 88339</span></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
