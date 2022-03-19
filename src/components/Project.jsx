import { useParams } from 'react-router-dom';
import { NavLink, Outlet } from "react-router-dom";
import { getProject } from '../data';
import "../utils.css";
import styles from './Project.module.css'
import "../App.css";
import Sidebar from './Sidebar';

export function Project() {
  let params = useParams();
  return (
    <>
    <div className="projectContainer">
    <Sidebar />
      <h2>Project: {params.projectId}</h2>
    
    <main>
    </main>
    </div>
    </>
  )
  
}

