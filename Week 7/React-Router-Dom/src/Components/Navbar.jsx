//Importing Link component from the react router dom to allow the user to easily navigate the website
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <Link to="/">Homepage</Link>
      <br></br>
      <Link to="/about">About</Link>
      <br></br>
      <Link to="/iceCreams">Ice Cream Menu</Link>
    </>
  );
}
//!Make sure the path in the 'to' property matches the path to which you are trying to connect
//!<a href="">Link</a>
//This is the same as the above used in HTML
