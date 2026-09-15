import type { Project } from "@/data/projects";

interface CoverProps {
  type: Project["cover"];
}

function Grid({ className }: { className?: string }) {
  return (
    <g className={className} stroke="rgba(255,255,255,0.05)" strokeWidth="1">
      {Array.from({ length: 12 }).map((_, x) => (
        <line key={`x${x}`} x1={x * 70} y1="0" x2={x * 70} y2="450" />
      ))}
      {Array.from({ length: 7 }).map((_, y) => (
        <line key={`y${y}`} x1="0" y1={y * 70} x2="800" y2={y * 70} />
      ))}
    </g>
  );
}

function Node({
  x,
  y,
  w,
  label,
  sub,
}: {
  x: number;
  y: number;
  w: number;
  label: string;
  sub?: string;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height="44"
        rx="6"
        fill="rgba(13,15,18,0.9)"
        stroke="rgba(52,211,153,0.45)"
      />
      <text
        x={x + w / 2}
        y={y + (sub ? 18 : 27)}
        textAnchor="middle"
        fill="#f5f6f7"
        fontSize="13"
        fontWeight="600"
        fontFamily="ui-monospace, monospace"
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + 33}
          textAnchor="middle"
          fill="rgba(154,163,173,0.9)"
          fontSize="9"
          fontFamily="ui-monospace, monospace"
        >
          {sub}
        </text>
      )}
    </g>
  );
}

function Arrow({ x1, x2, y }: { x1: number; x2: number; y: number }) {
  return (
    <g stroke="rgba(52,211,153,0.5)" strokeWidth="1.5">
      <line x1={x1} y1={y} x2={x2} y2={y} />
      <path
        d={`M ${x2} ${y} l -6 -4 m 6 4 l -6 4`}
        fill="none"
        stroke="rgba(52,211,153,0.5)"
        strokeWidth="1.5"
      />
    </g>
  );
}

function Lines({ x, y, count, w = 130 }: { x: number; y: number; count: number; w?: number }) {
  return (
    <g>
      {Array.from({ length: count }).map((_, i) => (
        <rect
          key={i}
          x={x}
          y={y + i * 16}
          width={i === 0 ? w : w - 40}
          height="6"
          rx="3"
          fill={i === 0 ? "rgba(52,211,153,0.55)" : "rgba(255,255,255,0.14)"}
        />
      ))}
    </g>
  );
}

function GymCover() {
  return (
    <g>
      <rect x="0" y="0" width="800" height="450" fill="#0d0f12" />
      <Grid />
      <rect x="14" y="14" width="160" height="422" rx="10" fill="rgba(13,15,18,0.85)" stroke="rgba(255,255,255,0.1)" />
      <rect x="32" y="34" width="80" height="8" rx="4" fill="rgba(52,211,153,0.8)" />
      {Array.from({ length: 5 }).map((_, i) => (
        <rect
          key={i}
          x="32"
          y={64 + i * 30}
          width={i === 1 ? 96 : 84}
          height="6"
          rx="3"
          fill={i === 1 ? "rgba(52,211,153,0.5)" : "rgba(255,255,255,0.14)"}
        />
      ))}
      <text x="204" y="46" fill="#f5f6f7" fontSize="15" fontWeight="600" fontFamily="ui-monospace, monospace">
        Member Dashboard
      </text>
      <text x="204" y="64" fill="rgba(154,163,173,0.9)" fontSize="10" fontFamily="ui-monospace, monospace">
        GYMFLOW CRM / ADMIN
      </text>
      {[
        { x: 204, w: 150, l: "Members", v: "1,248" },
        { x: 372, w: 150, l: "Revenue", v: "$86,4k" },
        { x: 540, w: 150, l: "Attendance", v: "92%" },
      ].map((tile) => (
        <g key={tile.l}>
          <rect x={tile.x} y="84" width={tile.w} height="74" rx="8" fill="rgba(13,15,18,0.85)" stroke="rgba(255,255,255,0.1)" />
          <text x={tile.x + 14} y="110" fill="rgba(154,163,173,0.9)" fontSize="10" fontFamily="ui-monospace, monospace">
            {tile.l}
          </text>
          <text x={tile.x + 14} y="138" fill="rgba(52,211,153,0.95)" fontSize="18" fontWeight="600" fontFamily="ui-monospace, monospace">
            {tile.v}
          </text>
        </g>
      ))}
      <rect x="204" y="178" width="486" height="164" rx="8" fill="rgba(13,15,18,0.85)" stroke="rgba(255,255,255,0.1)" />
      {Array.from({ length: 6 }).map((_, i) => (
        <g key={i}>
          <rect x="224" y={196 + i * 22} width="440" height="7" rx="3.5" fill="rgba(255,255,255,0.09)" />
          <rect x="224" y={196 + i * 22} width={i === 0 ? 260 : i === 1 ? 190 : 130 - i * 10} height="7" rx="3.5" fill={i % 2 === 0 ? "rgba(52,211,153,0.5)" : "rgba(154,163,173,0.35)"} />
        </g>
      ))}
      <rect x="204" y="362" width="486" height="74" rx="8" fill="rgba(13,15,18,0.85)" stroke="rgba(255,255,255,0.1)" />
      {[
        { x: 230, w: 70 },
        { x: 330, w: 110 },
        { x: 470, w: 90 },
      ].map((bar, i) => (
        <g key={i}>
          <rect x={bar.x} y={404} width={bar.w} height="12" rx="4" fill="rgba(52,211,153,0.35)" />
          <rect x={bar.x + 4} y={404} width={bar.w - 8} height="4" rx="2" fill="rgba(52,211,153,0.9)" />
        </g>
      ))}
      <rect x="620" y="374" width="52" height="14" rx="7" fill="rgba(52,211,153,0.85)" />
      <text x="646" y="384" textAnchor="middle" fill="#08090b" fontSize="8" fontWeight="700" fontFamily="ui-monospace, monospace">
        LIVE
      </text>
    </g>
  );
}

