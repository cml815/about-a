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
          <p>From "{project.title0}"</p>
          <div className={styles.excerptContainer}>
           <blockquote className="excerpt"><span className="xl">&#8220;&nbsp;</span>{project.excerpt}...<span className="xl">&nbsp;&#8221;</span></blockquote>
           <div className="btnContainer">
          <a href={project.url0} target="_blank"><p className="btn center">Read full article</p></a>
          </div>
          </div>
          <h3>Similar work</h3>
          <div className={styles.urlList}>
            <div className={styles.card}>
            <a href={project.url1} target="_blank">
            <h4>{project.title1}</h4>
            </a>
            </div>
            <div className={styles.card}>
            <a href={project.url2} target="_blank">
              <h4>{project.title2}</h4> 
            </a>
            </div>
            <div className={styles.card}>
            <a href={project.url3} target="_blank">
              <h4>{project.title3}</h4>
            </a>
            </div>
            <div className={styles.card}>
            <a href={project.url4} target="_blank">
              <h4>{project.title4}</h4> 
            </a>   
            </div>   
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

