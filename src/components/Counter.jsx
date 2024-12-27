"use client";
import { useCounterStore } from "@/stores/useCounterStore";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className="p-4 bg-gray-800 text-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex space-x-2">
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded"
          onClick={() => increment(5)}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded"
          onClick={() => decrement(2)}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
