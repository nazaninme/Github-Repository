import axios from "axios";
import React, { useEffect, useState } from "react";
import RepositoriesFilter from "./repositoriesFilter/RepositoriesFilter";
import Repositories from "./repositories/Repositories";
import Profile from "./profile/Profile";
// import Search from "./repositoriesFilter/search/Search";
export default function GetData() {
  // const [state, setState] = useState([]);
  // const [tem, setTem] = useState([]);

  // function handleAll() {
  //   setTem(state);
  // }
  // function handlePublic() {
  //   x = state.filter((item) => {
  //     return item.private === false;
  //   });
  //   setTem(x);
  // }
  // function handlePrivate() {
  //   x = state.filter((item) => {
  //     return item.private;
  //   });
  //   setTem(x);
  // }

  return (
    <div className="md:flex md:gap-8  ">
      <Profile />
      <div className="md:grow">
        <div className="flex flex-col items-center gap-2 my-8   relative  ">
          {/* <Search /> */}
          <RepositoriesFilter
          //  state={state} setTem={setTem}
          />
        </div>
        <Repositories
        //  tem={tem} setTem={setTem} setState={setState}
        />
      </div>
    </div>
  );
}
