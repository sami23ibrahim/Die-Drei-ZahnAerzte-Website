// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TeamSection = () => {
//   const teamRef = useRef([]);

//   useEffect(() => {
//     teamRef.current.forEach((teamMember, index) => {
//       gsap.fromTo(
//         teamMember,
//         {
//           scale:1, // Start smaller
//     //      opacity:1,
//         },
//         {
//           scale: 1.5, // Grow to full size
//         //  opacity: 1,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: teamMember,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, []);

//   const teamMembers = [
//     {
//       name: "Hakam",
//       image: "/Assets/hak.png", // Transparent PNG image
//     },
//     {
//       name: "Fabian",
//       image: "/Assets/fab.png", // Transparent PNG image
//     },
//     {
//       name: "Prabh",
//       image: "/Assets/fab.png", // Transparent PNG image
//     },
//   ];

//   return (
//     <div className="bg-[#fdf9f4] py-16">
//       <h2 className="text-center text-customPink text-3xl font-bold mb-10">
//         Meet Our Team
//       </h2>
//       <div className="flex justify-center gap-10">
//         {teamMembers.map((member, index) => (
//           <div
//             key={index}
//             ref={(el) => (teamRef.current[index] = el)}
//             className="flex flex-col items-center"
//           >
//             <img
//               src={member.image}
//               alt={member.name}
//               className="w-48 h-auto transition-transform"
//             />
//             <p className="mt-4 text-lg font-semibold">{member.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamSection;




// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TeamSection = () => {
//   const teamRef = useRef([]);
//   const titleRef = useRef(null); // Reference for the title

//   useEffect(() => {
//     // Animate each team member
//     teamRef.current.forEach((teamMember) => {
//       gsap.fromTo(
//         teamMember,
//         {
//           scale: 1,
//         },
//         {
//           scale: 1.5,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: teamMember,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     });

//     // Animate the title
//     if (titleRef.current) {
//       gsap.fromTo(
//         titleRef.current,
//         {
//           scale: 1,
//         },
//         {
//           scale: 1.5,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     }
//   }, []);

//   const teamMembers = [
//     {
//       name: "Hakam",
//       image: "/Assets/hak.png", // Transparent PNG image
//     },
//     {
//       name: "Fabian",
//       image: "/Assets/fab.png", // Transparent PNG image
//     },
//     {
//       name: "Prabh",
//       image: "/Assets/fab.png", // Transparent PNG image
//     },
//   ];

//   return (
//         <div className="relative bg-[#fdf9f4] py-16"> 

//       {/* Wrapper with overflow hidden */}
//       <div className="relative overflow-hidden">
//         {/* Background */}
//         <div
//           className="absolute w-full bg-[#fffcdc] z-0"
//           style={{
//             height: "340px", // Adjust the height of the background
//             bottom: "0", // Align it with the bottom
//             top: "auto", // Ensures no conflicting positioning
//           }}
//         ></div>

//         {/* Content Section */}
//         <div className="relative z-10">
//           <h2
//             ref={titleRef} // Attach ref to the title
//             className="text-center text-customPink text-3xl font-bold mb-10"
//           >
//             Meet Our Doctors
//           </h2>
//           <div className="flex justify-center items-end gap-10 relative">
//             {/* Team Images */}
//             {teamMembers.map((member, index) => (
//               <div
//                 key={index}
//                 ref={(el) => (teamRef.current[index] = el)}
//                 className="flex flex-col items-center"
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-48 h-auto transition-transform"
//                 />
//                 <p className="mt-4 text-lg font-semibold">{member.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamSection;


// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TeamSection = () => {
//   const teamRef = useRef([]);
//   const titleRef = useRef(null); // Reference for the title
//   const logoRefs = useRef([]); // References for the logos
//   const barRef = useRef(null); // Reference for the sliding bar

//   useEffect(() => {
//     // Animate each team member
//     teamRef.current.forEach((teamMember) => {
//       gsap.fromTo(
//         teamMember,
//         { scale: 1 },
//         {
//           scale: 1.5,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: teamMember,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     });

//     // Animate the title
//     if (titleRef.current) {
//       gsap.fromTo(
//         titleRef.current,
//         { scale: 1 },
//         {
//           scale: 1.5,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     }

//     // Animate the sliding bar
//     gsap.fromTo(
//       barRef.current,
//       { y: "100%" },
//       {
//         y: "0%",
//         duration: 2,
//         scrollTrigger: {
//           trigger: barRef.current,
//           start: "top bottom",
//           end: "top 80%",
//           scrub: true,
//         },
//       }
//     );
//   }, []);

//   const teamMembers = [
//     { name: "Hakam", image: "/Assets/hak.png" },
//     { name: "Fabian", image: "/Assets/fab.png" },
//     { name: "Prabh", image: "/Assets/fab.png" },
//   ];

//   const logos = [
//     { id: 1, size: "120px", position: "10%", rotation: 15 },
//     { id: 2, size: "200px", position: "25%", rotation: -25 },
//     { id: 3, size: "180px", position: "50%", rotation: 30 },
//     { id: 4, size: "150px", position: "65%", rotation: -10 },
//     { id: 5, size: "140px", position: "30%", rotation: 45 },
//   ];

//   return (
//     <div className="relative bg-[#fdf9f4] py-16">
//       {/* Wrapper */}
//       <div className="relative">
//         {/* Background */}
//         <div
//           className="absolute w-full bg-[#fffcdc] z-0"
//           style={{
//             height: "300px",
//             bottom: "0",
//             top: "auto",
//           }}
//         ></div>

//         {/* Moving Logos */}
//         {logos.map((logo, index) => (
//           <img
//             key={logo.id}
//             ref={(el) => (logoRefs.current[index] = el)}
//             src="/Assets/logo.png"
//             alt={`Logo ${index + 1}`}
//             className="absolute z-5 opacity-20"
//             style={{
//               width: logo.size,
//               height: logo.size,
//               top: logo.position,
//               transform: `rotate(${logo.rotation}deg)`,
//               left: `${10 + index * 15}%`,
//             }}
//           />
//         ))}

//         {/* Content Section */}
//         <div className="relative z-10">
//           <h2
//             ref={titleRef}
//             className="text-center text-customPink text-3xl font-bold mb-10"
//           >
//             Die Drei ZAHNÄRZTE
//           </h2>
//           <div className="flex justify-center items-end gap-10 relative">
//             {teamMembers.map((member, index) => (
//               <div
//                 key={index}
//                 ref={(el) => (teamRef.current[index] = el)}
//                 className="flex flex-col items-center"
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-48 h-auto transition-transform"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Sliding Bar */}
//       <div
//         ref={barRef}
//         className="fixed bottom-0 left-0 w-full bg-[#ff6392] text-white text-center z-20"
//         style={{
//           height: "60px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: "1.25rem",
//           fontWeight: "bold",
//         }}
//       >
//         {teamMembers.map((member, index) => (
//           <div key={index} className="mx-4">
//             {member.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamSection;







// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TeamSection = () => {
//   const teamRef = useRef([]);
//   const titleRef = useRef(null); // Reference for the title
//   const logoRefs = useRef([]); // References for the logos

//   useEffect(() => {
//     // Animate each team member
//     teamRef.current.forEach((teamMember) => {
//       gsap.fromTo(
//         teamMember,
//         { scale: 1 },
//         {
//           scale: 1.5,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: teamMember,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     });

//     // Animate the title
//     if (titleRef.current) {
//       gsap.fromTo(
//         titleRef.current,
//         { scale: 1 },
//         {
//           scale: 1.5,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     }

//     // Animate the logos
//     logoRefs.current.forEach((logo, index) => {
//       const direction = index % 2 === 0 ? "bottom-to-top" : "top-to-bottom"; // Alternate directions
//       const animationProps =
//         direction === "bottom-to-top"
//           ? { y: "100%", x: "0%" }
//           : { y: "-100%", x: "0%" };

//       gsap.fromTo(
//         logo,
//         { ...animationProps, opacity: 0.2, scale: 1 },
//         {
//           y: direction === "bottom-to-top" ? "-100%" : "100%", // Move in respective direction
//           opacity: 0.3,
//           scale: 1.5,
//           duration: 5,
//           scrollTrigger: {
//             trigger: logo,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, []);

//   const teamMembers = [
//     {
//       name: "Hakam",
//       image: "/Assets/hak.png", // Transparent PNG image
//     },
//     {
//       name: "Fabian",
//       image: "/Assets/fab.png", // Transparent PNG image
//     },
//     {
//       name: "Prabh",
//       image: "/Assets/fab.png", // Transparent PNG image
//     },
//   ];

//   const logos = [
//     { id: 1, size: "120px", position: "10%", rotation: 15 },
//     { id: 2, size: "200px", position: "25%", rotation: -25 },
//     { id: 3, size: "180px", position: "50%", rotation: 30 },
//     { id: 4, size: "150px", position: "65%", rotation: -10 },
//     { id: 5, size: "140px", position: "30%", rotation: 45 },
//   ];

//   return (
//     <div className="relative bg-[#fdf9f4] py-16">
//       {/* Wrapper with overflow hidden */}
//       <div className="relative ">
//         {/* Background */}
//         <div
//           className="absolute w-full bg-[#fffcdc] z-0"
//           style={{
//             height: "300px", // Adjust the height of the background
//             bottom: "0", // Align it with the bottom
//             top: "auto", // Ensures no conflicting positioning
//           }}
//         ></div>

//         {/* Moving Logos */}
//         {logos.map((logo, index) => (
//           <img
//             key={logo.id}
//             ref={(el) => (logoRefs.current[index] = el)}
//             src="/Assets/logo.png" // Replace with your logo path
//             alt={`Logo ${index + 1}`} // Correct the alt text
//             className="absolute z-5 opacity-20"
//             style={{
//               width: logo.size,
//               height: logo.size,
//               top: logo.position, // Position within the background
//               transform: `rotate(${logo.rotation}deg)`, // Correct string interpolation
//               left: `${10 + index * 15}%`, // Correct string interpolation
//             }}
//           />
//         ))}

//         {/* Content Section */}
//         <div className="relative z-10">
//           <h2
//             ref={titleRef} // Attach ref to the title
//             className="text-center text-customPink text-3xl font-bold mb-10"
//           >
//             The Team
//           </h2>
//           <div className="flex justify-center items-end gap-10 relative">
//             {/* Team Images */}
//             {teamMembers.map((member, index) => (
//               <div
//                 key={index}
//                 ref={(el) => (teamRef.current[index] = el)}
//                 className="flex flex-col items-center"
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-48 h-auto transition-transform"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamSection;





// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TeamSection = () => {
//   const teamRef = useRef([]);
//   const titleRef = useRef(null);
//   const logoRefs = useRef([]);

//   useEffect(() => {
//     // Animate each team member
//     teamRef.current.forEach((teamMember) => {
//       gsap.fromTo(
//         teamMember,
//         { scale: 1 },
//         {
//           scale: 1.5,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: teamMember,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     });

//     // Animate the title
//     if (titleRef.current) {
//       gsap.fromTo(
//         titleRef.current,
//         { scale: 1 },
//         {
//           scale: 1.5,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     }

//     // Animate the logos
//     logoRefs.current.forEach((logo, index) => {
//       const direction = index % 2 === 0 ? "bottom-to-top" : "top-to-bottom";

//       gsap.fromTo(
//         logo,
//         { y: direction === "bottom-to-top" ? "100%" : "-100%", opacity: 0.2 },
//         {
//           y: direction === "bottom-to-top" ? "-100%" : "100%",
//           opacity: 0.3,
//           duration: 5,
//           scrollTrigger: {
//             trigger: logo,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, []);

//   const teamMembers = [
//     { name: "Hakam", image: "/Assets/hak.png" },
//     { name: "Fabian", image: "/Assets/fab.png" },
//     { name: "Prabh", image: "/Assets/fab.png" },
//   ];

//   const logos = [
//     { id: 1, size: "120px", position: "10%", rotation: 15 },
//     { id: 2, size: "200px", position: "25%", rotation: -25 },
//     { id: 3, size: "180px", position: "50%", rotation: 30 },
//     { id: 4, size: "150px", position: "65%", rotation: -10 },
//     { id: 5, size: "140px", position: "30%", rotation: 45 },
//   ];

//   return (
//     <div className="relative bg-[#fdf9f4] py-16">
//       {/* Background */}
//       <div
//         className="absolute w-full bg-[#fffcdc] z-0"
//         style={{
//           height: "300px",
//           bottom: "0",
//         }}
//       ></div>

//       {/* Moving Logos */}
//       {logos.map((logo, index) => (
//         <img
//           key={logo.id}
//           ref={(el) => (logoRefs.current[index] = el)}
//           src="/Assets/logo.png"
//           alt={`Logo ${index + 1}`}
//           className="absolute z-5 opacity-20"
//           style={{
//             width: logo.size,
//             height: logo.size,
//             top: logo.position,
//             transform: `rotate(${logo.rotation}deg)`,
//             left: `${10 + index * 15}%`,
//           }}
//         />
//       ))}

