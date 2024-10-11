import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="  py-20 border-y border-white">
      <div className="container">
        <div className="flex items-center justify-center flex-col gap-10">
          <h2 className="text-[20px] text-white">Let’s get Social</h2>
          <div className=" flex items-center justify-center gap-20">
            <a className=" text-white text-[40px]">
              <CiLinkedin />
            </a>
            <a className=" text-white text-[40px]">
              <BsInstagram />
            </a>
            <a className=" text-white text-[40px]">
              <FcGoogle />
            </a>
            <a className=" text-white text-[40px]">
              <FiYoutube />
            </a>
            <a className=" text-white text-[40px]">
              <AiOutlineFacebook />
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 text-white ">
            <h1 className="text-[20px] text-white">Privacy Policy </h1>
             <a className="text-[40px] text-white">•</a> 
            <h2 className="text-[20px] text-white">Terms & Conditions</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
