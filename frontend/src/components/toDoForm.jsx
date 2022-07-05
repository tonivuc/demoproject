import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useRef, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import { Stack } from "react-bootstrap";

function ToDoForm(props) {
  const [validated, setValidated] = useState(false);

  const nameInputRef = useRef(null);
  const lunchWishInputRef = useRef(null);

  const submitForm = (event, name, lunchItem) => {
    const form = event.currentTarget;
    form.checkValidity();
    if (isFormValid(name, lunchItem)) {
      props.onSubmit(event, name, lunchItem);
      setValidated(true);
    } else {
      event.preventDefault();
      event.stopPropagation();
      setValidated(false);
    }
  };

  const isFormValid = (name, lunchItem) => {
    return name && lunchItem;
  };

  return (
    <Row>
      <Col sm={8}>
        <Form
          noValidate
          validated={validated}
          onSubmit={(e) =>
            submitForm(
              e,
              nameInputRef?.current?.value,
              lunchWishInputRef?.current?.value
            )
          }
        >
          <Stack gap={2}>
            <Form.Control placeholder="Title" ref={nameInputRef} />
            <Form.Control.Feedback type="invalid">
              Please provide a title.
            </Form.Control.Feedback>
            <Form.Control
              required
              as="textarea"
              placeholder="Description"
              ref={lunchWishInputRef}
            />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Stack>
        </Form>
      </Col>
      <Col></Col>
    </Row>
  );
}

export default ToDoForm;
