import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/mockData";

export default function Projects() {
  return (
    <section className="section page-top">
      <p className="eyebrow">What we ship</p>
      <h1>Projects</h1>
      <p className="lead">Real projects built while learning and collaborating.</p>

      <div className="card-grid page-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}