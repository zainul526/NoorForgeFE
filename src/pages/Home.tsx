import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import MemberCard from "../components/MemberCard";
import ProjectCard from "../components/ProjectCard";
import { courses, members, projects } from "../data/mockData";

const workflow = [
  { number: "01", label: "Learn", copy: "Pick a skill and understand the basics." },
  { number: "02", label: "Build", copy: "Use it in a small, working project." },
  { number: "03", label: "Collaborate", copy: "Review, discuss and build as a team." },
  { number: "04", label: "Ship", copy: "Finish the work instead of leaving a demo." },
  { number: "05", label: "Showcase", copy: "Document what you made and what you learned." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Coding & project team</p>
          <h1>
            Learn by building.
            <br />
            <span>Build with people.</span>
          </h1>

          <p className="hero-lead">
            NoorForge is a student developer team for learning practical skills,
            working on real projects and growing together through consistent work.
          </p>

          <div className="hero-actions">
            <Link className="button button-large" to="/signup">
              Join NoorForge
            </Link>
            <Link className="button button-ghost button-large" to="/projects">
              View projects
            </Link>
          </div>

          <div className="hero-note">
            <span className="note-line" />
            <p>
              No course-completion race. The focus is simple: understand, build,
              review, improve and finish.
            </p>
          </div>
        </div>

        <aside className="project-board" aria-label="Current NoorForge work">
          <div className="board-header">
            <div>
              <span className="board-overline">CURRENT WORK</span>
              <h2>What we are working on</h2>
            </div>
            <span className="board-date">NoorForge</span>
          </div>

          <div className="board-list">
            <div className="board-item">
              <span className="board-index">01</span>
              <div>
                <strong>NoorForge Platform</strong>
                <span>React · TypeScript · Node.js</span>
              </div>
              <span className="board-status">Building</span>
            </div>

            <div className="board-item">
              <span className="board-index">02</span>
              <div>
                <strong>Space SOS</strong>
                <span>JavaScript · Canvas</span>
              </div>
              <span className="board-status board-status-muted">Released</span>
            </div>

            <div className="board-item">
              <span className="board-index">03</span>
              <div>
                <strong>Weekly Forge</strong>
                <span>Small team challenges</span>
              </div>
              <span className="board-status board-status-muted">Planning</span>
            </div>
          </div>

          <div className="board-footer">
            <span>Learn</span>
            <span>Build</span>
            <span>Collaborate</span>
            <span>Ship</span>
          </div>
        </aside>
      </section>

      <section className="section section-rule">
        <div className="section-heading section-heading-wide">
          <div>
            <p className="eyebrow">How we work</p>
            <h2>A simple process that ends in real work.</h2>
          </div>
          <p className="section-intro">
            The idea is close to the original NoorForge: learn together, work in
            small teams and turn practice into projects people can actually see.
          </p>
        </div>

        <div className="workflow-grid">
          {workflow.map((step) => (
            <article className="workflow-card" key={step.number}>
              <span className="workflow-number">{step.number}</span>
              <div>
                <h3>{step.label}</h3>
                <p>{step.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="about-grid">
          <article className="about-main">
            <p className="eyebrow">About NoorForge</p>
            <h2>A small team with a practical reason to exist.</h2>
            <p>
              NoorForge brings learning, teamwork and project-building into one
              place. Beginners get a reason to practise; contributors get real
              work to point to; and the team improves by sharing what it learns.
            </p>
            <Link to="/team" className="text-link">
              Meet the team →
            </Link>
          </article>

          <div className="about-side">
            <article className="value-block">
              <span className="value-number">01</span>
              <div>
                <h3>Practical learning</h3>
                <p>Learn enough to use the skill, then use it.</p>
              </div>
            </article>
            <article className="value-block">
              <span className="value-number">02</span>
              <div>
                <h3>Shared ownership</h3>
                <p>Projects belong to the team, not only one person.</p>
              </div>
            </article>
            <article className="value-block">
              <span className="value-number">03</span>
              <div>
                <h3>Visible progress</h3>
                <p>Finished work becomes part of a public portfolio.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Projects</p>
            <h2>Work from the team.</h2>
          </div>
          <Link className="text-link" to="/projects">
            All projects →
          </Link>
        </div>

        <div className="card-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Learning</p>
            <h2>Start with solid basics.</h2>
          </div>
          <Link className="text-link" to="/learn">
            Learning tracks →
          </Link>
        </div>

        <div className="card-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="section section-rule">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Team</p>
            <h2>People behind NoorForge.</h2>
          </div>
          <Link className="text-link" to="/team">
            Full team →
          </Link>
        </div>

        <div className="card-grid">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      <section className="section final-cta">
        <div>
          <p className="eyebrow">NoorForge</p>
          <h2>Learn something. Make something.</h2>
          <p>That is enough to start.</p>
        </div>
        <Link className="button button-large" to="/signup">
          Join the team
        </Link>
      </section>
    </>
  );
}
