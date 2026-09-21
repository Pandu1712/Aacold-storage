import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

/**
 * Exact Vector Icons from the Official AACS Logo Strip
 */

// 1. Cold Storage Rooms Icon
export function ColdStorageRoomsIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-7 h-7", className)}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* 6-pointed Snowflake */}
      <line x1="18" y1="4" x2="18" y2="32" />
      <line x1="6" y1="11" x2="30" y2="25" />
      <line x1="6" y1="25" x2="30" y2="11" />
      {/* Crystal Branches */}
      <path d="M 14 7 L 18 4 L 22 7" />
      <path d="M 14 29 L 18 32 L 22 29" />
      <path d="M 8 16 L 6 11 L 11 11" />
      <path d="M 28 20 L 30 25 L 25 25" />
      <path d="M 8 20 L 6 25 L 11 25" />
      <path d="M 28 16 L 30 11 L 25 11" />
    </svg>
  );
}

// 2. Refrigeration Systems Icon (Condenser Fan Box)
export function RefrigerationSystemsIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-7 h-7", className)}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Outer Enclosure Box */}
      <rect x="4" y="4" width="28" height="28" rx="4" />
      {/* 4 Corner Screws */}
      <circle cx="7.5" cy="7.5" r="1" fill="currentColor" />
      <circle cx="28.5" cy="7.5" r="1" fill="currentColor" />
      <circle cx="7.5" cy="28.5" r="1" fill="currentColor" />
      <circle cx="28.5" cy="28.5" r="1" fill="currentColor" />
      {/* Circular Grille */}
      <circle cx="18" cy="18" r="9" />
      {/* Center Fan Hub */}
      <circle cx="18" cy="18" r="2.5" fill="currentColor" />
      {/* 4 Fan Blades */}
      <path d="M 18 15.5 C 18 11, 22 10, 24 12" />
      <path d="M 20.5 18 C 25 18, 26 22, 24 24" />
      <path d="M 18 20.5 C 18 25, 14 26, 12 24" />
      <path d="M 15.5 18 C 11 18, 10 14, 12 12" />
    </svg>
  );
}

// 3. Cold Room Equipment Icon (Insulated Cold Room Arch Structure with Snowflake)
export function ColdRoomEquipmentIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-7 h-7", className)}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Outer Chamber Arch */}
      <path d="M 5 32 L 5 11 C 5 6, 11 4, 18 4 C 25 4, 31 6, 31 11 L 31 32" />
      {/* Inner Chamber Framing */}
      <path d="M 9 32 L 9 13 C 9 9, 13 8, 18 8 C 23 8, 27 9, 27 13 L 27 32" />
      {/* Floor Line */}
      <line x1="3" y1="32" x2="33" y2="32" />
      {/* Central Cold Snowflake Symbol */}
      <line x1="18" y1="16" x2="18" y2="26" />
      <line x1="13" y1="18.5" x2="23" y2="23.5" />
      <line x1="13" y1="23.5" x2="23" y2="18.5" />
    </svg>
  );
}

// 4. Industrial Cooling Icon (Factory Building with Chimney & Snowflake)
export function IndustrialCoolingIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-7 h-7", className)}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Factory Pitched Sawtooth Roof & Silo */}
      <path d="M 4 31 L 4 17 L 11 22 L 11 17 L 18 22 L 18 10 L 26 10 L 26 31 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M 4 31 L 4 17 L 11 22 L 11 17 L 18 22 L 18 10 L 26 10 L 26 31" />
      <line x1="2" y1="31" x2="34" y2="31" />
      {/* Factory Windows */}
      <rect x="8" y="24" width="3" height="3" fill="currentColor" />
      <rect x="14" y="24" width="3" height="3" fill="currentColor" />
      {/* Snowflake next to factory */}
      <g transform="translate(29, 18)" strokeWidth="1.8">
        <line x1="0" y1="-6" x2="0" y2="6" />
        <line x1="-5" y1="-3" x2="5" y2="3" />
        <line x1="-5" y1="3" x2="5" y2="-3" />
      </g>
    </svg>
  );
}

// 5. HVAC Solutions Icon (Split AC with Downward Airflow Vents)
export function HvacSolutionsIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-7 h-7", className)}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Indoor AC Unit Chassis */}
      <rect x="4" y="9" width="28" height="13" rx="3" />
      {/* Front Panel Slit & Status Display */}
      <line x1="8" y1="16" x2="24" y2="16" />
      <circle cx="27" cy="16" r="1" fill="currentColor" />
      {/* 3 Air Discharge Waves Below */}
      <path d="M 10 25 L 10 30" />
      <path d="M 18 25 L 18 31" />
      <path d="M 26 25 L 26 30" />
    </svg>
  );
}

// 6. Service & AMC Icon (Crossed Wrench and Screwdriver)
export function ServiceAmcIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-7 h-7", className)}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Screwdriver (Top-Left to Bottom-Right) */}
      <path d="M 28 8 L 24 12 M 24 12 L 14 22 L 10 22 L 10 18 L 20 8 L 24 12" />
      <path d="M 9 23 L 6 30 L 13 27 L 10 24" fill="currentColor" />
      {/* Wrench (Top-Right to Bottom-Left) */}
      <path d="M 8 8 L 11 11 L 22 22 L 25 21 L 27 23 L 26 26 L 23 27 L 21 25 L 22 22 L 11 11 L 8 14 C 5 11, 5 7, 8 8 Z" />
    </svg>
  );
}
