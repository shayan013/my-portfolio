import React from "react";

export default function Services() {
  return (
    <section className="py-20">
      <div className="text-center">
        <h3 className="text-[#fff] text-5xl uppercase font-bold">
          My Services
        </h3>
      </div>

      <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 px-6 md:px-16">
        {/* Service Card 1 */}
        <div className="border border-gray-700 p-8 text-center max-w-sm">
          <h3 className="text-2xl font-bold mt-4 text-center">
            Mobile App Development
          </h3>
          <p className="text-[#fff] mt-3 text-xl">
            I build modern, scalable cross-platform mobile apps using React
            Native, delivering smooth performance and intuitive UI for both iOS
            and Android.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="border border-gray-700 p-8 text-center max-w-sm">
          <h3 className="text-2xl font-bold mt-4 text-center">
            Web Development
          </h3>
          <p className="text-[#fff] mt-3 text-xl">
            I create responsive, high-performance websites and dashboards using
            React.js and Next.js — optimized for speed, SEO, and user
            experience.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="border border-gray-700 p-8 text-center max-w-sm">
          <h3 className="text-2xl font-bold mt-4 text-center">
            Backend & API Development
          </h3>
          <p className="text-[#fff] mt-3 text-xl">
            I develop secure, scalable backends using Node.js, Express, GraphQL
            — including database design, REST/GraphQL APIs, and integrations.
          </p>
        </div>
      </div>
    </section>
  );
}
