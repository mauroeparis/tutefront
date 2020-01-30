import axios from "axios";

const URL = "http://127.0.0.1:5000";

const API = axios.create({
  baseURL: URL,
  timeout: 10000,
  headers: {
    'content-type': 'application/json',
    Authorization: {
      toString() {
        return `Bearer ${localStorage.token}`;
      }
    }
  }
});

const auth = {
  login: (data) => API.post("/auth-token", data),
};

const books = {
  all: () => API.get("api/books"),
  get: (id) => API.get(`api/books/${id}`),
  add: (data) => API.post("api/books", data)
};

const photos = {
  all: () => API.get("api/photos"),
  add: (data) => API.post("api/photos", data)
}

// Decorator for temporarily memoizing apicalls
function memoize(apicall) {
  function memcall(...args) {
    const key = JSON.stringify(args);
    const now = Date.now();
    if (!memcall.cache) memcall.cache = {};
    if (key in memcall.cache)
      return memcall.cache[key].value;
    const res = apicall(...args);
    memcall.cache[key] = { time: now, value: res };
    return res;
  }
  return memcall;
}

const endpoints = { auth, books, photos };

// Memoize endpoints
for (const [i, group] of Object.entries(endpoints))
  for (const [j, apicall] of Object.entries(group))
    endpoints[i][j] = memoize(apicall);

export default {
  ...endpoints
};
