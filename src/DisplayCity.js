import Salvador from "./Salvador.js";
import Paris from "./Paris.js";
import Cairo from "./Cairo.js";
import NewYork from "./NewYork.js";
import Tokyo from "./Tokyo.js";
import Sydney from "./Sydney.js";
import brazil from "./pictures/Brazil_flag_300.png";
import france from "./pictures/france.png";
import usa from "./pictures/usa.png";
import egypt from "./pictures/egypt.png";
import japan from "./pictures/japan.png";
import australia from "./pictures/australia.png";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function App() {
  return (
    <div>
      <CitySelector />
    </div>
  );
}

function DisplayCity() {
  // if(document.getElementById('salvador').checked){
  return <Salvador />;
  //}
}
function CitySelector() {
  const [city, setCity] = useState();
  return (
    <>
      {/* <h2>Cities Offered</h2> */}
      <div className="citySelectorBlock">
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={10}>
        <input
          onChange={(e) => setCity(e.target.value)}
          type="radio"
          id="salvador"
          name="city"
          value="Salvador"
        />
        <label for="salvador">
          Salvador <img src={brazil} width={20} alt="Brazil flag" />
        </label>
        <br />
        <input
          onChange={(e) => setCity(e.target.value)}
          type="radio"
          id="paris"
          name="city"
          value="Paris"
        />
        <label for="paris">
          Paris <img src={france} width={20} alt="France flag" />
        </label>
        <br />
        <input
          onChange={(e) => setCity(e.target.value)}
          type="radio"
          id="newYork"
          name="city"
          value="New York"
        />
        <label for="newYork">
          New York <img src={usa} width={20} alt="USA flag" />
        </label>
        <br />
        <input
          onChange={(e) => setCity(e.target.value)}
          type="radio"
          id="cairo"
          name="city"
          value="Cairo"
        />
        <label for="cairo">
          Cairo <img src={egypt} width={20} alt="Egypt flag" />
        </label>
        <br />
        <input
          onChange={(e) => setCity(e.target.value)}
          type="radio"
          id="tokyo"
          name="city"
          value="Tokyo"
        />
        <label for="tokyo">
          Tokyo <img src={japan} width={20} alt="Japan flag" />
        </label>
        <br />
        <input
          onChange={(e) => setCity(e.target.value)}
          type="radio"
          id="sydney"
          name="city"
          value="Sydney"
        />
        <label for="sydney">
          Sydney <img src={australia} width={20} alt="Australia flag" />
        </label>
        </Col>
        <Col></Col>
        </Row>
      </Container>
        <br />
      </div>
      <div className="cityDisplayBlock">
      <Container fluid >
        <Row>
          <Col ></Col>
          <Col md={10} >
            {city == null ? <Salvador /> : <></>}
            {city == "Salvador" ? <Salvador /> : <></>}
            {city == "Paris" ? <Paris /> : <></>}
            {city == "New York" ? <NewYork /> : <></>}
            {city == "Cairo" ? <Cairo /> : <></>}
            {city == "Tokyo" ? <Tokyo /> : <></>}
            {city == "Sydney" ? <Sydney /> : <></>}
         </Col>
         <Col></Col>
        </Row>
        </Container>
      </div>
    </>
  );
}
