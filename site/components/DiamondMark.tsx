export function DiamondMark({
  className = "",
  size = 14,
  "aria-hidden": ariaHidden = true,
}: {
  className?: string;
  size?: number;
  "aria-hidden"?: boolean;
}) {
  return (
    <svg
      aria-hidden={ariaHidden}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path d="M12 2l10 10-10 10L2 12 12 2z" />
      <path d="M12 6l6 6-6 6-6-6 6-6z" />
    </svg>
  );
}
