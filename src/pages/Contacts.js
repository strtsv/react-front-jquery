import React from "react";

import Header from "../components/Header";
import Breadcrumbs from "../components/Contacts/Breadcrumbs";
import ContactDetails from "../components/Contacts/ContactDetails";
import Footer from "../components/Footer";

const Contacts = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <ContactDetails />
      <Footer />
    </div>
  );
};

export default Contacts;
