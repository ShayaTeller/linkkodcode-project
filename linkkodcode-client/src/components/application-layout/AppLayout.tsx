// import type { PropsWithChildren } from "react";
import { Outlet } from "react-router";
import Header from "./Haeder";
import Main from "./Main";

// this is the main layout off the application , the basic strocture ,
// header 
//main => inside the main is the <outlet> tag render the correct pages/components by the navigation
export default function AppLayout() {
  return (
    <>
    <Header/>
    <Main/>
      <Outlet />
    </>
  );
}
