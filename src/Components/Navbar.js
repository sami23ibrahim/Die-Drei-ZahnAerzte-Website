// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Navbar = () => {
//   const navbarRef = useRef(null);

//   useEffect(() => {
//     const navbar = navbarRef.current;

//     gsap.fromTo(
//       navbar,
//       { y: 0 },
//       {
//         y: window.innerHeight - 80, // Moves the navbar to the bottom of the screen
//         scrollTrigger: {
//           trigger: navbar,
//           start: "top top", // When the navbar hits the top of the viewport
//           end: "500px top", // Scrolls down 500px
//           scrub: true, // Smooth scrubbing animation
//           markers: false, // Set to true if you want to debug ScrollTrigger
//         },
//       }
//     );
//   }, []);

//   return (
//     <div ref={navbarRef} className="fixed top-5 left-0  width: 25% z-50 bg-white shadow-md">
//       <nav className="flex justify-between items-center p-4">
//         <ul className="flex space-x-4">
//           <li><a href="#services" className="hover:text-blue-600">Our Services</a></li>
//           <li><a href="#team" className="hover:text-blue-600">The Team</a></li>
//           <li><a href="#philosophy" className="hover:text-blue-600">Our Philosophy</a></li>
//           <li><a href="#contact" className="hover:text-blue-600">Contact Us</a></li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;



// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Navbar = () => {
//   const topNavbarRef = useRef(null);
//   const bottomNavbarRef = useRef(null);

//   useEffect(() => {
//     const topNavbar = topNavbarRef.current;
//     const bottomNavbar = bottomNavbarRef.current;

//     // Initial state of both navbars
//     gsap.set(topNavbar, { top: "10px", left: "50%", x: "-50%", opacity: 1 });
//     gsap.set(bottomNavbar, { bottom: "-50px", left: "50%", x: "-50%", opacity: 0 });

//     // ScrollTrigger for top navbar to move up and disappear
//     ScrollTrigger.create({
//       trigger: document.body,
//       start: "210px top", // When the top of the document reaches the top of the viewport
//       end: "300px top", // When scrolled 300px down from the top
      
//       scrub: true,
//       onUpdate: (self) => {
//         if (self.direction > 0) {
//           // Scrolling down: move top navbar up and disappear
//           gsap.to(topNavbar, { top: "-100px", opacity: 1, duration: 1.5 });
//         } else {
//           // Scrolling up: bring top navbar back
//           gsap.to(topNavbar, { top: "10px", opacity: 1, duration:1 });
//         }
//       },
//     });

//     // ScrollTrigger for bottom navbar to slide up and appear
//     ScrollTrigger.create({
//       trigger: document.body,
//       start: "220px top",
//       end: "100vh top",
//       scrub: true,
//       onUpdate: (self) => {
//         if (self.direction > 0) {
//           // Scrolling down: bring bottom navbar up
//           gsap.to(bottomNavbar, { bottom: "0", opacity: 1, duration: 1.5 });
//         } else {
//           // Scrolling up: hide bottom navbar
//           gsap.to(bottomNavbar, { bottom: "-100px", opacity: 1, duration: 1.5 });
//         }
//       },
//     });
//   }, []);

//   return (
//     <>
//       {/* Top Navbar */}
//       <div
//         ref={topNavbarRef}
//         className="fixed z-50 rounded bg-[#fdf9f4] shadow-md p-1 pl-6 pr-6 flex justify-center items-center w-0.9/3 mt-0"
//       >
//         <ul className="flex space-x-6">
//           <li>
//             <a href="#services" className="hover:text-customPink">
//               Our Services
//             </a>
//           </li>
//           <li>
//             <a href="#team" className="hover:text-customPink">
//               The Team
//             </a>
//           </li>
//           <li>
//             <a href="#philosophy" className="hover:text-customPink">
//               Our Philosophy
//             </a>
//           </li>
//           <li>
//             <a href="#contact" className="hover:text-customPink">
//               Contact Us
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Bottom Navbar */}
//       <div
//         ref={bottomNavbarRef}
//         className="fixed z-50 bg-[#fdf9f4] rounded mb-2 shadow-md p-1 pl-6 pr-6 flex justify-center items-center w-0.9/3"
//       >
//         <ul className="flex space-x-6">
//           <li>
//             <a href="#services" className="hover:text-customPink">
//               Our Services
//             </a>
//           </li>
//           <li>
//             <a href="#team" className="hover:text-customPink">
//               The Team
//             </a>
//           </li>
//           <li>
//             <a href="#philosophy" className="hover:text-customPink">
//               Our Philosophy
//             </a>
//           </li>
//           <li>
//             <a href="#contact" className="hover:text-customPink">
//               Contact Us
//             </a>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbar;



