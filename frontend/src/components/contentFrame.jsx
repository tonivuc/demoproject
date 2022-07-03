import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function ContentFrame({ children, pageTitle }) {
  return (
    <Container className="pb-3">
      <header>
        <h1>{pageTitle}</h1>
      </header>
      {children}
    </Container>
  );
}
