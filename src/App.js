import { Routes, Route } from "react-router-dom";
import './App.css';
// import { TopNav } from "./components/TopNav";
import { Project } from "./components/Project";
import About from './routes/about';


export default function App() {
  return (
    <>
    <main>
      <Routes>
        {/* <TopNav /> */}
        <Route path ="/" element= {<Project />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </main>
    </>
  );
}

