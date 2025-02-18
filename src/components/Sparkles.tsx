"use client";

import type { ISourceOptions } from "@tsparticles/engine";
import { useEffect, useId, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

interface SparklesProps {
  className?: string;
  size?: number;
  minSize?: number | null;
  density?: number;
  speed?: number;
  minSpeed?: number | null;
  opacity?: number;
  opacitySpeed?: number;
  minOpacity?: number | null;
  color?: string;
  background?: string;
  options?: Partial<ISourceOptions>;
}

export function Sparkles({
  className,
  size = 2,
  minSize = null,
  density = 250,
  speed = 1,
  minSpeed = null,
  opacity = 1,
  opacitySpeed = 3,
  minOpacity = null,
  color = "#FFFFFF",
  background = "transparent",
  options = {},
}: SparklesProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setIsReady(true);
    });
  }, []);

  const id = useId();

  // ... existing code ...
  const defaultOptions = {
    background: {
      color: {
        value: background,
      },
    },
    fullScreen: {
      enable: false,
      zIndex: 1,
    },
    fpsLimit: 144,
    particles: {
      color: {
        value: color,
      },
      links: {
        enable: false,
      },
      move: {
        enable: true,
        direction: "none" as const,
        random: true,
        speed: {
          min: minSpeed ?? speed / 2,
          max: speed,
        },
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: density,
      },
      opacity: {
        value: {
          min: minOpacity ?? opacity / 2,
          max: opacity,
        },
        animation: {
          enable: true,
          speed: opacitySpeed,
          minimumValue: 0.1,
        },
      },
      size: {
        value: {
          min: minSize ?? size / 2,
          max: size,
        },
      },
    },
    detectRetina: true,
  };

  return (
    isReady && (
      <Particles
        id={id}
        options={{ ...defaultOptions, ...options }}
        className={`pointer-events-none ${className}`}
      />
    )
  );
}
