import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const RepositoriesContext = createContext();

export default function RepositoriesProvider({ children }) {
  const [state, setState] = useState([]);
  const [tem, setTem] = useState([]);
  useEffect(() => {
    axios.get("https://api.github.com/users/dumbmety/repos").then((res) => {
      setState(res.data);
      setTem(res.data);
      console.log(res);
    });
  }, []);

  return (
    <RepositoriesContext.Provider value={{ state, setState, tem, setTem }}>
      {children}
    </RepositoriesContext.Provider>
  );
}
