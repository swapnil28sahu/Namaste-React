import { useContext } from "react";
import userContext from "./Utils/userContext.js";

const Footer = () => {
  const { user } = useContext(userContext);
  return (
    <h4 className="p-10 m-10">
      This site is developed by {user.name}-{user.email}
    </h4>
  );
};

export default Footer;
