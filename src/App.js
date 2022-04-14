import React from "react";


import Header from "./components/header";
import Navbar from "./components/navbar";
import Section from "./components/section";
import Footer from "./components/footer";
import Cv from "./components/cv";
import Contacto from "./components/contacto";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Section/>
      <Cv />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
