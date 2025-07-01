import React from 'react';
import type { IconType } from 'react-icons';

type FeatureCardProps = {
  icon: IconType;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/8 hover:border-cyan-300/30 hover:shadow-xl hover:shadow-cyan-400/10 flex flex-col items-start">
      <div className="feature-icon flex items-center justify-center mb-4 w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-300 to-indigo-500 text-3xl">
        <Icon className="w-10 h-10" />
      </div>
      <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent text-left w-full">
        {title}
      </h3>
      <p className="text-white/80 leading-relaxed w-full text-left m-0">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;