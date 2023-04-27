import { useState } from "react";
import { useEffect } from "react";
const useRestmenu = (id) => {
  const [restmenu, setRestmenu] = useState([]);
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
    //setRestaurant(json.data?.cards[0]?.card?.card?.info);
    setRestmenu(
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    // console.log(restmenu);
  }
  return restmenu;
};
export default useRestmenu;
