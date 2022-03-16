import { Link, Outlet } from 'react-router-dom';
import {getProjects} from "../data";
import "../utils.css";
import "../App.css";

export function Projects () {
  let projects = getProjects();
   return (
    <div className="autoGrid">
      {projects.map((projects, index) => {
        return (
          <div className="cardContainer">
            <div className="card" key={index}>
              <p className="label"><span>{projects.product}</span></p>
              <img className="cardImage" src={projects.image} alt="project image" /> 
              {/* <ul className="flex-c tag">
                <li className="tags">Tags: {projects.tags}</li>
              </ul> */}
              <div>
                {projects.tests.map((test, i) => (
                  <p key={i}>
                    {test.name} typed {test.type}
                  </p>
                ))}
              </div>
              <Link className="cardLinks"
               to={`/projects/${projects.company}`}
               key={projects.company}
               >
                 <h4>{projects.company}</h4>
              </Link>
            </div>
          </div>
        );
      })}
      <Outlet />
      </div>
  );
            }