function BusinessCover() {
  return (
    <g>
      <rect x="0" y="0" width="800" height="450" fill="#0d0f12" />
      <Grid />
      <rect x="40" y="20" width="720" height="410" rx="10" fill="rgba(13,15,18,0.85)" stroke="rgba(255,255,255,0.12)" />
      <rect x="40" y="20" width="720" height="34" rx="10" fill="rgba(255,255,255,0.04)" />
      <circle cx="62" cy="37" r="4" fill="rgba(255,255,255,0.25)" />
      <circle cx="78" cy="37" r="4" fill="rgba(255,255,255,0.25)" />
      <circle cx="94" cy="37" r="4" fill="rgba(52,211,153,0.6)" />
      <rect x="120" y="31" width="180" height="8" rx="4" fill="rgba(255,255,255,0.14)" />
      {Array.from({ length: 4 }).map((_, i) => (
        <rect key={i} x={600 + i * 34} y="32" width="24" height="6" rx="3" fill={i === 3 ? "rgba(52,211,153,0.8)" : "rgba(255,255,255,0.14)"} />
      ))}
      <rect x="80" y="86" width="300" height="16" rx="4" fill="rgba(245,246,247,0.85)" />
      <rect x="80" y="114" width="180" height="16" rx="4" fill="rgba(52,211,153,0.6)" />
      <rect x="80" y="146" width="420" height="7" rx="3.5" fill="rgba(255,255,255,0.14)" />
      <rect x="80" y="160" width="380" height="7" rx="3.5" fill="rgba(255,255,255,0.14)" />
      <rect x="80" y="188" width="110" height="30" rx="6" fill="rgba(52,211,153,0.9)" />
      <text x="135" y="208" textAnchor="middle" fill="#08090b" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">
        CONTACT
      </text>
      {[
        { x: 560, w: 160, y: 96 },
        { x: 560, w: 160, y: 200 },
      ].map((card, i) => (
        <g key={i}>
          <rect x={card.x} y={card.y} width={card.w} height="90" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
          <rect x={card.x + 14} y={card.y + 16} width="52" height="22" rx="4" fill="rgba(52,211,153,0.35)" />
          <rect x={card.x + 14} y={card.y + 52} width={i === 0 ? 120 : 90} height="6" rx="3" fill="rgba(255,255,255,0.25)" />
          <rect x={card.x + 14} y={card.y + 64} width={i === 0 ? 100 : 70} height="6" rx="3" fill="rgba(255,255,255,0.12)" />
        </g>
      ))}
      <rect x="80" y="330" width="640" height="60" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
      <Lines x={100} y={342} count={3} w={140} />
      <text x="640" y="352" fill="rgba(154,163,173,0.9)" fontSize="9" fontFamily="ui-monospace, monospace">
        LEAD INBOX
      </text>
      <circle cx="700" cy="352" r="8" fill="rgba(52,211,153,0.5)" />
      <text x="700" y="355" textAnchor="middle" fill="#08090b" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">
        3
      </text>
    </g>
  );
}

