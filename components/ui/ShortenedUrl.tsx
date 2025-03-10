import React from "react";

interface ShortenedUrlProps {
  shortUrl: string;
}

const ShortenedUrl: React.FC<ShortenedUrlProps> = ({ shortUrl }) => (
  <div className="mt-10 w-full">
    <p className="text-[#144EE3] text-sm md:text-base">Shortened URL:</p>
    <a
      href={shortUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#C9CED6] underline text-xs md:text-xl w-full"
    >
      {shortUrl}
    </a>
  </div>
);

export default ShortenedUrl;
