import React from "react";
import Vault from "./Vault";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Suspense } from 'react'
import { useState, useContext } from "react";


const API = "http://localhost:3000/user/login";

async function login(username, password) {
  const res = await fetch(`${API}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();
  if (!res.ok) {
    console.log("Login failed");
    return false;
  }

  console.log("Login successful");
  const refreshTokenValue = data.refreshToken || null;
  const accessTokenValue = data.accessToken || null;
  sessionStorage.setItem("refreshToken", refreshTokenValue);
  sessionStorage.setItem("accessToken", accessTokenValue);
  return <Navigate to="/dashboardFreelancer" replace />;
  return true;
}


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
    <div className="min-h-screen [background:radial-gradient(ellipse_at_center,_#1a2535_0%,_#080d14_100%)]">
      <div className="flex justify-start pl-70 items-center h-screen backdrop-blur-lg">
        <div className="flex flex-col gap-5 p-8 border border-gray-600 rounded-lg [background:radial-gradient(ellipse_at_center,_#0a1f38_0%,_#050c15_100%)] backdrop-blur-2xl w-96">
          <p className="text-white text-2xl">Sign In</p>
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
              placeholder="Ex-shivam@Rawat"
              className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-gray-400"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
              Forgot your password?
            </a>
          </label>
          <input
            className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-gray-400 hover:bg-amber-400"
            type="submit"
            value="Sign in as Freelancer"
            onClick={async (e) => {
                e.preventDefault();
                if (await login(username, password)) {
                  setUser(username);
                  setIsAuthenticated(true);
                }
              }}
          />
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
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
      <Canvas camera={{ position: [100, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <Suspense fallback={null}>
          <Vault position={[0, 0, 0]} scale={10.5} />
          <Environment preset="city" />
        </Suspense>

        <OrbitControls 
          enableZoom={false}
          enablePan={false} 
          />
      </Canvas>
    </div>
          </div>
    </div>
    </>
  );
}

export default Login;