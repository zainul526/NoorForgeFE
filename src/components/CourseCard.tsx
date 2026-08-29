import type { Course } from "../types";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="card">
      <span className="badge">{course.level}</span>
      <h3>{course.title}</h3>
      <p>Learn the concept, practise it, then use it in a small project.</p>

      {typeof course.progress === "number" && (
        <>
          <div className="progress">
            <div style={{ width: `${course.progress}%` }} />
          </div>
          <small>{course.progress}% complete</small>
        </>
      )}
    </article>
  );
}