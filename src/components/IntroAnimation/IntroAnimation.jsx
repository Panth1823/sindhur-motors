import React, { useState, useEffect } from "react";
import Frame1Video from "./Frame1Video";
import Frame2Tagline from "./Frame2Tagline";
import Frame3Brand from "./Frame3Brand";
import "./IntroAnimation.css";

export default function IntroAnimation({ onFinish }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const TOTAL_FRAMES = 3;

  const handleNext = () => {
    if (currentStep < TOTAL_FRAMES - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      finishIntro();
    }
  };

  const finishIntro = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onFinish?.();
    }, 750);
  };

  // Allow Esc key to exit
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        finishIntro();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Keep glow consistent and blue/neutral - no red
  const glowClass = currentStep >= 1 ? "glow-blue" : "glow-neutral";

  return (
    <div
      className={`intro-container ${isFadingOut ? "intro-fading-out" : ""}`}
      role="dialog"
      aria-label="Sindhur Motos Intro Sequence"
    >
      {/* Ambient Glow */}
      <div className={`intro-ambient-glow ${glowClass}`} />

      {/* Cinematic Vignette */}
      <div className="intro-vignette" />

      {/* Grid Pattern Texture */}
      <div className="intro-grid-overlay" />

      {/* Stage */}
      <div className="intro-stage">
        {currentStep === 0 && <Frame1Video onNext={handleNext} />}
        {currentStep === 1 && (
          <Frame2Tagline onNext={handleNext} duration={2000} />
        )}
        {currentStep === 2 && (
          <Frame3Brand onNext={handleNext} duration={4200} />
        )}
      </div>
    </div>
  );
}
