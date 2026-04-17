import FreeLessonScreen from "@/components/lesson/FreeLessonScreen";

export const metadata = {
  title: "Бесплатный урок — Keratin Madrid",
  description: "Почему твои волосы не восстанавливаются: три ошибки, которые всё усложняют",
};

export default function FreeLessonPage() {
  const videoId = process.env.NEXT_PUBLIC_FREE_LESSON_VIDEO_ID ?? "placeholder";
  return <FreeLessonScreen videoId={videoId} />;
}
