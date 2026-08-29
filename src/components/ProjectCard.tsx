import type { Project } from "../types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <span className="badge">{project.status}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tag-row">
        {project.tech.map((item) => (
          <span className="tag" key={item}>{item}</span>
        ))}
      </div>
    </article>
  );
}