import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

const API = axios.create({
  baseURL: URL,
  timeout: 10000,
  headers: {
    'content-type': 'application/json',
    Authorization: `Token ${localStorage.token}`
  }
});

const auth = {
  login: (data) => API.post("auth-token/", data),
};

const books = {
  all: () => API.get("books"),
  get: (id) => API.get(`books/${id}`),
  add: (data) => API.post("books", data),
  put: (id, data) => API.put(`books/${id}`, data),
  delMul: (idList, token) => API.post(
    "books/delete",
    {books: idList},
  )
};

const photos = {
  all: () => API.get("photos"),
  add: (data) => API.post("photos", data)
}

const endpoints = { auth, books, photos };

export default {
  ...endpoints
};
