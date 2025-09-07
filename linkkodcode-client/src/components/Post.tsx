import "../styles/Post.css"
import Likes from "./Likes"

export default function Post({imgurl,likes,description,username}:{imgurl:string,likes:number[],description:string,username:string}){

    return(<>
    <div className="post-component">
        <img className="post-img" src={imgurl} alt="post-img" />
        <Likes likes={likes} />
        <p className="post-description">{description}</p>
        <p className="post-username">{username}</p>
    </div>

    </>)
}