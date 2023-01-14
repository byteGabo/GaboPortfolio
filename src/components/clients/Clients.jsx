import React  from "react";
import "./clients.css"
import bode from "../../assets/logos/bode.png";
import circus from "../../assets/logos/circus.png";
import gogreen from "../../assets/logos/gogreen.png";
import pinche from "../../assets/logos/pinche.png";
import taquisimo from "../../assets/logos/taquisimo.png";
import leici from "../../assets/leicilogo.png"
import sanblas from "../../assets/sanblasLogo.png"




export const Clients = () => {
  return (
    <section className="clients section" id="clients">
      <h2 className="section__title">Clients</h2>
      <span className="section__subtitle"></span>

      <div className="clients__container container">
            <div >
                <img src={bode} alt="" className="client__img" />
            </div>
            <div>
                <img src={circus} alt="" className="client__img"/>
            </div>
            <div>
                <img src={gogreen} alt="" className="client__img"/>
            </div>
            <div>
                <img src={pinche} alt="" className="client__img"/>
            </div>
            <div>
                <img src={taquisimo} alt="" className="client__img"/>
            </div>
            <div>
                <img src={leici} alt="" className="client__img"/>
            </div>
            <div>
                <img src={sanblas} alt="" className="client__img"/>
            </div>
      </div>
    </section>
  );
};
