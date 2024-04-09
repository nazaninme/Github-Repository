import React, { useContext } from "react";
import { ShowContext } from "../../../../context/ShowContext";

export default function select({ typeElm }) {
  const { show, setShow } = useContext(ShowContext);
  function handleClose() {
    setShow(false);
  }
  return (
    <>
      <div
        className={`fixed top-0  right-0 left-0 bottom-0 z-10  bg-[#8e90937c]
         ${show ? "block" : "hidden"} `}
        onClick={handleClose}
      >
        <div
          className={"border rounded-lg border-[#A6ADB4] bg-[#FFFFFF] mt-28"}
        >
          <div
            className="flex border-b  justify-between font-semibold text-sm p-4
           text-[#1F2328]  "
          >
            <h5>Select type</h5>
            <button>
              <i
                className="material-icons font-normal text-sm text-[#656D76] "
                onClick={handleClose}
              >
                close
              </i>
            </button>
          </div>

          <ul>
            {typeElm.map((item, index) => {
              return (
                <li className="border-b px-4 hover:bg-[#ebedf0]" key={index}>
                  <input
                    type="checkbox"
                    name={item}
                    id={item}
                    className="focus:accent-white accent-white 
                      text-sm mr-0 my-4 text-[#1F2328]"
                  />
                  <label className="text-sm font-normal" htmlFor={item}>
                    {item}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
