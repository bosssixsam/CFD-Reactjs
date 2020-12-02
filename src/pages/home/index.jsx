import React, { useState } from "react";
import Banner from "./components/Banner";
import CalltoAction from "./components/CalltoAction";
import Carousel from "./components/Carousel";
import Courses from "./components/Courses";
import Info from "./components/Info";
import OfflineCourses from "./components/OffflineCourses";
import Testomonial from "./components/Testomonial";

const Home = ({ label, name }) => {
  const [state, setstate] = useState("");

  return (
    <>
      <Banner />

      <div className="intro">
        <div className="container">
          <h4>
            The readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </h4>
        </div>
      </div>

      <Courses />

      <OfflineCourses />

      <Info />

      <Testomonial />

      <Carousel />

      <CalltoAction />
    </>
  );
};

export default Home;
