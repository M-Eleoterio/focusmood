import { Notes } from "@/components/windows/notes/notes";
import { Timer } from "@/components/windows/timer/timer";

export default function Home() {
  return (
    <div className="size-full relative">
      <Notes />
      <Timer />
    </div>
  );
}
