import { useContext, type PropsWithChildren } from "react";
import "../styles/Homepage.css";
import Posts from "./Posts";
import type { IUserContext } from "../contexts/User.context";
import { context } from "../contexts/store";
import Login from "./Login";

// thid home paeg oldes the first page that the user see
export default function HomePage({ children }: PropsWithChildren) {
  const { user } = useContext<IUserContext>(context);
  console.log(user)



    // if (user.length != 0) {
      return (
        <>
          <div className="homepage">
            {<Posts />}
            {children}
          </div>
        </>
      // );
    // } else {
//       return (
//         <>
//           <Login />
//         </>
//       );
//     }
// }
      )}