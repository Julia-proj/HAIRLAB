import type { Metadata } from "next";
import CourseContentsScreen from "@/components/landing/CourseContentsScreen";

export const metadata: Metadata = {
  title: "Содержание курса | Keratin Madrid",
  description: "Пять уроков. Реальная система восстановления волос.",
};

export default function Screen8Page() {
  return <CourseContentsScreen />;
}
