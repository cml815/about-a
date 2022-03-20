import  { getProjects } from '../data';

// https://stackoverflow.com/questions/62192049/how-do-i-dynamically-import-images-in-react

export default function ProjectImage() {
  let projects = getProjects();
  return (
    <div>
      {projects.map((projects, index) => {
        return (
          <img className="projectImage" src={projects.image} alt="image" />
          // <img src={require(`../../folder-path/${dynamic-filename}.png`).default} />
          // <img src={require(`./images/${image}.png`).default} />
        )
      })}
    </div>
  )
}