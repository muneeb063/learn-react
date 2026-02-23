import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    //dispatch an action to clear the cart
    dispatch(clearCart());
  };

  return (
    <div data-testid="cart" className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 bg-black text-white rounded-lg mb-4 cursor-pointer"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <p>Your cart is empty.</p>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
