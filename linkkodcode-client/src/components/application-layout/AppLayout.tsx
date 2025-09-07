// import type { PropsWithChildren } from "react";
import { Outlet } from "react-router";
import Header from "./Haeder";
import Main from "./Main";

export default function AppLayout() {
  return (
    <>
    <Header/>
    <Main/>
      <Outlet />
    </>
  );
}
