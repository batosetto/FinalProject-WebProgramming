import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import moment from "moment";

export default function WeatherAPI() {
  const cities = ['Salvador', 'Paris', 'New York', 'Cairo', 'Tokyo', 'Sydney'];
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState([]);

  useEffect(() => {
    const apiKey = "a3b8c0fd7f754b63865448dbdc607c20";
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${apiKey}&units=m&days=8`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data && data.data && data.data.length > 0) {
          setWeatherInfo(data.data);
        }
      })           
  }, [city]);

  return (
    <div className="weatherPage">
      <Container fluid>
        <Row>
          <Col><h2 className="title">Weather Information</h2></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Form>
              <Form.Select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="">Select a city</option>

                {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
                ))}
              </Form.Select>
            </Form>
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <Col>
            <div className="d-flex flex-wrap justify-content-center" >              
              {weatherInfo.length > 0 && (
                weatherInfo.map((day) => (
                  <div key={day.ts} className="weatherInfoStyle">
                    <div><strong>{moment(day.valid_date).format("MMM DD, YYYY")}</strong></div>
                    <div style={{fontSize: 15}}>
                      <img style={{width:"50px", height:"50px"}} src={`https://www.weatherbit.io/static/img/icons/${day?.weather?.icon}.png`} alt="img" />
                      <br /><em>{day?.weather?.description}</em>
                    </div>
                    <br />
                    <div style={{fontSize: 16}}>Max: {day.max_temp}°C</div>
                    <div style={{fontSize: 16}}>Min: {day.min_temp}°C</div>
                    <div style={{fontSize: 16}}>Wind Speed: {(day.wind_spd * 3.6).toFixed(1)}km/h</div>
                    <div style={{fontSize: 16}}>Humidity: {day.rh}%</div>
           
                  </div>   
                ))
              )}
            </div>       
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}