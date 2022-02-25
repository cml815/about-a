import {getProjects} from "../data";
import "../utils.css"

export function Projects () {
  let projects = getProjects();
   return (
    <div>
      {projects.map((projects, index) => (
        <div key={index}>
          <h2>Company: {projects.company}</h2>
          <div>
            {projects.tests.map((test, i) => (
              <p key={i}>
                {test.name} typed {test.type}
              </p>
            ))}
          </div>
        </div>
      ))}
      </div>
  );
            }
