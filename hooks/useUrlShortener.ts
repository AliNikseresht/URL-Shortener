import { useEffect, useState } from "react";
import { ShortenUrlResponse, ErrorResponse } from "@/types/types";
import { supabase } from "@/utils/supabaseClient";

function isShortenUrlResponse(
  data: ShortenUrlResponse | ErrorResponse
): data is ShortenUrlResponse {
  return (data as ShortenUrlResponse).shortUrl !== undefined;
}

export function useUrlShortener() {
  const [url, setUrl] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<
    { original: string; short: string; created_at: string }[]
  >([]);

  const fetchHistory = async () => {
    const { data, error } = await supabase
      .from("short_links")
      .select("original_url, short_url, created_at")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setHistory(
        data.map((item) => ({
          original: item.original_url,
          short: item.short_url,
          created_at: new Date(item.created_at).toLocaleString(),
        }))
      );
    }
  };

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
        console.log("Generated short URL:", data.shortUrl);
        setShortUrl(data.shortUrl);

        await supabase
          .from("short_links")
          .insert([{ original_url: url, short_url: data.shortUrl }]);

        fetchHistory();
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Something went wrong");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return {
    url,
    shortUrl,
    error,
    history,
    setUrl,
    shortenUrl,
  };
}
