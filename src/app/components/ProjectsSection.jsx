import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "JavaScript Calculator",
    description: "Calculator built using JavaScript.",
    image: "/images/projects/calc.png",
    tag: ["All, JS"],
  },
  {
    id: 2,
    title: "JavaScript Mole Game",
    description: "Feed a mole game built using Javascript.",
    image: "/images/projects/molegame.png",
    tag: ["All, JS"],
  },
  {
    id: 3,
    title: "React To Do List",
    description: "To Do list built using React",
    image: "/images/projects/todo.png",
    tag: ["All, React"],
  },
  {
    id: 4,
    title: "NextJs Portfolio",
    description: "Portfolio built using NextJs.",
    image: "/images/projects/portfolio.png",
    tag: ["All"],
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="mt-4 text-4xl font-bold text-center text-purple-500">
        My Projects
      </h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
