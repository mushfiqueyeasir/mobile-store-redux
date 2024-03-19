import React from "react";
import Menu from "./Menu";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = ({ menu }) => {
  const {cartData} = useSelector((state) => state.cart);
  return (
    <nav className="bg-base-200 sticky top-0">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box min-w-52"
            >
              <Menu menu={menu} />
            </ul>
          </div>
          <Link to="/" className=" text-2xl font-bold">
            R<span className="text-red-500">B</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Menu menu={menu} />
          </ul>
        </div>
        <div className="navbar-end py-4">
          <div className="indicator">
            <span className="indicator-item badge bg-black text-white w-6 h-6 ">
              {cartData.length}
            </span>
            <Link
              to="cart"
              className=" text-xl p-2 bg-orange-500 hover:bg-orange-600 duration-300 rounded-lg text-white"
            >
              <BsFillCartFill />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
