import React, { useEffect, useState } from "react";

export default function Frame2Tagline({ onNext, duration = 3200 }) {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Start exit transition 600ms before next frame
    const leaveTimer = setTimeout(() => {
      setIsLeaving(true);
    }, Math.max(duration - 600, 1000));

    const nextTimer = setTimeout(() => {
      onNext?.();
    }, duration);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(nextTimer);
    };
  }, [onNext, duration]);

  return (
    <div
      className={`frame-tagline-container ${
        isLeaving ? "tagline-leaving" : ""
      }`}
    >
      {/* Animated centered blue blur glow element */}
      <div className="tagline-glow-blob" />

      {/* Tagline Text with smooth entrance & exit */}
      <h1 className="tagline-text">
        <span className="tagline-highlight">The future</span>{" "}
        <span className="tagline-rest">has a new name</span>
      </h1>
    </div>
  );
}
