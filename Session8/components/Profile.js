import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("print from fun comp");
    }, 1000);
    console.log("useeffect");
    return () => {
      clearInterval(timer);
      console.log("use effect return");
    };
  }, []);
  console.log("render");

  return (
    <div>
      <h2>Profile componenet</h2>
      <h3>Name:{props.name}</h3>
      <h3>count:{count}</h3>
      <button onClick={() => setCount(1)}>Count</button>
    </div>
  );
};
export default Profile;
