"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";

const nav = [
  { label: "About", id: "about" },
  { label: "Journey", id: "journey" },
  { label: "Work", id: "work" },
  { label: "Reflection", id: "reflection" },
];

const journey = [
  {
    n: "01",
    title: "Why I joined",
    body: "I joined EIF Cohort 11 in the Data Innovation Track to build a stronger understanding of data and learn how to apply what I knew to practical problems.",
  },
  {
    n: "02",
    title: "Learning through projects",
    body: "Project-based challenges and structured learning activities gave me opportunities to work through data problems and put ideas into practice.",
  },
  {
    n: "03",
    title: "Working through the data",
    body: "I learned to approach a problem more systematically: understand the question, prepare and check the data, examine relationships, and interpret results in context.",
  },
  {
    n: "04",
    title: "Making findings clear",
    body: "The experience showed me that working with data is more than writing code or making charts. It also means validating information and explaining what the results do—and do not—tell us.",
  },
];

const technicalSkills = [
  "Python",
  "Pandas",
  "Data analysis",
  "Data modeling",
  "Data visualization",
  "Matplotlib",
  "Jupyter Notebook",
];

const practiceSkills = [
  "Analytical thinking",
  "Problem-solving",
  "Data interpretation",
  "Communicating insights",
  "Project-based learning",
];

