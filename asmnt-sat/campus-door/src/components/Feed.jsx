import React from "react";
import PostCard from "./PostCard";

function Feed() {
  const universityPosts = [
    {
      id: 1,
      title: "Hostel Review: Block 5 - VIT Vellore",
      content:
        "The facilities are good but the food could be better. The WiFi speed is decent during non-peak hours.",
    },
    {
      id: 2,
      title: "Faculty Experience: Computer Science Department",
      content:
        "Most professors are helpful and knowledgeable. Office hours are convenient and they're responsive to emails.",
    },
    {
      id: 3,
      title: "Placement Preparation Tips",
      content:
        "Started preparing from 3rd year. Focused on DSA and participated in coding competitions. Got placed in Amazon with 18 LPA.",
    },
    {
      id: 4,
      title: "Campus Life Balance",
      content:
        "How do you all manage academics, extracurriculars, and personal life? Looking for some advice from seniors.",
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <div className="flex space-x-4 overflow-x-auto pb-2">
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg whitespace-nowrap">
            All Reviews
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg whitespace-nowrap hover:bg-gray-50">
            Academics
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg whitespace-nowrap hover:bg-gray-50">
            Campus Life
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg whitespace-nowrap hover:bg-gray-50">
            Hostel Facilities
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg whitespace-nowrap hover:bg-gray-50">
            Placements
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg whitespace-nowrap hover:bg-gray-50">
            Faculty
          </button>
        </div>
      </div>

      <div>
        <PostCard />
        <PostCard />
        <PostCard />
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700">
          Load More Reviews
        </button>
      </div>
    </div>
  );
}

export default Feed;
