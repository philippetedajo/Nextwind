import { createContext, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

interface AuthContextInterface {
  user: any;
  login: any;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const login = async (input) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/auth/login", input);
      setUser(response.data);
      setIsLoading(false);
      setMessage("");
    } catch (error) {
      setMessage(error.message);
      setIsLoading(false);
    }
  };

  //     router.push("/account");

  return (
    <AuthContext.Provider value={{ user, login, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
