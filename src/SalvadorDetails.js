import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Travellers from "./pictures/travellers.png";

export default function SalvadorDetails() {
  return (
    <div>

      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={10} className="details">

            <h2 className="title">Salvador</h2>

            <Accordion className="custom-accordion">

              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Accommodation
                </Accordion.Header>
                <Accordion.Body>
                  Zank Hotel Boutique
                  <br />
                  Hotel Deville Prime Salvador
                  <br />
                  Pestana Convento do Carmo Salvador <br />
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Dining
                </Accordion.Header>
                <Accordion.Body>
                  Paraíso Tropical
                  <br />
                  Amado
                  <br />
                  Dona Mariquita
                  <br />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Transportation
                </Accordion.Header>
                <Accordion.Body>
                  Bus Rapid Transit (BRT)
                  <br />
                  Taxis
                  <br />
                  Bicycle rental services
                  <br />
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Landmarks
                </Accordion.Header>
                <Accordion.Body>
                  Pelourinho Historic Centre
                  <br />
                  Elevador Lacerda
                  <br />
                  São Francisco Church and Convent of Salvador <br />
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
