import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center shadow-lg bg-pink-200 ">
      <div className="logo-container">
        <img className="w-2/12" src={LOGO_URL} />
      </div>
      <div className="nav-flex">
        <ul className="flex m-5 px-4 font-bold text-xl">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart - ({cartItems.length} Items)</Link>
          </li>
          <li className="px-4">
            <Link to="/demo">Demo</Link>
          </li>
          <button
            className="border border-solid border-black py-2 px-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
            onClick={() =>
              btnLogin === "Login"
                ? setBtnLogin("Logout")
                : setBtnLogin("Login")
            }
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
