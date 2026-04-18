"use client";

import Link from "next/link";
import { getNextPath } from "@/lib/flow/steps";
import { usePathname } from "next/navigation";

interface Props {
  label: string;
}

export default function FlowPlaceholder({ label }: Props) {
  const pathname = usePathname();
  const next = getNextPath(pathname);

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col items-center justify-center gap-6 px-5">
      <p className="font-serif text-[28px] text-charcoal">{label}</p>
      {next && (
        <Link
          href={next}
          className="inline-flex items-center justify-center bg-sage hover:bg-sage-dark text-cream-50 font-sans text-base font-medium rounded-[8px] py-[15px] px-8 transition-all duration-200 active:scale-[0.98]"
        >
          Далее
        </Link>
      )}
    </div>
  );
}
