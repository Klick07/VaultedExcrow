import React from "react";

function Loginclient() {
  return (
    <div className="min-h-screen [background:radial-gradient(ellipse_at_center,_#1a2535_0%,_#080d14_100%)]">
      <div className="flex justify-start pl-70 items-center h-screen backdrop-blur-lg">
        <div className="flex flex-col gap-5 p-8 border border-gray-600 rounded-lg [background:radial-gradient(ellipse_at_center,_#0a1f38_0%,_#050c15_100%)] backdrop-blur-2xl w-96">
          <p className="text-white text-4xl">Log In</p>
          <p className="text-white text-xl">As a Client</p>
          <label className="text-white ">
            <p className="text-gray-500 ">Username:</p>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-gray-400"
            />
          </label>
          <label className="text-white">
            <p className="text-gray-500">Password:</p>
            <input
              type="password"
              placeholder="*****"
              className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-gray-400"
              name="password"
            />
            <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
              Forgot your password?
            </a>
          </label>
          <input
            className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-gray-400 hover:bg-amber-400"
            type="submit"
            value="Sign in as Client"
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
        <p className="text-white text-2xl pl-80">use your thing here</p>
      </div>
    </div>
  );
}

export default Loginclient;