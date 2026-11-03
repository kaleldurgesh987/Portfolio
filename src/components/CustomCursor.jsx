import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch-only device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    let targetX = -100;
    let targetY = -100;
    let currentTrailX = -100;
    let currentTrailY = -100;
    let animId;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: targetX, y: targetY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over interactive element
      const target = e.target;
      const isInteractive = target && (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive') ||
        target.getAttribute('role') === 'button'
      );
      setIsHovered(Boolean(isInteractive));
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Smooth trailing animation loop
    const updateTrail = () => {
      const speed = 0.22;
      currentTrailX += (targetX - currentTrailX) * speed;
      currentTrailY += (targetY - currentTrailY) * speed;
      setTrailPos({ x: currentTrailX, y: currentTrailY });
      animId = requestAnimationFrame(updateTrail);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    animId = requestAnimationFrame(updateTrail);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Primary Inner Dot */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full transition-transform duration-75 ease-out"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isHovered ? '8px' : '6px',
          height: isHovered ? '8px' : '6px',
          backgroundColor: '#00F0FF',
          boxShadow: '0 0 10px #00F0FF, 0 0 20px #00F0FF',
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.7 : isHovered ? 1.5 : 1})`,
        }}
      />

      {/* Smooth Trailing Follower Ring */}
      <div
        className="fixed pointer-events-none z-[9998] rounded-full border border-purple-400/80 transition-all duration-300 ease-out"
        style={{
          left: `${trailPos.x}px`,
          top: `${trailPos.y}px`,
          width: isHovered ? '48px' : '32px',
          height: isHovered ? '48px' : '32px',
          borderColor: isHovered ? '#00F0FF' : 'rgba(168, 85, 247, 0.7)',
          backgroundColor: isHovered ? 'rgba(0, 240, 255, 0.08)' : 'rgba(168, 85, 247, 0.04)',
          boxShadow: isHovered 
            ? '0 0 20px rgba(0, 240, 255, 0.4)' 
            : '0 0 12px rgba(168, 85, 247, 0.25)',
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.85 : 1})`,
        }}
      />
    </>
  );
}
