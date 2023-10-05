import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsData = [
  {
    id: 1,
    image: "/projects/Food_App.png",
    title: "Food App",
    description: "lorem ipsum dolor sit amet",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prannav225/FoodApp_Front-end",
  },
  {
    id: 2,
    image: "/projects/LMS.png",
    title: "Library Management System",
    description: "lorem ipsum dolor sit amet",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prannav225/LibraryManagementSystem",
  },
  {
    id: 3,
    image: "/projects/Task_Tracker.png",
    title: "Task Tracker",
    description: "lorem ipsum dolor sit amet",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prannav225/TaskTracker-Frontend",
  },
  {
    id: 4,
    image: "/projects/Truck_Tracker.png",
    title: "Truck Tracker",
    description: "lorem ipsum dolor sit amet",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prannav225/Truck_Tracker_App",
  },
  {
    id: 5,
    image: "/projects/Youtube_Clone.png",
    title: "Youtube Clone",
    description: "lorem ipsum dolor sit amet",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prannav225/MyTube",
  },
];
const ProjectSection = () => {
  return (
    <section className="my-12 py-12" id='projects'>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-2" >
        My Projects
      </h2>
      <div className="bg-gradient-to-r mx-auto from-yellow-500 via-orange-300 to-sky-500 h-1 w-52 mb-10 rounded-3xl"></div>
        
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {ProjectsData.map((project) => (
          <ProjectCard
            key={project.id}
            imgUrl={project.image}
            title={project.title}
            description={project.description}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
