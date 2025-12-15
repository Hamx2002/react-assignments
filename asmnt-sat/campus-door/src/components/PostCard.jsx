import React from "react";
import uni2 from "../assets/logos/uni2.svg"; // IIT logo

function PostCard() {
  // Array of realistic college reviews
  const reviews = [
    {
      name: "Rahul Sharma",
      major: "Computer Science, 3rd Year",
      content:
        "The Computer Science department at IIT Bombay is world-class with excellent faculty. The curriculum is rigorous and updated regularly. However, the hostel facilities in Hostel 4 need renovation - frequent water shortages and WiFi issues. Placements are fantastic though!",
      rating: "⭐⭐⭐⭐☆",
      tags: ["#Infrastructure", "#Faculty", "#Placements"],
    },
    {
      name: "Priya Patel",
      major: "Mechanical Engineering, Final Year",
      content:
        "Great campus life with numerous clubs and events. The library is well-stocked and open 24/7 during exams. The mess food could be better - limited vegetarian options. Overall, worth every penny for the education quality.",
      rating: "⭐⭐⭐⭐⭐",
      tags: ["#CampusLife", "#Library", "#Food"],
    },
    {
      name: "Amit Kumar",
      major: "Electrical Engineering, 2nd Year",
      content:
        "Faculty is knowledgeable but some professors are not accessible outside class hours. Labs are well-equipped but booking slots is competitive. The sports complex is excellent with great facilities.",
      rating: "⭐⭐⭐☆☆",
      tags: ["#Labs", "#Sports", "#Accessibility"],
    },
  ];

  const review = reviews[Math.floor(Math.random() * reviews.length)];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
      {/* Post Header - Using student profile */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              src={uni2}
              alt="IIT"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-xs font-bold text-white">
                {review.name.substring(0, 1)}
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <p className="font-medium text-gray-900">{review.name}</p>
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                {review.rating}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              IIT Bombay • {review.major} • 3 hours ago
            </p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg
            className="w-6 h-6"
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

      {/* Post Content */}
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Honest Review of IIT Bombay
        </h3>
        <p className="text-gray-700 mb-3">{review.content}</p>
        <div className="mt-3 flex items-center space-x-2">
          {review.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Post Stats */}
      <div className="flex items-center space-x-6 text-gray-500 mb-4">
        <button className="flex items-center space-x-2 hover:text-gray-700">
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
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
          <span>124 Helpful</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-gray-700">
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
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span>48 Comments</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-gray-700">
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
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          <span>Share</span>
        </button>
      </div>

      {/* Comment Input */}
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">Y</span>
        </div>
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
          Post
        </button>
      </div>
    </div>
  );
}

export default PostCard;
