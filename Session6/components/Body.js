import { useEffect, useState } from "react";
import { restlist } from "../Constants.js";
import RestaurantCard from "./RestaurantCard.js";
import { useState } from "react";
import Shimmer from "./Shimmer.js";
// import { render } from "react-dom";
function filterdata(SearchInput, restaurants) {
  const filterdata = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(SearchInput)
  );
  return filterdata;
}
const Body = () => {
  // let searchtext = "Burger King"; //this wont work so we have to create react kind of variable
  //searchtext is local state variable
  // const [SearchInput, SetSearchInput] = useState("Burger King"); //burger king is default value, usestate return variable, function to use variable use set with var name as convention
  const [SearchInput, SetSearchInput] = useState("");
  // const [restaurants, SetRestaurants] = useState(restlist);
  const [Filteredrestaurants, SetFilteredRestaurants] = useState([]);
  const [Allrestaurants, SetAllRestaurants] = useState([]);
  // const [SearchClicked, SetSearchClicked] = useState("false");
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
  if (Allrestaurants == 0) return null;
  if (Filteredrestaurants == 0)
    return <h1>No Restaurants matches your search</h1>;
  // console.log("render");
  return Allrestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={SearchInput}
          onChange={(e) => {
            SetSearchInput(e.target.value); //e.target.value whatever input you give SetSearchInput is provided by hook
            // searchtext = e.target.value; // modifying our search value, this wont work
          }}
        />
        {/* <h1>{SearchClicked}</h1> */}
        <button
          className="search-button"
          onClick={() => {
            //need to filter data and update the state restaurants
            data = filterdata(SearchInput, Allrestaurants);
            //after getting data we have to update restaurant
            SetFilteredRestaurants(data);
            // if (SearchClicked == "true") {
            //   SetSearchClicked("false");
            // } else {
            //   SetSearchClicked("true");
            // }
          }}
        >
          search
        </button>
      </div>
      <div className="rest-list">
        {Filteredrestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
