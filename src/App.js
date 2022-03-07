import { Routes, Route, Outlet } from "react-router-dom";
import './App.css';
// import { TopNav } from "./components/TopNav";
import { Projects } from "./components/Projects";
import {Project } from "./components/Project";
import {TopNav} from "./components/TopNav";
import About from './routes/about';
import Contact from './routes/contact';


export default function App() {
  return (
    <>
    <main>
      <Routes>
        <Route element={<TopNav />}>
            <Route path ="/" element= {<Projects />}>
              <Route path="/projects/:projectId" element={<Project />} />
            </Route> 
            <Route path="/about" element={<About />} /> 
            <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </main>
    <Outlet />
    </>
  );
}

