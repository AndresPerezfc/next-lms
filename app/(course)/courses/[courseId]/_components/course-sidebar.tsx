import { Chapter, Course, UserProgress } from "@prisma/client";

interface CourseSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}

export const CourseSidebar = ({
  course,
  progressCount,
}: CourseSidebarProps) => {
  return <div>Sidebar!</div>;
};
