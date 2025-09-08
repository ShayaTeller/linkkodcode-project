import "./App.css";
import "./styles/Post.css";
import "./styles/Likes.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/application-layout/AppLayout.tsx";
import HomePage from "./pages/HomePage.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="test" element={<h1>hello the test is ok!</h1>} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
