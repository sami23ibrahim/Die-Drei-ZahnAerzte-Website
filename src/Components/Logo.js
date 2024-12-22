import React from "react";

const Logo = () => {
  return (
    <div
      className="fixed top-4 left-9"
      style={{ zIndex: 100 }}
    >
      <img
        src="https://cdn.prod.website-files.com/653ca16d8eca97221bdf01d8/6542ac4165485c60eb6e2d30_logo.svg"
        alt="Website Logo"
        className="block transition-all duration-300"
      />

      <style jsx>{`
        @media (min-width: 1025px) {
          img {
            width: 110px; // Desktop size
          }
        }

        @media (max-width: 1024px) and (min-width: 769px) {
          img {
            width: 90px; // Tablet size
          }
        }

        @media (max-width: 768px) {
          img {
            width: 80px; // Mobile size
          }
        }
      `}</style>
    </div>
  );
};

export default Logo;
