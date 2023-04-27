import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Img_CDN } from "../Constants";
import Shimmer from "./Shimmer";
import useRestaurant from "./Utils/useRestaurant";
import useRestmenu from "./Utils/useRestmenu";
const RestaurantMenu = () => {
  const { id } = useParams(); //use param is hook,id should be also there in path, as whatever passed from path comes in param
  const restaurant = useRestaurant(id);
  const restmenu = useRestmenu(id);
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
          {restmenu?.map((i) => (
            <li key={i.card.info.id}>{i?.card?.info?.name}</li>
          ))}
        </ul>
        {/* {console.log(restmenu.itemCards)} */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
