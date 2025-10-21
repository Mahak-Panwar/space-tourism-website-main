import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Crew = () => {
  const [data, setData] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  // 🌀 Scroll navigation (desktop)
  useEffect(() => {
    const handleScroll = (e) => {
      if (isScrolling || !data) return;

      setIsScrolling(true);
      if (e.deltaY > 0) {
        // scroll down → next
        setActiveIndex((prev) =>
          prev === data.crew.length - 1 ? 0 : prev + 1
        );
      } else if (e.deltaY < 0) {
        // scroll up → previous
        setActiveIndex((prev) =>
          prev === 0 ? data.crew.length - 1 : prev - 1
        );
      }
      setTimeout(() => setIsScrolling(false), 700);
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [data, isScrolling]);

  // 📱 Touch swipe navigation (mobile)
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].clientX;
      handleSwipe();
    };

    const handleSwipe = () => {
      if (!data) return;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) < 50) return; // ignore small swipes

      if (diff > 0) {
        // swipe left → next
        setActiveIndex((prev) =>
          prev === data.crew.length - 1 ? 0 : prev + 1
        );
      } else {
        // swipe right → previous
        setActiveIndex((prev) =>
          prev === 0 ? data.crew.length - 1 : prev - 1
        );
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [data]);

  if (!data) return <p className="text-white text-center mt-10">Loading...</p>;

  const crew = data.crew[activeIndex];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between items-center text-white px-6 py-10 md:px-20 transition-all duration-700"
      style={{
        backgroundImage: "url('/assets/crew/background-crew-desktop.jpg')",
      }}
    >
      <Navbar/>
      {/* Header */}
      <div className="w-full text-center md:text-left mt-10">
        <h2 className="uppercase tracking-[2px] text-lg md:text-2xl text-gray-300">
          <span className="opacity-40 mr-2">02</span> Meet your crew
        </h2>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full mt-10 gap-10 md:gap-0 not-md:flex-col-reverse">
        {/* Left side (Text) */}
        <div className="flex flex-col justify-center text-center md:text-left max-w-xl space-y-6 transition-all duration-700">
          <h3 className="uppercase text-gray-400 text-2xl md:text-3xl font-bellefair">
            {crew.role}
          </h3>
          <h1 className="uppercase text-4xl md:text-6xl font-bellefair">
            {crew.name}
          </h1>
          <p className="text-[#D0D6F9] text-base md:text-lg leading-relaxed">
            {crew.bio}
          </p>

          {/* Dots */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            {data.crew.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-white scale-125"
                    : "bg-gray-500/40 hover:bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Right side (Image) */}
        <div className="flex justify-center md:justify-end transition-transform duration-700">
          <img
            src={crew.images.png}
            alt={crew.name}
            className="w-[250px] md:w-[400px] object-contain animate-fadeIn"
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
