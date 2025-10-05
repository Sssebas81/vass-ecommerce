import React from "react";

function Heropage() {
  return (
    <div
      className="relative flex items-center justify-end min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/Hero.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-90 text-white p-16 rounded-2xl max-w-2xl mr-24 shadow-2xl">
        <p className="uppercase tracking-widest text-sm text-gray-300">
          Gamer collection
        </p>

        <h1 className="text-6xl font-extrabold leading-tight mt-4 mb-6">
          Level up your setup
        </h1>

        <p className="text-lg text-gray-400 mb-10">
          New line of gaming peripherals with ergonomic design and RGB
          backlighting. Explore the next generation of gaming experience with
          precision and comfort.
        </p>

        <button className="bg-white text-black font-bold px-10 py-4 rounded-md hover:bg-gray-200 transition">
          BUY NOW
        </button>
      </div>
    </div>
  );
}

export default Heropage;
