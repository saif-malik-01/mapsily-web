export default function Button({
  children,
  mode = "container",
  border,
  href,
  onClick,
}) {
  return href ? (
    <a
      href={href}
      className={`bg-${
        mode === "text"
          ? `transparent ${
              border ? "border" : "text-white"
            } rounded-md border-black`
          : "[#B9FD50]"
      } text-black cursor-pointer font-medium rounded-lg text-sm md:px-8 px-6 py-3 me-2 mb-2 focus:outline-none`}
    >
      {children}
    </a>
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
      } text-black font-medium rounded-lg text-sm md:px-8 px-6 py-3 me-2 mb-2 focus:outline-none`}
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
      } text-black font-medium rounded-lg text-sm md:px-8 px-6 py-3 me-2 mb-2 focus:outline-none`}
    >
      {children}
    </p>
  );
}
