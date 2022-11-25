import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as BooksApi from "../BooksApi";
import PropTypes, { object } from "prop-types";

import Shelf from "./Shelf";

const Search = ({ changeBookData, changeShowSearchPage, allBooks }) => {
  const [query, setQuery] = useState("");
  const [queriedBooks, setQueriedBooks] = useState([]);
  

  function handleChangeShowSearchPage() {
    changeShowSearchPage();
  }

  const handleSearchChange = (e) => {
    //console.log("calling handleSearch: ", e.target.value);
    setQuery(e.target.value);
  };

  useEffect(() => {
    let active = true;
    if (query.length > 0) {
      BooksApi.search(query, 20).then((books) => {
        //console.log(books);
        if (books.error && books.items.length === 0) {
          return setQueriedBooks([]);
        }

        books.forEach((book) => {
          const homeBook = allBooks.find((homeBook) => book.id === homeBook.id);
          homeBook && (book.shelf = homeBook.shelf);
        });

        if (active) {
          setQueriedBooks(books);
        }
      });
    } else {
      //console.log("empty query");
      setQueriedBooks([]);
    }
    return () => {
      active = false;
    };
  }, [query, allBooks]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search" onClick={handleChangeShowSearchPage}>
            Close
          </button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleSearchChange}
            value={query}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          <Shelf
            books={queriedBooks}
            returnedFromSearch={true}
            changeBookData={changeBookData}
          ></Shelf>
        </ol>
      </div>
    </div>
  );
};

export default Search;

Search.propTypes = {
  allBooks: PropTypes.arrayOf(object),
  changeBookData: PropTypes.func,
  changeShowSearchPage: PropTypes.func,
};
