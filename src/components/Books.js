import Book from "./Book";
import PropTypes, { object } from "prop-types";
const Books = ({ booksData, changeBookData, returnedFromSearch }) => {
  const AllBooks = booksData.map((bookData) => {
    return (
      <Book
        bookData={bookData}
        key={bookData.id}
        changeBookData={changeBookData}
        returnedFromSearch={returnedFromSearch}
      ></Book>
    );
  });
  return AllBooks;
};
export default Books;
Books.propTypes = {
  booksData: PropTypes.arrayOf(object),
  changeBookData: PropTypes.func,
  returnedFromSearch: PropTypes.bool,
};
