import { Link } from "react-router-dom";
import './style.css';

const Navbar = ({paginate}) => {
  return (
    <nav className="navbar">
      <h1>Crypto List</h1>
      <div className="links">
        <Link to="/" onClick={() => paginate(1)}>Home</Link>
        <Link to="/trendings" className="trendings">Trendings</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;