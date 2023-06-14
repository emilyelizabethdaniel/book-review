import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

function ReviewTextBox(props) {
  
    // This will be the text review box, where users write/edit/delete their reviews
    // Props will be:
    // saved reviews? for the edit review 
    // book name, author 
    //Button on click take textBox value and make an API call based on the status of the review (new/edited/to delete)
    
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} value={props.review}></Form.Control>
      </Form.Group>
      <Button>Save</Button>
      <Button>Delete</Button>
      <Button>Publish</Button>
    </Form>
    </>
  );
}

export default ReviewTextBox;