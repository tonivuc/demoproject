import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import { useState } from "react";
import { useAuth } from "../components/authProvider";

function Login() {
  const { doLogin } = useAuth();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    await doLogin(values.username, values.password);
    navigate("/tasks");
  };

  const handleUsernameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      username: event.target.value,
    }));
  };

  const handlePasswordInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));
  };

  return (
    <div style={{ maxWidth: "300px" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={values.firstName}
            onChange={handleUsernameInputChange}
          />
        </Form.Group>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          value={values.password}
          onChange={handlePasswordInputChange}
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
