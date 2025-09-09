// import type { PropsWithChildren } from "react";
import Header from "./Haeder";
import Main from "./Main";
import type { PropsWithChildren } from "react";


// this is the main layout off the application , the basic strocture ,
// header 
//main => inside the main is the <outlet> tag render the correct pages/components by the navigation
export default function AppLayout({children}:PropsWithChildren) {

  
 


  return (
    <>
    <Header/>
 
    <Main>{children}</Main>
    </>
  );
}
