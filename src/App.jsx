import { useState } from "react";
import projectData from "./data/projects";
import { Header } from "./components/global/Header";
import { ProjectCard } from "./components/ui/ProjectCard";
import { ProjectView } from "./components/ui/ProjectView";

function App() {
  const [activeId, setActiveId] = useState(null);
  const activeProject = projectData.find((item) => item.id === activeId);
  return (
    <>
      <Header />

      {projectData.map((item) => (
        <ProjectCard key={item.id} project={item} showProject={() => setActiveId(item.id)} />
      ))}

      {activeId !== null && activeProject && (
        <ProjectView activeProject={activeProject} />
      )}
    </>
  );
}

export default App;