function PipelineCover() {
  const nodes = [
    { label: "PDF", sub: "documents" },
    { label: "PyPDF", sub: "extraction" },
    { label: "Chunks", sub: "segments" },
    { label: "Embed", sub: "vectors" },
    { label: "FAISS", sub: "index" },
    { label: "RAG", sub: "retrieve" },
    { label: "Reason", sub: "NLP" },
    { label: "Report", sub: "FIR style" },
  ];
  return (
    <g>
      <rect x="0" y="0" width="800" height="450" fill="#0d0f12" />
      <Grid />
      <text x="400" y="64" textAnchor="middle" fill="rgba(154,163,173,0.9)" fontSize="11" letterSpacing="4" fontFamily="ui-monospace, monospace">
        LEGAL INTELLIGENCE PIPELINE
      </text>
      {nodes.map((node, i) => (
        <g key={node.label}>
          <Node x={40 + i * 92} y={170} w={76} label={node.label} sub={node.sub} />
          {i < nodes.length - 1 && <Arrow x1={122 + i * 92} x2={138 + i * 92} y={192} />}
        </g>
      ))}
      <rect x="40" y="268" width="720" height="74" rx="8" fill="rgba(52,211,153,0.06)" stroke="rgba(52,211,153,0.3)" />
      <text x="400" y="296" textAnchor="middle" fill="rgba(52,211,153,0.95)" fontSize="12" fontWeight="600" letterSpacing="2" fontFamily="ui-monospace, monospace">
        CYBERCRIME PATTERN DETECTION
      </text>
      <text x="400" y="318" textAnchor="middle" fill="rgba(154,163,173,0.9)" fontSize="10" fontFamily="ui-monospace, monospace">
        SEMANTIC SEARCH → LEGAL REASONING → STRUCTURED REPORT
      </text>
      <g stroke="rgba(52,211,153,0.4)" strokeWidth="1.5">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <line key={i} x1={60 + i * 70} y1={388 + (i % 2) * 6} x2={130 + i * 70} y2={392 - (i % 3) * 8} />
        ))}
      </g>
      <text x="400" y="428" textAnchor="middle" fill="rgba(52,211,153,0.7)" fontSize="10" letterSpacing="3" fontFamily="ui-monospace, monospace">
        SENTENCE TRANSFORMERS · FAISS · RAG · NLP
      </text>
    </g>
  );
}

function TerminalCover() {
  return (
    <g>
      <rect x="0" y="0" width="800" height="450" fill="#0d0f12" />
      <Grid />
      <rect x="90" y="70" width="620" height="300" rx="10" fill="rgba(13,15,18,0.9)" stroke="rgba(255,255,255,0.12)" />
      <rect x="90" y="70" width="620" height="36" rx="10" fill="rgba(255,255,255,0.05)" />
      <circle cx="112" cy="88" r="5" fill="rgba(255,255,255,0.25)" />
      <circle cx="128" cy="88" r="5" fill="rgba(255,255,255,0.25)" />
      <circle cx="144" cy="88" r="5" fill="rgba(52,211,153,0.7)" />
      <text x="400" y="94" textAnchor="middle" fill="rgba(154,163,173,0.8)" fontSize="11" fontFamily="ui-monospace, monospace">
        voice-assistant — python
      </text>
      <text x="120" y="140" fill="rgba(52,211,153,0.9)" fontSize="12" fontFamily="ui-monospace, monospace">
        $ say --wake-word
      </text>
      <text x="120" y="166" fill="rgba(154,163,173,0.9)" fontSize="12" fontFamily="ui-monospace, monospace">
        listening...
      </text>
      <text x="120" y="192" fill="#f5f6f7" fontSize="12" fontFamily="ui-monospace, monospace">
        <tspan fill="rgba(52,211,153,0.9)">✔</tspan> recognized: &quot;what&apos;s the weather in karachi?&quot;
      </text>
      <text x="120" y="218" fill="rgba(154,163,173,0.9)" fontSize="12" fontFamily="ui-monospace, monospace">
        fetching weather via api...
      </text>
      <text x="120" y="244" fill="#f5f6f7" fontSize="12" fontFamily="ui-monospace, monospace">
        <tspan fill="rgba(52,211,153,0.9)">✔</tspan> speaking: &quot;30°C, partly cloudy.&quot;
      </text>
      <text x="120" y="282" fill="rgba(52,211,153,0.6)" fontSize="11" fontFamily="ui-monospace, monospace">
        $ notes --add &quot;meeting at 3pm&quot;
      </text>
      <text x="120" y="306" fill="rgba(52,211,153,0.6)" fontSize="11" fontFamily="ui-monospace, monospace">
        $ timer --alarm 30min
      </text>
      <path
        d="M 120 340 h 560"
        stroke="rgba(52,211,153,0.6)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 120 340 q 10 -18 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0"
        stroke="rgba(52,211,153,0.5)"
        strokeWidth="1.5"
        fill="none"
      />
    </g>
  );
}

