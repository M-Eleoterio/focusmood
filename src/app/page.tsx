import { Kanban } from "@/components/windows/kanban/kanban";
import { Music } from "@/components/windows/music/music";
import { Notes } from "@/components/windows/notes/notes";
import { Timer } from "@/components/windows/timer/timer";

export default function Home() {
  return (
    <div className="size-full relative">
      <Music />
      <Notes />
      <Timer />
      <Kanban />
    </div>
  );
}
