import React from "react";

// Import university logos
import uni1 from "../assets/logos/uni1.svg";
import uni2 from "../assets/logos/uni2.svg"; // IIT
import uni3 from "../assets/logos/uni3.svg";
import uni4 from "../assets/logos/uni4.svg";

function UniversityCard({ university }) {
  // Function to get logo or create initials
  const getUniversityLogo = (university) => {
    const name = university.name.toLowerCase();

    if (name.includes("academy") || name.includes("best education"))
      return uni1;
    if (name.includes("iit") || name.includes("bombay")) return uni2;
    if (name.includes("wardiere")) return uni3;
    if (name.includes("hanover")) return uni4;

    // If no logo found, return null to use initials
    return null;
  };

  const logo = getUniversityLogo(university);

  // Get initials for university name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
      <div className="flex items-start space-x-3">
        {logo ? (
          <img
            src={logo}
            alt={university.name}
            className="w-12 h-12 rounded-lg object-contain bg-gray-100 p-2 border border-gray-300"
          />
        ) : (
          <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">
              {getInitials(university.name)}
            </span>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 truncate">
            {university.name}
          </h3>
          {university.description && (
            <p className="text-sm text-gray-500 truncate">
              {university.description}
            </p>
          )}
          {university.established && (
            <p className="text-xs text-gray-400 mt-1">
              {university.established}
            </p>
          )}
        </div>
        <button className="text-gray-400 hover:text-gray-600 flex-shrink-0">
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
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </button>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600 flex items-center">
            <span className="text-yellow-500 mr-1">⭐</span> 4.2
          </span>
          <span className="text-sm text-gray-600 flex items-center">
            <span className="text-gray-500 mr-1">📝</span> 342 reviews
          </span>
        </div>
        <button className="text-sm text-gray-700 hover:text-gray-900 font-medium flex items-center">
          View
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default UniversityCard;