//       {/* Content Section */}
//       <div className="relative z-10">
//         <h2
//           ref={titleRef}
//           className="text-center text-customPink text-3xl font-bold mb-10"
//         >
//           The Team
//         </h2>

//         {/* Team Members */}
//         <div className="relative" style={{ position: "relative", height: "300px" }}>
//           <div className="flex justify-center items-end gap-10" style={{ paddingBottom: "50px" }}>
//             {teamMembers.map((member, index) => (
//               <div
//                 key={index}
//                 ref={(el) => (teamRef.current[index] = el)}
//                 className="flex flex-col items-center"
//                 style={{ position: "relative", overflow: "visible" }}
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-48 h-auto transition-transform"
//                   style={{ transformOrigin: "bottom" }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamSection;







// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TeamSection = () => {
//   const teamRef = useRef([]);
//   const titleRef = useRef(null);
//   const logoRefs = useRef([]);
//   const barRef = useRef(null); // Reference for the bar

//   useEffect(() => {
//     // Animate each team member
//     teamRef.current.forEach((teamMember) => {
//       gsap.fromTo(
//         teamMember,
//         { scale: 1 },
//         {
//           scale: 1.5,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: teamMember,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     });

//     // Animate the title
//     if (titleRef.current) {
//       gsap.fromTo(
//         titleRef.current,
//         { scale: 1 },
//         {
//           scale: 1.5,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     }

//     // Animate the logos
//     logoRefs.current.forEach((logo, index) => {
//       const direction = index % 2 === 0 ? "bottom-to-top" : "top-to-bottom";

//       gsap.fromTo(
//         logo,
//         { y: direction === "bottom-to-top" ? "100%" : "-100%", opacity: 0.2 },
//         {
//           y: direction === "bottom-to-top" ? "-100%" : "100%",
//           opacity: 0.3,
//           duration: 5,
//           scrollTrigger: {
//             trigger: logo,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         }
//       );
//     });

//     // Animate the bar rising from the bottom
//     if (barRef.current) {
//       gsap.fromTo(
//         barRef.current,
//         { y: "100%" }, // Start off-screen
//         {
//           y: "0%", // Rise into view
//           duration: 2,
//           scrollTrigger: {
//             trigger: barRef.current,
//             start: "top bottom",
//             end: "top 60%",
//             scrub: true,
//           },
//         }
//       );
//     }
//   }, []);

//   const teamMembers = [
//     { name: "Hakam", image: "/Assets/hak.png" },
//     { name: "Hakam", image: "/Assets/hak.png" },
//     { name: "Hakam", image: "/Assets/hak.png" },
//   ];

//   const logos = [
//     { id: 1, size: "120px", position: "10%", rotation: 15 },
//     { id: 2, size: "200px", position: "25%", rotation: -25 },
//     { id: 3, size: "180px", position: "50%", rotation: 30 },
//     { id: 4, size: "150px", position: "65%", rotation: -10 },
//     { id: 5, size: "140px", position: "30%", rotation: 45 },
//   ];

//   return (
//     <div className="relative bg-[#fdf9f4] py-16">
//       {/* Background */}
//       <div
//         className="absolute w-full bg-[#fffcdc] z-0"
//         style={{
//           height: "300px",
//           bottom: "0",
//         }}
//       ></div>

//       {/* Moving Logos */}
//       {logos.map((logo, index) => (
//         <img
//           key={logo.id}
//           ref={(el) => (logoRefs.current[index] = el)}
//           src="/Assets/logo.png"
//           alt={`Logo ${index + 1}`}
//           className="absolute z-5 opacity-20"
//           style={{
//             width: logo.size,
//             height: logo.size,
//             top: logo.position,
//             transform: `rotate(${logo.rotation}deg)`,
//             left: `${10 + index * 15}%`,
//           }}
//         />
//       ))}

//       {/* Content Section */}
//       <div className="relative z-10">
//         <h2
//           ref={titleRef}
//           className="text-center text-customPink text-3xl font-bold mb-10"
//         >
//           The Team
//         </h2>

//         {/* Team Members */}
//         <div className="relative" style={{ position: "relative", height: "300px" }}>
//           <div className="flex justify-center items-end gap-10" style={{ paddingBottom: "50px" }}>
//             {teamMembers.map((member, index) => (
//               <div
//                 key={index}
//                 ref={(el) => (teamRef.current[index] = el)}
//                 className="flex flex-col items-center"
//                 style={{ position: "relative", overflow: "visible" }}
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-48 h-auto transition-transform"
//                   style={{ transformOrigin: "bottom" }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//      {/* Static Bar */}
// <div
//   className="absolute w-full bg-[#fffcdc] z-20"
//   style={{
//     height: "59px", // Set the desired height
//     bottom: "-85",    // Align to the bottom of the component
//     transform: "translateY(40px)", // Move the bar 10px up to overlap the images
//     boxShadow: "0px -5px 10px rgba(0, 0, 0, 0.2)", // Add shadow effect

//   }}
// >


// </div>
//     </div>
//   );
// };

// export default TeamSection;








// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TeamSection = () => {
//   const teamRef = useRef([]);
//   const titleRef = useRef(null);
//   const logoRefs = useRef([]);
//   const barRef = useRef(null); // Reference for the bar

//   useEffect(() => {
//     // Animate each team member
//     teamRef.current.forEach((teamMember) => {
//       gsap.fromTo(
//         teamMember,
//         { scale: 1 },
//         {
//           scale: 1.5,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: teamMember,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     });

//     // Animate the title
//     if (titleRef.current) {
//       gsap.fromTo(
//         titleRef.current,
//         { scale: 1 },
//         {
//           scale: 1.5,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     }

//     // Animate the logos
//     logoRefs.current.forEach((logo, index) => {
//       const direction = index % 2 === 0 ? "bottom-to-top" : "top-to-bottom";

//       gsap.fromTo(
//         logo,
//         { y: direction === "bottom-to-top" ? "100%" : "-100%", opacity: 0.2 },
//         {
//           y: direction === "bottom-to-top" ? "-100%" : "100%",
//           opacity: 0.3,
//           duration: 5,
//           scrollTrigger: {
//             trigger: logo,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         }
//       );
//     });

//     // Animate the bar rising from the bottom
//     if (barRef.current) {
//       gsap.fromTo(
//         barRef.current,
//         { y: "100%" }, // Start off-screen
//         {
//           y: "0%", // Rise into view
//           duration: 2,
//           scrollTrigger: {
//             trigger: barRef.current,
//             start: "top bottom",
//             end: "top 60%",
//             scrub: true,
//           },
//         }
//       );
//     }
//   }, []);

//   const teamMembers = [
//     { name: "Hakam", image: "/Assets/hak.png" },
//     { name: "Hakam", image: "/Assets/hak.png" },
//     { name: "Hakam", image: "/Assets/hak.png" },
//   ];

//   const logos = [
//     { id: 1, size: "120px", position: "10%", rotation: 15 },
//     { id: 2, size: "200px", position: "25%", rotation: -25 },
//     { id: 3, size: "180px", position: "50%", rotation: 30 },
//     { id: 4, size: "150px", position: "65%", rotation: -10 },
//     { id: 5, size: "140px", position: "30%", rotation: 45 },
//   ];

//   return (
//     <div className="relative bg-[#fdf9f4] py-16">
//       {/* Background */}
//       <div
//         className="absolute w-full bg-[#fffcdc] z-0"
//         style={{
//           height: "300px",
//           bottom: "0",
//         }}
//       ></div>

//       {/* Moving Logos */}
//       {logos.map((logo, index) => (
//         <img
//           key={logo.id}
//           ref={(el) => (logoRefs.current[index] = el)}
//           src="/Assets/logo.png"
//           alt={`Logo ${index + 1}`}
//           className="absolute z-5 opacity-20"
//           style={{
//             width: logo.size,
//             height: logo.size,
//             top: logo.position,
//             transform: `rotate(${logo.rotation}deg)`,
//             left: `${10 + index * 15}%`,
//           }}
//         />
//       ))}

//       {/* Content Section */}
//       <div className="relative z-10">
//         <h2
//           ref={titleRef}
//           className="text-center text-customPink text-3xl font-bold mb-10"
//         >
//           The Team
//         </h2>

//         {/* Team Members */}
//         <div className="relative" style={{ position: "relative", height: "300px" }}>
//           <div className="flex justify-center items-end gap-10" style={{ paddingBottom: "50px" }}>
//             {teamMembers.map((member, index) => (
//               <div
//                 key={index}
//                 ref={(el) => (teamRef.current[index] = el)}
//                 className="flex flex-col items-center"
//                 style={{ position: "relative", overflow: "visible" }}
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-48 h-auto transition-transform"
//                   style={{ transformOrigin: "bottom" }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//      {/* Static Bar */}
// <div
//   className="absolute w-full bg-[#fffcdc] z-20 flex justify-around items-center"
//   style={{
//     height: "59px", // Set the desired height
//     bottom: "-85",    // Align to the bottom of the component
//     transform: "translateY(40px)", // Move the bar 10px up to overlap the images
//     boxShadow: "0px -5px 10px rgba(0, 0, 0, 0.2)", // Add shadow effect

//   }}
// >
// {teamMembers.map((member, index) => (
//     <div key={index} className="text-center font-bold text-gray-800">
//       {member.name}
//     </div>
//   ))}

// </div>
//     </div>
//   );
// };

// export default TeamSection;





// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TeamSection = () => {
//   const teamRef = useRef([]);
//   const titleRef = useRef(null);
//   const logoRefs = useRef([]);

//   useEffect(() => {
//     // Animate each team member
//     teamRef.current.forEach((teamMember) => {
//       gsap.fromTo(
//         teamMember,
//         { scale: 1 },
//         {
//           scale: 1.5,
//           duration: 8.5,
//           scrollTrigger: {
//             trigger: teamMember,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     });

//     // Animate the title
//     if (titleRef.current) {
//       gsap.fromTo(
//         titleRef.current,
//         { scale: 1 },
//         {
//           scale: 1.2,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     }

//     // Animate the logos
//     logoRefs.current.forEach((logo, index) => {
//       const direction = index % 2 === 0 ? "bottom-to-top" : "top-to-bottom";

//       gsap.fromTo(
//         logo,
//         { y: direction === "bottom-to-top" ? "100%" : "-100%", opacity: 0.2 },
//         {
//           y: direction === "bottom-to-top" ? "-100%" : "100%",
//           opacity: 0.3,
//           duration: 5,
//           scrollTrigger: {
//             trigger: logo,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         }
//       );
//     });


//   }, []);

//   const teamMembers = [
//     { name: "Hakam", image: "/Assets/hak.png" },
//     { name: "Hakam", image: "/Assets/hak.png" },
//     { name: "Hakam", image: "/Assets/hak.png" },
//   ];

//   const logos = [
//     { id: 1, size: "180px", position: "10%", rotation: 15, image: "/Assets/torp.png" },
//     { id: 2, size: "200px", position: "25%", rotation: -25, image: "/Assets/torp.png" },
//     { id: 3, size: "110px", position: "10%", rotation: 30, image: "/Assets/toro.png" },
//     { id: 4, size: "150px", position: "60%", rotation: -10, image: "/Assets/toro2.png" },
//     { id: 5, size: "190px", position: "45%", rotation: 45, image: "/Assets/torp.png" },
//     { id: 6, size: "180px", position: "30%", rotation: 25, image: "/Assets/toro.png" },
//     { id: 7, size: "90px", position: "35%", rotation: 20, image: "/Assets/toro2.png" },
//     { id: 8, size: "110px", position: "10%", rotation: 30, image: "/Assets/toro.png" },
//     { id: 9, size: "150px", position: "60%", rotation: -10, image: "/Assets/toro2.png" },
//     { id: 10, size: "140px", position: "45%", rotation: -45, image: "/Assets/toro.png" },
//     // { id: 11, size: "210px", position: "10%", rotation: 40, image: "/Assets/logo.png" },
//     // { id: 12, size: "250px", position: "60%", rotation: -20, image: "/Assets/logo.png" },
//     // { id: 13, size: "290px", position: "45%", rotation: 55, image: "/Assets/logo.png" },
//   ];
  

//   return (
//     <div className="relative bg-[#fdf9f4] py-16">
//       {/* Background */}
//       <div
//         className="absolute w-full bg-[#fffcdc00] z-0"
//         style={{
//           width: "45%", // Cover 70% of the width
//           height: "270px", // Keep the height as it is
//           bottom: "90",
//           left: "51%", // Center horizontally
//           transform: "translateX(-50%)", // Adjust for centering
//           borderTopLeftRadius: "150px", // Rounded top-left corner
//           borderTopRightRadius: "180px", // Rounded top-right corner
//           borderBottomLeftRadius: "70px", // Correct property for bottom-left corner
//           borderBottomRightRadius: "70px", // Correct property for bottom-right corne
//         }}
//       ></div>

