import { useState, useEffect, useCallback } from "react";

export function TerminalType({ text, speed = 50, className = "" }) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const type = useCallback(() => {
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  useEffect(() => {
    const cleanup = type();
    return cleanup;
  }, [type]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((s) => !s), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <span className={`font-mono ${className}`}>
      {displayed}
      <span
        className="inline-block w-[2px] h-[1.2em] bg-accent ml-0.5 align-middle"
        style={{ opacity: showCursor ? 1 : 0, transition: "opacity 0.1s" }}
      />
    </span>
  );
}
