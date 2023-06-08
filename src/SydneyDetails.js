import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Travellers from "./pictures/travellers.png";


export default function SydneyDetails() {
  return (
    <div>

      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={10} className="details">

            <h2 className="title">Sydney</h2>

            <Accordion className="custom-accordion">

              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Accommodation
                </Accordion.Header>
                <Accordion.Body>
                  The Langham
                  <br />
                  Park Hyatt
                  <br />
                  Shangri-La Hotel <br />
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Dining
                </Accordion.Header>
                <Accordion.Body>
                  Quay
                  <br />
                  Tetsuya's
                  <br />
                  Mr. Wong
                  <br />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Transportation
                </Accordion.Header>
                <Accordion.Body>
                  Trains
                  <br />
                  Busses
                  <br />
                  Ferries
                  <br />
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Landmarks
                </Accordion.Header>
                <Accordion.Body>
                  Sydney Opera House
                  <br />
                  Sydney Harbour Bridge
                  <br />
                  Bondi Beach
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
