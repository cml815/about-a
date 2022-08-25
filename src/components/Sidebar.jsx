import { Link, NavLink, Outlet } from "react-router-dom";
import { getProjects } from "../data";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  let projects = getProjects();
  return (
    <div className={styles.navContainer}> 
      <nav className={styles.sideBar}>
          <a href="/">All Projects</a>
        {projects.map((project) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/projects/${project.slug}`}
            key={project.slug}
          >
            {project.company}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
