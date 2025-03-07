"use client";

import { useUrlShortener } from "@/hooks/useUrlShortener";
import Image from "next/image";
import React from "react";
import appLogo from "@/public/assets/logoApp.png";

const UrlForm = () => {
  //hooks
  const { url, shortUrl, error, setUrl, shortenUrl } = useUrlShortener();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    shortenUrl(url);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center">
          <Image src={appLogo} alt="app logo" width={90} height={90} priority />
          <h1 className="text-2xl font-semibold text-center mb-4">
            URL Shortener
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your URL"
            className="w-full p-3 mb-4 border border-[#1a4265] rounded outline-none"
            required
          />
          <button
            type="submit"
            className="w-full p-3 bg-[#1a4265] text-white rounded hover:bg-[#0b1b25] cursor-pointer duration-300"
          >
            Shorten URL
          </button>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {shortUrl && (
          <div className="mt-8 text-center">
            <p className="text-green-500">Shortened URL:</p>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#60b0f1] underline"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default UrlForm;
