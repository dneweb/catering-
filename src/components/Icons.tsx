import React from "react";

export function WhatsAppIcon({
  size = 18,
  className = "",
  fill = "currentColor",
}: {
  size?: number;
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.301-.15-1.767-.867-2.04-.966-.274-.101-.473-.15-.671.15-.198.301-.77 0.966-.944 1.165-.175.199-.349.225-.65.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.675-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.35.452-.525.15-.175.2-.299.301-.499.1-.2.05-.374-.025-.524-.075-.15-.672-1.62-.92-2.217-.243-.58-.49-.502-.672-.511-.173-.009-.372-.011-.572-.011-.199 0-.524.075-.798.374-.274.3-1.047 1.023-1.047 2.494 0 1.472 1.072 2.894 1.222 3.094.15.2 2.11 3.221 5.111 4.518.714.309 1.272.493 1.707.632.717.228 1.369.196 1.885.119.575-.086 1.767-.723 2.016-1.42.25-.698.25-1.297.175-1.421-.075-.125-.274-.2-.575-.35zM12.04 2C6.543 2 2.08 6.463 2.08 11.96c0 1.758.459 3.473 1.332 4.985L2 22l5.203-1.365c1.455.794 3.095 1.212 4.837 1.212 5.497 0 9.96-4.463 9.96-9.96C22 6.463 17.537 2 12.04 2zm0 18.257c-1.49 0-2.951-.4-4.226-1.157l-.303-.18-3.138.823.837-3.059-.197-.314c-.832-1.325-1.272-2.868-1.272-4.45 0-4.555 3.705-8.26 8.26-8.26 4.554 0 8.259 3.705 8.259 8.26 0 4.555-3.705 8.259-8.26 8.259z" />
    </svg>
  );
}

export function ArrowRightIcon({
  size = 16,
  className = "",
  strokeWidth = 2.2,
}: {
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}

export function MenuIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function CloseIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function HandDrawnArrow({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M38 6 C32 18, 18 24, 12 38"
        stroke="#e5a93c"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M8 32 C10 36, 12 38, 12 38 C12 38, 17 37, 21 34"
        stroke="#e5a93c"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function TiffinIcon({
  size = 24,
  className = "",
  stroke = "#7c5324",
}: {
  size?: number;
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Top Handle */}
      <path d="M8 3h8v3H8z" />
      <path d="M12 3v3" />
      {/* Container Tiers */}
      <rect x="5" y="6" width="14" height="4" rx="1.5" />
      <rect x="5" y="10.5" width="14" height="4" rx="1.5" />
      <rect x="5" y="15" width="14" height="5" rx="1.5" />
      {/* Latches */}
      <line x1="3.5" y1="7.5" x2="3.5" y2="18.5" />
      <line x1="20.5" y1="7.5" x2="20.5" y2="18.5" />
    </svg>
  );
}

export function CateringIcon({
  size = 24,
  className = "",
  stroke = "#7c5324",
}: {
  size?: number;
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Cloche dome */}
      <path d="M4 15a8 8 0 0 1 16 0" />
      {/* Handle */}
      <path d="M12 7V5" />
      <circle cx="12" cy="4.5" r="1.5" fill={stroke} />
      {/* Base tray */}
      <line x1="2" y1="18" x2="22" y2="18" />
      <path d="M5 18v1.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V18" />
    </svg>
  );
}

export function CheckIcon({
  size = 14,
  className = "",
  color = "#c08532",
}: {
  size?: number;
  className?: string;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function CalendarIcon({
  size = 28,
  className = "",
  stroke = "#744b1d",
}: {
  size?: number;
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <circle cx="8" cy="14" r="1" fill={stroke} />
      <circle cx="12" cy="14" r="1" fill={stroke} />
      <circle cx="16" cy="14" r="1" fill={stroke} />
      <circle cx="8" cy="18" r="1" fill={stroke} />
      <circle cx="12" cy="18" r="1" fill={stroke} />
      <circle cx="16" cy="18" r="1" fill={stroke} />
    </svg>
  );
}

export function ChefHatIcon({
  size = 28,
  className = "",
  stroke = "#744b1d",
}: {
  size?: number;
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
      <line x1="6" y1="17" x2="18" y2="17" />
    </svg>
  );
}

export function TruckIcon({
  size = 28,
  className = "",
  stroke = "#744b1d",
}: {
  size?: number;
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="1" y="5" width="14" height="11" rx="1.5" />
      <path d="M15 8h4.5l3.5 4v4h-8V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

export function InstagramIcon({
  size = 20,
  className = "",
  stroke = "currentColor",
}: {
  size?: number;
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function StarIcon({
  size = 14,
  className = "",
  fill = "#E5A93C",
}: {
  size?: number;
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={fill}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function ClockIcon({
  size = 18,
  className = "",
  stroke = "currentColor",
}: {
  size?: number;
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
