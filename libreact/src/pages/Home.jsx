import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Library Management System</h1>
      <button onClick={() => navigate("/libraries")}>Select a Library</button>
    </div>
  );
};

export default Home;
