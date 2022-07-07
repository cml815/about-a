import { useParams } from 'react-router-dom';
import { NavLink, Outlet } from "react-router-dom";
import "../utils.css";
import styles from './Project.module.css'
import "../App.css";
import Sidebar from './Sidebar';
import { getProject } from '../data';

export function Category () {
  let params = useParams();
  let project = getProject(params.projectId);
  return (
    <>
    
      <p>Category page</p>
    </>
  )
  
}