import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CairoDetails from "./CairoDetails";
import NewYorkDetails from "./NewYorkDetails";
import ParisDetails from "./ParisDetails";
import SalvadorDetails from "./SalvadorDetails";
import SydneyDetails from "./SydneyDetails";
import TokyoDetails from "./TokyoDetails";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



export default function FormBox() {
  // const [inputs, setInputs] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    const tempErrors = [];
    if (name.trim().length < 1) {
      tempErrors.push("Please enter a valid name");
      e.preventDefault();
    }
    if (email.trim().length < 1) {
      tempErrors.push("Please enter a valid email");
      e.preventDefault();
    }
    if (!selectedCity) {
      tempErrors.push("Please select a city");
      e.preventDefault();
    }
    setErrors(tempErrors);
    e.preventDefault();
    navigate("/cities/" + selectedCity);
    // navigate(`/cities/${selectedCity}`);
  };

  return (
    <div >
      <Container fluid >
        <Row>
          <Col ></Col>
          <Col md={10} className="currencyBlock">
            <Routes>
              <Route path="/cities/cairo" element={<CairoDetails />} />
              <Route path="/cities/newyork" element={<NewYorkDetails />} />
              <Route path="/cities/paris" element={<ParisDetails />} />
              <Route path="/cities/salvador" element={<SalvadorDetails />} />
              <Route path="/cities/sydney" element={<SydneyDetails />} />
              <Route path="/cities/tokyo" element={<TokyoDetails />} />
            </Routes>
            <h2 style={{ marginTop: "5px" }} className="currencyTitle">Personal Travel Guide</h2>
            <p style={{ fontStyle: "italic" }}>
              Sign up below to receive a customized travel itinerary!
            </p>
            <Form method="POST" onSubmit={submitHandler} >
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  id="txtName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                //required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  id="txtEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                //required
                />
              </Form.Group>

              <Form.Label>City:</Form.Label>
              <Form.Select
                value={selectedCity}
                onChange={(e) =>
                  setSelectedCity(e.target.value)} >
                <option value="">Select a city</option>
                <option value="cairo">Cairo</option>
                <option value="newyork">New York</option>
                <option value="paris">Paris</option>
                <option value="salvador">Salvador</option>
                <option value="sydney">Sydney</option>
                <option value="tokyo">Tokyo</option>
              </Form.Select>
              <br />

              <Button
                type="submit"
                className="button"
                variant="light" >
                Submit
              </Button>

            </Form>
          </Col>
          <Col ></Col>

        </Row>

      </Container>

    </div>
  );
}