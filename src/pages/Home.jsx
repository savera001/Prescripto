import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";

const Home = () => {
  return (
    <>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </>
  );
};

export default Home;
