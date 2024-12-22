

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const ScrollCards = () => {
//   const topRowRef = useRef([]);
//   const bottomRowRef = useRef([]);

//   useEffect(() => {
//     // Animate the top row to move left on scroll down
//     gsap.to(topRowRef.current, {
//       x: "-200%", // Move the row far left
//       ease: "none", // Linear movement
//       scrollTrigger: {
//         trigger: topRowRef.current[0],
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true, // Tied to scroll position
//       },
//     });

//     // Animate the bottom row to move right on scroll down
//     gsap.to(bottomRowRef.current, {
//       x: "200%", // Move the row far right
//       ease: "none", // Linear movement
//       scrollTrigger: {
//         trigger: bottomRowRef.current[0],
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true, // Tied to scroll position
//       },
//     });
//   }, []);

//   const generateCards = (rowRef, label) => {
//     const cards = [];
//     for (let i = 1; i <= 12; i++) {
//       cards.push(
//         <div
//           key={`${label}-${i}`}
//           ref={(el) => rowRef.current.push(el)}
//           className="bg-white shadow-lg rounded-lg p-6 w-72 h-40 flex items-center justify-center text-gray-700"
//         >
//           {`${label} card ${i}`}
//         </div>
//       );
//     }
//     return cards;
//   };

//   return (
//     <div className="bg-gray-100 py-16">
//       <h2 className="text-center text-3xl font-bold mb-12">What People Say</h2>

//       {/* Top Row */}
//       <div className="relative overflow-hidden">
//         <div className="flex space-x-6" style={{ width: "300vw" }}>
//           {generateCards(topRowRef, "FABIAN IS GAY")}
//         </div>
//       </div>

//       {/* Bottom Row */}
//       <div className="relative overflow-hidden mt-12">
//         <div
//           className="flex space-x-6"
//           style={{
//             width: "300vw",
//             transform: "translateX(-100vw)", // Start the bottom row outside the left side of the screen
//           }}
//         >
//           {generateCards(bottomRowRef, "Bottom")}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrollCards;

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const ScrollCards = () => {
//   const rowRef = useRef();

//   useEffect(() => {
//     // Smooth horizontal scrolling
//     gsap.to(rowRef.current, {
//       x: "-50%", // Scroll left smoothly
//       ease: "linear", // Consistent speed
//       scrollTrigger: {
//         trigger: rowRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true, // Tied to scroll position
//       },
//     });
//   }, []);

//   const cardSizes = [
//     { width: "340px", height: "139px" }, // Small
//     { width: "380px", height: "149px" }, // Medium
//     { width: "320px", height: "159px" }, // Large
//   ];

//   const generateCards = () => {
//     return Array.from({ length: 12 }).map((_, index) => {
//       const { width, height } = cardSizes[index % cardSizes.length];
//       return (
//         <div
//           key={index}
//           className="rounded-lg shadow-lg bg-black-500 flex items-center justify-center text-lg font-semibold"
//           style={{
//             width,
//             height,
//             backgroundColor: "#fff",
//             boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Subtle shadow
//             flexShrink: 0, // Prevent shrinking
//           }}
//         >
//           Review {index + 1}
//         </div>
//       );
//     });
//   };

//   return (
//     <div className="bg-gray-600 py-16">
//       <h2 className="text-center text-3xl font-bold mb-12">What People Say</h2>
//       <div className="overflow-hidden">
//         <div
//           ref={rowRef}
//           className="flex gap-6"
//           style={{
//             width: "200%", // Extended width for scrolling
//             display: "flex",
//           }}
//         >
//           {generateCards()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrollCards;



//********                   keeep me              ******************** */

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const ScrollCards = () => {
//   const rowRef = useRef();

//   useEffect(() => {
//     // Smooth horizontal scrolling
//     gsap.to(rowRef.current, {
//       x: "-50%", // Scroll left smoothly
//       ease: "linear", // Consistent speed
//       scrollTrigger: {
//         trigger: rowRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true, // Tied to scroll position
//       },
//     });
//   }, []);

//   const cardSizes = [
//     { width: "340px", height: "139px" }, // Small
//     { width: "380px", height: "149px" }, // Medium
//     { width: "320px", height: "159px" }, // Large
//   ];

//   const images = [
//     "/Assets/rev.png", // Replace with your actual image URLs
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//   ];

//   const generateCards = () => {
//     return Array.from({ length: 12 }).map((_, index) => {
//       const { width, height } = cardSizes[index % cardSizes.length];
//       const imageUrl = images[index % images.length]; // Cycle through images

//       return (
//         <div
//           key={index}
//           className="rounded-lg shadow-lg flex items-center justify-center text-lg font-semibold"
//           style={{
//             width,
//             height,
//             backgroundImage: `url(${imageUrl})`, // Set the background image
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundColor: "#fff",
//             boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Subtle shadow
//             flexShrink: 0, // Prevent shrinking
//           }}
//         >
//           {/* Optional text overlay */}
//           {/* <span style={{ color: "white", textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)" }}>
//             Review {index + 1}
//           </span> */}
//         </div>
//       );

//       // If you prefer the <img> tag approach, replace the return block above with this:
//       /*
//       return (
//         <div
//           key={index}
//           className="rounded-lg shadow-lg flex items-center justify-center text-lg font-semibold bg-white"
//           style={{
//             width,
//             height,
//             boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Subtle shadow
//             flexShrink: 0, // Prevent shrinking
//           }}
//         >
//           <img
//             src={imageUrl}
//             alt={`Review ${index + 1}`}
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               borderRadius: "10px", // Rounded corners
//             }}
//           />
//         </div>
//       );
//       */
//     });
//   };

//   return (
//     <div className="bg-gray-500 py-16">
//       <h2 className="text-center text-3xl font-bold mb-12 text-white">What People Say</h2>
//       <div className="overflow-hidden">
//         <div
//           ref={rowRef}
//           className="flex gap-6"
//           style={{
//             width: "200%", // Extended width for scrolling
//             display: "flex",
//           }}
//         >
//           {generateCards()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrollCards;
 
//********                   keeep me              ******************** */



// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const ScrollCards = () => {
//   const rowRef = useRef();
//   const reverseRowRef = useRef();

//   useEffect(() => {
//     // Smooth horizontal scrolling for the first row (left movement)
//     gsap.to(rowRef.current, {
//       x: "-50%", // Scroll left smoothly
//       ease: "linear", // Consistent speed
//       scrollTrigger: {
//         trigger: rowRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true, // Tied to scroll position
//       },
//     });

//     // Smooth horizontal scrolling for the reverse row (right movement)
//     gsap.to(reverseRowRef.current, {
//       x: "50%", // Scroll right smoothly
//       ease: "linear", // Consistent speed
//       scrollTrigger: {
//         trigger: reverseRowRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true, // Tied to scroll position
//       },
//     });
//   }, []);

//   const cardSizes = [
//     { width: "340px", height: "139px" }, // Small
//     { width: "380px", height: "149px" }, // Medium
//     { width: "320px", height: "159px" }, // Large
//   ];

//   const firstRowImages = [
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//   ];

//   const secondRowImages = [
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//   ];

//   const generateCards = (images, rowId) => {
//     return Array.from({ length: 12 }).map((_, index) => {
//       const { width, height } = cardSizes[index % cardSizes.length];
//       const imageUrl = images[index % images.length]; // Cycle through images

//       return (
//         <div
//           key={`${rowId}-${index}`}
//           className="rounded-lg shadow-lg flex items-center justify-center text-lg font-semibold"
//           style={{
//             width,
//             height,
//             backgroundImage: `url(${imageUrl})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundColor: "#fff",
//             boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
//             flexShrink: 0,
//           }}
//         ></div>
//       );
//     });
//   };

//   return (
//     <div className="bg-gray-500 py-16">
//       <h2 className="text-center text-3xl font-bold mb-12 text-white">What People Say</h2>
//       {/* First Row */}
//       <div className="overflow-hidden mb-12">
//         <div
//           ref={rowRef}
//           className="flex gap-6"
//           style={{
//             width: "250%", // Increased width to cover left movement
//             display: "flex",
//           }}
//         >
//           {generateCards(firstRowImages, "row1")}
//         </div>
//       </div>
//       {/* Reverse Row */}
//       <div className="overflow-hidden">
//         <div
//           ref={reverseRowRef}
//           className="flex gap-6"
//           style={{
//             width: "250%", // Increased width to cover right movement
//             display: "flex",
//           }}
//         >
//           {generateCards(secondRowImages, "row2")}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrollCards;






//*****     dont delete me              ***************** */



// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const ScrollCards = () => {
//   const rowRef = useRef();
//   const reverseRowRef = useRef();

//   useEffect(() => {
//     // Smooth horizontal scrolling for the first row (left movement)
//     gsap.to(rowRef.current, {
//       x: "-50%", // Scroll left smoothly
//       ease: "linear", // Consistent speed
//       scrollTrigger: {
//         trigger: rowRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true, // Tied to scroll position
//       },
//     });

//     // Smooth horizontal scrolling for the reverse row (right movement)
//     gsap.to(reverseRowRef.current, {
//       x: "50%", // Scroll right smoothly
//       ease: "linear", // Consistent speed
//       scrollTrigger: {
//         trigger: reverseRowRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true, // Tied to scroll position
//       },
//     });
//   }, []);

//   const cardSizes = [
//     { width: "340px", height: "139px" }, // Small
//     { width: "380px", height: "149px" }, // Medium
//     { width: "320px", height: "159px" }, // Large
//   ];

//   const firstRowImages = [
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//   ];

//   const secondRowImages = [
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//   ];

//   const generateCards = (images, rowId) => {
//     return Array.from({ length: 18 }).map((_, index) => {
//       const { width, height } = cardSizes[index % cardSizes.length];
//       const imageUrl = images[index % images.length]; // Cycle through images

//       return (
//         <div
//           key={`${rowId}-${index}`}
//           className="rounded-lg shadow-lg flex items-center justify-center text-lg font-semibold"
//           style={{
//             width,
//             height,
//             backgroundImage: `url(${imageUrl})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundColor: "#fff",
//             boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
//             flexShrink: 0,
//           }}
//         ></div>
//       );
//     });
//   };

//   return (
//     <div className="bg-[#fdf9f4] py-16">
//       <h2 className="text-center text-3xl font-bold mb-12 text-customPink">What People Say about us</h2>
//       {/* First Row */}
//       <div className="overflow-hidden mb-12">
//         <div
//           ref={rowRef}
//           className="flex gap-6"
//           style={{
//             width: "250%", // Increased width to cover left movement
//             display: "flex",
//           }}
//         >
//           {generateCards(firstRowImages, "row1")}
//         </div>
//       </div>
//       {/* Reverse Row */}
//       <div className="overflow-hidden">
//         <div
//           ref={reverseRowRef}
//           className="flex gap-6"
//           style={{
//             width: "250%", // Increased width to cover right movement
//             display: "flex",
//             justifyContent: "flex-end", // Start from the right
//           }}
//         >
//           {generateCards(secondRowImages, "row2")}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrollCards;


//*****     end of dont delete me              ***************** */


// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const ScrollCards = () => {
//   const rowRef = useRef();
//   const reverseRowRef = useRef();

//   useEffect(() => {
//     // Smooth horizontal scrolling for the first row (left movement)
//     gsap.to(rowRef.current, {
//       x: "-50%", // Scroll left smoothly
//       ease: "linear", // Consistent speed
//       scrollTrigger: {
//         trigger: rowRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true, // Tied to scroll position
//       },
//     });

//     // Smooth horizontal scrolling for the reverse row (right movement)
//     gsap.to(reverseRowRef.current, {
//       x: "50%", // Scroll right smoothly
//       ease: "linear", // Consistent speed
//       scrollTrigger: {
//         trigger: reverseRowRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true, // Tied to scroll position
//       },
//     });
//   }, []);

//   const cardSizes = [
//     { width: "340px", height: "139px" }, // Small
//     { width: "380px", height: "149px" }, // Medium
//     { width: "320px", height: "159px" }, // Large
//   ];

//   const firstRowImages = [
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//   ];

//   const secondRowImages = [
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//   ];

//   const generateCards = (images, rowId) => {
//     return Array.from({ length: 18 }).map((_, index) => {
//       const { width, height } = cardSizes[index % cardSizes.length];
//       const imageUrl = images[index % images.length]; // Cycle through images

//       return (
//         <div
//           key={`${rowId}-${index}`}
//           className="rounded-lg shadow-lg flex items-center justify-center text-lg font-semibold"
//           style={{
//             width,
//             height,
//             backgroundImage: `url(${imageUrl})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundColor: "#fff",
//             boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
//             flexShrink: 0,
//             zIndex: 1, // Ensure the cards stay on top
//             transform: "translateY(-2px)", // Slightly elevate the cards
//           }}
//         ></div>
//       );
//     });
//   };

//   return (
//     <div
//       className="bg-[#fdf9f4] py-16 relative"
//       style={{ paddingBottom: "20px" }} // Prevent clipping
//     >
//       <h2 className="text-center text-3xl font-bold mb-12 text-customPink">Our Visitors love Us!</h2>
//       {/* First Row */}
//       <div
//         style={{
//           overflow: "visible", // Ensure shadows are not clipped
//           marginBottom: "40px", // Add space for shadows
//         }}
//       >
//         <div
//           ref={rowRef}
//           className="flex gap-6"
//           style={{
//             width: "250%", // Increased width to cover left movement
//             display: "flex",
//           }}
//         >
//           {generateCards(firstRowImages, "row1")}
//         </div>
//       </div>
//       {/* Reverse Row */}
//       <div
//         style={{
//           overflow: "visible", // Ensure shadows are not clipped
//         }}
//       >
//         <div
//           ref={reverseRowRef}
//           className="flex gap-6"
//           style={{
//             width: "250%", // Increased width to cover right movement
//             display: "flex",
//             justifyContent: "flex-end", // Start from the right
//           }}
//         >
//           {generateCards(secondRowImages, "row2")}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrollCards;



// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const ScrollCards = () => {
//   const rowRef = useRef();
//   const reverseRowRef = useRef();
//   const titleRef = useRef(); // Reference for the title

//   useEffect(() => {
//     // Smooth horizontal scrolling for the first row (left movement)
//     gsap.to(rowRef.current, {
//       x: "-50%", // Scroll left smoothly
//       ease: "linear", // Consistent speed
//       scrollTrigger: {
//         trigger: rowRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true, // Tied to scroll position
//       },
//     });

//     // Smooth horizontal scrolling for the reverse row (right movement)
//     gsap.to(reverseRowRef.current, {
//       x: "50%", // Scroll right smoothly
//       ease: "linear", // Consistent speed
//       scrollTrigger: {
//         trigger: reverseRowRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true, // Tied to scroll position
//       },
//     });

//     // Scale animation for the title
//     gsap.fromTo(
//       titleRef.current,
//       { scale: 1 }, // Initial scale
//       {
//         scale: 1.3, // Scaled-up size
//         duration: 2,
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: "top 80%",
//           end: "top 40%",
//           scrub: true, // Tied to scroll position
//         },
//       }
//     );
//   }, []);

//   const cardSizes = [
//     { width: "340px", height: "139px" }, // Small
//     { width: "380px", height: "149px" }, // Medium
//     { width: "320px", height: "159px" }, // Large
//   ];

//   const firstRowImages = [
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//   ];

//   const secondRowImages = [
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//   ];

//   const generateCards = (images, rowId) => {
//     return Array.from({ length: 18 }).map((_, index) => {
//       const { width, height } = cardSizes[index % cardSizes.length];
//       const imageUrl = images[index % images.length]; // Cycle through images

//       return (
//         <div
//           key={`${rowId}-${index}`}
//           className="rounded-lg shadow-lg flex items-center justify-center text-lg font-semibold"
//           style={{
//             width,
//             height,
//             backgroundImage: `url(${imageUrl})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundColor: "#fff",
//             boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
//             flexShrink: 0,
//             zIndex: 1, // Ensure the cards stay on top
//             transform: "translateY(-2px)", // Slightly elevate the cards
//           }}
//         ></div>
//       );
//     });
//   };

//   return (
//     <div
//       className="bg-[#fdf9f4] py-16 relative"
//       style={{ paddingBottom: "20px" }} // Prevent clipping
//     >
//       {/* Title with scaling effect */}
//       <h2
//         ref={titleRef}
//         className="text-center text-3xl font-bold mb-12 text-customPink"
//       >
//         Our Visitors Love Us!
//       </h2>

//       {/* First Row */}
//       <div
//         style={{
//           overflow: "visible", // Ensure shadows are not clipped
//           marginBottom: "40px", // Add space for shadows
//         }}
//       >
//         <div
//           ref={rowRef}
//           className="flex gap-6"
//           style={{
//             width: "250%", // Increased width to cover left movement
//             display: "flex",
//           }}
//         >
//           {generateCards(firstRowImages, "row1")}
//         </div>
//       </div>

//       {/* Reverse Row */}
//       <div
//         style={{
//           overflow: "visible", // Ensure shadows are not clipped
//         }}
//       >
//         <div
//           ref={reverseRowRef}
//           className="flex gap-6"
//           style={{
//             width: "250%", // Increased width to cover right movement
//             display: "flex",
//             justifyContent: "flex-end", // Start from the right
//           }}
//         >
//           {generateCards(secondRowImages, "row2")}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrollCards;


// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const ScrollCards = () => {
//   const rowRef = useRef();
//   const reverseRowRef = useRef();
//   const titleRef = useRef(); // Reference for the title

//   useEffect(() => {
//     // Smooth horizontal scrolling for the first row (left movement)
//     gsap.to(rowRef.current, {
//       x: "-50%", // Scroll left smoothly
//       ease: "linear", // Consistent speed
//       scrollTrigger: {
//         trigger: rowRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true, // Tied to scroll position
//       },
//     });

//     // Smooth horizontal scrolling for the reverse row (right movement)
//     gsap.to(reverseRowRef.current, {
//       x: "50%", // Scroll right smoothly
//       ease: "linear", // Consistent speed
//       scrollTrigger: {
//         trigger: reverseRowRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true, // Tied to scroll position
//       },
//     });

//     // Scale animation for the title
//     gsap.fromTo(
//       titleRef.current,
//       { scale: 1 }, // Initial scale
//       {
//         scale: 1.3, // Scaled-up size
//         duration: 2,
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: "top 80%",
//           end: "top 40%",
//           scrub: true, // Tied to scroll position
//         },
//       }
//     );
//   }, []);

//   const cardSizes = [
//     { width: "340px", height: "139px" }, // Small
//     { width: "380px", height: "149px" }, // Medium
//     { width: "320px", height: "159px" }, // Large
//   ];

//   const firstRowImages = [
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//   ];

//   const secondRowImages = [
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//   ];

//   const generateCards = (images, rowId) => {
//     return Array.from({ length: 18 }).map((_, index) => {
//       const { width, height } = cardSizes[index % cardSizes.length];
//       const imageUrl = images[index % images.length]; // Cycle through images

//       return (
//         <div
//           key={`${rowId}-${index}`}
//           className="rounded-lg shadow-lg flex items-center justify-center text-lg font-semibold"
//           style={{
//             width,
//             height,
//             backgroundImage: `url(${imageUrl})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundColor: "#fff",
//             boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
//             flexShrink: 0,
//             zIndex: 1, // Ensure the cards stay on top
//             transform: "translateY(-2px)", // Slightly elevate the cards
//           }}
//         ></div>
//       );
//     });
//   };

//   return (
//     <div
//       className="bg-[#fdf9f4] py-16 relative mb-28"
//       style={{ paddingBottom: "20px" }} // Prevent clipping
//     >
//       {/* Title with scaling effect */}
//       <h2
//         ref={titleRef}
//         className="text-center text-3xl font-bold mb-24 text-customPink"
//       >
//         Our Visitors Love Us!
//       </h2>

//       {/* First Row */}
//       <div
//         style={{
//           overflow: "visible", // Ensure shadows are not clipped
//           marginBottom: "40px", // Add space for shadows
//         }}
//       >
//         <div
//           ref={rowRef}
//           className="flex gap-6"
//           style={{
//             width: "250%", // Increased width to cover left movement
//             display: "flex",
//           }}
//         >
//           {generateCards(firstRowImages, "row1")}
//         </div>
//       </div>

//       {/* Reverse Row */}
//       <div
//         style={{
//           overflow: "visible", // Ensure shadows are not clipped
//         }}
//       >
//         <div
//           ref={reverseRowRef}
//           className="flex gap-6"
//           style={{
//             width: "250%", // Increased width to cover right movement
//             display: "flex",
//             justifyContent: "flex-end", // Start from the right
//           }}
//         >
//           {generateCards(secondRowImages, "row2")}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrollCards;



import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollCards = () => {
  const rowRef = useRef();
  const reverseRowRef = useRef();
  const titleRef = useRef(); // Reference for the title

  useEffect(() => {
    // Smooth horizontal scrolling for the first row (left movement)
    gsap.to(rowRef.current, {
      x: "-50%", // Scroll left smoothly
      ease: "linear", // Consistent speed
      scrollTrigger: {
        trigger: rowRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true, // Tied to scroll position
      },
    });

    // Smooth horizontal scrolling for the reverse row (right movement)
    gsap.to(reverseRowRef.current, {
      x: "50%", // Scroll right smoothly
      ease: "linear", // Consistent speed
      scrollTrigger: {
        trigger: reverseRowRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true, // Tied to scroll position
      },
    });

    // Scale animation for the title
    gsap.fromTo(
      titleRef.current,
      { scale: 1 }, // Initial scale
      {
        scale: 1.3, // Scaled-up size
        duration: 2,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: true, // Tied to scroll position
        },
      }
    );
  }, []);

  const cardSizes = [
    { width: "340px", height: "139px" }, // Small
    { width: "380px", height: "149px" }, // Medium
    { width: "320px", height: "159px" }, // Large
  ];

  const firstRowImages = [
    "/Assets/rev.png",
    "/Assets/rev.png",
    "/Assets/rev.png",
    "/Assets/rev.png",
    "/Assets/rev.png",
    "/Assets/rev.png",
  ];

  const secondRowImages = [
    "/Assets/rev.png",
    "/Assets/rev.png",
    "/Assets/rev.png",
    "/Assets/rev.png",
    "/Assets/rev.png",
    "/Assets/rev.png",
  ];

  const generateCards = (images, rowId) => {
    return Array.from({ length: 18 }).map((_, index) => {
      const { width, height } = cardSizes[index % cardSizes.length];
      const imageUrl = images[index % images.length]; // Cycle through images

      return (
        <div
          key={`${rowId}-${index}`}
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
            zIndex: 1, // Ensure the cards stay on top
            transform: "translateY(-2px)", // Slightly elevate the cards
          }}
        ></div>
      );
    });
  };

  return (
    <div
      className="bg-[#fdf9f4] py-16 relative mb-28"
      style={{
        paddingBottom: "20px", // Prevent clipping
       // overflow: "visible", // Allow content from the next section to overlap
        overflowX: "hidden", // Prevent horizontal scrolling
       
        zIndex: 0, // Ensure it's beneath the logos of the next component
      }}
    >
      {/* Title with scaling effect */}
      <h2
        ref={titleRef}
        className="text-center text-3xl font-bold mb-24 text-customPink"
      >
        Our Visitors Love Us!
      </h2>

      {/* First Row */}
      <div
        style={{
          overflow: "visible", // Ensure shadows are not clipped
          marginBottom: "40px", // Add space for shadows
        }}
      >
        <div
          ref={rowRef}
          className="flex gap-6"
          style={{
            width: "250%", // Increased width to cover left movement
            display: "flex",
          }}
        >
          {generateCards(firstRowImages, "row1")}
        </div>
      </div>

      {/* Reverse Row */}
      <div
        style={{
          overflow: "visible", // Ensure shadows are not clipped
        }}
      >
        <div
          ref={reverseRowRef}
          className="flex gap-6"
          style={{
            width: "250%", // Increased width to cover right movement
            display: "flex",
            justifyContent: "flex-end", // Start from the right
          }}
        >
          {generateCards(secondRowImages, "row2")}
        </div>
      </div>
    </div>
  );
};

export default ScrollCards;
