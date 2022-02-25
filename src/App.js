import { Routes, Route } from "react-router-dom";
import './App.css';
// import { TopNav } from "./components/TopNav";
import { Projects } from "./components/Projects";
import About from './routes/about';
import Contact from './routes/contact';


export default function App() {
  return (
    <>
    <main>
      <Routes>
        {/* <TopNav /> */}
        <Route path ="/" element= {<Projects />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    </>
  );
}

