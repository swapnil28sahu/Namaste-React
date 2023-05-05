import { Img_CDN } from "../Constants";
import { useContext } from "react";
import userContext from "./Utils/userContext.js";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  const { user } = useContext(userContext);
  // const { name, cuisines, cloudinaryImageId, lastMileTravelString } =
  //   restaurant.data;
  return (
    <div className="card w-48 p-2 m-5 bg-pink-50 shadow-lg">
      <img src={Img_CDN + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(" ")}</h3>
      <h4>{lastMileTravelString} </h4>
      <h4 className="font-bold">
        {user.name}-{user.email}
      </h4>
    </div>
  );
};
export default RestaurantCard;
