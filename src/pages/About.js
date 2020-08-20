import React from "react";

import Header from "../components/Header";
import AboutUs from "../components/About/AboutUs";
import Welcome from "../components/About/Welcome";
import Counters from "../components/About/Counters";
import CompaniesHelped from "../components/About/CompaniesHelped";
import CTA from "../components/About/CTA";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="page animated">
      <Header />
      <AboutUs />
      <Welcome />
      <Counters />
      <CompaniesHelped />
      <CTA />
      <Footer />
    </div>
  );
};

export default About;
