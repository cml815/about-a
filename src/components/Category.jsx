import { useParams } from 'react-router-dom';
import { NavLink, Outlet } from "react-router-dom";
import "../utils.css";
import styles from './Project.module.css'
import "../App.css";
import Sidebar from './Sidebar';
import { getCategory } from '../data';

export function Category() {
  let params = useParams();
  let category = getCategory(params.projectId);
  return (
    <>
      <h2>This is a category page. In progress..</h2>
      <p>{category}</p>
    </>
  )
  
}