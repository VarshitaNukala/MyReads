import Book from "./Book";
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
