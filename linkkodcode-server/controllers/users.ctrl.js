import { auth } from "../aoth/auth.js";
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
  if(ok===true){
    return await auth(req,res)

  }
  else{
    return  res.status(401).send({message:"wrong login"});
  }
}



export async function signupCtrl(req, res) {
  if (!req.body) {
    return res.status(400).send("body is empty");
  }
  const { username, password, phone, email } = req.body;
//   console.log(req.body)
  if (!username && !password) {
    return res.status(400).send("empty username & password");
  }
  if (!username && password) {
    return res.status(400).send("empty username");
  }
  if (username && !password) {
    return res.status(400).send("empty password");
  }
  if(!phone){
    return res.status(400).send("check the phone");
  }
    if(!email){
    return res.status(400).send("check the email");
  }

  const hashpassword = await bcrypt.hash(password, 12);
  return await AddUser(username, hashpassword, phone, email);
}
