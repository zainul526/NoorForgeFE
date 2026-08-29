import CourseCard from "../components/CourseCard";
import { courses } from "../data/mockData";

export default function Learn() {
  return (
    <section className="section page-top">
      <p className="page-kicker">
        NOORFORGE / LEARN
      </p>

      <p className="eyebrow">
        Learning tracks
      </p>

      <h1>
        Learn, then use it.
      </h1>

      <p className="lead">
        Start with the fundamentals and turn each skill
        into something practical.
      </p>

      <div className="card-grid page-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}
      </div>
    </section>
  );
}