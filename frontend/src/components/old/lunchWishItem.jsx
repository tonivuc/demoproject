import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ListGroup from "react-bootstrap/ListGroup"

function LunchWishItem(props) {

    const lunchWish = props.lunchWish;

  return (
    <ListGroup.Item as="li" key={lunchWish.name + lunchWish.lunchItem}>
        <Row>
            <Col>{lunchWish?.name || ""}</Col>
            <Col>{lunchWish?.lunchItem || ""}</Col>
        </Row>
    </ListGroup.Item>

  );
}
export default LunchWishItem;