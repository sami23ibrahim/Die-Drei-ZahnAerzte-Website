// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TeamSectionMobile = () => {
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
//           scale: 1.3, // Slightly reduced for mobile
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
//           scale: 1.1, // Reduced scaling
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
//       width: "100px",
//       height: "140px",
//     },
//     {
//       name: "Fabian Badour",
//       title: "About Fabian Badour",
//       text: "Fabian treats within the areas of surgery...",
//       image: "/Assets/fab.png",
//       width: "110px",
//       height: "150px",
//     },
//     {
//       name: "Prabh Singh Mahal",
//       title: "About Prabh Singh Mahal",
//       text: "Prabh specializes in surgery...",
//       image: "/Assets/prab11.png",
//       width: "90px",
//       height: "160px",
//     },
//   ];

//   const handleResetContent = () => {
//     setActiveContent({
//       title: "Our dental practice",
//       text: "Our dental practice, right next to Kotti, combines openness and expertise. We speak your language and set new standards in dental health with passion. Our diversity reflects the lively area. Together we will give you a radiant smile. Look forward to a special dental experience!",
//     });
//   };

//   return (
//     <div
//       className="relative bg-[#fdf9f4] py-8 overflow-x-hidden overflow-y-visible"
//       onClick={handleResetContent}
//     >
//       <div className="absolute w-full z-0 grid grid-cols-3 gap-2 overflow-visible">
//         {/* Logos */}
//       </div>

//       <div className="relative z-10">
//         <h2
//           ref={titleRef}
//           className="text-center text-customPink text-2xl font-bold mb-8 mt-0"
//         >
//           The Team
//         </h2>

//         <div
//           className="relative flex justify-center items-end gap-4"
//           style={{ paddingBottom: "30px" }}
//         >
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               ref={(el) => (teamRef.current[index] = el)}
//               className="flex flex-col items-center relative"
//               style={{
//                 position: "relative",
//                 overflow: "visible",
//                 zIndex: 0,
//                 clipPath:
//                   index === 2
//                     ? "polygon(0 0, 100% 0, 100% 86.0%, 0 86.0%)"
//                     : "none", // Clipping applied to the specific image
//               }}
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-24 h-auto"
//                 style={{
//                   width: member.width,
//                   height: member.height,
//                   transformOrigin: "bottom",
//                 }}
//               />
//               {/* Button for the middle image */}
//               {index === 1 && (
//                 <div
//                   className="absolute"
//                   style={{
//                     bottom: "-18px",
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     zIndex: 10,
//                   }}
//                 >
//                   <button
//                     className="bg-[#54d2eb] text-white py-2 px-4 rounded-lg"
//                     style={{
//                       width: "300px", // Mobile button width
//                     }}
//                   >
//                     Learn More About Our Team
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-4 px-2">
//           <div
//             className="bg-[#f496bf00] rounded-lg p-2 mx-auto"
//             style={{ width: "90%" }}
//           >
//             <p className="text-sm font-medium text-gray-500 leading-relaxed">
//               {activeContent.text}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamSectionMobile;


// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TeamSectionMobile = () => {
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
//           scale: 1.3,
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
//           scale: 1.1,
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
//       width: "100px",
//       height: "140px",
//     },
//     {
//       name: "Fabian Badour",
//       title: "About Fabian Badour",
//       text: "Fabian treats within the areas of surgery...",
//       image: "/Assets/fab.png",
//       width: "110px",
//       height: "150px",
//     },
//     {
//       name: "Prabh Singh Mahal",
//       title: "About Prabh Singh Mahal",
//       text: "Prabh specializes in surgery...",
//       image: "/Assets/prab11.png",
//       width: "90px",
//       height: "160px",
//     },
//   ];

//   const logos = [
//     { id: 1, size: "100px", rotation: 15, image: "/Assets/torp.png" },
//     { id: 2, size: "110px", rotation: -25, image: "/Assets/torp.png" },
//     { id: 3, size: "90px", rotation: 30, image: "/Assets/toro.png" },
//   ];

