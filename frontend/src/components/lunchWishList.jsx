import LunchWishItem from './lunchWishItem';
import ListGroup from 'react-bootstrap/ListGroup';

function LunchWishList(props) {

    const lunchWishes = props.lunchWishes || [];

    return (
        <ListGroup className={props.className} as="ul">
            {lunchWishes.map((lunchWish) => 
                <LunchWishItem lunchWish={lunchWish}/>)}
        </ListGroup>
    );
}
export default LunchWishList;