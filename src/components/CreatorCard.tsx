export type CreatorProfile = {
  id: string;
  user_id: string;
  display_name: string;
  preview_image_url: string | null;
  description: string | null;
  tags: string[] | null;
};

export default function CreatorCard({ creator }: { creator: CreatorProfile }) {
  return (
    <div className="bg-gray-900 rounded-lg p-4 max-w-sm shadow-lg text-white">
      <img
        src={creator.preview_image_url || 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'} //random google placeholder
        alt={creator.display_name}
        className="rounded-md mb-3 w-full h-48 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2">{creator.display_name}</h3>
      <p className="text-sm mb-2">{creator.description}</p>
      <div className="flex flex-wrap gap-2">
        {creator.tags?.map((tag) => (
          <span key={tag} className="bg-pink-600 px-2 py-1 rounded text-xs font-semibold">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}