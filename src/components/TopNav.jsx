import { Link, Outlet } from "react-router-dom";
// import { About } from "./routes/about";
import styles from './TopNav.module.css';
import "../utils.css";

export default function TopNav() {
  return (
    <>
    <nav className={styles.TopNav}>
      <Link to="/">Caroline Leopold</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <Outlet />
    </>
    
  )

}