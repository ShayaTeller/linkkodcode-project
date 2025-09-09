import "./App.css";
import "./styles/Post.css";
import "./styles/Likes.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/application-layout/AppLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import OnePostPage from "./pages/OnePostPage.tsx";
import AddNewPost from "./pages/AddNewPost.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="test" element={<h1>hello the test is ok!</h1>} />
            <Route path="/emptypostsdata" element={<h1>Oops, no posts, you might be posting!</h1>}/>
            <Route path="loading" element={<p>loading the posts</p>}/>
            <Route path="post/:id"  element={<OnePostPage/>}/>
            <Route path="newpost" element={<AddNewPost/>}/>
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
