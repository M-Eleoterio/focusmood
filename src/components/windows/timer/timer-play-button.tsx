import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";

interface TimerButtonProps {
  isPlaying: boolean;
  onClick: () => void;
}

export const TimerButton: React.FC<TimerButtonProps> = ({
  isPlaying,
  onClick,
}) => {
  return (
    <div className="flex gap-5 items-center">
      <Button
        onClick={onClick}
        variant="outline"
        className="rounded-full size-20"
      >
        {isPlaying ? (
          <Pause className="size-10" />
        ) : (
          <Play className="size-10" />
        )}
      </Button>
    </div>
  );
};
