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
      <p className="caption-top xl">technical &amp; medical</p>
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
      <p className="center gradient xl">caroline leopold</p> 
      </section>
        <header className="">
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
              let category = project.category.toLowerCase();
              return category.startsWith(filter.toLowerCase());
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

