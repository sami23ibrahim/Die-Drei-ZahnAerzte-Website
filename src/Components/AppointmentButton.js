import React from "react";

const AppointmentButton = () => {
  return (
    <div className="relative">
      {/* Button */}
      <div className="fixed top-2.5 right-4 group z-20 shadow-md rounded">
        <button className="relative z-10 px-3 py-1 bg-[#fdf9f4e0] rounded overflow-hidden">
          <span className="relative text-gray-500 font-medium leading-relaxed z-20 group-hover:text-[#f496bf] transition-colors duration-500 ease-out">
            Appointment ➔
          </span>
          {/* Sliding Animation */}
          <div className="absolute inset-0 bg-[#f496bf] left-28 transition-transform duration-500 ease-out transform group-hover:translate-x-full"></div>
        </button>
      </div>
    </div>
  );
};

export default AppointmentButton;
