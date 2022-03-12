import { useParams } from 'react-router-dom';
import { getProject } from '../data';

export function Project() {
  let params = useParams();
  let project = getProject(params.projectIdß);
  return (
    <h2>Project: {project.company}</h2>
  )
  
}

