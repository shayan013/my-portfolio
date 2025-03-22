import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero px-5 md:px-30 flex flex-col-reverse md:flex-row items-center justify-between">
      {/* Left Side - Text */}
      <div className="w-full md:w-2/4 text-center md:text-left">
        <h1 className="text-4xl md:text-7xl mb-1 uppercase font-bold">
          Hi, I'm Shayan
        </h1>
        <motion.h1
          animate={{ opacity: 1, y: [0, -20, 0] }} // Moves up and down
          transition={{ duration: 1, repeat: 3, repeatType: "reverse" }}
          className="text-4xl md:text-7xl mb-8 uppercase font-bold text-[#ff004f]"
        >
          Software Developer
        </motion.h1>

        <p className="text-lg md:text-xl font-bold mb-5 px-2 md:px-0">
          I'm a passionate UI/UX designer with a mission to create delightful
          and intuitive digital experiences. With a strong foundation in design
          principles, I specialize in crafting user-friendly interfaces.
        </p>
        <div>
          <button className="px-4 py-3 bg-[#ff004f] text-lg capitalize rounded-md">
            Download My CV
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex items-center justify-center h-auto md:min-h-screen w-full md:w-auto">
        <div className="relative w-60 h-60 md:w-96 md:h-96">
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
            className="absolute inset-2 bg-cover bg-center"
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
