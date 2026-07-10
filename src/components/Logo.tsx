import React from "react";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  // Determine optimized height based on size prop
  const heightClass =
    size === "sm"
      ? "h-10 sm:h-12 md:h-13"
      : size === "lg"
      ? "h-16 sm:h-20 md:h-24"
      : "h-12 sm:h-14 md:h-16";

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src="/logo.png"
        alt="Star Pest Control - Safeguard Your Space"
        className={`${heightClass} w-auto object-contain transition-all duration-300`}
      />
    </div>
  );
}

