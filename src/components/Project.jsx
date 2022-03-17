import { useParams } from 'react-router-dom';
import { getProject } from '../data';
import "../utils.css";
import "../App.css";

// export default function Invoice() {
//   let params = useParams();
//   return <h2>Invoice: {params.invoiceId}</h2>;
// }

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

