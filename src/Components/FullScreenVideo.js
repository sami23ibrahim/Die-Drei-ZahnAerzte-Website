import React from "react";
import FadingText from "./FadingText"; // Import the updated FadingText component

const FullScreenVideo = ({ videoSrc, textOverlay }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fading Text Overlay */}
    
      {/* <FadingText text={textOverlay} offset={250} /> */}
      <FadingText text={textOverlay} textOffset={300} disappearLine={70} />

      {/* Full-Screen Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default FullScreenVideo;





// import React, { useState, useEffect, useRef } from "react";

// const FullScreenVideo = ({ videoSrc }) => {
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
//   const [videoSize, setVideoSize] = useState({ width: 0, height: 0 });
//   const [videoError, setVideoError] = useState(false);
//   const videoRef = useRef(null); // Reference to the video element

//   useEffect(() => {
//     // Update screen size dynamically
//     const updateSize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     updateSize(); // Set initial size
//     window.addEventListener("resize", updateSize);
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);

//   const handleVideoMetadata = () => {
//     if (videoRef.current) {
//       const { videoWidth, videoHeight } = videoRef.current;
//       setVideoSize({ width: videoWidth, height: videoHeight });
//     }
//   };

//   return (
//     <div className="relative w-full h-screen bg-black overflow-hidden">
//       {/* Debug Information */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-75 p-4 rounded shadow-lg text-center">
//         <p className="text-black text-lg font-semibold">
//           Screen Size: {windowSize.width}px x {windowSize.height}px
//         </p>
//         <p className="text-black text-lg font-semibold">
//           Video Source: {videoSrc ? "Loaded" : "Not Provided"}
//         </p>
//         <p className="text-black text-lg font-semibold">
//           Video Size: {videoSize.width}px x {videoSize.height}px
//         </p>
//         {videoError && (
//           <p className="text-red-500 text-lg font-semibold">
//             Error: Unable to load video!
//           </p>
//         )}
//       </div>

//       {/* Video Element */}
//       <video
//         ref={videoRef}
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//         onError={() => setVideoError(true)} // Catch video errors
//         onLoadedMetadata={handleVideoMetadata} // Capture video dimensions
//       >
//         <source src={videoSrc} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// import React, { useState, useEffect, useRef } from "react";

// const FullScreenVideo = () => {
//   const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
//   const [videoSrc, setVideoSrc] = useState("");
//   const [videoSize, setVideoSize] = useState({ width: 0, height: 0 });
//   const [videoError, setVideoError] = useState(false);
//   const videoRef = useRef(null);



//   useEffect(() => {
//     const updateSize = () => {
//       const width = window.innerWidth;
//       setWindowSize({ width, height: window.innerHeight });

//       // Determine video source based on screen size
//       let newVideoSrc;
//       if (width <= 426) {
//         newVideoSrc = "/Assets/vid426x240.mp4";
//       } else if (width <= 960) {
//         newVideoSrc = "/Assets/vid960x540.mp4";
//       } else if (width <= 1920) {
//         newVideoSrc = "/Assets/vid1920x1080.mp4";
//       } else {
//         newVideoSrc = "/Assets/vid2560x1440.mp4";
//       }

//       // Update video source only if it has changed
//       if (newVideoSrc !== videoSrc) {
//         setVideoError(false); // Reset error state
//         setVideoSrc(newVideoSrc);
//       }
//     };

//     updateSize(); // Set initial size and video source
//     window.addEventListener("resize", updateSize);
//     return () => window.removeEventListener("resize", updateSize); // Cleanup
//   }, [videoSrc]);

//   const handleVideoMetadata = () => {
//     if (videoRef.current) {
//       const { videoWidth, videoHeight } = videoRef.current;
//       setVideoSize({ width: videoWidth, height: videoHeight });
//     }
//   };

//   return (
//     <div className="relative w-full h-screen bg-black overflow-hidden">
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-75 p-4 rounded shadow-lg text-center">
//         <p className="text-black text-lg font-semibold">
//           Screen Size: {windowSize.width}px x {windowSize.height}px
//         </p>
//         <p className="text-black text-lg font-semibold">
//           Video Source: {videoSrc ? videoSrc.split('/').pop() : "Not Provided"}
//         </p>
//         <p className="text-black text-lg font-semibold">
//           Video Size: {videoSize.width}px x {videoSize.height}px
//         </p>
//         {videoError && (
//           <p className="text-red-500 text-lg font-semibold">
//             Error: Unable to load video!
//           </p>
//         )}
//       </div>

//       <video
//         key={videoSrc} // Force re-render when video source changes
//         ref={videoRef}
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//         onLoadedMetadata={handleVideoMetadata}
//         onError={() => setVideoError(true)}
//       >
//         <source src={videoSrc} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// export default FullScreenVideo;
