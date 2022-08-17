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
      <section className="hero flex-c">
      <div className="">
        <p className="center xxl">caroline leopold</p>
      </div> 
      <div className="bg-dark">
        <p className="xl">technical &amp; medical</p>
        <h2 className="xl">Writer</h2>
      </div>
      <div className="center">
      <h1><span>Portfolio</span></h1>
      </div>
      </section>
        <header className="">
          {/* <div className="flex-c">
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
          </div>
          {projects
            .filter((project) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let category = project.category.toLowerCase();
              return category.startsWith(filter.toLowerCase());
            })
            .map((project) => (
              <div className="inline-flex">
              <NavLink className="label"
                style={({ isActive }) => ({
                  display: "inline-flex",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                })}
                to={`/categories/${project.category}`}
                key={project.id}
              >
                {project.category}
              </NavLink>
              </div>
            ))} */}
        </header>
        <div className="autoGrid">
          {projects.map((projects, index) => {
            return (
              <>    
              <ul className="cardContainer" role="list">
                <li>
                <div className="" key={index}>
                    <div className="container">
                      <p className="label">{projects.product}</p>
                    </div>
      

                  <img className="cardImage" src={projects.image} alt="project image" />
                  {/* <ul className="flex-c tag">
                    <li className="tags">Tags: {projects.tags}</li>
                  </ul> */}
                  <div className="flex">
                    {projects.tags.map((tags, i) => (
                      <p key={i}>
                        <span className="tag">{tags.tag}</span>
                      </p>
                    ))}
                  </div>
                  <Link className="cardLinks"
                  to={`/projects/${projects.company}`}
                  key={projects.company}
                  >
                    <h4>{projects.company}<span className="arrow">&rarr;</span></h4>
                  </Link>
                </div>
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

