// import React, { useState, useEffect } from "react";

// const Header = () => {
//   const [scroll, setScroll] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const position = window.scrollY;
//       setScroll(position);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Dynamic styles for Tailwind
//   const backgroundOpacity = Math.min(scroll / 100, 0.0); // Header opacity
//   const logoScale = Math.max(1 - scroll / 300, 0.8); // Logo shrinks to 70%
//   const fontSize = Math.max(20, 26 - scroll / 25); // Text size reduces from 26px to 20px
//   const padding = Math.max(10 - scroll / 30, 5); // Adjust padding dynamically

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}
//       style={{
//         backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity})`,
//         padding: `${padding}px 40px`,
//         height: `${Math.max(70 - scroll / 10, 45)}px`,
//       }}
//     >
//       <div className="flex justify-between items-center">
//         {/* Left Section */}
//         <div className="flex items-center gap-10">
//           {/* Logo Container */}
//           <div
//             className="transform transition-transform origin-left"
//             style={{
//               transform: `scale(${logoScale})`,
//             }}
//           >
//             <img
//               src="https://cdn.prod.website-files.com/653ca16d8eca97221bdf01d8/6542ac4165485c60eb6e2d30_logo.svg"
//               alt="Logo"
//               className="h-12"
//             />
//           </div>

//           {/* Navigation Links */}
//           <nav className="flex gap-6 text-customWhite">
   
// <a
//               href="#team"
//               className="hover:text-customPink transition-colors"
              
//               style={{ fontSize: `${fontSize}px` }}
//             >
//                Our Services

//             </a>
//             <a
//               href="#team"
//               className="hover:text-customPink transition-colors"
              
//               style={{ fontSize: `${fontSize}px` }}
//             >
//               The Team
//             </a>
//             <a
//               href="#philosophy"
//               className="hover:text-customPink transition-colors"
//               style={{ fontSize: `${fontSize}px` }}
//             >
//               Our Philosophy
//             </a>
//             <a
//               href="#contact"
//               className="hover:text-customPink transition-colors"
//               style={{ fontSize: `${fontSize}px` }}
//             >
//               Contact
//             </a>
//           </nav>
//         </div>

//         {/* Right Section */}
//         <div>
//   <a
//     href="#contact"
//     className="relative inline-flex items-center justify-center px-4 py-2 text-xl font-bold text-customPink border-customPink rounded-full group overflow-hidden transition-all duration-300"
//   >
//     {/* Animated Background */}
//     <span
//       className="absolute inset-0 bg-customPink transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
//     ></span>

//     {/* Button Text */}
//     <span className="relative z-10 group-hover:text-white transition-colors duration-300">
//           Book an Appointment
//     </span>
//   </a>
// </div>






//       </div>
//     </header>
//   );
// };

// export default Header;



import React, { useState, useEffect } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScroll(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundOpacity = Math.min(scroll / 100, 0.0); // Adjusted opacity max
  const logoScale = Math.max(1 - scroll / 300, 0.8); // Logo shrinks to 80%
  const fontSize = Math.max(20, 26 - scroll / 25); // Text size reduces from 26px to 20px
  const padding = Math.max(10 - scroll / 30, 5); // Adjust padding dynamically

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}
      style={{
        backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})`,
        padding: `${padding}px 40px`,
        height: `${Math.max(70 - scroll / 10, 45)}px`,
      }}
    >
     <div className="flex justify-between items-center w-full">
  {/* Left Section */}
  <div className="flex items-center gap-4">
    {/* Logo */}
    <div
      className="transform transition-transform origin-left"
      style={{
        transform: `scale(${logoScale})`,
      }}
    >
      <img
        src="https://cdn.prod.website-files.com/653ca16d8eca97221bdf01d8/6542ac4165485c60eb6e2d30_logo.svg"
        alt="Logo"
        className="h-12"
      />
    </div>

    {/* Navigation Links */}
    <nav
      className={`hidden md:flex gap-6 text-customWhite`}
      style={{ fontSize: `${fontSize}px` }}
    >
      <a href="#services" className="hover:text-customPink transition-colors">
        Our Services
      </a>
      <a href="#team" className="hover:text-customPink transition-colors">
        The Team
      </a>
      <a
        href="#philosophy"
        className="hover:text-customPink transition-colors"
      >
        Our Philosophy
      </a>
      <a href="#contact" className="hover:text-customPink transition-colors">
        Contact
      </a>
    </nav>

    {/* Burger Menu for Small Screens */}
    <div className="md:hidden">
      <button
        className="text-customPink focus:outline-none"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10" // Smaller size for mobile
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {/* Top Bar */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2} // Adjusted for smaller screens
            className="stroke-customRed"
            d="M4 6h16"
          />
          {/* Middle Bar */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2} // Adjusted for smaller screens
            className="stroke-customPink"
            d="M4 12h16"
          />
          {/* Bottom Bar */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2} // Adjusted for smaller screens
            className="stroke-customOrange"
            d="M4 18h16"
          />
        </svg>
      </button>
    </div>
  </div>

  {/* Right Section - Book an Appointment Button */}
  <div>
    <a
      href="#contact"
      className="relative inline-flex items-center justify-center px-3 py-2 text-sm md:text-lg font-bold text-customPink border-customPink rounded-full group overflow-hidden transition-all duration-300"
    >
      <span
        className="absolute inset-0 bg-customPink transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
      ></span>
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        Book an Appointment
      </span>
    </a>
  </div>
</div>



      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-white shadow-lg rounded-lg">
          <nav
            className="flex flex-col items-start p-4 text-customPink space-y-2"
            aria-label="Mobile navigation"
          >
            <a
              href="#services"
              className="hover:text-customPink transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Our Services
            </a>
            <a
              href="#team"
              className="hover:text-customPink transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              The Team
            </a>
            <a
              href="#philosophy"
              className="hover:text-customPink transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Our Philosophy
            </a>
            <a
              href="#contact"
              className="hover:text-customPink transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
