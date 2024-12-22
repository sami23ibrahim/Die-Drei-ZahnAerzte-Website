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


const videoPath = "/Assets/vid1.mp4";

function App() {
  return (
    <div className="w-screen min-h-screen bg-[#fdf9f4]"> 

      <Logo />
      
      <Navbar />
      
      <AppointmentButton />
      <BurgerMenu />

      
      <FullScreenVideo videoSrc={videoPath} textOverlay="Die Drei ZAHNÄRZTE" />
      
      <CustomHeroImage />
      
      <div id="services" style={{ marginTop: "30px", backgroundColor: "#fdf9f4" }}><ServicesAnimation /> </div>
   
      <ScrollCards></ScrollCards>

      <div id="team" style={{ backgroundColor: "#fdf9f4" }}><TeamPreview /></div>

      <div id="philosophy" style={{ backgroundColor: "#fdf9f4" }}><OurPhilosophy /></div>

      <div id="contact" style={{ backgroundColor: "#fdf9f4" }}><Footer /></div>
    </div>
  );
}

export default App;
