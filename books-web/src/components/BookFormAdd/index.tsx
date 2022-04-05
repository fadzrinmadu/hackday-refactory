import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { addBook } from "../../services/books";
import Message from "../Message";

interface BookState {
  name: string;
  isbn: string;
  author: string;
  summary: string;
  year: string;
  publisher: string;
}

export default function BookFormAdd() {
  const [book, setBook] = useState<BookState>({
    name: '',
    isbn: '',
    author: '',
    summary: '',
    year: '',
    publisher: '',
  });

  const [message, setMessage] = useState({
    type: '',
    text: '',
    active: false,
  });

  const resetStateForm = () => {
    setBook({
      name: '',
      isbn: '',
      author: '',
      summary: '',
      year: '',
      publisher: '',
    });
  };

  const actionAddBook = async () => {
    setMessage({
      type: '',
      text: '',
      active: false,
    });

    const result = await addBook(book);
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
        <Form.Control type="text" value={book.name} onChange={(event) => setBook({ ...book, name: event.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>ISBN</Form.Label>
        <Form.Control type="text" value={book.isbn} onChange={(event) => setBook({ ...book, isbn: event.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Book Author</Form.Label>
        <Form.Control type="text" value={book.author} onChange={(event) => setBook({ ...book, author: event.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Summary</Form.Label>
        <Form.Control as="textarea" rows={3} value={book.summary} onChange={(event) => setBook({ ...book, summary: event.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Publication Year</Form.Label>
        <Form.Control type="text" value={book.year} onChange={(event) => setBook({ ...book, year: event.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Publisher</Form.Label>
        <Form.Control type="text" value={book.publisher} onChange={(event) => setBook({ ...book, publisher: event.target.value })} />
      </Form.Group>
      <Button variant="primary" onClick={actionAddBook}>
        Submit
      </Button>
    </Form>
  );
}
