import { Img_CDN } from "../Constants";

const FoodItem = ({ name, description, imageId, price }) => {
  // const { user } = useContext(userContext);
  // const { name, cuisines, cloudinaryImageId, lastMileTravelString } =
  //   restaurant.data;
  return (
    <div className="card w-48 p-2 m-5 bg-pink-50 shadow-lg">
      <img src={Img_CDN + imageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4>Rs:{price / 100} </h4>
      {/* <h4 className="font-bold">
        {user.name}-{user.email}
      </h4> */}
    </div>
  );
};
export default FoodItem;
