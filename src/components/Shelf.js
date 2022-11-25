import Books from "./Books";
import PropTypes, { object } from "prop-types";

const Shelf = ({ books, shelfName, changeBookData, returnedFromSearch }) => {
  return (
    <div className="bookshelf">
      {!returnedFromSearch && <h2 className="bookshelf-title">{shelfName}</h2>}
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Books
            booksData={books}
            changeBookData={changeBookData}
            returnedFromSearch={returnedFromSearch}
          ></Books>
        </ol>
      </div>
    </div>
  );
};

export default Shelf;

Shelf.propTypes = {
  books: PropTypes.arrayOf(object),
  shelfName: PropTypes.string,
  changeBookData: PropTypes.func,
  returnedFromSearch: PropTypes.bool,
};
