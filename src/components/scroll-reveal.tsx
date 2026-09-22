import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type RevealDirection = "up" | "down" | "left" | "right" | "zoom" | "fade";

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number; // in ms
  duration?: number; // in ms
  distance?: number; // in px
  className?: string;
  threshold?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 650,
  distance = 40,
  className,
  threshold = 0.08,
  once = false, // Set to false to trigger animations when scrolling both UP and DOWN
  ...props
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px", // Animates smoothly as element enters viewport
      }
    );

    observer.observe(el);

    // If element is already in viewport on mount, trigger reveal
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 30 && rect.bottom > 30) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, Math.min(50 + delay, 300));
      return () => {
        clearTimeout(timer);
        observer.disconnect();
      };
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, once, delay]);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0)`;
      case "down":
        return `translate3d(0, -${distance}px, 0)`;
      case "left":
        return `translate3d(-${distance}px, 0, 0)`;
      case "right":
        return `translate3d(${distance}px, 0, 0)`;
      case "zoom":
        return `scale(0.92) translate3d(0, ${Math.round(distance / 2)}px, 0)`;
      case "fade":
      default:
        return "translate3d(0, 0, 0)";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "will-change-[transform,opacity,filter]",
        className
      )}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0) scale(1)" : getInitialTransform(),
        filter: isVisible ? "blur(0px)" : "blur(2px)",
        transitionProperty: "transform, opacity, filter",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      {...props}
    >
      {children}
    </div>
  );
}
