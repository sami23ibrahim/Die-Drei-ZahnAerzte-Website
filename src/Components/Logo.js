// import React from "react";

// const Logo = () => {
//   return (
// <div
//   className="logo-container"
//   style={{ zIndex: 100 }}
// >
//   <img
//     src="https://cdn.prod.website-files.com/653ca16d8eca97221bdf01d8/6542ac4165485c60eb6e2d30_logo.svg"
//     alt="Website Logo"
//     className="block transition-all duration-300"
//   />

//   <style jsx>{`
//     .logo-container {
//       position: fixed;
//     }

//     img {
//       transition: all 0.3s;
//     }

//     @media (min-width: 1025px) {
//       .logo-container {
//         top: 12px;
//         left: 15px;
//       }

//       img {
//         width: 110px; /* Desktop size */
//       }
//     }

//         @media (max-width: 1024px) and (min-width: 766px) {
//         .logo-container {
//            top: 12px;
//            left: 15px;
//         }
//           img {
//             width: 90px; // Tablet size
//           }
//         }

//         @media (max-width: 766px) {
//           .logo-container {
//            top: 12px;
//            left: 30px;
//           }
//           img {
//             width: 70px; // Mobile size
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Logo;



import React from "react";

const Logo = () => {
  return (
    <div
      className="logo-container cursor-pointer"
      style={{ zIndex: 100 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // Scrolls to the top smoothly
    >
      <img
        src="https://cdn.prod.website-files.com/653ca16d8eca97221bdf01d8/6542ac4165485c60eb6e2d30_logo.svg"
        alt="Website Logo"
        className="block transition-all duration-300 hover:scale-105" // Expands on hover
      />

      <style jsx>{`
        .logo-container {
          position: fixed;
        }

        img {
          transition: all 0.3s; /* For smooth scaling */
        }

        @media (min-width: 1025px) {
          .logo-container {
            top: 12px;
            left: 15px;
          }

          img {
            width: 110px; /* Desktop size */
          }
        }

        @media (max-width: 1024px) and (min-width: 766px) {
          .logo-container {
            top: 12px;
            left: 15px;
          }

          img {
            width: 90px; /* Tablet size */
          }
        }

        @media (max-width: 766px) {
          .logo-container {
            top: 12px;
            left: 30px;
          }

          img {
            width: 70px; /* Mobile size */
          }
        }
      `}</style>
    </div>
  );
};

export default Logo;
