import { useState, useEffect, useCallback } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, withRouter } from "react-router-dom";
import { editBookById, getBookById } from "../../services/books";

export default withRouter(function BookFormEdit(props) {
  const [name, setName] = useState('');
  const [isbn, setIsbn] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const [year, setYear] = useState('');
  const [publisher, setPublisher] = useState('');

  const history = useHistory();
  const { id } = props.match.params;

  const resetStateForm = () => {
    setName('');
    setIsbn('');
    setAuthor('');
    setSummary('');
    setYear('');
    setPublisher('');
  };

  const actionEditBookById = async (id: string) => {
    const result = await editBookById(id, {
      name,
      isbn,
      author,
      summary,
      year,
      publisher,
    });

    if (result.status === 'success') {
      resetStateForm();
      history.push('/');
    }
  };

  const fetchBookById = useCallback(async (id) => {
    const result = await getBookById(id);

    if (result.status === 'success') {
      const { book } = result.data;

      setName(book.name);
      setIsbn(book.isbn);
      setAuthor(book.author);
      setSummary(book.summary);
      setYear(book.year);
      setPublisher(book.publisher);
    }
  }, []);

  useEffect(() => {
    fetchBookById(id);
  }, [id, fetchBookById]);

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Book Name</Form.Label>
        <Form.Control type="text" defaultValue={name} onChange={(event) => setName(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>ISBN</Form.Label>
        <Form.Control type="text" defaultValue={isbn} onChange={(event) => setIsbn(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Book Author</Form.Label>
        <Form.Control type="text" defaultValue={author} onChange={(event) => setAuthor(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Summary</Form.Label>
        <Form.Control as="textarea" defaultValue={summary} rows={3} onChange={(event) => setSummary(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Publication Year</Form.Label>
        <Form.Control type="text" defaultValue={year} onChange={(event) => setYear(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Publisher</Form.Label>
        <Form.Control type="text" defaultValue={publisher} onChange={(event) => setPublisher(event.target.value)} />
      </Form.Group>
      <Button variant="primary" onClick={() => actionEditBookById(id)}>
        Submit
      </Button>
    </Form>
  );
});
