"use client";

import { useUIStore } from "@/stores/uiStore";
import { DraggableWindow } from "../../draggable-window/draggable-window";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowBigRightDash, ArrowRightIcon } from "lucide-react";
import { useMusicStore } from "@/stores/musicStore";
import { useState } from "react";
import dynamic from "next/dynamic";
import { MusicQueueCard } from "./music-queue-card";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const Music = () => {
  const [url, setUrl] = useState<string>("");

  const { isMusicOpen, toggleMusic } = useUIStore();
  const { addToQueue, musicQueue, currentMusic, next } = useMusicStore();

  return (
    <DraggableWindow
      description="Play your favorites (or not) songs here"
      isOpen={isMusicOpen}
      title="Music"
      toggleIsOpen={toggleMusic}
      hideOnClose
    >
      <div className="flex gap-2 mb-5">
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        />
        <Button
          variant="outline"
          onClick={() => {
            if (url.includes("https://www.youtube.com/")) {
              addToQueue(url);
            } else {
              alert("Use an YouTube video link!");
            }
          }}
        >
          <ArrowRightIcon />
        </Button>
      </div>
      <div className="rounded-lg border border-white/40 overflow-hidden">
        <ReactPlayer
          playing={isMusicOpen}
          onEnded={next}
          controls
          url={musicQueue[currentMusic] || ""}
        />
      </div>

      <Button variant="outline" onClick={next} className="my-3">
        Next <ArrowBigRightDash />
      </Button>

      <div className="overflow-y-auto max-h-[300px]">
        {musicQueue?.map((music, index) => (
          <MusicQueueCard index={index} music={music} key={index} />
        ))}
      </div>
    </DraggableWindow>
  );
};
