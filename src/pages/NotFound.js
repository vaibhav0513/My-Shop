import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>The requested resourse could not found.</p>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export default NotFound;
