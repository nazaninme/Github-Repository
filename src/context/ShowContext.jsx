import { createContext, useState } from "react";
export const ShowContext = createContext();

export default function ShowProvider({ children }) {
  const [show, setShow] = useState(false);
  return (
    <ShowContext.Provider value={{ show, setShow }}>
      {children}
    </ShowContext.Provider>
  );
}