function MobileCover() {
  return (
    <g>
      <rect x="0" y="0" width="800" height="450" fill="#0d0f12" />
      <Grid />
      <rect x="300" y="46" width="200" height="360" rx="22" fill="rgba(13,15,18,0.95)" stroke="rgba(255,255,255,0.16)" />
      <rect x="310" y="60" width="180" height="330" rx="14" fill="rgba(17,20,24,0.9)" />
      <circle cx="400" cy="36" r="7" fill="rgba(255,255,255,0.2)" />
      {[
        { x: 330, y: 80 },
        { x: 380, y: 120 },
        { x: 340, y: 170 },
        { x: 400, y: 240 },
        { x: 360, y: 300 },
      ].map((pin, i) => (
        <g key={i}>
          <circle cx={pin.x} cy={pin.y} r="5" fill="rgba(52,211,153,0.9)" />
          <circle cx={pin.x} cy={pin.y} r="10" fill="rgba(52,211,153,0.2)" />
        </g>
      ))}
      <path
        d="M 335 85 q 45 40 40 85 t 20 70 t 40 60"
        stroke="rgba(52,211,153,0.6)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="6 6"
      />
      <rect x="330" y="352" width="140" height="24" rx="12" fill="rgba(52,211,153,0.9)" />
      <text x="400" y="368" textAnchor="middle" fill="#08090b" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">
        SEARCH AREA
      </text>
      <text x="80" y="80" fill="rgba(154,163,173,0.9)" fontSize="11" letterSpacing="3" fontFamily="ui-monospace, monospace">
        LOCATION SEARCH
      </text>
      <rect x="80" y="104" width="140" height="34" rx="6" fill="rgba(52,211,153,0.08)" stroke="rgba(52,211,153,0.4)" />
      <text x="94" y="126" fill="rgba(52,211,153,0.9)" fontSize="10" fontFamily="ui-monospace, monospace">
        OSM + MAPS
      </text>
      <rect x="80" y="152" width="140" height="34" rx="6" fill="rgba(13,15,18,0.9)" stroke="rgba(255,255,255,0.14)" />
      <text x="94" y="174" fill="#f5f6f7" fontSize="10" fontFamily="ui-monospace, monospace">
        ADMIN PORTAL
      </text>
      <rect x="80" y="200" width="140" height="34" rx="6" fill="rgba(13,15,18,0.9)" stroke="rgba(255,255,255,0.14)" />
      <text x="94" y="222" fill="#f5f6f7" fontSize="10" fontFamily="ui-monospace, monospace">
        FLUTTER · DART
      </text>
      <text x="620" y="80" fill="rgba(154,163,173,0.9)" fontSize="11" letterSpacing="3" fontFamily="ui-monospace, monospace">
        RELEASE v1.0
      </text>
      <rect x="600" y="104" width="120" height="34" rx="6" fill="rgba(52,211,153,0.08)" stroke="rgba(52,211,153,0.4)" />
      <text x="660" y="126" textAnchor="middle" fill="rgba(52,211,153,0.9)" fontSize="10" fontFamily="ui-monospace, monospace">
        .APK READY
      </text>
      <rect x="600" y="152" width="120" height="34" rx="6" fill="rgba(13,15,18,0.9)" stroke="rgba(255,255,255,0.14)" />
      <text x="660" y="174" textAnchor="middle" fill="#f5f6f7" fontSize="10" fontFamily="ui-monospace, monospace">
        GPS TRACKING
      </text>
      <rect x="600" y="200" width="120" height="34" rx="6" fill="rgba(13,15,18,0.9)" stroke="rgba(255,255,255,0.14)" />
      <text x="660" y="222" textAnchor="middle" fill="#f5f6f7" fontSize="10" fontFamily="ui-monospace, monospace">
        PYTHON BACKEND
      </text>
    </g>
  );
}

