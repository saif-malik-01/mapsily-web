import Link from "next/link";

export default function Button({
  children,
  mode = "container",
  border,
  href,
  onClick,
}) {
  return href ? (
    <Link
      href={href}
      className={`bg-${
        mode === "text"
          ? `transparent ${
              border ? "border" : "text-white"
            } rounded-md border-black`
          : "[#B9FD50]"
      } text-black cursor-pointer font-medium rounded-lg text-md md:px-8 px-6 py-4 focus:outline-none`}
    >
      {children}
    </Link>
  ) : onClick ? (
    <button
      onClick={onClick}
      type="button"
      className={`bg-${
        mode === "text"
          ? `transparent ${
              border ? "border" : "text-white"
            } rounded-md border-black`
          : "[#B9FD50]"
      } text-black font-medium rounded-lg text-md md:px-8 px-6 py-4 focus:outline-none`}
    >
      {children}
    </button>
  ) : (
    <p
      className={`bg-${
        mode === "text"
          ? `transparent ${
              border ? "border" : "text-white"
            } rounded-md border-black`
          : "[#B9FD50]"
      } text-black font-medium rounded-lg text-md md:px-8 px-6 py-4 focus:outline-none`}
    >
      {children}
    </p>
  );
}
