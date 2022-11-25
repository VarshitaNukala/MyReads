import PropTypes from "prop-types";
import { object } from "prop-types";
import Shelf from "./Shelf";
const BooksList = ({ books, changeBookData }) => {
  const read = books.filter((book) => book.shelf === "read");
  const currentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = books.filter((book) => book.shelf === "wantToRead");

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Shelf
          books={currentlyReading}
          shelfName="Currently Reading"
          changeBookData={changeBookData}
        ></Shelf>
        <Shelf
          books={read}
          shelfName="Read"
          changeBookData={changeBookData}
        ></Shelf>
        <Shelf
          books={wantToRead}
          shelfName="Want To Read"
          changeBookData={changeBookData}
        ></Shelf>
      </div>
    </div>
  );
};

export default BooksList;

BooksList.propTypes = {
  books: PropTypes.arrayOf(object),
  changeBookData: PropTypes.func,
};
