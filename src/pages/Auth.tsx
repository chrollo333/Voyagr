// src/pages/Auth.tsx
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const mode = searchParams.get('mode');
    const navigate = useNavigate();

    const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
    const [isAuthenticated, setIsAuthenticated] = useState(false); //currently unused, for stuff that happens on authentication later


    useEffect(() => {
        if (mode === 'signup') {
            setAuthMode('signup')
        } else {
            setAuthMode('login')
        }
    }, [mode]);

    useEffect(() => {
        // listens for auth state changes
        const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
            if (session && session.user) {
                setIsAuthenticated(true);
                // redirect to landing page after login
                navigate('/');
            } else {
                setIsAuthenticated(false);
            }
        });
        // cleanup
        return () => {
            listener.subscription.unsubscribe();
        };
    }, [navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (authMode === 'login') {
            const { error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) setError(error.message);
        } else {
            const { error } = await supabase.auth.signUp({ email, password });
            if (error) setError(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        await supabase.auth.signInWithOAuth({ provider: 'google' });
    };

    // functions used to change the site state
    const switchToSignup = () => {
        setAuthMode('signup');
        setSearchParams({ mode: 'signup' });
    };
    const switchToLogin = () => {
        setAuthMode('login');
        setSearchParams({ mode: 'login' });
    };

    return (
        <div className="min-h-screen flex items-center justify-center  text-white font-inter">
            <div className="w-full max-w-md p-6 bg-black/60 backdrop-blur-sm rounded-b-sm">
                <h2 className="text-2xl font-semibold mb-6 font-rubik">
                    {authMode === 'login' ? 'Sign In' : 'Register'} to Voyagr
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full p-2 rounded bg-white/20 text-white border border-transparent focus:ring-2 focus:ring-white-400 outline-none"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full p-2 rounded bg-white/20 text-white border border-transparent focus:ring-2 focus:ring-white-400 outline-none"
                        required
                    />

                    {error && <p className="text-red-400">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-white text-black py-2 rounded transition-all duration-300 ease-in-out
             hover:bg-pink-600 hover:text-white hover:shadow-[0_0_4px_#ec4899,0_0_24px_#ec4899]
             active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    >
                        {authMode === 'login' ? 'Log In' : 'Register'}
                    </button>
                </form>

                <div className="my-4 text-center">or</div>

                <button
                    onClick={handleGoogleSignIn}
                    className="w-full border border-white py-2 rounded hover:bg-white hover:text-black transition flex items-center justify-center gap-2 font-medium"
                >
                    <FcGoogle className="w-5 h-5" />
                    <span>Continue with Google</span>
                </button>

                <div className="mt-6 text-center text-sm ">
                    {authMode === 'login' ? (
                        <>
                            Don’t have an account?{' '}
                            <button onClick={switchToSignup} className="text-pink-500 hover:text-indigo-400 underline hover:scale-120 ml-2 transition font-rubik">
                                Register
                            </button>
                        </>
                    ) : (
                        <>
                            Already have an account?{' '}
                            <button onClick={switchToLogin} className="text-pink-500 hover:text-indigo-400 underline hover:scale-120 ml-2 transition font-rubik">
                                Log In
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}