import React from "react";
import { Route, Switch } from "react-router-dom";

import "./assets/css/bootstrap.css";
import "./assets/css/fonts.css";
import "./assets/css/style.css";

import Home from "./pages/Home";
import About from "./pages/About";
import BlogPost from "./pages/BlogPost";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
// import Privacy from "./pages/Privacy";

function App() {
  return (
    <Switch>
      <Route exact path="/about-us.html" component={About} />
      <Route exact path="/contact-us.html" component={Contacts} />
      <Route exact path="/blog.html" component={Blog} />
      <Route exact path="/blog-post.html" component={BlogPost} />
      {/* <Route exact path="/index-5.html" component={Privacy} /> */}
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
