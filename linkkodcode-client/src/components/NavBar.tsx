import { Link, useNavigate } from "react-router";
import '../styles/NavBar.css'
export default function NavBar() {
  const navigate = useNavigate();
  return (
    <>
    <nav className="nav-bar">
    <Link to={'/'}>HomePage</Link>
    <Link to={'/newpost'}>newPost</Link>
    <button className="go-back" onClick={() => navigate(-1)}>Go Back</button>
    </nav>
      
    </>
  );
}