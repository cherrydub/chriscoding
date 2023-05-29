import React from "react";
import LocalTime from "./components/LocalTime";

export default function BottomDesktopBar({
  activeComponents,
  addActiveComponent,
  removeActiveComponent,
}) {
  const handleLinkClick = (componentName) => {
    if (activeComponents.includes(componentName)) {
      removeActiveComponent(componentName);
      addActiveComponent(componentName);
    } else {
      addActiveComponent(componentName);
    }
  };
  return (
    <div className="start-bar flex">
      <div className="flex-initial start-button-wrapper text-center justify-center items-center self-center">
        <img
          src="https://win98icons.alexmeub.com/images/start-button.png"
          width={"35px"}
          alt=""
        />
      </div>
      <div className="flex-auto mx-2 flex">
        {activeComponents.map((window) => {
          return (
            <div
              className="start-bar-tabs flex-auto text-center justify-center items-center"
              key={window}
            >
              {window}
            </div>
          );
        })}
      </div>
      <div
        className="start-bar-time flex-initial text-center justify-center items-center"
        onClick={() => handleLinkClick("Timer")}
      >
        <LocalTime />
      </div>
    </div>
  );
}
