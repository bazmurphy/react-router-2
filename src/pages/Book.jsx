import { useOutletContext, useParams } from "react-router-dom";

export default function Book() {
  const { id } = useParams();
  console.log("useParams id:", id);

  // this is coming from the <Outlet context={} />
  const obj = useOutletContext();
  console.log(obj);

  return (
    <div>
      <h1>Book {id}</h1>
      <p>{obj.hello}</p>
    </div>
  );
}
