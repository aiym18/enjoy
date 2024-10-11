import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { productDetale } from "../../redux/Slices/ProductSlice";
import { productBasket } from "../../redux/Slices/BasketSlice";

const ProductCart = ({ el }) => {
  const dispatch = useDispatch();

  return (
    <div className=" w-[22%] bg-white h-[400px] rounded-[20px] flex items-center justify-center flex-col text-center">
      <Link to={"/productDelalis"}>
        <img
          onClick={() => dispatch(productDetale(el.id))}
          src={el.image}
          alt="img"
          className="w-[250px] object-contain h-[250px]"
        />
      </Link>

      <div className=" flex items-start px-[30px] py-[10px] justify-between w-full mt-[30px] border-t-2 border-black">
        <div className="text-left">
          <h1 className="text-[17px] font-bold">{el.title.slice(0, 10)}</h1>
          <h1>{el.rating.rate}</h1>
        </div>
        <div className=" text-right">
          <h1 
          onClick={()=>dispatch(productBasket(el))}
          className="cursor-pointer text-[#d13d56]">Add To Cart</h1>
          <h1>{el.price}$</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
