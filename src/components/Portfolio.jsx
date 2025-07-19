import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    {
      image: "/portfolio.png",
      alt: "Portfolio Item 1",
      name: "EduApply",
      description:
        "EduApply is an online platform that helps students apply to international universities easily and efficiently, streamlining the admission process from start to finish",
    },
    {
      image: "/portfolio2.png",
      alt: "Portfolio Item 2",
      name: "VistaTech Web",
      description:
        "Vista Tech is a web platform for clients to manage their on-site security staff. Clients can monitor employees on the map, track geofence status, and view shift schedules. It provides real-time insights and streamlined workforce oversight",
    },
    {
      image: "/portfolio4.png",
      alt: "Portfolio Item 4",
      name: "TopShapeGym",
      description:
        "Top Shape Gym is a service-based app where coaches create customized workout and exercise plans. End users can browse and enroll in these plans through the platform. It connects trainers and clients for a personalized fitness experience",
      url: "https://staging.ddamcrryhvsg8.amplifyapp.com/login",
    },
    {
      image: "/reactnativeportfolio.png",
      alt: "Portfolio Item 3",
      name: "VistaTech Mobile",
      description:
        "VistaTech Mobile is an app for security personnel to manage their shifts. Guards can clock in/out, take breaks, and receive real-time shift notifications. It streamlines daily operations for on-field staff.",
    },
    {
      image: "/portfolio6.png",
      alt: "Portfolio Item 3",
      name: "Emtran",
      description:
        "Emtran is a multilingual platform bridging doctors and patients through intelligent medical forms. Patients answer detailed diagnostic questions in their preferred language. The responses are translated for doctors, aiding accurate and efficient diagnosis.",
    },
    {
      image: "/portfolio7.png",
      alt: "Portfolio Item 3",
      name: "Rezzlist",
      description:
        "Rezz List is a restaurant reservation platform with a web-based admin panel. Admins can manage cities, add restaurants, set pricing, and allocate seats. Users can book seats at restaurants listed by the admin.",
    },
    {
      image: "/united.png",
      alt: "Portfolio Item 3",
      name: "United Market",
      description:
        "United Market is a music platform for artists, managers, producers, labels, and A&Rs to showcase and manage talent. Users can create role-based profiles and upload music, like SoundCloud. Currently building the authentication and onboarding flow",
      url: "https://united-market.vercel.app/",
    },
  ];

  return (
    <section className="text-white py-16 px-30">
      <div className="container mx-auto px-4">
        <h4 className="text-[#fff] text-5xl font-bold capitalize text-center md:text-left">
          My work
        </h4>
        {/* <h2 className="text-2xl md:text-3xl  mt-2">
          Elevate your brand to new <br /> heights with our expertise
        </h2> */}

        {/* Portfolio Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioItems.map((item, index) => (
            <Link key={index} to={item.url}>
              <div
                onClick={() =>
                  !item.url ? setSelectedImage(item.image) : null
                }
                className="relative group w-full max-w-[400px] overflow-hidden rounded-lg flex justify-center items-center cursor-pointer"
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
                  <p className="text-sm mt-1">{item.description}</p>
                </motion.div>
              </div>
            </Link>
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
