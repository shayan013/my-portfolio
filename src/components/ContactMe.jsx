import React from "react";

const ContactMe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white px-6 md:px-16 py-10">
      {/* Left Side - Contact Info */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h2 className="text-5xl md:text-6xl font-bold">Contact Me</h2>
        <div className="space-y-3">
          <p className="flex items-center justify-center md:justify-start gap-3 text-lg">
            📩 shayanakhtar14@gmail.com
          </p>
          <p className="flex items-center justify-center md:justify-start gap-3 text-lg">
            📞 0349-9617096
          </p>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-3">
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              🌐
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              🐦
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              📸
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              🔗
            </a>
          </div>
        </div>
        <button className="bg-[#ff004f] text-white py-3 px-6 rounded-md text-xl transition-transform transform hover:scale-105">
          Download CV
        </button>
      </div>

      {/* Right Side - Contact Form */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-gray-800 text-white rounded-md outline-none text-lg placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-gray-800 text-white rounded-md outline-none text-lg placeholder-gray-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 bg-gray-800 text-white rounded-md h-32 outline-none text-lg placeholder-gray-400"
          />
          <button className="w-full bg-[#ff004f] text-white py-3 rounded-md text-xl transition-transform transform hover:scale-105">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
