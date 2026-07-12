import { useEffect, useRef } from "react";

const CodeRain = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let w, h;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouse);

    const words = "const let var if else for while function return class import export async await switch case break continue try catch throw new this void null undefined true false API CSS HTML SQL DOM".split(" ");

    const columns = Math.floor(w / 30);
    const drops = Array.from({ length: columns }, () => Math.random() * -100);
    const speeds = Array.from({ length: columns }, () => 0.2 + Math.random() * 0.5);
    const wordIdx = Array.from({ length: columns }, () => Math.floor(Math.random() * words.length));

    let frame = 0;

    const draw = () => {
      ctx.fillStyle = "rgba(7, 7, 13, 0.06)";
      ctx.fillRect(0, 0, w, h);

      const mx = mouse.current.x;
      const my = mouse.current.y;

      // Soft mouse glow
      if (mx > 0 && my > 0) {
        const grad = ctx.createRadialGradient(mx, my, 0, mx, my, 200);
        grad.addColorStop(0, "rgba(124, 58, 237, 0.025)");
        grad.addColorStop(1, "rgba(7, 7, 13, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }

      ctx.font = "13px 'JetBrains Mono', monospace";

      for (let i = 0; i < drops.length; i++) {
        const x = i * 30;
        const y = drops[i] * 24;

        const dx = x - mx;
        const dy = y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const proximity = Math.max(0, 1 - dist / 400);

        // Base color: very muted purple
        const alpha = 0.08 + proximity * 0.18;
        ctx.fillStyle = `rgba(148, 130, 180, ${alpha})`;

        const word = words[wordIdx[i]];
        ctx.fillText(word, x, y);

        // Reset word occasionally
        if (frame % 40 === 0 && Math.random() > 0.92) {
          wordIdx[i] = Math.floor(Math.random() * words.length);
        }

        drops[i] += speeds[i];

        if (y > h + 50) {
          drops[i] = Math.random() * -20;
          wordIdx[i] = Math.floor(Math.random() * words.length);
          speeds[i] = 0.2 + Math.random() * 0.5;
        }
      }

      frame++;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default CodeRain;
