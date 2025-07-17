import React, { useState } from 'react';
import { Search, Users, Heart, TrendingUp, Star, Play, Calendar, DollarSign, Twitter, Instagram, Youtube, Twitch, Globe, Github } from 'lucide-react';

const VoyagrCreatorPlatform = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [likedCreators, setLikedCreators] = useState(new Set());

  const allTags = ['Gaming', 'Art', 'Music', 'Tech', 'Cooking', 'Fitness', 'Travel', 'Education', 'Comedy', 'DIY'];

  const creators = [
    {
      id: 1,
      name: 'Alexandra Chen',
      username: '@artbyalex',
      description: 'Digital artist creating stunning fantasy worlds and character designs. Join me on my creative journey!',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c7e2d56c?w=150&h=150&fit=crop&crop=face',
      coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop',
      tags: ['Art', 'Gaming', 'DIY'],
      subscribers: 12500,
      monthlyViews: 450000,
      rating: 4.9,
      monthlyEarnings: 3200,
      joinedDate: 'Jan 2023',
      isVerified: true,
      socialLinks: {
        twitter: 'https://twitter.com/artbyalex',
        instagram: 'https://instagram.com/artbyalex',
        youtube: 'https://youtube.com/artbyalex',
        website: 'https://artbyalex.com'
      }
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      username: '@techtalks',
      description: 'Breaking down complex tech concepts into digestible content. Weekly deep dives into AI, web dev, and emerging technologies.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop',
      tags: ['Tech', 'Education'],
      subscribers: 8900,
      monthlyViews: 280000,
      rating: 4.8,
      monthlyEarnings: 2100,
      joinedDate: 'Mar 2023',
      isVerified: true,
      socialLinks: {
        twitter: 'https://twitter.com/techtalks',
        youtube: 'https://youtube.com/techtalks',
        github: 'https://github.com/techtalks',
        website: 'https://techtalks.dev'
      }
    },
    {
      id: 3,
      name: 'Sarah Williams',
      username: '@sarahsounds',
      description: 'Indie musician and producer sharing original compositions, covers, and music production tutorials.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop',
      tags: ['Music', 'Education'],
      subscribers: 15200,
      monthlyViews: 520000,
      rating: 4.9,
      monthlyEarnings: 4500,
      joinedDate: 'Dec 2022',
      isVerified: true,
      socialLinks: {
        instagram: 'https://instagram.com/sarahsounds',
        youtube: 'https://youtube.com/sarahsounds',
        twitter: 'https://twitter.com/sarahsounds'
      }
    },
    {
      id: 4,
      name: 'David Kim',
      username: '@fitnessfirst',
      description: 'Personal trainer helping you achieve your fitness goals with science-based workouts and nutrition advice.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop',
      tags: ['Fitness', 'Education'],
      subscribers: 22000,
      monthlyViews: 680000,
      rating: 4.7,
      monthlyEarnings: 5800,
      joinedDate: 'Aug 2022',
      isVerified: true,
      socialLinks: {
        instagram: 'https://instagram.com/fitnessfirst',
        youtube: 'https://youtube.com/fitnessfirst',
        website: 'https://fitnessfirst.com'
      }
    },
    {
      id: 5,
      name: 'Emma Thompson',
      username: '@wanderlust',
      description: 'Travel blogger documenting hidden gems and cultural experiences from around the world.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      coverImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=200&fit=crop',
      tags: ['Travel', 'Education'],
      subscribers: 18700,
      monthlyViews: 590000,
      rating: 4.8,
      monthlyEarnings: 4200,
      joinedDate: 'May 2023',
      isVerified: false,
      socialLinks: {
        instagram: 'https://instagram.com/wanderlust',
        youtube: 'https://youtube.com/wanderlust',
        twitter: 'https://twitter.com/wanderlust',
        website: 'https://wanderlust.blog'
      }
    },
    {
      id: 6,
      name: 'Jake Miller',
      username: '@comedycentral',
      description: 'Stand-up comedian sharing daily laughs, behind-the-scenes content, and comedy writing tips.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      coverImage: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=200&fit=crop',
      tags: ['Comedy', 'Education'],
      subscribers: 11400,
      monthlyViews: 380000,
      rating: 4.6,
      monthlyEarnings: 2800,
      joinedDate: 'Jul 2023',
      isVerified: false,
      socialLinks: {
        twitter: 'https://twitter.com/comedycentral',
        instagram: 'https://instagram.com/comedycentral',
        twitch: 'https://twitch.tv/comedycentral'
      }
    }
  ];

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const toggleLike = (creatorId) => {
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
    const matchesSearch = creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         creator.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         creator.username.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => creator.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const getSocialIcon = (platform) => {
    switch(platform) {
      case 'twitter': return <Twitter className="w-4 h-4" />;
      case 'instagram': return <Instagram className="w-4 h-4" />;
      case 'youtube': return <Youtube className="w-4 h-4" />;
      case 'twitch': return <Twitch className="w-4 h-4" />;
      case 'github': return <Github className="w-4 h-4" />;
      case 'website': return <Globe className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  const getSocialColor = (platform) => {
    switch(platform) {
      case 'twitter': return 'hover:text-blue-400';
      case 'instagram': return 'hover:text-pink-400';
      case 'youtube': return 'hover:text-red-400';
      case 'twitch': return 'hover:text-purple-400';
      case 'github': return 'hover:text-gray-300';
      case 'website': return 'hover:text-green-400';
      default: return 'hover:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-white tracking-wide">VOYAGR</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">veibloud146@seznam.cz</span>
              <button className="px-4 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors">
                Log Out
              </button>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search creators, content, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Action Buttons */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-3">
            <button className="px-5 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Create Creator Page
            </button>
            <button className="px-5 py-2.5 border border-white/30 text-white font-medium rounded-lg hover:border-white/50 hover:bg-white/10 transition-all duration-200">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCreators.map(creator => (
            <div key={creator.id} className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
              {/* Cover Image */}
              <div className="relative h-32 bg-gradient-to-r from-purple-600 to-pink-600">
                <img 
                  src={creator.coverImage} 
                  alt={creator.name}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-3 right-3 flex space-x-2">
                  {creator.isVerified && (
                    <div className="bg-blue-500 rounded-full p-1">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  )}
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
                
                {/* Social Media Icons */}
                <div className="absolute bottom-3 left-3 flex space-x-2">
                  {Object.entries(creator.socialLinks).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 bg-black/40 backdrop-blur-sm rounded-full text-gray-300 transition-all duration-200 hover:bg-black/60 ${getSocialColor(platform)}`}
                    >
                      {getSocialIcon(platform)}
                    </a>
                  ))}
                </div>
              </div>

              {/* Profile Section */}
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={creator.avatar} 
                    alt={creator.name}
                    className="w-16 h-16 rounded-full border-2 border-white/20"
                  />
                  <div>
                    <h3 className="text-white font-bold text-lg">{creator.name}</h3>
                    <p className="text-gray-400 text-sm">{creator.username}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{creator.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {creator.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 text-gray-400 mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-xs">Subscribers</span>
                    </div>
                    <div className="text-white font-semibold">{formatNumber(creator.subscribers)}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 text-gray-400 mb-1">
                      <Play className="w-4 h-4" />
                      <span className="text-xs">Monthly Views</span>
                    </div>
                    <div className="text-white font-semibold">{formatNumber(creator.monthlyViews)}</div>
                  </div>
                </div>

                {/* Additional Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gray-400 mb-1">
                      <Star className="w-3 h-3" />
                    </div>
                    <div className="text-yellow-400 font-semibold text-sm">{creator.rating}</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gray-400 mb-1">
                      <DollarSign className="w-3 h-3" />
                    </div>
                    <div className="text-green-400 font-semibold text-sm">${formatNumber(creator.monthlyEarnings)}</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gray-400 mb-1">
                      <Calendar className="w-3 h-3" />
                    </div>
                    <div className="text-gray-300 font-semibold text-sm">{creator.joinedDate}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-1.5">
                  <button className="flex-1 px-3 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium text-sm rounded-lg hover:shadow-lg transition-all duration-200">
                    Subscribe
                  </button>
                  <button className="px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium text-sm rounded-lg hover:shadow-lg transition-all duration-200">
                    Donate
                  </button>
                  <button className="px-3 py-2 border border-white/30 text-white text-sm rounded-lg hover:bg-white/10 transition-all duration-200">
                    Forum
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCreators.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No creators found matching your criteria</div>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedTags([]);
              }}
              className="px-5 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoyagrCreatorPlatform;