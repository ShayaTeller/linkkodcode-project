import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();
const secretKey = process.env.JWT_SECRET;

export async function auth(req, res) {
  try {
    const username = req.body.username;
    console.log(username);

    const token = await tokerCreator(username);
    console.log(token);
    res.cookie("authToken", token, {
      httpOnly: true,
    });
  } catch (error) {}
}

// export async function getToken(username) {
//   const player = await getPlayerByname(username);
//   const token = tokerCreator(player);
//   return token;
// }

export async function tokerCreator(username) {
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


export async function tokenVeryfayer(req, res, next) {
  const token = req.cookies.authToken;
  console.log(token)

  if (token) {
    const decoded = jwt.verify(token, secretKey);
    if (decoded) {
        req.user = decoded;
      next();
    } else {
      res.status(401).send(" token expaiyerd.");
    }
  } else {
    res.status(401).send("No token found.");
  }
}

// export function tokenVerifier(req, res, next) {
//   const token = req.cookies.token; // שולפים מהקוקי שנקרא "token"
//   if (!token) {
//     return res.status(401).json({ success: false, message: "No token provided" });
//   }
//   try {
//     const decoded = jwt.verify(token, secretKey);
//     req.user = decoded; // מצמיד את המידע של המשתמש ל־req
//     next(); // ממשיכים לראוט הבא
//   } catch (error) {
//     return res.status(403).json({ success: false, message: "Invalid or expired token" });
//   }
// }

// // // }
// // export function tokenVeryfayer(req, res, next) {
// //     const token = req.body.token;

// //     if (token && token.trim() !== "") {
// //         try {
// //             const decoded = jwt.verify(token, secretKey);
// //             req.tokeplayer = decoded;
// //             console.log("token valid:", decoded);
// //             return res.status(200).json({ message: "Token valid", decoded }); // או תוריד שורה זו אם אתה לא רוצה להשיב כאן
// //         } catch (error) {
// //             console.log("Invalid token:", error.message);
// //             // לא שולחים שגיאה – ממשיכים ל-login
// //             return next();
// //         }
// //     } else {
// //         console.log("No token provided");
// //         // גם כאן – ממשיכים ל-login
// //         return next();
// //     }
// // }

// // export function authorizeRoles(...allowedRoles) {
// //     return (req, res, next) => {
// //         if (!req.player || !req.player.role) {
// //             return res.status(403).json({ message: "Access denied: no role provided" });
// //         }

// //         if (!allowedRoles.includes(req.player.role)) {
// //             return res.status(403).json({ message: "Access denied: insufficient role" });
// //         }

// //         next();
// //     };
// // }

// // export default tokerCreator;

// // import jwt from 'jsonwebtoken'
// // import { getPlayerByName } from '../Dal/PlayerDAL/playerDal.js';

// export async function getToken(username) {
//     const player = await getPlayerByName(username);
//     console.log(player)
//     if (!player) {
//         throw new Error('Player not found');
//     }
//     console.log(player)
//     const token = tokenCreator(player);
//     return token;
// }

// // const token = getToken("shaya")

// export function tokenCreator(player) {
//     const payload = {
//         playerId: player.id,
//         username: player.username,
//         role: player.role
//     };

//     const options = {
//         expiresIn: '1h',
//         issuer: 'riddle-system',
//     };

//     const token = jwt.sign(payload, secretKey, options);
//     return token;
// }

// export function tokenVerifier(req, res, next) {
//     // בדיקת token בheader או בbody
//     const token = req.headers.authorization?.split(' ')[1] || req.body.token;

//     if (token && token.trim() !== "") {
//         try {
//             const decoded = jwt.verify(token, secretKey);
//             req.player = decoded; // שמירת המידע המפוענח
//             console.log("Token valid:", decoded);
//             return next(); // המשך לפונקציה הבאה
//         } catch (error) {
//             console.log("Invalid token:", error.message);
//             return res.status(403).json({
//                 message: "Invalid or expired token",
//                 error: error.message
//             });
//         }
//     }

//     // אם אין token - ממשיך לבדיקת username/password
//     console.log("No token provided, checking for username/password");
//     return next();
// }

// // export function authorizeRoles(...allowedRoles) {
// //     return (req, res, next) => {
// //         if (!req.body.token && !req.headers.token) {
// //             return res.status(403).json({ message: "Access denied: authentication required" });
// //         }
// //         const decoded = jwt.verify(req.body.token || req.headers.token, secretKey);
// //         console.log(decoded.role)

// //         // בדיקה שהתפקיד מורשה
// //         if (!allowedRoles.includes(decoded.role)) {
// //             return res.status(403).json({
// //                 message: `Access denied: requires one of roles: ${allowedRoles.join(', ')}`
// //             });
// //         }

// //         console.log(`Access granted for role: ${decoded.role}}`);
// //         next();
// //     };
// // }

// // פונקציה נוספת לבדיקת token בלבד (ללא next)
// export function verifyTokenOnly(token) {
//     try {
//         const decoded = jwt.verify(token, secretKey);
//         return { valid: true, decoded };
//     } catch (error) {
//         return { valid: false, error: error.message };
//     }
// }

// // check before login if token exsist, if not exsist he go to next-login and give hem a new token
// export function checkExistingToken(req, res, next) {
//     const token = req.headers.authorization?.split(' ')[1] || req.body.token;

//     if (token && token.trim() !== "") {
//         try {
//             const decoded = jwt.verify(token, secretKey);
//             return res.status(200).json({
//                 message: "Already logged in",
//                 token: token,
//                 user: decoded
//             });
//         } catch (error) {
//             console.log("Invalid token, proceeding to login");
//         }
//     }

//     next();
// }

// // import jwt from 'jsonwebtoken';
// // const secretKey = process.env.JWT_SECRET || 'yourFallbackSecret'; // ודא שיש לך מפתח סודי

// export function authorizeRoles(...allowedRoles) {
//     return (req, res, next) => {
//         try {
//             // קבלת הטוקן מה-headers או מה-body
//             const token = req.headers.authorization?.split(' ')[1] || req.body.token;

//             if (!token) {
//                 return res.status(403).json({ message: "Access denied: authentication required" });
//             }

//             // אימות הטוקן
//             const decoded = jwt.verify(token, secretKey);

//             // בדיקה שהתפקיד מורשה
//             if (!allowedRoles.includes(decoded.role)) {
//                 return res.status(403).json({
//                     message: `Access denied: requires one of roles: ${allowedRoles.join(', ')}`
//                 });
//             }

//             console.log(`Access granted for role: ${decoded.role}`);
//             req.user = decoded; // אופציונלי - לצרף את המידע לבקשה להמשך
//             next();

//         } catch (err) {
//             return res.status(401).json({ message: "Invalid or expired token" });
//         }
//     };
// }

// export default tokenCreator;
