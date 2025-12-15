import React from "react";
import logo from "../assets/logos/logo.svg";

function Login({ onLogin }) {
  const handleEmailLogin = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center mb-8">
          <img src={logo} alt="CampusDoor Logo" className="w-20 h-20 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900">CampusDoor</h1>
          <p className="text-gray-600 mt-2">Student Reviews Platform</p>
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-900 mb-2">
          Your campus people are here
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Join the conversation about universities
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow border border-gray-200 sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-6 text-center">
                By continuing, you agree to our{" "}
                <a
                  href="#"
                  className="font-medium text-gray-900 hover:underline"
                >
                  Terms of Use
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="font-medium text-gray-900 hover:underline"
                >
                  Privacy Policy
                </a>
              </p>
            </div>

            {/* Login Buttons */}
            <div className="space-y-4">
              <button
                onClick={onLogin}
                className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 bg-white hover:bg-gray-50"
              >
                <div className="w-5 h-5 bg-gray-900 rounded-full mr-3"></div>
                Continue with Google
              </button>

              <button
                onClick={onLogin}
                className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 bg-white hover:bg-gray-50"
              >
                <div className="w-5 h-5 bg-gray-900 rounded mr-3"></div>
                Continue with Apple
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            {/* Email Login */}
            <form onSubmit={handleEmailLogin}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-gray-900 focus:ring-gray-400 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-gray-900 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Continue with email
                </button>
              </div>
            </form>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">Get ahead with CampusDoor</p>
            <p className="text-sm text-gray-500 mt-2">
              We're serving up trusted campus insights and anonymous
              conversations, so you'll have the information you need to succeed.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <button
            onClick={onLogin}
            className="font-medium text-gray-900 hover:underline"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