//       {/* Moving Logos */}
//       {/* {logos.map((logo, index) => (
//   <img
//     key={logo.id}
//     ref={(el) => (logoRefs.current[index] = el)}
//     src={logo.image} // Use the image property
//     alt={`Logo ${index + 1}`}
//     className="absolute z-5 opacity-20"
//     style={{
//       width: logo.size,
//       height: logo.size,
//       top: logo.position,
//       transform: `rotate(${logo.rotation}deg)`,
//       left: `${10 + index * 15}%`,
//     }}
//   />
// ))} */}
// <div className="absolute w-full z-5 grid grid-cols-5 gap-4">
//   {logos.map((logo, index) => (
//     <img
//       key={logo.id}
//       ref={(el) => (logoRefs.current[index] = el)}
//       src={logo.image}
//       alt={`Logo ${index + 1}`}
//       className="opacity-20"
//       style={{
//         width: logo.size,
//         height: logo.size,
//         transform: `rotate(${logo.rotation}deg)`,
//       }}
//     />
//   ))}
// </div>



//       {/* Content Section */}
//       <div className="relative z-10">
//         <h2
//           ref={titleRef}
//           className="text-center text-customPink text-3xl font-bold mb-10"
//         >
//           The Team
//         </h2>

//        {/* Team Members */}
// <div className="relative" style={{ position: "relative", height: "300px" }}>
//   <div
//     className="flex justify-center items-end gap-5"
//     style={{ paddingBottom: "50px" }}
//   >
//     {teamMembers.map((member, index) => (
//       <div
//         key={index}
//         ref={(el) => (teamRef.current[index] = el)}
//         className="flex flex-col items-center relative"
//         style={{ position: "relative", overflow: "visible" }}
//       >
//         <img
//           src={member.image}
//           alt={member.name}
//           className="w-48 h-auto transition-transform"
//           style={{ transformOrigin: "bottom" ,zIndex: 5, // Images stay behind the bar
//           }}
//         />

//       </div>
//     ))}
//   </div>
// </div>
// </div>


//      {/* Static Bar */}
// <div
//   className="absolute w-full bg-[#fffcdc] z-10 flex justify-around items-center"
//   style={{
//     height: "60px", // Set the desired height
//     width: "12%", // Match the background width
//     left: "51%", // Center horizontally
//     bottom: "-360",    // Align to the bottom of the component
//     transform: "translateY(40px)", // Move the bar 10px up to overlap the images
//     transform: "translateX(-50%)", // Adjust for centering
//     borderTopLeftRadius: "20px", // Correct property for bottom-left corner
//     borderTopRightRadius: "20px", // Correct property for bottom-right corne
//     borderBottomLeftRadius: "20px", // Correct property for bottom-left corner
//   borderBottomRightRadius: "20px", // Correct property for bottom-right corne
//     boxShadow: "0px -5px 10px rgba(0, 0, 0, 0.2)", // Add shadow effect

//   }}
// >

// </div>
//     </div>
//   );
// };

// export default TeamSection;





// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TeamSection = () => {
//   const teamRef = useRef([]);
//   const titleRef = useRef(null);
//   const logoRefs = useRef([]);

//   useEffect(() => {
//     // Animate each team member
//     teamRef.current.forEach((teamMember) => {
//       gsap.fromTo(
//         teamMember,
//         { scale: 1 },
//         {
//           scale: 1.5,
//           duration: 8.5,
//           scrollTrigger: {
//             trigger: teamMember,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     });

//     // Animate the title
//     if (titleRef.current) {
//       gsap.fromTo(
//         titleRef.current,
//         { scale: 1 },
//         {
//           scale: 1.2,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     }

//     // Animate the logos
//     logoRefs.current.forEach((logo, index) => {
//       const direction = index % 2 === 0 ? "bottom-to-top" : "top-to-bottom";

//       gsap.fromTo(
//         logo,
//         { y: direction === "bottom-to-top" ? "100%" : "-100%", opacity: 0.2 },
//         {
//           y: direction === "bottom-to-top" ? "-100%" : "100%",
//           opacity: 0.3,
//           duration: 5,
//           scrollTrigger: {
//             trigger: logo,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, []);

//   const teamMembers = [
//     { name: "Hakam", image: "/Assets/hak.png" },
//     { name: "fab", image: "/Assets/fab.png" },
//     { name: "Hakam", image: "/Assets/hak.png" },
//   ];

//   const logos = [
//     { id: 1, size: "180px", position: "10%", rotation: 15, image: "/Assets/torp.png" },
//     { id: 2, size: "200px", position: "25%", rotation: -25, image: "/Assets/torp.png" },
//     { id: 3, size: "110px", position: "10%", rotation: 30, image: "/Assets/toro.png" },
//     { id: 4, size: "150px", position: "60%", rotation: -10, image: "/Assets/toro2.png" },
//     { id: 5, size: "190px", position: "45%", rotation: 45, image: "/Assets/torp.png" },
//     { id: 6, size: "180px", position: "30%", rotation: 25, image: "/Assets/toro.png" },
//     { id: 7, size: "90px", position: "35%", rotation: 20, image: "/Assets/toro2.png" },
//     { id: 8, size: "110px", position: "10%", rotation: 30, image: "/Assets/toro.png" },
//     { id: 9, size: "150px", position: "60%", rotation: -10, image: "/Assets/toro2.png" },
//     { id: 10, size: "140px", position: "45%", rotation: -45, image: "/Assets/toro.png" },
//   ];

//   return (
//     <div className="relative bg-[#fdf9f4] py-16">
//       {/* Background */}
//       <div
//         className="absolute w-full bg-[#fffcdc00] z-0"
//         style={{
//           width: "45%",
//           height: "270px",
//           bottom: "90",
//           left: "51%",
//           transform: "translateX(-50%)",
//           borderTopLeftRadius: "150px",
//           borderTopRightRadius: "180px",
//           borderBottomLeftRadius: "70px",
//           borderBottomRightRadius: "70px",
//         }}
//       ></div>

//       {/* Logos */}
//       <div className="absolute w-full z-5 grid grid-cols-5 gap-4">
//         {logos.map((logo, index) => (
//           <img
//             key={logo.id}
//             ref={(el) => (logoRefs.current[index] = el)}
//             src={logo.image}
//             alt={`Logo ${index + 1}`}
//             className="opacity-20"
//             style={{
//               width: logo.size,
//               height: logo.size,
//               transform: `rotate(${logo.rotation}deg)`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Content Section */}
//       <div className="relative z-10">
//         <h2
//           ref={titleRef}
//           className="text-center text-customPink text-3xl font-bold mb-10"
//         >
//           The Team
//         </h2>

//         {/* Team Members */}
//         <div className="relative" style={{ position: "relative", height: "300px" }}>
//           <div
//             className="flex justify-center items-end gap-5"
//             style={{ paddingBottom: "50px" }}
//           >
//             {teamMembers.map((member, index) => (
//               <div
//                 key={index}
//                 ref={(el) => (teamRef.current[index] = el)}
//                 className="flex flex-col items-center relative"
//                 style={{ position: "relative", overflow: "visible" }}
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-48 h-auto transition-transform"
//                   style={{
//                     transformOrigin: "bottom",
//                     zIndex: 5,
//                   }}
//                 />
//                 {/* Button-like bar */}
//                 <div
//                   className="absolute text-center bg-customPink text-white font-bold py-2 px-4 rounded-md cursor-pointer hover:bg-pink-700 transition-all"
//                   style={{
//                     bottom: "-35px",
//                     zIndex: 50,
//                     width: "140px",
//                   }}
//                   onClick={() => alert(`You clicked on ${member.name}`)}
//                 >
//                   {member.name}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamSection;




// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TeamSection = () => {
//   const teamRef = useRef([]);
//   const titleRef = useRef(null);
//   const logoRefs = useRef([]);

//   useEffect(() => {
//     // Animate each team member
//     teamRef.current.forEach((teamMember) => {
//       gsap.fromTo(
//         teamMember,
//         { scale: 1 },
//         {
//           scale: 1.5,
//           duration: 8.5,
//           scrollTrigger: {
//             trigger: teamMember,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     });

//     // Animate the title
//     if (titleRef.current) {
//       gsap.fromTo(
//         titleRef.current,
//         { scale: 1 },
//         {
//           scale: 1.2,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     }

//     // Animate the logos
//     logoRefs.current.forEach((logo, index) => {
//       const direction = index % 2 === 0 ? "bottom-to-top" : "top-to-bottom";

//       gsap.fromTo(
//         logo,
//         { y: direction === "bottom-to-top" ? "100%" : "-100%", opacity: 0.2 },
//         {
//           y: direction === "bottom-to-top" ? "-100%" : "100%",
//           opacity: 0.3,
//           duration: 5,
//           scrollTrigger: {
//             trigger: logo,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, []);

//   const teamMembers = [
//     { name: "Hakam El Daghma", image: "/Assets/hak.png" },
//     { name: "Fabian Badour", image: "/Assets/fab.png" },
//     { name: "Prabh Singh Mahal", image: "/Assets/hak5.png" },
//   ];

//   const logos = [
//     { id: 1, size: "180px", position: "10%", rotation: 15, image: "/Assets/torp.png" },
//     { id: 2, size: "200px", position: "25%", rotation: -25, image: "/Assets/torp.png" },
//     { id: 3, size: "110px", position: "10%", rotation: 30, image: "/Assets/toro.png" },
//     { id: 4, size: "150px", position: "60%", rotation: -10, image: "/Assets/toro2.png" },
//     { id: 5, size: "190px", position: "45%", rotation: 45, image: "/Assets/torp.png" },
//     { id: 6, size: "160px", position: "45%", rotation: 25, image: "/Assets/toro.png" },
//     { id: 7, size: "90px", position: "35%", rotation: 20, image: "/Assets/toro2.png" },
//     { id: 8, size: "110px", position: "10%", rotation: 30, image: "/Assets/toro.png" },
//     { id: 9, size: "150px", position: "60%", rotation: -10, image: "/Assets/toro2.png" },
//     { id: 10, size:"140px", position: "45%", rotation: -45, image: "/Assets/toro.png" },
//   ];

//   return (
//     <div className="relative bg-[#fdf9f4] py-16">
//       {/* Background */}
//       <div
//         className="absolute w-full bg-[#fffcdc00] z-0"
//         style={{
//           width: "45%",
//           height: "270px",
//           bottom: "90",
//           left: "51%",
//           transform: "translateX(-50%)",
//           borderTopLeftRadius: "150px",
//           borderTopRightRadius: "180px",
//           borderBottomLeftRadius: "70px",
//           borderBottomRightRadius: "70px",
//         }}
//       ></div>

//       {/* Logos */}
//       <div className="absolute w-full z-5 grid grid-cols-5 gap-4">
//         {logos.map((logo, index) => (
//           <img
//             key={logo.id}
//             ref={(el) => (logoRefs.current[index] = el)}
//             src={logo.image}
//             alt={`Logo ${index + 1}`}
//             className="opacity-20"
//             style={{
//               width: logo.size,
//               height: logo.size,
//               transform: `rotate(${logo.rotation}deg)`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Content Section */}
//       <div className="relative z-10 ">
//         <h2
//           ref={titleRef}
//           className="text-center text-customPink text-3xl font-bold mb-10"
//         >
//           The Team
//         </h2>

//         {/* Team Members */}
//         <div className="relative" style={{ position: "relative", height: "300px" }}>
//           <div
//             className="flex justify-center items-end gap-[47px]"
//             style={{ paddingBottom: "50px" }}
//           >
//             {teamMembers.map((member, index) => (
//               <div
//                 key={index}
//                 ref={(el) => (teamRef.current[index] = el)}
//                 className="flex flex-col items-center relative"
//                 style={{ position: "relative", overflow: "visible" }}
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-48 h-auto transition-transform"
//                   style={{
//                     transformOrigin: "bottom",
//                     zIndex: 5,
//                   }}
//                 />
//                 {/* Button-like bar */}
//                 <div
//                   className="absolute text-center bg-customPink text-white font-medium py-[1px] px-[1px] rounded-md cursor-pointer hover:bg-customOrange transition-all"
//                   style={{
//                     bottom: "-20px",
//                     zIndex: 50,
//                     width: "180px",
//                   }}
//                   onClick={() => alert(`You clicked on ${member.name}`)}
//                 >
//                   {member.name}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Text Section */}
//         <div className="text-center mt-[66px] px-4">
//           <div className="bg-[#f496bf00] rounded-lg p-6 mx-auto" style={{ width: "90%" }}>
//             <p className="text-2xl lg:text-2xl font-medium text-gray-500 leading-relaxed">
//               Our dental practice, right next to Kotti, combines openness and expertise. We speak your language and set new
//               standards in dental health with passion. Our diversity reflects the lively area. Our diversity reflects the lively area.
//               Together we will give you a radiant smile. Look forward to a special dental experience!
//             </p>
            
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamSection;





// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TeamSection = () => {
//   const teamRef = useRef([]);
//   const titleRef = useRef(null);
//   const logoRefs = useRef([]);
//   const [activeContent, setActiveContent] = useState({
//     title: "Our dental practice",
//     text: "Our dental practice, right next to Kotti, combines openness and expertise. We speak your language and set new standards in dental health with passion. Our diversity reflects the lively area. Together we will give you a radiant smile. Look forward to a special dental experience!",
//   });
//   const [clickedButton, setClickedButton] = useState(null);

//   useEffect(() => {
//     // Animate each team member
//     teamRef.current.forEach((teamMember) => {
//       gsap.fromTo(
//         teamMember,
//         { scale: 1 },
//         {
//           scale: 1.5,
//           duration: 8.5,
//           scrollTrigger: {
//             trigger: teamMember,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     });

//     // Animate the title
//     if (titleRef.current) {
//       gsap.fromTo(
//         titleRef.current,
//         { scale: 1 },
//         {
//           scale: 1.2,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     }

//     // Animate the logos
//     logoRefs.current.forEach((logo, index) => {
//       const direction = index % 2 === 0 ? "bottom-to-top" : "top-to-bottom";

//       gsap.fromTo(
//         logo,
//         { y: direction === "bottom-to-top" ? "100%" : "-100%", opacity: 0.2 },
//         {
//           y: direction === "bottom-to-top" ? "-100%" : "100%",
//           opacity: 0.3,
//           duration: 5,
//           scrollTrigger: {
//             trigger: logo,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, []);

//   const teamMembers = [
//     {
//       name: "Hakam El Daghma",
//       title: "About Hakam El Daghma",
//       text: "Hakam has expertise in various areas of dentistry. His specialization includes microscopic root canal treatment, dentures (prosthetics) and currently aesthetic dentistry for veneers and front tooth aesthetics. Hakam offers sensitive care, especially for anxious patients, and is available for consultations in German, English and Arabic.",
//       image: "/Assets/hak.png",
//     },
//     {
//       name: "Fabian Badour",
//       title: "About Fabian Badour",
//       text: "Fabian treats within the areas of surgery, implantology, dental prosthetics and front tooth aesthetics. His treatment also extends to anxious patients. Fabian is available for consultations in various languages, including Arabic, English and German, to ensure holistic care for his patients.",
//       image: "/Assets/fab.png",
//     },
//     {
//       name: "Prabh Singh Mahal",
//       title: "About Prabh Singh Mahal",
//       text: "Prabh specializes in surgery, implantology, dental prosthetics and anterior tooth aesthetics. With his patient-centered care, he also dedicates himself to treating anxious patients. Prabjit offers consultations in various languages, including Punjabi, Hindi, Urdu, English and German, to ensure comprehensive care for his patients.",
//       image: "/Assets/hak5.png",
//     },
//   ];

//   const logos = [
//     { id: 1, size: "180px", rotation: 15, image: "/Assets/torp.png" },
//     { id: 2, size: "200px", rotation: -25, image: "/Assets/torp.png" },
//     { id: 3, size: "110px", rotation: 30, image: "/Assets/toro.png" },
//     { id: 4, size: "150px", rotation: -10, image: "/Assets/toro2.png" },
//     { id: 5, size: "190px", rotation: 45, image: "/Assets/torp.png" },
//   ];

//   const handleContentChange = (title, text, index) => {
//     setActiveContent({ title, text });
//     setClickedButton(index);
//   };

//   const handleResetContent = () => {
//     setActiveContent({
//       title: "Our dental practice",
//       text: "Our dental practice, right next to Kotti, combines openness and expertise. We speak your language and set new standards in dental health with passion. Our diversity reflects the lively area. Together we will give you a radiant smile. Look forward to a special dental experience!",
//     });
//     setClickedButton(null);
//   };

//   return (
//     <div className="relative bg-[#fdf9f4] py-16" onClick={handleResetContent}>
//       {/* Background */}
//       <div
//         className="absolute w-full bg-[#fffcdc00] z-0"
//         style={{
//           width: "45%",
//           height: "270px",
//           bottom: "90",
//           left: "51%",
//           transform: "translateX(-50%)",
//           borderTopLeftRadius: "150px",
//           borderTopRightRadius: "180px",
//           borderBottomLeftRadius: "70px",
//           borderBottomRightRadius: "70px",
//         }}
//       ></div>

//       {/* Logos */}
//       <div className="absolute w-full z-5 grid grid-cols-5 gap-4">
//         {logos.map((logo, index) => (
//           <img
//             key={logo.id}
//             ref={(el) => (logoRefs.current[index] = el)}
//             src={logo.image}
//             alt={`Logo ${index + 1}`}
//             className="opacity-20"
//             style={{
//               width: logo.size,
//               height: logo.size,
//               transform: `rotate(${logo.rotation}deg)`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Content Section */}
//       <div className="relative z-10">
//         <h2
//           ref={titleRef}
//           className="text-center text-customPink text-3xl font-bold mb-12 mt-0"
//         >
//           The Team
//         </h2>

//         {/* Team Members */}
//         <div
//           className="relative flex justify-center cursor-pointer items-end gap-10 "
//           style={{ paddingBottom: "50px" }}
//         >
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               ref={(el) => (teamRef.current[index] = el)}
//               className="flex flex-col items-center relative"
//               style={{ position: "relative", overflow: "visible" }}
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleContentChange(member.title, member.text, index);
//               }}
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-48 h-auto"
//                 style={{
//                   transformOrigin: "bottom",
//                   zIndex: 5,
//                 }}
//               />
// {/* <div
//   className="absolute text-center bg-customPink font-small py-[1px] px-[1px] rounded-md cursor-pointer"
//   style={{
//     bottom: "-20px",
//     zIndex: 50,
//     width: "174px",
//     color: clickedButton === index ? "#6b7280" : "#fdf9f4",
//   }}
// >
//   <span
//     className="transition-transform duration-300 transform hover:scale-105"
//     style={{ display: "inline-block" }}
//   >
//     {member.name}
//   </span>
// </div> */}


// <div
//   className="absolute text-around bg-customPink font-small py-[1px] px-[0px] rounded-md cursor-pointer"
//   style={{
//     bottom: "-20px",
//     zIndex: 50,
//     width: "172px",
//     color: clickedButton === index ? "#6b7280" : "#fdf9f4",
//   }}
// >
//   <div className="flex items-center justify-center space-x-0.5 transition-transform duration-300 transform hover:scale-105">
//     {/* Member Name */}
//     <span style={{ fontSize: "15px" }}>{member.name}</span>
//     {/* SVG Arrow */}
//     <svg
//       className="arrow"
//       width="8"
//       height="4"
//       viewBox="0 0 10 8"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M0 0.5L-1.09278e-07 3L5 8L10 3L10 0.5L5 5.5L0 0.5Z"
//         fill={clickedButton === index ? "#6b7280" : "#fdf9f4"}
//       ></path>
//     </svg>
//   </div>
// </div>






//             </div>
//           ))}
//         </div>

//         {/* Text Section */}
//         <div className="text-center mt-[66px] px-4">
//           <div className="bg-[#f496bf00] rounded-lg p-1 mx-auto" style={{ width: "90%" }}>
//             {/* {activeContent.title && (
//               <h3 className="text-2xl font-bold  text-gray-500 mb-1 mt-1">{activeContent.title}</h3>
//             )} */}
//             <p className="text-xl lg:text-xl font-medium text-gray-500 leading-relaxed">
//               {activeContent.text}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamSection;




// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TeamSection = () => {
//   const teamRef = useRef([]);
//   const titleRef = useRef(null);
//   const logoRefs = useRef([]);
//   const [activeContent, setActiveContent] = useState({
//     title: "Our dental practice",
//     text: "Our dental practice, right next to Kotti, combines openness and expertise. We speak your language and set new standards in dental health with passion. Our diversity reflects the lively area. Together we will give you a radiant smile. Look forward to a special dental experience!",
//   });
//   const [clickedButton, setClickedButton] = useState(null);

//   useEffect(() => {
//     // Animate each team member
//     teamRef.current.forEach((teamMember) => {
//       gsap.fromTo(
//         teamMember,
//         { scale: 1 },
//         {
//           scale: 1.5,
//           duration: 8.5,
//           scrollTrigger: {
//             trigger: teamMember,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     });

//     // Animate the title
//     if (titleRef.current) {
//       gsap.fromTo(
//         titleRef.current,
//         { scale: 1 },
//         {
//           scale: 1.2,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     }

//     // Animate the logos
//     logoRefs.current.forEach((logo, index) => {
//       const direction = index % 2 === 0 ? "bottom-to-top" : "top-to-bottom";

//       gsap.fromTo(
//         logo,
//         { y: direction === "bottom-to-top" ? "100%" : "-100%", opacity: 0.2 },
//         {
//           y: direction === "bottom-to-top" ? "-100%" : "100%",
//           opacity: 0.3,
//           duration: 5,
//           scrollTrigger: {
//             trigger: logo,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, []);

//   const teamMembers = [
//     {
//       name: "Hakam El Daghma",
//       title: "About Hakam El Daghma",
//       text: "Hakam has expertise in various areas of dentistry. His specialization includes microscopic root canal treatment, dentures (prosthetics) and currently aesthetic dentistry for veneers and front tooth aesthetics. Hakam offers sensitive care, especially for anxious patients, and is available for consultations in German, English and Arabic.",
//       image: "/Assets/hak.png",
//     },
//     {
//       name: "Fabian Badour",
//       title: "About Fabian Badour",
//       text: "Fabian treats within the areas of surgery, implantology, dental prosthetics and front tooth aesthetics. His treatment also extends to anxious patients. Fabian is available for consultations in various languages, including Arabic, English and German, to ensure holistic care for his patients.",
//       image: "/Assets/fab.png",
//     },
//     {
//       name: "Prabh Singh Mahal",
//       title: "About Prabh Singh Mahal",
//       text: "Prabh specializes in surgery, implantology, dental prosthetics and anterior tooth aesthetics. With his patient-centered care, he also dedicates himself to treating anxious patients. Prabjit offers consultations in various languages, including Punjabi, Hindi, Urdu, English and German, to ensure comprehensive care for his patients.",
//       image: "/Assets/prab11.png",
//     },
//   ];

//   const logos = [
//     { id: 1, size: "180px", rotation: 15, image: "/Assets/torp.png" },
//     { id: 2, size: "200px", rotation: -25, image: "/Assets/torp.png" },
//     { id: 3, size: "110px", rotation: 30, image: "/Assets/toro.png" },
//     { id: 4, size: "150px", rotation: -10, image: "/Assets/toro2.png" },
//     { id: 5, size: "190px", rotation: 45, image: "/Assets/torp.png" },
//   ];

//   const handleContentChange = (title, text, index) => {
//     setActiveContent({ title, text });
//     setClickedButton(index);
//   };

//   const handleResetContent = () => {
//     setActiveContent({
//       title: "Our dental practice",
//       text: "Our dental practice, right next to Kotti, combines openness and expertise. We speak your language and set new standards in dental health with passion. Our diversity reflects the lively area. Together we will give you a radiant smile. Look forward to a special dental experience!",
//     });
//     setClickedButton(null);
//   };

//   return (
//     <div
//       className="relative bg-[#fdf9f4] py-16 overflow-x-hidden  overflow-y-visible overflow: visible "

//       onClick={handleResetContent}
//     >
//       {/* Background */}
//       <div
//         className="absolute w-full bg-[#fffcdc00] z-10"
//         style={{
//           width: "45%",
//           height: "270px",
//           bottom: "90",
//           left: "51%",
//           transform: "translateX(-50%)",
//           borderTopLeftRadius: "150px",
//           borderTopRightRadius: "180px",
//           borderBottomLeftRadius: "70px",
//           borderBottomRightRadius: "70px",
//         }}
//       ></div>

//       {/* Logos */}
//       <div className="absolute w-full z-10 grid grid-cols-5 gap-4 overflow-visible">
//         {logos.map((logo, index) => (
//           <img
//             key={logo.id}
//             ref={(el) => (logoRefs.current[index] = el)}
//             src={logo.image}
//             alt={`Logo ${index + 1}`}
//             className="opacity-20"
//             style={{
//               width: logo.size,
//               height: logo.size,
//               transform: `rotate(${logo.rotation}deg)`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Content Section */}
//       <div className="relative z-20">
//         <h2
//           ref={titleRef}
//           className="text-center text-customPink text-3xl font-bold mb-12 mt-0"
//         >
//           The Team
//         </h2>

