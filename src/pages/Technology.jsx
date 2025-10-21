import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

const Technology = () => {
  const [data, setData] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [direction, setDirection] = useState(0);

  // Fetch technology data from data.json
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  // Scroll navigation (laptop)
  useEffect(() => {
    const handleScroll = (e) => {
      if (isScrolling || !data) return;

      setIsScrolling(true);
      if (e.deltaY > 0) {
        setDirection(1);
        setActiveIndex((prev) =>
          prev === data.technology.length - 1 ? 0 : prev + 1
        );
      } else if (e.deltaY < 0) {
        setDirection(-1);
        setActiveIndex((prev) =>
          prev === 0 ? data.technology.length - 1 : prev - 1
        );
      }
      setTimeout(() => setIsScrolling(false), 700);
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [data, isScrolling]);

  // Swipe navigation (mobile)
  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.changedTouches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          setDirection(1);
          setActiveIndex((prev) =>
            prev === data.technology.length - 1 ? 0 : prev + 1
          );
        } else {
          setDirection(-1);
          setActiveIndex((prev) =>
            prev === 0 ? data.technology.length - 1 : prev - 1
          );
        }
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

  const tech = data.technology[activeIndex];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between items-center text-white px-6 py-10 md:px-20"
      style={{
        backgroundImage: "url('/assets/background-technology-desktop.jpg')",
      }}
    >
      <Navbar/>
      {/* Header */}
      <div className="w-full text-center md:text-left mt-10">
        <h2 className="uppercase tracking-[2px] text-lg md:text-2xl text-gray-300">
          <span className="opacity-40 mr-2">03</span> Space Launch 101
        </h2>
      </div>

      {/* Animated content */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full mt-10 gap-10 md:gap-0 overflow-hidden not-md:flex-col-reverse">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={tech.name}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-8 md:gap-12 w-full not-md:flex-col-reverse"
          >
            {/* Numbered buttons */}
            <div className="flex md:flex-col gap-4">
              {data.technology.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-full border border-gray-400 font-bellefair text-lg md:text-2xl transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-white text-black"
                      : "text-white hover:bg-gray-600/40"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* Text content */}
            <div className="max-w-xl text-center md:text-left space-y-6">
              <h4 className="uppercase text-[#D0D6F9] tracking-[2px]">
                The terminology...
              </h4>
              <h1 className="uppercase text-4xl md:text-6xl font-bellefair">
                {tech.name}
              </h1>
              <p className="text-[#D0D6F9] text-base md:text-lg leading-relaxed">
                {tech.description}
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-end transition-transform duration-700">
              <img
                src={tech.images.portrait || tech.images.landscape}
                alt={tech.name}
                className="w-[250px] md:w-[400px] lg:w-[500px] object-contain rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Technology;
