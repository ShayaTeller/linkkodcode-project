import HomePage from "../../pages/HomePage";
import Posts from "../../pages/Posts";

export default function Main() {
  return (
    <>
      <div className="main">
        <HomePage>
          <Posts />
        </HomePage>
      </div>
    </>
  );
}
