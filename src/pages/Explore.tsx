import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import CreatorCard from '../components/CreatorCard';
import type { CreatorProfile } from '../components/CreatorCard';

export default function Explore() {
  const [creators, setCreators] = useState<CreatorProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase
        .from('creator_profiles')
        .select('*');

      if (error) {
        console.error('Error fetching creators:', error);
      } else if (data) {
        setCreators(data);
      }
      setLoading(false);
    }
    fetchCreators();
  }, []);

  if (loading) return <div>Loading creators...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {creators.map((creator) => (
        <CreatorCard key={creator.id} creator={creator} />
      ))}
    </div>
  );
}