import Card from 'react-bootstrap/Card';
import ReviewTextBox from '../common/ReviewTextBox';
import { BookModel } from '../../model/BookModel';
import { Button } from 'react-bootstrap';


interface Props {
  book: BookModel
}

const BookView: React.FC<Props> = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> {props.book.title} </Card.Title>
        <Card.Text>{props.book.author}</Card.Text>
        <Card.Text>{props.book.review}</Card.Text>
        <Button>Edit</Button>
      </Card.Body>
    </Card>
  );
}

export default BookView;