import React from "react";
import "../styles/City.css";
import nubeCitiesPage from "../img/nubeCities.webp"
// import { useParams } from "react-router-dom";
// let params = useParams();

function City({ city }) {
  if (!city) {
    return <span> Lo sentimos La ciudad no existe</span>;
  }

  return (
    <main className="mainPageCityInformation">
        <h2 class="loading wave">{city.name}</h2>
      <div className="containerCardMoreIformation">
        <ul>
          <li> Temperatura: {city.temp} °C</li>
          <li>Clima: {city.weather}</li>
          <li>Viento: {city.wind} km/h</li>
          <li>Cantidad de Nubes: {city.clouds}</li>
          <li>Latitud: {city.latitud}°</li>
          <li>Longitud: {city.longitud}°</li>
        </ul>
      </div>
      <img
        src={nubeCitiesPage}
        alt="cities section cloud logo"
      />
    </main>
  );
}

export default City;
