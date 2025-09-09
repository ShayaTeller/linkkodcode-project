import "../../styles/Header.css";
import NavBar from "../NavBar";
import { useNavigate } from "react-router";

// the header holds the slogen and the logo, all the time
export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <h1 className="slogen">this is the slogen</h1>
        <img
          src="https://lh3.googleusercontent.com/drive-storage/AJQWtBMtE5iOXV21OqYseQ7aKan9q2enkM37A8-Z9LSuEdQkGR9HlhSOfQwgEw5DxeX9X823VPfT4BeT7PELMGKLfFh4k55iOfPZKnX03M6NGSKLp7M=w1920-h988?auditContext=forDisplay"
          alt=""
          className="logo"
        />
        <NavBar />
        <button className="go-back" onClick={() => navigate(-1)}>Go Back</button>
      </header>
    </>
  );
}
