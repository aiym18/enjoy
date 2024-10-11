import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketCart from "../BasketCart";
import cart from "../../assets/img/cart.webp";
import { removeAll } from "../../redux/Slices/BasketSlice";
import SubmitTelegtam from "../SubmitTelegram";

const Basket = () => {
  const { basket } = useSelector((s) => s.productBs);
  const dispatch = useDispatch();
  const TotalPrice = basket.reduce((acc, el) => {
    return acc + el.price * el.quantity;
  }, 0);
  console.log(basket, "uyugygu");
  return (
    <div className="py-14">
      <div className="container">
        {basket.length ? (
          <div cclassName="relative overflow-x-auto shadow-md  sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product Img
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {basket.map((el) => (
                  <BasketCart el={el} />
                ))}
              </tbody>
              <h1 className="text-[35px] text-white py-5">TotalPrice:{Math.trunc(TotalPrice)}$</h1>
            </table>
            <button
              onClick={() => dispatch(removeAll())}
              type="button"
              className=" text-white items-center justify-center ml-[700px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Remove All
            </button>
            <SubmitTelegtam/>
          </div>
        ) : (
          <div className="flex items-center justify-center py-32">
            <img src={cart} alt="" width={500} />

          </div>
        )}
        
      </div>
    </div>
  );
};

export default Basket;
