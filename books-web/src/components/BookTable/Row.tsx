import 'react-confirm-alert/src/react-confirm-alert.css';

import { Button } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import { PencilSquare, TrashFill } from "react-bootstrap-icons";
import { confirmAlert } from 'react-confirm-alert';
import { deleteBookById } from "../../services/books";

interface RowProps {
  rowNumber: number;
  bookId: string;
  bookIsbn: string;
  bookName: string;
  bookAuthor: string;
  bookSummary: string;
  bookYear: string;
  bookPublisher: string;
  fetchAllBooks: () => void;
}

export default function Row(props: RowProps) {
  const {
    rowNumber, bookId, bookIsbn, bookName, bookAuthor, bookSummary, bookYear, bookPublisher, fetchAllBooks,
  } = props;

  const history = useHistory();

  const confirmDelete = (id: string) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure want to delete this data?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => actionDelete(id),
        },
        {
          label: 'No',
          onClick: () => false,
        },
      ],
    });
  };

  const actionDelete = async (id: string) => {
    const result = await deleteBookById(id);

    if (result.status === 'success') {
      fetchAllBooks();
      history.push('/');
    }
  };

  return (
    <tr>
      <td>{rowNumber}</td>
      <td>{bookIsbn}</td>
      <td>{bookName}</td>
      <td>{bookAuthor}</td>
      <td>{bookSummary}</td>
      <td>{bookYear}</td>
      <td>{bookPublisher}</td>
      <td className="text-center">
        <Link to={`/edit/${bookId}`} className="btn btn-secondary btn-sm">
          <PencilSquare />
          {' '}
          {/* <span>Edit</span> */}
        </Link>
        {` `}
        <Button variant="danger" size="sm" onClick={() => confirmDelete(bookId)}>
          <TrashFill />
          {' '}
          {/* <span>Delete</span> */}
        </Button>
      </td>
    </tr>
  );
}
