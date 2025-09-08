import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes, type PropsWithChildren } from "react";

type SnapProviderProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export const SnapProvider = forwardRef<HTMLDivElement, SnapProviderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex-1 overflow-y-scroll snap-y snap-mandatory scroll-smooth",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
SnapProvider.displayName = "SnapProvider";

type SnapSectionProps = PropsWithChildren<HTMLAttributes<HTMLElement>>;

export const SnapSection = forwardRef<HTMLElement, SnapSectionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("snap-start h-full w-full", className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);
SnapSection.displayName = "SnapSection";
