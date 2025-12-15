import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed"; // Add this import
import Widgets from "../components/Widgets";

function Home({ onLogout }) {
  const reviewTopics = [
    "Academics",
    "Faculty",
    "Hostel",
    "Campus",
    "Placements",
    "Library",
    "Sports",
    "Food",
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar onLogout={onLogout} />
      <div className="pt-16 flex">
        <Sidebar />
        <main className="flex-1 ml-64 mr-80">
          <div className="max-w-3xl mx-auto py-8 px-4">
            {/* Feed Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                University Reviews & Discussions
              </h1>
              <p className="text-gray-600">
                Honest reviews from students across campuses
              </p>
            </div>

            {/* Create Post Box - University review focused */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">Y</span>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Share your university experience or write a review..."
                  className="flex-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {reviewTopics.map((topic, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200"
                  >
                    #{topic}
                  </button>
                ))}
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">
                      Rate your university:
                    </span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          className="text-gray-300 hover:text-yellow-400"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <button className="px-6 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-900 hover:to-black">
                  Post Review
                </button>
              </div>
            </div>

            {/* Feed component */}
            <Feed />
          </div>
        </main>
        <div className="w-80 fixed right-0 top-16 bottom-0 overflow-y-auto py-8 px-4">
          <Widgets />
        </div>
      </div>
    </div>
  );
}

export default Home;
