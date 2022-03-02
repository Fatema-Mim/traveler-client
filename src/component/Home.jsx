import React from "react";
import About from "./About";
import Banner from "./Banner";
import CallUs from "./CallUs";
import ClientSay from "./ClientSay";
import ImageGallery from "./ImageGallery";
import Package from "./Package";
import UpcomingTour from "./UpcomingTour";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <Package />
      <About />
      <CallUs />
      <UpcomingTour />
      <WhyUs />
      <ClientSay />
      <ImageGallery />
    </div>
  );
};

export default Home;
