import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunComponent from "./Profile";
import { Component } from "react";

// const About2 = () => {
//   return (
//     <div>
//       <h1>This is about page</h1>;<p>this is live course finding the path</p>
//       <ProfileFunComponent name={"Swapnil"} />
//       {/* <Outlet/>// this can also be used for profile Component */}
//       <Profile name={"Swapnil from class"} />
//     </div>
//   );
// };
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor called");
  }
  componentDidMount() {
    console.log("Parent Component did mount called");
  }

  render() {
    console.log("Parent render called");
    return (
      <div>
        <h1>This is about page</h1>;<p>this is live course finding the path</p>
        <ProfileFunComponent name={"Swapnil"} />
        {/* <Outlet/>// this can also be used for profile Component */}
        {/* <Profile name={"first child"} /> */}
        {/* <Profile name={"Second child"} /> */}
      </div>
    );
  }
}
export default About;
