import { Routes, Route, Outlet } from "react-router-dom";
import './App.css';
// import { TopNav } from "./components/TopNav";
import { Projects } from "./components/Projects";
import { Project } from "./components/Project";

import {TopNav} from "./components/TopNav";
import About from './routes/about';
import Contact from './routes/contact';
import './global.css'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element ={<Projects />  }/>

        <Route path="/projects/:projectId" element={<Project />}>
          <Route path="*" element={
          <div>No Match!</div> } />
        </Route>
        
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={
          <div style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
            </div>} />

      </Routes>
    <Outlet />
    </>
  );
}

