import { Link } from "react-router";
import '../styles/AuthNavBar.css'
export default function AuthNavBar() {
  return (
    <>
    <nav className="auth-nav-bar">
    <Link to={'/login'}>login</Link>
    <Link to={'/signup'}>signup</Link>
    </nav>
      
    </>
  );
}