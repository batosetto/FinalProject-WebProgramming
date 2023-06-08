import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Travellers from "./pictures/travellers.png";


export default function NewYorkDetails() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={10} className="details">

            <h2 className="title">New York</h2>

            <Accordion  className="custom-accordion">
              
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Accommodation
                </Accordion.Header>
                <Accordion.Body>
                  The Greenwich Hotel
                  <br />
                  The Plaza
                  <br />
                  The Standard, High Line <br />
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Dining
                </Accordion.Header>
                <Accordion.Body>
                  Eleven Madison Park
                  <br />
                  Le Bernardin
                  <br />
                  Russ & Daughters
                  <br />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Transportation
                </Accordion.Header>
                <Accordion.Body>
                  Subway
                  <br />
                  Taxis
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
                  Statue of Liberty
                  <br />
                  Empire State Building
                  <br />
                  Central Park
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
