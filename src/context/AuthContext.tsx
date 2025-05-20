
import { createContext, useContext, useState, ReactNode } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  userType: "candidate" | "company";
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, userType: "candidate" | "company") => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  
  // In a real app, these functions would interact with an API
  const login = async (email: string, password: string) => {
    console.log("Login attempted with:", email, password);
    // Mock login - in a real app you'd make an API call here
    setUser({
      id: "1",
      name: "Pedro",
      email: email,
      userType: "candidate",
    });
  };
  
  const register = async (email: string, password: string, userType: "candidate" | "company") => {
    console.log("Register attempted with:", email, password, userType);
    // Mock register - in a real app you'd make an API call here
    setUser({
      id: "1",
      name: "Pedro",
      email: email,
      userType: userType,
    });
  };
  
  const logout = () => {
    setUser(null);
  };
  
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
