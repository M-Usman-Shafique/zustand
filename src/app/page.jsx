import Counter from "@/components/Counter";
import User from "@/components/User";
import Product from "@/components/Product";
import Cart from "@/components/Cart";

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      {/* <Counter />
      <User /> */}
      <Product />
      <Cart />
    </div>
  );
}
