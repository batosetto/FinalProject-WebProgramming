import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { Route, Routes, useNavigate } from "react-router-dom";
import Form from "./Form";
import CurrencyConverter from "./CurrencyConverter";
import DisplayCity from "./DisplayCity.js";
import Weather from "./WeatherAPI";
import "./Styles.scss";
import CairoDetails from "./CairoDetails";
import NewYorkDetails from "./NewYorkDetails";
import ParisDetails from "./ParisDetails";
import SalvadorDetails from "./SalvadorDetails";
import SydneyDetails from "./SydneyDetails";
import TokyoDetails from "./TokyoDetails";
import farol from "./pictures/farolbarra.jpeg";
import liberty from "./pictures/statueliberty.jpg";
import eiffel from "./pictures/eiffeltower.jpeg";
import asakusa from "./pictures/asakusa.jpeg";
import pyramid from "./pictures/pyramid.jpeg";
import operahouse from "./pictures/operahouse.jpeg";
import weather from "./pictures/weather.png";
import currencypic from "./pictures/currencypicture.png";
import convert from "./pictures/convert.png";
import weathericon from "./pictures/weathericon.png";

export default function App() {
  return (
    <div>
      <Navigation />
    </div>
  );
}

function Navigation() {
  return (
    <div>
      <Navbar className="nav">
        <Container>
          <Nav>
            <LinkContainer to="/" className="link">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/displayCity" className="link">
              <Nav.Link>Cities</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/form" className="link">
              <Nav.Link>Form</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/weather" className="link">
              <Nav.Link>Weather</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/currencyconverter" className="link">
              <Nav.Link>Currency</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/displayCity" element={<DisplayCity />} />
        <Route path="/form" element={<Form />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/currencyconverter" element={<CurrencyConverter />} />
        <Route path="/cities/cairo" element={<CairoDetails />} />
        <Route path="/cities/newyork" element={<NewYorkDetails />} />
        <Route path="/cities/paris" element={<ParisDetails />} />
        <Route path="/cities/salvador" element={<SalvadorDetails />} />
        <Route path="/cities/sydney" element={<SydneyDetails />} />
        <Route path="/cities/tokyo" element={<TokyoDetails />} />
      </Routes>
    </div>
  );
}

function Content() {
  const navigate = useNavigate();
  return (
    <div style={{ color: "white" }}>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={5}>
            <Row className="container">
              <div className="weatherDiv">
                <h3>Know before you go! Check the weather for your city</h3>
                <p>
                  Don't let the weather ruin your trip! Check the weather
                  conditions in any city you're planning to visit with our
                  real-time weather app. Get accurate forecasts and plan your
                  activities free of stress!
                </p>
                <Button
                  className="button"
                  variant="light"
                  onClick={() => navigate("/weather")}
                >
                  Check Weather
                </Button>
              </div>
              <img className="myImageStyle" src={weathericon} />
            </Row>
            <Row className="container">
              <div className="weatherDiv">
                <h3>Use our currency converter for live exchange rates!</h3>
                <p>
                  Our currency converter provides up-to-date exchange rates so
                  you can quickly and easily convert your money to the local
                  currency. Say goodbye to confusion and hello to stress-free
                  spending!"
                </p>
                <Button
                  className="button"
                  variant="light"
                  onClick={() => navigate("/currencyconverter")}
                >
                  Convert Currency
                </Button>
                <br /> <br/> 
                <img className="myImageStyle" src={convert} />
              </div>
            </Row>
          </Col>
          <Col md={5} className="container">
            <h2 style={{ marginTop: "15px" }}>Cities Offered:</h2>
            <Row>
              <Col>
                <h3>Cairo</h3>
                <img className="cityImage" src={pyramid} />
              </Col>
              <Col>
                <h3>New York</h3>
                <img className="cityImage" src={liberty} />
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>Paris</h3>
                <img className="cityImage" src={eiffel} />
              </Col>{" "}
              <Col>
                <h3>Salvador</h3>
                <img className="cityImage" src={farol} />
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>Sydney</h3>
                <img className="cityImage" src={operahouse} />
              </Col>
              <Col>
                <h3>Tokyo</h3>
                <img className="cityImage" src={asakusa} />
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}


