import "./App.css";
import { Link, Route, Routes, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
// import BookList from "./pages/BookList";
// import Book from "./pages/Book";
// import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
// import BookLayout from "./BookLayout";
import BookRoutes from "./BookRoutes";

function App() {
  // Custom Hook using JavaScript

  // this is an example of using the useRoutes hook, you give it an arrayof objects
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <NavLayout />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Home />,
  //       },
  //       {
  //         path: "about",
  //         element: <About />,
  //       },
  //       {
  //         index: "contact",
  //         element: <Contact />,
  //       },
  //     ],
  //   },
  // ]);
  // and then below you just render {element}

  return (
    <>
      {/* whenever we visit books it will also render this element, as well as what is below */}
      {/* <Routes> */}
      {/* <Route path="/books" element={<h1>Extra Content</h1>} /> */}
      {/* </Routes> */}
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
        {/* <Route path="/books" element={<BookLayout />}> */}
        {/* we use index instead of path="" to say this route matches the exact route of it's parent */}
        {/* and we can pass it an element in this case a layout */}
        {/* <Route index element={<BookList />} /> */}
        {/* <Route path=":id" element={<Book />} /> */}
        {/* <Route path="new" element={<NewBook />} /> */}
        {/* </Route> */}
        {/* If you want to wrap a bunch of components that aren't related by URL inside of the same layout */}
        {/* In that case you can leave the path= OFF and only pass an element= */}
        {/* it will pretend the Route has no path but it will wrap all the children Routes inside that element*/}
        {/* <Route element={<AnotherLayout />}> */}
        {/* <Route path="/something" element={<Something />} /> */}
        {/* <Route path="/else" element={<Else />} /> */}
        {/* </Route> */}
        {/* we can instead bring in the BookRoutes component */}
        {/* if you have a Route that is rendering a bunch of other routes YOU HAVE TO MAKE SURE IT HAS A /* AT THE END OF THE PATH to match ANYTHING that comes after */}
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
