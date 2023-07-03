import { Link } from "react-router-dom";

export default function BookList() {
  return (
    <div>
      <h1>BookList</h1>
      <ul>
        <li>
          <Link to="/books/1">Book 1</Link>
        </li>
        <li>
          <Link to="/books/1">Book 2</Link>
        </li>
      </ul>
    </div>
  );
}
