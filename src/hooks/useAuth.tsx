import { useContext } from "react";
import { AuthContext } from "../assets/useContext/AuthProvider";

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default useAuth;
