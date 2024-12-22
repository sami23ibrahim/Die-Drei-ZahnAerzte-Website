// import React from "react";

// const StyledFooter = () => {
//   return (
//     <footer
//       className="relative bg-[#f496bf] text-[#fdf9f4] text-center"
//       style={{
        
//         borderTopLeftRadius: "145px",
//         borderTopRightRadius: "165px",
        
//         padding: "4rem 1rem",
//         marginTop: "0rem",
//       }}
//     >
//       {/* Main Content */}
//       <div className="max-w-screen-lg mx-auto">
//         <h2 className="text-2xl md:text-4xl font-bold mb-4">
//           Ready To put a Smile On Your Face?
//         </h2>
//         <div className="flex justify-center gap-4 mt-6">
//           <button className="bg-[#fdf9f4] text-customPink px-4 py-2 rounded-lg hover:bg-gray-200 transition">
//             Email Us
//           </button>
//           <button className="bg-[#fdf9f4] text-customPink px-4 py-2 rounded-lg hover:bg-gray-200 transition">
//             +44 (0)141 356 9878
//           </button>
//         </div>
//       </div>

//       {/* Footer Links */}
//       <div className="mt-12 fdf9f4 text-ml">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div>
//             <h4 className="uppercase tracking-wider text-xs mb-2">( Content )</h4>
//             <ul>
//               <li>Work</li>
//               <li>Intro</li>
//               <li>Reels</li>
//               <li>Directors</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="uppercase tracking-wider text-xs mb-2">( Content )</h4>
//             <ul>
//               <li>Playground</li>
//               <li>Journal</li>
//               <li>Contact</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="uppercase tracking-wider text-xs mb-2">( Connect )</h4>
//             <ul>
//               <li>LinkedIn</li>
//               <li>Facebook</li>
//               <li>Instagram</li>
//               <li>Twitter</li>
//             </ul>
//           </div>
//         </div>
//         <p className="mt-6">&copy; YourCompany 2024 | Terms & Privacy</p>
//       </div>
//     </footer>
//   );
// };

// export default StyledFooter;




// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const StyledFooter = () => {
//   const footerTitleRef = useRef(null); // Reference for the footer title

//   useEffect(() => {
//     // Animate the footer title
//     if (footerTitleRef.current) {
//       gsap.fromTo(
//         footerTitleRef.current,
//         { scale: 1 },
//         {
//           scale: 1.3,
//           duration: 2,
//           scrollTrigger: {
//             trigger: footerTitleRef.current,
//             start: "top 80%",
//             end: "top 40%",
//             scrub: true,
//           },
//         }
//       );
//     }
//   }, []);

//   return (
//     <div>
//       {/* Footer Title */}
//       <h2
//         ref={footerTitleRef}
//         className="text-center text-3xl font-bold mb-12 text-customPink"
//         style={{ fontFamily: "'Inter', sans-serif" }}
//       >
//         Contact Us
//       </h2>

//       {/* Footer Component */}
//       <footer
//         className="relative bg-[#f496bf] text-white text-center mb-12 ml-4 mr-8"
//         style={{
//           borderTopLeftRadius: "25px",
//           borderTopRightRadius: "25px",
//           borderBottomLeftRadius: "25px",
//           borderBottomRightRadius: "25px",
//           padding: "4rem 2rem 6rem",
//           //margin: "0 2rem 2rem",
//         }}
//       >
//         {/* Main Content */}
//         <div className="max-w-screen-lg mx-auto">
//           <h2 className="text-2xl md:text-4xl font-bold text-[#fdf9f4] mb-4">
//             Ready To put a Smile On Your Face?
//           </h2>
//           <div className="flex justify-center gap-4 mt-6">
//             <button className="bg-[#fdf9f4] text-customPink px-4 py-2 rounded-lg hover:bg-gray-200 transition">
//               Email Us
//             </button>
//             <button className="bg-[#fdf9f4] text-customPink px-4 py-2 rounded-lg hover:bg-gray-200 transition">
//               +44 (0)141 356 9878
//             </button>
//           </div>
//         </div>

//         {/* Footer Links */}
//         <div className="mt-12 text-white text-ml">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div>
//               <h4 className="uppercase tracking-wider text-xs mb-2">( Content )</h4>
//               <ul>
//                 <li>Work</li>
//                 <li>Intro</li>
//                 <li>Reels</li>
//                 <li>Directors</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="uppercase tracking-wider text-xs mb-2">( Content )</h4>
//               <ul>
//                 <li>Playground</li>
//                 <li>Journal</li>
//                 <li>Contact</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="uppercase tracking-wider text-xs mb-2">( Connect )</h4>
//               <ul>
//                 <li>LinkedIn</li>
//                 <li>Facebook</li>
//                 <li>Instagram</li>
//                 <li>Twitter</li>
//               </ul>
//             </div>
//           </div>
//           <p className="mt-6">&copy; YourCompany 2024 | Terms & Privacy</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default StyledFooter;



import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StyledFooter = () => {
  const footerTitleRef = useRef(null); // Reference for the footer title

  useEffect(() => {
    // Animate the footer title
    if (footerTitleRef.current) {
      gsap.fromTo(
        footerTitleRef.current,
        { scale: 1 },
        {
          scale: 1.3,
          duration: 2,
          scrollTrigger: {
            trigger: footerTitleRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div className="w-screen overflow-x-hidden">
      {/* Footer Title */}
      <h2
        ref={footerTitleRef}
        className="text-center text-3xl font-bold mb-12 text-customPink"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Contact Us
      </h2>

      {/* Footer Component */}
      <footer
        className="relative bg-[#f496bf] text-white text-center mb-12 mx-4"
        style={{
          borderTopLeftRadius: "25px",
          borderTopRightRadius: "25px",
          borderBottomLeftRadius: "25px",
          borderBottomRightRadius: "25px",
          padding: "4rem 2rem 6rem",
        }}
      >
        {/* Main Content */}
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-[#fdf9f4] mb-4">
            Ready To put a Smile On Your Face?
          </h2>
          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-[#fdf9f4] text-customPink px-4 py-2 rounded-lg hover:bg-gray-200 transition">
              Email Us
            </button>
            <button className="bg-[#fdf9f4] text-customPink px-4 py-2 rounded-lg hover:bg-gray-200 transition">
              +44 (0)141 356 9878
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-12 text-white text-ml">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="uppercase tracking-wider text-xs mb-2">( Content )</h4>
              <ul>
                <li>Work</li>
                <li>Intro</li>
                <li>Reels</li>
                <li>Directors</li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase tracking-wider text-xs mb-2">( Content )</h4>
              <ul>
                <li>Playground</li>
                <li>Journal</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase tracking-wider text-xs mb-2">( Connect )</h4>
              <ul>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
          <p className="mt-6">&copy; YourCompany 2024 | Terms & Privacy</p>
        </div>
      </footer>
    </div>
  );
};

export default StyledFooter;
