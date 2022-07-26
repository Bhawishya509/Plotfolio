import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Forms = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  useEffect(() => {}, []);

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-6">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control required type="text" placeholder="First name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Email</Form.Label>
          <Form.Control required type="email" placeholder="Email-id" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-12">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Subject" required />
          <Form.Control.Feedback type="invalid">
            Please Enter Your Subject.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <textarea
        placeholder="Message"
        id=""
        cols="63"
        rows="3"
        style={{ marginTop: "20px", outline: "none" }}
      ></textarea>

      <Button type="submit" style={{ backgroundColor: "rgb(247, 19, 95)" }}>
        Message me
      </Button>
    </Form>
  );
};
export default Forms;
