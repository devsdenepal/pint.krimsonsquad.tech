import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('IP');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(type, query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Col xs="auto">
          <Form.Control as="select" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="IP">IP Address (IP Info + AbuseIPDB)</option>
            <option value="Email">Email (Hunter.io)</option>
          </Form.Control>
        </Col>
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder={`Enter ${type}`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Col>
        <Col xs="auto">
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBar;
