import FullScreenVideo from './Components/FullScreenVideo'; // Import your component
//import sampleVideo from ".public/Assets/vid.mp4"; // Add a sample video to your assets folder
import Header from './Components/Header'; // Import the header component
import CustomHero from './Components/CustomHero'; // Import the header component
import CustomHeroImage from './Components/CustomHeroImage'; // Import the header component
import ScrollCards from './Components/ScrollCards'; // Import the header component
import QuoteSection from './Components/QuoteSection'; // Import the header component
import ServicesAnimation from './Components/ServicesAnimation'; // Import the header component
import Footer from './Components/Footer'; // Import the header component
import TeamPreview from './Components/TeamPreview'; // Import the header component
import OurPhilosophy from './Components/OurPhilosophy'; // Import the header component


const videoPath = "/Assets/vid.mp4";



function App() {
  return (

<div className="w-screen min-h-screen bg-[#fdf9f4]"> 
     
         <div style={{ backgroundColor: "#fdf9f4" }}> <Header/></div> 
    
     

<FullScreenVideo videoSrc={videoPath} textOverlay="Die Drei ZAHNÄRZTE"/>
       


<div style={{marginTop: "30px",backgroundColor: "#fdf9f4" }}><CustomHeroImage></CustomHeroImage> </div>

<ServicesAnimation/>
{/* <TeamPreview /> */}
<TeamPreview />
<ScrollCards></ScrollCards>
{/* <QuoteSection /> */}


<OurPhilosophy />

<div style={{ backgroundColor: "#fdf9f4" }}><Footer /></div>

   </div>
  );
}

export default App;
