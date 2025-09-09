"use client";

import { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/AnimatedBeam";
import { stack } from "@/constants/stack";

const Circle = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex h-16 w-16 items-center justify-center rounded-full border bg-zinc-100 p-3 dark:bg-zinc-800 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Circle.displayName = "Circle";

export const BeamTechnologies = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const meRef = useRef<HTMLDivElement>(null);
  const nodejsRef = useRef<HTMLDivElement>(null);
  const reactRef = useRef<HTMLDivElement>(null);
  const typescriptRef = useRef<HTMLDivElement>(null);
  const dockerRef = useRef<HTMLDivElement>(null);
  const postgresqlRef = useRef<HTMLDivElement>(null);
  const redisRef = useRef<HTMLDivElement>(null);

  const techStack = {
    nodejs: stack.find((s) => s.stackname === "Node.js"),
    react: stack.find((s) => s.stackname === "React.js"),
    typescript: stack.find((s) => s.stackname === "TypeScript"),
    docker: stack.find((s) => s.stackname === "Docker"),
    postgresql: stack.find((s) => s.stackname === "PostgreSQL"),
    redis: stack.find((s) => s.stackname === "Redis"),
  };

  return (
    <div
      className="relative flex w-full max-w-2xl items-center justify-center"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-16">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={nodejsRef}>
            <img
              src={techStack.nodejs?.stackicon}
              alt={techStack.nodejs?.stackname}
              className="h-8 w-8"
            />
          </Circle>
          <Circle ref={reactRef}>
            <img
              src={techStack.react?.stackicon}
              alt={techStack.react?.stackname}
              className="h-8 w-8"
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={typescriptRef}>
            <img
              src={techStack.typescript?.stackicon}
              alt={techStack.typescript?.stackname}
              className="h-8 w-8"
            />
          </Circle>
          <Circle
            ref={meRef}
            className="h-24 w-24 border-primary/50 bg-primary/10"
          >
            <img
              src="/images/me.jpeg"
              alt="Élcio"
              className="h-16 w-16 rounded-full object-cover"
            />
          </Circle>
          <Circle ref={dockerRef}>
            <img
              src={techStack.docker?.stackicon}
              alt={techStack.docker?.stackname}
              className="h-8 w-8"
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={postgresqlRef}>
            <img
              src={techStack.postgresql?.stackicon}
              alt={techStack.postgresql?.stackname}
              className="h-8 w-8"
            />
          </Circle>
          <Circle ref={redisRef}>
            <img
              src={techStack.redis?.stackicon}
              alt={techStack.redis?.stackname}
              className="h-8 w-8"
            />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={meRef}
        toRef={nodejsRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={meRef}
        toRef={reactRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={meRef}
        toRef={typescriptRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={meRef}
        toRef={dockerRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={meRef}
        toRef={postgresqlRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={meRef}
        toRef={redisRef}
        duration={3}
      />
    </div>
  );
};
