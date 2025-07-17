import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GradientButton from "../components/GradientButton";
import { supabase } from "../lib/supabaseClient";

export default function CreatePage() {
  const [displayName, setDisplayName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [previewImageUrl, setPreviewImageUrl] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error || !user) {
        setError("You must be logged in to create a profile.");
        return;
      }

      setUserId(user.id);

      const { data: existing, error: fetchError } = await supabase
        .from("creator_profiles")
        .select("id")
        .eq("user_id", user.id)
        .single();

      if (fetchError && fetchError.code !== "PGRST116") {
        setError("Error checking for existing profile.");
        return;
      }

      if (existing) {
        setError("You already have a creator profile.");
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!userId) {
      setError("User not authenticated.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("creator_profiles").insert({
      user_id: userId,
      display_name: displayName,
      preview_image_url: previewImageUrl || null,
      description,
      tags: tags.split(",").map((t) => t.trim()),
    });

    if (error) {
      setError(error.message);
    } else {
      navigate("/explore");
    }

    setLoading(false);
  };
  return (
    <div className="max-w-xl mx-auto p-6 text-white font-inter">
      <h2 className="text-2xl font-bold mb-4">Create Your Creator Page</h2>
      {error && <p className="text-red-400 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Display Name"
          className="w-full p-2 bg-gray-800 rounded"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
        <textarea
          placeholder="Short Description"
          className="w-full p-2 bg-gray-800 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          className="w-full p-2 bg-gray-800 rounded"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <input
          type="text"
          placeholder="Preview Image URL (optional)"
          className="w-full p-2 bg-gray-800 rounded"
          value={previewImageUrl}
          onChange={(e) => setPreviewImageUrl(e.target.value)}
        />
        <GradientButton type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Page"}
        </GradientButton>
      </form>
    </div>
  );
}
