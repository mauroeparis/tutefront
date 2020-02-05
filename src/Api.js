import axios from "axios";

const URL = "http://127.0.0.1:5000";

const API = axios.create({
  baseURL: URL,
  timeout: 10000,
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${localStorage.token}`
  }
});

const auth = {
  login: (data) => API.post("/auth-token", data),
};

const books = {
  all: () => API.get("api/books"),
  get: (id) => API.get(`api/books/${id}`),
  add: (data) => API.post("api/books", data),
  put: (id, data) => API.put(`api/books/put/${id}`, data),
  delMul: (idList, token) => API.post(
    "api/books/delete",
    {books: idList},
  )
};

const photos = {
  all: () => API.get("api/photos"),
  add: (data) => API.post("api/photos", data)
}

const endpoints = { auth, books, photos };

export default {
  ...endpoints
};
