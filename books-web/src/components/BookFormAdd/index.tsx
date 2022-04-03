import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { addBook } from "../../services/books";

export default function BookFormAdd() {
  const [name, setName] = useState('');
  const [isbn, setIsbn] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const [year, setYear] = useState('');
  const [publisher, setPublisher] = useState('');

  const history = useHistory();

  const resetStateForm = () => {
    setName('');
    setIsbn('');
    setAuthor('');
    setSummary('');
    setYear('');
    setPublisher('');
  };

  const actionAddBook = async () => {
    const newBook = {
      name,
      isbn,
      author,
      summary,
      year,
      publisher,
    };

    const result = await addBook(newBook);

    if (result.status === 'success') {
      resetStateForm();
      history.push('/');
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Book Name</Form.Label>
        <Form.Control type="text" onChange={(event) => setName(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>ISBN</Form.Label>
        <Form.Control type="text" onChange={(event) => setIsbn(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Book Author</Form.Label>
        <Form.Control type="text" onChange={(event) => setAuthor(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Summary</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={(event) => setSummary(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Publication Year</Form.Label>
        <Form.Control type="text" onChange={(event) => setYear(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Publisher</Form.Label>
        <Form.Control type="text" onChange={(event) => setPublisher(event.target.value)} />
      </Form.Group>
      <Button variant="primary" onClick={actionAddBook}>
        Submit
      </Button>
    </Form>
  );
}
