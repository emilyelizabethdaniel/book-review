import Card from 'react-bootstrap/Card';
import ReviewTextBox from '../common/ReviewTextBox';
import { Form } from 'react-bootstrap';
import { BookModel } from '../../model/BookModel';


interface Props {
  book: BookModel
}

const BookForm: React.FC<Props> = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="input" placeholder="enter title of book" />
            <Form.Text defaultValue={props.book.title} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control type="input" placeholder="enter name of author" />
          </Form.Group>
        </Form>
        <ReviewTextBox />
      </Card.Body>
    </Card>
  );
}

export default BookForm;