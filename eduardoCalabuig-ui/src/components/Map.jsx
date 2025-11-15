import React, { useEffect, useRef, useState } from "react";

const estilosMapa = [
  {
    featureType: "poi",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },
];

function Mapa() {
  const mapaRef = useRef(null);
  const [mapCargado, setMapCargado] = useState(false);

  useEffect(() => {
    if (!mapaRef.current || mapCargado) return;

    const cargarMapa = async () => {
      // Import dinámico del loader
      const { Loader } = await import("@googlemaps/js-api-loader");

      const loader = new Loader({
        apiKey: "AIzaSyCPN_ICzYJyIsW_7ZNX7P2Z1TcsodRSD0s", // tu key intacta
        version: "weekly",
        libraries: ["marker"],
      });

      loader
        .load()
        .then((google) => {
          const centerPos = {
            lat: 38.841977501166625,
            lng: 0.11241428137456375,
          };

          const mapInstance = new google.maps.Map(mapaRef.current, {
            center: centerPos,
            zoom: 16,
            mapTypeControl: false,
            mapId: "e8e516b8dca92c4bd4c811fc",
          });

          new google.maps.marker.AdvancedMarkerElement({
            position: centerPos,
            map: mapInstance,
            title: "Mi ubicación",
          });

          setMapCargado(true);
        })
        .catch((e) => console.error("Error al cargar Google Maps:", e));
    };

    cargarMapa();
  }, [mapCargado]);

  return (
    <div
      ref={mapaRef}
      style={{
        width: "100%",
        height: "450px",
      }}
    />
  );
}

export default Mapa;
