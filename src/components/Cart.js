import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { EMPTY_CART } from "../utils/constants";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center pt-8 w-6/12 m-auto">
      <h1 className="text-xl font-bold">Cart</h1>
      <ItemList items={cartItems} />
      <button
        className="border border-black m-4 p-2 bg-blue-950 text-white rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>

      {cartItems.length === 0 && (
        <h1 className="text-rose-600">
          Your Cart is empty! Please add Items to your Cart.
        </h1>
        //<img src={EMPTY_CART} alt="Cart is Empty" />
      )}
    </div>
  );
};
export default Cart;
