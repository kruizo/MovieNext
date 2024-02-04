// Home.js (or index.js)
import React from "react";
import HomeBanner from "./components/Banner/HomeBanner";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      <HomeBanner />
      <MainContent />
      <Footer />
    </div>
  );
}
