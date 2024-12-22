import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurPhilosophy = () => {
  const titleRef = useRef(null); // Reference for "Our Philosophy" title

  useEffect(() => {
    // Animate "Our Philosophy" title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { scale: 1 },
        {
          scale: 1.3,
          duration: 2,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div
      className="bg-[#fdf9f4] py-28 px-6 flex flex-col items-center"
      style={{ minHeight: "0px" }}
    >
      {/* "Our Philosophy" Title */}
      <h2
        ref={titleRef}
        className="text-center text-3xl font-bold mb-32 mt-0 text-customPink"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Our Philosophy
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* First Quote */}
        <div className="text-center flex flex-col items-center space-y-4 px-4">
          <blockquote className="text-2xl lg:text-2xl font-medium text-gray-500 leading-relaxed">
            Our practice is all about a special dental experience, where
            openness and expertise are the focus.  
            
          </blockquote>
        </div>

        {/* Second Quote */}
        <div className="text-center flex flex-col items-center space-y-4 px-4">
          <blockquote className="text-2xl lg:text-2xl font-medium text-gray-500 leading-relaxed">
          Our cultural diversity and
            warm atmosphere make us special.
           
          </blockquote>
        </div>
          {/* 3ed Quote */}
          <div className="text-center flex flex-col items-center space-y-4 px-4">
          <blockquote className="text-2xl lg:text-2xl font-medium text-gray-500 leading-relaxed">
          For us, every patient is unique, and together we achieve unbeatable
          results.
          </blockquote>
        </div>
          {/* 4th Quote */}
          <div className="text-center flex flex-col items-center space-y-4 px-4">
          <blockquote className="text-2xl lg:text-2xl font-medium text-gray-500 leading-relaxed">
          We stand for tailor-made solutions, characterized by
          communication, trust and a passion for dental health.
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default OurPhilosophy;
