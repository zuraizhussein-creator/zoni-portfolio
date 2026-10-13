// A hand-built illustrated avatar, drawn with SVG shapes (no photo needed).
export default function Avatar() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[22rem]">
      {/* Rotating dashed ring */}
      <div
        aria-hidden="true"
        className="animate-spin-slow absolute -inset-4 rounded-full border-2 border-dashed border-electric/30"
      />
      {/* Glow */}
      <div aria-hidden="true" className="absolute inset-6 rounded-full bg-electric/30 blur-3xl" />

      <svg
        viewBox="0 0 400 400"
        role="img"
        aria-labelledby="avatar-title"
        className="animate-float relative h-full w-full drop-shadow-2xl"
      >
        <title id="avatar-title">Illustrated avatar of Zony</title>
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          <linearGradient id="blazer" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1f2a44" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <clipPath id="circle">
            <circle cx="200" cy="200" r="180" />
          </clipPath>
        </defs>

        {/* Background circle */}
        <circle cx="200" cy="200" r="180" fill="url(#bg)" />
        <circle cx="200" cy="200" r="180" fill="none" stroke="#93c5fd" strokeOpacity="0.4" strokeWidth="3" />

        <g clipPath="url(#circle)">
          {/* Neck */}
          <path d="M172 240 h56 v60 q-28 18 -56 0 z" fill="#c98d68" />
          <path d="M172 262 q28 16 56 0 v-14 h-56 z" fill="#b57a57" />

          {/* Blazer / shoulders */}
          <path d="M60 420 Q70 320 140 300 L200 296 L260 300 Q330 320 340 420 Z" fill="url(#blazer)" />
          {/* Shirt */}
          <path d="M168 296 L200 360 L232 296 Z" fill="#eef1f6" />
          {/* Collar */}
          <path d="M168 296 L186 326 L200 306 Z" fill="#ffffff" />
          <path d="M232 296 L214 326 L200 306 Z" fill="#ffffff" />
          {/* Lapels */}
          <path d="M150 300 L196 370 L170 300 Z" fill="#2a3a5e" />
          <path d="M250 300 L204 370 L230 300 Z" fill="#2a3a5e" />
          {/* Pocket square */}
          <path d="M262 340 l22 -4 l-4 10 z" fill="#60a5fa" />
        </g>

        {/* Ears */}
        <ellipse cx="134" cy="195" rx="12" ry="18" fill="#c98d68" />
        <ellipse cx="266" cy="195" rx="12" ry="18" fill="#c98d68" />

        {/* Head with a strong, angular jawline */}
        <path
          d="M200 110 C246 110 268 140 268 184 L267 226 Q266 240 256 248 L226 270 Q200 280 174 270 L144 248 Q134 240 133 226 L132 184 C132 140 154 110 200 110 Z"
          fill="#d9a07a"
        />
        {/* Jaw contour shading */}
        <path d="M134 222 Q135 240 146 248 L176 270 Q160 252 150 238 Q140 230 134 222 Z" fill="#a86c4b" opacity="0.6" />
        <path d="M266 222 Q265 240 254 248 L224 270 Q240 252 250 238 Q260 230 266 222 Z" fill="#a86c4b" opacity="0.6" />
        {/* Chin highlight */}
        <path d="M188 262 Q200 268 212 262" stroke="#b57a57" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />

        {/* Hair */}
        <path
          d="M134 186 Q124 112 192 102 Q250 94 268 140 Q274 160 266 186 Q262 152 240 140 Q206 150 168 136 Q144 146 134 186 Z"
          fill="#2a211c"
        />
        <path d="M168 110 Q200 84 246 104 Q220 100 196 118 Z" fill="#3a2e27" />

        {/* Eyebrows */}
        <path d="M160 168 Q174 160 188 166" stroke="#2a211c" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path d="M212 166 Q226 160 240 168" stroke="#2a211c" strokeWidth="5" strokeLinecap="round" fill="none" />

        {/* Eyes */}
        <g className="animate-blink">
          <circle cx="174" cy="188" r="6" fill="#1b1512" />
          <circle cx="226" cy="188" r="6" fill="#1b1512" />
          <circle cx="176" cy="186" r="2" fill="#ffffff" />
          <circle cx="228" cy="186" r="2" fill="#ffffff" />
        </g>

        {/* Nose */}
        <path d="M200 196 Q194 214 202 218" stroke="#b57a57" strokeWidth="3.5" strokeLinecap="round" fill="none" />

        {/* Friendly smile */}
        <path d="M180 230 Q200 246 220 230 Q200 238 180 230 Z" fill="#ffffff" stroke="#7a3e2a" strokeWidth="3" strokeLinejoin="round" />

        {/* Cheeks */}
        <circle cx="160" cy="214" r="9" fill="#e8806b" opacity="0.25" />
        <circle cx="240" cy="214" r="9" fill="#e8806b" opacity="0.25" />
      </svg>

      {/* Small floating badges */}
      <div aria-hidden="true" className="animate-float absolute -left-2 top-10 rounded-2xl border border-white/10 bg-card/90 px-3 py-2 text-xs font-semibold text-ink shadow-xl backdrop-blur [animation-delay:1s]">
        ✍️ Copywriting
      </div>
      <div aria-hidden="true" className="animate-float absolute -right-2 bottom-12 rounded-2xl border border-white/10 bg-card/90 px-3 py-2 text-xs font-semibold text-ink shadow-xl backdrop-blur [animation-delay:2s]">
        📈 B2B Sales
      </div>
    </div>
  );
}
