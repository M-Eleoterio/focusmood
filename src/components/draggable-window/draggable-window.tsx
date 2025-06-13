"use client";

import { X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { motion, useDragControls } from "framer-motion";
import { useRef } from "react";

interface DraggableWindowProps {
  title: string;
  isOpen: boolean;
  children: React.ReactNode;
  description: string;
  hideOnClose?: boolean;
  toggleIsOpen: () => void;
}

export const DraggableWindow: React.FC<DraggableWindowProps> = ({
  title,
  isOpen,
  children,
  description,
  hideOnClose = false,
  toggleIsOpen,
}) => {
  const dragControls = useDragControls();
  const dragContainerRef = useRef<HTMLDivElement>(null);

  const minimized = hideOnClose && !isOpen;

  if (!isOpen && !hideOnClose) return null;

  return (
    <div
      ref={dragContainerRef}
      className={`inset-0 flex ${
        minimized ? "hidden" : ""
      } items-center justify-center absolute w-11/12 h-screen pointer-events-none`}
    >
      <motion.div
        drag
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={dragContainerRef}
        dragMomentum={false}
        className="pointer-events-auto"
      >
        <Card className="min-w-[400px] min-h-[400px]">
          <CardHeader
            onPointerDown={(e) => dragControls.start(e)}
            className="cursor-grab active:cursor-grabbing"
          >
            <div className="flex w-full justify-between">
              <CardTitle>{title}</CardTitle>
              <X className="cursor-pointer" onClick={toggleIsOpen} />
            </div>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
