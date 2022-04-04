import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { addBook } from "../../services/books";
import Message from "../Message";

export default function BookFormAdd() {
  const [name, setName] = useState('');
  const [isbn, setIsbn] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const [year, setYear] = useState('');
  const [publisher, setPublisher] = useState('');

  const [message, setMessage] = useState({
    type: '',
    text: '',
    active: false,
  });

  const resetStateForm = () => {
    setName('');
    setIsbn('');
    setAuthor('');
    setSummary('');
    setYear('');
    setPublisher('');
  };

  const actionAddBook = async () => {
    setMessage({
      type: '',
      text: '',
      active: false,
    });

    const newBook = {
      name,
      isbn,
      author,
      summary,
      year,
      publisher,
    };

    const result = await addBook(newBook);
    resetStateForm();

    if (result.status === 'success') {
      setMessage({
        type: 'success',
        text: 'Successfully added book data',
        active: true,
      });
    } else {
      setMessage({
        type: 'danger',
        text: result.message,
        active: true,
      });
    }
  };

  return (
    <Form>
      {message.active && (
        <Message variant={message.type} text={message.text} />
      )}

      <Form.Group className="mb-3">
        <Form.Label>Book Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>ISBN</Form.Label>
        <Form.Control type="text" value={isbn} onChange={(event) => setIsbn(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Book Author</Form.Label>
        <Form.Control type="text" value={author} onChange={(event) => setAuthor(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Summary</Form.Label>
        <Form.Control as="textarea" rows={3} value={summary} onChange={(event) => setSummary(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Publication Year</Form.Label>
        <Form.Control type="text" value={year} onChange={(event) => setYear(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Publisher</Form.Label>
        <Form.Control type="text" value={publisher} onChange={(event) => setPublisher(event.target.value)} />
      </Form.Group>
      <Button variant="primary" onClick={actionAddBook}>
        Submit
      </Button>
    </Form>
  );
}
