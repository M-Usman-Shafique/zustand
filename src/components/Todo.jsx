"use client";
import { useTodoStore } from "@/stores/useTodoStore";

const Todo = () => {
  const { todos, addTodo, removeTodo, clearAllTodos } = useTodoStore();

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const todo = formData.get("todo");
    addTodo(todo);
    e.target.reset();
  };

  return (
    <div className="p-4 bg-gray-800 text-gray-100 rounded-lg shadow-md mt-6">
      <h1 className="text-xl font-bold mb-4">Todo List</h1>
      <form className="mb-4" onSubmit={handleTodoSubmit}>
        <input
          className="p-2 rounded bg-gray-700 text-gray-100 w-full mb-2"
          type="text"
          name="todo"
          placeholder="Add a todo"
        />
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded"
            type="submit"
          >
            Add Todo
          </button>
          <button
            className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded"
            type="button"
            onClick={clearAllTodos}
          >
            Clear All
          </button>
        </div>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center mb-2 p-2 bg-gray-700 rounded"
          >
            <span>{todo}</span>
            <button
              className="px-2 py-1 bg-red-600 hover:bg-red-500 rounded"
              onClick={() => removeTodo(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
