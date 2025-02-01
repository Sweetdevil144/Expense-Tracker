// app/components/Auth/RegisterForm.jsx
"use client";

import { useState } from "react";
import { registerApi } from "../../services/api";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerApi(firstName, lastName, email, password);
      console.log("Registration successful:", data);
      // TODO: Redirect to login or dashboard.
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow my-4">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="firstName">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="w-full px-3 py-2 border rounded"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="lastName">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="w-full px-3 py-2 border rounded"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-3 py-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
