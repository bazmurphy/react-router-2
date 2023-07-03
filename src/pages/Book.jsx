import { useParams } from "react-router-dom";

export default function Book() {
  const { id } = useParams();
  console.log("useParams id:", id);
  return (
    <div>
      <h1>Book {id}</h1>
    </div>
  );
}
