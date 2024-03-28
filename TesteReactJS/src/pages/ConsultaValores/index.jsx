// src/pages/DashboardPage.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Card, CardBody, CardHeader } from "reactstrap";

const ConsultaValoresPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={9} lg={10}>
          <h1>Consulta</h1>
          <p>Bem-vindo a minhas financas!</p>
          <Card>
            <CardHeader>GRAFICO AQUI:</CardHeader>
            <CardBody></CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ConsultaValoresPage;
