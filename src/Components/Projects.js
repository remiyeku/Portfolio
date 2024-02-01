import { ComputerDesktopIcon } from "@heroicons/react/24/solid";
import React from "react";
import { projects } from "../data/data";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <ComputerDesktopIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            {"Apps I've Built"}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            See below all the projects I have built so far! Hovering over the
            image shows a brief description and clicking on this will take you
            to the site. You can see the source code by clicking on the
            respective github link. I regularly update so check in again soon.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <Image
                  width={500}
                  height={500}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  alt="profile picture"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed pb-5">{project.description}</p>
                  <a
                    href={project.gitlink}
                    className="inline-flex text-black bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                  >
                    Link to GitHub Repository
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
