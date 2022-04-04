import { useCallback, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getBooks } from "../../services/books";
import { BookTypes } from "../../services/data-types";
import Row from "./Row";
import Message from "../Message";

export default function BookTable() {
  const [books, setBooks] = useState([]);

  const [message, setMessage] = useState({
    type: '',
    text: '',
    active: false,
  });

  const fetchAllBooks = useCallback(async () => {
    const result = await getBooks();

    if (result.status === 'success') {
      setBooks(result.data.books);
    }
  }, []);

  useEffect(() => {
    fetchAllBooks();
  }, [fetchAllBooks]);

  return (
    <>
      {message.active && (
        <Message variant={message.type} text={message.text} />
      )}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: '3%' }}>No</th>
            <th style={{ width: '10%' }}>ISBN</th>
            <th>Book Name</th>
            <th>Author</th>
            <th style={{ width: '30%' }}>Summary</th>
            <th>Year</th>
            <th>Publisher</th>
            <th className="text-center" style={{ width: '10%' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 && books.map((book: BookTypes, index) => (
            <Row
              key={book.id}
              rowNumber={++index}
              bookId={book.id}
              bookIsbn={book.isbn}
              bookName={book.name}
              bookAuthor={book.author}
              bookSummary={book.summary}
              bookYear={book.year}
              bookPublisher={book.publisher}
              fetchAllBooks={fetchAllBooks}
              setMessage={setMessage}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
}
