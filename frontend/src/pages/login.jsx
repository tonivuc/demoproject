import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div style={{ maxWidth: "300px" }}>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />
        <div className="d-flex justify-content-end">
          <Button className="mt-3" type="submit">
            Login
          </Button>
        </div>
      </Form>
      <p>
        Don't have an account? Register <Link to="/register">here</Link>
      </p>
    </div>
  );
}

export default Login;