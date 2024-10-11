import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuUserCircle2 } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../../redux/Slices/ProductSlice";
import { FaPlus } from "react-icons/fa6";


const Header = () => {
  const { user } = useSelector((s) => s.userSl);
  const [productSearch, setProductSearch] = useState("");
  const dispatch = useDispatch();
  // console.log(user, "sd");
  return (
    <div className="header p-10 ">
      <div className="container">
        <div className=" flex items-center justify-end">
          <div className="flex items-center justify-between text-white gap-10 border-2 p-2 text-[25px] rounded-xl px-10">
            <Link to={"/"}>Home</Link>
            <Link to={Object.keys(user).length ? "/productst" : "/"}>
              Productst
            </Link>
            <Link to={"/helpsenter"}>HelpSenter</Link>
            <h1 className="ml-[50px] text-2xl text-white font-medium">
              {user.name}
            </h1>
            {user.url ? (
              <Link to={"logOut"}>
                <img src={user.url} alt="img" width={30} />
              </Link>
            ) : (
              <Link to={"/admin"} className="flex items-center gap-10">
                <LuUserCircle2 />
              </Link>
            )}
          </div>

          <div className="flex items-center justify-between text-white gap-10 text-[30px] mx-28 ">
            <input
              onChange={(e) => setProductSearch(e.target.value)}
              className="text-[25px] outline-none border-2  rounded-xl py-1 px-5 border-white text-white bg-transparent"
              type="text"
              value={productSearch}
              placeholder="search "
            />
            <Link
              onClick={() => {
                dispatch(searchProduct(productSearch));
                setProductSearch("");
              }}
              to={"/search"}
            >
              <IoIosSearch />
            </Link>
            <Link to={"/basket"}>
              <IoCartOutline />
            </Link>
            <Link to={"/addProduct"}>
              <FaPlus />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
