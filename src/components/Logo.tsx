import React from "react";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", showTagline = true, size = "md" }: LogoProps) {
  const isSm = size === "sm";
  const isLg = size === "lg";

  // Sizing multipliers matching reference proportions
  const starSize = isSm ? 42 : isLg ? 84 : 62;
  const fontSizeStar = isSm ? "text-xl" : isLg ? "text-4xl" : "text-3xl";
  const fontSizePest = isSm ? "text-xl" : isLg ? "text-4xl" : "text-3xl";
  const fontSizeControl = isSm ? "text-[8.5px]" : isLg ? "text-[14px]" : "text-[11.5px]";
  const fontSizeTag = isSm ? "text-[6.5px]" : isLg ? "text-[11px]" : "text-[8.5px]";

  return (
    <div className={`flex items-center gap-2 sm:gap-3 select-none ${className}`}>
      {/* Star Emblem on Left matching exact reference logo */}
      <svg
        width={starSize}
        height={starSize}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform hover:scale-105 duration-300"
      >
        {/* Left half of 5-pointed star (Purple #4B164C) */}
        <path
          d="M60 8 L44 43 L8 45 L36 69 L26 109 L60 86"
          stroke="#4B164C"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Right half of 5-pointed star (Orange #F15A24) */}
        <path
          d="M60 86 L94 109 L84 69 L112 45 L76 43 L60 8"
          stroke="#F15A24"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Center stylized SPC text inside the Star */}
        <g transform="translate(60, 62)">
          {/* S - Purple */}
          <text
            x="-16"
            y="-2"
            fontFamily="Space Grotesk, system-ui, sans-serif"
            fontWeight="900"
            fontSize="24"
            fill="#4B164C"
            textAnchor="middle"
          >
            S
          </text>
          {/* P - Orange */}
          <text
            x="2"
            y="10"
            fontFamily="Space Grotesk, system-ui, sans-serif"
            fontWeight="900"
            fontSize="24"
            fill="#F15A24"
            textAnchor="middle"
          >
            P
          </text>
          {/* C - Purple */}
          <text
            x="18"
            y="21"
            fontFamily="Space Grotesk, system-ui, sans-serif"
            fontWeight="900"
            fontSize="23"
            fill="#4B164C"
            textAnchor="middle"
          >
            C
          </text>
        </g>
      </svg>

      {/* Typography Logo Text on Right matching reference logo */}
      <div className="flex flex-col justify-center leading-none">
        {/* TOP ROW: STAR PEST */}
        <div className="flex items-center font-display font-black tracking-tight select-none">
          {/* ST */}
          <span className={`${fontSizeStar} text-[#4B164C] font-extrabold uppercase`}>
            ST
          </span>
          
          {/* Letter 'A' triangle emblem with white Ant Silhouette */}
          <span className="inline-flex items-center justify-center mx-[1.5px] relative" style={{ height: "1.1em", width: "1.1em" }}>
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Purple Triangle A Base */}
              <path d="M50 8 L92 88 L8 88 Z" fill="#4B164C" />
              
              {/* White Ant Silhouette inside triangle A */}
              {/* Head */}
              <circle cx="50" cy="35" r="6" fill="white" />
              {/* Antennae */}
              <path d="M47 31 Q42 24 36 26" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M53 31 Q58 24 64 26" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              
              {/* Thorax */}
              <ellipse cx="50" cy="51" rx="6.5" ry="8.5" fill="white" />
              
              {/* Legs left */}
              <path d="M44 47 Q34 43 27 41" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M43 51 L25 51" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M44 55 Q34 61 27 65" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              
              {/* Legs right */}
              <path d="M56 47 Q66 43 73 41" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M57 51 L75 51" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M56 55 Q66 61 73 65" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />

              {/* Abdomen */}
              <ellipse cx="50" cy="71" rx="8.5" ry="11" fill="white" />
            </svg>
          </span>

          {/* R */}
          <span className={`${fontSizeStar} text-[#4B164C] font-extrabold uppercase mr-1.5`}>
            R
          </span>

          {/* PEST */}
          <span className={`${fontSizePest} text-[#F15A24] font-extrabold uppercase`}>
            PEST
          </span>
        </div>

        {/* MIDDLE ROW: CONTROL */}
        <div
          className={`${fontSizeControl} font-display font-bold text-[#4B164C] tracking-[0.41em] uppercase mt-0.5 select-none`}
        >
          CONTROL
        </div>

        {/* BOTTOM ROW: — SAFEGUARD YOUR SPACE — */}
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-1 w-full select-none">
            <span className="h-[1px] flex-1 bg-[#4B164C]/35"></span>
            <span className={`${fontSizeTag} font-display font-semibold italic tracking-[0.14em] text-[#F15A24] uppercase whitespace-nowrap`}>
              SAFEGUARD YOUR SPACE
            </span>
            <span className="h-[1px] flex-1 bg-[#4B164C]/35"></span>
          </div>
        )}
      </div>
    </div>
  );
}

