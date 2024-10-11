import React, { useDeferredValue } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LuLogOut } from "react-icons/lu";
import { logOut } from "../../redux/Slices/AdminSlice";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const { user } = useSelector((s) => s.userSl);
  const dispatch = useDispatch()
  const nav = useNavigate()
  return (
    <div id="">
      <div className="container">
        <div className="flex items-start justify-between w-[60%] mx-auto use py-10 px-16 rounded-xl relative ">
          <img src={user.url} alt="img" width={300} />
          <div className="">
            <h1 className="text-white text-[35px]">{user.name}</h1>
            <h1 className="text-white text-[35px]">{user.email}</h1>
            <h1 className="text-white text-[35px]">{user.mobile}</h1>
          </div>
          <a 
          onClick={()=>{
            dispatch(logOut())
            nav("/")
          }}
          className=" absolute bottom-2 right-2 text-white text-[30px]">
            <LuLogOut />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogOut;
