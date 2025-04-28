"use client";

import { useState } from "react";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newOrder = {
      _type: "chibsorder",
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
      email: formData.email,
      orderDate: new Date().toISOString(),
    };

    try {
      await client.create(newOrder);
      console.log("Order created successfully!");
      setSuccess(true);
      setFormData({ name: "", phone: "", address: "" }); // Reset form
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      console.error("Failed to create order:", error);
      alert("Failed to place order, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-white">Pay on Delivery</h1>

      {success ? (
        <div className="text-green-600 text-center">
          Order placed successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-white">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded"
          />
          <textarea
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border p-3 rounded"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full border-3 text-white py-3 rounded hover:bg-gray-800"
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </form>
      )}
    </div>
  );
}
