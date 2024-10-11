import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/Slices/ProductSlice";

const AddProduct = () => {
  const { product } = useSelector((s) => s.productSl);
  const [productImg, setProductImg] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productRating, setProductRating] = useState("");
  const dispatch = useDispatch;
  
  const CreateProduct = () => {
    if (
      productImg.trim() === "" ||
      productName.trim() === "" ||
      productPrice.trim() === ""
    ) {
      alert("arror");
    } else {
      let newProduct = {
        id: Date.now(),
        url: productImg,
        title: productName,
        price: productPrice,
        rating: productRating,
      };
      setProductImg("");
      setProductName("");
      setProductPrice("");
      return dispatch(addProduct(newProduct));
    }
  };
  return (
    <div className="py-[60px]">
      <div className="container">
        <div className="  w-full flex  items-center justify-center flex-col  gap-9">
          <input
            onChange={(e) => setProductImg(e.target.value)}
            value={productImg}
            className="py-2 px-0 38 text-white text-[24px] w-[400px] bg-transparent border-b-2 outline-none "
            type="text"
            placeholder="Product Img"
          />
          <input
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
            className="py-2 px-0 38 text-white text-[24px] w-[400px] bg-transparent border-b-2 outline-none"
            type="text"
            placeholder="Product Name"
          />

          <input
            onChange={(e) => setProductPrice(e.target.value)}
            value={productPrice}
            className="py-2 px-0 38 text-white text-[24px] w-[400px] bg-transparent border-b-2 outline-none"
            type="text"
            placeholder="Product Price"
          />
          <input
            onChange={(e) => setProductRating(e.target.value)}
            value={productRating}
            className="py-2 px-0 38 text-white text-[24px] w-[400px] bg-transparent border-b-2 outline-none"
            type="text"
            placeholder="Product Rating"
          />

          <button
            onClick={() => CreateProduct()}
            className=" py-2 px-10 bg-white  text-black text-[18px] rounded-lg "
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
