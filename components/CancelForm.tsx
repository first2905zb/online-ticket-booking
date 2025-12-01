"use client";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function CancelForm() {
  const [email, setEmail] = useState("");

  const handleCancel = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/bookings?email=${email}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (res.ok) {
      toast.success(data.message);
      setEmail("");
    } else {
      toast.error(data.message);
    }
  };

  return (
    <form
      onSubmit={handleCancel}
      className="flex flex-col max-w-md w-full gap-4 bg-white p-4 rounded shadow"
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <div>
        <label htmlFor="email" className="text-gray-800 mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Please enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded h-12 p-3 text-lg focus:outline-none focus:ring-2 focus:ring-red-400 placeholder-gray-400 text-gray-800"
        />
      </div>
      <button className="bg-red-500 text-white py-2 rounded hover:bg-red-600 cursor-pointer">
        Cancel Booking
      </button>
    </form>
  );
}
