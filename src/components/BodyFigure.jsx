import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BodyFigure({ 
  activePart = null, 
  onSelectPart = () => {},
  measurements = { height: 178, chest: 98, waist: 82, shoulder: 46 },
  unit = 'cm',
  showAllGuides = true,
  interactive = true,
  compact = false
}) {
  const isPartActive = (part) => activePart === part;

  return (
    <div className={`relative flex items-center justify-center select-none ${compact ? 'w-[180px] h-[300px]' : 'w-full max-w-[280px] h-[440px]'} mx-auto`}>
      <svg
        viewBox="0 0 300 500"
        className="w-full h-full drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle gradient for active highlight glow */}
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
          <line x1="0" y1="170" x2="300" y2="170" />
          <line x1="0" y1="225" x2="300" y2="225" />
        </g>

        {/* MINIMAL LINE-ART HUMAN FIGURE */}
        <g className="transition-all duration-300">
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
          {/* Neck */}
          <path
            d="M 144 89 L 144 104 M 156 89 L 156 104"
            stroke="#525252"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Shoulders & Torso Outline */}
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

          {/* Clavicle & Chest subtle structural lines */}
          <path
            d="M 136 114 Q 150 118 164 114"
            stroke="#2A2A2A"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M 125 170 Q 150 178 175 170"
            stroke="#2A2A2A"
            strokeWidth="1.2"
            fill="none"
          />
        </g>

        {/* ============================================================== */}
        {/* INTERACTIVE MEASUREMENT GUIDES & HIGHLIGHTS                    */}
        {/* ============================================================== */}

        {/* 1. HEIGHT GUIDE (Vertical line left side) */}
        <g 
          className={`cursor-pointer transition-all duration-300 ${isPartActive('height') ? 'opacity-100' : 'opacity-60 hover:opacity-90'}`}
          onClick={() => interactive && onSelectPart('height')}
        >
          {/* Vertical measurement ruler line */}
          <line
            x1="38"
            y1="40"
            x2="38"
            y2="465"
            stroke={isPartActive('height') ? '#FFFFFF' : '#3E3E3E'}
            strokeWidth={isPartActive('height') ? '1.8' : '1'}
            strokeDasharray={isPartActive('height') ? 'none' : '3 3'}
            filter={isPartActive('height') ? 'url(#glow)' : undefined}
          />
          {/* Top bracket */}
          <line x1="32" y1="40" x2="44" y2="40" stroke={isPartActive('height') ? '#FFFFFF' : '#555'} strokeWidth="1.5" />
          <line x1="38" y1="40" x2="140" y2="40" stroke="#333333" strokeWidth="0.8" strokeDasharray="2 2" />
          {/* Bottom bracket */}
          <line x1="32" y1="465" x2="44" y2="465" stroke={isPartActive('height') ? '#FFFFFF' : '#555'} strokeWidth="1.5" />
          <line x1="38" y1="465" x2="90" y2="465" stroke="#333333" strokeWidth="0.8" strokeDasharray="2 2" />

          {/* Height Badge */}
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
                {measurements.height || 178} {unit.toUpperCase()}
              </text>
            </g>
          )}
        </g>

        {/* 2. SHOULDER GUIDE (Width across deltoids) */}
        <g 
          className={`cursor-pointer transition-all duration-300 ${isPartActive('shoulder') ? 'opacity-100' : 'opacity-60 hover:opacity-90'}`}
          onClick={() => interactive && onSelectPart('shoulder')}
        >
          {/* Highlight aura when active */}
          {isPartActive('shoulder') && (
            <ellipse cx="150" cy="120" rx="65" ry="16" fill="url(#highlightGlow)" />
          )}

          {/* Guide Line */}
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
          {/* Left/Right marker dots */}
          <circle cx="86" cy="120" r={isPartActive('shoulder') ? "3.5" : "2.5"} fill={isPartActive('shoulder') ? "#FFFFFF" : "#777"} />
          <circle cx="214" cy="120" r={isPartActive('shoulder') ? "3.5" : "2.5"} fill={isPartActive('shoulder') ? "#FFFFFF" : "#777"} />

          {/* Shoulder Label / Badge */}
          {(showAllGuides || isPartActive('shoulder')) && (
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
          )}
        </g>

        {/* 3. CHEST GUIDE (Across pectorals) */}
        <g 
          className={`cursor-pointer transition-all duration-300 ${isPartActive('chest') ? 'opacity-100' : 'opacity-60 hover:opacity-90'}`}
          onClick={() => interactive && onSelectPart('chest')}
        >
          {/* Highlight aura when active */}
          {isPartActive('chest') && (
            <ellipse cx="150" cy="168" rx="60" ry="18" fill="url(#highlightGlow)" />
          )}

          {/* Guide Line */}
          <line
            x1="94"
            y1="168"
            x2="206"
            y2="168"
            stroke={isPartActive('chest') ? '#FFFFFF' : '#555555'}
            strokeWidth={isPartActive('chest') ? '2' : '1.2'}
            strokeDasharray={isPartActive('chest') ? 'none' : '4 3'}
            filter={isPartActive('chest') ? 'url(#glow)' : undefined}
          />
          {/* Pins */}
          <circle cx="94" cy="168" r={isPartActive('chest') ? "3.5" : "2.5"} fill={isPartActive('chest') ? "#FFFFFF" : "#777"} />
          <circle cx="206" cy="168" r={isPartActive('chest') ? "3.5" : "2.5"} fill={isPartActive('chest') ? "#FFFFFF" : "#777"} />

          {/* Right side callout extension line & tag */}
          <line x1="206" y1="168" x2="235" y2="168" stroke={isPartActive('chest') ? '#FFFFFF' : '#333'} strokeWidth="1" strokeDasharray="2 2" />
          
          {(showAllGuides || isPartActive('chest')) && (
            <g transform="translate(262, 168)">
              <rect
                x="-26"
                y="-10"
                width="56"
                height="20"
                rx="5"
                fill={isPartActive('chest') ? '#FFFFFF' : '#141414'}
                stroke={isPartActive('chest') ? '#FFFFFF' : '#2F2F2F'}
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
                fill={isPartActive('chest') ? '#0B0B0B' : '#E5E5E5'}
              >
                {measurements.chest || 98} CM
              </text>
            </g>
          )}
        </g>

        {/* 4. WAIST GUIDE (Across natural waist) */}
        <g 
          className={`cursor-pointer transition-all duration-300 ${isPartActive('waist') ? 'opacity-100' : 'opacity-60 hover:opacity-90'}`}
          onClick={() => interactive && onSelectPart('waist')}
        >
          {/* Highlight aura */}
          {isPartActive('waist') && (
            <ellipse cx="150" cy="235" rx="52" ry="16" fill="url(#highlightGlow)" />
          )}

          {/* Guide Line */}
          <line
            x1="108"
            y1="235"
            x2="192"
            y2="235"
            stroke={isPartActive('waist') ? '#FFFFFF' : '#555555'}
            strokeWidth={isPartActive('waist') ? '2' : '1.2'}
            strokeDasharray={isPartActive('waist') ? 'none' : '4 3'}
            filter={isPartActive('waist') ? 'url(#glow)' : undefined}
          />
          {/* Pins */}
          <circle cx="108" cy="235" r={isPartActive('waist') ? "3.5" : "2.5"} fill={isPartActive('waist') ? "#FFFFFF" : "#777"} />
          <circle cx="192" cy="235" r={isPartActive('waist') ? "3.5" : "2.5"} fill={isPartActive('waist') ? "#FFFFFF" : "#777"} />

          {/* Right side callout */}
          <line x1="192" y1="235" x2="235" y2="235" stroke={isPartActive('waist') ? '#FFFFFF' : '#333'} strokeWidth="1" strokeDasharray="2 2" />

          {(showAllGuides || isPartActive('waist')) && (
            <g transform="translate(262, 235)">
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
                {measurements.waist || 82} CM
              </text>
            </g>
          )}
        </g>
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
