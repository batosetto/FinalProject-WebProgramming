import React, { useState } from "react";
import { currencies } from "./Currencies";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Collapse from 'react-bootstrap/Collapse';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState(1);
  const [conversionRate, setConversionRate] = useState(0);
  const [open, setOpen] = useState();

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handletoCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleConvert = () => {
    fetch(
      `https://currency-exchange.p.rapidapi.com/exchange?from=${fromCurrency}&to=${toCurrency}&q=${amount}`,
      {
        headers: {
          "X-RapidAPI-Key": "d3c8616885msh9c54fad803fa9e7p1c0505jsnb8b477c93b2e",
          "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setConversionRate(data))
      .then((error) => console.error(error));
  };

  return (
    <div >
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={10} className="currencyBlock">
            <h2 className="title">Currency Converter</h2>
            <Form>
              <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)" id="amount"
                  value={amount}
                  onChange={handleAmountChange} />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>

              <Form.Label>From:</Form.Label>
              <Form.Select id="from-currency"
                value={fromCurrency}
                onChange={handleFromCurrencyChange}>
                {currencies.map(currency => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </Form.Select>
              <br />
              <Form.Label>To: </Form.Label>
              <Form.Select id="to-currency"
                value={toCurrency}
                onChange={handletoCurrencyChange}>
                {currencies.map(currency => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </Form.Select>
            </Form>
            <br />
            <Button
              className="button"
              aria-controls="example-collapse-text"
              aria-expanded={open}
              variant="light"
              onClick={() => {
                handleConvert();
                setOpen(!open);
              }}
            >
              Convert
            </Button>

            <Collapse in={open}>
              <div className="collapseBox">
                Total Amount:  <b>$ {(conversionRate * amount).toFixed(2)} </b>
                <br />
                Conversion Rate: <b>{(conversionRate).toFixed(2)}</b>
              </div>
            </Collapse>
          </Col>
          <Col></Col>
        </Row>
      </Container>


    </div>
  );
}