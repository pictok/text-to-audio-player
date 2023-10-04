import React, { useState, useRef } from "react";
import { Track } from "@/db";

type AudioPlayerProps = {
  track: Track;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ track }) => {
  const audioRef = useRef<HTMLAudioElement>(null); //!important

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <div>
        <h3 className="text-lg">Soundtrack: {track.description}</h3>
        <audio ref={audioRef} src={track.url} />
        <button
          type="button"
          onClick={togglePlay}
          className="text-pink-500 font-bold py-1 px-4 rounded-full flex items-center justify-center border border-pink-500 hover:bg-pink-500 hover:text-white"
        >
          {isPlaying ? (
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <title>Play</title>
              <path
                fill-rule="evenodd"
                d="M0 .8C0 .358.32 0 .714 0h1.429c.394 0 .714.358.714.8v14.4c0 .442-.32.8-.714.8H.714a.678.678 0 0 1-.505-.234A.851.851 0 0 1 0 15.2V.8Zm7.143 0c0-.442.32-.8.714-.8h1.429c.19 0 .37.084.505.234.134.15.209.354.209.566v14.4c0 .442-.32.8-.714.8H7.857c-.394 0-.714-.358-.714-.8V.8Z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <title>Play</title>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1.984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L2.506 1.139A1 1 0 0 0 1 1.984Z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;

//
