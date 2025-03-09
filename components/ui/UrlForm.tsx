"use client";

import { useUrlShortener } from "@/hooks/useUrlShortener";
import Image from "next/image";
import React from "react";
import cubeOne from "@/public/assets/cubes/cube1.svg";
import cubeTwo from "@/public/assets/cubes/cube2.svg";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Button from "./Button";

const UrlForm = () => {
  // hooks
  const { url, shortUrl, error, setUrl, shortenUrl, history } =
    useUrlShortener();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    shortenUrl(url);
  };

  return (
    <div className="flex justify-center min-h-screen relative flex-col items-center">
      <Image
        src={cubeOne}
        alt="cube photo"
        width={800}
        height={800}
        priority
        style={{ zIndex: "-1" }}
        className="absolute right-0"
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
          <Button
            type="submit"
            text="Shorten Now!"
            className="w-48 mr-1 py-3 bg-[#144EE3] text-white rounded-4xl hover:bg-[#144fe3b9] cursor-pointer duration-300"
          />
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
      <Image
        src={cubeTwo}
        alt="cube photo"
        width={800}
        height={800}
        priority
        style={{ zIndex: "-1" }}
        className="absolute left-0 rotate-180"
      />

      <div className="mt-10 w-full max-w-4xl">
        <h3 className="text-lg font-semibold mb-2">Short Links History:</h3>
        <div className="overflow-x-auto rounded-2xl">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-900 text-[#fff]">
              <tr>
                <th className="px-4 py-3">
                  Original URL
                </th>
                <th className="px-4 py-3">Short URL</th>
                <th className="px-4 py-3">
                  Created At
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 text-[#C9CED6]">
              {history.map((item, index) => (
                <tr key={index} className="">
                  <td className="px-4 py-3 truncate max-w-xs">
                    {item.original}
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={item.short}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C9CED6] underline"
                    >
                      {item.short}
                    </a>
                  </td>
                  <td className="px-4 py-3">{item.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UrlForm;
