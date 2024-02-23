"use client";

import { Chapter } from "@prisma/client";
import { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

import { cn } from "@/lib/utils";

interface ChapterListProps {
  items: Chapter[];
  onReorder: (updateData: { id: string; position: number }[]) => void;
  onEdit: (id: string) => void;
}

export const ChapterList = ({ items, onReorder, onEdit }: ChapterListProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [chapters, setChapters] = useState(items);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setChapters(items);
  }, [items]);

  if (!isMounted) {
    return null;
  }

  return;
  <DragDropContext onDragEnd={() => {}}>
    <Droppable droppableId="chapters">
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {chapters.map((chapter, index) => (
            <Draggable key={chapter.id} draggableId={chapter.id} index={index}>
              {(provided) => <div className={cn()}></div>}
            </Draggable>
          ))}
        </div>
      )}
    </Droppable>
  </DragDropContext>;
};
