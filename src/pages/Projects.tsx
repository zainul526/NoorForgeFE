import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/mockData";

export default function Projects() {
  return (
    <section className="section page-top">
      <p className="page-kicker">NOORFORGE / PROJECTS</p>

      <p className="eyebrow">
        What we build
      </p>

      <h1>Projects</h1>

      <p className="lead">
        Real work built while learning, experimenting and collaborating
        as a team.
      </p>

      <div className="card-grid page-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}