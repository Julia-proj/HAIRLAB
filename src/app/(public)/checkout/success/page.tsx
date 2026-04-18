import Link from "next/link";

export const metadata = {
  title: "Оплата прошла — Keratin Madrid",
};

interface Props {
  searchParams: Promise<{ session_id?: string }>;
}

export default async function CheckoutSuccessPage({ searchParams }: Props) {
  // session_id retained for future webhook-based access verification
  const _params = await searchParams;
  void _params;

  return (
    <div className="bg-cream-50 min-h-screen flex flex-col items-center justify-center px-5 text-center">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        className="mb-6"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="22" stroke="#7C8C6E" strokeWidth="2" />
        <path
          d="M14 24l7 7 13-14"
          stroke="#7C8C6E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <h2 className="font-serif font-normal text-[28px] tracking-[-0.01em] text-charcoal mb-3">
        Оплата прошла успешно
      </h2>

      <p className="font-sans text-[15px] text-charcoal-light leading-relaxed mb-8 max-w-[320px]">
        Мы отправили письмо с доступом на твою почту.
      </p>

      <Link
        href="/dashboard"
        className="inline-flex items-center justify-center bg-sage hover:bg-sage-dark text-cream-50 font-sans text-base font-medium rounded-[8px] py-[15px] px-8 transition-all duration-200 active:scale-[0.98]"
      >
        Перейти в курс
      </Link>
    </div>
  );
}
