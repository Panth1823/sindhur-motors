import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import AboutBannerBg from "../assets/About/Banner.png";

export default function About() {
  return (
    <div>
      <Navbar />
      <Banner bg={AboutBannerBg} className="banner-about" />
      <Footer />
    </div>
  );
}

