import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="/primitive">Primitives</Link> |{" "}
      <Link to="/non-primitive">Non-Primitive</Link> |{" "}
    </>
  );
}

export default NavBar;
