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

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
  const teamRef = useRef([]);
  const titleRef = useRef(null); // Reference for the title
  const logoRefs = useRef([]); // References for the logos

  useEffect(() => {
    // Animate each team member
    teamRef.current.forEach((teamMember) => {
      gsap.fromTo(
        teamMember,
        { scale: 1 },
        {
          scale: 1.5,
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

    // Animate the title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { scale: 1 },
        {
          scale: 1.5,
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

    // Animate the logos
    logoRefs.current.forEach((logo, index) => {
      const direction = index % 2 === 0 ? "bottom-to-top" : "top-to-bottom"; // Alternate directions
      const animationProps =
        direction === "bottom-to-top"
          ? { y: "100%", x: "0%" }
          : { y: "-100%", x: "0%" };

      gsap.fromTo(
        logo,
        { ...animationProps, opacity: 0.2, scale: 1 },
        {
          y: direction === "bottom-to-top" ? "-100%" : "100%", // Move in respective direction
          opacity: 0.3,
          scale: 1.5,
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
      name: "Hakam",
      image: "/Assets/hak.png", // Transparent PNG image
    },
    {
      name: "Fabian",
      image: "/Assets/fab.png", // Transparent PNG image
    },
    {
      name: "Prabh",
      image: "/Assets/fab.png", // Transparent PNG image
    },
  ];

  const logos = [
    { id: 1, size: "120px", position: "10%", rotation: 15 },
    { id: 2, size: "200px", position: "25%", rotation: -25 },
    { id: 3, size: "180px", position: "50%", rotation: 30 },
    { id: 4, size: "150px", position: "65%", rotation: -10 },
    { id: 5, size: "140px", position: "30%", rotation: 45 },
  ];

  return (
    <div className="relative bg-[#fdf9f4] py-16">
      {/* Wrapper with overflow hidden */}
      <div className="relative ">
        {/* Background */}
        <div
          className="absolute w-full bg-[#fffcdc] z-0"
          style={{
            height: "300px", // Adjust the height of the background
            bottom: "0", // Align it with the bottom
            top: "auto", // Ensures no conflicting positioning
          }}
        ></div>

        {/* Moving Logos */}
        {logos.map((logo, index) => (
          <img
            key={logo.id}
            ref={(el) => (logoRefs.current[index] = el)}
            src="/Assets/logo.png" // Replace with your logo path
            alt={`Logo ${index + 1}`} // Correct the alt text
            className="absolute z-5 opacity-20"
            style={{
              width: logo.size,
              height: logo.size,
              top: logo.position, // Position within the background
              transform: `rotate(${logo.rotation}deg)`, // Correct string interpolation
              left: `${10 + index * 15}%`, // Correct string interpolation
            }}
          />
        ))}

        {/* Content Section */}
        <div className="relative z-10">
          <h2
            ref={titleRef} // Attach ref to the title
            className="text-center text-customPink text-3xl font-bold mb-10"
          >
            The Team
          </h2>
          <div className="flex justify-center items-end gap-10 relative">
            {/* Team Images */}
            {teamMembers.map((member, index) => (
              <div
                key={index}
                ref={(el) => (teamRef.current[index] = el)}
                className="flex flex-col items-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-auto transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
