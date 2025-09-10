import express from "express";
import { signupCtrl, loginCtrl } from "../controllers/users.ctrl.js";
import { auth,tokenVeryfayer } from "../aoth/auth.js";

export const router = express();


// to singup , need username, password, phone, enail, its write to the db-file

router.post("/signup", async (req, res) => {
  res.send(await signupCtrl(req, res));
});

// to login , need username & password
router.post("/login", loginCtrl);


