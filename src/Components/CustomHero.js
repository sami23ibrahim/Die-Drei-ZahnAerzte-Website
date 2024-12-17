// import React from "react";

// const CustomHero = () => {
//   return (
//     <div
//       className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center"
//       style={{

//         backgroundImage: "url('/Assets/tree.png')"
//     }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-opacity-30"></div>

//       {/* Content */}
//       <div className="relative text-center text-white">
//         {/* Main Text */}
//         <h1 className="text-3xl md:text-5xl font-bold">
//         Your dental practice directly at Kotti in the middle of Kreuzberg
//         </h1>
//         <p className="mt-2 md:text-lg">
//         In our practice we combine openness and expertise.
//         We speak your language and set new standards in dental health with passion.
//         </p>
        
//       </div>

//       {/* Cards */}
//       <div className="relative z-10 flex flex-wrap justify-center mt-8 gap-4 px-4">
//         <div className="bg-white bg-opacity-20 text-center p-8 rounded-lg shadow-md w-64">
//           <div className="text-2xl text-white-500">
//             <i className="fas fa-users"></i>
//           </div>
//           <p className="font-bold text-lg">0</p>
//           <p>Practice in the heart
//           of Kreuzberg</p>
//         </div>

//         <div className="bg-white bg-opacity-80 text-center p-4 rounded-lg shadow-md w-64">
//           <div className="text-2xl text-blue-500">
//             <i className="fas fa-euro-sign"></i>
//           </div>
//           <p className="font-bold text-lg">0M</p>
//           <p>Our team speaks
//           over 9 languages</p>
//         </div>

//         <div className="bg-white bg-opacity-80 text-center p-4 rounded-lg shadow-md w-64">
//           <div className="text-2xl text-blue-500">
//             <i className="fas fa-check-circle"></i>
//           </div>
//           <p className="font-bold text-lg">0</p>
//           <p>Modern practice according to
//           the latest standards</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomHero;




                                     //  with static image//

// import React from "react";

// const CustomHero = () => {
//   return (
//     <div
//       className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center"
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
//       <div className="bg-gray-800 bg-opacity-25 text-center text-white p-8 rounded-lg shadow-md w-72">
//       <img
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



                            // with parallax scrolling//


// import React from "react";

// const CustomHero = () => {
//   return (
//     <div
//       className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center"
//       style={{
//         backgroundImage: "url('/Assets/tree.png')", // Change this path to use a different background image
//         backgroundAttachment: "fixed", // Add this for the parallax effect
//         backgroundSize: "cover", // Ensure the background image covers the container
//         backgroundPosition: "center", // Center the background image
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-30"></div> {/* Add bg-black for contrast */}

//       {/* Content */}
//       <div className="relative text-center text-white px-8 md:px-[20%]">
//         {/* Main Text */}
//         <h1 className="text-3xl md:text-5xl font-bold mb-16">
//           Your dental practice directly at Kotti in the middle of Kreuzberg
//         </h1>
//         <p className="mt-8 md:text-lg"> {/* Increased margin-top for spacing */}
//           In our practice we combine openness and expertise. We speak your language and set new standards in dental health with passion.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="relative z-10 flex flex-wrap justify-center mt-16 gap-6 px-4"> {/* Increased spacing with mt-16 */}
//         <div className="bg-gray-800 bg-opacity-50 text-center text-white p-8 rounded-lg shadow-md w-72">
//           <img
//             src="/Assets/across-the-world.svg" // Replace with the path to your image
//             alt="Icon"
//             className="mx-auto w-12 h-12 mb-4" // Image styling
//           />
//           <p className="mt-2 text-lg">Practice in the heart of Kreuzberg</p>
//         </div>

//         <div className="bg-gray-800 bg-opacity-50 text-center text-white p-8 rounded-lg shadow-md w-72">
//           <img
//             src="/Assets/heart.svg" // Replace with the path to your image
//             alt="Icon"
//             className="mx-auto w-12 h-12 mb-4"
//           />
//           <p className="mt-2 text-lg">Our team speaks over 9 languages</p>
//         </div>

//         <div className="bg-gray-800 bg-opacity-50 text-center text-white p-8 rounded-lg shadow-md w-72">
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




//                                         with video


import React from "react";

const CustomHero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/Assets/vid1.mp4" // Replace with your video path
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div> {/* Semi-transparent overlay */}

      {/* Content */}
      <div className="relative text-center text-white px-8 md:px-[20%]">
        {/* Main Text */}
        <h1 className="text-3xl md:text-5xl font-bold mb-16">
          Your dental practice directly at Kotti in the middle of Kreuzberg
        </h1>
        <p className="mt-2 md:text-lg">
          In our practice we combine openness and expertise. We speak your language and set new standards in dental health with passion.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 flex flex-wrap justify-center mt-16 gap-4 px-4">
        <div className="bg-gray-400 bg-opacity-15 text-center text-white p-8 rounded-lg shadow-md w-72">
          <img
            src="/Assets/across-the-world.svg" // Replace with the path to your image
            alt="Icon"
            className="mx-auto w-12 h-12 mb-4" // Image styling
          />
          <p className="mt-2 text-lg">Practice in the heart of Kreuzberg</p>
        </div>

        <div className="bg-gray-800 bg-opacity-10 text-center text-white p-8 rounded-lg shadow-md w-72">
          <img
            src="/Assets/heart.svg" // Replace with the path to your image
            alt="Icon"
            className="mx-auto w-12 h-12 mb-4"
          />
          <p className="mt-2 text-lg">Our team speaks over 9 languages</p>
        </div>

        <div className="bg-gray-800 bg-opacity-30 text-center text-white p-8 rounded-lg shadow-md w-72">
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
