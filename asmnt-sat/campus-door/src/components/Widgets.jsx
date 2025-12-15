import React from "react";
import UniversityCard from "./UniversityCard";

function Widgets() {
  // Updated universities list with IIT and missing logos
  const universities = [
    {
      name: "IIT Bombay",
      established: "estd 1958",
      description: "Indian Institute of Technology",
    },
    {
      name: "ACADEMY University",
      established: "estd 2021",
      description: "BEST EDUCATION IN TOWN",
    },
    {
      name: "WARDIERE UNIVERSITY",
      established: "1986",
      description: "Engineering & Technology",
    },
    {
      name: "Hanover School",
      established: "",
      description: "Science & Research",
    },
    {
      name: "Delhi University",
      established: "1922",
      description: "Arts & Humanities",
    },
    {
      name: "Stanford University",
      established: "1885",
      description: "International Programs",
    },
  ];

  // Updated communities to be more university-focused
  const communities = [
    {
      name: "IIT Bombay Students",
      members: "15K",
      description: "Official IIT Bombay student community",
    },
    {
      name: "Engineering Students",
      members: "45K",
      description: "All engineering college discussions",
    },
    {
      name: "Medical Aspirants",
      members: "32K",
      description: "MBBS and medical college reviews",
    },
    {
      name: "Study Abroad Guidance",
      members: "28K",
      description: "International university admissions",
    },
  ];

  return (
    <div className="w-80 space-y-6">
      {/* Universities Widget */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Top Rated Universities
        </h2>
        <div className="space-y-4">
          {universities.slice(0, 4).map((uni, index) => (
            <UniversityCard key={index} university={uni} />
          ))}
        </div>
        <button className="w-full mt-4 text-center text-gray-700 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          View All Universities →
        </button>
      </div>

      {/* Communities Widget - University focused */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900">
            Student Communities
          </h2>
          <button className="text-gray-700 hover:text-gray-900 text-sm font-medium">
            Explore all →
          </button>
        </div>
        <div className="space-y-4">
          {communities.map((community, index) => (
            <div
              key={index}
              className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">
                      {community.name.substring(0, 2)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {community.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {community.description}
                    </p>
                  </div>
                </div>
                <button className="px-3 py-1 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800">
                  Join
                </button>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                {community.members} students • Active discussions
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Platform Stats</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total Reviews</span>
            <span className="font-bold text-gray-900">12,847</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Universities</span>
            <span className="font-bold text-gray-900">485</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Active Students</span>
            <span className="font-bold text-gray-900">45,231</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Average Rating</span>
            <span className="font-bold text-gray-900">4.2/5 ⭐</span>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Connect with us
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
            <span className="text-gray-700 font-medium">Twitter</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded"></div>
            <span className="text-gray-700 font-medium">LinkedIn</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
            <span className="text-gray-700 font-medium">Instagram</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
            <span className="text-gray-700 font-medium">YouTube</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
