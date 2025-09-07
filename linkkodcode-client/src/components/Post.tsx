import "../styles/Post.css"
import Likes from "./Likes"

export default function Post({imgurl,likes,description,username,id}:{imgurl:string,likes:number[],description:string,username:string,id:string}){

    const timenow = new Date();
    const time = timenow.getHours() + ":" + timenow.getMinutes() + ":" + timenow.getSeconds();
    const date = timenow.getDay() +"/" + timenow.getMonth()+"/"+timenow.getFullYear();
    return(<>
    <div className="post-component" id={id}>
        <img className="post-img" src={imgurl} alt="post-img" />
        <Likes likes={likes} />
        <p className="post-description">{description}</p>
        <p className="post-date-time">{time + "\n" + date}</p>
        <p className="post-username">{username}</p>
    </div>

    </>)
}