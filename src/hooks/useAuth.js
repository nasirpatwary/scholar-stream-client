import { createContext, use } from "react";
export const AuthContext = createContext(null);
const useAuth = () => {
  return use(AuthContext)
};

export default useAuth;
