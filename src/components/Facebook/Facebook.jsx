import React from "react";
import SideNav from "./SideNav";
import Feed from "./Feed";
import Adds from "./Adds";
import Navbar from "./Navbar";

const Facebook = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          <SideNav />
          <Feed />
          <Adds />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Facebook;
