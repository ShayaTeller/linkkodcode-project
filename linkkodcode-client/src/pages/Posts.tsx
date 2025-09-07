import Post from '../components/Post.tsx'
import {posts} from '../utils/mockData.tsx'

export default function Posts() {
    const postslist = posts;
    return postslist.map((p,i)=>{
    return(<div> 
        <Post imgurl={p.imgurl} likes={p.likes} description={p.description} username={p.username} id={i}/>
    </div>)
  }
  );
}