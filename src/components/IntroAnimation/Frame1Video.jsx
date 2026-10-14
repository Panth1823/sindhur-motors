import React, { useEffect, useRef } from "react";
import introVideo from "../../assets/Intro/Intro.mp4";

export default function Frame1Video({ onNext }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch((err) => {
      console.warn("Video play triggered:", err);
    });

    // Fallback in case onEnded event does not fire
    const fallbackTimer = setTimeout(() => {
      onNext?.();
    }, 2800);

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, [onNext]);

  const handleEnded = () => {
    onNext?.();
  };

  return (
    <div className="frame-video-container">
      <video
        ref={videoRef}
        src={introVideo}
        className="intro-video-element"
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
      />
    </div>
  );
}
