import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  // <h2 id="title" key="h2">
  //   Food Villa
  // </h2>
  //anchor tag for if someone click image it will go on home page
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
    ></img>
  </a>
);

const HeadingComponent = () => {
  return (
    <div className="header">
      <Title></Title>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact us</li>
          <li>About us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};
// const kfc = {
//   name: "KFC",
//   image:
//     "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
//   cuisines: ["Burgers", "Snacks"],
//   rating: "3.9",
// };
const restlist = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "239200",
      name: "A2B - Adyar Ananda Bhavan",
      uuid: "32ae1582-4caa-403e-af5b-7a0d140db9c9",
      city: "1",
      area: "Whitefield",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "bgps9bd890sffcg3rjh1",
      cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 3.9000000953674316,
      slugs: {
        restaurant: "a2b---adyar-ananda-bhavan-whitefield-whitefield",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "No 710, Varthur Rd, Thubarahalli, Whitefield, Bengaluru, Karnataka 560066",
      locality: "Thubarahalli",
      parentId: 22,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹90 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹90 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5958709~p=1~eid=00000186-6e33-5308-1762-55be008b0120",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.9 kms",
      hasSurge: false,
      sla: {
        restaurantId: "239200",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 3.9000000953674316,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "363",
      name: "Meghana Foods",
      uuid: "b98bbbc7-7ca4-4aa9-867a-eb862a01efde",
      city: "1",
      area: "Marathahalli",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "yfyo8aklppbwdplv7ofp",
      cuisines: [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood",
      ],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 5,
      slugs: {
        restaurant: "meghana-foods-outer-ring-road-marathahalli",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "Above Sony Centre, Opposite Park Plaza, Outer Ring Road, Marathahalli",
      locality: "Outer Ring Road",
      parentId: 635,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹90 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹90 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "363",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "424658",
      name: "Asha Tiffins",
      uuid: "d79cd5d9-7158-45f1-a198-e563f0e46406",
      city: "1",
      area: "Aecs Layout",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "hpncnz3sfv3gigsukkts",
      cuisines: ["South Indian"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "29 MINS",
      lastMileTravel: 5,
      slugs: {
        restaurant: "asha-tiffins-marathahalli-marathahalli",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "#551,AECS Layout main road, 'B' Block AECS Layout,Opp.BBMP ward office,Marathahalli,Bangalore - 560037",
      locality: "B Block",
      parentId: 236243,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹90 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹90 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "424658",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.4",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "32171",
      name: "Orbis Restaurant",
      uuid: "46e319b2-158d-47eb-b781-a6f4c0f813ef",
      city: "1",
      area: "Whitefield",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "kqbjnmuamtxqw5k8udql",
      cuisines: [
        "North Indian",
        "Biryani",
        "Arabian",
        "Chinese",
        "Desserts",
        "Beverages",
      ],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 4.300000190734863,
      slugs: {
        restaurant: "orbis-restaurant-whitefield-whitefield",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "#147/1. Varathur kodi. Opp Columbia asia prestige ozone road. Whitefield main road. Bangalore",
      locality: "Varthur Kodi",
      parentId: 11184,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹90 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹90 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5887912~p=7~eid=00000186-6e33-5308-1762-55c0008b076b",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "32171",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 4.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "445762",
      name: "Burger King",
      uuid: "548856fe-2b3d-4d24-b572-a25eed551d9f",
      city: "1",
      area: "Doddanekundi",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "nt1itsfhqgnfcjkxbb7m",
      cuisines: ["Burgers", "American"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 38,
      minDeliveryTime: 38,
      maxDeliveryTime: 38,
      slaString: "38 MINS",
      lastMileTravel: 6.300000190734863,
      slugs: {
        restaurant: "burger-king-marathalli-kadugodi",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "burger king Kote MR Plaza, Anand Nagar, Sanjay Nagar, Chinnapanna Halli, Bengaluru, Karnataka 560037",
      locality: "Doddanekundi",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Get every item under 139",
        shortDescriptionList: [
          {
            meta: "Get every item under 139",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Get every item under 139",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Get every item under 139",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "445762",
        deliveryTime: 38,
        minDeliveryTime: 38,
        maxDeliveryTime: 38,
        lastMileTravel: 6.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
];
// const RestaurantCard = () => {

//   return (
//     <div className="card">
//       <img
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           restlist[0].data?.cloudinaryImageId
//         }
//       />
//       <h2>{restlist[0].data?.name}</h2>
//       <h3>{restlist[0].data?.cuisines.join(" ")}</h3>
//       <h4>{restlist[0].data?.lastMileTravel} minutes</h4>
//     </div>
//   );
// };
// const RestaurantCard = (props) => {

//   return (
//     <div className="card">
//       <img
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           props.restaurant.data?.cloudinaryImageId
//         }
//       />
//       <h2>{props.restaurant.data?.name}</h2>
//       <h3>{props.restaurant.data?.cuisines.join(" ")}</h3>
//       <h4>{props.restaurant.data.lastMileTravel} minutes</h4>
//     </div>
//   );
// };
// const RestaurantCard = ({ restaurant }) => {
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           restaurant.data?.cloudinaryImageId
//         }
//       />
//       <h2>{restaurant.data?.name}</h2>
//       <h3>{restaurant.data?.cuisines.join(" ")}</h3>
//       <h4>{restaurant.data.lastMileTravel} minutes</h4>
//     </div>
//   );
// };
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
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(" ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};
const Footer = () => {
  return <h4>footer</h4>;
};
// nokey(not accepted)<indexkey(lastoption)<unique key
//key must be given because multiple res card can be present
const Body = () => {
  return (
    <div className="rest-list">
      {restlist.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}

      {/* <RestaurantCard {...restlist[0].data} />
      {RestaurantCard({ ...restlist[1].data })}; */}
      {/* {<RestaurantCard restaurant={restlist[2]} />}
      {<RestaurantCard restaurant={restlist[3]} />}
      {<RestaurantCard restaurant={restlist[4]} />} */}
      {/* <h4>Body</h4> */}
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <HeadingComponent />
      <Body />

      <Footer />
    </>
  );
};
// const jsx=<h2>helllo</h2><h2>againn</h2>//invalid jsx only one parent allowed
// const jsx2 = (
//   <>        //or write <React.Fragment></React.Fragment>
//     <h2>helllo</h2>
//     <h2>againn</h2>
//   </>
// ); //We have to enclose inside div
// const styleobj = {
//   backgroundColor: "green",
// };
// const jsx2 = (
//   <div
//    style={styleobj}>
//     <h2>helllo</h2>
//     <h2>againn</h2>
//   </div>
// );//or use classname in div
// const HeadingComponent2 = () => (
//   <div>
//     {HeadingComponent()}
//     <h1>this is second heading in jsx</h1>
//   </div>
// );
// const HeadingComponent2 = () => (
//   <div>
//     {<HeadingComponent/>};<h1>this is second heading in jsx</h1> // another way of adding func comp
//   </div>
// );

// const HeadingComponent3 = function () {
//   return <h1>this is third heading in jsx</h1>;
// };
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />); //Rendering functional component
