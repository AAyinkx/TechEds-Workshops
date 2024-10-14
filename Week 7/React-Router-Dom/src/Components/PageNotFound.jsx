import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <h2>Not Found</h2>
      <Link to="/">Go Home</Link>
    </>
  );
}
