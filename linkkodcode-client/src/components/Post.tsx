import "../styles/Post.css";
import Likes from "./Likes";
import { useState } from "react";

// this returned a post (post-card) that take props and build a post =>return a post elemnt
import type { PostType } from "../pages/Posts";
export default function Post({imgurl, likes, description, username, time}:PostType){
  
  
//   {
//   imgurl: string;
//   likes: number;
//   description: string;
//   username: string;
//   time:string;
// }) {

  const [likesstate, SetLikesState] = useState(likes);
  const [toggel,setToggel] = useState(false);
  const ToggelLike = () => {
    if (!toggel) {
      setToggel(true);
      SetLikesState(likesstate+1)
      return true;
      
    }
    if(toggel){
        setToggel(false)
        SetLikesState(likesstate-1)
        return false
        
    }

    return ;
  };

  return (
    <>
      <img className="post-img" src={imgurl} alt="post-img" />
      <Likes likesstate={likesstate} Like={ToggelLike} />
      <p className="post-description">{description}</p>
      <p className=".post-date-time">{`created_at: ${time}`}</p>
      {/* <p className="post-date-time">{time.toDateString()}</p> */}
      <p className="post-username">{username}</p>
    </>
  );
}
