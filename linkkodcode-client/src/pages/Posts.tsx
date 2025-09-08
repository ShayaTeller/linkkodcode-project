import { useEffect, useState } from "react";
import Post from "../components/Post.tsx";
import "../styles/posts.css";
import { useNavigate } from "react-router";
// this component run of a arrey that fill ehit posts objects

type PostType = {
  id: number;
  imgurl: string;
  likes: number;
  description: string;
  username: string;
  time: string;
};

export default function Posts() {
  const [postslist, SetPostList] = useState<PostType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const postslist = await fetch("http://localhost:3000/mockData.json");
      console.log(await postslist);
      SetPostList(await postslist.json());
    };
    fetchPosts();
  }, []);

  {
    if (postslist.length) {
      return (
        <div className="posts">
          {postslist.map((p) => {
            return (
              <div key={p.id} className="post-component">
                <Post
                  imgurl={p.imgurl}
                  likes={p.likes}
                  description={p.description}
                  username={p.username}
                  time={p.time}
                />
              </div>
            );
          })}
        </div>
      );
    }
    if(!postslist.length!){
      navigate('/emptypostsdata')
    }
  }
}
