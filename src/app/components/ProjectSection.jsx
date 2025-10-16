import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsData = [
  {
    id: 1,
    image: "/projects/Food_App.png",
    title: "Food Delivery App",
    description: "Responsive web application for food ordering with real-time tracking features and payment integration",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prannav225/FoodApp_Front-end",
  },
  {
    id: 2,
    image: "/projects/LMS.png",
    title: "Library Management System",
    description: "Comprehensive library management solution with inventory tracking, user management, and book reservation system",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prannav225/LibraryManagementSystem",
  },
  {
    id: 3,
    image: "/projects/Task_Tracker.png",
    title: "Task Tracker Application",
    description: "Productivity tool for team task management with real-time collaboration features and progress tracking",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prannav225/TaskTracker-Frontend",
  },
  {
    id: 4,
    image: "/projects/Truck_Tracker.png",
    title: "Truck Tracker",
    description: "Logistics management system for real-time vehicle tracking and fleet management with geolocation services",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prannav225/Truck_Tracker_App",
  },
  {
    id: 5,
    image: "/projects/Youtube_Clone.png",
    title: "Youtube Clone",
    description: "Video streaming platform with user authentication, video upload functionality, and recommendation system",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prannav225/MyTube",
  },
  {
    id: 6,
    image: "/projects/Beyondental.png",
    title: "Beyond Dental Website",
    description: "Professional dental clinic website with appointment booking system and treatment information",
    tag: ["All", "Web"],
    gitUrl: "https://beyondental.in/",
  },
];
const ProjectSection = () => {
  return (
    <section className="py-16 md:py-24" id='projects'>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Projects
          </h2>
          <div className="bg-gradient-to-r from-yellow-500 via-orange-300 to-sky-500 h-1 w-24 md:w-52 mx-auto rounded-full mb-6"></div>
          <p className="text-[#ADB7BE] max-w-2xl mx-auto text-lg">
            Explore my portfolio of projects showcasing my skills in full-stack development, 
            IoT solutions, and modern web technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default ProjectSection;