import Benefits from "@/components/home-page/Benefits";
import FAQ from "@/components/home-page/FAQ";
import HeroSection from "@/components/home-page/HeroSection";
import Services from "@/components/home-page/Services";
import UserComments from "@/components/home-page/UserComments";
import WorkSteps from "@/components/home-page/WorkSteps";
import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <Services />
      <Benefits />
      <WorkSteps />
      <UserComments />
      <FAQ />
    </Fragment>
  );
};

export default Home;
