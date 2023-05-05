import { useState } from "react";
import { useEffect } from "react";
const useRestaurant = (id) => {
  const [Restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestuarantinfo();
  }, []);
  async function getRestuarantinfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        id +
        "&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data?.cards[0]?.card?.card?.info);
  }
  return Restaurant;
};
export default useRestaurant;
