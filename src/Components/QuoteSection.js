import React from "react";

const QuoteSection = () => {
  return (
    <div
      className="bg-[#fdf9f4] py-28 px-6 flex flex-col items-center"
      style={{ minHeight: "0px" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* First Quote */}
        <div
          className="text-left flex flex-col items-start space-y-4"
          style={{ marginTop: "0px" }} // Adjust height for the left quote
        >
          <blockquote className="text-2xl lg:text-3xl font-serif italic text-gray-500 leading-relaxed">
            "Fabian is GAY! Fabian is GAY! Fabian is GAY! Fabian is GAY! Fabian is GAY! Fabian is GAY! 
            Fabian is GAY! Fabian is GAY! Fabian is GAY! Fabian is GAY! ."
          </blockquote>
          <p className="text-gray-500 font-medium text-lg">
            Daniel Badour <br />
            <span className="text-gray-500">Founder of WestMont</span>
          </p>
        </div>

        {/* Second Quote */}
        <div className="text-left flex flex-col items-start space-y-4"
          style={{ marginTop: "190px" }} // Adjust height for the left quote
        >
          <blockquote className="text-2xl lg:text-3xl font-serif italic text-gray-500 leading-relaxed">
            "Fabian is GAY! Fabian is GAY! Fabian is GAY! Fabian is GAY! Fabian is GAY! Fabian is GAY! 
            Fabian is GAY! Fabian is GAY! "
          </blockquote>
          <p className="text-gray-500 font-medium text-lg">
            Sami Ibrahim <br />
            <span className="text-gray-500">Co-founder of Icecream</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;

