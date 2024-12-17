import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollCardsReverse = () => {
  const rowRef = useRef();

  useEffect(() => {
    // Smooth horizontal scrolling in the opposite direction
    gsap.to(rowRef.current, {
      x: "50%", // Scroll right smoothly
      ease: "linear", // Consistent speed
      scrollTrigger: {
        trigger: rowRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true, // Tied to scroll position
      },
    });
  }, []);

  const cardSizes = [
    { width: "340px", height: "139px" }, // Small
    { width: "380px", height: "149px" }, // Medium
    { width: "320px", height: "159px" }, // Large
  ];

  const images = [
    "/Assets/rev.png", // Replace with your actual image URLs
    "/Assets/rev.png",
    "/Assets/rev.png",
    "/Assets/rev.png",
    "/Assets/rev.png",
    "/Assets/rev.png",
  ];

  const generateCards = () => {
    return Array.from({ length: 12 }).map((_, index) => {
      const { width, height } = cardSizes[index % cardSizes.length];
      const imageUrl = images[index % images.length]; // Cycle through images

      return (
        <div
          key={index}
          className="rounded-lg shadow-lg flex items-center justify-center text-lg font-semibold"
          style={{
            width,
            height,
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#fff",
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
            flexShrink: 0,
          }}
        ></div>
      );
    });
  };

  return (
    <div className="bg-gray-500 py-16">
      <div className="overflow-hidden">
        <div
          ref={rowRef}
          className="flex gap-6"
          style={{
            width: "200%",
            display: "flex",
          }}
        >
          {generateCards()}
        </div>
      </div>
    </div>
  );
};

export default ScrollCardsReverse;
