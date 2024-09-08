// components/CanvasAnimation.tsx
"use client";
import { useEffect, useRef } from "react";

interface Thing {
  width: number;
  height: number;
  x: number;
  y: number;
  speed: number;
  vY: number;
  vX: number;
  d: number;
  stepSize: number;
  step: number;
  angle: number;
  rad: number;
  opacity: number;
  _ratate: number;
}

const CanvasAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const things: Thing[] = [];
    const thingsCount = 12;
    const mouse = { x: -100, y: -100 };
    const minDist = 150;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const image = new Image();
    image.src =
      "https://static.wixstatic.com/media/2cd43b_57438aebde5a4b0fa20c6880a9fafabf~mv2.png/v1/fill/w_320,h_272,fp_0.50_0.50/2cd43b_57438aebde5a4b0fa20c6880a9fafabf~mv2.png";

    image.onload = () => {
      for (let i = 0; i < thingsCount; i++) {
        let opacity = Math.random() + 0.4;
        let thingWidth = (Math.floor(Math.random() * 20) + 20) * (opacity + 0.4);
        let thingHeight = (image.naturalHeight / image.naturalWidth) * thingWidth;
        let speed = Math.random() * 1 + 0.5;
        things.push({
          width: thingWidth,
          height: thingHeight,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - thingHeight,
          speed: speed,
          vY: speed,
          vX: 0,
          d: Math.random() * 1.2 - 0.6,
          stepSize: Math.random() / 20,
          step: 0,
          angle: Math.random() * 180 - 90,
          rad: Math.random(),
          opacity: opacity,
          _ratate: Math.random(),
        });
      }
    };

    const drawThings = () => {
      things.forEach((thing) => {
        ctx.beginPath();
        thing.rad = (thing.angle * Math.PI) / 180;
        ctx.save();
        const cx = thing.x + thing.width / 2;
        const cy = thing.y + thing.height / 2;
        ctx.globalAlpha = thing.opacity;
        ctx.setTransform(
          Math.cos(thing.rad),
          Math.sin(thing.rad),
          -Math.sin(thing.rad),
          Math.cos(thing.rad),
          cx - cx * Math.cos(thing.rad) + cy * Math.sin(thing.rad),
          cy - cx * Math.sin(thing.rad) - cy * Math.cos(thing.rad)
        );
        ctx.drawImage(image, thing.x, thing.y, thing.width, thing.height);
        ctx.restore();
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawThings();
    };

    const update = () => {
      things.forEach((thing) => {
        const dist = Math.sqrt(
          (thing.x - mouse.x) ** 2 + (thing.y - mouse.y) ** 2
        );

        if (dist < minDist) {
          const force = minDist / (dist * dist);
          const xcomp = (mouse.x - thing.x) / dist;
          const ycomp = (mouse.y - thing.y) / dist;
          const deltaV = force * 2;

          thing.vX -= deltaV * xcomp;
          thing.vY -= deltaV * ycomp;

          if (thing.d * xcomp > 0) {
            thing.d = -thing.d;
          }
        } else {
          thing.vX *= 0.98;

          if (thing.vY < thing.speed) {
            thing.vY = thing.speed;
          }

          thing.vX += Math.cos((thing.step += Math.random() * 0.05)) * thing.stepSize;
        }

        thing.y += thing.vY;
        thing.x += thing.vX + thing.d;

        const _angle = Math.random() + 0.2;
        if (thing._ratate === 0) {
          thing.angle += _angle;
        } else {
          thing.angle -= _angle;
        }

        if (thing.y > canvas.height || thing.x > canvas.width || thing.x < -thing.width) {
          reset(thing);
        }
      });
    };

    const reset = (thing: Thing) => {
      thing.opacity = Math.random() + 0.4;
      thing.width = (Math.floor(Math.random() * 20) + 20) * (thing.opacity + 0.4);
      thing.height = (image.naturalHeight / image.naturalWidth) * thing.width;
      thing.x = Math.floor(Math.random() * canvas.width);
      thing.y = -thing.height;
      thing.speed = Math.random() * 1 + 0.5;
      thing.vY = thing.speed;
      thing.vX = 0;
      thing._ratate = Math.random();
    };

    const tick = () => {
      draw();
      update();
      requestAnimationFrame(tick);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    tick();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} id="canvas" />;
};

export default CanvasAnimation;
