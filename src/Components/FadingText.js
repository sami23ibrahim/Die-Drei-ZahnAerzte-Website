// import React, { useState, useEffect } from "react";

// const FadingText = ({ text }) => {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Calculate downward motion
//   const translateY = Math.min(scrollY * 0.5, 150); // Moves downward, caps at 150px

//   return (
//     <div
//       className="absolute inset-0 flex justify-center items-center z-10 pointer-events-none overflow-hidden"
//       style={{
//         transform: `translateY(${translateY}px)`, // Downward motion
//         height: "100px", // Imaginary horizontal line
//         overflow: "hidden", // Ensures disappearance behind the line
//       }}
//     >
//       <h1
//         className="text-white text-6xl md:text-7xl font-bold text-center uppercase"
//         style={{
//           transform: `translateY(${translateY}px)`,
//         }}
//       >
//         {text}
//       </h1>
//     </div>
//   );
// };

// export default FadingText;




import React, { useState, useEffect } from "react";

const FadingText = ({ text, textOffset = 0, disappearLine = 100 }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate downward motion
  const translateY = Math.min(scrollY * 0.5, 150); // Moves downward, caps at 150px

  return (
    <div
      className="absolute inset-0 flex justify-center z-10 pointer-events-none overflow-hidden"
      style={{
        transform: `translateY(${textOffset}px)`, // Adjust the initial vertical position of the text
        height: `${disappearLine}px`, // Adjust the imaginary line height
      }}
    >
      <h1
        className="text-white text-6xl md:text-7xl font-bold text-center uppercase"
        style={{
          transform: `translateY(${translateY}px)`, // Scroll-based motion
        }}
      >
        {text}
      </h1>
    </div>
  );
};

export default FadingText;
