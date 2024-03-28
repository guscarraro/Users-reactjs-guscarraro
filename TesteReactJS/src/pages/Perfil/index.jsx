// src/pages/DashboardPage.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Card, CardBody, CardHeader } from "reactstrap";

const PerfilPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={9} lg={10}>
          <h1>Meu Perfil</h1>
          <p>Bem-vindo meu perfil!</p>
          <Card>
            <CardHeader>GRAFICO AQUI:</CardHeader>
            <CardBody></CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PerfilPage;
