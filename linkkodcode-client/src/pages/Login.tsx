import {  useContext, useRef } from "react";
import { useNavigate } from "react-router";
import {context} from '../contexts/store'
export default function Login() {

  const {setUser} = useContext(context)

  const navigate = useNavigate();

  const FormRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formdata = new FormData(FormRef.current!);
    const payload = {
      username: formdata.get("username"),
      password: formdata.get("password"),
    };

    const res  = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if(res.ok){
      const data =await res.json()
      console.log(await data.username)
      setUser(await data.username)
      
      // setUser(data)
      navigate('/posts')
    }
    else{
      console.error("login filed")
    }
  };

  return (
    <>
      <div className="login">
        <h1>login</h1>
        <form ref={FormRef} onSubmit={onSubmit}>
          <label htmlFor="username">user name</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="enter yor name"
            required
          />

          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter your password"
            required
          />

          <button type="submit">login</button>
        </form>
      </div>
    </>
  );
}

