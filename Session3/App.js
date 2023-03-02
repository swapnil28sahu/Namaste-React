import React from "react";
import ReactDOM from "react-dom/client";
// const heading1 = React.createElement(
//   "h1",

//   { id: "any1", key: "first" }, //adding key in prop to avoid error

//   "print this 1st"
// );
// //console.log(heading1);
// const heading2 = React.createElement(
//   "h2",

//   { id: "any2", key: "second" }, // adding key in prop to avoid error

//   "print this 2nd"
// );
// const container = React.createElement(
//   "div",

//   { id: "contains" },

//   [heading1, heading2]
// );
const heading = (
  <h1>
    {console.log("inside jsx")}
    this is heading in jsx
  </h1>
);
const HeadingComponent = () => {
  return <h1>this is first heading in jsx</h1>;
};
const HeadingComponent2 = () => (
  <div>
    {heading};{HeadingComponent()};<h1>this is second heading in jsx</h1>
  </div>
);
// const HeadingComponent2 = () => (
//   <div>
//     {<HeadingComponent/>};<h1>this is second heading in jsx</h1> // another way of adding func comp
//   </div>
// );

const HeadingComponent3 = function () {
  return <h1>this is third heading in jsx</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading); //Rendering React element
root.render(<HeadingComponent2 />); //Rendering functional component
//root.render(HeadingComponent2()); //Rendering functional component
// console.log(container);
