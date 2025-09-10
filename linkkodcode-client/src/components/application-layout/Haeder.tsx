import "../../styles/Header.css";
import AuthNavBar from "../AuthNavBar";
import { useNavigate } from "react-router";

// the header holds the slogen and the logo, all the time
export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <h1 className="slogen">this is the slogen</h1>
        <img
          src="https://lh3.googleusercontent.com/drive-storage/AJQWtBOog67I_nrrxhZeEYGYRRZW0ImEVcx1IFh_ImKs6HGGrV5_olO5oo7HvKNvtVv0-doRCjbXNoFGmhFzdeKhNG9WygA1M0va6oop210_gwlD0A=w1920-h988?auditContext=forDisplay"
          alt=""
          className="logo"
        />
        <AuthNavBar/>
      </header>
    </>
  );
}
