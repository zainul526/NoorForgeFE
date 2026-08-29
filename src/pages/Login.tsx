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

export default function Login() {
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
          "/auth/login",
          {
            method: "POST",

            body: JSON.stringify({
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
          : "Login failed."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="section page-top auth-card">
      <p className="page-kicker">
        NOORFORGE / LOGIN
      </p>

      <p className="eyebrow">
        Member access
      </p>

      <h1>Login</h1>

      <form
        className="form"
        onSubmit={handleSubmit}
      >
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
            autoComplete="current-password"
            required
          />
        </label>

        <button
          className="button"
          type="submit"
          disabled={submitting}
        >
          {submitting
            ? "Logging in..."
            : "Login"}
        </button>
      </form>

      {message && (
        <p className="form-message error">
          {message}
        </p>
      )}

      <p className="muted">
        New to NoorForge?{" "}
        <Link to="/signup">
          Create an account
        </Link>
      </p>
    </section>
  );
}