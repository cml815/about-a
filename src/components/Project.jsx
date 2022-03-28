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
        <h2>Project ID: {params.projectId}</h2>
        <p>Product: {project.product}</p>
      </div>
      <nav className={styles.sideNav}>
          <Sidebar />
        </nav>
      <main className={styles.projectContainer}>
        
        <div className={styles.container}>
          <p>Category: {project.category}</p>
          <img src={project.image} width="500" />
        </div>
        </main>
        <div className={styles.sidebar}>
          <p>Sidebar</p>
          <p>Sidebar</p>
          <p>Sidebar</p>
        </div>  
      
    </div>
    </>
  )
  
}

