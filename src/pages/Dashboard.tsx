import { courses } from "../data/mockData";

export default function Dashboard() {
  const rawUser = localStorage.getItem("user");
  const user = rawUser ? JSON.parse(rawUser) : { name: "Member" };

  return (
    <section className="section page-top">
      <p className="eyebrow">Member dashboard</p>
      <h1>Welcome, {user.name} 👋</h1>
      <p className="lead">
        Your learning, projects and activity will live here.
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <strong>1</strong>
          <span>Active Project</span>
        </div>
        <div className="stat-card">
          <strong>3</strong>
          <span>Learning Modules</span>
        </div>
        <div className="stat-card">
          <strong>0</strong>
          <span>Badges</span>
        </div>
      </div>

      <div className="dashboard-panel">
        <h2>Learning Progress</h2>

        {courses.map((course) => (
          <div className="progress-item" key={course.id}>
            <div>
              <span>{course.title}</span>
              <span>{course.progress}%</span>
            </div>

            <div className="progress">
              <div style={{ width: `${course.progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}