// import { submitForm } from "./actions.js";
import { useContext, useRef } from "react";
// import { useNavigate } from "react-router";
import { useNavigate } from "react-router";
import { context } from "../contexts/store";
export default function AddNewPost() {
  //   const navigate = useNavigate();
  const FormRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const { user } = useContext(context);

  if (user) {
    const onSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      const formdata = new FormData(FormRef.current!);

      const newpost = {
        likes: 0,
        description: formdata.get("description"),
        username: formdata.get("username"),
        imgurl: formdata.get("imgurl"),
      };
      const res = await fetch("http://localhost:3000/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newpost),
      });
      const result = await res.json();

      setTimeout(() => {
        navigate("/message", { state: { message: result.message } });
      }, 3000);
    };

    return (
      <>
        <form ref={FormRef} onSubmit={onSubmit}>
          <label htmlFor="description">description</label>
          <input type="text" name="description" id="description" />
          <label htmlFor="username">username</label>
          <input type="text" name="username" id="username" />
          <label htmlFor="imgurl">imgurl</label>
          <input type="text" name="imgurl" id="imgurl" />
          <input type="submit" />
        </form>
      </>
    );
  } else {
    navigate('/login');
  }
}
