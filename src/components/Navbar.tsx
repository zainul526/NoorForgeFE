import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  useLocation();
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <header className="navbar">
      <NavLink to="/" className="brand">NoorForge</NavLink>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/learn">Learn</NavLink>
        <NavLink to="/team">Team</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="nav-actions">
        {isLoggedIn ? (
          <>
            <NavLink className="button button-small" to="/dashboard">Dashboard</NavLink>
            <button className="button button-small button-ghost" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink className="button button-small button-ghost" to="/login">Login</NavLink>
            <NavLink className="button button-small" to="/signup">Join</NavLink>
          </>
        )}
      </div>
    </header>
  );
}