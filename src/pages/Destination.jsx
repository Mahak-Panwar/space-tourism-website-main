import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

const Destination = () => {
  const [data, setData] = useState(null);
  const [active, setActive] = useState("Moon");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <p className="loading">Loading...</p>;

  const destination = data.destinations.find(
    (dest) => dest.name.toLowerCase() === active.toLowerCase()
  );

  return (
    <div className="text-center text-[#fff] font-serif px-6 py-10 md:px-20 bg-black">
      <Navbar/>
      <div className="destination-content">
        <h2 className="uppercase tracking-[2px] text-lg mb-10">
          <span className="opacity-[0.25]">01</span> PICK YOUR DESTINATION
        </h2>

        <div className="flex justify-center items-center gap-20 flex-wrap">
          {/* Left Side Image */}
          <div >
            <img
              src={destination.images.png}
              alt={destination.name}
              className=" w-80 h-80 object-contain"
            />
          </div>

          {/* Right Side Info */}
          <div className="max-w-[400px] text-left">
            {/* Tabs */}
            <div className="flex gap-5 mb-5">
              {data.destinations.map((dest) => (
                <button
                  key={dest.name}
                  className={`bg-none border-none text-[#d0d6f9] uppercase tracking-[2px] cursor-pointer text-sm border-b-2 transition-all ${active === dest.name ? "active" : ""}`}
                  onClick={() => setActive(dest.name)}
                >
                  {dest.name}
                </button>
              ))}
            </div>

            {/* Destination Details */}
            <h1 className="text-7xl mt-2.5 font">{destination.name}</h1>
            <p className="planet-description">{destination.description}</p>

            <div className="line" />

            <div className="stats">
              <div>
                <p className="label">AVG. DISTANCE</p>
                <p className="value">{destination.distance}</p>
              </div>
              <div>
                <p className="label">EST. TRAVEL TIME</p>
                <p className="value">{destination.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
