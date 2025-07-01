import FeatureCard from '../../components/FeatureCard';
import { features } from '../../data/features'

const FeaturesSection = () => {
  return (
    <section id="learn-more" className=" text-zinc-200 py-20 px-6 max-w-7xl mx-auto w-full relative z-10">
      <h2 className="text-4xl font-bold text-center mb-16">What is Voyagr?</h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;