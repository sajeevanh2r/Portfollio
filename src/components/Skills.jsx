import React, { useEffect, useRef, useState } from 'react';

// Neural network data — skill nodes & connections
const NODES = [
  // Core hub
  { id: 'core', label: 'SAJEEVAN', x: 0.5, y: 0.5, size: 18, color: '#22d3ee', category: 'hub' },

  // AI/ML
  { id: 'python', label: 'Python', x: 0.25, y: 0.25, size: 13, color: '#22d3ee', category: 'lang', level: 95 },
  { id: 'pytorch', label: 'PyTorch', x: 0.12, y: 0.42, size: 11, color: '#22d3ee', category: 'ml', level: 85 },
  { id: 'sklearn', label: 'Scikit-learn', x: 0.18, y: 0.6, size: 10, color: '#22d3ee', category: 'ml', level: 90 },
  { id: 'rag', label: 'RAG/LLM', x: 0.08, y: 0.3, size: 11, color: '#22d3ee', category: 'ml', level: 85 },
  { id: 'pandas', label: 'Pandas', x: 0.28, y: 0.12, size: 10, color: '#22d3ee', category: 'ml', level: 95 },

  // Mobile
  { id: 'flutter', label: 'Flutter', x: 0.75, y: 0.25, size: 13, color: '#818cf8', category: 'mobile', level: 92 },
  { id: 'dart', label: 'Dart', x: 0.88, y: 0.38, size: 10, color: '#818cf8', category: 'mobile', level: 90 },
  { id: 'firebase', label: 'Firebase', x: 0.82, y: 0.55, size: 10, color: '#818cf8', category: 'mobile', level: 88 },

  // BI/Data
  { id: 'tableau', label: 'Tableau', x: 0.65, y: 0.75, size: 11, color: '#10b981', category: 'bi', level: 88 },
  { id: 'powerbi', label: 'Power BI', x: 0.78, y: 0.82, size: 10, color: '#10b981', category: 'bi', level: 85 },
  { id: 'sql', label: 'SQL', x: 0.5, y: 0.82, size: 11, color: '#10b981', category: 'db', level: 90 },
  { id: 'mongodb', label: 'MongoDB', x: 0.36, y: 0.78, size: 10, color: '#10b981', category: 'db', level: 85 },

  // Web
  { id: 'react', label: 'React', x: 0.35, y: 0.65, size: 11, color: '#f59e0b', category: 'web', level: 84 },
  { id: 'nodejs', label: 'Node.js', x: 0.62, y: 0.62, size: 10, color: '#f59e0b', category: 'web', level: 82 },
  { id: 'java', label: 'Java', x: 0.72, y: 0.45, size: 9, color: '#f59e0b', category: 'lang', level: 82 },
];

const EDGES = [
  ['core', 'python'], ['core', 'flutter'], ['core', 'tableau'], ['core', 'react'], ['core', 'sql'],
  ['python', 'pytorch'], ['python', 'sklearn'], ['python', 'rag'], ['python', 'pandas'],
  ['flutter', 'dart'], ['flutter', 'firebase'],
  ['tableau', 'powerbi'], ['sql', 'mongodb'],
  ['react', 'nodejs'], ['react', 'mongodb'],
  ['python', 'core'], ['flutter', 'core'],
  ['java', 'nodejs'], ['firebase', 'nodejs'],
];

