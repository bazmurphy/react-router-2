import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import BookLayout from "./BookLayout";

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
        <Route path="/books" element={<BookLayout />}>
          {/* we use index instead of path="" to say this route matches the exact route of it's parent */}
          {/* and we can pass it an element in this case a layout */}
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        {/* If you want to wrap a bunch of components that aren't related by URL inside of the same layout */}
        {/* In that case you can leave the path= OFF and only pass an element= */}
        {/* it will pretend the Route has no path but it will wrap all the children Routes inside that element*/}
        {/* <Route element={<AnotherLayout />}>
          <Route path="/something" element={<Something />} />
          <Route path="/else" element={<Else />} />
        </Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
