import FeaturedApp from "./FeaturedApp";
import FeaturedHero from "./FeaturedHero";

const Hero = () => {
  return (
    <div className="flex items-center justify-center ">
      <FeaturedHero />
      <FeaturedApp />
    </div>
  );
};

export default Hero;
