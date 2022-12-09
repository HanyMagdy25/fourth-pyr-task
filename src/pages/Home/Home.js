import React from "react";
import About from "../../components/About/About";
import FavouriteCards from "../../components/FavouriteCards/FavouriteCards";
import Footer from "../../components/Footer/Footer";
import BottomHero from "../../components/Hero/BottomHero";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Shop from "../../components/Shop/Shop";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BottomHero />
      <FavouriteCards />
      <Shop />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
