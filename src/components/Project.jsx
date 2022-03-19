import { useParams } from 'react-router-dom';
import { NavLink, Outlet } from "react-router-dom";
import "../utils.css";
import styles from './Project.module.css'
import "../App.css";
import Sidebar from './Sidebar';
import ProjectImage from './ProjectImage';

export function Project() {
  let params = useParams();
  return (
    <>
    <div className="projectContainer">
      <div class="flex">
        <Sidebar />
      <h2>Project: {params.projectId}</h2>
      </div>
    <main>
        {params.image}
    </main>
    </div>
    </>
  )
  
}

