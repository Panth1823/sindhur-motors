import React, { useEffect, useRef, useState } from "react";
import introVideo from "../../assets/Intro/Intro.mp4";

export default function Frame1Video({ onNext }) {
  const videoRef = useRef(null);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch((err) => {
      console.warn("Video play triggered:", err);
    });

    // Video duration is 2.5s: begin smooth fade out at 2.1s, then advance at 2.6s
    const fadeTimer = setTimeout(() => {
      setIsLeaving(true);
    }, 2100);

    const advanceTimer = setTimeout(() => {
      onNext?.();
    }, 2600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(advanceTimer);
    };
  }, [onNext]);

  const handleEnded = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onNext?.();
    }, 450);
  };

  return (
    <div
      className={`frame-video-container ${isLeaving ? "video-leaving" : ""}`}
    >
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
