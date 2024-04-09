import React, { useContext } from "react";
import Select from "../select/Select";
import { useState } from "react";
import Repositories from "../../../repositories/Repositories";
import { ShowContext } from "../../../../context/ShowContext";

export default function Type() {
  const { show, setShow } = useContext(ShowContext);
  const typeElm = ["All", "Public", "Private"];
  function handleShowType() {
    setShow(!show);
  }
  return (
    <div>
      <button
        onClick={handleShowType}
        className="flex text-[#24292f] text-sm font-medium px-4 py-1 bg-[#F6F8FA] 
        rounded-md border-solid border-[#A6ADB4] border
        shadow"
      >
        Type<i className="material-icons text-base ml-1 ">arrow_drop_down</i>
      </button>
      <Select typeElm={typeElm} />
    </div>
  );
}
