import React from "react";

import Header from "../components/Header";

import Welcome from "../components/Home/Welcome";
import Categories from "../components/Home/Categories";
import Jobs from "../components/Home/Jobs";
import Candidates from "../components/Home/Candidates";
import Stories from "../components/Home/Stories";
import Pricing from "../components/Home/Pricing";
import Companies from "../components/Home/Companies";
import Steps from "../components/Home/Steps";
import Latest from "../components/Home/Latest";
import CTA from "../components/CTA";

import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <Welcome />
      <Categories />
      <Jobs />
      <Candidates />
      <Stories />
      <Pricing />
      <Companies />
      <Steps />
      <Latest />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
