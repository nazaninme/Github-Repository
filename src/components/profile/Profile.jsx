import React, { useState } from "react";

export default function Profile() {
  const [isFollow, setIsFollow] = useState(false);
  const [followers, setFollowers] = useState(454);
  function handleFollowers() {
    isFollow ? setFollowers(followers - 1) : setFollowers(followers + 1);
    setIsFollow(!isFollow);
  }
  return (
    <div className="md:w-1/3 lg:w-1/5">
      <div className="flex items-center md:flex-col   ">
        <img
          src="https://avatars.githubusercontent.com/u/68688806?v=4"
          className="rounded-full w-2/12 md:w-full md:m-0  "
        />
        <div className="  p-4 ">
          <span className="text-[#1f2328] text-2xl  font-semibold">Mety</span>
          <p className="text-[#656D76] text-xl font-light  ">
            dumbmety . he/him
          </p>
        </div>
      </div>
      <div className=" text-sm mt-8">🧠</div>

      <div className="md:flex md:flex-col-reverse ">
        <div>
          <p className="text-base text-[#1F2328] font-normal font-sans  ">
            Intrested in Inovation
          </p>

          <div className="flex items-baseline mb-2 ">
            <a
              href="#"
              className="text-sm mt-3 
               font-semibold hover:text-[#0969DA]"
            >
              <i
                className="material-icons mr-1
           text-[#1F2328] text-lg
            hover:text-[#0969DA]  "
              >
                people_outline
              </i>
              <span className="text-sm "> {followers} </span>
              <span
                className=" font-normal text-sm mx-1 text-[#656D76] font-sans
               hover:text-[#0969DA] "
              >
                followers
              </span>
            </a>

            <a href="#" className="text-sm font-semibold ">
              <span className="text-sm hover:text-[#0969DA]">. 824 </span>
              <span
                className=" font-normal text-sm text-[#656D76] font-sans
               hover:text-[#0969DA] "
              >
                following
              </span>
            </a>
          </div>
        </div>

        <button
          className="bg-[#F6F8FA] text-[#656D76] text-base
          w-full font-normal 
          border-[#D5D8DB] border rounded-md hover:delay-300 md:delay-300
          my-2 py-1 px-2 hover:bg-[#F6F8FA] transition  ease-in-out duration-300
         "
          onClick={handleFollowers}
        >
          {isFollow ? "Unfollow" : "Follow"}
        </button>
      </div>
      <hr className="mt-2" />
    </div>
  );
}
