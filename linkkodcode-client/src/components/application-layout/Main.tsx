import type { PropsWithChildren } from "react";

// the main component is the  Envelope of the render area of the application.
export default function Main({children}:PropsWithChildren) {
  return (
    <>
      <main className="main">
        {children}
      </main>
    </>
  );
}
