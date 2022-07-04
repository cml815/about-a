import { useParams } from 'react-router-dom';
import { NavLink, Outlet } from "react-router-dom";
import "../utils.css";
import styles from './Project.module.css'
import "../App.css";
import Sidebar from './Sidebar';
import { getProject } from '../data';
import ProjectImage from './ProjectImage';

export function Project() {
  let params = useParams();
  // let project = getProject();
  let project = getProject(params.projectId);
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.header}>
        {/* project ID === company */}
        <h2>{params.projectId}</h2>
        {/* product category needs renaming */}
        <p>Product: {project.product}</p>
      </div>
      <nav className={styles.sideNav}>
          <Sidebar />
  
        </nav>
      <main className={styles.projectContainer}>
        
        <div className={styles.container}>
          <p>Category: {project.category}</p>
          <img src={project.image} width="800" />
          <p className={styles.textCol}>{project.snippet}</p>
          <a href={project.url0} target="_blank">{project.title0}</a>
           <blockquote className="excerpt"><span className="xl">&#8220;&nbsp;</span>{project.excerpt}...<span className="xl">&nbsp;&#8221;</span></blockquote>
          <h3>Read on {project.company}'s website</h3>
          <div className={styles.urlList}>
            <a href={project.url1} target="_blank">{project.title1}</a>
            <a href={project.url2} target="_blank">{project.title2}</a>  
            <a href={project.url3} target="_blank">{project.title3}</a>
            <a href={project.url4} target="_blank">{project.title4}</a>
            <a href={project.url5} target="_blank">{project.title5}</a>   
            <a href={project.url6}>{project.title6}</a>          
          </div>
          
        </div>
        </main>
        <div className={styles.sidebar}>
          <p>Sidebar</p>
          <p>Sidebar</p>
          <p>Sidebar</p>
        </div>  
      
    </div>
    <Outlet />
    </>
  )
  
}

