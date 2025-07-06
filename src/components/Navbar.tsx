import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export default function Navbar() {
    const [user, setUser] = useState<null | { email: string }>(null);

    useEffect(() => {
        // gets current user on mount to display email
        supabase.auth.getUser().then(({ data }) => {
            if (data?.user && data.user.email) setUser({ email: data.user.email });
        });
        // listens for auth state changes
        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session && session.user && session.user.email) {
                setUser({ email: session.user.email });
            } else {
                setUser(null);
            }
        });
        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    const handleLogOut = async () => {
        await supabase.auth.signOut();
        setUser(null);
    };

    return (
        <nav className="w-full flex justify-between items-center px-6 bg-black bg-opacity-60 text-white backdrop-blur-sm font-rubik">
            <Link to="/" className="text-4xl font-heading tracking-wide font-rubik hover:text-pink-500 transition-transform hover:scale-120">VOYAGR</Link>

            <div className="flex-1 flex justify-center font-inter">
                <div className="flex gap-8 text-lg">
                    <Link to="/explore" className="hover:text-pink-500 transition">Explore</Link>
                    <span className="select-none pointer-events-none opacity-60">|</span>
                    <Link to="/pricing" className="hover:text-pink-500 transition">Pricing</Link>
                    <span className="select-none pointer-events-none opacity-60">|</span>
                    <Link to="/about" className="hover:text-pink-500 transition">About</Link>
                </div>
            </div>

            <div className="flex items-center gap-4">
                {user ? (
                    <>
                        <span className="text-sm opacity-80">{user.email}</span>
                        <button
                            onClick={handleLogOut}
                            className="px-4 py-2 border border-white hover:bg-white hover:text-black transition"
                        >
                            Log Out
                        </button>
                    </>
                ) : (
                    <>
                        <Link
                            to="/auth?mode=login"
                            className="px-4 py-2 border border-white hover:bg-white hover:text-black transition"
                        >
                            Log In
                        </Link>
                        <Link
                            to="/auth?mode=signup"
                            className="px-4 py-2 border border-white hover:bg-white hover:text-black transition"
                        >
                            Sign Up
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}