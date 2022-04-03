import { useCallback, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getBooks } from "../../services/books";
import { BookTypes } from "../../services/data-types";
import Row from "./Row";

export default function BookTable() {
  const [books, setBooks] = useState([]);

  const fetchAllBooks = useCallback(async () => {
    const result = await getBooks();

    console.log('oke: ', result);

    if (result.status === 'success') {
      setBooks(result.data.books);
    }
  }, []);

  useEffect(() => {
    fetchAllBooks();
  }, [fetchAllBooks]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th className="text-center">No</th>
          <th>Book Name</th>
          <th>Author</th>
          <th>Year</th>
          <th>Publisher</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {books.length > 0 && books.map((book: BookTypes, index) => (
          <Row
            key={book.id}
            rowNumber={++index}
            bookId={book.id}
            bookName={book.name}
            bookAuthor={book.author}
            bookYear={book.year}
            bookPublisher={book.publisher}
            fetchAllBooks={fetchAllBooks}
          />
        ))}
      </tbody>
    </Table>
  );
}
