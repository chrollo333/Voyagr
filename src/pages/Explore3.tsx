// Combined Explore3: Modern UI from Explore2, data from Supabase like Explore
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Search, Heart, TrendingUp } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import GradientButton from "../components/GradientButton";

// Supabase CreatorProfile type
// (add more fields if your DB has them)
type CreatorProfile = {
  id: string;
  user_id: string;
  display_name: string;
  preview_image_url: string | null;
  description: string | null;
  tags: string[] | null;
  // Add more fields as needed
};

export default function Explore3() {
  const [creators, setCreators] = useState<CreatorProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [likedCreators, setLikedCreators] = useState<Set<string>>(new Set());
  const navigate = useNavigate();

  // Collect all tags from creators
  const allTags = Array.from(new Set(creators.flatMap(c => c.tags ?? [])));

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

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const toggleLike = (creatorId: string) => {
    setLikedCreators(prev => {
      const newSet = new Set(prev);
      if (newSet.has(creatorId)) {
        newSet.delete(creatorId);
      } else {
        newSet.add(creatorId);
      }
      return newSet;
    });
  };

  const filteredCreators = creators.filter(creator => {
    const matchesSearch = (creator.display_name?.toLowerCase().includes(searchQuery.toLowerCase()) || "")
      || (creator.description?.toLowerCase().includes(searchQuery.toLowerCase()) || "");
    const matchesTags = selectedTags.length === 0 || (creator.tags && selectedTags.some(tag => creator.tags?.includes(tag)));
    return matchesSearch && matchesTags;
  });

  // ...existing code...

  if (loading) return <div className="text-center py-12">Loading creators...</div>;

  return (
    <div className="font-inter">
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto mt-8 mb-8">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search creators, content, or topics..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 ">
        {/* Action Buttons */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-3">
            <GradientButton onClick={() => navigate("/create")}>Create Creator Page</GradientButton>
            <button
              onClick={() => {/* TODO: Add browse categories logic */}}
              className="text-white px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
            >
              Browse Categories
            </button>
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <TrendingUp className="w-5 h-5" />
            <span>{filteredCreators.length} creators found</span>
          </div>
        </div>

        {/* Tags Filter */}
        <div className="mb-8">
          <h3 className="text-white text-lg font-semibold mb-4">Filter by Tags</h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedTags.includes(tag)
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {tag}
              </button>
            ))}
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="px-3 py-1.5 rounded-full text-sm font-medium bg-red-500/20 text-red-300 hover:bg-red-500/30 transition-all duration-200"
              >
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Creator Cards Grid */}
        <div className="flex flex-col gap-6">
          {filteredCreators.map(creator => (
            <div key={creator.id} className="flex flex-col md:flex-row bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
              {/* Cover Image */}
              <div className="md:w-64 w-full h-40 md:h-auto flex-shrink-0 relative bg-gradient-to-r from-purple-600 to-pink-600">
                <img 
                  src={creator.preview_image_url || 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'}
                  alt={creator.display_name}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-3 right-3 flex space-x-2">
                  <button
                    onClick={() => toggleLike(creator.id)}
                    className={`p-2 rounded-full transition-all duration-200 ${
                      likedCreators.has(creator.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-black/40 text-gray-300 hover:bg-black/60'
                    }`}
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {/* Profile Section */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-4 mb-2">
                    <img 
                      src={creator.preview_image_url || 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'}
                      alt={creator.display_name}
                      className="w-16 h-16 rounded-full border-2 border-white/20"
                    />
                    <div>
                      <h3 className="text-white font-bold text-lg">{creator.display_name}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-2 line-clamp-2">{creator.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {creator.tags?.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mt-4">
                  <div className="flex gap-6 text-xs text-gray-400">
                    {/* Add metrics here if you want */}
                  </div>
                  <div className="flex space-x-1.5">
                    <button
                      onClick={() => {}}
                      className="px-4 py-2 rounded-md border border-pink-500/40 bg-pink-500/10 text-pink-200 text-sm font-medium hover:bg-pink-500/20 hover:text-white transition"
                    >
                      Subscribe
                    </button>
                    <button
                      onClick={() => {}}
                      className="px-4 py-2 rounded-md border border-indigo-500/40 bg-indigo-500/10 text-indigo-200 text-sm font-medium hover:bg-indigo-500/20 hover:text-white transition"
                    >
                      Donate
                    </button>
                    <button
                      onClick={() => {}}
                      className="px-3 py-2 border border-cyan-400/40 bg-cyan-400/10 rounded-md text-cyan-200 text-sm font-medium hover:bg-cyan-400/20 hover:text-white transition"
                    >
                      Forum
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCreators.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No creators found matching your criteria</div>
            <GradientButton 
              onClick={() => {
                setSearchQuery('');
                setSelectedTags([]);
              }}
              className="px-5 py-2.5"
            >
              Clear Filters
            </GradientButton>
          </div>
        )}
      </div>
    </div>
  );
}
