// src/components/PingButton.jsx
import React from "react";
import authService from "../appwrite/auth"; // Adjust path based on your project

const PingButton = () => {
  const handlePing = async () => {
    try {
      const user = await authService.getCurrentuser();
      alert(`✅ Ping successful. Logged in as: ${user.name || user.email}`);
      console.log("Ping response:", user);
    } catch (error) {
      alert("❌ Ping failed. Not logged in or Appwrite misconfigured.");
      console.error("Ping error:", error);
    }
  };

  return (
    <button
      onClick={handlePing}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
    >
      Send a Ping
    </button>
  );
};

export default PingButton;
