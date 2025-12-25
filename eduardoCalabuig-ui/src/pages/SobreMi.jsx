import React from "react";

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

import "../assets/styles/home.css";
import Eduardo from "../assets/images/sobreMi/edu2.webp";

const SobreMi = () => {
  return (
    <>
      <SEO
        title="Diseño de Interiores | Sobre mí"
        description="Soy Eduardo Calabuig, un diseñador de interiorismo especializado en crear espacios únicos y funcionales. Con una pasión por el diseño y la atención al detalle, transformo ideas en realidades."
      />
      <NavBar />

      <Header>
        <p>Eduardo Calabuig</p>
      </Header>

      <main>
        <section className="py-5 shadow-lg">
          <div className="container">
            <div className="row py-5">
              <div className="col-12 text-center pb-5">
                <h1 className="pb-2">Eduardo Calabuig</h1>
                <h5>Diseñador de interiorismo</h5>
              </div>
              <div className="col-12 d-flex align-items-center justify-content-center pb-3">
                <img
                  src={Eduardo}
                  alt="Eduardo Calabuig como diseñador de interiorismo"
                  className="img-fluid w-100 eduardoImage"
                  style={{ objectFit: "cover", height: "44em" }}
                />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <p className="pt-4 pb-1 lh-lg">
                  Nacido en la ciudad de Dénia, mi pasión por la montaña y mi
                  experiencia como scout han marcado profundamente mi forma de
                  ser. Ambos aspectos me han enseñado el valor de la
                  observación, la paciencia y el respeto por el entorno,
                  principios que aplico en cada proyecto que realizo.
                </p>
                <p className="pb-1 lh-lg">
                  Mi trabajo se centra en la búsqueda de técnicas tradicionales
                  para trabajar los materiales de la zona, en entender su
                  naturaleza y aprovechar su carácter. Persigo la simplicidad y
                  la ergonomía como base del diseño, buscando siempre que los
                  espacios sean honestos, funcionales y coherentes con su
                  contexto.
                </p>
                <p className="pb-1 lh-lg">
                  Cuento con varios años de experiencia en obra, un recorrido
                  que ha esculpido mi manera de pensar y me ha dado las
                  herramientas necesarias para transformar los planos en
                  resultados tangibles y reales.
                </p>
                <p className="pb-1 lh-lg">
                  En mi tiempo libre me gusta esculpir, una actividad que me
                  conecta con la materia y me recuerda la importancia del
                  proceso manual, de trabajar con las manos y del valor que
                  tiene cada detalle bien hecho.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SobreMi;
