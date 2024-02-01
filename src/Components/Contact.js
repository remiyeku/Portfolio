import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="px-5 mx-auto text-center lg:px-40 px-10 py-10 flex flex-col justify-center ">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white pb-5">
          Contact Details
        </h1>
        <div className="lg:w-full lg:h-96 md:h-64 sm:h-48 bg-gray-900 rounded-lg overflow-hidden mb-6">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="w-full h-full"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.9)" }}
            src="https://www.google.com/maps/embed/v1/place?q=London,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>
        <div className="bg-gray-900 relative flex py-6 rounded shadow-md justify-center">
          <div className="w-full lg:w-1/2 lg:px-6">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              Area
            </h2>
            <p className="mt-1 text-sm">
              South East London, <br />
              United Kingdom
            </p>
          </div>
          <div className="w-full lg:w-1/2 lg:px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              Email
            </h2>
            <a
              href="mailto:antakin4@gmail.com"
              className="text-indigo-400 leading-relaxed px-3"
            >
              antakin4@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
