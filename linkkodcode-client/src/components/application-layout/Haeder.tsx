import "../../styles/Header.css";

// the header holds the slogen and the logo, all the time 
export default function Header() {
  return (
    <>
      <div className="header">
        <h1 className="slogen">this is the slogen</h1>
        <img src="../../assets/imges/logo.jpeg"  alt="" className="logo" />
      </div>
    </>
  );
}
