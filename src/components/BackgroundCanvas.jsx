import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // 3D Particles with Z-depth
    const particleCount = Math.min(Math.floor((width * height) / 16000), 65);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 800 + 100, // Z depth
        vz: Math.random() * 0.4 + 0.2, // Move forward in 3D
        radius: Math.random() * 2 + 1,
        color: i % 4 === 0 ? '#38bdf8' : i % 4 === 1 ? '#818cf8' : i % 4 === 2 ? '#34d399' : '#f43f5e',
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX - width / 2) * 0.15;
      targetMouseY = (e.clientY - height / 2) * 0.15;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth camera interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const fov = 400; // Field of view
      const centerX = width / 2 - mouseX;
      const centerY = height / 2 - mouseY;

      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle towards camera in Z space
        p.z -= p.vz;
        if (p.z <= 10) {
          p.z = 800;
          p.x = (Math.random() - 0.5) * width * 1.5;
          p.y = (Math.random() - 0.5) * height * 1.5;
        }

        // 3D to 2D projection
        const scale = fov / (fov + p.z);
        const projX = centerX + p.x * scale;
        const projY = centerY + p.y * scale;
        const projRadius = Math.max(p.radius * scale * 1.6, 0.6);
        const alpha = Math.min(Math.max((1 - p.z / 800) * 0.8, 0.1), 0.9);

        projected.push({
          x: projX,
          y: projY,
          z: p.z,
          radius: projRadius,
          color: p.color,
          alpha,
        });

        // Draw particle
        ctx.beginPath();
        ctx.arc(projX, projY, projRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
      }

      // Draw 3D interconnections between close projected points
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = Math.abs(p1.z - p2.z);
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120 && dz < 180) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#38bdf8';
            ctx.globalAlpha = (1 - dist / 120) * (1 - dz / 180) * 0.22;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 3D Deep Space Ambient Glow Orbs */}
      <div className="glow-ambient w-[600px] h-[600px] -top-40 -left-40 bg-blue-600/20" />
      <div className="glow-ambient w-[600px] h-[600px] top-1/3 -right-40 bg-rose-600/15" />
      <div className="glow-ambient w-[600px] h-[600px] -bottom-40 left-1/3 bg-cyan-600/15" />
      
      {/* Subtle 3D Perspective Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          perspective: '600px',
          transform: 'rotateX(40deg)',
          transformOrigin: 'top center'
        }}
      />

      <canvas ref={canvasRef} className="w-full h-full opacity-70" />
    </div>
  );
}
