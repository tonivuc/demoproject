import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { registerUser } from "../api/auth.";
import { useNavigate } from "react-router-dom";

function Register() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [validated, setValidated] = useState(false);
  const [registered, setRegistered] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const user = await registerUser(values.username, values.password);
    //TODO: Make the button no longer active
    handleResponse(user); //Not a real user object rn
  };

  const handleResponse = (user) => {
    if (user) {
      setRegistered(true);
    }
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
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            value={values.firstName}
            onChange={handleUsernameInputChange}
          />
        </Form.Group>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
          required
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          value={values.password}
          onChange={handlePasswordInputChange}
        />
        <div className="d-flex justify-content-end">
          <Button className="mt-3" type="submit" name="registerButton">
            Create user
          </Button>
        </div>
      </Form>
      {registered ? <RegisteredComponent /> : null}
    </div>
  );
}

const RegisteredComponent = () => {
  let navigate = useNavigate();

  return (
    <>
      <p>
        You have been registered! Click the Login button to go to the login page
      </p>
      <Button onClick={() => navigate("/login")}>Login</Button>
    </>
  );
};

export default Register;
