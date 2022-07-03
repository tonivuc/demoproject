import { Container, Stack } from "react-bootstrap";
import "./estartaFooter.css";

const EstartaFooter = () => {
  return (
    <footer className="Footer">
      <Container className="p-5">
        <Stack>
          <h4>Estarta solutions</h4>
          <p>Contact</p>
          <p>About us</p>
        </Stack>
      </Container>
    </footer>
  );
};

export default EstartaFooter;
