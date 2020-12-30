import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import { getBooksByTerm } from "./api/GoogleBooksAPI";
import BookList from "./components/BooksList";
import Pagination from "./components/Pagination";

const App = () => {
  const [SearchTerm, setSearchTerm] = useState("");
  const [Books, setBooks] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [TotalPages, setTotalPages] = useState([]);
  const [Sort, setSort] = useState("");
  let sortedBooks = [];

  function handleChange(event) {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getBooksByTerm(SearchTerm, setBooks, 0, setTotalPages);
  };

  const nextPage = async (page_number) => {
    setCurrentPage(page_number);
    await getBooksByTerm(
      SearchTerm,
      setBooks,
      (page_number - 1) * 10,
      setTotalPages
    );
  };

  const handleSort = (event) => {
    console.log(event.target.value);
    setSort(event.target.value);
    if (event.target.value === "Newest") {
      sortedBooks = Books.sort((a, b) => {
        return (
          parseInt(b.volumeInfo.publishedDate.substring(0, 4)) -
          parseInt(a.volumeInfo.publishedDate.substring(0, 4))
        );
      });
    } else if (event.target.value === "Oldest") {
      sortedBooks = Books.sort((a, b) => {
        return (
          parseInt(a.volumeInfo.publishedDate.substring(0, 4)) -
          parseInt(b.volumeInfo.publishedDate.substring(0, 4))
        );
      });
    } else if (event.target.value === "Ascending") {
      sortedBooks = Books.sort((a, b) => {
        return a.volumeInfo.title.localeCompare(b.volumeInfo.title);
      });
    } else if (event.target.value === "Descending") {
      sortedBooks = Books.sort((a, b) => {
        return a.volumeInfo.title.localeCompare(b.volumeInfo.title);
      });
      sortedBooks = sortedBooks.reverse();
    }
    setBooks(sortedBooks);
  };
  return (
    <div>
      <SearchBar
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleSort={handleSort}
        sort={Sort}
      />
      <BookList books={Books} />
      {TotalPages > 1 ? (
        <Pagination
          nextPage={nextPage}
          currentPage={CurrentPage}
          totalPages={TotalPages}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
