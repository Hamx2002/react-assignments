import React from "react";
import uni2 from "../assets/logos/uni2.svg"; // IIT logo

function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 fixed left-0 top-16 bottom-0 overflow-y-auto">
      <div className="p-6">
        {/* Create Post Button */}
        <button className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 mb-8">
          + Write Review
        </button>

        {/* User Info - Updated with IIT student */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative">
              <img
                src={uni2}
                alt="IIT"
                className="w-12 h-12 rounded-full border border-gray-300"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-xs font-bold text-white">RS</span>
              </div>
            </div>
            <div>
              <p className="font-medium text-gray-900">Rahul Sharma</p>
              <p className="text-sm text-gray-500">
                IIT Bombay • Computer Science
              </p>
              <div className="flex items-center mt-1">
                <span className="text-yellow-500 text-sm">⭐⭐⭐⭐☆</span>
                <span className="text-xs text-gray-500 ml-2">12 reviews</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="text-center p-2 bg-gray-50 rounded">
              <p className="text-sm font-medium text-gray-900">247</p>
              <p className="text-xs text-gray-500">Helpful</p>
            </div>
            <div className="text-center p-2 bg-gray-50 rounded">
              <p className="text-sm font-medium text-gray-900">1.2K</p>
              <p className="text-xs text-gray-500">Views</p>
            </div>
          </div>
          <button className="w-full text-center text-gray-700 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Edit Profile
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Home</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
            <span>My Reviews</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>University Clubs</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <span>Saved Reviews</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Settings</span>
          </a>
        </nav>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200"></div>

        {/* Your Universities */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-900 mb-4">Your Universities</h3>
          <div className="space-y-3">
            <a
              href="#"
              className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg"
            >
              <img
                src={uni2}
                alt="IIT"
                className="w-8 h-8 rounded border border-gray-300"
              />
              <div>
                <span className="text-gray-900 font-medium">IIT Bombay</span>
                <p className="text-xs text-gray-500">Computer Science</p>
              </div>
              <span className="ml-auto text-xs text-gray-500">Current</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">HS</span>
              </div>
              <div>
                <span className="text-gray-900 font-medium">
                  Hanover School
                </span>
                <p className="text-xs text-gray-500">Alumni</p>
              </div>
            </a>
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-900 mb-4">Recently Viewed</h3>
          <div className="space-y-2">
            <a
              href="#"
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg"
            >
              <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs text-gray-700">D</span>
              </div>
              <span className="text-sm text-gray-700">Delhi University</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg"
            >
              <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs text-gray-700">V</span>
              </div>
              <span className="text-sm text-gray-700">VIT University</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg"
            >
              <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs text-gray-700">B</span>
              </div>
              <span className="text-sm text-gray-700">BITS Pilani</span>
            </a>
          </div>
        </div>

        {/* Review Stats */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-3">Your Review Stats</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Helpful Votes</span>
                <span className="font-medium text-gray-900">84%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-green-500 h-1.5 rounded-full"
                  style={{ width: "84%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Review Quality</span>
                <span className="font-medium text-gray-900">92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-blue-500 h-1.5 rounded-full"
                  style={{ width: "92%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Response Rate</span>
                <span className="font-medium text-gray-900">76%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-purple-500 h-1.5 rounded-full"
                  style={{ width: "76%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* CampusDoor Tips */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2 flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Writing Tips
          </h3>
          <p className="text-xs text-gray-600 mb-2">
            • Be specific about your experiences
          </p>
          <p className="text-xs text-gray-600 mb-2">
            • Include both pros and cons
          </p>
          <p className="text-xs text-gray-600">
            • Focus on facts, not emotions
          </p>
        </div>

        {/* Footer Links */}
        <div className="mt-8">
          <div className="flex flex-wrap gap-3">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-700">
              About
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-700">
              Help
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-700">
              Privacy
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-700">
              Terms
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-700">
              Careers
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-700">
              Advertise
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            © 2024 CampusDoor. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
