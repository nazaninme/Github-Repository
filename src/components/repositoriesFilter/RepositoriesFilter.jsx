import React, { useContext } from "react";
import Search from "./search/Search";
import Filter from "./filter/Filter";

export default function RepositoriesFilter() {
  return (
    <div
      className="w-full border-b  lg:flex-row flex flex-col
     lg:justify-between lg:gap-2  "
    >
      <Search
      //  state={state} setTem={setTem}
      />

      <Filter />
    </div>
  );
}
