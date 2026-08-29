import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "../services/api";

type SignupResponse = {
  token: string;
  user: { id: string; name: string; email: string; role: string };
};

export default function Signup() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    try {
      const data = await apiRequest<SignupResponse>("/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          password: form.get("password"),
        }),
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Signup failed.");
    }
  }

  return (
    <section className="section page-top auth-card">
      <p className="eyebrow">Join NoorForge</p>
      <h1>Create account</h1>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" required minLength={2} />
        </label>

        <label>
          Email
          <input type="email" name="email" required />
        </label>

        <label>
          Password
          <input type="password" name="password" required minLength={6} />
        </label>

        <button className="button" type="submit">Create Account</button>
      </form>

      {message && <p className="form-message error">{message}</p>}
      <p className="muted">
        Already a member? <Link to="/login">Login</Link>
      </p>
    </section>
  );
}