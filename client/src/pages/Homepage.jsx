import useFadeInOnMount from "../hooks/useFadeInOnMount";
import Testimonials from "../components/Testimonials";
import HeroSection from "../components/HeroSection";
import UIShowcase from "../components/UIShowcase";
import CallToAction from "../components/CallToAction";

const Homepage = () => {
  const isVisible = useFadeInOnMount(); // handles fade-in logic
  return (
    <div className="relative z-10">
      <HeroSection isVisible={isVisible} />
      <UIShowcase isVisible={isVisible} />
      <Testimonials isVisible={isVisible} />
      <CallToAction isVisible={isVisible} />
    </div>
  );
};

export default Homepage;
