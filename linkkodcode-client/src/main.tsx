import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/application-layout/AppLayout.tsx";
import Posts from "./pages/Posts.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="posts" element={<Posts />} />
        <Route path="test" element={<h1>hello the test is ok!</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
