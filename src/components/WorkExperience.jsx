import React from "react";
import Skills from "./Skills";
export default function WorkExperience() {
  const educationData = [
    {
      year: "2022 - 2023",
      title: "Front End Developer",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem",
    },
    {
      year: "2023 - current",
      title: "Full stack Developer",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-30">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h3 className="text-green-400 uppercase text-sm font-semibold">
          Education & Skill
        </h3>
        <h2 className="text-4xl font-bold">
          Showcasing your talent
          <br /> amplifying your impact
        </h2>
      </div>

      {/* Education Items */}
      <div className="grid md:grid-cols-2 gap-8">
        {educationData.map((item, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg">
            <span className="text-green-400 border border-green-400 px-4 py-1 rounded-md text-sm font-semibold">
              {item.year}
            </span>
            <h4 className="text-xl font-bold mt-4">{item.title}</h4>
            <p className="text-gray-400 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
      <Skills />
    </section>
  );
}
