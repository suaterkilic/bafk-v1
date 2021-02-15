import React, { Fragment } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Layout({ children }) {
  return (
    <Fragment>
      <div className="bb-container" id="bb-container">
        <Header />
        <div className="offcanvas_container">
          <div className="offcanvas_main_content">
            { children }
            <Footer />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Layout;
