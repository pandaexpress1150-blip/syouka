import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  color: string;
  size: number;
  vx: number;
  vy: number;
  ease: number;
  angle: number;
  angleSpeed: number;
}

interface ParticleTextProps {
  text: string;
  className?: string;
}

export const ParticleText: React.FC<ParticleTextProps> = ({
  text,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const initParticles = () => {
      particlesRef.current = [];

      // Draw text offscreen to get pixel data
      ctx.clearRect(0, 0, width, height);

      // Responsive font size
      const fontSize = Math.min(width * 0.25, 250);
      ctx.font = `400 ${fontSize}px "Yuji Mai", "Zhi Mang Xing", serif`;
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Draw text in the center
      ctx.fillText(text, width / 2, height / 2);

      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      // Create particles based on pixel density
      // Adjust gap based on screen size for performance
      const gap = Math.max(Math.floor(width / 400), 2);

      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];

          if (alpha > 128) {
            // Sakura colors
            const colors = [
              "#ffb7c5",
              "#ffcdd2",
              "#f8bbd0",
              "#e598a7",
              "#ffffff",
            ];
            const color = colors[Math.floor(Math.random() * colors.length)];

            particlesRef.current.push({
              x: Math.random() * width, // Start randomly
              y: Math.random() * height + height, // Start from below
              originX: x,
              originY: y,
              color: color,
              size: Math.random() * 1.5 + 1.0,
              vx: 0,
              vy: 0,
              ease: Math.random() * 0.04 + 0.02,
              angle: Math.random() * Math.PI * 2,
              angleSpeed: Math.random() * 0.05 - 0.025,
            });
          }
        }
      }
      ctx.clearRect(0, 0, width, height);
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle background glow
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        width / 2,
      );
      gradient.addColorStop(0, "rgba(255, 183, 197, 0.03)");
      gradient.addColorStop(1, "rgba(10, 15, 26, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      particlesRef.current.forEach((p) => {
        // Mouse interaction
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRef.current.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force =
            (mouseRef.current.radius - distance) / mouseRef.current.radius;
          const directionX = forceDirectionX * force * -5;
          const directionY = forceDirectionY * force * -5;

          p.vx += directionX;
          p.vy += directionY;
        }

        // Return to origin with ease
        p.vx += (p.originX - p.x) * p.ease;
        p.vy += (p.originY - p.y) * p.ease;

        // Add some organic floating motion
        p.angle += p.angleSpeed;
        p.vx += Math.sin(p.angle) * 0.05;
        p.vy += Math.cos(p.angle) * 0.05;

        // Apply friction
        p.vx *= 0.85;
        p.vy *= 0.85;

        p.x += p.vx;
        p.y += p.vy;

        // Draw particle
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.min(
          1,
          Math.max(
            0.1,
            1 - (Math.abs(p.originX - p.x) + Math.abs(p.originY - p.y)) / 200,
          ),
        );
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    initParticles();
    animate();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      cancelAnimationFrame(animationRef.current);
    };
  }, [text]);

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full ${className || ""}`}
      style={{ touchAction: "none" }}
    />
  );
};
