import React from "react";
import DefaultBannerBg from "../assets/Home/Banner/Banner.png";

export default function Banner({ bg = DefaultBannerBg, className = "", children }) {
  return (
    <section
      className={`banner ${className}`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="banner-content">
        {children}
      </div>
    </section>
  );
}

