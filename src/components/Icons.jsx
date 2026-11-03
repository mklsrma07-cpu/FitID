import React from 'react';

export default function TShirtIcon({ className = "w-6 h-6", strokeWidth = 1.5 }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Sleek minimal t-shirt outline */}
      <path d="M7 4.5 C8.5 6 10 6.5 12 6.5 C14 6.5 15.5 6 17 4.5 L21 7.5 L19 11 L16 10 L16 20.5 C16 21 15.5 21.5 15 21.5 L9 21.5 C8.5 21.5 8 21 8 20.5 L8 10 L5 11 L3 7.5 Z" />
    </svg>
  );
}

export function PantsIcon({ className = "w-6 h-6", strokeWidth = 1.5 }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Sleek minimal trousers outline */}
      <path d="M5 4h14v3l-2 15h-4l-1-9-1 9H7L5 7V4z" />
      <path d="M12 4v4" />
      <path d="M5 8h14" />
    </svg>
  );
}

export function CheckAccentIcon({ className = "w-4 h-4" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 20 20" 
      fill="none"
    >
      <circle cx="10" cy="10" r="9" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="1.5" />
      <path d="M6.5 10.2L8.8 12.5L13.5 7.5" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
