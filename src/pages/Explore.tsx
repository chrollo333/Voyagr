import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import CreatorCard from "../components/CreatorCard";
import type { CreatorProfile } from "../components/CreatorCard";
import { useNavigate } from 'react-router-dom';

export default function Explore() {
  const [creators, setCreators] = useState<CreatorProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase
        .from("creator_profiles")
        .select("*");

      if (error) {
        console.error("Error fetching creators:", error);
      } else if (data) {
        setCreators(data);
      }
      setLoading(false);
    }
    fetchCreators();
  }, []);

  if (loading) return <div>Loading creators...</div>;

  return (
    <div className="p-4 mt-15 font-inter">
      <div className="flex justify-start mb-4">
        <button
          onClick={() => navigate("/create")}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white  
            rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200
            hover:from-pink-400 hover:to-purple-500 active:scale-95"
        >
          Create Creator Page
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
        {creators.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </div>
  );
}
