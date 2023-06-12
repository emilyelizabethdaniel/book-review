import Card from 'react-bootstrap/Card';
import ReviewTextBox from './ReviewTextBox';
import { Form } from 'react-bootstrap';


// show either a form with text inputs or a card with the saved book info depending on props passed in, (newBook)
//

function BookCard(props) {
  return (
    //when I figure out data structure, make this a check if a bookProp exists, not based on title only
    props.title ? 
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> {props.title} </Card.Title>
        <Card.Text>{props.author}</Card.Text>
          <ReviewTextBox review={props.review}/>
      </Card.Body>
    </Card>
    :
    <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Form>
        <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="input" placeholder="enter title of book" />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control type="input" placeholder="enter name of author" />
        </Form.Group>
        </Form>
        <ReviewTextBox/>
        </Card.Body>
    </Card>
  );
}

export default BookCard;