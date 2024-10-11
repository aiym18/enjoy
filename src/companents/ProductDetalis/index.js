import React from "react";
import { useSelector } from "react-redux";

const ProductDetalis = () => {
  const { detalis } = useSelector((s) => s.productSl);
  return (
    <div className="py-[80px]">
      <div className="container">
        <div className="flex items-center justify-center gap-[90px]">
          <div className="p-[10px] bg-white rounded-xl w-[400px] h-[470px] flex items-center justify-center">
            <img className=" w-[250px]" src={detalis.image} alt="" />
          </div>
          <div className="p-[30px] bg-gray-400 rounded-xl w-[700px] h-[490px]bg-transparent">
            <h1 className="text-[35px] text-white">{detalis.title}</h1>
            <p className="text-[15px] my-16 text-white"> {detalis.description}</p>
            <div className=" flex items-center justify-between">
              <h1 className="text-[25px] text-white">{detalis.category}</h1>
              <h1 className="text-[25px] text-white">{detalis.price}$</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetalis;
