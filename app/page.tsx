import React, { Fragment } from "react";

import Benefits from "@/components/home-page/Benefits";
import Contact from "@/components/home-page/Contact";
import FAQ from "@/components/home-page/FAQ";
import HeroSection from "@/components/home-page/HeroSection";
import Services from "@/components/home-page/Services";
import UserComments from "@/components/home-page/UserComments";
import WorkSteps from "@/components/home-page/WorkSteps";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <Services />
      <Benefits />
      <WorkSteps />
      <UserComments />
      <FAQ />
      <Contact />
    </Fragment>
  );
};

export default Home;
