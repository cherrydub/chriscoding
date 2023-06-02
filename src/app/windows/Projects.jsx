import React, { useState } from "react";
import ProjectsContent from "./ProjectsContent";

export default function Projects({ activeComponents, removeActiveComponent }) {
  // const [windowSize, setWindowSize] = useState(null);

  const handleLinkClick = (event) => {
    event.stopPropagation();
    removeActiveComponent("Projects");
  };

  // const handleMaxRestore = () => {
  //   if (windowSize === null) {
  //     setWindowSize("h-screen w-screen top-0");
  //   } else {
  //     setWindowSize(null);
  //   }
  // };

  const isActive =
    (activeComponents ?? []).length > 0 && activeComponents[0] === "Projects";
  const titleBarClassName = `title-bar${isActive ? "" : " inactive"}`;

  return (
    <div className="">
      {/* <div className={`${windowSize} window inline-flex flex-col`}> */}
      <div className="window inline-flex flex-col">
        <div className={titleBarClassName}>
          <div className="title-bar-text flex cursor-default">
            <img
              className="btn pr-1"
              src="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-3.png"
              alt=""
            />
            Projects
          </div>
          <div className="title-bar-controls">
            <button
              onClick={handleLinkClick}
              className="bg-gray-300 btn hover:bg-gray-100"
              aria-label="Minimize"
            ></button>
            <button className="bg-gray-300" aria-label="Maximize"></button>
            <button
              onClick={handleLinkClick}
              className="bg-gray-300 btn hover:bg-gray-100"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div className="window-body">
          <div className="bg-white border-l border-t border-gray-500">
            <ProjectsContent />
          </div>
        </div>
      </div>
    </div>
  );
}
