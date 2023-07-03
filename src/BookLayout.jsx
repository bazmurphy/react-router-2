import { Link, Outlet } from "react-router-dom";

export default function BookLayout() {
  return (
    <>
      <ul>
        <li>
          <Link to="/books/new">New Book</Link>
        </li>
        <br />
        <li>
          <Link to="/books/1">Book 1</Link>
        </li>
        <li>
          <Link to="/books/2">Book 2</Link>
        </li>
      </ul>
      {/* it will then bring in whatever element in the nested Route CHILD is */}
      {/* you can pass it a single variable called context= */}
      {/* this context works like a normal React context, you define some values that you pass down to any component inside */}
      <Outlet context={{ hello: "World!" }} />
    </>
  );
}
