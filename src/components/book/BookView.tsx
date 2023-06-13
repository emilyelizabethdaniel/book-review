import Card from 'react-bootstrap/Card';
import ReviewTextBox from '../common/ReviewTextBox';
import { BookModel } from '../../model/BookModel';


interface Props {
  book: BookModel
}

const BookView: React.FC<Props> = (props) => {
  return (
    //when I figure out data structure, make this a check if a bookProp exists, not based on title only
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> {props.book.title} </Card.Title>
        <Card.Text>{props.book.author}</Card.Text>
        <ReviewTextBox review={props.book.review} />
      </Card.Body>
    </Card>
  );
}

export default BookView;