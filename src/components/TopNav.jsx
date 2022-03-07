import { Link, Outlet } from "react-router-dom";
// import { About } from "./routes/about";
import "../utils.css";

export function TopNav() {
  return (
    <nav className="">
      <Link to="/">Home</Link>
      {/* <Link to="/about">About</Link> */}
    <Outlet />
    </nav>
  )

}