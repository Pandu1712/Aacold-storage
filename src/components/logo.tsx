import mainLogoUrl from "@/assets/MainLogo.png";
import { cn } from "@/lib/utils";

export { mainLogoUrl };

interface LogoProps {
  variant?: "light" | "dark" | "hero" | "full" | "standalone";
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

/**
 * Authentic Circular AA + Snowflake Emblem from MainLogo.png
 */
export function AACSEmblemIcon({ className }: { className?: string }) {
  return (
    <img
      src={mainLogoUrl}
      alt="AA Cold Storages Logo Emblem"
      className={cn("w-full h-full object-contain select-none drop-shadow-sm", className)}
    />
  );
}

/**
 * Standalone direct MainLogo image component
 */
export function MainLogo({ className, alt = "AA Cold Storages Logo" }: { className?: string; alt?: string }) {
  return (
    <img
      src={mainLogoUrl}
      alt={alt}
      className={cn("object-contain select-none", className)}
    />
  );
}

export function AACSLogo({
  variant = "light",
  className,
  showTagline = true,
  size = "md",
}: LogoProps) {
  const isDark = variant === "dark" || variant === "hero";

  if (variant === "standalone") {
    const standaloneSizes = {
      sm: "h-10 w-10",
      md: "h-14 w-14",
      lg: "h-20 w-20",
      xl: "h-28 w-28",
    }[size];

    return (
      <img
        src={mainLogoUrl}
        alt="AA Cold Storages Official Logo"
        className={cn("object-contain select-none", standaloneSizes, className)}
      />
    );
  }

  const sizeClasses = {
    sm: "h-10 w-10 sm:h-11 sm:w-11",
    md: "h-11 w-11 sm:h-13 sm:w-13",
    lg: "h-14 w-14 sm:h-16 sm:w-16",
    xl: "h-20 w-20 sm:h-24 sm:w-24",
  }[size];

  return (
    <div className={cn("inline-flex items-center gap-2.5 sm:gap-3 select-none", className)}>
      {/* Official MainLogo.png Emblem */}
      <div className={cn("relative shrink-0 transition-transform duration-300 hover:scale-105", sizeClasses)}>
        <AACSEmblemIcon className={isDark ? "drop-shadow-[0_2px_12px_rgba(10,168,245,0.4)] brightness-110" : ""} />
      </div>

      {/* Official Logo Typography & Font: AA in Deep Navy, COLD STORAGES in Blue */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline gap-1.5 font-display text-lg sm:text-xl font-black tracking-tight uppercase">
          <span className={isDark ? "text-white" : "text-[#002E7D]"}>AA</span>
          <span className={isDark ? "text-[#4FC7FF]" : "text-[#0050A7]"}>COLD STORAGES</span>
        </div>

        {showTagline && (
          <div className="mt-1 flex items-center gap-1">
            <span className={cn("h-[1px] w-2 sm:w-3", isDark ? "bg-[#4FC7FF]/60" : "bg-[#0050A7]/60")} />
            <span
              className={cn(
                "text-[0.55rem] sm:text-[0.62rem] font-extrabold tracking-[0.18em] uppercase font-display",
                isDark ? "text-[#4FC7FF]" : "text-[#0050A7]"
              )}
            >
              COMPLETE COOLING SOLUTIONS
            </span>
            <span className={cn("h-[1px] w-2 sm:w-3", isDark ? "bg-[#4FC7FF]/60" : "bg-[#0050A7]/60")} />
          </div>
        )}
      </div>
    </div>
  );
}
