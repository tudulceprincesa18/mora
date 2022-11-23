import React from "react";

import Navbar from "./components/navbar";
import Header from "./components/header";
import Section from "./components/section";
import Footer from "./components/footer";
import Contacto from "./components/contacto";
import Section2 from "./components/section2";
import Skills from "./components/skills/skills";
import appStyles from './index.module.css';




function App() {
  return (
    <div className={ appStyles.app }>
      <Navbar/>
      <Header/>
      <Section2 />
      <Skills/>
      <Section/>
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
