import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import ProjectCard from "../components/ProjectCard";
import { courses, projects } from "../data/mockData";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="eyebrow">Developer learning + project community</div>
        <h1>
          Learn together. Build for real. <span>Ship publicly.</span>
        </h1>
        <p>
          NoorForge helps members learn development by building projects,
          collaborating with a team, and showcasing real work.
        </p>
        <div className="hero-actions">
          <Link className="button" to="/learn">Start Learning</Link>
          <Link className="button button-ghost" to="/projects">Explore Projects</Link>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">How NoorForge works</p>
        <h2>Learn → Build → Collaborate → Ship → Showcase</h2>
        <div className="steps-grid">
          {["Learn a skill", "Build a mini project", "Work with a team", "Ship the project", "Show your work"].map((step, index) => (
            <div className="step" key={step}>
              <strong>0{index + 1}</strong>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Featured work</p>
            <h2>Projects</h2>
          </div>
          <Link to="/projects">View all →</Link>
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
            <p className="eyebrow">Learning tracks</p>
            <h2>Start from the basics</h2>
          </div>
          <Link to="/learn">View learning →</Link>
        </div>
        <div className="card-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </>
  );
}