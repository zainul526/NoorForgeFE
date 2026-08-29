import { FormEvent, useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import { apiRequest } from "../services/api";

type AuthResponse = {
  token: string;

  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
};

export default function Signup() {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] =
    useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSubmitting(true);
    setMessage("");

    const formData =
      new FormData(event.currentTarget);

    try {
      const data =
        await apiRequest<AuthResponse>(
          "/auth/register",
          {
            method: "POST",

            body: JSON.stringify({
              name:
                formData.get("name"),

              email:
                formData.get("email"),

              password:
                formData.get("password"),
            }),
          }
        );

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      navigate("/dashboard");
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Signup failed."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="section page-top auth-card">
      <p className="page-kicker">
        NOORFORGE / SIGNUP
      </p>

      <p className="eyebrow">
        Join the team
      </p>

      <h1>Create account</h1>

      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <label>
          Name

          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
          />
        </label>

        <label>
          Email

          <input
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </label>

        <label>
          Password

          <input
            name="password"
            type="password"
            autoComplete="new-password"
            required
            minLength={6}
          />
        </label>

        <button
          className="button"
          type="submit"
          disabled={submitting}
        >
          {submitting
            ? "Creating account..."
            : "Create account"}
        </button>
      </form>

      {message && (
        <p className="form-message error">
          {message}
        </p>
      )}

      <p className="muted">
        Already a member?{" "}
        <Link to="/login">
          Login
        </Link>
      </p>
    </section>
  );
}