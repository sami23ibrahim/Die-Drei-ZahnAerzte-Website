// import { useState } from "react";

// const BurgerMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="fixed top-2 right-4 z-50">
//       <button
//         className="burger-button"
//         onClick={() => setIsOpen((prev) => !prev)}
//       >
//         ☰
//       </button>
//       {isOpen && (
//         <div className="burger-menu">
//           <ul className="flex flex-col space-y-4">
//             <li>
//               <a href="#services" className="font-medium text-gray-500 hover:text-customPink">
//                 Our Services
//               </a>
//             </li>
//             <li>
//               <a href="#team" className="font-medium text-gray-500 hover:text-customPink">
//                 The Team
//               </a>
//             </li>
//             <li>
//               <a href="#philosophy" className="font-medium text-gray-500 hover:text-customPink">
//                 Our Philosophy
//               </a>
//             </li>
//             <li>
//               <a href="#contact" className="font-medium text-gray-500 hover:text-customPink">
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//       <style jsx>{`
//       .burger-button {
//     background: #fdf9f4e0;
//     border: none;
//     padding-right: 35px;
//     font-size: 38px;
//     border-radius: 4px;
//     cursor: pointer;
//     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
//     position: fixed; /* Use fixed for consistent positioning relative to the viewport */
//     top: 10; /* Align at the top of the screen */
//     left: 0; /* Align to the left edge */
//     width: 100%; /* Make it span the entire screen width */
//     height: 55px; /* Set height for the top bar */
//     text-align: right; /* Center align the burger icon */
//     z-index: 50; /* Ensure it stays above other content */
//      left:0px;  

// }



//         .burger-menu {
//           position: absolute;
//           top: 50px;
//           right: 0;
//           background: #fdf9f4e0;
//           box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
//           border-radius: 8px;
//           padding: 20px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default BurgerMenu;



import { useState, useEffect, useCallback } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Function to check screen width
  const checkScreenWidth = useCallback(() => {
    setIsVisible(window.innerWidth < 761);
  }, []);

  useEffect(() => {
    checkScreenWidth(); // Run on component mount

    // Add a resize event listener
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, [checkScreenWidth]);

  // Render only when the screen width is less than 761px
  if (!isVisible) return null;

  return (
    <div className="fixed top-1 right-4 z-20">
      <button
        className="burger-button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        ☰
      </button>
      {isOpen && (
        <div className="burger-menu">
<ul className="flex flex-row justify-evenly w-[98%] fixed bg-[#fdf9f4e0] left-[1%] top-[57px] rounded shadow-lg">
<li>
              <a href="#services" className=" text-gray-500 font-medium leading-relaxed hover:text-customPink">
                Our Services
              </a>
            </li>
            <li>
              <a href="#team" className="font-medium text-gray-500 leading-relaxed hover:text-customPink">
                The Team
              </a>
            </li>
            <li>
              <a href="#philosophy" className="font-medium text-gray-500 leading-relaxed hover:text-customPink">
                Our Philosophy
              </a>
            </li>
            <li>
              <a href="#contact" className="font-medium text-gray-500 leading-relaxed hover:text-customPink">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
      <style jsx>{`
        .burger-button {
          background: #fdf9f4e0;
          border: none;
          padding-right: 35px;
          font-size: 35px;
          border-radius: 4px;
          cursor: pointer;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          position: fixed;
          top: 10;
          left:0;
          width: 98%;
            transform: translateX(1%); /* Shift it back by half its width */

          height: 55px;
          text-align: right;
          z-index: 20;
          color:#f496bf;
        
        }

        .burger-menu {
          position: absolute;
          top: 48px;
          right: 0;
          background: #fdf9f4;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          padding: 10px;
          z-index: 10;

        }
      `}</style>
    </div>
  );
};

export default BurgerMenu;