function EcommerceCover() {
  return (
    <g>
      <rect x="0" y="0" width="800" height="450" fill="#0d0f12" />
      <Grid />
      <rect x="40" y="20" width="720" height="410" rx="10" fill="rgba(13,15,18,0.85)" stroke="rgba(255,255,255,0.12)" />
      <rect x="40" y="20" width="720" height="34" rx="10" fill="rgba(255,255,255,0.04)" />
      <circle cx="62" cy="37" r="4" fill="rgba(255,255,255,0.25)" />
      <circle cx="78" cy="37" r="4" fill="rgba(255,255,255,0.25)" />
      <circle cx="94" cy="37" r="4" fill="rgba(52,211,153,0.6)" />
      <rect x="120" y="31" width="140" height="8" rx="4" fill="rgba(255,255,255,0.14)" />
      <text x="704" y="40" textAnchor="end" fill="rgba(52,211,153,0.95)" fontSize="11" fontWeight="600" letterSpacing="2" fontFamily="ui-monospace, monospace">
        LIVE · toheedwatches.com
      </text>
      <text x="80" y="100" fill="rgba(245,246,247,0.9)" fontSize="17" fontWeight="600" fontFamily="ui-monospace, monospace">
        TOHEED WATCHES
      </text>
      <text x="80" y="124" fill="rgba(154,163,173,0.8)" fontSize="11" fontFamily="ui-monospace, monospace">
        PRECISION TIME · PRODUCTION STORE
      </text>
      {[
        { x: 80 },
        { x: 320 },
        { x: 560 },
      ].map((card, i) => (
        <g key={i}>
          <rect x={card.x} y={150} width="160" height="180" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
          <circle cx={card.x + 80} cy="210" r="34" fill="rgba(255,255,255,0.06)" stroke="rgba(52,211,153,0.35)" />
          <circle cx={card.x + 80} cy="210" r="24" fill="none" stroke="rgba(52,211,153,0.7)" strokeWidth="2" />
          <line x1={card.x + 80} y1="210" x2={card.x + 80} y2="192" stroke="rgba(52,211,153,0.9)" strokeWidth="2" />
          <line x1={card.x + 80} y1="210" x2={card.x + 92} y2="214" stroke="rgba(52,211,153,0.9)" strokeWidth="2" />
          <rect x={card.x + 16} y={264} width="86" height="6" rx="3" fill="rgba(255,255,255,0.25)" />
          <rect x={card.x + 16} y={278} width="58" height="6" rx="3" fill="rgba(52,211,153,0.7)" />
          <rect x={card.x + 16} y={302} width="128" height="16" rx="4" fill="rgba(52,211,153,0.85)" />
          <text x={card.x + 80} y="314" textAnchor="middle" fill="#08090b" fontSize="8" fontWeight="700" fontFamily="ui-monospace, monospace">
            SHOP NOW
          </text>
        </g>
      ))}
    </g>
  );
}

export function ProjectCover({ type }: CoverProps) {
  return (
    <svg
      viewBox="0 0 800 450"
      className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      role="img"
      aria-label="Project architecture preview"
    >
      {type === "gym" && <GymCover />}
      {type === "business" && <BusinessCover />}
      {type === "pipeline" && <PipelineCover />}
      {type === "terminal" && <TerminalCover />}
      {type === "mobile" && <MobileCover />}
      {type === "ecommerce" && <EcommerceCover />}
    </svg>
  );
}