//   const handleResetContent = () => {
//     setActiveContent({
//       title: "Our dental practice",
//       text: "Our dental practice, right next to Kotti, combines openness and expertise. We speak your language and set new standards in dental health with passion. Our diversity reflects the lively area. Together we will give you a radiant smile. Look forward to a special dental experience!",
//     });
//   };

//   return (
//     <div
//       className="relative bg-[#fdf9f4] py-8 overflow-x-hidden overflow-y-visible"
//       onClick={handleResetContent}
//     >
//       {/* Moving Logos */}
//       <div className="absolute w-full z-0 grid grid-cols-3 gap-2 overflow-visible">
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
//           className="text-center text-customPink text-2xl font-bold mb-8 mt-0"
//         >
//           The Team
//         </h2>

//         <div
//           className="relative flex justify-center items-end gap-4"
//           style={{ paddingBottom: "30px" }}
//         >
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               ref={(el) => (teamRef.current[index] = el)}
//               className="flex flex-col items-center relative"
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 style={{
//                   width: member.width,
//                   height: member.height,
//                   objectFit: "contain",
//                 }}
//               />
//               {/* Add Button under the middle image */}
//               {index === 1 && (
//                 <div
//                   className="absolute"
//                   style={{
//                     bottom: "-18px",
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     zIndex: 10,
//                   }}
//                 >
//                   <button
//                     className="bg-[#54d2eb] text-white py-2 px-4 rounded-lg"
//                     style={{
//                       width: "300px", // Mobile button width
//                     }}
//                   >
//                     Learn More About Our Team
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-4 px-2">
//           <div
//             className="bg-[#f496bf00] rounded-lg p-2 mx-auto"
//             style={{ width: "90%" }}
//           >
//             <p className="text-sm font-medium text-gray-500 leading-relaxed">
//               {activeContent.text}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamSectionMobile;


import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TeamSectionMobile = () => {
  const teamRef = useRef([]);
  const titleRef = useRef(null);
  const logoRefs = useRef([]);
  const [activeContent, setActiveContent] = useState({
    title: "Our dental practice",
    text: "Our dental practice, right next to Kotti, combines openness and expertise. We speak your language and set new standards in dental health with passion. Our diversity reflects the lively area. Together we will give you a radiant smile. Look forward to a special dental experience!",
  });
    const [clickedButton, setClickedButton] = useState(null);

  useEffect(() => {
    // Animate team member images
    teamRef.current.forEach((teamMember) => {
      gsap.fromTo(
        teamMember,
        { scale: 1 },
        {
          scale: 1.3,
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
          scale: 1.1,
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

    // Animate the moving logos
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
      width: "90px",
      height: "130px",
       x: "10px",
       y: "0px",
    },
    {
      name: "Fabian Badour",
      title: "About Fabian Badour",
      text: "Fabian treats within the areas of surgery, implantology, dental prosthetics and front tooth aesthetics. His treatment also extends to anxious patients. Fabian is available for consultations in various languages, including Arabic, English and German, to ensure holistic care for his patients.",
      image: "/Assets/fab.png",
      width: "101px",
      height: "140px",
      // x: "-20px",
      // y: "0px",
    },
    {
      name: "Prabh Singh Mahal",
      title: "About Prabh Singh Mahal",
      text: "Prabh specializes in surgery, implantology, dental prosthetics and anterior tooth aesthetics. With his patient-centered care, he also dedicates himself to treating anxious patients. Prabjit offers consultations in various languages, including Punjabi, Hindi, Urdu, English and German, to ensure comprehensive care for his patients.",
      image: "/Assets/prab11.png",
      width: "82px",
      height: "150px",
       x: "-9px",
       y: "0px",
    },
  ];

  const logos = [
    { id: 1, size: "100px", rotation: 15, image: "/Assets/torp.png" },
    { id: 2, size: "110px", rotation: -25, image: "/Assets/torp.png" },
    { id: 3, size: "90px", rotation: 30, image: "/Assets/toro.png" },
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
  
      {/* Moving Logos */}
      <div className="absolute w-full z-0 grid grid-cols-3 gap-2 overflow-visible">
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
          className="text-center text-customPink text-2xl font-bold mb-8 mt-0"
          style={{ filter: "drop-shadow(1px 1px 0.7px #909497)", // Adjusted shadow offset
          }}
        >
          The Team
        </h2>

{/* Team Members */}
<div
  className="relative flex justify-center items-end gap-1"
  style={{ paddingBottom: "30px" }}
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

        zIndex: 0,
        clipPath:
          index === 2
            ? "polygon(0 0, 100% 0, 100% 94.7%, 0 94.7%)"
            : "none", // Apply clipping only to the last image
      }}
    >
      <img
        src={member.image}
        alt={member.name}
        style={{
          filter:
          index === 2
            ? " drop-shadow(6px -4px 3px rgba(0, 0, 0, 0.4))" // Only top, bottom, and right shadows
            : "drop-shadow(0 -4px 6px rgba(0, 0, 0, 0.5))",
          width: member.width,
          height: member.height,
          objectFit: "contain",
        }}
      />
      {/* Add Button under the middle image */}
      {index === 1 && (
        <div
          className="absolute"
          style={{
            bottom: "-18px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
          }}
        >
          <div
            className="bg-[#fdf9f4] text-white py-2 px-1 rounded-lg responsive-button flex items-center"
            style={{
              width: "400px", // Mobile button width
              display: "flex",
              height: "25px", 
              justifyContent: "space-between",
             // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 -4px 6px rgba(0, 0, 0, 0.1), 4px 0 6px rgba(0, 0, 0, 0.1), -4px 0 6px rgba(0, 0, 0, 0.1)",
             boxShadow: "1px 1px 1px #f496bf, 2px 2px 1px #f496bf, 0px 0 0px #f496bf, 0px 0 0px #f496bf",

            }}
            onClick={(e) => e.stopPropagation()} // Prevent outside click interference
          >
            {/* Split Button into Three Parts */}
            <div
 className={`w-1/3 text-center cursor-pointer transition-transform transform hover:scale-105 relative ${
  clickedButton === 0 ? "font-medium text-customPink leading-relaxed" : "font-medium text-gray-500 leading-relaxed"
}`}              style={{ fontSize: "10px", lineHeight: "1.5" }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent propagation to the outer container
                handleContentChange(teamMembers[0].title, teamMembers[0].text, 0);
              }}
            >
              Hakam Daghma
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
                clickedButton === 1 ?  "font-medium text-customPink leading-relaxed" : "font-medium text-gray-500 leading-relaxed"
              }`}
              style={{ fontSize: "10px", lineHeight: "1.5" }}
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
                clickedButton === 2 ?  "font-medium text-customPink leading-relaxed" : "font-medium text-gray-500 leading-relaxed"
              }`}
              style={{ fontSize: "10px", lineHeight: "1.5" }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent propagation to the outer container
                handleContentChange(teamMembers[2].title, teamMembers[2].text, 2);
              }}
            >
              Prabh Mahal
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 6"
                width="6"
                height="4"
                fill="currentColor"
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: "-2px", // Adjusted to position the arrow below the text
                  transform: "translateX(-50%)",
                }}
              >
                <path d="M0 0L5 6L10 0H0Z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  ))}
</div>






        <div className="text-center mt-4 px-2">
          <div
            className="bg-[#f496bf00] rounded-lg p-2 mx-auto"
            style={{ width: "90%" }}
          >
            <p className="text-xl font-medium text-gray-500 leading-relaxed">
              {activeContent.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSectionMobile;
