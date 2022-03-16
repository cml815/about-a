import { useParams } from 'react-router-dom';
import { getProject } from '../data';
import "../utils.css";
import "../App.css";

export function Project() {
  let params = useParams();
  let project = getProject(params.projectId);
  return (
    <>
    <main className="projectContainer">
      <h2>Project: {project.company}</h2>
    </main>
    

    </>
  )
  
}

