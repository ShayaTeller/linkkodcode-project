import type { PropsWithChildren } from "react";
import '../styles/Homepage.css'


// thid home paeg oldes the first page that the user see
export default function HomePage({children}:PropsWithChildren) {
  return (
    <>
    <div className="homepage">
    {children}

    </div>
  
    </>
  );
}