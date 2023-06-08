import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Travellers from "./pictures/travellers.png";


export default function TokyoDetails() {
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
                  Park Hyatt Tokyo
                  <br />
                  The Ritz-Carlton
                  <br />
                  Tokyo Andaz Tokyo Toranomon Hills
                  <br />
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Dining
                </Accordion.Header>
                <Accordion.Body>
                  Sukiyabashi Jiro
                  <br />
                  Den <br />
                  Tempura Kondo <br />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Transportation
                </Accordion.Header>
                <Accordion.Body>
                  Subway
                  <br />
                  JR trains
                  <br />
                  Taxis
                  <br />
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Landmarks
                </Accordion.Header>
                <Accordion.Body>
                  Tokyo Tower
                  <br />
                  Meiji Shrine
                  <br />
                  Sensō-ji Temple
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