//         {/* Team Members */}
//         <div
//           className="relative flex justify-center cursor-pointer items-end gap-10 "
//           style={{ paddingBottom: "50px" }}
//         >
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               ref={(el) => (teamRef.current[index] = el)}
//               className="flex flex-col items-center relative"
//               style={{ position: "relative", overflow: "visible", }}
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleContentChange(member.title, member.text, index);
//               }}
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-48 h-auto"
//                 style={{
//                   transformOrigin: "bottom",
//                   zIndex: 5,
//                 }}
//               />
// {/* <div
//   className="absolute text-center bg-customPink font-small py-[1px] px-[1px] rounded-md cursor-pointer"
//   style={{
//     bottom: "-20px",
//     zIndex: 50,
//     width: "174px",
//     color: clickedButton === index ? "#6b7280" : "#fdf9f4",
//   }}
// >
//   <span
//     className="transition-transform duration-300 transform hover:scale-105"
//     style={{ display: "inline-block" }}
//   >
//     {member.name}
//   </span>
// </div> */}


// <div
//   className="absolute text-around bg-customPink font-small py-[1px] px-[0px] rounded-md cursor-pointer shadow-xl"
//   style={{
//     bottom: "-20px",
//     zIndex: 50,
//     width: "172px",
//     color: clickedButton === index ? "#6b7280" : "#fdf9f4",
//   }}
// >
//   <div className="flex items-center justify-center space-x-0.5 transition-transform duration-300 transform hover:scale-105">
//     {/* Member Name */}
//     <span style={{ fontSize: "15px" }}>{member.name}</span>
//     {/* SVG Arrow */}
//     <svg
//       className="arrow"
//       width="8"
//       height="4"
//       viewBox="0 0 10 8"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M0 0.5L-1.09278e-07 3L5 8L10 3L10 0.5L5 5.5L0 0.5Z"
//         fill={clickedButton === index ? "#6b7280" : "#fdf9f4"}
//       ></path>
//     </svg>
//   </div>
// </div>
//             </div>
//           ))}
//         </div>

//         {/* Text Section */}
//         <div className="text-center mt-[66px] px-4">
//           <div className="bg-[#f496bf00] rounded-lg p-1 mx-auto" style={{ width: "90%" }}>
//             {/* {activeContent.title && (
//               <h3 className="text-2xl font-bold  text-gray-500 mb-1 mt-1">{activeContent.title}</h3>
//             )} */}
//             <p className="text-xl lg:text-xl font-medium text-gray-500 leading-relaxed">
//               {activeContent.text}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamSection;







// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TeamSection = () => {
//   const teamRef = useRef([]);
//   const titleRef = useRef(null);
//   const logoRefs = useRef([]);
//   const [activeContent, setActiveContent] = useState({
//     title: "Our dental practice",
//     text: "Our dental practice, right next to Kotti, combines openness and expertise. We speak your language and set new standards in dental health with passion. Our diversity reflects the lively area. Together we will give you a radiant smile. Look forward to a special dental experience!",
//   });
//   const [clickedButton, setClickedButton] = useState(null);

//   useEffect(() => {
//     // Animate each team member
//     teamRef.current.forEach((teamMember) => {
//       gsap.fromTo(
//         teamMember,
//         { scale: 1 },
//         {
//           scale: 1.6,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: teamMember,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     });

//     // Animate the title
//     if (titleRef.current) {
//       gsap.fromTo(
//         titleRef.current,
//         { scale: 1 },
//         {
//           scale: 1.2,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     }

//     // Animate the logos
//     logoRefs.current.forEach((logo, index) => {
//       const direction = index % 2 === 0 ? "bottom-to-top" : "top-to-bottom";

//       gsap.fromTo(
//         logo,
//         { y: direction === "bottom-to-top" ? "100%" : "-100%", opacity: 0.2 },
//         {
//           y: direction === "bottom-to-top" ? "-100%" : "100%",
//           opacity: 0.3,
//           duration: 5,
//           scrollTrigger: {
//             trigger: logo,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, []);

//   const teamMembers = [
//     {
//       name: "Hakam El Daghma",
//       title: "About Hakam El Daghma",
//       text: "Hakam has expertise in various areas of dentistry...",
//       image: "/Assets/hak.png",
//       width: "150px",
//       height: "220px",
//       x: "20px",
//       y: "17.5px",
//     },
//     {
//       name: "Fabian Badour",
//       title: "About Fabian Badour",
//       text: "Fabian treats within the areas of surgery...",
//       image: "/Assets/fab.png",
//       width: "160px",
//       height: "230px",
//       x: "40px",
//       y: "15px",
//     },
//     {
//       name: "Prabh Singh Mahal",
//       title: "About Prabh Singh Mahal",
//       text: "Prabh specializes in surgery...",
//       image: "/Assets/prab11.png",
//       width: "135px",
//       height: "250px",
//       x: "45px",
//       y: "9px",
//     },
   
//   ];

//   const logos = [
//     { id: 1, size: "180px", rotation: 15, image: "/Assets/torp.png" },
//     { id: 2, size: "200px", rotation: -25, image: "/Assets/torp.png" },
//     { id: 3, size: "110px", rotation: 30, image: "/Assets/toro.png" },
//     { id: 4, size: "150px", rotation: -10, image: "/Assets/toro2.png" },
//     { id: 5, size: "190px", rotation: 45, image: "/Assets/torp.png" },
//   ];

//   const handleContentChange = (title, text, index) => {
//     setActiveContent({ title, text });
//     setClickedButton(index);
//   };

//   const handleResetContent = () => {
//     setActiveContent({
//       title: "Our dental practice",
//       text: "Our dental practice, right next to Kotti, combines openness and expertise. We speak your language and set new standards in dental health with passion. Our diversity reflects the lively area. Together we will give you a radiant smile. Look forward to a special dental experience!",
//     });
//     setClickedButton(null);
//   };

//   return (
//     <div
//       className="relative bg-[#fdf9f4] py-16 overflow-x-hidden overflow-y-visible"
//       onClick={handleResetContent}
//     >
//       {/* Background */}
//       <div
//         className="absolute w-full bg-[#fffcdc00] z-0"
//         style={{
//           width: "45%",
//           height: "270px",
//           bottom: "90",
//           left: "51%",
//           transform: "translateX(-50%)",
//           borderTopLeftRadius: "150px",
//           borderTopRightRadius: "180px",
//           borderBottomLeftRadius: "70px",
//           borderBottomRightRadius: "70px",
//         }}
//       ></div>

//       {/* Logos */}
//       <div className="absolute w-full z-10 grid grid-cols-5 gap-4 overflow-visible">
//         {logos.map((logo, index) => (
//           <img
//             key={logo.id}
//             ref={(el) => (logoRefs.current[index] = el)}
//             src={logo.image}
//             alt={`Logo ${index + 1}`}
//             className="opacity-20"
//             style={{
//               width: logo.size,
//               height: logo.size,
//               transform: `rotate(${logo.rotation}deg)`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Content Section */}
//       <div className="relative z-20">
//         <h2
//           ref={titleRef}
//           className="text-center text-customPink text-3xl font-bold mb-12 mt-0"
//         >
//           The Team
//         </h2>

//         {/* Team Members */}
//         <div
//           className="relative flex justify-center cursor-pointer items-end gap-8"
//           style={{ paddingBottom: "50px" }}
//         >
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               ref={(el) => (teamRef.current[index] = el)}
//               className="flex flex-col items-center relative"
//               style={{
//                 position: "relative",
//                 overflow: "visible",
//                 transform: `translate(${member.x}, ${member.y})`,
//               }}
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleContentChange(member.title, member.text, index);
//               }}
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-48 h-auto"
//                 style={{
//                   width: member.width,
//                   height: member.height,
//                   transformOrigin: "bottom",
//                   zIndex: 5,
//                 }}
//               />

//               <div
//                 className="absolute text-around bg-[#f496bf2f] font-small py-[1px] px-[0px] rounded-md cursor-pointer shadow-xl z-50"
//                 style={{
//                   bottom: "-10px",
//                   width: "147px",
//                   color: clickedButton === index ? "#6b7280" : "#fdf9f4",
//                 }}
//               >
//                 <div className=" z-50 flex items-center justify-center space-x-0.5 transition-transform duration-300 transform hover:scale-105">
//                   {/* Member Name */}
//                   <span style={{ fontSize: "11px" }}>{member.name}</span>
//                   {/* SVG Arrow */}
//                   <svg
//                     className="arrow"
//                     width="8"
//                     height="4"
//                     viewBox="0 0 10 8"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M0 0.5L-1.09278e-07 3L5 8L10 3L10 0.5L5 5.5L0 0.5Z"
//                       fill={clickedButton === index ? "#6b7280" : "#fdf9f4"}
//                     ></path>
//                   </svg>
//                 </div>
//               </div>
             
//             </div>
            
//           ))}
//         </div>

//         {/* Text Section */}
//         <div className="text-center mt-[66px] px-4">
//           <div className="bg-[#f496bf00] rounded-lg p-1 mx-auto" style={{ width: "90%" }}>
//             <p className="text-xl lg:text-xl font-medium text-gray-500 leading-relaxed">
//               {activeContent.text}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamSection;






// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TeamSection = () => {
//   const teamRef = useRef([]);
//   const titleRef = useRef(null);
//   const logoRefs = useRef([]);
//   const [activeContent, setActiveContent] = useState({
//     title: "Our dental practice",
//     text: "Our dental practice, right next to Kotti, combines openness and expertise. We speak your language and set new standards in dental health with passion. Our diversity reflects the lively area. Together we will give you a radiant smile. Look forward to a special dental experience!",
//   });
//   const [clickedButton, setClickedButton] = useState(null);

//   useEffect(() => {
//     // Animate each team member
//     teamRef.current.forEach((teamMember) => {
//       gsap.fromTo(
//         teamMember,
//         { scale: 1 },
//         {
//           scale: 1.6,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: teamMember,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     });

//     // Animate the title
//     if (titleRef.current) {
//       gsap.fromTo(
//         titleRef.current,
//         { scale: 1 },
//         {
//           scale: 1.2,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     }

//     // Animate the logos
//     logoRefs.current.forEach((logo, index) => {
//       const direction = index % 2 === 0 ? "bottom-to-top" : "top-to-bottom";

//       gsap.fromTo(
//         logo,
//         { y: direction === "bottom-to-top" ? "100%" : "-100%", opacity: 0.2 },
//         {
//           y: direction === "bottom-to-top" ? "-100%" : "100%",
//           opacity: 0.3,
//           duration: 5,
//           scrollTrigger: {
//             trigger: logo,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, []);

//   const teamMembers = [
//     {
//       name: "Hakam El Daghma",
//       title: "About Hakam El Daghma",
//       text: "Hakam has expertise in various areas of dentistry...",
//       image: "/Assets/hak.png",
//       width: "150px",
//       height: "220px",
//       x: "20px",
//       y: "17.5px",
//       buttonStyles: {
//         backgroundColor: "#fdf9f400",
//         color: "#6b7280",
//         borderRadius: "10px",
//         border: "2px solid #fdf9f400",
//         width: "147px",
//         fontSize: "11px",
//       },
//     },
//     {
//       name: "Fabian Badour",
//       title: "About Fabian Badour",
//       text: "Fabian treats within the areas of surgery...",
//       image: "/Assets/fab.png",
//       width: "160px",
//       height: "230px",
//       x: "40px",
//       y: "15px",
//       buttonStyles: {
//         backgroundColor: "#ffefd5",
//         color: "#4b5563",
//         borderRadius: "15px",
//         border: "2px solid #f496bf",
//         width: "400px",
//         fontSize: "12px", 
//       },
//     },
//     {
//       name: "Prabh Singh Mahal",
//       title: "About Prabh Singh Mahal",
//       text: "Prabh specializes in surgery...",
//       image: "/Assets/prab11.png",
//       width: "135px",
//       height: "250px",
//       x: "45px",
//       y: "9px",
//       buttonStyles: {
//         backgroundColor: "#fdf9f400",
//         color: "#4b5563",
//         borderRadius: "20px",
//         border: "2px solid #fdf9f400",
//         width: "155px",
//         fontSize: "12px",
//       },
//     },
//   ];

//   const logos = [
//     { id: 1, size: "180px", rotation: 15, image: "/Assets/torp.png" },
//     { id: 2, size: "200px", rotation: -25, image: "/Assets/torp.png" },
//     { id: 3, size: "110px", rotation: 30, image: "/Assets/toro.png" },
//     { id: 4, size: "150px", rotation: -10, image: "/Assets/toro2.png" },
//     { id: 5, size: "190px", rotation: 45, image: "/Assets/torp.png" },
//   ];

//   const handleContentChange = (title, text, index) => {
//     setActiveContent({ title, text });
//     setClickedButton(index);
//   };

