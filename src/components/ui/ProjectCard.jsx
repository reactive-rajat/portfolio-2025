import React from "react";

export const ProjectCard = ({ project, showProject }) => {
  return (
    <a className="card" onClick={showProject}>
      <div className="head">
        Head
      </div>
      <div className="body">
        View {project.projectname}
      </div>
    </a>
  );
};
