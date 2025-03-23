import React from "react";

const Resume = () => {
  return (
    <div className="bg-[#1a1225] text-white flex flex-col items-center justify-center min-h-screen py-12 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center text-[#ff9a8c] mb-8">
        &lt;Resume/&gt;
      </h2>
      <div className="w-full max-w-4xl h-[80vh] overflow-y-scroll border-4 border-[#ff9a8c] rounded-lg shadow-lg">
        <img
          src="/Abhai_s_Resume_page-0001.jpg"
          alt="Resume"
          className="w-full"
        />
      </div>
      <a
        href="/Abhai_s_Resume.pdf"
        download
        className="mt-6 bg-[#ff9a8c] text-[#1a1225] font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
