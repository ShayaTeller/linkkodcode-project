import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();
const secretKey = process.env.JWT_SECRET;


// new i send a token for the user
export async function auth(req, res) {
  let username;
  try {
    username = req.body.username;
    //i create the cookie
    const token = await tokenCreator(username);

   res.cookie("authToken", token, {
      httpOnly: false,
    });

  } catch (error) {
    return res.status(401).send({"message":error})
  }
  return {"username":username,"message":'success'};
}


// this fn jenerate a token for user
export async function tokenCreator(username) {
  const payload = {
    username: username,
  };
  const options = {
    expiresIn: "5m",
    issuer: "linkkodecode-System",
  };

  const token = jwt.sign(payload, secretKey, options);
  return token;
}

// this middleware chack if its be a cookie, if verify its allows to go next, else he send a correct message
export async function tokenVeryfayer(req, res, next) {
  const token = req.cookies.authToken;
  console.log(token)

  
  if (token!=null|undefined) {
    // if token exsist = decoding the token
    const decoded = jwt.verify(token, secretKey);
    if (decoded) {
        // add to the body the user, that i can use that after
        req.user = decoded;
      next();
    } else {
      res.status(401).send(" token expaiyerd.");
    }
  } else {
    res.status(401).send("No token found.");
  }
}
