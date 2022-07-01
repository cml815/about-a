import { Link, NavLink, Outlet, useSearchParams } from 'react-router-dom';
import {getProjects} from '../data';
import '../utils.css';
import '../App.css';
import '../global.css';

export function Projects () {
  let projects = getProjects();
  let [searchParams, setSearchParams] = useSearchParams();
   return (
    <div className="projects-wrapper">
      <section className="bg-dark hero flex-c">
      <h2 className="caption-top">technical &amp; medical</h2>
      <div class="glitch flex-c"> 
        <div className="line">Writer</div>
        <div className="line">Writer</div>
        <div className="line">Writer</div>
        <div className="line">Writer</div>
        <div className="line">Writer</div>
        <div className="line">Writer</div>
        <div className="line">Writer</div>
        <div className="line">Writer</div>
        <div className="line">Writer</div>
      </div>
      <h2 className="center">Caroline Leopold</h2> 
      </section>
        <nav className="header">
          <h1>Portfolio</h1>
          <input
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
          {projects
            .filter((project) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = project.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((project) => (
              <NavLink
                style={({ isActive }) => ({
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                })}
                to={`/categories/${project.category}`}
                key={project.id}
              >
                {project.category}
              </NavLink>
            ))}
        </nav>
        <div className="autoGrid">
          {projects.map((projects, index) => {
            return (
              <>    
              <ul className="cardContainer" role="list">
                <li>
                <figure className="card" key={index}>
                  <div className="label">
                    <p>{projects.product}</p>
                  </div>
                  {/* <img className="cardImage" src={projects.image} alt="project image" />  */}
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
                </figure>
                </li>
              </ul>
              </>
            );
          })}
          <Outlet />
        </div>
    </div>
);
          }

