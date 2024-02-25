import { NavLink } from "react-router-dom";

const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        className={({ isActive }) => (isActive ? "link active" : "link")}
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "link active" : "link")}
        to={"/about"}
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "link active" : "link")}
        to={"/products"}
      >
        Products
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "link active" : "link")}
        to={"/errorTest"}
      >
        ErrorTest
      </NavLink>
    </nav>
  );
};
export default StyledNavbar;
