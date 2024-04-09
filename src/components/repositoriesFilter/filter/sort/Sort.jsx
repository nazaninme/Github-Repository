import React, { useContext } from "react";
import Select from "../select/Select";

import { ShowContext } from "../../../../context/ShowContext";

export default function Sort() {
  const { show, setShow } = useContext(ShowContext);

  function handleShowType() {
    setShow(!show);
  }
  const typeElm = ["lastUpdated", "Name", "Stars"];
  return (
    <div>
      <button
        onClick={handleShowType}
        className="flex text-[#24292f] text-sm font-medium px-4 py-1 bg-[#F6F8FA] 
        rounded-md border-solid border-[#A6ADB4] border
        shadow"
      >
        Sort<i className="material-icons text-base ml-1">arrow_drop_down</i>
      </button>
      <Select typeElm={typeElm} />
    </div>
  );
}
