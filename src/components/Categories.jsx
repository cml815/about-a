import { Link, NavLink, Outlet, useSearchParams } from 'react-router-dom';
import {getProjects} from '../data';
import '../utils.css';
import '../App.css';
import '../global.css';

export function Categories() {
  let projects = getProjects();
  {projects.map((projects, index => {
    return (
      <>
        <div className="card" key={index}>
        <p>{projects.category}</p>
        </div>
        
      </>
    )
  }))}
  
}