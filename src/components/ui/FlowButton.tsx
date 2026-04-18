interface Props {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit";
}

export default function FlowButton({
  onClick,
  children,
  disabled,
  type = "button",
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full inline-flex items-center justify-center min-h-[56px] px-8 bg-sage hover:bg-sage-dark active:scale-[0.98] text-cream-50 font-sans text-base font-medium rounded-[8px] border-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(124,140,110,0.4)] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}