//   const handleResetContent = () => {
//     setActiveContent({
//       title: "Our dental practice",
//       text: "Our dental practice, right next to Kotti, combines openness and expertise. We speak your language and set new standards in dental health with passion. Our diversity reflects the lively area. Together we will give you a radiant smile. Look forward to a special dental experience!",
//     });
//     setClickedButton(null);
//   };

//   return (
//     <div
//       className="relative bg-[#fdf9f4] py-16 overflow-x-hidden overflow-y-visible"
//       onClick={handleResetContent}
//     >
//       {/* Background */}
//       <div
//         className="absolute w-full bg-[#fffcdc00] z-0"
//         style={{
//           width: "45%",
//           height: "270px",
//           bottom: "90",
//           left: "51%",
//           transform: "translateX(-50%)",
//           borderTopLeftRadius: "150px",
//           borderTopRightRadius: "180px",
//           borderBottomLeftRadius: "70px",
//           borderBottomRightRadius: "70px",
//         }}
//       ></div>

//       {/* Logos */}
//       <div className="absolute w-full z-10 grid grid-cols-5 gap-4 overflow-visible">
//         {logos.map((logo, index) => (
//           <img
//             key={logo.id}
//             ref={(el) => (logoRefs.current[index] = el)}
//             src={logo.image}
//             alt={`Logo ${index + 1}`}
//             className="opacity-20"
//             style={{
//               width: logo.size,
//               height: logo.size,
//               transform: `rotate(${logo.rotation}deg)`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Content Section */}
//       <div className="relative z-20">
//         <h2
//           ref={titleRef}
//           className="text-center text-customPink text-3xl font-bold mb-12 mt-0"
//         >
//           The Team
//         </h2>

//         {/* Team Members */}
//         <div
//           className="relative flex justify-center cursor-pointer items-end gap-8"
//           style={{ paddingBottom: "50px" }}
//         >
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               ref={(el) => (teamRef.current[index] = el)}
//               className="flex flex-col items-center relative"
//               style={{
//                 position: "relative",
//                 overflow: "visible",
//                 transform: `translate(${member.x}, ${member.y})`,
//               }}
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleContentChange(member.title, member.text, index);
//               }}
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-48 h-auto"
//                 style={{
//                   width: member.width,
//                   height: member.height,
//                   transformOrigin: "bottom",
//                   zIndex: 5,
//                 }}
//               />

//               <div
//                 className="absolute font-small py-[1px] px-[0px] rounded-md cursor-pointer shadow-xl z-50"
//                 style={{
//                   ...member.buttonStyles,
//                   bottom: "-10px",
//                 }}
//               >
//                 <div className="z-50 flex items-center justify-center space-x-0.5 transition-transform duration-300 transform hover:scale-105">
//                   <span style={{ fontSize: member.buttonStyles.fontSize }}>
//                     {member.name}
//                   </span>
//                   <svg
//                     className="arrow"
//                     width="8"
//                     height="4"
//                     viewBox="0 0 10 8"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M0 0.5L-1.09278e-07 3L5 8L10 3L10 0.5L5 5.5L0 0.5Z"
//                       fill={member.buttonStyles.color}
//                     ></path>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Text Section */}
//         <div className="text-center mt-[66px] px-4">
//           <div className="bg-[#f496bf00] rounded-lg p-1 mx-auto" style={{ width: "90%" }}>
//             <p className="text-xl lg:text-xl font-medium text-gray-500 leading-relaxed">
//               {activeContent.text}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamSection;



// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TeamSection = () => {
//   const teamRef = useRef([]);
//   const titleRef = useRef(null);
//   const logoRefs = useRef([]);
//   const [activeContent, setActiveContent] = useState({
//     title: "Our dental practice",
//     text: "Our dental practice, right next to Kotti, combines openness and expertise. We speak your language and set new standards in dental health with passion. Our diversity reflects the lively area. Together we will give you a radiant smile. Look forward to a special dental experience!",
//   });
//   const [clickedButton, setClickedButton] = useState(null);

//   useEffect(() => {
//     // Animate each team member
//     teamRef.current.forEach((teamMember) => {
//       gsap.fromTo(
//         teamMember,
//         { scale: 1 },
//         {
//           scale: 1.6,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: teamMember,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     });

//     // Animate the title
//     if (titleRef.current) {
//       gsap.fromTo(
//         titleRef.current,
//         { scale: 1 },
//         {
//           scale: 1.2,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     }

//     // Animate the logos
//     logoRefs.current.forEach((logo, index) => {
//       const direction = index % 2 === 0 ? "bottom-to-top" : "top-to-bottom";

//       gsap.fromTo(
//         logo,
//         { y: direction === "bottom-to-top" ? "100%" : "-100%", opacity: 0.2 },
//         {
//           y: direction === "bottom-to-top" ? "-100%" : "100%",
//           opacity: 0.3,
//           duration: 5,
//           scrollTrigger: {
//             trigger: logo,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, []);

//   const teamMembers = [
//     {
//       name: "Hakam El Daghma",
//       title: "About Hakam El Daghma",
//       text: "Hakam has expertise in various areas of dentistry...",
//       image: "/Assets/hak.png",
//       width: "150px",
//       height: "220px",
//       x: "20px",
//       y: "17.5px",
//       buttonStyles: {
//         backgroundColor: "#fdf9f400",
//         color: "#6b7280",
//         borderRadius: "10px",
//         border: "2px solid #fdf9f400",
//         width: "1px",
//         fontSize: "0px",
//       },
//     },
//     {
//       name: "Fabian Badour",
//       title: "About Fabian Badour",
//       text: "Fabian treats within the areas of surgery...",
//       image: "/Assets/fab.png",
//       width: "160px",
//       height: "230px",
//       x: "40px",
//       y: "15px",
//       buttonStyles: {
//         backgroundColor: "#ffefd5",
//         color: "#4b5563",
//         borderRadius: "15px",
//         border: "2px solid #f496bf",
//         width: "0px",
//         fontSize: "0px", 
//       },
//     },
//     {
//       name: "Prabh Singh Mahal",
//       title: "About Prabh Singh Mahal",
//       text: "Prabh specializes in surgery...",
//       image: "/Assets/prab11.png",
//       width: "135px",
//       height: "250px",
//       x: "45px",
//       y: "9px",
//        buttonStyles: {
//         backgroundColor: "#ffefd5",
//         color: "#4b5563",
//         borderRadius: "15px",
//         border: "2px solid #f496bf",
//         width: "350px",
//         fontSize: "12px", 
//       },
     
//     },
    
//   ];

//   const logos = [
//     { id: 1, size: "180px", rotation: 15, image: "/Assets/torp.png" },
//     { id: 2, size: "200px", rotation: -25, image: "/Assets/torp.png" },
//     { id: 3, size: "110px", rotation: 30, image: "/Assets/toro.png" },
//     { id: 4, size: "150px", rotation: -10, image: "/Assets/toro2.png" },
//     { id: 5, size: "190px", rotation: 45, image: "/Assets/torp.png" },
//   ];

//   const handleContentChange = (title, text, index) => {
//     setActiveContent({ title, text });
//     setClickedButton(index);
//   };

//   const handleResetContent = () => {
//     setActiveContent({
//       title: "Our dental practice",
//       text: "Our dental practice, right next to Kotti, combines openness and expertise. We speak your language and set new standards in dental health with passion. Our diversity reflects the lively area. Together we will give you a radiant smile. Look forward to a special dental experience!",
//     });
//     setClickedButton(null);
//   };

//   return (
//     <div
//       className="relative bg-[#fdf9f4] py-16 overflow-x-hidden overflow-y-visible"
//       onClick={handleResetContent}
//     >
//       {/* Background */}
//       <div
//         className="absolute w-full bg-[#fffcdc00] z-0"
//         style={{
//           width: "45%",
//           height: "270px",
//           bottom: "90",
//           left: "51%",
//           transform: "translateX(-50%)",
//           borderTopLeftRadius: "150px",
//           borderTopRightRadius: "180px",
//           borderBottomLeftRadius: "70px",
//           borderBottomRightRadius: "70px",
//         }}
//       ></div>

//       {/* Logos */}
//       <div className="absolute w-full z-10 grid grid-cols-5 gap-4 overflow-visible">
//         {logos.map((logo, index) => (
//           <img
//             key={logo.id}
//             ref={(el) => (logoRefs.current[index] = el)}
//             src={logo.image}
//             alt={`Logo ${index + 1}`}
//             className="opacity-20"
//             style={{
//               width: logo.size,
//               height: logo.size,
//               transform: `rotate(${logo.rotation}deg)`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Content Section */}
//       <div className="relative z-20">
//         <h2
//           ref={titleRef}
//           className="text-center text-customPink text-3xl font-bold mb-12 mt-0"
//         >
//           The Team
//         </h2>

//         {/* Team Members */}
//         <div
//           className="relative flex justify-center cursor-pointer items-end gap-8"
//           style={{ paddingBottom: "50px" }}
//         >
//    {teamMembers.map((member, index) => (
//   <div
//     key={index}
//     ref={(el) => (teamRef.current[index] = el)}
//     className="flex flex-col items-center relative"
//     style={{
//       position: "relative",
//       overflow: "visible",
//       transform: `translate(${member.x}, ${member.y})`,
//     }}
//     onClick={(e) => {
//       e.stopPropagation();
//       handleContentChange(member.title, member.text, index);
//     }}
//   >
//     <img
//       src={member.image}
//       alt={member.name}
//       className="w-48 h-auto"
//       style={{
//         width: member.width,
//         height: member.height,
//         transformOrigin: "bottom",
//         zIndex: 1,
//       }}
//     />

//     {index === teamMembers.length - 1 ? (
//       // Special handling for the right button moved to the middle position
//       <div
//         className="absolute flex bottom-[-10px] cursor-pointer shadow-xl z-10"
//         style={{
//           ...member.buttonStyles,
//           width: "360px", // Ensure proper button width
//           justifyContent: "space-between",
//           left: "50%", // Align to the middle
//           transform: "translateX(-85%)", // Center-align the button
//         }}
//       >
//         <div
//           className="w-1/3 text-center cursor-pointer hover:scale-105"
//           onClick={(e) => {
//             e.stopPropagation();
//             // Trigger the left button's functionality
//             handleContentChange(
//               teamMembers[0].title,
//               teamMembers[0].text,
//               0
//             );
//           }}
//         >
//           HAKAM
//         </div>
//         <div
//           className="w-1/3 text-center cursor-pointer hover:scale-105"
//           onClick={(e) => {
//             e.stopPropagation();
//             // Trigger the middle button's functionality
//             handleContentChange(
//               teamMembers[Math.floor(teamMembers.length / 2)].title,
//               teamMembers[Math.floor(teamMembers.length / 2)].text,
//               Math.floor(teamMembers.length / 2)
//             );
//           }}
//         >
//           FAB
//         </div>
//         <div
//           className="w-1/3 text-center cursor-pointer hover:scale-105"
//           onClick={(e) => {
//             e.stopPropagation();
//             // Trigger the right button's functionality
//             handleContentChange(member.title, member.text, index);
//           }}
//         >
//           PRAB
//         </div>
//       </div>
//     ) : (
//       // Other buttons remain the same
//       <div
//         className="absolute font-small py-[1px] px-[0px] rounded-md cursor-pointer shadow-xl"
//         style={{
//           ...member.buttonStyles,
//           bottom: "-10px",
//           zIndex: 10,
//         }}
//       >
//         <div className="z-50 flex items-center justify-center space-x-0.5 transition-transform duration-300 transform hover:scale-105">
//           <span style={{ fontSize: member.buttonStyles.fontSize }}>
//             {member.name}
//           </span>
//           <svg
//             className="arrow"
//             width="8"
//             height="4"
//             viewBox="0 0 10 8"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M0 0.5L-1.09278e-07 3L5 8L10 3L10 0.5L5 5.5L0 0.5Z"
//               fill={member.buttonStyles.color}
//             ></path>
//           </svg>
//         </div>
//       </div>
//     )}
//   </div>
// ))}



//         </div>

//         {/* Text Section */}
//         <div className="text-center mt-[66px] px-4">
//           <div className="bg-[#f496bf00] rounded-lg p-1 mx-auto" style={{ width: "90%" }}>
//             <p className="text-xl lg:text-xl font-medium text-gray-500 leading-relaxed">
//               {activeContent.text}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamSection;



// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Bar from "./Bar"; // Import the new Bar component

// gsap.registerPlugin(ScrollTrigger);

// const TeamSection = () => {
//   const teamRef = useRef([]);
//   const titleRef = useRef(null);
//   const logoRefs = useRef([]);
//   const [activeContent, setActiveContent] = useState({
//     title: "Our dental practice",
//     text: "Our dental practice, right next to Kotti, combines openness and expertise. We speak your language and set new standards in dental health with passion. Our diversity reflects the lively area. Together we will give you a radiant smile. Look forward to a special dental experience!",
//   });
//   const [clickedButton, setClickedButton] = useState(null);

