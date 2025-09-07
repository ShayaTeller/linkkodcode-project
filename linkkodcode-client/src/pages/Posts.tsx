import Post from '../components/Post.tsx'
import {posts} from '../utils/mockData.tsx'

// this component run of a arrey that fill ehit posts objects
export default function Posts() {
    const postslist = posts;
    return postslist.map((p,i)=>{
    return(<div id={`id:${i}`}> 
        <Post imgurl={p.imgurl} likes={p.likes} description={p.description} username={p.username} id={p.id}/>
    </div>)
  }
  );
}