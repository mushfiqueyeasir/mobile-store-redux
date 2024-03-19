import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const ProductCard = ({ item, index }) => {
  const dispatch = useDispatch();
  const {cartData} = useSelector((state) => state.cart);
  const itemExists = cartData.some((cartItem) => cartItem.Title === item.Title);

  return (
    <article className="shadow-md rounded-md overflow-hidden border-2 h-full">
      <div>
        <img
          src={`/images/${index + 1}.png`}
          alt=""
          className="h-[20rem] object-cover w-full"
        />
      </div>
      <div className="p-4 bg-gray-100 h-full">
        <div>
          <h1 className="text-xl font-bold">
            {item.Title} ({item.Year})
          </h1>
          <p className="font-semibold">Price: ${item.Price}</p>
        </div>
        <div className="flex justify-end">
          {!itemExists ? (
            <button
              onClick={() => dispatch(addToCart(item))}
              className="btn bg-black text-white border-2 !border-black hover:bg-transparent hover:text-black duration-300 !font-bold"
            >
              Add to Cart
            </button>
          ) : (
            <div className="btn border-2 !border-orange-500 text-white bg-orange-500  !font-bold hover:bg-orange-500">
              Added
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
