import React, { useContext } from "react";
import { RepositoriesContext } from "../../context/RepositoriesContext";

export default function Repositories() {
  const { state, setState, tem, setTem } = useContext(RepositoriesContext);

  const colorLanguage = {
    JavaScript: "yellow",
    HTML: "red",
    TypeScript: "blue",
    null: "hidden",
  };

  return (
    <>
      <div>
        <ul>
          {tem.map((item) => {
            return (
              <li key={item.id} className="border-b mb-6 ">
                <div className="flex gap-2 items-center">
                  <a href="#" className="text-xl font-semibold text-[#0969DA]">
                    <p> {item.name}</p>
                  </a>
                  <span
                    className="border rounded-xl px-2 font-medium ml-1
                   text-xs text-[#656D76]"
                  >
                    {item.visibility}
                  </span>
                </div>
                <div className="flex">
                  <p className="text-[#656D76] font-normal text-sm py-1">
                    {item.description}
                  </p>
                  <div className="flex justify-end ">
                    <button
                      className="border  text-[#24292F] text-xs font-medium px-3 py-1
                   rounded-md flex  items-center gap-2  bg-[#F6F8FA]"
                    >
                      <i className="material-icons text-base mr-2 font-semibold text-[#656d76]">
                        star_border
                      </i>
                      <span className="text-sm  text-[#24292F]">star</span>
                      <i className="material-icons border-l text-base ">
                        arrow_drop_down
                      </i>
                    </button>
                  </div>
                </div>
                <div className="flex-wrap h-8 overflow-hidden items-center">
                  {item.topics.map((item) => {
                    return (
                      <a
                        href="#"
                        className="text-xs font-medium bg-[#DDF4FF] text-[#0969DA]
                      px-3 py-1 my-1 mr-1 rounded-2xl leading-6 border-solid border "
                      >
                        {item}
                      </a>
                    );
                  })}
                </div>

                <div className="flex gap-4 text-xs items-center ">
                  <span className="text-[#656D76] text-xs ">
                    <i
                      className={`fa fa-circle ${colorLanguage[item.language]}`}
                    ></i>
                    {item.language}
                  </span>
                  <span className="flex items-center">
                    <i className="material-icons text-[#2a5f9d] text-sm ">
                      star_border
                    </i>
                    {item.stargazers_count}
                  </span>
                  <span>
                    <i className="fa fa-code-fork text-[#656D76] text-l"></i>
                    {item.forks_count}
                  </span>
                  <span className=" text-[#656D76] text-sm ">updates</span>
                </div>
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
