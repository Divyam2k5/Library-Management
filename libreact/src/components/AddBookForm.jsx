import { useState } from "react";
import axios from "axios";

function AddBookForm({ libraryId, onBookAdded }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/books", {
      title,
      author,
      library: { id: libraryId }
    })
      .then(() => {
        setTitle("");
        setAuthor("");
        onBookAdded();
      })
      .catch((error) => console.error("Error adding book:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>
      <input 
        type="text" 
        placeholder="Book Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input 
        type="text" 
        placeholder="Author" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;
