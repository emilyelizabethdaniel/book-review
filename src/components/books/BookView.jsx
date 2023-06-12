import Card from 'react-bootstrap/Card';
import ReviewTextBox from '../../appComponents/ReviewTextBox';
import { Form } from 'react-bootstrap';


// show either a form with text inputs or a card with the saved book info depending on props passed in, (newBook)

function BookForm(props) {
  return (
    //when I figure out data structure, make this a check if a bookProp exists, not based on title only
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> {props.title} </Card.Title>
        <Card.Text>{props.author}</Card.Text>
          <ReviewTextBox review={props.review}/>
      </Card.Body>
    </Card>
  );
}

export default BookCard;