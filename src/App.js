import { Route, Routes } from "react-router-dom";
import VisitorMenu from "./components/Menu/VisitorMenu";
// import Header from "./components/Visitor/Header";
import Home from "./components/Visitor/Home";
import About from "./components/Visitor/About";
import Contact from "./components/Visitor/Contact";
import Login from "./components/Visitor/Login";
import Register from "./components/Visitor/Register";
import Error from "./components/Visitor/Error";
import UserHome from "./components/User/UserHome";
import AdminHome from "./components/Admin/AdminHome";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import AddCategory from "./components/Admin/AddCategory";
import AddSubCategory from "./components/Admin/AddSubCategory";
import Footer from "./components/Visitor/Footer";
import AdminMenu from "./components/Menu/AdminMenu";
import AddProduct from "./components/Admin/AddProduct";
import AddReview from "./components/Admin/AddReview";
import UserMenu from "./components/Menu/UserMenu";

export default function App() {
  const data = useSelector((state) => state.user.value);
  useEffect(() => {
    console.log("Token is : " + data.token);
    console.log("Role is : " + data.role);
  }, []);

  return (
    <div className="container">
      {data.token != undefined ? (data.role === "admin" ? (<AdminMenu />) : ( <UserMenu />)) : (<VisitorMenu />)}
      {/* {(data.token != undefined) ? (data.token == "") ? <UserMenu/> : <AdminMenu /> : <VisitorMenu />} */}
      {/* {data.token != undefined ? <AdminMenu /> : <VisitorMenu />} */}
      {/* <VisitorMenu /> */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path="/adminHome" element={<AdminHome />}></Route>
        <Route path="/userHome" element={<UserHome />}></Route>
        <Route path="/addCategory" element={<AddCategory />}>
        </Route>
        <Route path="/addSubCategory" element={<AddSubCategory />}>
        </Route>
        <Route path="/addProduct" element={<AddProduct />}></Route>
        <Route path="/addReview" element={<AddReview />}></Route>

        {/* <Footer /> */}
      </Routes>
      <Footer />
    </div>
  );
}
