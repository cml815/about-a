import { Link } from "react-router-dom";
// import { About } from "./routes/about";
import "../utils.css";

export default function TopNav() {
  return (
    <nav className="flex">
      <Link to="/">Home</Link>
      {/* <Link to="/about">About</Link> */}
    </nav>
  )

}