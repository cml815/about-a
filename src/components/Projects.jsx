import { Link, NavLink, Outlet, useSearchParams } from 'react-router-dom';
import {getProjects} from '../data';
import '../utils.css';
import '../App.css';
import '../global.css';

export function Projects () {
  let projects = getProjects();
  // let [searchParams, setSearchParams] = useSearchParams();
   return (
    <div className="projects-wrapper bg-dark">
      <section className="hero flex-c">
      <div className="text-box">
        <h1 className="">Caroline Leopold is a freelance <br />medical, marketing &amp; technology writer.</h1>
      </div>
      </section>
      <section className="projects-wrapper">
      <div className="center">
      </div>
        <header className="">
        </header>
        <div className="autoGrid">
          {projects.map((projects, index) => {
            return (
              <>    
              <div className="cardContainer" role="list">
              <Link className="cardLinks"
                  to={`/projects/${projects.company}`}
                  key={projects.company}
                  >
                <li>
                <div className="image-container" key={index}>
                    {/* <div className="container">
                      <p className="label">{projects.product}</p>
                    </div> */}
                  <img className="cardImage" src={projects.image} alt="project image" />
                  <p className="label">{projects.product}</p>
                  <figcaption>
                    <h4 className="cardHeadline">{projects.company}</h4>
                  </figcaption>
               </div>
                </li>
                </Link>
              </div>
              </>
            );
          })}
          <Outlet />
        </div>
        </section>
    </div>
);

}

