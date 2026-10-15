import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import VehicleSlider from "../components/VehicleSlider";
import Footer from "../components/Footer";

export default function Home({ onReplayIntro }) {
  return (
    <div>
      <Navbar />
      <Banner className="banner-home" />
      <VehicleSlider />
      <Footer />
    </div>
  );
}

