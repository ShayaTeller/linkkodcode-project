import { createContext } from "react";
import type { IUserContext } from "./User.context";

export const context = createContext<IUserContext>({user: "", setUser: () => {}});
