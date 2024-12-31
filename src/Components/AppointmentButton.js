// import React from "react";

// const AppointmentButton = () => {
//   return (
//     <div className="relative">
//       {/* Button */}
//       <div className="fixed top-2.5 right-4 group z-20 shadow-md rounded">
//         <button className="relative z-10 px-3 py-1 bg-[#fdf9f4e0] rounded overflow-hidden">
//           <span className="relative text-gray-500 font-medium leading-relaxed z-20 group-hover:text-[#f496bf] transition-colors duration-500 ease-out">
//             Appointment ➔
//           </span>
//           {/* Sliding Animation */}
//           <div className="absolute inset-0 bg-[#f496bf] left-28 transition-transform duration-500 ease-out transform group-hover:translate-x-full"></div>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AppointmentButton;


// import React from "react";

// const AppointmentButton = () => {
//   return (
//     <div className="relative">
//       {/* Button */}
//       <div className="appointment-button fixed right-4 group z-50 top-4 rounded">
//         <button className="relative z-10 px-3 py-1 bg-[#fdf9f4e0] rounded overflow-hidden">
//           <span className="relative text-gray-500 font-medium leading-relaxed z-20 group-hover:text-[#f496bf] transition-colors duration-500 ease-out">
//             Appointment ➔
//           </span>
//           {/* Sliding Animation */}
//           <div className="absolute inset-0 bg-[#f496bf] left-28 transition-transform duration-500 ease-out transform group-hover:translate-x-full"></div>
//         </button>
//       </div>

//       <style jsx>{`
//         .appointment-button {
//           position: fixed;
//         }

//         @media (max-width: 760px) {
//           .appointment-button {
//             top: 20px; /* Center top */
//             right: 50%; /* Move to center */
//             transform: translateX(50%); /* Adjust alignment */
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AppointmentButton;



import React from "react";

const AppointmentButton = () => {
  return (
    <div className="relative">
      {/* Button */}
      <div className="appointment-button fixed right-4 group z-50 top-[10px] rounded shadow-lg">
        <a
          href="https://www.doctolib.de/zahnarztpraxis/berlin/die-drei-zahnaerzte/booking?bookingFunnelSource=external_referral&profile_skipped=true&utm_campaign=website-button&utm_content=option-8&utm_medium=referral&utm_source=die-drei-zahnaerzte-website-button&utm_term=die-drei-zahnaerzte"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10"
        >
          <button className="relative z-10 px-3 py-1 bg-[#fdf9f4e0] rounded overflow-hidden"
         >
            <span className="relative text-gray-500 font-medium leading-relaxed z-20 group-hover:text-[#f496bf] transition-colors duration-500 ease-out">
              Appointment ➔
            </span>
            {/* Sliding Animation */}
            <div className="absolute inset-0 bg-[#f496bf] left-28 transition-transform duration-500 ease-out transform group-hover:translate-x-full +20px"></div>
          </button>
        </a>
      </div>

      <style jsx>{`
        .appointment-button {
          position: fixed;
          background-color: #none; /* Original background color */
          box-shadow: 2px 2px 1px #f496bf; /* Original shadow */
           border: none; /* No border by default */

         
        }
        @media (max-width: 760px) {
          .appointment-button {
            top: 16px; /* Center top */
            right: 30%; /* Move to center */
            transform: translateX(25%); /* Adjust alignment */
             background-color: transparent; /* Make background transparent */
          box-shadow: none; /* Remove the shadow */
       border: 3px  solid #f496bf; /* Add a 2px pink border */
      border-radius: 3px; /* Optional: round the corners */
          }
        }
      `}</style>
    </div>
  );
};

export default AppointmentButton;

