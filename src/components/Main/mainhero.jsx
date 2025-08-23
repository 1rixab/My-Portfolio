import Navigation from "../Navbar/nav";
import heroimage from "../Images/hero.png";
import Hero2 from "./hero2";
import Hero3 from "./hero3";

const MainHero = () => {
  return (
    <>
      <div className="bg-black w-full h-screen flex flex-col items-center">
        <div className="w-full">
          <Navigation />
        </div>
        <div className="relative">
          <img
            className="h-[87vh] w-[100vw] object-cover mt-[3vh] block"
            src={heroimage}
            alt="heroimage"
          />
          <Hero2 className="absolute"></Hero2>
          <Hero3/>
        </div>
      </div>
    </>
  );
};

export default MainHero;
