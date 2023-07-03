import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import BookLayout from "./BookLayout";

import { Route, Routes } from "react-router-dom";

export default function BookRoutes() {
  return (
    <>
      <Routes>
        {/* we nest them inside the BookLayout to share the context */}
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </>
  );
}
