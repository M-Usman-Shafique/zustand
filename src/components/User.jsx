"use client";
import { useUserStore } from "@/stores/useUserStore";

const User = () => {
  const { firstName, lastName, updateFirstName, updateLastName } =
    useUserStore();

  const handleUserSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    updateFirstName(firstName);
    updateLastName(lastName);
    e.target.reset();
  };

  return (
    <div className="p-4 bg-gray-800 text-gray-100 rounded-lg shadow-md mt-6">
      <h1 className="text-xl font-bold mb-4">User Information</h1>
      <form className="mb-4" onSubmit={handleUserSubmit}>
        <input
          className="p-2 rounded bg-gray-700 text-gray-100 w-full mb-2"
          type="text"
          name="firstName"
          placeholder="First Name"
        />
        <input
          className="p-2 rounded bg-gray-700 text-gray-100 w-full mb-2"
          type="text"
          name="lastName"
          placeholder="Last Name"
        />
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded w-full"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div>
        <h2 className="text-lg">First Name: {firstName}</h2>
        <h2 className="text-lg">Last Name: {lastName}</h2>
      </div>
    </div>
  );
};

export default User;
