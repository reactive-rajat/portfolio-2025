import React from "react";

export const ProjectView = ({ activeProject }) => {
  return (
    <iframe
      src={activeProject.url}
      style={{ width: "98vw", height: "98vh" }}
    ></iframe>
  );
};
