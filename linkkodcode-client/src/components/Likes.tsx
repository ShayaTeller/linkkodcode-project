import "../styles/Likes.css"

export default function Likes({likes}:{likes:number[]}) {
    const likeslist = likes;

  return (
    <>
    <div className="like-component">
        <div className="likes">sum likes</div>
        <button className="like"></button>
        <button className="dislike"></button>

    </div>
      
    </>
  );
}