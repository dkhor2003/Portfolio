import { useEffect, useRef } from "react";

export const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();

    const auroras = Array.from({ length: 4 }, (_, i) => ({
      offset: i * 200,
      speed: 0.0005 + Math.random() * 0.0005,
      // Lower opacity for subtle effect
      color: `hsla(${180 + i * 40}, 60%, 60%, 0.15)`,
    }));

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, targetX: 0, targetY: 0 };
    window.addEventListener("mousemove", (e) => {
      mouse.targetX = e.clientX - window.innerWidth / 2;
      mouse.targetY = e.clientY - window.innerHeight / 2;
    });

    function drawAurora(time) {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let a of auroras) {
        ctx.beginPath();

        const amplitude = 150; // smaller amplitude for subtle effect
        const wavelength = 0.0025;
        // Baseline slightly shifts based on mouse
        const baseline = window.innerHeight / 3 + a.offset + mouse.targetY * 0.05;

        ctx.moveTo(0, baseline);

        for (let x = 0; x <= window.innerWidth; x += 10) {
          // Aurora moves slightly with mouse X
          const y =
            baseline +
            Math.sin(x * wavelength + time * a.speed) * amplitude * Math.sin(time * 0.0003) +
            mouse.targetX * 0.02;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(window.innerWidth, window.innerHeight);
        ctx.lineTo(0, window.innerHeight);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, baseline - 150, 0, window.innerHeight);
        gradient.addColorStop(0, a.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    function animate(time) {
      drawAurora(time);
      requestAnimationFrame(animate);
    }

    animate(0);
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};
