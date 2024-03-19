import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cart/cartSlice";
const CartBody = ({ data, index }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <ProductView data={data} />
      </td>
      <td>
        <h2 className="text-lg font-semibold text-center w-[5rem]">1</h2>
      </td>
      <td>
        <h2 className="text-lg font-semibold">${data.Price}</h2>
      </td>
      <td>
        <button
          onClick={() => dispatch(removeFromCart(data))}
          className="text-xl text-red-500 p-3 rounded-lg bg-red-100 hover:scale-[0.9] duration-300"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default CartBody;

const ProductView = ({ data }) => {
  let lastChar = parseInt(data.Title.charAt(data.Title.length - 1));

  return (
    <div className="flex gap-x-2 min-w-[20rem]">
      <img
        src={`/images/${lastChar}.png`}
        alt=""
        className="w-40 h-20 object-cover border-2 rounded-md"
      />
      <h1 className="text-xl font-semibold ">
        {data.Title} ({data.Year})
      </h1>
    </div>
  );
};
