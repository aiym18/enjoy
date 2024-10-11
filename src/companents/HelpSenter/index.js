import React from "react";
import medchen from "../../assets/img/helpsentrimg.png"

const HelpSenter = () => {
  return (
    <div className="py-20 border-y border-white">
      <div className="container">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-white text-[90px]">HELP CENTRE</h1>
          <div className=" flex items-center justify-center gap-12 ">
            <div className=" flex items-center justify-center gap-12 flex-col">
            <button className="text-white text-[30px] border-2 p-2 px-16 rounded-xl">
              Track Your Order
            </button>
            <button className="text-white text-[30px] border-2 p-2 px-16 rounded-xl">
              Track Your Order
            </button>
            <button className="text-white text-[30px] border-2 p-2 px-16 rounded-xl">
              Track Your Order
            </button>
            <button className="text-white text-[30px] border-2 p-2 px-16 rounded-xl">
              Track Your Order
            </button>
            </div>
            <div className="">
                <img src={medchen} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSenter;
