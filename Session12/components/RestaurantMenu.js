import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Img_CDN } from "../Constants";
import Shimmer from "./Shimmer";
import useRestaurant from "./Utils/useRestaurant";
import useRestmenu from "./Utils/useRestmenu";
import { addItem } from "./Utils/cartSlice.js";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  const { id } = useParams(); //use param is hook,id should be also there in path, as whatever passed from path comes in param
  const restaurant = useRestaurant(id);
  const restmenu = useRestmenu(id);
  const dispatch = useDispatch();
  // const handleAddItem = () => {
  //   dispatch(addItem("Grapes"));
  // };
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  if (!restaurant) {
    return <Shimmer />;
  }
  // if (!restmenu) {
  //   return <Shimmer />;
  // }

  return (
    <div className="flex">
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
      {/* <div>
        <button
          className="p-2 m-5 bg-slate-500"
          onClick={() => handleAddItem()}
        >
          Add Item
        </button>
      </div> */}
      <div className="p-5">
        <h1>Menu</h1>
        <ul>
          {restmenu?.map((i) => (
            <li key={i.card.info.id}>
              {i?.card?.info?.name}-
              <button
                className="p-1 bg-green-50"
                onClick={() => addFoodItem(i.card.info)}
              >
                Add Item
              </button>
            </li>
          ))}
        </ul>
        {/* {console.log(restmenu.itemCards)} */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
