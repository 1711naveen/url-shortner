'use client'
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleShorten = async () => {
    if (!longUrl) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`
      );
      setShortUrl(response.data);
    } catch (error) {
      console.error("Error shortening URL", error);
    }
    setLongUrl("")
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">URL Shortener</h1>
        <input
          type="text"
          placeholder="Enter long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="w-full p-2 border rounded-lg mb-4"
        />
        <button
          onClick={handleShorten}
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          {loading ? "Shortening..." : "Shorten URL"}
        </button>
        {shortUrl && (
          <div className="mt-4 p-2 bg-gray-200 rounded-lg flex justify-between items-center">
            <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600">
              {shortUrl}
            </a>
            <button
              onClick={() => navigator.clipboard.writeText(shortUrl)}
              className="ml-2 text-sm text-gray-700 hover:text-gray-900"
            >
              Copy
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
