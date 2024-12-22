// import React from "react";
// import { motion } from "framer-motion"; // For animations

// const services = [
//   { icon: "/Assets/Anxiety Patients.svg", title: "Anxiety Patients" },
//   { icon: "/Assets/surgery.svg", title: "Surgery" },
//   { icon: "/Assets/implantology.svg", title: "Implantology" },
//   { icon: "/Assets/dentures.svg", title: "Dentures" },
//   { icon: "/Assets/root-canal-treatment.svg", title: "Root Canal Treatment" },
//   { icon: "/Assets/veneers.svg", title: "Veneers" },
//   { icon: "/Assets/invisalign.svg", title: "Invisalign" },

//   { icon: "/Assets/pediatric-dentistry.svg", title: "Pediatric Dentistry" },
//   { icon: "/Assets/Aesthetic-Dentistry.svg", title: "Aesthetic Dentistry" },

//   { icon: "/Assets/periodontology.svg", title: "Periodontology" },
//   { icon: "/Assets/Teeth Cleaning.svg", title: "Teeth Cleaning" },
//   { icon: "/Assets/bleaching.svg", title: "Bleaching" },
// ];

// const ServicesAnimation = () => {
//   return (
//     <div
//       className="bg-[#fdf9f4] py-12 px-4"
//       style={{
//         fontFamily: "'Inter', sans-serif",
//       }}
//     >
//             <h2 className="text-center text-3xl font-bold mb-12 text-customPink">Our Services</h2>

//       <div
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-8 justify-center items-center mx-auto"
//         style={{ maxWidth: "900px" }} // Center the grid within a fixed width
//       >
//         {services.map((service, index) => (
//           <motion.div
//             key={index}
//             className="flex flex-col items-center text-center group"
//             whileHover={{ scale: 1.15 }} // Slight size increase on hover
//             initial={{ scale: 1 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//           >
//             <motion.img
//               src={service.icon}
//               alt={service.title}
//               className="w-12 h-12 mb-2"
//               variants={{
//                 initial: { rotate: 0 },
//                 hover: { rotate: -10 }, // Slight left rotation
//               }}
//               whileHover="hover"
//               initial="initial"
//             />
//             <h3 className="text-gray-500 font-medium text-lg text-gray-500 font-medium text-lg group-hover:text-gray-500 font-medium text-lg transition duration-300">
//               {service.title}
//             </h3>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesAnimation;



import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion"; // For animations
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: "/Assets/Anxiety Patients.svg", title: "Anxiety Patients" },
  { icon: "/Assets/surgery.svg", title: "Surgery" },
  { icon: "/Assets/implantology.svg", title: "Implantology" },
  { icon: "/Assets/dentures.svg", title: "Dentures" },
  { icon: "/Assets/root-canal-treatment.svg", title: "Root Canal Treatment" },
  { icon: "/Assets/veneers.svg", title: "Veneers" },
  { icon: "/Assets/invisalign.svg", title: "Invisalign" },
  { icon: "/Assets/pediatric-dentistry.svg", title: "Pediatric Dentistry" },
  { icon: "/Assets/Aesthetic-Dentistry.svg", title: "Aesthetic Dentistry" },
  { icon: "/Assets/periodontology.svg", title: "Periodontology" },
  { icon: "/Assets/Teeth Cleaning.svg", title: "Teeth Cleaning" },
  { icon: "/Assets/bleaching.svg", title: "Bleaching" },
];

const ServicesAnimation = () => {
  const titleRef = useRef(null); // Reference for "Our Services" title
  const serviceRefs = useRef([]); // Reference array for service icons

  useEffect(() => {
    // Animate "Our Services" title
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

    // Animate service icons
    serviceRefs.current.forEach((serviceIcon) => {
      gsap.fromTo(
        serviceIcon,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: serviceIcon,
            start: "top 90%",
            end: "top 70%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div
      className="bg-[#fdf9f4] py-12 px-4 w-screen overflow-x-hidden overflow-y-hidden"
      style={{
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <h2
        ref={titleRef}
        className="text-center text-3xl font-bold mb-20 mt-10 text-customPink"
      >
        Our Services
      </h2>
  
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-8 justify-center items-center mx-auto"
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            ref={(el) => (serviceRefs.current[index] = el)}
            className="flex flex-col items-center text-center group"
            whileHover={{ scale: 1.15 }}
            initial={{ scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.img
              src={service.icon}
              alt={service.title}
              className="w-12 h-12 mb-2"
              variants={{
                initial: { rotate: 0 },
                hover: { rotate: -10 }, // Slight left rotation
              }}
              whileHover="hover"
              initial="initial"
            />
            <h3 className="text-lg text-gray-500 group-hover:text-gray-500 font-medium transition duration-300">
              {service.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
  
  



};

export default ServicesAnimation;
