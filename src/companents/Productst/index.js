import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, sortProduct } from "../../redux/Slices/ProductSlice";
import ProductCart from "../ProductCart";

const Products = () => {
  const { product } = useSelector((s) => s.productSl);
  const dispatch = useDispatch();

  const productFetch = async () => {
    let res = await axios(`https://fakestoreapi.com/products`);
    let { data } = res;

    return dispatch(getProduct(data));
  };
  console.log(product, "kk");
  useEffect(() => {
    productFetch();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="">
          <select className="text-[25px] bg-transparent text-white p-5 outline-none"
          onChange={(e)=>dispatch(sortProduct(e.target.value))}>
            <option value="" selected>
              Rating
            </option>
            <option value="5">1-5</option>
            <option value="1">5-1</option>
          </select>
          <div className="flex flex-wrap items-center justify-center gap-[30px]">
            {product.map((el, ind) => (
              <ProductCart el={el} ind={ind} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
