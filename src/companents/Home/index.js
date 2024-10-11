import React from "react";
import homeimg from "../../assets/img/homeimg.png";
import { Link } from "react-router-dom";
import ProductZwei from "../ProductZwei";
import HelpSenter from "../HelpSenter";
const Home = () => {
  return (
    <div className="">
    <div className="container py-30">
      <div className=" flex items-center justify-center flex-col">
        <h1 className="text-white text-[39px]">Enjoy Every</h1>
        <img src={homeimg} alt="img" />
        <div className="flex items-center justify-center gap-[90px] text-[25px]">
            <button className="text-[#be3585] border-2 p-2 px-16 rounded-xl">Buy Now</button>
            <button className="text-white  border-2 p-2 px-10 rounded-xl">Explore More</button>
        </div>
      </div>
       
    </div>
    <h1 className="border-y text-white  my-20"></h1>
        <ProductZwei/>
        <HelpSenter/>
    </div>
  );
};

export default Home;
