import { CHECKOUT_INCLUDES } from "@/lib/content/checkout";

const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="flex-shrink-0">
    <path
      d="M8 1.5L2 4v4c0 3.3 2.5 5.9 6 6.5 3.5-.6 6-3.2 6-6.5V4L8 1.5z"
      stroke="#7C8C6E"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export default function IncludesList() {
  return (
    <div className="px-5 mb-6">
      <p className="font-sans text-[13px] font-medium text-charcoal mb-[14px]">
        Что ты получаешь
      </p>
      <div className="bg-cream-100 border border-cream-300 rounded-[12px] px-4 py-[18px]">
        <div className="flex flex-col" style={{ gap: "10px" }}>
          {CHECKOUT_INCLUDES.map((item) => (
            <div key={item} className="flex items-start" style={{ gap: "10px" }}>
              <div
                className="rounded-full bg-sage flex-shrink-0"
                style={{ width: "6px", height: "6px", marginTop: "5px" }}
              />
              <p className="font-sans text-[14px] text-charcoal leading-[1.4]">
                {item}
              </p>
            </div>
          ))}
        </div>
        <div className="border-t border-cream-300 mt-[14px] pt-3 flex items-center gap-2">
          <ShieldIcon />
          <p className="font-sans text-[13px] text-charcoal-light">
            Возврат в течение 14 дней если курс не подошёл
          </p>
        </div>
      </div>
    </div>
  );
}
