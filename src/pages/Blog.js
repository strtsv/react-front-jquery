import React from "react";

import Header from "../components/Header";
import Breadcrumbs from "../components/Blog/Breadcrumbs";
import Posts from "../components/Blog/Posts";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <Posts />
      <Footer />
    </div>
  );
};

export default Blog;
