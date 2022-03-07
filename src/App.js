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
              <Route path="*" element={
                <div>No Match!</div>
              } />
            </Route> 
            <Route path="/about" element={<About />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>} />
        </Route>
      </Routes>
    </main>
    <Outlet />
    </>
  );
}

