import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function LibrarySelector() {
  const [libraries, setLibraries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/libraries")
      .then((response) => setLibraries(response.data))
      .catch((error) => console.error("Error fetching libraries:", error));
  }, []);

  return (
    <div className="container">
      <h1>Select a Library</h1>
      <ul>
        {libraries.map((library) => (
          <li key={library.id}>
            <button onClick={() => navigate(`/library/${library.id}`)}>
              {library.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LibrarySelector;
