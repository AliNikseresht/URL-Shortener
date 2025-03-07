import { useState } from "react";
import { ShortenUrlResponse, ErrorResponse } from "@/types/types";

function isShortenUrlResponse(
  data: ShortenUrlResponse | ErrorResponse
): data is ShortenUrlResponse {
  return (data as ShortenUrlResponse).shortUrl !== undefined;
}

export function useUrlShortener() {
  const [url, setUrl] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const shortenUrl = async (url: string) => {
    setError(null);
    setShortUrl(null);

    if (!url) {
      setError("Please enter a URL.");
      return;
    }

    try {
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data: ShortenUrlResponse | ErrorResponse = await response.json();

      if (isShortenUrlResponse(data)) {
        setShortUrl(data.shortUrl);
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Something went wrong");
      console.error(err);
    }
  };

  return {
    url,
    shortUrl,
    error,
    setUrl,
    shortenUrl,
  };
}