//   useEffect(() => {
//     // Animate each team member
//     teamRef.current.forEach((teamMember) => {
//       gsap.fromTo(
//         teamMember,
//         { scale: 1 },
//         {
//           scale: 1.6,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: teamMember,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     });

//     // Animate the title
//     if (titleRef.current) {
//       gsap.fromTo(
//         titleRef.current,
//         { scale: 1 },
//         {
//           scale: 1.2,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     }

//     // Animate the logos
//     logoRefs.current.forEach((logo, index) => {
//       const direction = index % 2 === 0 ? "bottom-to-top" : "top-to-bottom";

//       gsap.fromTo(
//         logo,
//         { y: direction === "bottom-to-top" ? "100%" : "-100%", opacity: 0.2 },
//         {
//           y: direction === "bottom-to-top" ? "-100%" : "100%",
//           opacity: 0.3,
//           duration: 5,
//           scrollTrigger: {
//             trigger: logo,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, []);

//   const teamMembers = [
//     {
//       name: "Hakam El Daghma",
//       title: "About Hakam El Daghma",
//       text: "Hakam has expertise in various areas of dentistry...",
//       image: "/Assets/hak.png",
//       width: "150px",
//       height: "220px",
//       x: "20px",
//       y: "17.5px",
//       buttonStyles: {
//         backgroundColor: "#fdf9f400",
//         color: "#6b7280",
//         borderRadius: "10px",
//         border: "2px solid #fdf9f400",
//         width: "1px",
//         fontSize: "0px",
//       },
//     },
//     {
//       name: "Fabian Badour",
//       title: "About Fabian Badour",
//       text: "Fabian treats within the areas of surgery...",
//       image: "/Assets/fab.png",
//       width: "160px",
//       height: "230px",
//       x: "40px",
//       y: "15px",
//       buttonStyles: {
//         backgroundColor: "#ffefd5",
//         color: "#4b5563",
//         borderRadius: "15px",
//         border: "2px solid #f496bf",
//         width: "0px",
//         fontSize: "0px",
//       },
//     },
//     {
//       name: "Prabh Singh Mahal",
//       title: "About Prabh Singh Mahal",
//       text: "Prabh specializes in surgery...",
//       image: "/Assets/prab11.png",
//       width: "135px",
//       height: "250px",
//       x: "45px",
//       y: "9px",
//       buttonStyles: {
//         backgroundColor: "#ffefd5",
//         color: "#4b5563",
//         borderRadius: "15px",
//         border: "2px solid #f496bf",
//         width: "420px", // Adjust this value to change the button width
//        // width: "80%",
//         fontSize: "12px",
//       },
//     },
//   ];

//   const logos = [
//     { id: 1, size: "180px", rotation: 15, image: "/Assets/torp.png" },
//     { id: 2, size: "200px", rotation: -25, image: "/Assets/torp.png" },
//     { id: 3, size: "110px", rotation: 30, image: "/Assets/toro.png" },
//     { id: 4, size: "150px", rotation: -10, image: "/Assets/toro2.png" },
//     { id: 5, size: "190px", rotation: 45, image: "/Assets/torp.png" },
//   ];

//   const handleContentChange = (title, text, index) => {
//     setActiveContent({ title, text });
//     setClickedButton(index);
//   };

//   const handleResetContent = () => {
//     setActiveContent({
//       title: "Our dental practice",
//       text: "Our dental practice, right next to Kotti, combines openness and expertise. We speak your language and set new standards in dental health with passion. Our diversity reflects the lively area. Together we will give you a radiant smile. Look forward to a special dental experience!",
//     });
//     setClickedButton(null);
//   };

//   return (
//     <div
//       className="relative bg-[#fdf9f4] py-16 overflow-x-hidden overflow-y-visible"
//       onClick={handleResetContent}
//     >
//       {/* Background */}
//       <div
//         className="absolute w-full bg-[#fffcdc00] z-0"
//         style={{
//           width: "45%",
//           height: "270px",
//           bottom: "90",
//           left: "51%",
//           transform: "translateX(-50%)",
//           borderTopLeftRadius: "150px",
//           borderTopRightRadius: "180px",
//           borderBottomLeftRadius: "70px",
//           borderBottomRightRadius: "70px",
//         }}
//       ></div>

//       {/* Logos */}
//       <div className="absolute w-full z-10 grid grid-cols-5 gap-4 overflow-visible">
//         {logos.map((logo, index) => (
//           <img
//             key={logo.id}
//             ref={(el) => (logoRefs.current[index] = el)}
//             src={logo.image}
//             alt={`Logo ${index + 1}`}
//             className="opacity-20"
//             style={{
//               width: logo.size,
//               height: logo.size,
//               transform: `rotate(${logo.rotation}deg)`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Content Section */}
//       <div className="relative z-20">
//         <h2
//           ref={titleRef}
//           className="text-center text-customPink text-3xl font-bold mb-12 mt-0"
//         >
//           The Team
//         </h2>

//         {/* Team Members */}
//         <div
//           className="relative flex justify-center cursor-pointer items-end gap-8"
//           style={{ paddingBottom: "50px" }}
//         >
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               ref={(el) => (teamRef.current[index] = el)}
//               className="flex flex-col items-center relative"
//               style={{
//                 position: "relative",
//                 overflow: "visible",
//                 transform: `translate(${member.x}, ${member.y})`,
//               }}
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleContentChange(member.title, member.text, index);
//               }}
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-48 h-auto"
//                 style={{
//                   width: member.width,
//                   height: member.height,
//                   transformOrigin: "bottom",
//                   zIndex: 1,
//                 }}
//               />

//               {index === teamMembers.length - 1 ? (
//                 // Special handling for the right button moved to the middle position
//                 <div
//                   className="absolute flex bottom-[-10px] cursor-pointer shadow-xl z-10 responsive-button"
//                   style={{
//                     ...member.buttonStyles,
//                     width:"27vw",
//                     flexGrow: 0,
//                     flexShrink: 0,
//                     justifyContent: "space-between",
//                     left: "-50%",
//                     transform: "translateX(-51%)",
//                   }}
//                 >

// <style>
//     {`
//       @media (max-width: 1344px) {
//         .responsive-button {
//           width: 40vw !important;
//         }
//       }
//       @media (max-width: 1082px) {
//         .responsive-button {
//           width: 50vw !important;
//         }
//       }
// @media (max-width: 1008px) {
//         .responsive-button {
//           width: 55vw !important;
//         }
//       }
// @media (max-width:989px) {
//         .responsive-button {
//           width: 60vw !important;
//         }
//       }
// @media (max-width: 937px) {
//         .responsive-button {
//           width: 63vw !important;
//         }
//       }

//     `}
//   </style>




//                   <div
//                     className="w-1/3 text-center cursor-pointer hover:scale-105"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       // Trigger the left button's functionality
//                       handleContentChange(
//                         teamMembers[0].title,
//                         teamMembers[0].text,
//                         0
//                       );
//                     }}
//                   >
//                     HAKAM
//                   </div>
//                   <div
//                     className="w-1/3 text-center cursor-pointer hover:scale-105"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       // Trigger the middle button's functionality
//                       handleContentChange(
//                         teamMembers[Math.floor(teamMembers.length / 2)].title,
//                         teamMembers[Math.floor(teamMembers.length / 2)].text,
//                         Math.floor(teamMembers.length / 2)
//                       );
//                     }}
//                   >
//                     FAB
//                   </div>
//                   <div
//                     className="w-1/3 text-center cursor-pointer hover:scale-105"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       // Trigger the right button's functionality
//                       handleContentChange(member.title, member.text, index);
//                     }}
//                   >
//                     PRAB
//                   </div>
//                 </div>
//               ) : (
//                 // Other buttons remain the same
//                 <div
//                   className="absolute font-small py-[1px] px-[0px] rounded-md cursor-pointer shadow-xl"
//                   style={{
//                     ...member.buttonStyles,
//                     bottom: "-10px",
//                     zIndex: 10,
//                   }}
//                 >
//                   <div className="z-50 flex items-center justify-center space-x-0.5 transition-transform duration-300 transform hover:scale-105">
//                     <span style={{ fontSize: member.buttonStyles.fontSize }}>
//                       {member.name}
//                     </span>
//                     <svg
//                       className="arrow"
//                       width="8"
//                       height="4"
//                       viewBox="0 0 10 8"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M0 0.5L-1.09278e-07 3L5 8L10 3L10 0.5L5 5.5L0 0.5Z"
//                         fill={member.buttonStyles.color}
//                       ></path>
//                     </svg>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Text Section */}
//         <div className="text-center mt-[66px] px-4">
//           <div
//             className="bg-[#f496bf00] rounded-lg p-1 mx-auto"
//             style={{ width: "90%" }}
//           >
//             <p className="text-xl lg:text-xl font-medium text-gray-500 leading-relaxed">
//               {activeContent.text}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamSection;










// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TeamSection = () => {
//   const teamRef = useRef([]);
//   const titleRef = useRef(null);
//   const logoRefs = useRef([]);
//   const [activeContent, setActiveContent] = useState({
//     title: "Our dental practice",
//     text: "Our dental practice, right next to Kotti, combines openness and expertise. We speak your language and set new standards in dental health with passion. Our diversity reflects the lively area. Together we will give you a radiant smile. Look forward to a special dental experience!",
//   });

//   useEffect(() => {
//     teamRef.current.forEach((teamMember) => {
//       gsap.fromTo(
//         teamMember,
//         { scale: 1 },
//         {
//           scale: 1.6,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: teamMember,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     });

//     if (titleRef.current) {
//       gsap.fromTo(
//         titleRef.current,
//         { scale: 1 },
//         {
//           scale: 1.2,
//           duration: 3.5,
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );
//     }

//     logoRefs.current.forEach((logo, index) => {
//       const direction = index % 2 === 0 ? "bottom-to-top" : "top-to-bottom";

//       gsap.fromTo(
//         logo,
//         { y: direction === "bottom-to-top" ? "100%" : "-100%", opacity: 0.2 },
//         {
//           y: direction === "bottom-to-top" ? "-100%" : "100%",
//           opacity: 0.3,
//           duration: 5,
//           scrollTrigger: {
//             trigger: logo,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, []);


//   const teamMembers = [
//     {
//       name: "Hakam El Daghma",
//       title: "About Hakam El Daghma",
//       text: "Hakam has expertise in various areas of dentistry...",
//       image: "/Assets/hak.png",
//       width: "150px",
//       height: "220px",
//     },
//     {
//       name: "Fabian Badour",
//       title: "About Fabian Badour",
//       text: "Fabian treats within the areas of surgery...",
//       image: "/Assets/fab.png",
//       width: "160px",
//       height: "230px",
//     },
//     {
//       name: "Prabh Singh Mahal",
//       title: "About Prabh Singh Mahal",
//       text: "Prabh specializes in surgery...",
//       image: "/Assets/prab11.png",
//       width: "135px",
//       height: "250px",
//     },
//   ];

//   const logos = [
//     { id: 1, size: "180px", rotation: 15, image: "/Assets/torp.png" },
//     { id: 2, size: "200px", rotation: -25, image: "/Assets/torp.png" },
//     { id: 3, size: "110px", rotation: 30, image: "/Assets/toro.png" },
//     { id: 4, size: "150px", rotation: -10, image: "/Assets/toro2.png" },
//     { id: 5, size: "190px", rotation: 45, image: "/Assets/torp.png" },
//   ];

//   const handleResetContent = () => {
//     setActiveContent({
//       title: "Our dental practice",
//       text: "Our dental practice, right next to Kotti, combines openness and expertise. We speak your language and set new standards in dental health with passion. Our diversity reflects the lively area. Together we will give you a radiant smile. Look forward to a special dental experience!",
//     });
//   };




  
//   return (
//     <div
//       className="relative bg-[#fdf9f4] py-16 overflow-x-hidden overflow-y-visible"
//       onClick={handleResetContent}
//     >
//       <div
//         className="absolute w-full bg-[#fffcdc00] z-0"
//         style={{
//           width: "45%",
//           height: "270px",
//           bottom: "90",
//           left: "51%",
//           transform: "translateX(-50%)",
//           borderTopLeftRadius: "150px",
//           borderTopRightRadius: "180px",
//           borderBottomLeftRadius: "70px",
//           borderBottomRightRadius: "70px",
//         }}
//       ></div>

//       <div className="absolute w-full z-0 grid grid-cols-5 gap-4 overflow-visible">
//         {logos.map((logo, index) => (
//           <img
//             key={logo.id}
//             ref={(el) => (logoRefs.current[index] = el)}
//             src={logo.image}
//             alt={`Logo ${index + 1}`}
//             className="opacity-20"
//             style={{
//               width: logo.size,
//               height: logo.size,
//               transform: `rotate(${logo.rotation}deg)`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10">
//         <h2
//           ref={titleRef}
//           className="text-center text-customPink text-3xl font-bold mb-12 mt-0"
//         >
//           The Team
//         </h2>

