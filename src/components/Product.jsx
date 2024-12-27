"use client";

import { useCartStore } from "@/stores/useCartStore";
import { useProductStore } from "@/stores/useProductStore";

const Product = () => {
  const { products, addProduct, removeProduct, DeleteAllProducts } =
    useProductStore();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const product = formData.get("product");
    addProduct(product);
    e.target.reset();
  };

  return (
    <>
      <h1 className="text-xl font-bold">Products</h1>
      <div className="p-4 bg-gray-800 text-gray-100 rounded-lg shadow-md mt-4">
        <form
          className="flex items-center gap-2 mb-4"
          onSubmit={handleProductSubmit}
        >
          <input
            className="px-3 py-2 rounded bg-gray-700 text-gray-100 w-full"
            type="text"
            name="product"
            placeholder="Type product name..."
          />
          <button
            className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded whitespace-nowrap"
            type="submit"
          >
            Add Product
          </button>
          {products.length > 0 && (
            <button
              className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded whitespace-nowrap"
              type="button"
              onClick={DeleteAllProducts}
            >
              Delete All
            </button>
          )}
        </form>
        <ul>
          {products.map((product, index) => (
            <li
              key={index}
              className="flex justify-between items-center mb-2 p-2 bg-gray-700 rounded"
            >
              <span>{product}</span>
              <div className="space-x-2">
                <button
                  className="px-2 py-1 bg-blue-600 hover:bg-blue-500 rounded"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>
                <button
                  className="px-2 py-1 bg-red-600 hover:bg-red-500 rounded"
                  onClick={() => removeProduct(index)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Product;