const reflections = [
  {
    q: "What I learned",
    a: "Meaningful analysis starts with understanding the problem. Having data and knowing Python are not enough: I also need to ask useful questions, prepare the data, and interpret results in the right context.",
  },
  {
    q: "What I’m proud of",
    a: "I’m proud that I worked through a project with multiple related datasets and turned them into understandable findings. Seeing the metrics and visualizations come together was rewarding, especially when I could explain both what they showed and their limits.",
  },
  {
    q: "What challenged me",
    a: "Keeping the data, table relationships, and calculations consistent took care. Working across multiple tables reminded me to check how information connects and validate results before interpreting them.",
  },
  {
    q: "What I’d improve",
    a: "I would spend more time planning the analysis and documenting decisions along the way. I’d also keep practicing how to explain technical findings so people without a technical background can understand them.",
  },
];

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="section-label">
      <span>{n}</span>
      <span>{label}</span>
    </div>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="skill-group">
      <h3 className="skill-group-title">{title}</h3>
      <div className="skill-tags">
        {items.map((skill, i) => (
          <span key={skill}>
            <small>{String(i + 1).padStart(2, "0")}</small>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#top">
          JCL<span> / EIF 11</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={open ? "nav open" : "nav"}
        >
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>
            Say hello <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-meta">
          <span>ESKWELABS INNOVATION FELLOWSHIP</span>
          <span>COHORT 11 · DATA INNOVATION</span>
          <span>MANILA, PH · 2026</span>
        </div>
        <div className="hero-content">
          <p className="eyebrow">A field note on learning to ask better questions</p>
          <h1>
            Beyond
            <br />
            the <em>data.</em>
          </h1>
          <div className="hero-bottom">
            <p className="hero-intro">
              My journey through the Eskwelabs Innovation Fellowship—learning to
              turn questions, messy data, and ideas into work that means something.
            </p>
            <a className="round-link" href="#about" aria-label="Explore the portfolio">
              <ArrowDownRight />
            </a>
          </div>
        </div>
        <div className="hero-footer">
          <span>JESUS CARLOS G. LAZARO</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
        <div className="hero-stamp">
          EIF
          <br />
          <b>’26</b>
        </div>
      </section>

      <section className="intro section" id="about">
        <SectionLabel n="01" label="A little about me" />
        <div className="intro-grid">
          <h2>
            I’m JC.
            <br />
            <span>A student of</span>
            <br />
            systems &amp; stories.
          </h2>
          <div className="intro-copy">
            <p className="lead">
              I’m Jesus Carlos G. Lazaro, a Computer Science student specializing
              in Data Science at the University of Santo Tomas (2023–2027).
            </p>
            <p>
              I’m interested in how data can help us understand problems, find
              useful insights, and make better decisions. Through school and
              project work, I’ve become curious about analysis, data engineering,
              machine learning, and visualization. I enjoy exploring patterns
              and making raw information easier to understand and use.
            </p>
            <p>
              EIF gave me another opportunity to develop those interests through
              practical learning and project work.
            </p>
            <div className="interest-list">
              {[
                "Data science & analytics",
                "Data engineering",
                "Machine learning",
                "Visualization & applications",
              ].map((interest, i) => (
                <div key={interest}>
                  <span>0{i + 1}</span>
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="journey section" id="journey">
        <SectionLabel n="02" label="The fellowship, in four parts" />
        <div className="journey-heading">
          <h2>
            More than just
            <br />
            <em>learning data.</em>
          </h2>
          <p>
            EIF Cohort 11 · Data Innovation Track. A practical step between what
            I’d learned and the problems I wanted to work through.
          </p>
        </div>
        <div className="timeline">
          {journey.map((step) => (
            <article className="timeline-item" key={step.n}>
              <span className="timeline-num">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              <span className="timeline-dot" />
            </article>
          ))}
        </div>
        <p className="journey-closing">
          Looking back, EIF was an opportunity to connect what I had learned in
          school with a more practical approach to solving data-related problems.
          It helped me become more intentional about how I work with data and how
          I communicate what I discover.
        </p>
      </section>

      <section className="work section" id="work">
        <SectionLabel n="03" label="Selected work · 01" />
        <div className="project-head">
          <div>
            <p className="eyebrow">EIF PROJECT / SD-026</p>
            <h2>
              Making sense of
              <br />
              <em>the product signal.</em>
            </h2>
          </div>
          <p className="project-deck">
            Exploring how product usage can help a fictional B2B SaaS company
            understand activity, engagement, feature adoption, subscriptions,
            and churn patterns.
          </p>
        </div>
        <div className="project-art">
          <div className="art-top">
            <span>PRODUCT ACTIVITY / SIMULATED</span>
            <span>01 — 05 DATA TABLES</span>
          </div>
          <div className="chart">
            <div className="chart-y">
              <span>HIGH</span>
              <span>MED</span>
              <span>LOW</span>
            </div>
            <div className="chart-lines">
              <i />
              <i />
              <i />
              <svg
                viewBox="0 0 800 240"
                preserveAspectRatio="none"
                role="img"
                aria-label="Illustrative rising activity line"
              >
                <path d="M0 202 C55 188 62 207 120 170 S198 176 246 138 S315 157 370 112 S430 135 483 92 S550 116 606 58 S680 81 730 34 S770 50 800 15" />
              </svg>
              <div className="chart-x">
                <span>PERIOD 01</span>
                <span>PERIOD 06</span>
                <span>PERIOD 12</span>
              </div>
            </div>
            <div className="chart-note">
              A simulated upward trend
              <br />
              in activity over time ↗
            </div>
          </div>
          <div className="art-bottom">
            <span>FIG 01. DIRECTIONAL ILLUSTRATION</span>
            <span>NOT A REAL-WORLD BENCHMARK</span>
          </div>
        </div>
        <div className="project-details">
          <div>
            <span className="detail-label">THE QUESTION</span>
            <p>
              How can product usage data help a fictional SaaS company understand
              how people use its platform?
            </p>
          </div>
          <div>
            <span className="detail-label">THE DATA</span>
            <p>
              Synthetic relational tables: 500 accounts, 6,518 users, 156,573
              product events, 3,500 feature flag records, and 500 subscriptions.
            </p>
          </div>
          <div>
            <span className="detail-label">MY CONTRIBUTION</span>
            <p>
              I worked with the connected datasets in Python and Pandas, examined
              activation and engagement by tier, explored feature adoption and
              retention patterns, and interpreted the results with the dataset’s
              limits in mind.
            </p>
          </div>
          <div>
            <span className="detail-label">THE PROCESS</span>
            <p>
              I explored relationships among accounts, users, events, feature
              flags, and subscriptions, then compared usage metrics across tiers
              and over the simulated period.
            </p>
          </div>
          <div>
            <span className="detail-label">TOOLS &amp; OUTPUTS</span>
            <p>
              Python · Pandas · Matplotlib · Jupyter Notebook. The analysis
              resulted in metrics and visualizations to communicate the patterns
              found in the generated data.
            </p>
          </div>
          <div>
            <span className="detail-label">SKILLS IN PRACTICE</span>
            <p>
              Relational data analysis, metric definition, visualization, and
              communicating findings with appropriate context.
            </p>
          </div>
        </div>
        <div className="findings">
          <div className="findings-title">
            <span>02 / SIGNALS IN THE SIMULATION</span>
            <p>What the generated data showed</p>
          </div>
          <div className="metrics">
            <div>
              <strong>74.24<small>%</small></strong>
              <span>Overall activation</span>
            </div>
            <div>
              <strong>84.65<small>%</small></strong>
              <span>Enterprise activation</span>
            </div>
            <div>
              <strong>56.10<small>%</small></strong>
              <span>Free tier activation</span>
            </div>
            <div>
              <strong>6.40<small>%</small></strong>
              <span>Paid account churn</span>
            </div>
          </div>
          <p className="finding-note">
            Highly engaged users were defined using a threshold of 45 product
            events. Monthly product activity and active users generally increased
            throughout the simulated period.
          </p>
        </div>
        <div className="caveat">
          <span>READ WITH CONTEXT</span>
          <p>
            This is a synthetic dataset. The findings reflect the assumptions
            used to generate it and demonstrate an analytical workflow; they are
            not real-world SaaS benchmarks. The results do not show that higher
            engagement caused lower churn.
          </p>
        </div>
        <a
          className="text-link"
          href="https://drive.google.com/drive/folders/1DHaiEPIigzg3yvhJ89eDYMY4U5Gh7Xl_"
          target="_blank"
          rel="noreferrer"
        >
          Explore the project folder <ArrowUpRight size={16} />
        </a>
      </section>

      <section className="skills section">
        <SectionLabel n="04" label="Skills I’m still developing" />
        <div className="skills-grid">
          <h2>
            Learning is
            <br />
            <em>cumulative.</em>
          </h2>
          <div>
            <p>
              One of my biggest takeaways from EIF was learning to look beyond
              the technical side of working with data. I became more conscious of
              how I define a problem, prepare and examine data, interpret results,
              and communicate findings.
            </p>
            <div className="skill-groups">
              <SkillGroup title="Technical practice" items={technicalSkills} />
              <SkillGroup title="Analysis & communication" items={practiceSkills} />
            </div>
          </div>
        </div>
      </section>

      <section className="reflection section" id="reflection">
        <SectionLabel n="05" label="Notes to self" />
        <div className="reflection-grid">
          <h2>
            Growth is
            <br />
            a <em>practice.</em>
          </h2>
          <div className="reflection-list">
            {reflections.map((item, i) => (
              <div key={item.q}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="forward section">
        <SectionLabel n="06" label="Onward" />
        <div className="forward-content">
          <h2>
            More questions
            <br />
            to <em>follow.</em>
          </h2>
          <div className="forward-copy">
            <p>
              Moving forward, I want to keep exploring opportunities in Data
              Science, Data Analytics, and Data Engineering. I want to strengthen
              my technical foundation, work with different kinds of datasets, and
              build more experience creating solutions for practical problems.
            </p>
            <p>
              I hope to carry what I learned through EIF into future projects,
              internships, and professional opportunities. I want to keep
              learning, take on more complex problems, and get better at turning
              data into insights people can use.
            </p>
            <p>
              For me, this is not the end of the learning process. It is another
              step toward the kind of work I want to pursue.
            </p>
          </div>
        </div>
        <span className="forward-aside">
          CURIOUS BY DESIGN
          <br />
          READY TO KEEP BUILDING ↗
        </span>
      </section>

      <footer className="contact" id="contact">
        <div className="contact-top">
          <SectionLabel n="07" label="Keep in touch" />
          <p>
            For mentors, collaborators,
            <br />
            and good questions.
          </p>
        </div>
        <a className="contact-email" href="mailto:jclazaro0321@gmail.com">
          Let’s talk<span><ArrowUpRight /></span>
        </a>
        <div className="contact-bottom">
          <span>
            JESUS CARLOS G. LAZARO
            <br />
            EIF COHORT 11 · DATA INNOVATION
          </span>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/jesus-carlos-lazaro-04b17332a"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} />
            </a>
            <a href="https://github.com/jeysiii02" target="_blank" rel="noreferrer">
              <Github size={15} /> GitHub <ArrowUpRight size={13} />
            </a>
            <a href="mailto:jclazaro0321@gmail.com">
              <Mail size={15} /> Email <ArrowUpRight size={13} />
            </a>
          </div>
          <span>BUILT WITH CURIOSITY · 2026</span>
        </div>
      </footer>
    </main>
  );
}
