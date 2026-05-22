import { useEffect, useState, RefObject } from "react";

export function useMousePosition(ref: RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState({ x: 0, y: 0, elementWidth: 0, elementHeight: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        elementWidth: rect.width,
        elementHeight: rect.height,
      });
    };

    const element = ref.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [ref]);

  return position;
}
