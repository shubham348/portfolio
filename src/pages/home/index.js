import React from "react";
import Header from "../../components/header";
import Greeting from "../../components/greeting/Greeting";
import Skills from "../../components/skills/Skills";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Greeting />
      <Skills />
      <Footer />
    </>
  );
}
