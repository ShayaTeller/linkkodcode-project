import './App.css'
import './styles/Post.css'
import './styles/Likes.css'
import Post from './components/Post'

function App() {

  return (
    <>
    <h1>hello</h1>
    <Post imgurl='https://dalicanvas.co.il/wp-content/uploads/2022/10/%D7%99%D7%A2%D7%A8-%D7%A7%D7%A1%D7%95%D7%9D-7.jpg' likes={[]} description="hello this is my first post" username='shaya teller'/>
    </>
  )
}

export default App
