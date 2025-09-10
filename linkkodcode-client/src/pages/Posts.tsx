import { useEffect, useState } from "react";
import Post from "../components/Post.tsx";
import "../styles/posts.css";
import { useNavigate } from "react-router";

// this component run of a arrey that fill ehit posts objects

export type PostType = {
  id: number;
  imgurl: string;
  likes: number;
  description: string;
  username: string;
  time: string;
};

export default function Posts() {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const [postslist, SetPostList] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postslist = await fetch("http://localhost:3000/posts");
      SetPostList(await postslist.json());

      setTimeout(() => {
        setIsLoading(false)
        
      }, 3000);
      
    };
    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <>
      <div className="posts-loading">
        <h1>loading the posts</h1>
        <span className="loader"></span>

      </div>
      </>
    );
  }
  {
    if (postslist.length) {
      return (
        <div className="posts">
          {postslist.map((p) => {
            return (
              <div
                key={p.id}
                className="post-component"
                onClick={() => {
                  navigate(`/post/${p.id}`, {
                    state: {
                      id: p.id,
                      imgurl: p.imgurl,
                      likes: p.likes,
                      username: p.username,
                      time: p.time,
                    },
                  });
                }}
              >
                <Post
                  id={p.id}
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
    if (!postslist.length!) {
      navigate("/emptypostsdata");
    }
  }
}
