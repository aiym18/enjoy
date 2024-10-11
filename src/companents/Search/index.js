import React from "react";
import { useSelector } from "react-redux";
import ProductCart from "../ProductCart";

const Search = () => {
  const { search } = useSelector((s) => s.productSl);
  // console.log(search,"lll");
  return (
    <div className="py-[60px]">
      <div className="container">
        <div className="">
          {search.map((el, idx) => (
            <ProductCart el={el} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
