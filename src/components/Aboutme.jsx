import { useState } from "react";
import React from "react";

const tabs = ["Skills", "Experience", "Education"];

const content = {
  Skills: [
    {
      title: "React Native",
      description: "Cross-platform mobile app development",
    },
    {
      title: "React & Next.js",
      description: "Modern web interfaces and SSR apps",
    },
    {
      title: "GraphQL & REST APIs",
      description: "Backend integration and data handling",
    },
    {
      title: "Node.js & Express",
      description: "Building scalable server-side apps",
    },
    {
      title: "MongoDB & SQL",
      description: "Efficient database design and management",
    },
    { title: "UI/UX", description: "Clean and user-friendly designs" },
  ],
  Experience: [
    {
      title: "Fullstack Developer",
      description: "Currently at Doerz Tech – Mobile & Web apps",
    },
    {
      title: "Frontend Developer",
      description: "Previously at Codistan – Built React-based interfaces",
    },
    {
      title: "Freelancer",
      description: "Delivered cross-platform apps for diverse clients",
    },
  ],
  Education: [
    {
      title: "Bachelor in Computer Science",
      description: "Comsats University Islamabad",
    },
  ],
};

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("Skills");

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-black text-white px-6 lg:px-20 py-10">
      {/* Image Section */}
      <div className="w-full lg:w-1/3 flex justify-center">
        <div className="relative w-48 sm:w-64 lg:w-80 bg-gray-900 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/Shayan.jpg"
            alt="Profile Picture"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-2/3 mt-8 lg:mt-0 lg:pl-10 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
        <p className="text-gray-300 mt-4 text-base sm:text-lg leading-relaxed">
          Full Stack Developer with 3+ years of experience in building
          high-performance web and mobile applications. Proficient in
          JavaScript, Python, React, React Native, Express.js, Django,
          PostgreSQL, and real-time data handling with Socket.IO. Extensive
          experience in GraphQL API development, improving app performance by
          30% and reducing development time by 20% through optimized coding and
          collaboration. A skilled problem-solver focused on delivering quality
          projects on time.
        </p>

        {/* Tabs */}
        <div className="flex justify-center lg:justify-start space-x-6 sm:space-x-12 mt-6 border-b border-gray-700 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`relative text-sm sm:text-base font-medium transition-all ${
                activeTab === tab ? "text-white" : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500 transition-all"></span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {content[activeTab].map((item, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-[#ff004f] font-semibold text-lg sm:text-xl">
                {item.title}
              </h4>
              <p className="text-gray-400 text-base sm:text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
