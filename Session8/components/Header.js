import { useState } from "react";
import { Link } from "react-router-dom";
// const loggedinuser = () => {
//   return false;
// };
const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
    ></img>
  </a>
);
const Header = () => {
  const [isloggedin, setisloggedin] = useState(false);
  return (
    <div className="header">
      <Title />
      {/* <h1>{title}</h1>
      <button onClick={() => setTitle("New Food App")}>Change Title</button> */}
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <Link to="/about">
            <li>About us</li>
          </Link>
          <Link to="/contact">
            <li>Contact us</li>
          </Link>
          <li>cart</li>
        </ul>
      </div>
      {isloggedin ? (
        <button onClick={() => setisloggedin(false)}>logout</button>
      ) : (
        <button onClick={() => setisloggedin(true)}>login</button>
      )}
    </div>
  );
};
export default Header;
