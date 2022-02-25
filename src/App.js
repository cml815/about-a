import { Routes, Route, Outlet } from "react-router-dom";
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
        <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>} /> 
      </Routes>
    </main>
    <Outlet />
    </>
  );
}

