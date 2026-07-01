import { useEffect, useRef, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>/\\|~`\";:'=+-_";

export function MatrixRain({ className = "" }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const dropsRef = useRef([]);
  const fontSize = 14;

  const init = useCallback((canvas) => {
    const ctx = canvas.getContext("2d");
    const cols = Math.floor(canvas.width / fontSize);
    dropsRef.current = Array(cols).fill(1);
    return ctx;
  }, []);

  const draw = useCallback((ctx, canvas) => {
    ctx.fillStyle = "rgba(2, 2, 2, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ff41";
    ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

    const drops = dropsRef.current;
    for (let i = 0; i < drops.length; i++) {
      const text = CHARS[Math.floor(Math.random() * CHARS.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
    rafRef.current = requestAnimationFrame(() => draw(ctx, canvas));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const ctx = init(canvas);
    rafRef.current = requestAnimationFrame(() => draw(ctx, canvas));

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [init, draw]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 opacity-20 ${className}`}
    />
  );
}
