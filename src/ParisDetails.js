import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Travellers from "./pictures/travellers.png";

export default function ParisDetails() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={10} className="details">

            <h2 className="title">Paris</h2>

            <Accordion className="custom-accordion">

              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Accommodation
                </Accordion.Header>
                <Accordion.Body>
                  Hotel Lutetia
                  <br />
                  Le Bristol Paris
                  <br />
                  Hotel de Crillon, A Rosewood Hotel
                  <br />
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Dining
                </Accordion.Header>
                <Accordion.Body>
                  L'Atelier de Joel Robuchon
                  <br />
                  Le Jules Verne
                  <br />
                  Les Papilles
                  <br />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Transportation
                </Accordion.Header>
                <Accordion.Body>
                  Metro
                  <br />
                  RER (express train)
                  <br />
                  Bus
                  <br />
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Landmarks
                </Accordion.Header>
                <Accordion.Body>
                  Eiffel Tower
                  <br />
                  The Louvre
                  <br />
                  Notre-Dame Cathedral
                  <br />
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>

          </Col>
          <Col></Col>
        </Row>
      </Container>
      <img className="travellersImage" src={Travellers}/>
    </div>
  );
}
