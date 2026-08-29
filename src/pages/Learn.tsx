import CourseCard from "../components/CourseCard";
import { courses } from "../data/mockData";

export default function Learn() {
  return (
    <section className="section page-top">
      <p className="eyebrow">Structured learning</p>
      <h1>Learn</h1>
      <p className="lead">
        Learn the fundamentals first, then apply them in real NoorForge projects.
      </p>

      <div className="card-grid page-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}