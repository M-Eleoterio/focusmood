import { Kanban, Music, NotebookPen, Timer } from "lucide-react";
import { SiderItem } from "./sider-item";

export const Sider = () => {
  return (
    <div className="z-30 flex flex-col gap-5 items-center justify-center p-5 h-[80vh]">
      <SiderItem icon={<NotebookPen />} />
      <SiderItem icon={<Timer />} />
      <SiderItem icon={<Kanban />} />
      <SiderItem icon={<Music />} />
    </div>
  );
};
