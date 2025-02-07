import { useEffect, useState } from 'react';

const PerformanceMonitor = () => {
  const [fps, setFps] = useState(0);
  const [memory, setMemory] = useState({
    usedJSHeapSize: 0,
    totalJSHeapSize: 0,
  });

  useEffect(() => {
    let frameCount = 0;
    let lastTime = window.performance.now();

    const updateFPS = () => {
      const currentTime = window.performance.now();
      frameCount++;

      if (currentTime - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = currentTime;

        // Update memory usage if available
        if (window.performance && window.performance.memory) {
          const memoryInfo = window.performance.memory;
          setMemory({
            usedJSHeapSize: Math.round(
              memoryInfo.usedJSHeapSize / (1024 * 1024)
            ),
            totalJSHeapSize: Math.round(
              memoryInfo.totalJSHeapSize / (1024 * 1024)
            ),
          });
        }
      }

      window.requestAnimationFrame(updateFPS);
    };

    const animationId = window.requestAnimationFrame(updateFPS);

    return () => {
      window.cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: '10px',
        left: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: '#fff',
        padding: '10px',
        borderRadius: '5px',
        fontFamily: 'monospace',
        zIndex: 9999,
      }}
    >
      <div>FPS: {fps}</div>
      <div>
        Memory: {memory.usedJSHeapSize}MB / {memory.totalJSHeapSize}MB
      </div>
    </div>
  );
};

export default PerformanceMonitor;
