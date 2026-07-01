import { useState } from "react";

export function GlitchText({ text, className = "" }) {
  const [isGlitching, setIsGlitching] = useState(false);

  const handleMouseEnter = () => setIsGlitching(true);
  const handleMouseLeave = () => setIsGlitching(false);

  return (
    <span
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="relative z-10">{text}</span>
      {isGlitching && (
        <>
          <span
            className="absolute inset-0 text-alert opacity-70 z-0"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)",
              transform: "translate(-3px, 0)",
              animation: "glitch 0.15s infinite linear alternate-reverse",
            }}
          >
            {text}
          </span>
          <span
            className="absolute inset-0 text-accent opacity-70 z-0"
            style={{
              clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
              transform: "translate(3px, 0)",
              animation: "glitch 0.15s infinite linear alternate",
            }}
          >
            {text}
          </span>
        </>
      )}
    </span>
  );
}
