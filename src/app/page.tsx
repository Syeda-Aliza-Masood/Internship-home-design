import NavBar from "./Components/NavBar";
import Secondbar from "./Components/Secondbar";
import GrayBackgroundSection from "./Components/GrayBackgroundSection";
import HeroSection from "./Components/HeroSection";
import DealsSection from "./Components/DealsSection";
import HomeSection from "./Components/HomeSection";
import ElectronicSection from "./Components/ElectronicSection"
import SendQuote from "./Components/Sendquote";
import RecommendedSection from "./Components/RecommendedSection";
import ServiceSection from "./Components/ServiceSection";
import SuppliersSection from "./Components/SuppliersSection";
import SubscribeSection from "./Components/SubscribeSection";
import Footer from "./Components/Footer";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Secondbar />
      <GrayBackgroundSection />
      <Footer />
     
    </div>
  );
}
