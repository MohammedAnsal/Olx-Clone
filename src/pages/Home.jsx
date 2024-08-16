import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Posts from "../components/Posts/Posts";
import Banner2 from "../components/Banner-2/Banner-2";
import Footer from "../components/Footer/Footer";
function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Posts />
      <Banner2 />
      <Footer />
    </>
  );
}
export default Home;
