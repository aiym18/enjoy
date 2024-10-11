import React from "react";
import { useNavigate } from "react-router-dom";
import car from "../../assets/img/car.png";
import papir from "../../assets/img/papir.png";
import papir2 from "../../assets/img/papir2.png";
import { useDispatch, useSelector } from "react-redux";
import { categoryPro } from "../../redux/Slices/ProductSlice";

const ProductZwei = () => {
  const dispatch = useDispatch();
  const {category}=useSelector((s)=>s.productSl)
  const nav = useNavigate();
  return (
    <div className=" ">
      <div className="continer py-20 ">
        <div className=" flex items-center justify-center flex-col gap-20">
          <h1 className="text-[40px] text-white">PRODUCTS</h1>
          <div className="hover:scale-[1.1] duration-[.5s] flex items-center justify-center w-[40%] border-2 p-5 px-40 rounded-xl">
            <h1
              className="text-white  text-[30px]"
              onClick={() => {
                dispatch(categoryPro("men's clothing"));
                nav("/categoryproduct");
              }}
            >
              Men's clothing
            </h1>
          </div>
          <div className="hover:scale-[1.1] duration-[.5s] flex items-center justify-center w-[40%] border-2 p-5 px-40 rounded-xl">
            <h1
              onClick={() => {
                dispatch(categoryPro("women's clothing"));
                nav("/categoryproduct");
              }}
              className="text-white  text-[30px]"
            >
              Women's clothing
            </h1>
          </div>
          <div className="hover:scale-[1.1] duration-[.5s] flex items-center justify-center w-[40%] border-2 p-5 px-40 rounded-xl">
            <h1
              onClick={() => {
                dispatch(categoryPro("jewelery"));
                nav("/categoryproduct");
              }}
              className="text-white  text-[30px]"
            >
              Jewelery
            </h1>
          </div>
          <div className="hover:scale-[1.1] duration-[.5s] flex items-center justify-center w-[40%] border-2 p-5 px-40 rounded-xl">
            <h1
              onClick={() => {
                dispatch(categoryPro("electronics"));
                nav("/categoryproduct");
              }}
              className="text-white  text-[30px]"
            >
              {" "}
              Electronics
            </h1>
          </div>
          <div className=" mt-20 py-20 border-t-2  w-full border-white">
            <div className="flex items-center justify-center gap-60">
              <div className="flex items-center justify-center flex-col hover:scale-[1.1] duration-[.5s] gap-6">
                <img src={car} alt="" />
                <h1 className="text-[25px] text-white ">Free Shipping</h1>
              </div>
              <div className="flex items-center justify-center flex-col hover:scale-[1.1] duration-[.5s] gap-6">
                <img src={papir} alt="" />
                <h1 className="text-[25px] text-white ">Free Shipping</h1>
              </div>
              <div className="flex items-center justify-center flex-col hover:scale-[1.1] duration-[.5s] gap-6">
                <img src={papir2} alt="" />
                <h1 className="text-[25px] text-white ">Free Shipping</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductZwei;
