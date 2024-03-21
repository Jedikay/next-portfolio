"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "NextJs Portfolio",
    description: "Portfolio built using NextJs.",
    image: "/images/projects/portfolio.png",
    tag: ["React", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "React To Do List",
    description: "To Do list built using React",
    image: "/images/projects/todo.png",
    tag: ["Web", "React"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "JavaScript Mole Game",
    description: "Feed a mole game built using Javascript.",
    image: "/images/projects/molegame.png",
    tag: ["JS", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "JavaScript Calculator",
    description: "Calculator built using JavaScript.",
    image: "/images/projects/calc.png",
    tag: ["JS", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Web");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filterProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="mt-4 text-4xl font-bold text-center text-purple-500">
        My Projects
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="JS"
          isSelected={tag === "JS"}
        />
      </div>
      <div className="relative w-full overflow-x-auto h-[350px] md:h-[420px] rounded-3xl">
        <div className="absolute top-0 z-50 flex flex-row items-center justify-center gap-4">
          {filterProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
