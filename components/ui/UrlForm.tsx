"use client";

import { useUrlShortener } from "@/hooks/useUrlShortener";

import ShortenedUrl from "./ShortenedUrl";
import CubeBackground from "./CubeBackground";
import FormInput from "./FormInput";
import HistoryTable from "./HistoryTable";

const UrlForm = () => {
  const { url, shortUrl, error, setUrl, shortenUrl, history } =
    useUrlShortener();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    shortenUrl(url);
  };

  return (
    <div className="flex justify-center min-h-screen relative flex-col items-center">
      <CubeBackground />

      <div className="p-6 rounded-lg z-20 flex flex-col items-center">
        <div className="w-full flex flex-col justify-center items-center text-center my-[2em]">
          <h3 className="text-lg md:text-5xl py-4 font-bold bg-gradient-to-r from-[#144EE3] via-[#EB568E] to-[#144EE3] bg-clip-text text-transparent">
            Shorten Your Loooong Links :)
          </h3>
          <span className="text-xs text-[#C9CED6] mt-4">
            Linkly is an efficient and easy-to-use URL shortening service that
            streamlines your online experience.
          </span>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg relative bg-[#2f2f2f96] rounded-4xl flex items-center border border-[#1a4265]"
        >
          <FormInput url={url} setUrl={setUrl} />
          <button
            type="submit"
            className="w-40 text-xs md:text-base md:w-48 mr-1 py-3 bg-[#144EE3] text-[#fff] rounded-4xl hover:bg-[#144fe3b9] cursor-pointer duration-300"
          >
            Shorten Now!
          </button>
        </form>

        {error && <p className="text-[#dd0113] mt-4">{error}</p>}

        {shortUrl && <ShortenedUrl shortUrl={shortUrl} />}
      </div>

      <HistoryTable history={history} />
    </div>
  );
};

export default UrlForm;
