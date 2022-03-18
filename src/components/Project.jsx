import { useParams } from 'react-router-dom';
import { getProject } from '../data';
import "../utils.css";
import styles from './Project.module.css'
import "../App.css";

export function Project() {
  let params = useParams();
  return (
    <>
    <div className="projectContainer">
      <h2>Project: {params.projectId}</h2>
    
    <main>
      <div className={styles.sidebar}>
        <p>Testing container</p>

      </div>
    </main>
    </div>
    </>
  )
  
}

