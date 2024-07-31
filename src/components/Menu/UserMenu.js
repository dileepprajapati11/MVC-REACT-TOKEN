
import { Link } from "react-router-dom";

function UserMenu() {
 
  return (
    <div className="container">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#mymenu"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="#" className="navbar-brand">
              Dileep-Shop
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="mymenu">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">All Products</Link>
              </li>
              <li>
                <Link to="/"><i class="fa-solid fa-cart-shopping"></i> &nbsp; Add Cart </Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default UserMenu;
