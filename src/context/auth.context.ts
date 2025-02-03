import { createContext } from "react";
import { User } from "../Routes/Login/types/login.types";

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});
