import React, { useState } from "react";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberId, setRememberId] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id || !password) {
      setError("Both fields are required");
    } else {
      setError("");
      console.log("Login Attempt:", { id, password, rememberId });
      // ✅ Add your login API call here
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md md:max-w-lg">
        {/* Title */}
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500 mb-6 sm:mb-8">
          LANDAS
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {/* ID Input */}
          <div>
            <label className="block text-gray-600 mb-1 text-sm sm:text-base">
              ID
            </label>
            <input
              type="text"
              placeholder="Please enter your ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 border rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-600 mb-1 text-sm sm:text-base">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Please enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 border rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 sm:top-2.5 text-gray-500 cursor-pointer text-sm sm:text-base"
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-xs sm:text-sm font-medium">
              {error}
            </p>
          )}

          {/* Options */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 text-xs sm:text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={rememberId}
                onChange={(e) => setRememberId(e.target.checked)}
                className="text-yellow-500"
              />
              <span className="text-gray-600">Remember ID</span>
            </label>
            <div className="flex space-x-3 text-yellow-500 cursor-pointer justify-end">
              <span>Find ID</span>
              <span>|</span>
              <span>Find Password</span>
            </div>
          </div>

          {/* Buttons */}
          <button
            type="submit"
            disabled={!id || !password}
            className={`w-full py-2 rounded-lg font-semibold text-sm sm:text-base transition ${
              id && password
                ? "bg-yellow-500 text-white hover:bg-yellow-600 cursor-pointer"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Login
          </button>

          <button
            type="button"
            className="w-full py-2 rounded-lg border border-gray-300 text-gray-600 font-semibold hover:bg-yellow-50 text-sm sm:text-base"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-[10px] sm:text-xs text-gray-400 mt-6 sm:mt-10">
          Copyright © WWW.ldsb2bmail.com All right reserved
        </p>
      </div>
    </div>
  );
}
