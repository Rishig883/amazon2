import { motion } from "framer-motion";

export default function Screenshot() {
  return (
    <section className="relative py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-card/30 border border-border/30">
          {/* Dashboard mockup using SVG */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 675"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Header */}
            <rect x="0" y="0" width="1200" height="48" fill="hsl(var(--card))" opacity="0.4" />
            <rect x="20" y="16" width="120" height="16" rx="2" fill="hsl(var(--primary))" opacity="0.5" />
            <rect x="1060" y="16" width="120" height="16" rx="2" fill="hsl(var(--muted))" opacity="0.3" />

            {/* Sidebar */}
            <rect x="0" y="48" width="240" height="627" fill="hsl(var(--card))" opacity="0.4" />
            {[0, 1, 2, 3, 4].map((i) => (
              <rect 
                key={i} 
                x="20" 
                y={88 + i * 40} 
                width="200" 
                height="24" 
                rx="4" 
                fill={i === 0 ? "hsl(var(--primary))" : "hsl(var(--muted))"}
                opacity={i === 0 ? 0.5 : 0.3} 
              />
            ))}

            {/* Main content */}
            <rect x="260" y="68" width="920" height="40" rx="4" fill="hsl(var(--primary))" opacity="0.2" />

            {/* Cards grid */}
            {[0, 1, 2].map((row) => (
              <g key={row}>
                {[0, 1, 2].map((col) => (
                  <g key={`${row}-${col}`}>
                    {/* Card background with subtle gradient */}
                    <rect
                      x={260 + col * 300}
                      y={128 + row * 160}
                      width="280"
                      height="140"
                      rx="8"
                      fill="url(#cardGradient)"
                      stroke="hsl(var(--border))"
                      strokeOpacity="0.3"
                      strokeWidth="1"
                    />

                    {/* Card content */}
                    <rect
                      x={276 + col * 300}
                      y={144 + row * 160}
                      width="180"
                      height="12"
                      rx="2"
                      fill="hsl(var(--primary))"
                      opacity="0.4"
                    />
                    <rect
                      x={276 + col * 300}
                      y={164 + row * 160}
                      width="248"
                      height="8"
                      rx="2"
                      fill="hsl(var(--muted))"
                      opacity="0.3"
                    />
                    <rect
                      x={276 + col * 300}
                      y={180 + row * 160}
                      width="248"
                      height="8"
                      rx="2"
                      fill="hsl(var(--muted))"
                      opacity="0.3"
                    />

                    {/* Accent elements */}
                    <circle
                      cx={516 + col * 300}
                      cy={150 + row * 160}
                      r="8"
                      fill="hsl(var(--primary))"
                      opacity="0.4"
                    />
                  </g>
                ))}
              </g>
            ))}

            {/* Gradients definitions */}
            <defs>
              <linearGradient id="cardGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="hsl(var(--card))" stopOpacity="0.4" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}