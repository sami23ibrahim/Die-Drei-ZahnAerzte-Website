// import FullScreenVideo from './Components/FullScreenVideo';
// import Header from './Components/Header'; 
// import CustomHero from './Components/CustomHero'; 
// import CustomHeroImage from './Components/CustomHeroImage';
// import ScrollCards from './Components/ScrollCards'; 
// import QuoteSection from './Components/QuoteSection';
// import ServicesAnimation from './Components/ServicesAnimation';
// import Footer from './Components/Footer'; 
// import TeamPreview from './Components/TeamPreview'; 
// import OurPhilosophy from './Components/OurPhilosophy'; 
// import Navbar from './Components/Navbar'; 

// const videoPath = "/Assets/vid.mp4";
// function App() {
//   return (
// <div className="w-screen min-h-screen bg-[#fdf9f4]"> 

// <div style={{ backgroundColor: "#fdf9f4" }}> <Header/></div> 
// <FullScreenVideo videoSrc={videoPath} textOverlay="Die Drei ZAHNÄRZTE"/>
// <div style={{marginTop: "30px",backgroundColor: "#fdf9f4" }}><CustomHeroImage></CustomHeroImage> </div>
// <ServicesAnimation/>
// <TeamPreview />
// <ScrollCards></ScrollCards>
// <OurPhilosophy />
// <div style={{ backgroundColor: "#fdf9f4" }}><Footer /></div>

//    </div>
//   );
// }

// export default App;



// import FullScreenVideo from './Components/FullScreenVideo';
// import Header from './Components/Header'; 
// import CustomHero from './Components/CustomHero'; 
// import CustomHeroImage from './Components/CustomHeroImage';
// import ScrollCards from './Components/ScrollCards'; 
// import QuoteSection from './Components/QuoteSection';
// import ServicesAnimation from './Components/ServicesAnimation';
// import Footer from './Components/Footer'; 
// import TeamPreview from './Components/TeamPreview'; 
// import OurPhilosophy from './Components/OurPhilosophy'; 
// import Navbar from './Components/Navbar'; 
// import Logo from './Components/Logo'; 
// import AppointmentButton from './Components/AppointmentButton'; 
// import BurgerMenu from './Components/BurgerMenu'; 
// import TeamSectionMobile from './Components/TeamPreviewMobile'; 
// import { useMediaQuery } from "react-responsive";



// const videoPath = "/Assets/vid1.mp4";

// function App() {

//   const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

//   return (
//     <div className="w-screen min-h-screen bg-[#fdf9f4]"> 

//       <Logo />
//       <Navbar />
//       <AppointmentButton />
//       <BurgerMenu />

      
//       {/* <FullScreenVideo videoSrc={videoPath} textOverlay="Die Drei ZAHNÄRZTE" /> */}
      
//       {/* <CustomHeroImage /> */}
      
//       <div id="services" style={{ marginTop: "30px", backgroundColor: "#fdf9f4" }}><ServicesAnimation /> </div>
   

//       {/* <div id="team" style={{ backgroundColor: "#fdf9f4" }}><TeamSectionMobile /></div> */}

//       <div id="team" style={{ backgroundColor: "#fdf9f4" }}>
//       {isMobile ? <TeamSectionMobile /> : <TeamPreview />}
//     </div>

//       <ScrollCards></ScrollCards> 


//       <div id="philosophy" style={{ backgroundColor: "#fdf9f4" }}><OurPhilosophy /></div>                

//       <div id="contact" style={{ backgroundColor: "#fdf9f4" }}><Footer /></div>
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import FullScreenVideo from './Components/FullScreenVideo';
import Header from './Components/Header'; 
import CustomHero from './Components/CustomHero'; 
import CustomHeroImage from './Components/CustomHeroImage';
import ScrollCards from './Components/ScrollCards'; 
import QuoteSection from './Components/QuoteSection';
import ServicesAnimation from './Components/ServicesAnimation';
import Footer from './Components/Footer'; 
import TeamPreview from './Components/TeamPreview'; 
import OurPhilosophy from './Components/OurPhilosophy'; 
import Navbar from './Components/Navbar'; 
import Logo from './Components/Logo'; 
import AppointmentButton from './Components/AppointmentButton'; 
import BurgerMenu from './Components/BurgerMenu'; 
import TeamSectionMobile from './Components/TeamPreviewMobile';

const videoPath = "/Assets/vid1.mp4";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Set `isMobile` based on screen width
      setIsMobile(window.innerWidth <= 767);
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-screen min-h-screen bg-[#fdf9f4]"> 
      {/* Logo and Navigation */}
      <Logo />
      <Navbar />
      <AppointmentButton />
      <BurgerMenu />
             <FullScreenVideo videoSrc={videoPath} textOverlay="Die Drei ZAHNÄRZTE" />
      
              <CustomHeroImage />
      {/* Services Animation Section */}
      <div id="services" style={{ marginTop: "30px", backgroundColor: "#fdf9f4",zIndex:0 }}>
        <ServicesAnimation />
      </div>

      {/* Team Section (Mobile or Desktop) */}
      <div id="team" style={{ backgroundColor: "#fdf9f4" }}>
        <div style={{ display: isMobile ? "block" : "none" }}>
          <TeamSectionMobile />
        </div>
        <div style={{ display: isMobile ? "none" : "block" }}>
          <TeamPreview />
        </div>
      </div>

      {/* Scroll Cards */}
      <ScrollCards />

      {/* Philosophy Section */}
      <div id="philosophy" style={{ backgroundColor: "#fdf9f4" }}>
        <OurPhilosophy />
      </div>                

      {/* Footer Section */}
      <div id="contact" style={{ backgroundColor: "#fdf9f4" ,zIndex:0}}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
