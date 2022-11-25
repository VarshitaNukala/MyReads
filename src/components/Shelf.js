import Books from "./Books";

const Shelf = ({
  books,
  shelfName,
  changeBookData,
  returnedFromSearch,
  
}) => {
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
