import Post from "../components/Post";
import { useLocation } from "react-router";
import type { PostType } from "./Posts";
export default function OnePostPage() {

    const {state} = useLocation();
    const {id,imgurl,likes,description,username,time}:PostType = state;
    
  return (

    <>
    <h1>hello</h1>
    <Post id={id} imgurl={imgurl} likes={likes} description={description} username={username} time={time}/>

      
    </>
  );
}