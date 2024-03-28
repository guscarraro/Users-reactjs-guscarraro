// Continuação do DashboardPage.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, CardBody, CardHeader } from "reactstrap";
import MyCalendarComponent from "../../components/CalendarComponent";

const DashboardPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <h1>Dashboard</h1>
          <p>Bem-vindo ao seu dashboard!</p>
          <Card>
            <CardHeader>Calendário:</CardHeader>
            <CardBody>
              {/* Simplesmente use o MyCalendarComponent aqui */}
              <MyCalendarComponent />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
