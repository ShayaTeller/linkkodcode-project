import "./App.css";
import "./styles/Post.css";
import "./styles/Likes.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/application-layout/AppLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import OnePostPage from "./pages/OnePostPage.tsx";
import AddNewPost from "./pages/AddNewPost.tsx";
import UserContext from "./contexts/User.context.tsx";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import Posts from "./pages/Posts.tsx";
import Message from './pages/Message.tsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <AppLayout>
          <UserContext>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/posts" element={<Posts/>}/>
              <Route path="test" element={<h1>hello the test is ok!</h1>} />
              <Route
                path="/emptypostsdata"
                element={<h1>Oops, no posts, you might be posting!</h1>}
              />
              <Route path="message" element={<Message/>}/>
              <Route path="post/:id" element={<OnePostPage />} />
              <Route path="newpost" element={<AddNewPost />} />
            </Routes>
          </UserContext>
        </AppLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
