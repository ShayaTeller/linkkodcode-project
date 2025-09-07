import type { PropsWithChildren } from "react";
import '../styles/Homepage.css'

export default function HomePage({children}:PropsWithChildren) {
  return (
    <>
    <div className="homepage">
    {children}

    </div>
  
    </>
  );
}