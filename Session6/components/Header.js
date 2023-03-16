// import { useState } from "react";

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
  // const [title, setTitle] = useState("food villa");
  return (
    <div className="header">
      <Title />
      {/* <h1>{title}</h1>
      <button onClick={() => setTitle("New Food App")}>Change Title</button> */}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact us</li>
          <li>About us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
