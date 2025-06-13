"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useMusicStore } from "@/stores/musicStore";
import { Trash } from "lucide-react";

interface MusicQueueCardProps {
  index: number;
  music: string;
}

export const MusicQueueCard: React.FC<MusicQueueCardProps> = ({
  index,
  music,
}) => {
  const { currentMusic, jumpTo, removeFromQueue } = useMusicStore();

  return (
    <Card
      className={`my-3 ${currentMusic === index ? "bg-white/10" : ""}`}
      key={index}
    >
      <CardContent className="flex w-full justify-between">
        <p onClick={() => jumpTo(index)} className="cursor-pointer">
          {index} | {music}
        </p>
        <Trash
          color="red"
          className="cursor-pointer"
          onClick={() => removeFromQueue(index)}
        />
      </CardContent>
    </Card>
  );
};
