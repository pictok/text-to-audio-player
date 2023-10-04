"use client"; //@!!!!! REMEMBER TO INCLUDE THIS!!

import React, { useState } from "react";
import { NextPage } from "next";
import AudioPlayer from "@/components/AudioPlayer";
import * as fakeDB from "@/db";
import Link from "next/link";

type HomeProps = {
  searchParams: { q?: string };
};

const Home: NextPage<HomeProps> = ({ searchParams }) => {
  const [query, setQuery] = useState(searchParams.q || "");
  const [filteredTracks, setFilteredTracks] = useState(fakeDB.getTracks());

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const results = fakeDB.searchTrack(query);
    setFilteredTracks(results);
  };

  return (
    <main className="flex flex-col max-w-lg m-auto mt-10">
      <div>
        <form className="flex items-center gap-4">
          <label className="flex-grow border border-pink-500 rounded-lg px-6 py-4 flex items-center gap-4">
            <input
              className="bg-transparent flex-grow border-none outline-none"
              type="text"
              placeholder="text to audio..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Link href="/" className="flex">
              <svg
                className="w-4 fill-neutral-600"
                aria-label="Clear"
                viewBox="0 0 24 24"
                role="img"
              >
                <title>Clear</title>
                <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Zm5.139 16.056a.766.766 0 1 1-1.083 1.083L12 13.083 7.944 17.14a.766.766 0 0 1-1.083-1.083L10.917 12 6.86 7.944a.766.766 0 0 1 1.083-1.083L12 10.917l4.056-4.056a.766.766 0 0 1 1.083 1.083L13.083 12Z"></path>
              </svg>
            </Link>
          </label>

          <button
            onClick={handleSearch}
            className="flex items-center space-x-2 h-full text-neutral-600 bg-white hover:bg-neutral-600 hover:text-white border border-pink-500 hover:border-transparent font-medium rounded-lg px-5 py-2.5"
          >
            <svg
              className="w-4 stroke-0"
              height="30"
              width="30"
              aria-label="Search"
              viewBox="0 0 26 26"
              role="img"
            >
              <title>Search</title>
              <path
                className="fill-neutral-500"
                d="M3.5 11.5C3.5 7.08172 7.08172 3.5 11.5 3.5C15.9183 3.5 19.5 7.08172 19.5 11.5C19.5 15.9183 15.9183 19.5 11.5 19.5C7.08172 19.5 3.5 15.9183 3.5 11.5ZM11.5 1C5.70101 1 1 5.70101 1 11.5C1 17.299 5.70101 22 11.5 22C13.949 22 16.2023 21.1615 17.9883 19.756L22.3661 24.1339C22.8543 24.622 23.6457 24.622 24.1339 24.1339C24.622 23.6457 24.622 22.8543 24.1339 22.3661L19.756 17.9883C21.1615 16.2023 22 13.949 22 11.5C22 5.70101 17.299 1 11.5 1Z"
              ></path>
            </svg>
            <span>Search</span>
          </button>
        </form>
      </div>

      <div className="mt-10">
        {filteredTracks.map((track, index) => (
          <div key={index} className="mt-5">
            <AudioPlayer track={track} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
