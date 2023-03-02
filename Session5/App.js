import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import { Img_CDN, restlist } from "./Constants.js";
import RestaurantCard from "./components/RestaurantCard.js";
// import { title } from "./components/Header.js";Named import
// import * will import all named import  it will be written as import * as obj then use obj.title to access  ,import Header is default one so no need of bracket

// const kfc = {
//   name: "KFC",
//   image:
//     "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
//   cuisines: ["Burgers", "Snacks"],
//   rating: "3.9",
// };

// const RestaurantCard = () => {

//   return (
//     <div className="card">
//       <img
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           restlist[0].data?.cloudinaryImageId
//         }
//       />
//       <h2>{restlist[0].data?.name}</h2>
//       <h3>{restlist[0].data?.cuisines.join(" ")}</h3>
//       <h4>{restlist[0].data?.lastMileTravel} minutes</h4>
//     </div>
//   );
// };
// const RestaurantCard = (props) => {

//   return (
//     <div className="card">
//       <img
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           props.restaurant.data?.cloudinaryImageId
//         }
//       />
//       <h2>{props.restaurant.data?.name}</h2>
//       <h3>{props.restaurant.data?.cuisines.join(" ")}</h3>
//       <h4>{props.restaurant.data.lastMileTravel} minutes</h4>
//     </div>
//   );
// };
// const RestaurantCard = ({ restaurant }) => {
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           restaurant.data?.cloudinaryImageId
//         }
//       />
//       <h2>{restaurant.data?.name}</h2>
//       <h3>{restaurant.data?.cuisines.join(" ")}</h3>
//       <h4>{restaurant.data.lastMileTravel} minutes</h4>
//     </div>
//   );
// };

// nokey(not accepted)<indexkey(lastoption)<unique key
//key must be given because multiple res card can be present

const AppLayout = () => {
  return (
    <>
      <Header />

      <Body />

      <Footer />
    </>
  );
};
// const jsx=<h2>helllo</h2><h2>againn</h2>//invalid jsx only one parent allowed
// const jsx2 = (
//   <>        //or write <React.Fragment></React.Fragment>
//     <h2>helllo</h2>
//     <h2>againn</h2>
//   </>
// ); //We have to enclose inside div
// const styleobj = {
//   backgroundColor: "green",
// };
// const jsx2 = (
//   <div
//    style={styleobj}>
//     <h2>helllo</h2>
//     <h2>againn</h2>
//   </div>
// );//or use classname in div
// const HeadingComponent2 = () => (
//   <div>
//     {HeadingComponent()}
//     <h1>this is second heading in jsx</h1>
//   </div>
// );
// const HeadingComponent2 = () => (
//   <div>
//     {<HeadingComponent/>};<h1>this is second heading in jsx</h1> // another way of adding func comp
//   </div>
// );

// const HeadingComponent3 = function () {
//   return <h1>this is third heading in jsx</h1>;
// };
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />); //Rendering functional component
