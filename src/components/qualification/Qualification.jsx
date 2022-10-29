import React, { useState } from "react";
import "./qualification.css";

export const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Ingeniería en Sistemas</h3>
                <span className="qualification__subtitle">
                  Universidad de Occidente
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2014 - 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Bachiller en Computación</h3>
                <span className="qualification__subtitle">
                  Col. Monte Verde | Quetgo.
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2008 - 2010
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Meta Course
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">JavaScript</h3>
                <span className="qualification__subtitle">
                  FreeCodeAcademy Course
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Gerente de Mercadeo</h3>
                <span className="qualification__subtitle">
                  ServiProyectos de Occidente
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Encargado de Agencia</h3>
                <span className="qualification__subtitle">
                  Airpak Western Union
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2017
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Cajero</h3>
                <span className="qualification__subtitle">
                  Inverco SA
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2014 - 2015
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Freelance Designer</h3>
                <span className="qualification__subtitle">
                  
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2011-Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
