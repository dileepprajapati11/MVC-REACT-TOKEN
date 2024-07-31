import { useRef } from "react";
import UserWebService from "../../service/UserWebService";
import WebAPI from "../../service/WebAPI";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const mobile = useRef();
  const gender = useRef();
  const address = useRef();
  const city = useRef();

  var saveuserData = async (ev) => {
    ev.preventDefault();
    var nm = name.current.value;
    var em = email.current.value;
    var pass = password.current.value;
    var contact = mobile.current.value;
    var gen = gender.current.value;
    var usercity = city.current.value;
    var add = address.current.value;

    var obj = {
      name: nm,
      email: em,
      password: pass,
      mobile: contact,
      address: add,
      city: usercity,
      gender: gen,
    };
    console.log("Object is : " + JSON.stringify(obj));

    var result = await UserWebService.postAPICall(WebAPI.saveUser, obj);
    console.log("Result is :" + result);
    console.log("String result is :" + JSON.stringify(result));
    if (result.data.status) {
      navigate("/login");
    } else {
      navigate("/error");
    }
  };

  return (
    <div className="container">
      <div className="jumbotron text-center">
        <h1>Register Here !</h1>
      </div>

      <div className="container">
        <form onSubmit={saveuserData}>
          <div className="form-group">
            <label>Enter Name</label>
            <input
              type="text"
              ref={name}
              className="form-control"
              placeholder="Enter Name"
            />
          </div>

          <div className="form-group">
            <label>Enter Email</label>
            <input
              type="text"
              ref={email}
              className="form-control"
              placeholder="Enter Email"
            />
          </div>

          <div className="form-group">
            <label>Enter Password</label>
            <input
              type="password"
              ref={password}
              className="form-control"
              placeholder="Enter Password"
            />
          </div>

          <div className="form-group">
            <label>Enter Contact</label>
            <input
              type="number"
              ref={mobile}
              className="form-control"
              placeholder="Enter Contact"
            />
          </div>

          <div className="form-group">
            <label>Enter Address</label>
            <textarea
              rows="7"
              cols="20"
              ref={address}
              className="form-control"
              placeholder="Enter Address"
            />
          </div>

          <div className="form-group">
            <label>Enter City</label>
            <input
              type="text"
              ref={city}
              className="form-control"
              placeholder="Enter City"
            />
          </div>

          <div className="form-group">
            <label>Select Gender</label>
            <select className="form-control" ref={gender}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Register"
              className="form-control btn btn-success"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
