import {getProjects} from "../data";
import "../utils.css";
import "../App.css";

export function Projects () {
  let projects = getProjects();
   return (
    <div className="autoGrid">
      {projects.map((projects, index) => (
        <div className="card" key={index}>
          <h2>Company: {projects.company}</h2>
          <ul className="flex-c tag">
            <li className="tags">Tags: {projects.tags}</li>
          </ul>
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
