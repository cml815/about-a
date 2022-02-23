import projects from "../data";
import "../utils.css"

const projectCard = projects.map(project =>
  <li key={project.id}>
    <div className="flex-c">
      <div key={project.company}>{project.company}</div>
      <div key={project.category}>{project.category}</div>
    </div>
  </li>
);

export function Project () {
  return (
    <div>
          <ul className="card">
            <div className="auto-grid">
              {projectCard}
            </div>
          </ul>
    </div>
  );
  

}





