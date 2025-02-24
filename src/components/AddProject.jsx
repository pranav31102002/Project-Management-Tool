import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddProject = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to an API or update state
    console.log('Project added:', { name, description });
    navigate('/projects');
  };

  return (
    <Container className="h-100 py-4">
      <Row className="h-100 justify-content-center align-items-center">
        <Col md={8}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="mb-4">Add New Project</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter project name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Project Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter project description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 btn-lg">
                  Add Project
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};


export default AddProject;
