// import { submitForm } from "./actions.js";
import { useRef } from "react";
// import { useNavigate } from "react-router";

export default function AddNewPost() {
  //   const navigate = useNavigate();
  const FormRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formdata = new FormData(FormRef.current!);

    const newpost = {
      
      imgurl:`http://localhost:3000`,
      likes: 0,
      description: formdata.get("description"),
      username: formdata.get("username"),
      
    };
    const res = await fetch("http://localhost:3000/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newpost),
    });}

    return (
      <>
        <form ref={FormRef} onSubmit={onSubmit}>
          <label htmlFor="description">description</label>
          <input type="text" name="description" id="description" />
          <label htmlFor="username">username</label>
          <input type="text" name="username" id="username" />
          <label htmlFor="img">img</label>
          <input type="file" name="img" id="img" />
          <input type="submit" />
        </form>
      </>
    );
  };
