"use client";
import { useCartStore } from "@/stores/useCartStore";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div className="p-4 bg-gray-800 text-gray-100 rounded-lg shadow-md mt-6">
      <div className="flex items-center justify-between ">
        <h1 className="text-xl font-bold mb-4">Cart</h1>
        {cart.length > 0 && (
          <button
            className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded mb-4"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        )}
      </div>
      <ul>
        {cart?.length > 0 ? (
          cart.map((product, index) => (
            <li
              key={index}
              className="flex justify-between items-center mb-2 p-2 bg-gray-700 rounded"
            >
              <span>{product}</span>
              <button
                className="px-2 py-1 bg-red-600 hover:bg-red-500 rounded"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <div className="flex items-center text-gray-400">Empty cart.</div>
        )}
      </ul>
    </div>
  );
};

export default Cart;
