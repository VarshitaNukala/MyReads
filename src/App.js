import { useState, useEffect } from "react";
import "./App.css";
import * as BooksApi from "./BooksApi";
import BooksList from "./components/BooksList";
import { Route, Routes, Link } from "react-router-dom";
import Search from "./components/Search";

function App() {
  const [books, setBooks] = useState([]);
  const [showSearchPage, setShowSearchpage] = useState(false);

  useEffect(() => {
    BooksApi.getAll().then(setBooks);
  }, []);

  const changeShowSearchPage = () => {
    setShowSearchpage(!showSearchPage);
  };

  const changeBookData = async (bookData, shelf) => {
    // This creates a race-condition, meaning the setBooks can be called even before
    // data is updated

    // BooksApi.update(bookData, shelf);
    // BooksApi.getAll().then(setBooks);

    await BooksApi.update(bookData, shelf);
    BooksApi.getAll().then(setBooks);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <BooksList
                books={books}
                changeBookData={changeBookData}
              ></BooksList>
              <div className="open-search">
                <Link to="/search">
                  <button onClick={() => setShowSearchpage(!showSearchPage)}>
                    Add a book
                  </button>
                </Link>
              </div>
            </div>
          }
        ></Route>
        <Route
          path="/search"
          element={
            <Search
              changeShowSearchPage={changeShowSearchPage}
              changeBookData={changeBookData}
              allBooks={books}
            ></Search>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
