import { Img_CDN } from "../Constants";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  user,
}) => {
  // const { name, cuisines, cloudinaryImageId, lastMileTravelString } =
  //   restaurant.data;
  return (
    <div className="card w-48 p-2 m-5 bg-pink-50 shadow-lg">
      <img src={Img_CDN + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(" ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
      <h4>{user.name}</h4>
    </div>
  );
};
export default RestaurantCard;
