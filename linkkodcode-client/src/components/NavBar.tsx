import { Link } from "react-router";
import '../styles/NavBar.css'
export default function NavBar() {
  return (
    <>
    <nav className="nav-bar">
    <Link to={'/'}>HomePage</Link>
    <Link to={'/test'}>test</Link>
    </nav>
      
    </>
  );
}