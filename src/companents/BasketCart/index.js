import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineDelete } from "react-icons/md";
import { decrementQuantity, deletePoduct, productBasket } from "../../redux/Slices/BasketSlice";

const BasketCart = ({ el }) => {
  const { basket } = useSelector((s) => s.productBs);
  const dispatch = useDispatch()
  return (
    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img src={el.image} alt="" width={100} />
      </th>
      <td class="px-6 py-4 text-[20px]">{el.title.slice(0,16)}</td>
      <td class="px-6 py-4 text-[20px]">{el.category}</td>
      <td class="px-6 py-4 text-[20px] flex items-center justify-center mt-[45px] gap-6 ">
        <h1 
        onClick={()=>dispatch(decrementQuantity(el))}
        className="cursor-pointer">-</h1>
        <h3>{el.quantity}</h3>
        <h1 onClick={()=>dispatch(productBasket(el))} className="cursor-pointer">+</h1>
      </td>
      <td class="px-6 py-4 text-[20px]">{Math.round(el.price*el.quantity)}$</td>
      <td class="px-6 py-4">
        <a
        onClick={()=>dispatch(deletePoduct(el.id))}
          href="#"
          class="font-medium text-red-600 dark:text-red-500 hover:underline text-[30px]"
        >
          <MdOutlineDelete />
        </a>
      </td>
     
    </tr>
    
  );
};

export default BasketCart;
