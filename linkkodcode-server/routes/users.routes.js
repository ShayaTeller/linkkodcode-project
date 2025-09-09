import express from "express";
import { signupCtrl, loginCtrl } from "../controllers/users.ctrl.js";
import { auth,tokenVeryfayer } from "../aoth/auth.js";

export const router = express();


// to login , need username & password
router.post("/login", async (req, res, next) => {
  return await loginCtrl(req, res, next);
});

// to get a token , need username & password its aoutomaticli after the login succes
router.use("/login", async (req, res) => {
     res.send(await auth(req, res));
});

// to singup , need username, password, phone, enail, its write to the db-file

router.post("/signup", async (req, res) => {
  res.send(await signupCtrl(req, res));
});
