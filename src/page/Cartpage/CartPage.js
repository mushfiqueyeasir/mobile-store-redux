import React from "react";
import { GrStorage } from "react-icons/gr";
import CartHead from "../../components/Cart/CartHead";
import CartBody from "../../components/Cart/CartBody";
import { useSelector } from "react-redux";

const CartPage = () => {
  const {cartData} = useSelector((state) => state.cart);
  return (
    <section className="container mx-auto py-10">
      <div className="overflow-x-auto">
        <table className="table">
          <CartHead />
          <tbody>
            {cartData.map((item, index) => (
              <CartBody key={index} data={item} index={index} />
            ))}
          </tbody>
        </table>
        {cartData.length === 0 && (
          <div className="border-2  w-full h-60 border-dashed mt-6 flex justify-center items-center">
            <div className="text-4xl flex flex-col items-center">
              <GrStorage />
              <h1 className="text-2xl font-bold">No Data</h1>
            </div>
          </div>
        )}
      </div>

      <div className="flex md:justify-end p-4">
        <div className="md:max-w-[20rem] flex justify-between w-full">
          <h1 className="text-2xl font-bold">Total</h1>
          <h1 className="text-2xl font-bold">
            $
            {cartData.reduce(
              (total, phone) => total + parseFloat(phone.Price),
              0
            )}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
