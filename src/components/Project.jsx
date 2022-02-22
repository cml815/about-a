import projects from "../data";
import "../utils.css"

const projectList = projects.map(project =>
  <li key={project.id}>
    {project.company}
  </li>
);

export function Project () {
  return (
    <div>
          <ul className="flex">
            {projectList}
          </ul>
    </div>
  );
  

}





