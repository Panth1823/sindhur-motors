import React, { useEffect, useState } from "react";
import logoSvg from "../../assets/Intro/Logo.svg";

export default function Frame3Brand({ onNext, duration = 4200 }) {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = setTimeout(
      () => {
        setIsLeaving(true);
      },
      Math.max(duration - 600, 1000),
    );

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
      className={`frame-brand-container ${isLeaving ? "brand-leaving" : ""}`}
    >
      {/* Centered blue blur glow element */}
      <div className="brand-glow-blob" />

      {/* Brand Logo Image with smooth sheen glow */}
      <div className="brand-logo-wrapper">
        <img src={logoSvg} alt="Sindhur Motos" className="brand-logo-img" />
        <div className="brand-light-sheen" />
      </div>
    </div>
  );
}
