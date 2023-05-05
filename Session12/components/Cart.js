import { useDispatch, useSelector } from "react-redux";
import store from "./Utils/store";
import FoodItem from "./FoodItem.js";
import { clearCart } from "./Utils/cartSlice.js";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleclearcart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="text-2xl font bold">Cart Items-{cartItems.length}</h1>
      <button className="bg-gray-600 p-2 m-2" onClick={() => handleclearcart()}>
        Clear Cart
      </button>
      {cartItems.map((item) => (
        <FoodItem key={item.id} {...item} />
      ))}
    </div>
  );
};
export default Cart;
