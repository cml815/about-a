import { Link, NavLink, Outlet } from "react-router-dom";
import { getProjects } from "../data";

export default function Sidebar() {
  let projects = getProjects();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
          <a href="/gi">All Projects</a>
        {projects.map((project) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/projects/${project.company}`}
            key={project.company}
          >
            {project.company}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
