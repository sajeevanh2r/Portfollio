import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;

    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    });

    // Data stream particles — vertical falling columns (Matrix-style but subtle)
    const columns = Math.floor(W / 48);
    const drops = Array.from({ length: columns }, () => Math.random() * H);

    const chars = '01アイウエオカキクケコRGBXMLCORE01';

    let frame = 0;

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, W, H);

      // Very subtle circuit grid
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.03)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x < W; x += 40) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += 40) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Sparse falling data glyphs
      if (frame % 3 === 0) {
        ctx.font = '11px JetBrains Mono, monospace';
        for (let i = 0; i < columns; i++) {
          if (Math.random() > 0.96) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            const x = i * 48;
            const y = drops[i];

            const alpha = 0.06 + Math.random() * 0.08;
            ctx.fillStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx.fillText(char, x, y);

            drops[i] += 14;
            if (drops[i] > H + 50) drops[i] = -20;
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Deep ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/4 rounded-full blur-[120px]" />
      {/* Canvas data streams */}
      <canvas ref={canvasRef} className="w-full h-full opacity-100" />
    </div>
  );
}
