import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useState } from "react";

const API = "http://localhost:3000/user";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function signupF(username, password) {
    const res = await fetch(`${API}/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, role: "Freelancer" }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.log("Signup failed");
      return false;
    }

    console.log("Signup successful");

    const ress = await fetch(`${API}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const dataa = await ress.json();
    const refreshTokenValue = dataa.refreshToken || null;
    const accessTokenValue = dataa.accessToken || null;
    sessionStorage.setItem("refreshToken", refreshTokenValue);
    sessionStorage.setItem("accessToken", accessTokenValue);
    return <Navigate to="/dashboardClient" replace />;
    return true;
  }
  return (
    <div className="min-h-screen [background:radial-gradient(ellipse_at_center,_#1a2535_0%,_#080d14_100%)]">
      <div className="flex justify-start pl-70 items-center h-screen backdrop-blur-lg">
        <div className="flex flex-col gap-5 p-8 border border-gray-600 rounded-lg [background:radial-gradient(ellipse_at_center,_#0a1f38_0%,_#050c15_100%)] backdrop-blur-2xl w-96">
          <p className="text-white text-2xl">Sign Up</p>
          <p className="text-white text-2xl">As a Freelancer</p>
          <label className="text-white ">
            <p className="text-gray-500 ">Username:</p>
            <input
              type="text"
              name="username"
              placeholder="Ex-Shivam Rawat"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-gray-400"
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
            />
            <Link
              to="/login"
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              Already have an Account?
            </Link>
          </label>
          <button
            className="..."
            onClick={() => signupF(username, password)} // Call it manually
          >
            Sign Up as Freelancer
          </button>
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

export default Signup;
