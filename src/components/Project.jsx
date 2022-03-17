import { useParams } from 'react-router-dom';
import { getProject } from '../data';
import "../utils.css";
import "../App.css";

export function Project() {
  let params = useParams();
  return (
    <>
    <main className="projectContainer">
      <h2>Project: {params.projectId}</h2>
    </main>
    

    </>
  )
  
}

