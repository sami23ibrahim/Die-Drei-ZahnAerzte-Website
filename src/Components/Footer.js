import React from "react";

const StyledFooter = () => {
  return (
    <footer
      className="relative bg-[#f496bf] text-white text-center"
      style={{
        
        borderTopLeftRadius: "145px",
        borderTopRightRadius: "165px",
        padding: "4rem 1rem",
        marginTop: "0rem",
      }}
    >
      {/* Main Content */}
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
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
  );
};

export default StyledFooter;

