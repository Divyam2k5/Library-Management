import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AddBookForm from "../components/AddBookForm";
import BookList from "../components/BookList";

function LibraryPage() {
  const { libraryId } = useParams();
  const [library, setLibrary] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/libraries`)
      .then((response) => {
        const lib = response.data.find((l) => l.id.toString() === libraryId);
        setLibrary(lib);
      })
      .catch((error) => console.error("Error fetching library:", error));

    axios.get(`http://localhost:8080/books/${libraryId}`)
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching books:", error));
  }, [libraryId]);

  const refreshBooks = () => {
    axios.get(`http://localhost:8080/books/${libraryId}`)
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching books:", error));
  };

  return (
    <div className="container">
      {library && <h1>{library.name}</h1>}
      <AddBookForm libraryId={libraryId} onBookAdded={refreshBooks} />
      <BookList books={books} onBookDeleted={refreshBooks} />
    </div>
  );
}

export default LibraryPage;
