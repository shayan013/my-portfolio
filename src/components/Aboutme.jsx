import { useState } from "react";
import React from "react";
const tabs = ["Skills", "Experience", "Education"];

const content = {
  Skills: [
    { title: "UI/UX", description: "Designing Web/App interfaces" },
    { title: "Web Development", description: "Web app Development" },
    { title: "App Development", description: "Building Android/iOS apps" },
  ],
  Experience: [
    { title: "Fullstack Developer", description: "Worked at Doerz tech" },
    { title: "Front end Developer", description: "Worked at Codistan" },
    { title: "Freelancer", description: "Developed multiple projects" },
  ],
  Education: [
    {
      title: "Computer Science",
      description: "BS CS   from Comsats University Islamabad",
    },
  ],
};

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("Skills");

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white p-10">
      {/* Image (30% Width) */}
      <div className="w-full md:w-1/3 flex justify-center">
        <div className="relative w-full max-w-sm bg-gray-900 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/Shayan.jpg"
            alt="Profile Picture"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Content (70% Width) */}
      <div className="w-full md:w-2/3 mt-8 md:mt-0 md:pl-10">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="text-[#fff] mt-3 text-lg">
          I'm a passionate software developer with expertise in React Native,
          Next.js, and Django. I specialize in building dynamic mobile and web
          applications with seamless user experiences. With a strong foundation
          in JavaScript, Python, and GraphQL, I develop scalable and efficient
          solutions. My focus is on creating high-performance applications while
          ensuring clean and maintainable code
        </p>

        {/* Tabs */}
        <div className="flex space-x-8 mt-6 border-b border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`relative pb-2 font-medium transition-all ${
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
              <h4 className="text-[#ff004f] font-semibold">{item.title}</h4>
              <p className="text-gray-300 text-2xl">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// export default function AboutMe() {
//   return (
//     <section className="px-30 bg-black text-white py-16 px-8 flex flex-col md:flex-row items-center">
//       {/* Left Section - Text Content */}
//       <div className="md:w-1/2 space-y-6">
//         <h3 className="text-[#55e6a5] text-2xl uppercase">About Me</h3>
//         <h2 className="text-4xl font-bold">
//           Transforming visions into exceptional portfolios
//         </h2>
//         <p className="text-gray-400">
//           I am a software developer with 3+ years of experience, specializing in
//           React Native, Next.js, GraphQL, and backend APIs. I build modern,
//           scalable applications for web and mobile platforms.
//         </p>
//         <button className="bg-green-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-500">
//           Download CV ↓
//         </button>
//       </div>

//       {/* Right Section - Image */}
//       <div className="md:w-1/2 flex relative mt-10 md:mt-0 justify-end">
//         <div className="w-60 h-60 bg-green-400 rounded-lg "></div>
//         <img
//           src="/Shayan.jpg"
//           alt="Profile"
//           className="absolute top-5 right-5 w-60 h-60 bg-green-400 rounded-lg"
//         />
//       </div>
//     </section>
//   );
// }
