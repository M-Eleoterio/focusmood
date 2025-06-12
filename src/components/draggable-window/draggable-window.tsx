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
  toggleIsOpen: () => void;
}

export const DraggableWindow: React.FC<DraggableWindowProps> = ({
  title,
  isOpen,
  children,
  description,
  toggleIsOpen,
}) => {
  const dragControls = useDragControls();
  const dragContainerRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  return (
    <div
      ref={dragContainerRef}
      className="inset-0 flex items-center justify-center absolute w-11/12 h-screen"
    >
      <motion.div
        drag
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={dragContainerRef}
        dragMomentum={false}
      >
        <Card className="w-[400px] min-h-[400px]">
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
