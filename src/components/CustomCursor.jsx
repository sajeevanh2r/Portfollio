import React, { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState('');
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e) => {
      const el = e.target.closest('a, button, [data-cursor]');
      if (el) {
        setHovering(true);
        setLabel(el.dataset.cursor || 'INTERACT');
      } else {
        setHovering(false);
        setLabel('');
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);

    const animate = () => {
      // Snap dot to cursor
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x - 6}px, ${pos.current.y - 6}px)`;
      }
      // Lag ring
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 18}px, ${ring.current.y - 18}px)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {/* Core dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[99999] pointer-events-none w-3 h-3"
        style={{ willChange: 'transform' }}
      >
        <div className={`w-3 h-3 rounded-full transition-all duration-100 ${hovering ? 'bg-cyan-400 scale-150' : 'bg-cyan-400'}`} />
      </div>

      {/* Targeting Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[99998] pointer-events-none w-9 h-9"
        style={{ willChange: 'transform' }}
      >
        {hovering ? (
          /* Targeting bracket — expanded */
          <div className="relative w-9 h-9">
            {/* Corners */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />
            {/* Label */}
            {label && (
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] text-cyan-400 whitespace-nowrap tracking-widest font-mono">
                {label}
              </div>
            )}
          </div>
        ) : (
          /* Crosshair ring */
          <div className="w-9 h-9 rounded-full border border-cyan-500/40 flex items-center justify-center">
            <div className="w-0.5 h-3 bg-cyan-500/50 absolute" />
            <div className="w-3 h-0.5 bg-cyan-500/50 absolute" />
          </div>
        )}
      </div>
    </>
  );
}
