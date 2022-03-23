import { useParams } from 'react-router-dom';
import { NavLink, Outlet } from "react-router-dom";
import "../utils.css";
import styles from './Project.module.css'
import "../App.css";
import Sidebar from './Sidebar';
import { getProject } from '../data';
import ProjectImage from './ProjectImage';


// function ProfilePage() {
//   // Get the userId param from the URL.
//   let { userId } = useParams();
//   // ...
// }

// import { useParams } from "react-router-dom";

// export default function Invoice() {
//   let params = useParams();
//   return <h2>Invoice: {params.invoiceId}</h2>;
// }

export function Project() {
  let params = useParams();
  // let project = getProject();
  let project = getProject(params.projectId);
  return (
    <>
    <div className="projectContainer">
      <div class="flex">
        <Sidebar />
        <img src={project.image} width="400" />
      </div>
      <div className={styles.container}>
        <h2>Project ID: {params.projectId}</h2>
        <p>Product: {project.product}</p>
      </div>

    <main>
        
    </main>
    </div>
    </>
  )
  
}

