import React from "react";
import FeaturesSection from "./sections/FeaturesSection";



const LandingPage: React.FC = () => {
    return (
        <main className="min-h-screen relative text-white flex flex-col font-inter">


            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center flex-grow px-6 py-20 text-center max-w-5xl mx-auto relative z-10">
                <h1 className="text-7xl font-extrabold mb-4 tracking-tight font-inter">
                    VOYAGR <span className="text-pink-400"></span>
                </h1>
                <p className="text-xl max-w-xl mb-10 font-inter">
                    A creator-first showcase and community platform.<br /><br />
                    Discovery, promotion, and engagement with content creators — all in one place.
                </p>
                <div className="flex space-x-4">
                    <a
                        href="#get-started"
                        className="px-8 py-3 bg-pink-500 rounded-lg font-semibold text-lg hover:bg-pink-600 transition"
                    >
                        Get Started
                    </a>
                    <a
                        href="#learn-more"
                        className="px-8 py-3 border border-pink-400 rounded-lg font-semibold text-lg hover:bg-pink-700 transition"
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