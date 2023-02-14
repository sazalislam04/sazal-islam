import React from "react";
import data from "../components/data/projects.json";

const Portfolio = () => {
  return (
    <section className="py-10">
      <div>
        <h2 className="text-center text-4xl section-heading mb-14">
          <span className="text-indigo-800">My</span> Works
        </h2>
      </div>
      <div className="container grid grid-cols-1 gap-10 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {data.map((project) => (
          <div key={project.id}>
            <div
              className="overflow-hidden custom-shadow bg-cover rounded-lg cursor-pointer h-72 group"
              style={{
                backgroundImage: `url(${project.img})`,
                width: "100%",
                height: "288px",
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-2xl font-semibold text-white capitalize">
                  {project.title}
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">
                  Website
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
