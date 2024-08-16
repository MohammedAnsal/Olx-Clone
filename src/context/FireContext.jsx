import { createContext, useState } from "react";

export const FirebaseContext = createContext(null);

export const AuthContext = createContext(); // For Global Data (Username)

export function GlobalContext({ children }) {
  
  const [user, setUser] = useState(() => { return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null });

  return (

    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>

  );
}