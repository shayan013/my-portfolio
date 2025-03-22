import React from "react";
export default function Services() {
  return (
    <section className="py-20">
      <div className="text-center">
        <h3 className="text-[#fff] text-5xl uppercase font-bold">
          My Services
        </h3>
        {/* <h2 className="text-5xl font-bold mt-2">
          Crafting stories through <br /> design and innovation
        </h2> */}
      </div>

      <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 px-6 md:px-16">
        {/* Service Card 1 */}
        <div className="border border-gray-700 p-8 text-center max-w-sm">
          <div className="flex justify-center"></div>
          <h3 className="text-2xl font-bold mt-4 text-center">
            App Maintenance & Support
          </h3>
          <p className="text-[#fff] mt-3 text-xl">
            Ensuring seamless performance with regular updates, bug fixes, and
            continuous monitoring to keep your app running smoothly.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="border border-gray-700 p-8 text-center max-w-sm">
          <div className="flex justify-center"></div>
          <h3 className="text-2xl font-bold mt-4 text-center">
            Web Development
          </h3>
          <p className="text-[#fff] mt-3 text-xl">
            Creating modern, responsive, and high-performance websites using the
            latest technologies to elevate your online presence.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="border border-gray-700 p-8 text-center  max-w-sm">
          <h3 className="text-2xl font-bold mt-4 text-center">
            App Development
          </h3>
          <p className="text-[#fff] mt-3 text-xl">
            Building cross-platform and native mobile applications tailored to
            your needs with robust functionality and intuitive UI
          </p>
        </div>
      </div>
    </section>
  );
}
