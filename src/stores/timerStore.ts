import { create } from "zustand";

type TimerMode = "pomodoro" | "shortBreak" | "longBreak";

interface TimerState {
  mode: TimerMode;
  timeLeft: number;
  isTimerRunning: boolean;
  changeMode: (mode: TimerMode) => void;
  setTimeLeft: (timeLeft: number) => void;
  toggleTimerPause: () => void;
  resetTimer: () => void;
  decrementTimeLeft: () => void;
}

export const timeModeMap: Record<TimerMode, number> = {
  pomodoro: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
};

export const useTimerStore = create<TimerState>((set) => ({
  mode: "pomodoro",
  timeLeft: timeModeMap["pomodoro"],
  isTimerRunning: false,

  changeMode: (mode: TimerMode) => set({ mode, timeLeft: timeModeMap[mode] }),
  setTimeLeft: (timeLeft: number) => set({ timeLeft }),
  resetTimer: () =>
    set({
      mode: "pomodoro",
      timeLeft: timeModeMap["pomodoro"],
      isTimerRunning: false,
    }),
  toggleTimerPause: () =>
    set((state) => ({ isTimerRunning: !state.isTimerRunning })),
  decrementTimeLeft: () => set((state) => ({ timeLeft: state.timeLeft - 1 })),
}));
