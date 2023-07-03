import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/books" element={<BookList />} /> */}
        {/* <Route path="/books/:id" element={<Book />} /> */}
        {/* ^ Note React Router v6 can figure out the difference between route specificity */}
        {/* <Route path="/books/new" element={<NewBook />} /> */}
        {/* Above we have three routes related to Books, so we can nest them instead*/}
        <Route path="/books">
          {/* we use index instead of path="" to say this route matches the exact route of it's parent */}
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
