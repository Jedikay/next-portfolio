import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "JavaScript Calculator",
    description: "Calculator built using JavaScript.",
    image: "/images/projects/calc.png",
  },
  {
    id: 1,
    title: "JavaScript Mole Game",
    description: "Feed a mole game built using Javascript.",
    image: "/images/projects/molegame.png",
  },
  {
    id: 1,
    title: "React To Do List",
    description: "To Do list built using React",
    image: "/images/projects/todo.png",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2>ProjectsSection</h2>
      <div></div>
    </>
  );
};

export default ProjectsSection;
