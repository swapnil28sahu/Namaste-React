import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "./Utils/userContext.js";
import { useSelector } from "react-redux";

// const loggedinuser = () => {
//   return false;
// };
const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2"
      alt="logo"
      src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
    ></img>
  </a>
);
const Header = () => {
  const [isloggedin, setisloggedin] = useState(false);
  const { user } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-200 shadow-lg">
      <Title />
      {/* <h1>{title}</h1>
      <button onClick={() => setTitle("New Food App")}>Change Title</button> */}
      <div className="nav-items">
        <ul className="flex py-12 ">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <Link to="/about">
            <li className="px-2">About us</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact us</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="px-2">cart-{cartItems.length}items</li>
          </Link>
        </ul>
      </div>
      <span className="p-10 text-blue-600 font-bold">{user.name}</span>
      {isloggedin ? (
        <button onClick={() => setisloggedin(false)}>logout</button>
      ) : (
        <button onClick={() => setisloggedin(true)}>login</button>
      )}
    </div>
  );
};
export default Header;
