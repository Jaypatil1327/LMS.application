import { createContext } from "react";

export const authContext = createContext(null);

export function AuthProvider({ children }) {
  return <authContext.Provider value={{}}>{children}</authContext.Provider>;
}
