"use client";

import { useUIStore } from "@/stores/uiStore";
import { DraggableWindow } from "../../draggable-window/draggable-window";
import { timeModeMap, useTimerStore } from "@/stores/timerStore";
import dayjs from "dayjs";
import { Progress } from "@/components/ui/progress";
import { useEffect } from "react";
import { TimerButton } from "./timer-play-button";
import { Button } from "@/components/ui/button";

export const Timer = () => {
  const {
    timeLeft,
    mode,
    isTimerRunning,
    decrementTimeLeft,
    toggleTimerPause,
    changeMode,
  } = useTimerStore();
  const { toggleTimer, isTimerOpen } = useUIStore();

  const remainingTime = dayjs.unix(timeLeft).format("mm:ss");

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined;

    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        decrementTimeLeft();
      }, 1000);
    } else if (isTimerRunning && timeLeft <= 0) {
      toggleTimerPause();
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isTimerRunning, timeLeft, decrementTimeLeft, toggleTimerPause]);

  return (
    <DraggableWindow
      description="Time your session"
      isOpen={isTimerOpen}
      title="Timer"
      toggleIsOpen={toggleTimer}
    >
      <div className="flex text-center gap-8 justify-center items-center flex-col">
        <div className="text-6xl">{remainingTime}</div>
        <Progress
          value={(timeLeft / timeModeMap[mode]) * 100}
          max={timeModeMap[mode]}
        />
        <TimerButton isPlaying={isTimerRunning} onClick={toggleTimerPause} />

        <div className="flex gap-5">
          <Button variant="secondary" onClick={() => changeMode("pomodoro")}>
            <span className="text-sm">Pomodoro</span>
          </Button>
          <Button variant="secondary" onClick={() => changeMode("shortBreak")}>
            <span className="text-sm">Short Break</span>
          </Button>
          <Button variant="secondary" onClick={() => changeMode("longBreak")}>
            <span className="text-sm">Long Break</span>
          </Button>
        </div>
      </div>
    </DraggableWindow>
  );
};
