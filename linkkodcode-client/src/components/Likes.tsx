import "../styles/Likes.css"
// this component returnd the like elemnt that use in the post component
export default function Likes({likes}:{likes:number[]}) {
    const likeslist = likes;

  return (
    <>
    <div className="like-component">
        <div className="likes">sum likes</div>
        <button className="like">{likeslist[0]}</button>

    </div>
      
    </>
  );
}