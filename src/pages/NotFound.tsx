import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section page-top auth-card center-text">
      <h1>404</h1>
      <p>This page does not exist.</p>
      <Link className="button" to="/">Go Home</Link>
    </section>
  );
}