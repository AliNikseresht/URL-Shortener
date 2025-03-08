"use client";

import { useUrlShortener } from "@/hooks/useUrlShortener";
import Image from "next/image";
import React from "react";
import cubeOne from "@/public/assets/cubes/cube1.svg";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const UrlForm = () => {
  //hooks
  const { url, shortUrl, error, setUrl, shortenUrl } = useUrlShortener();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    shortenUrl(url);
  };

  return (
    <div className="flex justify-center min-h-screen">
      <Image
        src={cubeOne}
        alt="app logo"
        width={1000}
        height={1000}
        priority
        style={{ zIndex: "-1" }}
        className="absolute"
      />

      <div className="p-6 rounded-lg z-20 flex flex-col items-center">
        <div className="w-full flex flex-col justify-center items-center text-center my-[2em]">
          <h3 className="text-5xl font-bold bg-gradient-to-r from-[#144EE3] via-[#EB568E] to-[#144EE3] bg-clip-text text-transparent">
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
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your URL"
            className="w-full p-4 outline-none"
            required
          />
          <button
            type="submit"
            className="w-40 mr-1 py-3 bg-[#144EE3] text-white rounded-4xl hover:bg-[#144fe3b9] cursor-pointer duration-300"
          >
            Shorten Now!
          </button>
        </form>
        <div className="flex items-center gap-1 mt-4">
          <span className="text-xs text-[#C9CED6]">
            You can create <span className="text-[#EB568E] font-bold">05</span>{" "}
            more links. Register Now to enjoy Unlimited usage
          </span>
          <AiOutlineQuestionCircle size={15} />
        </div>

        {error && <p className="text-[#dd0113] mt-4">{error}</p>}

        {shortUrl && (
          <div className="mt-10">
            <p className="text-[#144EE3]">Shortened URL:</p>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9CED6] underline text-xl"
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
