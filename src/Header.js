import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Header.css';

export default function Header() {
    return (
      <Row className="header-container">
        <Col>
          <h3>To-do List by Ken</h3>
        </Col>
      </Row>
    )
}
