import {
  useEffect,
  useState,
} from "react";

import { apiRequest } from "../services/api";
import { courses } from "../data/mockData";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

type MeResponse = {
  user: User;
};

export default function Dashboard() {
  const [user, setUser] =
    useState<User | null>(() => {
      const stored =
        localStorage.getItem("user");

      if (!stored) {
        return null;
      }

      try {
        return JSON.parse(stored) as User;
      } catch {
        return null;
      }
    });

  const [message, setMessage] =
    useState("");

  useEffect(() => {
    apiRequest<MeResponse>(
      "/auth/me",
      {
        auth: true,
      }
    )
      .then((data) => {
        setUser(data.user);

        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );
      })
      .catch((error) => {
        setMessage(
          error instanceof Error
            ? error.message
            : "Could not load profile."
        );
      });
  }, []);

  return (
    <section className="section page-top">
      <p className="page-kicker">
        NOORFORGE / DASHBOARD
      </p>

      <p className="eyebrow">
        Member dashboard
      </p>

      <h1>
        Welcome, {user?.name || "Member"}.
      </h1>

      <p className="lead">
        This is the starting point for your
        learning, projects and activity.
      </p>

      {message && (
        <p className="form-message error">
          {message}
        </p>
      )}

      <div className="stats-grid">
        <div className="stat-card">
          <strong>1</strong>
          <span>Active project</span>
        </div>

        <div className="stat-card">
          <strong>
            {courses.length}
          </strong>

          <span>
            Learning modules
          </span>
        </div>

        <div className="stat-card">
          <strong>
            {user?.role || "member"}
          </strong>

          <span>
            Account role
          </span>
        </div>
      </div>

      <div className="dashboard-panel">
        <h2>
          Learning progress
        </h2>

        {courses.map((course) => (
          <div
            className="progress-item"
            key={course.id}
          >
            <div>
              <span>
                {course.title}
              </span>

              <span>
                {course.progress ?? 0}%
              </span>
            </div>

            <div className="progress">
              <div
                style={{
                  width:
                    `${course.progress ?? 0}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}