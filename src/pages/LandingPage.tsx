import React from "react";
import FeaturesSection from "./sections/FeaturesSection";
import GradientButton from "../components/GradientButton";

const LandingPage: React.FC = () => {
  return (
    <main className="min-h-screen relative text-white flex flex-col font-inter">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-20 text-center max-w-5xl mx-auto relative z-10 pb-100">
        <h1 className="text-7xl font-extrabold mb-4 tracking-tight font-inter">
          VOYAGR <span className="text-pink-400"></span>
        </h1>
        <p className="text-xl max-w-xl mb-10 font-inter">
          A creator-first showcase and community platform.
          <br />
          <br />
          Discovery, promotion, and engagement with content creators — all in
          one place.
        </p>
        
        <div className="flex space-x-4">
          <GradientButton to="/explore">
            Get Started
          </GradientButton>

          <a
            href="#learn-more"
            className="px-6 py-3 bg-gradient-to-r  text-white  
            rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200
            border border-white hover:bg-white hover:text-black  active:scale-95"
          >
            Learn More
          </a>
        </div>
      </section>

      <FeaturesSection></FeaturesSection>
      {/* Footer */}
      <footer className="py-3 text-center text-sm text-gray-400 relative z-10">
        &copy; 2025 Voyagr. All rights reserved.
      </footer>
    </main>
  );
};

export default LandingPage;
