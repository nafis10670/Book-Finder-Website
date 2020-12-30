import axios from "axios";

const api_key = "AIzaSyDLq-0eY8lOSR-QrdPrvPlpwGdZgJ5zAvs";

const url = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
});

const getBooksByTerm = (SearchTerm, setBooks, startIndex, setTotalPages) => {
  console.log("Start Index " + startIndex);
  url
    .get("", {
      params: {
        q: SearchTerm,
        key: api_key,
        startIndex: startIndex,
        maxResults: 12,
      },
    })
    .then((response) => {
      console.log(response.data);
      setBooks(response.data.items);
      setTotalPages(Math.ceil(response.data.totalItems / 20));
    });
};

const getBookDetails = (book_id, setCurrentBook) => {
  console.log("API " + book_id);
  url.get("" + book_id).then((response) => {
    //console.log("book", response.data);
    setCurrentBook(response.data);
  });
};

export { getBooksByTerm, getBookDetails };
