import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = ({ children }) => {
  return (
    <>
      <main className="container-fluid m-0 p-0">
        <Header />
        {children}

        <Footer />
      </main>
    </>
  );
};

export default AppLayout;
