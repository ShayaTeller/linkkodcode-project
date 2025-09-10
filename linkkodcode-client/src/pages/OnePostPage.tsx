import Post from "../components/Post";
import { useLocation } from "react-router";
import type { PostType } from "./Posts";
import '../styles/OnePost.css'
export default function OnePostPage() {

    const {state} = useLocation();
    const {id,imgurl,likes,description,username,time}:PostType = state;
    
  return (

    <>
    <div className="one-post-component">
    <Post id={id} imgurl={imgurl} likes={likes} description={description} username={username} time={time}/>      
    </div>
    </>
  );
}