import React from "react";
import { FaPlane,  FaFutbol,  } from "react-icons/fa";
import { MdOutlineSportsCricket } from "react-icons/md";

const About = () => {

  const skills = [
    { name: "Angular", img: "https://rahulkp15.onrender.com/static/media/angular.f2a117dc378f26c754edcfac3b16ef44.svg" },
    { name: "React", img: "https://rahulkp15.onrender.com/static/media/react.cc8a3326a9a43518b033b383390f00d0.svg" },
    { name: "JavaScript", img: "https://rahulkp15.onrender.com/static/media/javascript.e7363ab96f901afdeb86963dd6a44ce2.svg" },
    { name: "Tailwind css", img: "https://www.drupal.org/files/project-images/screenshot_361.png" },
    { name: "Node.js", img: "https://rahulkp15.onrender.com/static/media/nodejs.41a0e1af4b72f61e8496e4877da39db3.svg" },
    { name: "MongoDB", img: "https://rahulkp15.onrender.com/static/media/mongodb.219f7ae3c9abd445d6b82c941ad73702.svg" },
    { name: "Express.js", img: "https://rahulkp15.onrender.com/static/media/express.1862ae411f8c1bde13179f1713fd3d06.svg" },
    { name: "Figma", img: "https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&h=540&q=75&fit=max&auto=format" },
    { name: "HTML5", img: "https://rahulkp15.onrender.com/static/media/html.2b36cd2143b950115530edfde54f21ac.svg" },
    { name: "CSS3", img: "https://rahulkp15.onrender.com/static/media/css3.d51e893b4eecd56b38b570e498bd1712.svg" },
    { name: "Bootstrap", img: "https://rahulkp15.onrender.com/static/media/bootstrap.268c4375260420e8d982.png" },
    { name: "Redux", img: "https://i1.wp.com/www.ux-republic.com/wp-content/uploads/2016/11/logo-redux.png?fit=500%2C500&ssl=1" },

  ];
  return (
    <>
    <div className="bg-[#1a1225] text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-12">
      {/* Left Section - Image */}
      <div className="md:w-1/2 mt-20 flex justify-center">
        <div className="relative border-4 border-[#f7b4a5] p-2 rounded-lg">
          <img
            src="https://tailwind-portfoilio.vercel.app/ABHAI.jpeg" 
            alt="Profile"
            className="w-full max-w-sm rounded-lg"
          />
        </div>
      </div>
      
      {/* Right Section - General Information */}
      <div className="md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
        <h2 className="text-3xl font-bold text-[#f7b4a5]">&lt;GENERAL INFORMATION/&gt;</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-[#322b45] p-4 rounded-lg">
            <p className="font-bold">Current Organization</p>
            <p className="text-[#ff9a8c]">Luminar Technolab, Kochi (Internship)</p>
          </div>
          <div className="bg-[#322b45] p-4 rounded-lg">
            <p className="font-bold">Designation</p>
            <p className="text-[#ff9a8c]">MERN Stack Developer</p>
          </div>
          <div className="bg-[#322b45] p-4 rounded-lg">
            <p className="font-bold">Location</p>
            <p className="text-[#ff9a8c]">Thrissur, Kerala</p>
          </div>
          <div className="bg-[#322b45] p-4 rounded-lg">
            <p className="font-bold">Education</p>
            <p className="text-[#ff9a8c]">Christ College Irinjalakuda</p>
          </div>
          <div className="bg-[#322b45] p-4 rounded-lg col-span-1 md:col-span-2">
            <p className="font-bold">Degree</p>
            <p className="text-[#ff9a8c]">BSC Computer Science</p>
          </div>
          <div className="bg-[#322b45] p-4 rounded-lg col-span-1 md:col-span-2">
            <p className="font-bold">Languages</p>
            <p className="text-[#ff9a8c]">English, Malayalam, Tamil, Hindi(basic)</p>
          </div>
        </div>
      </div>
    </div>




    <section className="bg-[#1a1225] text-white py-12 px-4">
      <h2 className="text-center text-3xl font-bold text-[#ff9a8c] mb-8">&lt;MY SKILLSET/&gt;</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="bg-[#322b45] p-4 rounded-lg flex items-center justify-center">
            <img src={skill.img} alt={skill.name} className="h-16 w-16 object-contain" />
          </div>
        ))}
      </div>
    </section>





    <div className="bg-[#1a1225] text-white py-12 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center text-[#ff9a8c] mb-8">
        &lt;MY INTERESTS AND HOBBIES/&gt;
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Traveling & Exploring */}
        <div className="bg-[#322b45] p-6 rounded-lg text-center">
          <FaPlane className="text-3xl mx-auto text-[#ff9a8c]" />
          <h3 className="text-xl font-bold mt-4">Travelling & Exploring</h3>
          <p className="mt-2 text-[#f7b4a5]">
            I love traveling and exploring new places, experiencing different cultures, and discovering new landscapes. It's my way of finding adventure and learning about the world.
          </p>
        </div>

        {/* Playing & Watching Football */}
        <div className="bg-[#322b45] p-6 rounded-lg text-center">
          <FaFutbol className="text-3xl mx-auto text-[#ff9a8c]" />
          <h3 className="text-xl font-bold mt-4">Playing & Watching Football</h3>
          <p className="mt-2 text-[#f7b4a5]">
            Football is a sport that excites me. I love playing on the field and experiencing the thrill of competition. I also enjoy watching matches, analyzing strategies, and supporting my favorite teams.
          </p>
        </div>

        {/* Watching Cricket */}
        <div className="bg-[#322b45] p-6 rounded-lg text-center">
          < MdOutlineSportsCricket className="text-3xl mx-auto text-[#ff9a8c]" />
          <h3 className="text-xl font-bold mt-4">Watching Cricket</h3>
          <p className="mt-2 text-[#f7b4a5]">
            Cricket has always been a favorite of mine. I love watching thrilling matches, following tournaments, and analyzing team performances. It's a game of skill, patience, and excitement.
          </p>
        </div>
      </div>
    </div>
   </>

  );
};

export default About;
