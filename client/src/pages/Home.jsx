import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Home;