//         <div
//           className="relative flex justify-center items-end gap-8"
//           style={{ paddingBottom: "50px" }}
//         >
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               ref={(el) => (teamRef.current[index] = el)}
//               className="flex flex-col items-center relative"
//               style={{
//                 position: "relative",
//                 overflow: "visible",
//                 zIndex: 0, // Ensures images stay below the button
//                 clipPath:
//                   index === 2
//                     ? "polygon(0 0, 100% 0, 100% 91.4%, 0 91.4%)"
//                     : "none",
//               }}
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-48 h-auto"
//                 style={{
//                   width: member.width,
//                   height: member.height,
//                   transformOrigin: "bottom",
//                 }}
//               />
//               {index === 1 && (
//               <div
//               className="absolute"
//               style={{
//                 bottom: "-18px",
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 zIndex: 10, // Button stays on top
//               }}
//             >
//               <button
//                 className="bg-[#f496bf] text-white py-3 px-6 rounded-lg responsive-button"
//                 style={{
//                   width: "400px", // Default width
//                   height:"30px",
//                 }}
//               >
//                 Learn More About Our Team
//               </button>
//               <style>
//                 {`
//                   @media (max-width: 1025px) {
//                     .responsive-button {
//                       width: 50vw !important;
//                     }
//                   }
//                     @media (max-width: 910px) {
//                     .responsive-button {
//                       width: 55vw !important;
//                     }
//                   }
//                     @media (max-width: 835px) {
//                     .responsive-button {
//                       width: 60vw !important;
//                     }
//                   }
//                 `}
//               </style>
//             </div>
            
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-[66px] px-4">
//           <div
//             className="bg-[#f496bf00] rounded-lg p-1 mx-auto"
//             style={{ width: "90%" }}
//           >
//             <p className="text-xl lg:text-xl font-medium text-gray-500 leading-relaxed">
//               {activeContent.text}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamSection;














import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
  const teamRef = useRef([]);
  const titleRef = useRef(null);
  const logoRefs = useRef([]);
  const [activeContent, setActiveContent] = useState({
    title: "Our dental practice",
    text: "Our dental practice, right next to Kotti, combines openness and expertise. We speak your language and set new standards in dental health with passion. Our diversity reflects the lively area. Together we will give you a radiant smile. Look forward to a special dental experience!",
  });


    const [clickedButton, setClickedButton] = useState(null);
  
  useEffect(() => {
    teamRef.current.forEach((teamMember) => {
      gsap.fromTo(
        teamMember,
        { scale: 1 },
        {
          scale: 1.6,
          duration: 3.5,
          scrollTrigger: {
            trigger: teamMember,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });

    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { scale: 1 },
        {
          scale: 1.2,
          duration: 3.5,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    }

    logoRefs.current.forEach((logo, index) => {
      const direction = index % 2 === 0 ? "bottom-to-top" : "top-to-bottom";

      gsap.fromTo(
        logo,
        { y: direction === "bottom-to-top" ? "100%" : "-100%", opacity: 0.2 },
        {
          y: direction === "bottom-to-top" ? "-100%" : "100%",
          opacity: 0.3,
          duration: 5,
          scrollTrigger: {
            trigger: logo,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);


  const teamMembers = [
    {
      name: "Hakam El Daghma",
      title: "About Hakam El Daghma",
      text: "Hakam has expertise in various areas of dentistry. His specialization includes microscopic root canal treatment, dentures (prosthetics) and currently aesthetic dentistry for veneers and front tooth aesthetics. Hakam offers sensitive care, especially for anxious patients, and is available for consultations in German, English and Arabic.",
      image: "/Assets/hak.png",
      width: "150px",
      height: "220px",
      x: "-20px",
      y: "0px",
    },
    {
      name: "Fabian Badour",
      title: "About Fabian Badour",
      text: "Fabian treats within the areas of surgery, implantology, dental prosthetics and front tooth aesthetics. His treatment also extends to anxious patients. Fabian is available for consultations in various languages, including Arabic, English and German, to ensure holistic care for his patients.",
      image: "/Assets/fab.png",
      width: "160px",
      height: "230px",
      x: "0px",
      y: "0px",
    },
    {
      name: "Prabh Singh Mahal",
      title: "About Prabh Singh Mahal",
      text: "Prabh specializes in surgery, implantology, dental prosthetics and anterior tooth aesthetics. With his patient-centered care, he also dedicates himself to treating anxious patients. Prabjit offers consultations in various languages, including Punjabi, Hindi, Urdu, English and German, to ensure comprehensive care for his patients.",
      image: "/Assets/prab11.png",
      width: "135px",
      height: "260px",
      x: "9px",
    y: "0px",
    },
  ];

  const logos = [
    { id: 1, size: "180px", rotation: 15, image: "/Assets/torp.png" },
    { id: 2, size: "200px", rotation: -25, image: "/Assets/torp.png" },
    { id: 3, size: "110px", rotation: 30, image: "/Assets/toro.png" },
    { id: 4, size: "150px", rotation: -10, image: "/Assets/toro2.png" },
    { id: 5, size: "190px", rotation: 45, image: "/Assets/torp.png" },
  ];

  const handleContentChange = (title, text, index) => {
    setActiveContent({ title, text });
    setClickedButton(index);
  };

  const handleResetContent = () => {
    setActiveContent({
      title: "Our dental practice",
      text: "Our dental practice, right next to Kotti, combines openness and expertise. We speak your language and set new standards in dental health with passion. Our diversity reflects the lively area. Together we will give you a radiant smile. Look forward to a special dental experience!",
    });
    setClickedButton(null);
  };



  
  return (
    <div
    className="relative bg-[#fdf9f4] py-8 overflow-x-hidden overflow-y-visible"
    onClick={() => {
      handleResetContent(); // Reset content and clickedButton state
    }}
  >
      {/* Background */}
      <div
        className="absolute w-full bg-[#fffcdc00] z-0"
        style={{
          width: "45%",
          height: "270px",
          bottom: "90",
          left: "51%",
          transform: "translateX(-50%)",
          borderTopLeftRadius: "150px",
          borderTopRightRadius: "180px",
          borderBottomLeftRadius: "70px",
          borderBottomRightRadius: "70px",
        }}
      ></div>

{/* Logos */}
      <div className="absolute w-full z-0 grid grid-cols-5 gap-4 overflow-visible"
      
      >
        {logos.map((logo, index) => (
          <img
            key={logo.id}
            ref={(el) => (logoRefs.current[index] = el)}
            src={logo.image}
            alt={`Logo ${index + 1}`}
            className="opacity-20"
            style={{
              width: logo.size,
              height: logo.size,
              transform: `rotate(${logo.rotation}deg)`,
            }}
          />
        ))}
      </div>

{/* Content Section */}
      <div className="relative z-10">
        <h2
          ref={titleRef}
          className="text-center text-customPink text-3xl font-bold mb-12 mt-0"
          style={{ filter: "drop-shadow(1px 1px 0.7px #909497)", // Adjusted shadow offset
          }}
        >
          The Team
        </h2>

{/* Team Members */}
<div
  className="relative flex justify-center items-end gap-8"
  style={{ paddingBottom: "50px" }}
>
  {teamMembers.map((member, index) => (
    <div
      key={index}
      ref={(el) => (teamRef.current[index] = el)}
      className="flex flex-col items-center relative"
      style={{
        position: "relative",
        overflow: "visible",
        transform: `translate(${member.x}, ${member.y})`,
       // paddingRight: index === 2 ? "20px" : "0px", // Add extra space for the rightmost image

        zIndex: 0,
        clipPath:
          index === 2
            ? "polygon(0 0, 100% 0, 100% 92.8%, 0 92.8%)"
            : "none",
      }}
    >
      <img
    src={member.image}
    alt={member.name}
    className="w-48 h-auto"
    style={{
      filter:
        index === 2
          ? " drop-shadow(5px -4px 4px rgba(0, 0, 0, 0.3))" // Only top, bottom, and right shadows
          : "drop-shadow(0 -4px 4px rgba(0, 0, 0, 0.3))",
      width: member.width,
      height: member.height,
      transformOrigin: "bottom",
    }}
  />
{/* Add Button under the middle image */}

      {index === 1 && (
        <div
          className="absolute"
          style={{
            bottom: "-18px",
            left: "50%",
            justifyContent: "space-between",
            transform: "translateX(-50%)",
            zIndex: 10,
          }}
        >
          <div
            className="bg-[#fdf9f4] text-white py-3 px-6 rounded-lg responsive-button flex items-center"
            style={{
              width: "400px",
              height: "30px", // Slightly increased height for better centering
              display: "flex",
              justifyContent: "space-between",
             boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3), 0 -2px 6px rgba(0, 0, 0, 0.7), 4px 0 6px rgba(0, 0, 0, 0.1), -4px 0 6px rgba(0, 0, 0, 0.1)",
             boxShadow: "1px 1px 1px #f496bf, 2px 2px 1px #f496bf, 0px 0 0px #f496bf, 0px 0 0px #f496bf",

            }}
            onClick={(e) => e.stopPropagation()} // Prevent outside click interference
          >
      <div
   className={`w-1/3 text-center cursor-pointer transition-transform transform hover:scale-105 relative ${
    clickedButton === 0 ? "font-medium text-customPink leading-relaxed" : "font-medium text-gray-500 leading-relaxed"
  }`}
  style={{ fontSize: "14px", lineHeight: "1.4" }} // Ensures spacing
  onClick={(e) => {
    e.stopPropagation(); // Prevent propagation to the outer container
    handleContentChange(teamMembers[0].title, teamMembers[0].text, 0);
  }}
>
  Hakam El Daghma
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 6"
    width="6"
    height="4"
    fill="currentColor"
    style={{
      position: "absolute",
      left: "50%",
      bottom: "-2px", // Position the arrow below the text
      transform: "translateX(-50%)",
    }}
  >
    <path d="M0 0L5 6L10 0H0Z" />
  </svg>
</div>

            <div
   className={`w-1/3 text-center cursor-pointer transition-transform transform hover:scale-105 relative ${
    clickedButton === 1 ? "font-medium text-customPink leading-relaxed" : "font-medium text-gray-500 leading-relaxed"
  }`}
  style={{ fontSize: "14px", lineHeight: "1.4" }} // Line height for spacing
  onClick={(e) => {
    e.stopPropagation(); // Prevent propagation to the outer container
    handleContentChange(teamMembers[1].title, teamMembers[1].text, 1);
  }}
>
  Fabian Badour
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 6"
    width="6"
    height="4"
    fill="currentColor"
    style={{
      position: "absolute",
      left: "50%",
      bottom: "-2px", // Position just below the text
      transform: "translateX(-50%)",
    }}
  >
    <path d="M0 0L5 6L10 0H0Z" />
  </svg>
</div>

<div
   className={`w-1/3 text-center cursor-pointer transition-transform transform hover:scale-105 relative ${
    clickedButton === 2 ? "font-medium text-customPink leading-relaxed" : "font-medium text-gray-500 leading-relaxed"
  }`}
  style={{ fontSize: "13px", lineHeight: "1.4" }} // Ensures spacing
  onClick={(e) => {
    e.stopPropagation(); // Prevent propagation to the outer container
    handleContentChange(teamMembers[2].title, teamMembers[2].text, 2);
  }}
>
  Prabh Singh Mahal
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 6"
    width="6"
    height="4"
    fill="currentColor"
    style={{
      position: "absolute",
      left: "60%",
      bottom: "-2px", // Adjusted to position the arrow below the text
      transform: "translateX(-50%)",
    }}
  >
    <path d="M0 0L5 6L10 0H0Z" />
  </svg>
</div>
          </div>
          <style>
            {`
              @media (max-width: 1025px) {
                .responsive-button {
                  width: 50vw !important;
                }
              }
              @media (max-width: 910px) {
                .responsive-button {
                  width: 55vw !important;
                }
              }
              @media (max-width: 835px) {
                .responsive-button {
                  width: 60vw !important;
                }
              }
              .responsive-button div {
                line-height: 40px; /* Ensure vertical centering */
                transition: transform 0.2s ease, font-size 0.2s ease;
              }
              .responsive-button div:hover {
                font-size: 105%; /* Increase font size on hover */
              }
            `}
          </style>
        </div>
      )}
    </div>
  ))}
</div>

  {/* Text Section */}
        <div className="text-center mt-[66px] px-4">
          <div
            className="bg-[#f496bf00] rounded-lg p-1 mx-auto"
            style={{ width: "90%" }}
          >
            <p className="text-xl lg:text-xl font-medium text-gray-500 leading-relaxed">
              {activeContent.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;







