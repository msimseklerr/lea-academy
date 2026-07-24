import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
}: Props) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const variants = {
    primary:
      "bg-indigo-600 hover:bg-indigo-700 text-white hover:scale-[1.02] hover:shadow-lg",
    secondary:
      "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:scale-[1.02]",
  };
  return (
    <Link href={href} className={`${base} ${sizes[size]} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
