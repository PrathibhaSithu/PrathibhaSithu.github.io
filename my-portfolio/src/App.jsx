import HeroSection from "./components/HeroSection";
import MainBackground from "./components/MainBackground";
import NavBar from "./components/NavBar";
import NumbersSection from "./components/NumbersSection";

function App() {

  return (
    <>
    {/* <div className="bg-[#b1548a]">
      <NavBar/>
      <HeroSection/>
      <NumbersSection/>
    </div> */}
      <MainBackground/>
      <NavBar/>
      <HeroSection/>
      <NumbersSection/>
      
    </>
  );
}

export default App;
