import { Button } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import { PencilSquare, TrashFill } from "react-bootstrap-icons";
import { deleteBookById } from "../../services/books";

interface RowProps {
  rowNumber: number;
  bookId: string;
  bookName: string;
  bookAuthor: string;
  bookYear: string;
  bookPublisher: string;
  fetchAllBooks: () => void;
}

export default function Row(props: RowProps) {
  const {
    rowNumber, bookId, bookName, bookAuthor, bookYear, bookPublisher, fetchAllBooks,
  } = props;

  const history = useHistory();

  const actionDelete = async (id: string) => {
    const result = await deleteBookById(id);

    if (result.status === 'success') {
      fetchAllBooks();
      history.push('/');
    }
  };

  return (
    <tr>
      <td className="text-center">{rowNumber}</td>
      <td>{bookName}</td>
      <td>{bookAuthor}</td>
      <td>{bookYear}</td>
      <td>{bookPublisher}</td>
      <td className="text-center">
        <Link to={`/edit/${bookId}`} className="btn btn-secondary btn-sm">
          <PencilSquare />
          <span>Edit</span>
        </Link>
        {` `}
        <Button variant="danger" size="sm" onClick={() => actionDelete(bookId)}>
          <TrashFill />
          <span>Delete</span>
        </Button>
      </td>
    </tr>
  );
}
