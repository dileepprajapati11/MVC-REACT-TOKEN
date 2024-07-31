import { Link } from "react-router-dom";

function AdminMenu() {
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
              App Name
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="mymenu">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/addCategory">Category</Link>
              </li>
              <li>
                <Link to="/addSubCategory">SubCategory</Link>
              </li>
              <li>
                <Link to="/addProduct">Product</Link>
              </li>
              <li>
                <Link to="/addReview">Review</Link>
              </li>
              <li>
                <Link to="">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default AdminMenu;
