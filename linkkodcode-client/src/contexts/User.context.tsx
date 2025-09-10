import { useState, type SetStateAction } from "react";
import { context } from "./store";

export type IUserContext = {
    user: string;
    setUser: React.Dispatch<SetStateAction<string>>
}




export default function UserContext({ children }:{children: React.ReactNode}) {
  const [user, setUser] = useState<string>("");

  return (
    <context.Provider value={{ user, setUser }}>
      {children}
    </context.Provider>
  );
}
