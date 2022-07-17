import { useParams } from 'react-router-dom';
import { NavLink, Outlet } from "react-router-dom";
import "../utils.css";
import styles from './Project.module.css'
import "../App.css";
import Sidebar from './Sidebar';
import { getCategory } from '../data';

export function Category () {
  let params = useParams();
  let category = getCategory(params.projectId);
  return (
    <>
    
      <h2>{params.projectId}</h2>
      <Outlet />
      <p></p>
    </>
  )
  
}