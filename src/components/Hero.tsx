import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero px-30 flex items-center justify-between">
      {/* left side text */}
      <div className="w-2/4">
        <h1 className="text-7xl mb-1 uppercase font-bold">hi i'am shayan</h1>
        <motion.h1
          animate={{ opacity: 1, y: [0, -20, 0] }} // Moves up and down
          transition={{ duration: 1, repeat: 3, repeatType: "reverse" }} // 3 cycles of bounce
          className="text-7xl mb-8 uppercase font-bold text-[#ff004f]"
        >
          software developer
        </motion.h1>

        <p className="text-xl font-bold mb-5">
          I'm a passionate UI/UX designer with a mission to create delightful
          and intuitive digital experiences. With a strong foundation in design
          principles and a keen eye for detail, I specialize in translating
          complex ideas into user-friendly interfaces that captivate and engage.
        </p>
        <div>
          <button className="px-3 py-4 bg-[#ff004f] text-lg capitalize rounded-md">
            download my cv
          </button>
          <div></div>
        </div>
      </div>
      {/* right side image */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-100 h-100">
          {/* Hexagon Border */}
          <div className="absolute inset-0">
            <svg
              viewBox="0 0 300 330"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <polygon
                points="150,10 290,85 290,245 150,320 10,245 10,85"
                fill="none"
                stroke="#50BFC3" // Outer stroke color
                strokeWidth="15"
              />
            </svg>
          </div>

          {/* Hexagonal Image Mask */}
          <div
            className="absolute inset-10 bg-cover bg-center"
            style={{
              backgroundImage: "url('/Shayan.jpg')",
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
