import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Img_CDN } from "../Constants";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const { id } = useParams(); //use param is hook,id should be also there in path, as whatever passed from path comes in param
  useEffect(() => {
    getRestuarantinfo();
  }, []);
  const [restaurant, setRestaurant] = useState(null);
  const [restmenu, setRestmenu] = useState([]);

  async function getRestuarantinfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        id +
        "&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data?.cards[0]?.card?.card?.info);
    setRestmenu(
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    console.log(restmenu);
  }
  if (!restaurant) {
    return <Shimmer />;
  }
  // if (!restmenu) {
  //   return <Shimmer />;
  // }

  return (
    <div className="menu">
      <div>
        <h3>Restaurant id: {id}</h3>
        <h2>Welcome to this restaurant </h2>
        <img src={Img_CDN + restaurant.cloudinaryImageId}></img>
        <h3>{restaurant.name}</h3>
        <h3>{restaurant.areaName}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating}</h3>
        <h3>{restaurant.costForTwoMessage}</h3>
      </div>

      <div>
        <h1>Menu</h1>
        <ul>
          {restmenu.map((i) => (
            <li key={i.card.info.id}>{i?.card?.info?.name}</li>
          ))}
        </ul>
        {/* {console.log(restmenu.itemCards)} */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
