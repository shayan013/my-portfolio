import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    { image: "/portfolio.png", alt: "Portfolio Item 1", name: "EduApply" },
    {
      image: "/portfolio2.png",
      alt: "Portfolio Item 2",
      name: "VistaTech Web",
    },

    { image: "/portfolio4.png", alt: "Portfolio Item 4", name: "TopShapeGym" },
    // {
    //   image: "/reactnativeportfolio.png",
    //   alt: "Portfolio Item 3",
    //   name: "VistaTech Mobile",
    // },
    {
      image: "/portfolio6.png",
      alt: "Portfolio Item 3",
      name: "Emtran",
    },
    {
      image: "/portfolio7.png",
      alt: "Portfolio Item 3",
      name: "Rezzlist",
    },
    {
      image: "/portfolio8.png",
      alt: "Portfolio Item 3",
      name: "United Market",
    },
  ];

  return (
    <section className="text-white py-16 px-30">
      <div className="container mx-auto px-4">
        <h4 className="text-[#fff] text-5xl font-bold capitalize">My work</h4>
        {/* <h2 className="text-2xl md:text-3xl  mt-2">
          Elevate your brand to new <br /> heights with our expertise
        </h2> */}

        {/* Portfolio Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative group w-full max-w-[400px] overflow-hidden rounded-lg flex justify-center items-center cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              {/* Portfolio Image */}
              <img
                src={item.image}
                alt={item.alt}
                className="w-auto h-auto max-w-full max-h-full object-contain"
              />

              {/* Hover Effect - Text Appears from Bottom */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
              >
                <h3 className="text-lg font-semibold">{item.name}</h3>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center bg-black/80 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Selected Portfolio"
              className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
