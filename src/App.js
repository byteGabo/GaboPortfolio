import React from "react";
import "./App.css";
import { About } from "./components/about/About";
import { Clients } from "./components/clients/Clients";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Qualification } from "./components/qualification/Qualification";
import { ScrollUp } from "./components/scrollup/ScrollUp";
import { Services } from "./components/services/Services";
import { Skills } from "./components/skills/Skills";
import { Work } from "./components/work/Work";



function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills/>
        <Services/>
        <Qualification/>
        <Work/>
        <Clients/>
        <Contact/>
        
      </main>

      <Footer/>
      <ScrollUp/>
    </>
  );
}

export default App;
