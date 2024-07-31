import { Link } from "react-router-dom";

export default function VisitorMenu() {
  return<div className="container">
  <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button className="navbar-toggle" data-toggle="collapse" data-target="#mymenu">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <Link to="#" className="navbar-brand">App Name</Link>
    </div>
    <div className="collapse navbar-collapse" id="mymenu">
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/login">Login <span className="glyphicon glyphicon-log-in"></span></Link></li>
      <li><Link to="/register">Register <span className="glyphicon glyphicon-user"></span></Link></li>
    </ul>
    </div>
  </div>
</nav>
</div>
}