import BookShelfChanger from "./BookShelfChanger";
const Book = ({ bookData, changeBookData,returnedFromSearch }) => {
  return (
    <li>
      <div className="book">
        {bookData.imageLinks && (
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 188,
                backgroundImage: `url(${bookData.imageLinks.thumbnail})`,
              }}
            ></div>

            <BookShelfChanger
              bookData={bookData}
              changeBookData={changeBookData}
              returnedFromSearch={returnedFromSearch}
            ></BookShelfChanger>
          </div>
        )}
        <div className="book-title">{bookData.title}</div>
        <div className="book-authors">{bookData.authors}</div>
      </div>
    </li>
  );
};

export default Book;
