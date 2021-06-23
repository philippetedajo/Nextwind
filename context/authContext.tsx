import { createContext, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

interface AuthContextInterface {
  user: any;
  login: any;
  isLoading: boolean;
  error?: string;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const login = async (input) => {
    console.log(input);
    setIsLoading(true);
    try {
      const response = await axios.post("/api/auth/login", input);
      setUser(response.data);
      if (response.data.data.code === 200) await router.push("/profile");
      setIsLoading(false);
      setError("");
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
};
