import { useParams } from 'react-router-dom';

export function Project() {
  let params = useParams();
  return (
    <h2>Project: {params.company}</h2>


  )
  
}