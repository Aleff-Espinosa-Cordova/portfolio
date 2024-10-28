import { useState, useEffect } from "react";
import Image from "next/image";
import NotificationButton from "./githubalert";
import { projects } from "../data/information";

export function Projects({ children }) {
  const [showAll, setShowAll] = useState(false);
  const [projectsToShow, setProjectsToShow] = useState(2);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    function detectTouchDevice() {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    }
    detectTouchDevice();

    function updateProjectsToShow() {
      if (window.innerWidth < 768) {
        setProjectsToShow(2);
      } else {
        setProjectsToShow(3);
      }
    }

    updateProjectsToShow();
    window.addEventListener("resize", updateProjectsToShow);

    return () => {
      window.removeEventListener("resize", updateProjectsToShow);
    };
  }, []);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, projectsToShow);

  return (
    <section
      id="projects"
      className="relative py-20 bg-slate-900 mx-auto"
      style={{ width: "85%", zIndex: 1 }}
    >
      {children}

      <div className="relative max-w-full mx-auto px-8">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100 relative z-30">
          <div className="mb-12 md:mb-16 relative">
            <h1 className="text-3xl font-bold text-white md:text-3xl text-center px-2 m-4">
              Proyectos
            </h1>
            <p className="text-xl text-gray-100 text-center">
              Todos los proyectos en esta lista los he desarrollado y liderado
              con mucho entusiasmo.
            </p>
          </div>
        </div>

        <div className="absolute top-0 right-0 pl-6 z-50">
          <NotificationButton />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center z-10">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col justify-center items-center bg-opacity-50 rounded-lg shadow-lg overflow-hidden max-w-lg w-full transition-opacity duration-300 ${
                hoveredIndex === null || hoveredIndex === index
                  ? "opacity-100"
                  : "opacity-50"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                width={450}
                height={250}
                className="w-full h-64 object-cover top-0"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-700 leading-tight ">
                  {project.description}
                </p>
              </div>
              <div class="flex justify-start items-start px-6 pb-6">
                <span class="text-gray-800 font-semibold">{project.occupation}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          {!showAll ? (
            <button
              className="px-6 py-2 font-semibold border-2 rounded-lg duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:border-white border-black dark:text-white text-black hover:scale-105 transform"
              onClick={() => setShowAll(true)}
            >
              Ver más
            </button>
          ) : (
            <button
              className="px-6 py-2 font-semibold border-2 rounded-lg duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:border-white border-black dark:text-white text-black hover:scale-105 transform"
              onClick={() => setShowAll(false)}
            >
              Ver menos
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
