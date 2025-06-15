import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { IUser } from "../interface/IUser";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";


type AuthContextType = {
  user: IUser | null;
  login: (user: IUser) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const USER_STORAGE_KEY = "user_data";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(USER_STORAGE_KEY);
    if (stored) {
      try {
        const parsed: IUser = JSON.parse(stored);
        if (parsed.email) setUser(parsed);
      } catch {
        localStorage.removeItem(USER_STORAGE_KEY);
      }
    }
  }, []);

  const login = (userData: IUser) => {
    setUser(userData);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    signOut(auth)
    localStorage.removeItem(USER_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user, }} >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};