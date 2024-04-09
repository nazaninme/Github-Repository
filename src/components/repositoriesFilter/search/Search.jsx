import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { RepositoriesContext } from "../../../context/RepositoriesContext";
export default function Search() {
  const { state, setTem } = useContext(RepositoriesContext);
  const [txt, setTxt] = useState("");
  let x = [];
  useEffect(() => {
    x = state.filter((item) => {
      // return item.name === txt;
      return item.name.includes(txt);
    });
    setTem(x);
  }, [txt]);
  return (
    <>
      <input
        type="search"
        className="
                     border  rounded border-[#A6ADB4] bg-clip-padding outline-none
                     text-sm text-[#1f2328]  leading-[1.6] transition duration-200 ease-in-out 
                     focus:z-[3] focus:text-neutral-700 focus:border-[#FDFBFE]
                     focus:shadow-[inset_0_0_0_2px_rgb(59,113,202)] focus:outline-none
                     mb-3 py-1
                     lg:grow my-2
                     "
        placeholder="Find a repository..."
        value={txt}
        onChange={(e) => setTxt(e.target.value)}
      />
    </>
  );
}
