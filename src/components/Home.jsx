import React from "react";

const Home = () => {
  return (
    <section className="bg-[#1A1625] text-white min-h-screen flex flex-col items-center justify-center px-6 py-12 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-stars opacity-10"></div>
      <div className="flex flex-col md:flex-row items-center w-full max-w-5xl relative z-10">
        <div className="bg-[#2D2640] mt-10 p-8 md:p-12 rounded-2xl shadow-xl text-center md:text-left max-w-md md:max-w-lg">
          <h1 className="text-3xl md:text-3xl font-extrabold text-white">Hello Everyone!! 🙋‍♂️</h1>
          <p className="text-3xl md:text-4xl mt-4">
            This is <span className="text-pink-300 font-bold">Abhai K S</span>
          </p>
          <p className="text-3xl md:text-3xl mt-3">
            I am a <span className="text-pink-300 font-bold">Software Developer</span>
          </p>
        </div>
        <div className="mt-10 md:mt-0 md:ml-12 flex justify-center">
          <img
            src="https://rahulkp15.onrender.com/static/media/dashboard.48011af8a598cfeec00f.gif"
            alt="Developer Working"
            className="w-96 md:w-[450px] drop-shadow-xl animate-fadeIn"
          />
        </div>
      </div>
      <div className="bg-[#2D2640] text-white text-lg p-8 rounded-xl w-full max-w-2xl mt-12 text-center shadow-lg relative z-10">
        <p className="font-bold text-3xl">Random Quote</p>
        <p className="text-pink-300 font-extrabold text-1xl pt-3">"Innovate, create, and transform ideas into reality."</p>
      </div>
    </section>
  );
};

export default Home;
