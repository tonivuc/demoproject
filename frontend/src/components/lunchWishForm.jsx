
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useRef, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';

function LunchWishForm(props) {

    const [validated, setValidated] = useState(false);

    const nameInputRef = useRef(null);
    const lunchWishInputRef = useRef(null);

    const submitForm = (event, name, lunchItem) => {
        const form = event.currentTarget;
        form.checkValidity()
        if (isFormValid(name, lunchItem)) {
            props.onSubmit(event, name, lunchItem);
            setValidated(true);
        }
        else {
            event.preventDefault();
            event.stopPropagation();
            setValidated(false);
        }
    }

    const isFormValid = (name, lunchItem) => {
        return name && lunchItem;
    }

    return (
        <Form noValidate validated={validated} onSubmit={e => submitForm(e, nameInputRef?.current?.value, lunchWishInputRef?.current?.value)}>
        <Row>
            <Col>
                <Form.Control required placeholder="Your name" ref={nameInputRef} />
                <Form.Control.Feedback type="invalid">
                Please provide a name.
                </Form.Control.Feedback>
            </Col>
            <Col>
                <Form.Control required placeholder="Want for lunch" ref={lunchWishInputRef} />
            </Col>
            <Col>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Col>
        </Row>
        </Form>
    );
}

export default LunchWishForm;



