// import React from "react";

// const CustomHero = () => {
//   return (
//     <div
//       className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center rounded-t-3xl rounded-b-3xl overflow-hidden"
//       style={{
//         backgroundImage: "url('/Assets/tree.png')", // Change this path to use a different background image
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-opacity-30"></div>

//       {/* Content */}
//       <div className="relative text-center text-white px-8 md:px-[20%]"> {/* 20% padding added to each side */}
//         {/* Main Text */}
//         <h1 className="text-3xl md:text-5xl font-bold mb-16">
//           Your dental practice directly at Kotti in the middle of Kreuzberg
//         </h1>
//         <p className="mt-2 md:text-lg">
//           In our practice we combine openness and expertise. We speak your language and set new standards in dental health with passion.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="relative z-10 flex flex-wrap justify-center mt-8 gap-4 px-4">
//         <div className="bg-gray-800 bg-opacity-25 text-center text-white p-8 rounded-lg shadow-md w-72">
//           <img
//             src="/Assets/across-the-world.svg" // Replace with the path to your image
//             alt="Icon"
//             className="mx-auto w-12 h-12 mb-4" // Image styling
//           />
//           <p className="mt-2 text-lg">Practice in the heart of Kreuzberg</p>
//         </div>

//         <div className="bg-gray-800 bg-opacity-25 text-center text-white p-8 rounded-lg shadow-md w-72">
//           <img
//             src="/Assets/heart.svg" // Replace with the path to your image
//             alt="Icon"
//             className="mx-auto w-12 h-12 mb-4"
//           />
//           <p className="mt-2 text-lg">Our team speaks over 9 languages</p>
//         </div>

//         <div className="bg-gray-800 bg-opacity-25 text-center text-white p-8 rounded-lg shadow-md w-72">
//           <img
//             src="/Assets/dentist.svg" // Replace with the path to your image
//             alt="Icon"
//             className="mx-auto w-12 h-12 mb-4"
//           />
//           <p className="mt-2 text-lg">Modern practice according to the latest standards</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomHero;




// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const CustomHero = () => {
//   const heroRef = useRef();

//   useEffect(() => {
//     const hero = heroRef.current;

//     gsap.fromTo(
//       hero,
//       {
//         width: "80%",
//         margin: "0 auto",
//         marginTop: "60px",
//       },
//       {
//         width: "100%",
//         margin: "0",
//         scrollTrigger: {
//           trigger: hero,
//           start: "top center",
//           end: "bottom center",
//           scrub: true,
//         },
//       }
//     );
//   }, []);

//   return (
//     <div
//       ref={heroRef}
//       className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center rounded-t-2xl rounded-b-3xl overflow-hidden"
//       style={{
//         backgroundImage: "url('/Assets/tree.png')", // Change this path to use a different background image
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-opacity-0"></div>

//       {/* Content */}
//       <div className="relative text-center text-white px-8 md:px-[20%]">
//         {/* Main Text */}
//         <h1 className="text-2xl md:text-3xl font-bold mb-16">
//           Your dental practice directly at Kotti in the middle of Kreuzberg
//         </h1>
//         <p className="mt-2 md:text-lg">
//           In our practice we combine openness and expertise. We speak your language and set new standards in dental health with passion.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="relative z-10 flex flex-wrap justify-center mt-8 gap-4 px-4">
//         <div className="bg-gray-800 bg-opacity-25 text-center text-white p-8 rounded-lg shadow-md w-72">
//           <img
//             src="/Assets/across-the-world.svg" // Replace with the path to your image
//             alt="Icon"
//             className="mx-auto w-12 h-12 mb-4" // Image styling
//           />
//           <p className="mt-2 text-lg">Practice in the heart of Kreuzberg</p>
//         </div>

//         <div className="bg-gray-800 bg-opacity-25 text-center text-white p-8 rounded-lg shadow-md w-72">
//           <img
//             src="/Assets/heart.svg" // Replace with the path to your image
//             alt="Icon"
//             className="mx-auto w-12 h-12 mb-4"
//           />
//           <p className="mt-2 text-lg">Our team speaks over 9 languages</p>
//         </div>

//         <div className="bg-gray-800 bg-opacity-25 text-center text-white p-8 rounded-lg shadow-md w-72">
//           <img
//             src="/Assets/dentist.svg" // Replace with the path to your image
//             alt="Icon"
//             className="mx-auto w-12 h-12 mb-4"
//           />
//           <p className="mt-2 text-lg">Modern practice according to the latest standards</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomHero;



import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CustomHero = () => {
  const heroRef = useRef();

  useEffect(() => {
    const hero = heroRef.current;

    gsap.fromTo(
      hero,
      {
        width: "80%",
        margin: "0 auto",
        marginTop: "60px",
      },
      {
        width: "100%",
        margin: "0",
        scrollTrigger: {
          trigger: hero,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center rounded-t-2xl rounded-b-3xl overflow-hidden"
      style={{
        backgroundImage: "url('/Assets/tree.png')", // Change this path to use a different background image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-0"></div>

      {/* Content */}
      <div
        className="relative text-center text-[#fdf9f4] px-8"
        style={{
          maxWidth: "800px", // Restrict the text content width
          width: "100%", // Ensure it remains responsive
        }}
      >
        {/* Main Text */}
        <h1 className="text-2xl md:text-3xl font-bold text-[#fdf9f4] mb-16">
          Your dental practice directly at Kotti in the middle of Kreuzberg
        </h1>
        <p className="mt-2 md:text-lg">
          In our practice we combine openness and expertise. We speak your language and set new standards in dental health with passion.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 flex flex-wrap justify-center mt-8 gap-4 px-4">
        <div className="bg-gray-800 bg-opacity-25 text-center text-[#fdf9f4] p-8 rounded-lg shadow-md w-72">
          <img
            src="/Assets/across-the-world.svg" // Replace with the path to your image
            alt="Icon"
            className="mx-auto w-12 h-12 mb-4" // Image styling
          />
          <p className="mt-2 text-lg">Practice in the heart of Kreuzberg</p>
        </div>

        <div className="bg-gray-800 bg-opacity-25 text-center text-white p-8 rounded-lg shadow-md w-72">
          <img
            src="/Assets/heart.svg" // Replace with the path to your image
            alt="Icon"
            className="mx-auto w-12 h-12 mb-4"
          />
          <p className="mt-2 text-lg">Our team speaks over 9 languages</p>
        </div>

        <div className="bg-gray-800 bg-opacity-25 text-center text-white p-8 rounded-lg shadow-md w-72">
          <img
            src="/Assets/dentist.svg" // Replace with the path to your image
            alt="Icon"
            className="mx-auto w-12 h-12 mb-4"
          />
          <p className="mt-2 text-lg">Modern practice according to the latest standards</p>
        </div>
      </div>
    </div>
  );
};

export default CustomHero;
