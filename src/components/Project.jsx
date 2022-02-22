import projects from "../data";
import "../utils.css"

const projectList = projects.map(project =>
  <li key={project.id}>
    <div className="flex-c">
      {project.company}
      {project.category}
    </div>
  </li>
);

export function Project () {
  return (
    <div>
          <ul className="">
            <div className="auto-grid card">
              {projectList}
            </div>
          </ul>
    </div>
  );
  

}