import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const topNavbarRef = useRef(null);
  const bottomNavbarRef = useRef(null);

  useEffect(() => {
    const topNavbar = topNavbarRef.current;
    const bottomNavbar = bottomNavbarRef.current;

    // Initial state of both navbars
    gsap.set(topNavbar, { top: "10px", left: "50%", x: "-50%", opacity: 1 });
    gsap.set(bottomNavbar, { bottom: "-50px", left: "50%", x: "-50%", opacity: 0 });

    // ScrollTrigger for top navbar to move up and disappear
    ScrollTrigger.create({
      trigger: document.body,
      start: "1330px top",
      end: "300px top",
      scrub: true,
      onUpdate: (self) => {
        if (self.direction > 0) {
          gsap.to(topNavbar, { top: "-100px", opacity: 1, duration: 1.5 });
        } else {
          gsap.to(topNavbar, { top: "10px", opacity: 1, duration: 1 });
        }
      },
    });

    // ScrollTrigger for bottom navbar to slide up and appear
    ScrollTrigger.create({
      trigger: document.body,
     start: "1330px top",
      end: "100vh top",
      scrub: true,
      onUpdate: (self) => {
        if (self.direction > 0) {
          gsap.to(bottomNavbar, { bottom: "0", opacity: 1, duration: 1.5 });
        } else {
          gsap.to(bottomNavbar, { bottom: "-100px", opacity: 1, duration: 1.5 });
        }
      },
    });

    // Add active class to the current link in the bottom navbar
    const links = bottomNavbar.querySelectorAll("a");
    links.forEach((link) => {
      const sectionId = link.getAttribute("href");
      if (!sectionId.startsWith("#")) return;

      ScrollTrigger.create({
        trigger: sectionId,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveLink(link),
        onEnterBack: () => setActiveLink(link),
      });
    });

    function setActiveLink(activeLink) {
      links.forEach((link) => {
        link.style.color = ""; // Reset color for all links
      });
      activeLink.style.color = "#f496bf"; // Apply pink color to the active link
    }
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <div
        ref={topNavbarRef}
        className="fixed z-50 rounded bg-[#fdf9f4e0] shadow-md p-1 pl-6 pr-6 flex justify-center items-center w-0.9/3 mt-0"
      >
        <ul className="flex space-x-6">
          <li>
            <a href="#services" className="  font-medium text-gray-500 leading-relaxed hover:text-customPink">
              Our Services
            </a>
          </li>
          <li>
            <a href="#team" className="hover:text-customPink  font-medium text-gray-500 leading-relaxed">
              The Team
            </a>
          </li>
          <li>
            <a href="#philosophy" className="hover:text-customPink  font-medium text-gray-500 leading-relaxed">
              Our Philosophy
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-customPink  font-medium text-gray-500 leading-relaxed">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Bottom Navbar */}
      <div
        ref={bottomNavbarRef}
        className="fixed z-50 bg-[#fdf9f4] rounded mb-2 shadow-md p-1 pl-6 pr-6 flex justify-center items-center w-0.9/3"
      >
        <ul className="flex space-x-6 relative">
          <li>
            <a href="#services" className="hover:text-customPink  font-medium text-gray-500 leading-relaxed">
              Our Services
            </a>
          </li>
          <li>
            <a href="#team" className="hover:text-customPink  font-medium text-gray-500 leading-relaxed">
              The Team
            </a>
          </li>
          <li>
            <a href="#philosophy" className="hover:text-customPink  font-medium text-gray-500 leading-relaxed">
              Our Philosophy
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-customPink  font-medium text-gray-500 leading-relaxed">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
