import e from "express";
import { write,read } from "../dal/dal.js";
import bcrypt from "bcryptjs";

const datapath = "public/mockUsers.json";


export async function loginUser(username, password) {
  try {
    let hashpassword;
    const datainfile = JSON.parse(await read(datapath));
    datainfile.forEach((element) => {
      if (element.username == username) {
        hashpassword = element.password;
      }
    });
    const verify =await bcrypt.compare(password, hashpassword);
    if (verify==true) return true;

  } catch (error) {
    return false;
  }
}




export async function AddUser(username, password, phone, email) {
  try {
    const datainfile = JSON.parse(await read(datapath))||[];
    const newuser = {
      username: username,
      password: password,
      phone: phone,
      email: email,
    };
    // console.log(newuser)

    datainfile.push(newuser);
    console.log(datainfile)    
    write(datapath,JSON.stringify(datainfile));
    
    return "user received and saved successfully";
  } catch (error) {
    return "error"
  }
}
