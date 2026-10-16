import React, { useState, useRef } from "react";
import BgImg from "../assets/Home/VehicleSlider/Bg.webp";
import VehicleImg from "../assets/Home/VehicleSlider/1.webp";
import VehicleImg1 from "../assets/Home/VehicleSlider/2.webp";
import VehicleImg2 from "../assets/Home/VehicleSlider/3.webp";
import VehicleImg3 from "../assets/Home/VehicleSlider/4.webp";
import VehicleImg4 from "../assets/Home/VehicleSlider/5.webp";
import VehicleImg5 from "../assets/Home/VehicleSlider/6.webp";

const slides = [
  {
    id: 1,
    title: "Made for Living",
    subtitle: "Built for Becoming",
    image: VehicleImg,
  },
  {
    id: 2,
    title: "Made for Living",
    subtitle: "Built for Becoming",
    image: VehicleImg1,
  },
  {
    id: 3,
    title: "Made for Living",
    subtitle: "Built for Becoming",
    image: VehicleImg2,
  },
  {
    id: 4,
    title: "Made for Living",
    subtitle: "Built for Becoming",
    image: VehicleImg3,
  },
  {
    id: 5,
    title: "Made for Living",
    subtitle: "Built for Becoming",
    image: VehicleImg4,
  },
  {
    id: 6,
    title: "Made for Living",
    subtitle: "Built for Becoming",
    image: VehicleImg5,
  },
];

export default function VehicleSlider() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  const isStart = current === 0;
  const isEnd = current === slides.length - 1;

  const prevSlide = () => {
    if (!isStart) {
      setCurrent((prev) => prev - 1);
    }
  };

  const nextSlide = () => {
    if (!isEnd) {
      setCurrent((prev) => prev + 1);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    touchStartX.current = null;
  };

  return (
    <section
      className="vehicle-slider"
      style={{ backgroundImage: `url(${BgImg})` }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slider-content">
        <div className="slider-badge">
          <span className="slider-badge-line" />
          <span className="slider-badge-text">Built for Becoming</span>
        </div>

        <div className="slider-stage">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={slide.id + "-" + index} className="slider-slide">
                <img
                  src={slide.image}
                  alt={`Vehicle ${index + 1}`}
                  className="slider-vehicle-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="slider-footer">
        <h2 className="slider-title">{slides[current].title}</h2>
        <div className="slider-controls">
          <button
            type="button"
            onClick={prevSlide}
            disabled={isStart}
            className={`slider-arrow-btn ${isStart ? "inactive" : ""}`}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M2.873 8.25H15V6.75H2.873L8.56925 1.05375L7.5 0L0 7.5L7.5 15L8.56925 13.9462L2.873 8.25Z"
                fill={
                  isStart
                    ? "var(--color-Text-Black-400, #383838)"
                    : "var(--color-BG-White, #FFF)"
                }
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={nextSlide}
            disabled={isEnd}
            className={`slider-arrow-btn ${isEnd ? "inactive" : ""}`}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M12.127 8.25H0V6.75H12.127L6.43075 1.05375L7.5 0L15 7.5L7.5 15L6.43075 13.9462L12.127 8.25Z"
                fill={
                  isEnd
                    ? "var(--color-Text-Black-400, #383838)"
                    : "var(--color-BG-White, #FFF)"
                }
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
