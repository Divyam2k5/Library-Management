import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LibrarySelector from "./pages/LibrarySelector.jsx";
import LibraryPage from "./pages/LibraryPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/libraries" element={<LibrarySelector />} />
        <Route path="/library/:libraryId" element={<LibraryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
