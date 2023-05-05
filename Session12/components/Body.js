import { createContext, useEffect, useState } from "react";
import { restlist } from "../Constants.js";
import RestaurantCard from "./RestaurantCard.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import { filterdata } from "./Utils/Helper.js";
// import { render } from "react-dom";
import useOnline from "./Utils/useOnline.js";
import { useContext } from "react";
import userContext from "./Utils/userContext.js";

const Body = () => {
  // let searchtext = "Burger King"; //this wont work so we have to create react kind of variable
  //searchtext is local state variable
  // const [SearchInput, SetSearchInput] = useState("Burger King"); //burger king is default value, usestate return variable, function to use variable use set with var name as convention
  const [SearchInput, SetSearchInput] = useState("");
  // const [restaurants, SetRestaurants] = useState(restlist);
  const [Filteredrestaurants, SetFilteredRestaurants] = useState([]);
  const [Allrestaurants, SetAllRestaurants] = useState([]);
  const { user, setuser } = useContext(userContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0200494&lng=77.6457698&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    SetFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    SetAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  // if (Allrestaurants == 0) return null;
  // if (Filteredrestaurants == 0)
  //   return <h1>No Restaurants matches your search</h1>;
  // console.log("render");
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Please check your internet connection</h1>;
  }
  return Allrestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-6">
        <input
          type="text"
          className="focus:bg-green-200 p-2 m-2 "
          placeholder="search"
          value={SearchInput}
          onChange={(e) => {
            SetSearchInput(e.target.value); //e.target.value whatever input you give SetSearchInput is provided by hook
            // searchtext = e.target.value; // modifying our search value, this wont work
          }}
        />
        {/* <h1>{SearchClicked}</h1> */}
        <button
          className="search-button p-2 m-2 bg-purple-800 text-white rounded-sm h-9 hover:bg-pink-200"
          onClick={() => {
            //need to filter data and update the state restaurants
            data = filterdata(SearchInput, Allrestaurants);
            //after getting data we have to update restaurant
            SetFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setuser({
              name: e.target.value,
              email: "newemail@gmail.com",
            })
          }
        ></input>
      </div>
      <div className="flex flex-wrap">
        {Filteredrestaurants.map((restaurant) => {
          return (
            <Link
              to={"Restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} user={user} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
//1.we are passing props user in prop drilling but we have modify 3 places and this not required in unnecessary place so this not good way
//2.lot of component which are using prop will get rerendered
