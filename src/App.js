import React from "react";


import Header from "./components/header";
import Navbar from "./components/navbar";
import Section from "./components/section";
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/> 
      <Section/>
      <Footer/>
    </div>
  );
}

export default App;
