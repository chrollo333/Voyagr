import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    const handleSignUp = () => {
        console.log('Sign Up');
    };

    const handleLogOut = () => {
        setIsAuthenticated(false);
        console.log('Log Out');
    };

    return (
        <nav className="w-full flex justify-between items-center px-6 bg-black bg-opacity-60 text-white backdrop-blur-sm font-rubik">
            <Link to="/" className="text-4xl font-heading tracking-wide font-rubik hover:text-pink-500 transition-transform hover:scale-120">VOYAGR</Link>

            <div className="flex-1 flex justify-center font-inter hover:text-">
                <div className="flex gap-8 text-lg">
                    <Link to="/directory" className="hover:text-pink-500 transition">Explore</Link>
                    <Link to="/pricing" className="hover:text-pink-500 transition">Pricing</Link>
                    <Link to="/about" className="hover:text-pink-500 transition">About</Link>
                </div>
            </div>

            <div className="flex items-center gap-4">
                {!isAuthenticated ? (
                    <>
                        <Link
                            to="/auth"
                            className="px-4 py-2 rounded-md border border-white hover:bg-white hover:text-black transition"
                        >
                            Log In
                        </Link>
                        <Link
                            to="/auth"
                            className="px-4 py-2 rounded-md border border-white hover:bg-white hover:text-black transition"
                        >
                            Sign Up
                        </Link>
                    </>
                ) : (
                    <button
                        onClick={handleLogOut}
                        className="px-4 py-2 rounded-md border border-white hover:bg-white hover:text-black transition"
                    >
                        Log Out
                    </button>
                )}
            </div>
        </nav>
    );
}