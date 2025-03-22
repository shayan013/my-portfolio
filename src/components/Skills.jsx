import React from "react";

export default function Skills() {
  const skills = [
    { name: "HTML", percentage: "80%" },
    { name: "CSS", percentage: "60%" },
    { name: "JavaScript", percentage: "70%" },
    { name: "Python", percentage: "85%" },
    { name: "Photoshop", percentage: "90%" },
    { name: "Figma", percentage: "75%" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
      {skills.map((skill, index) => (
        <div key={index} className="bg-[#1a1a1a] p-4 rounded-md">
          <p className="text-white mb-2">{skill.name}</p>
          <div className="w-full h-1.5 bg-gray-700 rounded-full">
            <div
              className="h-full bg-green-400 rounded-full"
              style={{ width: skill.percentage }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
