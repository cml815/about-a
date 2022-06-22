import { Routes, Route, Outlet } from "react-router-dom";
import './App.css';
// import { TopNav } from "./components/TopNav";
import { Projects } from "./components/Projects";
import { Project } from "./components/Project";
import { Categories } from "./components/Categories";
import { Category } from "./components/Category";
import About from './routes/about';
import Contact from './routes/contact';
import './global.css';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element ={<Projects />  }/>
        <Route path="/projects/:projectId" element={<Project />}>
          <Route path="*" element={
          <div>No Match!</div> } />
        </Route>

        <Route path="/categories" element={<Category />}>
          <Route path="/categories/:categoryId" element={<Categories />}>
          <Route path="*" element={
          <div>No Category Found!</div> } />
          </Route>
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

