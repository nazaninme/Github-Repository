import React, { useContext } from "react";
import ShowProvider, { ShowContext } from "../../../context/ShowContext";
import Select from "./select/Select";
import Language from "./filterLanguage/Language";
import Type from "./type/Type";
import Sort from "./sort/Sort";

export default function Filter() {
  const filterItems = ["Type", "Language", "Sort"];
  const typeElm = ["All", "Public", "Private"];
  const { show, setShow } = useContext(ShowContext);
  function handleShowType() {
    setShow(!show);
  }
  return (
    <>
      {/* <ul className="flex gap-2 flex-wrap my-3 ">
        {filterItems.map((item, index) => {
          return (
            <li key={index}>
              <button
                onClick={handleShowType}
                className="flex text-[#24292f] text-sm font-medium px-4 py-1 bg-[#F6F8FA] 
        rounded-md border-solid border-[#A6ADB4] border
        shadow"
              >
                {item}
                <i className="material-icons text-sm">arrow_drop_down</i>
              </button>
              <Select typeElm={typeElm} />
            </li>
          );
        })}
      </ul> */}
      <div className="flex gap-2 flex-wrap mb-4">
        <Type />

        <Language />
        <Sort />
      </div>
    </>
  );
}
