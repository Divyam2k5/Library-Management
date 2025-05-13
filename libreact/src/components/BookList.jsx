import axios from "axios";

function BookList({ books, onBookDeleted }) {
  const handleDelete = (bookId) => {
    axios.delete(`http://localhost:8080/books/${bookId}`)
      .then(() => onBookDeleted())
      .catch((error) => console.error("Error deleting book:", error));
  };

  return (
    <div>
      <h2>Available Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
