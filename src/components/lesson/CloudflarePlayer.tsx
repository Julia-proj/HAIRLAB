"use client";

import { Stream } from "@cloudflare/stream-react";

interface Props {
  videoId: string;
  poster?: string;
}

function PlayIcon() {
  return (
    <div className="w-[52px] h-[52px] rounded-full bg-cream-50 flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <polygon points="6,3 17,10 6,17" fill="#2C2825" />
      </svg>
    </div>
  );
}

function Placeholder() {
  return (
    <div
      className="w-full relative flex items-center justify-center"
      style={{ aspectRatio: "16/9", background: "#2C2825" }}
    >
      <PlayIcon />
      <span
        className="absolute bottom-3 right-3 font-sans font-normal text-cream-100"
        style={{
          fontSize: "11px",
          background: "rgba(0,0,0,0.5)",
          padding: "2px 6px",
          borderRadius: "4px",
        }}
      >
        2:47
      </span>
    </div>
  );
}

export default function CloudflarePlayer({ videoId, poster }: Props) {
  if (videoId === "placeholder") return <Placeholder />;

  return (
    <div className="w-full" style={{ aspectRatio: "16/9" }}>
      <Stream controls src={videoId} poster={poster} />
    </div>
  );
}
