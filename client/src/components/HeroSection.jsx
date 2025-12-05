import React from "react";
import FeatureCard from "./FeatureCard";
import GetButton from "./GetButton";

const HeroSection = ({ isVisible }) => {
  return (
    <>
      <div
        className={`max-w-7xl mx-auto px-8 pt-20 pb-32 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Organize Your Life,
            <br />
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              One Task at a Time
            </span>
          </h1>

          <p className="text:md md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            The most elegant way to manage your tasks. Simple, powerful, and
            designed to help you focus on what truly matters.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 mb-20">
            <GetButton />
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20 cursor-pointer">
              Watch Demo
            </button>
          </div>

          {/* Feature Cards */}
          <FeatureCard isVisible={isVisible} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
