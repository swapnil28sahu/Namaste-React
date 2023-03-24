import { Img_CDN } from "../Constants";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  // const { name, cuisines, cloudinaryImageId, lastMileTravelString } =
  //   restaurant.data;
  return (
    <div className="card">
      <img src={Img_CDN + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(" ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};
export default RestaurantCard;
