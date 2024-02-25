import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to={"/"}>Home Page</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/errorTest"}>ErrorTest</Link>
    </nav>
  )
}
export default Navbar