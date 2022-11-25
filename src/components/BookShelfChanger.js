const BookShelfChanger = ({ bookData, changeBookData, returnedFromSearch }) => {
  const handleChange = (event) => {

    changeBookData(bookData, event.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select defaultValue={bookData.shelf} onChange={handleChange}>
        <option disabled>Move to...</option>
        {!returnedFromSearch && <option value="none">None</option>}
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
