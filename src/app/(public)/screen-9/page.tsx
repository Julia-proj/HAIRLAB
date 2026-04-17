import type { Metadata } from "next";
import ProofScreen from "@/components/landing/ProofScreen";

export const metadata: Metadata = {
  title: "Доказательства и доступность | Keratin Madrid",
  description: "Курс восстановления волос. 39 евро, доступ навсегда.",
};

export default function Screen9Page() {
  return <ProofScreen />;
}
