import { loginUser, AddUser } from "../services/users.service.js";
import bcrypt from "bcryptjs";

export async function loginCtrl(req, res,next) {
  const { username, password } = req.body;
  if (!username && !password) {
    return res.send("empty username & password");
  }
  if (!username && password) {
    return res.send("empty username");
  }
  if (username && !password) {
    return res.send("empty password");
  }

  const ok =  await loginUser(username, password);
  if(ok){
    return next()
  }
}



export async function signupCtrl(req, res) {
  if (!req.body) {
    return "body is empty";
  }
  const { username, password, phone, email } = req.body;
//   console.log(req.body)
  if (!username && !password) {
    return "empty username & password";
  }
  if (!username && password) {
    return "empty username";
  }
  if (username && !password) {
    return "empty password";
  }
  if(!phone){
    return "chack the phone";
  }
    if(!email){
    return "chack the email";
  }

  const hashpassword = await bcrypt.hash(password, 12);
  return await AddUser(username, hashpassword, phone, email);
}
