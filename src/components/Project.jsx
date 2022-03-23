import { useParams } from 'react-router-dom';
import { NavLink, Outlet } from "react-router-dom";
import "../utils.css";
import styles from './Project.module.css'
import "../App.css";
import Sidebar from './Sidebar';
import { getProject } from '../data';
// import ProjectImage from './ProjectImage';


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
      <div className={styles.container}>
        <h2>{params.projectId}</h2>
        {/* <ProjectImage /> */}
        <p>{project.product}</p>
      </div>

      </div>
    <main>
        <h4>{project.image}</h4>
    </main>
    </div>
    </>
  )
  
}

