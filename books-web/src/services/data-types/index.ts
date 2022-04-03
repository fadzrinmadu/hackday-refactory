export interface BookTypes {
  id: string;
  isbn: string;
  name: string;
  author: string;
  summary: string;
  year: string;
  publisher: string;
  createdAt: string;
  updatedAt: string;
}

export interface AddBookTypes {
  isbn: string;
  name: string;
  author: string;
  summary: string;
  year: string;
  publisher: string;
}
