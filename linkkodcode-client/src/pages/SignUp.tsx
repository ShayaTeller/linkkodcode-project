import { useNavigate } from "react-router";
import { useRef } from "react";

export default function SignUp() {

  const navigate = useNavigate();
  const FormRef = useRef<HTMLFormElement>(null);


  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formdata = new FormData(FormRef.current!);
    const payload = {
      username: formdata.get("username"),
      password: formdata.get("password"),
      phone:formdata.get("phone"),
      email: formdata.get("email"),
    };
    const res = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      navigate("/signin");
    } else {
      console.error("login faild");
    }
  };

  return (
    <>
      <div className="signup">
        <h1>sign Up</h1>
        <form action="" ref={FormRef} onSubmit={onSubmit}>
          <label htmlFor="username">user name</label>
          <input type="text" name="username" placeholder="enter yor name" />
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password">password</label>
          <input type="password" name="password" id="password" placeholder="enter your password"/>
          <label htmlFor="phone">phone</label>
          <input type="number" name="phone" id="phone" />
          <input type="submit" name="" id="" onClick={() => {}} />
          sing up
        </form>
      </div>
    </>
  );
}
