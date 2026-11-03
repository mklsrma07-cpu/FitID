import React from 'react';
import { motion } from 'framer-motion';

export default function BodyFigure({ 
  gender = 'women',
  activePart = null, 
  onSelectPart = () => {},
  measurements = { height: 166, bust: 88, chest: 98, waist: 68, hips: 94, shoulder: 40 },
  unit = 'cm',
  showAllGuides = true,
  interactive = true,
  compact = false
}) {
  const isPartActive = (part) => activePart === part;
  const isWomen = gender === 'women';

  const displayUpper = isWomen ? (measurements.bust || 88) : (measurements.chest || 98);
  const upperLabel = isWomen ? 'BUST' : 'CHEST';

  return (
    <div className={`relative flex items-center justify-center select-none ${compact ? 'w-[180px] h-[300px]' : 'w-full max-w-[280px] h-[440px]'} mx-auto`}>
      <svg
        viewBox="0 0 300 500"
        className="w-full h-full drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="highlightGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Ambient background grid lines - subtle Apple tech aesthetic */}
        <g stroke="#1A1A1A" strokeWidth="0.5" strokeDasharray="3 3">
          <line x1="50" y1="0" x2="50" y2="500" />
          <line x1="150" y1="0" x2="150" y2="500" />
          <line x1="250" y1="0" x2="250" y2="500" />
          <line x1="0" y1="120" x2="300" y2="120" />
          <line x1="0" y1="168" x2="300" y2="168" />
          <line x1="0" y1="225" x2="300" y2="225" />
          <line x1="0" y1="270" x2="300" y2="270" />
        </g>

        {/* ============================================================== */}
        {/* LINE-ART VECTOR SILHOUETTE (WOMEN vs MEN)                      */}
        {/* ============================================================== */}
        <g className="transition-all duration-300">
          
          {isWomen ? (
            /* ================= WOMEN'S FIGURE ================= */
            <>
              {/* Head & Neck */}
              <path
                d="M 150 44 
                   C 160 44, 168 53, 168 66 
                   C 168 78, 160 88, 150 88 
                   C 140 88, 132 78, 132 66 
                   C 132 53, 140 44, 150 44 Z"
                fill="#121212"
                stroke="#525252"
                strokeWidth="1.5"
              />
              <path
                d="M 145 87 L 145 106 M 155 87 L 155 106"
                stroke="#525252"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* Female Torso with feminine curve through bust, natural waist, and hips */}
              <path
                d="M 145 106 
                   C 135 108, 114 114, 102 122
                   C 98 126, 94 133, 91 146
                   L 84 220
                   C 82 230, 85 235, 90 235
                   C 95 235, 98 228, 101 218
                   L 106 172
                   C 107 165, 112 165, 115 174
                   C 118 190, 117 205, 115 224
                   C 113 234, 117 245, 126 260
                   C 130 268, 126 280, 124 300
                   L 106 385
                   L 102 460
                   C 102 467, 111 467, 114 460
                   L 130 375
                   L 144 280
                   L 150 276
                   L 156 280
                   L 170 375
                   L 186 460
                   C 189 467, 198 467, 198 460
                   L 194 385
                   L 176 300
                   C 174 280, 170 268, 174 260
                   C 183 245, 187 234, 185 224
                   C 183 205, 182 190, 185 174
                   C 188 165, 193 165, 194 172
                   L 199 218
                   C 202 228, 205 235, 210 235
                   C 215 235, 218 230, 216 220
                   L 209 146
                   C 206 133, 202 126, 198 122
                   C 186 114, 165 108, 155 106 Z"
                fill="#121212"
                stroke={activePart ? "#404040" : "#5A5A5A"}
                strokeWidth="1.5"
                strokeLinejoin="round"
                className="transition-colors duration-200"
              />

              {/* Delicate bust & waist outline markers */}
              <path
                d="M 130 162 C 140 174, 160 174, 170 162"
                stroke="#2F2F2F"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d="M 134 220 Q 150 225 166 220"
                stroke="#2F2F2F"
                strokeWidth="1"
                fill="none"
              />
            </>
          ) : (
            /* ================= MEN'S FIGURE ================= */
            <>
              {/* Head & Neck */}
              <path
                d="M 150 42 
                   C 162 42, 170 52, 170 66 
                   C 170 80, 162 90, 150 90 
                   C 138 90, 130 80, 130 66 
                   C 130 52, 138 42, 150 42 Z"
                fill="#121212"
                stroke="#525252"
                strokeWidth="1.5"
              />
              <path
                d="M 144 89 L 144 104 M 156 89 L 156 104"
                stroke="#525252"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* Athletic Men's Torso */}
              <path
                d="M 144 104 
                   C 130 106, 105 112, 90 122
                   C 85 126, 80 134, 78 152
                   L 72 230
                   C 70 240, 72 245, 78 245
                   C 84 245, 87 238, 90 226
                   L 96 172
                   C 98 165, 102 165, 105 175
                   L 110 225
                   C 112 240, 114 250, 110 265
                   L 95 385
                   L 92 460
                   C 92 468, 102 468, 106 460
                   L 124 370
                   L 142 270
                   L 150 268
                   L 158 270
                   L 176 370
                   L 194 460
                   C 198 468, 208 468, 208 460
                   L 205 385
                   L 190 265
                   C 186 250, 188 240, 190 225
                   L 195 175
                   C 198 165, 202 165, 204 172
                   L 210 226
                   C 213 238, 216 245, 222 245
                   C 228 245, 230 240, 228 230
                   L 222 152
                   C 220 134, 215 126, 210 122
                   C 195 112, 170 106, 156 104 Z"
                fill="#121212"
                stroke={activePart ? "#404040" : "#5A5A5A"}
                strokeWidth="1.5"
                strokeLinejoin="round"
                className="transition-colors duration-200"
              />
            </>
          )}

        </g>

        {/* ============================================================== */}
        {/* INTERACTIVE MEASUREMENT GUIDES & HIGHLIGHTS                    */}
        {/* ============================================================== */}

        {/* 1. HEIGHT GUIDE (Vertical line left side) */}
        <g 
          className={`cursor-pointer transition-all duration-300 ${isPartActive('height') ? 'opacity-100' : 'opacity-60 hover:opacity-90'}`}
          onClick={() => interactive && onSelectPart('height')}
        >
          <line
            x1="36"
            y1="40"
            x2="36"
            y2="465"
            stroke={isPartActive('height') ? '#FFFFFF' : '#3E3E3E'}
            strokeWidth={isPartActive('height') ? '1.8' : '1'}
            strokeDasharray={isPartActive('height') ? 'none' : '3 3'}
            filter={isPartActive('height') ? 'url(#glow)' : undefined}
          />
          <line x1="30" y1="40" x2="42" y2="40" stroke={isPartActive('height') ? '#FFFFFF' : '#555'} strokeWidth="1.5" />
          <line x1="30" y1="465" x2="42" y2="465" stroke={isPartActive('height') ? '#FFFFFF' : '#555'} strokeWidth="1.5" />

          {(showAllGuides || isPartActive('height')) && (
            <g transform="translate(14, 240)">
              <rect
                x="-10"
                y="-13"
                width="64"
                height="22"
                rx="6"
                fill={isPartActive('height') ? '#FFFFFF' : '#181818'}
                stroke={isPartActive('height') ? '#FFFFFF' : '#333333'}
                strokeWidth="1"
              />
              <text
                x="22"
                y="1.5"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="9"
                fontWeight="700"
                letterSpacing="0.05em"
                fill={isPartActive('height') ? '#0B0B0B' : '#A3A3A3'}
              >
                {measurements.height || (isWomen ? 166 : 178)} {unit.toUpperCase()}
              </text>
            </g>
          )}
        </g>

        {/* 2. BUST / CHEST GUIDE */}
        <g 
          className={`cursor-pointer transition-all duration-300 ${isPartActive('bust') || isPartActive('chest') ? 'opacity-100' : 'opacity-60 hover:opacity-90'}`}
          onClick={() => interactive && onSelectPart(isWomen ? 'bust' : 'chest')}
        >
          {(isPartActive('bust') || isPartActive('chest')) && (
            <ellipse cx="150" cy="165" rx="55" ry="18" fill="url(#highlightGlow)" />
          )}

          <line
            x1={isWomen ? "105" : "94"}
            y1="165"
            x2={isWomen ? "195" : "206"}
            y2="165"
            stroke={isPartActive('bust') || isPartActive('chest') ? '#FFFFFF' : '#555555'}
            strokeWidth={isPartActive('bust') || isPartActive('chest') ? '2' : '1.2'}
            strokeDasharray={isPartActive('bust') || isPartActive('chest') ? 'none' : '4 3'}
            filter={isPartActive('bust') || isPartActive('chest') ? 'url(#glow)' : undefined}
          />
          <circle cx={isWomen ? "105" : "94"} cy="165" r={isPartActive('bust') || isPartActive('chest') ? "3.5" : "2.5"} fill="#FFFFFF" />
          <circle cx={isWomen ? "195" : "206"} cy="165" r={isPartActive('bust') || isPartActive('chest') ? "3.5" : "2.5"} fill="#FFFFFF" />

          {/* Extension line & tag */}
          <line x1={isWomen ? "195" : "206"} y1="165" x2="235" y2="165" stroke="#444" strokeWidth="1" strokeDasharray="2 2" />
          <g transform="translate(262, 165)">
            <rect
              x="-26"
              y="-10"
              width="56"
              height="20"
              rx="5"
              fill={isPartActive('bust') || isPartActive('chest') ? '#FFFFFF' : '#141414'}
              stroke={isPartActive('bust') || isPartActive('chest') ? '#FFFFFF' : '#2F2F2F'}
              strokeWidth="1"
            />
            <text
              x="2"
              y="1"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="9"
              fontWeight="700"
              letterSpacing="0.04em"
              fill={isPartActive('bust') || isPartActive('chest') ? '#0B0B0B' : '#E5E5E5'}
            >
              {displayUpper} CM
            </text>
          </g>
        </g>

        {/* 3. WAIST GUIDE */}
        <g 
          className={`cursor-pointer transition-all duration-300 ${isPartActive('waist') ? 'opacity-100' : 'opacity-60 hover:opacity-90'}`}
          onClick={() => interactive && onSelectPart('waist')}
        >
          {isPartActive('waist') && (
            <ellipse cx="150" cy="222" rx="46" ry="15" fill="url(#highlightGlow)" />
          )}

          <line
            x1={isWomen ? "114" : "108"}
            y1="222"
            x2={isWomen ? "186" : "192"}
            y2="222"
            stroke={isPartActive('waist') ? '#FFFFFF' : '#555555'}
            strokeWidth={isPartActive('waist') ? '2' : '1.2'}
            strokeDasharray={isPartActive('waist') ? 'none' : '4 3'}
            filter={isPartActive('waist') ? 'url(#glow)' : undefined}
          />
          <circle cx={isWomen ? "114" : "108"} cy="222" r={isPartActive('waist') ? "3.5" : "2.5"} fill="#FFFFFF" />
          <circle cx={isWomen ? "186" : "192"} cy="222" r={isPartActive('waist') ? "3.5" : "2.5"} fill="#FFFFFF" />

          <line x1={isWomen ? "186" : "192"} y1="222" x2="235" y2="222" stroke="#444" strokeWidth="1" strokeDasharray="2 2" />
          <g transform="translate(262, 222)">
            <rect
              x="-26"
              y="-10"
              width="56"
              height="20"
              rx="5"
              fill={isPartActive('waist') ? '#FFFFFF' : '#141414'}
              stroke={isPartActive('waist') ? '#FFFFFF' : '#2F2F2F'}
              strokeWidth="1"
            />
            <text
              x="2"
              y="1"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="9"
              fontWeight="700"
              letterSpacing="0.04em"
              fill={isPartActive('waist') ? '#0B0B0B' : '#E5E5E5'}
            >
              {measurements.waist || (isWomen ? 68 : 82)} CM
            </text>
          </g>
        </g>

        {/* 4. HIPS GUIDE (Featured in Women's Section) */}
        {isWomen ? (
          <g 
            className={`cursor-pointer transition-all duration-300 ${isPartActive('hips') ? 'opacity-100' : 'opacity-60 hover:opacity-90'}`}
            onClick={() => interactive && onSelectPart('hips')}
          >
            {isPartActive('hips') && (
              <ellipse cx="150" cy="265" rx="56" ry="16" fill="url(#highlightGlow)" />
            )}

            <line
              x1="104"
              y1="265"
              x2="196"
              y2="265"
              stroke={isPartActive('hips') ? '#FFFFFF' : '#555555'}
              strokeWidth={isPartActive('hips') ? '2' : '1.2'}
              strokeDasharray={isPartActive('hips') ? 'none' : '4 3'}
              filter={isPartActive('hips') ? 'url(#glow)' : undefined}
            />
            <circle cx="104" cy="265" r={isPartActive('hips') ? "3.5" : "2.5"} fill="#FFFFFF" />
            <circle cx="196" cy="265" r={isPartActive('hips') ? "3.5" : "2.5"} fill="#FFFFFF" />

            <line x1="196" y1="265" x2="235" y2="265" stroke="#444" strokeWidth="1" strokeDasharray="2 2" />
            <g transform="translate(262, 265)">
              <rect
                x="-26"
                y="-10"
                width="56"
                height="20"
                rx="5"
                fill={isPartActive('hips') ? '#FFFFFF' : '#141414'}
                stroke={isPartActive('hips') ? '#FFFFFF' : '#2F2F2F'}
                strokeWidth="1"
              />
              <text
                x="2"
                y="1"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="9"
                fontWeight="700"
                letterSpacing="0.04em"
                fill={isPartActive('hips') ? '#0B0B0B' : '#E5E5E5'}
              >
                {measurements.hips || 94} CM
              </text>
            </g>
          </g>
        ) : (
          /* SHOULDER GUIDE for men */
          <g 
            className={`cursor-pointer transition-all duration-300 ${isPartActive('shoulder') ? 'opacity-100' : 'opacity-60 hover:opacity-90'}`}
            onClick={() => interactive && onSelectPart('shoulder')}
          >
            <line
              x1="86"
              y1="120"
              x2="214"
              y2="120"
              stroke={isPartActive('shoulder') ? '#FFFFFF' : '#555555'}
              strokeWidth={isPartActive('shoulder') ? '2' : '1.2'}
              strokeDasharray={isPartActive('shoulder') ? 'none' : '4 3'}
              filter={isPartActive('shoulder') ? 'url(#glow)' : undefined}
            />
            <circle cx="86" cy="120" r={isPartActive('shoulder') ? "3.5" : "2.5"} fill="#FFFFFF" />
            <circle cx="214" cy="120" r={isPartActive('shoulder') ? "3.5" : "2.5"} fill="#FFFFFF" />

            <g transform="translate(150, 102)">
              <rect
                x="-36"
                y="-10"
                width="72"
                height="18"
                rx="5"
                fill={isPartActive('shoulder') ? '#FFFFFF' : '#141414'}
                stroke={isPartActive('shoulder') ? '#FFFFFF' : '#2F2F2F'}
                strokeWidth="1"
              />
              <text
                x="0"
                y="0.5"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="8.5"
                fontWeight="700"
                letterSpacing="0.05em"
                fill={isPartActive('shoulder') ? '#0B0B0B' : '#C0C0C0'}
              >
                SHOULDER {measurements.shoulder || 46}
              </text>
            </g>
          </g>
        )}

      </svg>

      {/* Floating active helper indicator */}
      {activePart && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute -bottom-4 px-3 py-1 bg-[#141414] border border-[#2A2A2A] rounded-full text-[10px] font-mono tracking-widest text-neutral-300 uppercase shadow-lg pointer-events-none"
        >
          MEASURING: <span className="text-white font-bold">{activePart}</span>
        </motion.div>
      )}
    </div>
  );
}
