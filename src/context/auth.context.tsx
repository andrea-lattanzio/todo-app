import { createContext, ReactNode, useEffect, useState } from "react";
import { User } from "../Routes/Login/types/login.types";
import useProfile from "./hooks/useProfile";
import Spinner from "../components/Spinner";

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: userProfile, isLoading } = useProfile();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (userProfile) {
      setUser(userProfile);
    }
  }, [userProfile]);

  if (isLoading) return <Spinner />;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
