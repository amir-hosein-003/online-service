import { Fragment } from "react";

import HeroSection from "@/components/home-page/HeroSection";
import Services from "@/components/home-page/Services";
import Benefits from "@/components/home-page/Benefits";
import WorkSteps from "@/components/home-page/WorkSteps";
import UserComments from "@/components/home-page/UserComments";
import FAQ from "@/components/home-page/FAQ";
import Contact from "@/components/home-page/Contact";

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
