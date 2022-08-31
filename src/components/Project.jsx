import { useParams } from 'react-router-dom';
import { NavLink, Outlet } from "react-router-dom";
import "../utils.css";
import styles from './Project.module.css'
import "../App.css";
import Sidebar from './Sidebar';
import { getProject } from '../data';

export function Project() {
  let params = useParams();
  // let project = getProject();
  let project = getProject(params.projectId);
  return (
    <>
    <div className={styles.wrapper}>
     
      <nav className={styles.sideNav}>
          <Sidebar />
  
        </nav>
      <main className={styles.projectContainer}>
      <div className={styles.header}>
        {/* product is major service */}
        <p className="upper">{project.product}</p>
        {/* project ID === company */}
        <h2 className="tightHeight">{project.company}</h2>   
      </div>
        
        <figure className={styles.container}>
          {/* <p>{project.category}</p> */}
          <div className={styles.imgContainer}>
            <img src={project.image} width="800" />
          </div>
          <div className={styles.summary}>
            <h2>Campaign summary</h2>
            <p className={styles.textCol}>{project.snippet}</p>
          </div>
          <div className={styles.skills}>
            <h2>Results</h2>
            <ul>
              <li></li>
            </ul>
          </div>
          <div className={styles.excerptContainer}>
           <blockquote className="excerpt"><span className="xl">&#8220;&nbsp;</span>{project.excerpt}...<span className="xl">&nbsp;&#8221;</span></blockquote>
          <a href={project.url0} target="_blank"><p className="center">{project.title0}</p></a>
          </div>
          <h3>More on the {project.company}'s website</h3>
          <div className={styles.urlList}>
            <a href={project.url1} target="_blank">{project.title1}</a>
            <a href={project.url2} target="_blank">{project.title2}</a>  
            <a href={project.url3} target="_blank">{project.title3}</a>
            <a href={project.url4} target="_blank">{project.title4}</a>        
          </div>
          
        </figure>
        </main>
        {/* <div className={styles.sidebar}>
          <p>Sidebar</p>
          <p>Sidebar</p>
          <p>Sidebar</p>
        </div>  
       */}
    </div>
    <Outlet />
    </>
  )
  
}

