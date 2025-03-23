import React from "react";

const projects = [
  {
    title: "Starbucks Clone Website",
    description: "Design of starbucks website",
    techStack: "REACT, BOOTSTRAP",
    image: "/Screenshot (82).png",
    website: "https://starbucks-clone-kohl.vercel.app",
    project: "https://github.com/Abhaiks10/starbucks-clone-",
  },
  {
    title: "Educational Platform Website ",
    description: " a user-friendly interface and seamless navigation for students and educators.",
    techStack: "Bootstrap, HTML, CSS.",
    image: "/Screenshot (84).png",
    website: "https://educational-platform-boostrap.vercel.app/  ",
    project: "https://github.com/Abhaiks10/Educational-platform-Boostrap",
  },
  {
    title: "Game using Javascript",
    description: "Simple ball game",
    techStack: "Javascript, HTML",
    image: "/Screenshot (85).png",
    website: "https://game-using-javascript.vercel.app/    ",
    project: "https://github.com/Abhaiks10/game-using-javascript",
  },
];

const Projects = () => {
  return (
    <div className="bg-[#1a1225] mt-20 text-white py-12 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center text-[#ff9a8c] mb-8">
        &lt;Projects/&gt;
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#322b45] p-6 rounded-lg text-center">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-xl font-bold text-[#ff9a8c]">{project.title}</h3>
            <p className="text-[#f7b4a5]">{project.description}</p>
            <p className="text-sm font-bold text-[#ff9a8c] mt-2">{project.techStack}</p>
            <div className="mt-4 flex justify-center gap-4">
              <a
                href={project.website}
                className="bg-[#ff9a8c] text-black px-4 py-2 rounded-lg font-bold"
              >
                View Website
              </a>
              <a
                href={project.project}
                className="bg-[#ff9a8c] text-black px-4 py-2 rounded-lg font-bold"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
