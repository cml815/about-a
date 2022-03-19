import  { getProjects } from '../data';

export default function ProjectImage() {
  let projects = getProjects();
  return (
    <div>
      {projects.map((projects, index) => {
        return (
          <img className="projectImage" src={projects.image} alt="image" />
        )
      })}
    </div>
  )
}