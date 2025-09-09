import express from "express";
import { signupCtrl, loginCtrl } from "../controllers/users.ctrl.js";
import { auth,tokenVeryfayer } from "../aoth/auth.js";

export const router = express();

// router.use('/', tokenVeryfayer)

router.post("/login", async (req, res, next) => {
  return await loginCtrl(req, res, next);
});

router.use("/login", async (req, res) => {
     res.send(await auth(req, res));
});

router.post("/signup", async (req, res) => {
  res.send(await signupCtrl(req, res));
});
