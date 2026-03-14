import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:3000/user";

function SignupClient() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function signupClient(e) {
  e.preventDefault();
  setError("");
  try {
    const res = await fetch(`${API}/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, role: "client" }),
    });
    
    const data = await res.json();
    if (!res.ok) {
      setError(data?.errors?.[0]?.msg || "Signup failed");
      return;
    }
    const ress = await fetch(`${API}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const dataa = await ress.json();
    sessionStorage.setItem("refreshToken", dataa.refreshToken || "");
    sessionStorage.setItem("accessToken", dataa.accessToken || "");
    navigate("/dashboardClient", { replace: true });
  } catch (err) {
    setError("Network error");
  }
}

  return (
    <div className="min-h-screen [background:radial-gradient(ellipse_at_center,_#1a2535_0%,_#080d14_100%)]">
      <div className="flex justify-start pl-70 items-center h-screen backdrop-blur-lg">
        <div className="flex flex-col gap-5 p-8 border border-gray-600 rounded-lg [background:radial-gradient(ellipse_at_center,_#0a1f38_0%,_#050c15_100%)] backdrop-blur-2xl w-96">
          <p className="text-b text-2xl text-[#4169E1]">Sign Up</p>
          <p className="text-white text-2xl ">As a Client</p>
          {error && (
            <div className="text-red-400 text-sm border border-red-400 rounded p-2 bg-gray-800">
              {error}
            </div>
          )}
          <form onSubmit={signupClient} className="flex flex-col gap-5">
            <label className="text-white ">
              <p className="text-gray-500 ">Username:</p>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ex-Shivam Rawat"
                className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-gray-400"
                required
              />
            </label>
            <label className="text-white">
              <p className="text-gray-500">Password:</p>
              <input
                type="password"
                placeholder="Ex-shivam@Rawat123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-gray-400"
                name="password"
                required
              />
            </label>
            <button
              type="submit"
              className="w-full px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
          <div className="flex items-center gap-3">
            <hr className="flex-1 border-gray-600" />
            <span className="text-gray-500 text-sm">or</span>
            <hr className="flex-1 border-gray-600" />
          </div>
          <input
            className="w-full px-1 py-1 rounded-md bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-gray-400 hover:bg-amber-400"
            type="submit"
            value="Sign in with Google"
          />
          <input
            className="w-full px-1 py-1 rounded-md bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-gray-400 hover:bg-amber-400"
            type="submit"
            value="Sign in with Facebook"
          />
        </div>
        <p className="text-white text-2xl pl-80">use your thing here</p>
      </div>
    </div>
  );
}

export default SignupClient;
