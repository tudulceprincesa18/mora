import React from "react";

import Navbar from "./components/navbar";
import Header from "./components/header";
import Section from "./components/section";
import Footer from "./components/footer";
import Cv from "./components/cv";
import Contacto from "./components/contacto";
import Swiper from "./components/Swiper";
import Section2 from "./components/section2";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Swiper/>
      <Section2 />
      <Section/>
      <Cv />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
