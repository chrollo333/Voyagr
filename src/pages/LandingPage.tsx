import React from "react";



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

            <section
                id="learn-more"
                className="bg-white text-gray-900 py-20 px-6 max-w-7xl mx-auto w-full relative z-10"
            >
                <h2 className="text-4xl font-bold text-center mb-16">What is Voyagr?</h2>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {/* Creator - Showcase Card */}
                    <div className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200">
                        <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                            Showcase Your Work
                        </h3>
                        <p className="text-gray-700">
                            Build a personalized page with your social links, embedded content, and follower stats.
                        </p>
                    </div>

                    {/* Creator - Community Card */}
                    <div className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200">
                        <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                            Community Engagement
                        </h3>
                        <p className="text-gray-700">
                            Create your own fan forum where you and your audience can discuss content, updates, and more.
                        </p>
                    </div>

                    {/* Creator - Discovery Card */}
                    <div className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200">
                        <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                            Get Discovered
                        </h3>
                        <p className="text-gray-700">
                            Be featured in the global creator directory, sortable by popularity, category, and content type.
                        </p>
                    </div>

                    {/* Creator - Promotion Card */}
                    <div className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200">
                        <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                            Promote Yourself
                        </h3>
                        <p className="text-gray-700">
                            Get featured in premium slots on Voyagr and grow your audience through visibility.
                        </p>
                    </div>

                    {/* Fan - Discovery Card */}
                    <div className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200">
                        <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                            Discover Creators
                        </h3>
                        <p className="text-gray-700">
                            Follow creators based on your interests, popularity, or content category and never miss updates.
                        </p>
                    </div>

                    {/* Fan - Support Card */}
                    <div className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200">
                        <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                            Engage & Support
                        </h3>
                        <p className="text-gray-700">
                            Join community discussions, tip your favorites, and subscribe to show support.
                        </p>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="py-8 text-center text-sm text-gray-400 relative z-10">
                &copy; 2025 Voyagr. All rights reserved.
            </footer>
        </main>
    );
};

export default LandingPage;