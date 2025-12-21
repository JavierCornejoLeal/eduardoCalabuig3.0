import React from "react";
import backgroundImage from "../assets/images/header/exxterior-reducida.webp";
import "../assets/styles/header.css";

const Header = ({ children }) => {
  return (
    <header
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textShadow: "0 0 10px rgba(0,0,0,0.7)",
        overflow: "hidden",
      }}
    >
      {/* Imagen optimizada para LCP */}
      <img
        src={backgroundImage}
        alt="Transformamos Espacios, Creamos Emociones"
        fetchpriority="high"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />

      {/* Contenido encima */}
      <div
        className="textoContainer"
        style={{
          zIndex: 2,
          fontSize: "6rem",
          fontWeight: "bolder",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        {children}
      </div>
    </header>
  );
};

export default Header;