export default function Skills() {
  const canvasRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [activeNode, setActiveNode] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let frame = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const getPos = (node) => ({
      x: node.x * canvas.width,
      y: node.y * canvas.height,
    });

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw edges
      EDGES.forEach(([aId, bId]) => {
        const a = NODES.find(n => n.id === aId);
        const b = NODES.find(n => n.id === bId);
        if (!a || !b) return;
        const pa = getPos(a);
        const pb = getPos(b);

        const grad = ctx.createLinearGradient(pa.x, pa.y, pb.x, pb.y);
        grad.addColorStop(0, `${a.color}22`);
        grad.addColorStop(1, `${b.color}22`);
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Animated data pulse along edge
        const t = ((frame * 0.008) % 1);
        const px = pa.x + (pb.x - pa.x) * t;
        const py = pa.y + (pb.y - pa.y) * t;
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = `${a.color}90`;
        ctx.fill();
      });

      // Draw nodes
      NODES.forEach(node => {
        const { x, y } = getPos(node);
        const isHovered = hoveredNode === node.id;
        const isActive = activeNode === node.id;
        const r = node.size + (isHovered || isActive ? 4 : 0);

        // Glow
        const grd = ctx.createRadialGradient(x, y, 0, x, y, r * 3);
        grd.addColorStop(0, `${node.color}40`);
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(x, y, r * 3, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Node circle
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = isHovered || isActive ? node.color : `${node.color}55`;
        ctx.strokeStyle = node.color;
        ctx.lineWidth = isHovered || isActive ? 2 : 0.8;
        ctx.fill();
        ctx.stroke();

        // Label
        ctx.fillStyle = isHovered || isActive ? '#f1f5f9' : `${node.color}99`;
        ctx.font = `${isHovered ? 'bold ' : ''}10px JetBrains Mono, monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(node.label, x, y + r + 14);
      });

      raf = requestAnimationFrame(draw);
    };

    draw();

    // Mouse interaction
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      let found = null;
      NODES.forEach(node => {
        const { x, y } = getPos(node);
        const dist = Math.sqrt((mx - x) ** 2 + (my - y) ** 2);
        if (dist < node.size + 8) found = node.id;
      });
      setHoveredNode(found);
    };

    const onClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      NODES.forEach(node => {
        const { x, y } = getPos(node);
        const dist = Math.sqrt((mx - x) ** 2 + (my - y) ** 2);
        if (dist < node.size + 8) setActiveNode(id => id === node.id ? null : node.id);
      });
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('click', onClick);
      cancelAnimationFrame(raf);
    };
  }, [hoveredNode, activeNode]);

  const selectedNode = NODES.find(n => n.id === activeNode);

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-cyan-500/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <div className="text-[10px] font-mono text-cyan-500/50 tracking-widest mb-2">// SECTION_03</div>
          <h2 className="text-3xl sm:text-4xl font-black font-mono text-white">
            NEURAL<span className="text-cyan-400">_CORE</span>
          </h2>
          <p className="mt-2 text-sm font-mono text-slate-500">
            &gt;_ Click nodes to inspect modules. Hover to highlight connections.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Neural Network Canvas */}
          <div className="lg:col-span-2">
            <div className="relative terminal-panel rounded-none" style={{ height: '480px' }}>
              <div className="absolute top-3 left-4 text-[9px] font-mono text-cyan-500/40 tracking-widest z-10">
                NEURAL_MAP // {NODES.length} NODES // {EDGES.length} CONNECTIONS
              </div>
              <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ cursor: 'none' }}
              />
            </div>
          </div>

          {/* Node Inspector Panel */}
          <div className="space-y-3">
            <div className="terminal-panel p-4 rounded-none">
              <p className="text-[9px] font-mono text-cyan-500/50 tracking-widest mb-3">MODULE_INSPECTOR</p>

              {selectedNode ? (
                <div className="space-y-3">
                  <div>
                    <p className="text-[9px] font-mono text-slate-600">MODULE_ID</p>
                    <p className="text-sm font-bold font-mono text-cyan-400">{selectedNode.label.toUpperCase()}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-slate-600">CATEGORY</p>
                    <p className="text-xs font-mono text-slate-300">{selectedNode.category.toUpperCase()}</p>
                  </div>
                  {selectedNode.level && (
                    <div>
                      <div className="flex justify-between text-[9px] font-mono text-slate-600 mb-1.5">
                        <span>PROFICIENCY</span>
                        <span className="text-cyan-400">{selectedNode.level}%</span>
                      </div>
                      <div className="h-1 bg-slate-900 rounded-none">
                        <div
                          className="h-full bg-cyan-400 transition-all duration-500"
                          style={{ width: `${selectedNode.level}%` }}
                        />
                      </div>
                    </div>
                  )}
                  <button
                    onClick={() => setActiveNode(null)}
                    className="text-[9px] font-mono text-slate-600 hover:text-slate-400 transition-colors"
                  >
                    &gt; DESELECT
                  </button>
                </div>
              ) : (
                <p className="text-[11px] font-mono text-slate-600">
                  &gt;_ No module selected.<br />Click a node to inspect.
                </p>
              )}
            </div>

            {/* Category Legend */}
            <div className="terminal-panel p-4 rounded-none space-y-2">
              <p className="text-[9px] font-mono text-cyan-500/50 tracking-widest mb-3">CATEGORY_KEY</p>
              {[
                { color: '#22d3ee', label: 'AI & DATA SCIENCE' },
                { color: '#818cf8', label: 'MOBILE (FLUTTER)' },
                { color: '#10b981', label: 'BI & DATABASES' },
                { color: '#f59e0b', label: 'WEB & BACKEND' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: c.color }} />
                  <span className="text-[10px] font-mono text-slate-500">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
