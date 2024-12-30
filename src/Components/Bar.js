
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
  const teamRef = useRef([]);
  const titleRef = useRef(null);
  const logoRefs = useRef([]);
  const [activeContent, setActiveContent] = useState({
    title: "Our dental practice",
    text: "Our dental practice, right next to Kotti, combines openness and expertise. We speak your language and set new standards in dental health with passion. Our diversity reflects the lively area. Together we will give you a radiant smile. Look forward to a special dental experience!",
  });
  const [clickedButton, setClickedButton] = useState(null);

  useEffect(() => {
    // Animate each team member
    teamRef.current.forEach((teamMember) => {
      gsap.fromTo(
        teamMember,
        { scale: 1 },
        {
          scale: 1.6,
          duration: 3.5,
          scrollTrigger: {
            trigger: teamMember,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });

    // Animate the title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { scale: 1 },
        {
          scale: 1.2,
          duration: 3.5,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    }

    // Animate the logos
    logoRefs.current.forEach((logo, index) => {
      const direction = index % 2 === 0 ? "bottom-to-top" : "top-to-bottom";

      gsap.fromTo(
        logo,
        { y: direction === "bottom-to-top" ? "100%" : "-100%", opacity: 0.2 },
        {
          y: direction === "bottom-to-top" ? "-100%" : "100%",
          opacity: 0.3,
          duration: 5,
          scrollTrigger: {
            trigger: logo,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  const teamMembers = [
    {
      name: "Hakam El Daghma",
      title: "About Hakam El Daghma",
      text: "Hakam has expertise in various areas of dentistry...",
      image: "/Assets/hak.png",
      width: "150px",
      height: "220px",
      x: "20px",
      y: "17.5px",
      buttonStyles: {
        backgroundColor: "#fdf9f400",
        color: "#6b7280",
        borderRadius: "10px",
        border: "2px solid #fdf9f400",
        width: "1px",
        fontSize: "0px",
      },
    },
    {
      name: "Fabian Badour",
      title: "About Fabian Badour",
      text: "Fabian treats within the areas of surgery...",
      image: "/Assets/fab.png",
      width: "160px",
      height: "230px",
      x: "40px",
      y: "15px",
      buttonStyles: {
        backgroundColor: "#ffefd5",
        color: "#4b5563",
        borderRadius: "15px",
        border: "2px solid #f496bf",
        width: "0px",
        fontSize: "0px",
      },
    },
    {
      name: "Prabh Singh Mahal",
      title: "About Prabh Singh Mahal",
      text: "Prabh specializes in surgery...",
      image: "/Assets/prab11.png",
      width: "135px",
      height: "250px",
      x: "45px",
      y: "9px",
      buttonStyles: {
        backgroundColor: "#ffefd5",
        color: "#4b5563",
        borderRadius: "15px",
        border: "2px solid #f496bf",
        width: "420px", // Adjust this value to change the button width
       // width: "80%",
        fontSize: "12px",
      },
    },
  ];

  const logos = [
    { id: 1, size: "180px", rotation: 15, image: "/Assets/torp.png" },
    { id: 2, size: "200px", rotation: -25, image: "/Assets/torp.png" },
    { id: 3, size: "110px", rotation: 30, image: "/Assets/toro.png" },
    { id: 4, size: "150px", rotation: -10, image: "/Assets/toro2.png" },
    { id: 5, size: "190px", rotation: 45, image: "/Assets/torp.png" },
  ];

  const handleContentChange = (title, text, index) => {
    setActiveContent({ title, text });
    setClickedButton(index);
  };

  const handleResetContent = () => {
    setActiveContent({
      title: "Our dental practice",
      text: "Our dental practice, right next to Kotti, combines openness and expertise. We speak your language and set new standards in dental health with passion. Our diversity reflects the lively area. Together we will give you a radiant smile. Look forward to a special dental experience!",
    });
    setClickedButton(null);
  };

  return (
    <div
      className="relative bg-[#fdf9f4] py-16 overflow-x-hidden overflow-y-visible"
      onClick={handleResetContent}
    >
      {/* Background */}
      <div
        className="absolute w-full bg-[#fffcdc00] z-0"
        style={{
          width: "45%",
          height: "270px",
          bottom: "90",
          left: "51%",
          transform: "translateX(-50%)",
          borderTopLeftRadius: "150px",
          borderTopRightRadius: "180px",
          borderBottomLeftRadius: "70px",
          borderBottomRightRadius: "70px",
        }}
      ></div>

      {/* Logos */}
      <div className="absolute w-full z-10 grid grid-cols-5 gap-4 overflow-visible">
        {logos.map((logo, index) => (
          <img
            key={logo.id}
            ref={(el) => (logoRefs.current[index] = el)}
            src={logo.image}
            alt={`Logo ${index + 1}`}
            className="opacity-20"
            style={{
              width: logo.size,
              height: logo.size,
              transform: `rotate(${logo.rotation}deg)`,
            }}
          />
        ))}
      </div>

      {/* Content Section */}
      <div className="relative z-20">
        <h2
          ref={titleRef}
          className="text-center text-customPink text-3xl font-bold mb-12 mt-0"
        >
          The Team
        </h2>

        {/* Team Members */}
        <div
          className="relative flex justify-center cursor-pointer items-end gap-8"
          style={{ paddingBottom: "50px" }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={(el) => (teamRef.current[index] = el)}
              className="flex flex-col items-center relative"
              style={{
                position: "relative",
                overflow: "visible",
                transform: `translate(${member.x}, ${member.y})`,
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleContentChange(member.title, member.text, index);
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-auto"
                style={{
                  width: member.width,
                  height: member.height,
                  transformOrigin: "bottom",
                  zIndex: 1,
                }}
              />

              {index === teamMembers.length - 1 ? (
                <div
                  className="absolute flex bottom-[-10px] cursor-pointer shadow-xl z-10 responsive-button"
                  style={{
                    ...member.buttonStyles,
                    width:"27vw",
                    flexGrow: 0,
                    flexShrink: 0,
                    justifyContent: "space-between",
                    left: "-50%",
                    transform: "translateX(-51%)",
                  }}
                >
                  <div
                    className="w-1/3 text-center cursor-pointer hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Trigger the left button's functionality
                      handleContentChange(
                        teamMembers[0].title,
                        teamMembers[0].text,
                        0
                      );
                    }}
                  >
                    HAKAM
                  </div>
                  <div
                    className="w-1/3 text-center cursor-pointer hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Trigger the middle button's functionality
                      handleContentChange(
                        teamMembers[Math.floor(teamMembers.length / 2)].title,
                        teamMembers[Math.floor(teamMembers.length / 2)].text,
                        Math.floor(teamMembers.length / 2)
                      );
                    }}
                  >
                    FAB
                  </div>
                  <div
                    className="w-1/3 text-center cursor-pointer hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Trigger the right button's functionality
                      handleContentChange(member.title, member.text, index);
                    }}
                  >
                    PRAB
                  </div>
                </div>
              ) : (
                // Other buttons remain the same
                <div
                  className="absolute font-small py-[1px] px-[0px] rounded-md cursor-pointer shadow-xl"
                  style={{
                    ...member.buttonStyles,
                    bottom: "-10px",
                    zIndex: 10,
                  }}
                >
                  <div className="z-50 flex items-center justify-center space-x-0.5 transition-transform duration-300 transform hover:scale-105">
                    <span style={{ fontSize: member.buttonStyles.fontSize }}>
                      {member.name}
                    </span>
                    <svg
                      className="arrow"
                      width="8"
                      height="4"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0.5L-1.09278e-07 3L5 8L10 3L10 0.5L5 5.5L0 0.5Z"
                        fill={member.buttonStyles.color}
                      ></path>
                    </svg>
                  </div>
                </div>
              
              )}
            </div>
          ))}
        </div>

        {/* Text Section */}
        <div className="text-center mt-[66px] px-4">
          <div
            className="bg-[#f496bf00] rounded-lg p-1 mx-auto"
            style={{ width: "90%" }}
          >
            <p className="text-xl lg:text-xl font-medium text-gray-500 leading-relaxed">
              {activeContent.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
