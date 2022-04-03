import { AddBookTypes } from "./data-types";

const ROOT_API = process.env.REACT_APP_ROOT_API;
const API_VERSION = 'api/v1';

export const getBooks = async () => {
  const url = `${ROOT_API}/${API_VERSION}/books`;

  const response = await fetch(url, {
    method: 'GET',
  });

  return response.json();
};

export const getBookById = async (id: string) => {
  const url = `${ROOT_API}/${API_VERSION}/books/${id}`;

  const response = await fetch(url, {
    method: 'GET',
  });

  return response.json();
};

export const addBook = async (payload: AddBookTypes) => {
  const url = `${ROOT_API}/${API_VERSION}/books`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return response.json();
};

export const editBookById = async (id: string, payload: AddBookTypes) => {
  const url = `${ROOT_API}/${API_VERSION}/books/${id}`;

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return response.json();
};

export const deleteBookById = async (id: string) => {
  const url = `${ROOT_API}/${API_VERSION}/books/${id}`;

  const response = await fetch(url, {
    method: 'DELETE',
  });

  return response.json();
};
