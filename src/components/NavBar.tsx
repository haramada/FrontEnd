import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-6">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/orders">
          Colombo Restaurant
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/reports">
                Reports
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
