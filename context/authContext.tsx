import { createContext, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

interface AuthContextInterface {
  user: any;
  login: (input: any) => Promise<void>;
  signup: (input: any) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
  error?: string;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log(user);

  const login = async (input) => {
    setUser(null);
    try {
      setIsLoading(true);
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

  const signup = async (input) => {
    setUser(null);
    try {
      setIsLoading(true);
      const response = await axios.post("/api/auth/signup", input);
      setUser(response.data);
      if (response.data.data.code === 200) await router.push("/profile");
      setIsLoading(false);
      setError("");
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setUser(null);
    try {
      setIsLoading(true);
      const response = await axios.post("/api/auth/logout");
      setUser(response.data);
      await router.push("/auth/login");
      setIsLoading(false);
      setError("");
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };



  return (
    <AuthContext.Provider
      value={{ login, signup, logout, user, isLoading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};
