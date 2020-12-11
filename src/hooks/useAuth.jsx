import { useState } from "react";

let AuthContext = React.createContext();

export function useAuth() {


    

}

export default function AuthProvider({ children }) {
  let [user, setUser] = useState({
    name: "Quang Nguyen",
  });

  let value = {
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
