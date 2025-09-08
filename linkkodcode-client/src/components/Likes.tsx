import { useState } from "react";
import "../styles/Likes.css"
// this component returnd the like elemnt that use in the post component
export default function Likes({likesstate,Like}:{likesstate:number,Like:()=>boolean}) {
  const [likeclass,Setlikeclass] = useState(false)

  return (
    <>
    <div className="like-component">
        <div className="likes">{likesstate}</div>
        <button className="like" onClick={()=>{
          if(!Like()){Setlikeclass(false)}else{Setlikeclass(true)}
        }}>like</button>

    </div>
      
    </>
  );
}