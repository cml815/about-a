import { useParams } from 'react-router-dom';
import { getProject } from '../data';

export function Project() {
  let params = useParams();
  let project = getProject();
  return (
    <h2>Project: {params.company}</h2>
  )
  
}