import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserWebService from "../../service/UserWebService";
import WebAPI from "../../service/WebAPI";
import { myaction } from "../../redux/Slice";
import { useDispatch } from "react-redux";

export default function Login() {
  var email = useRef();
  var password = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  var loginUser = async (ev) => {
    ev.preventDefault();

    var em = email.current.value;
    var pass = password.current.value;

    var obj = { email: em, password: pass };
    console.log("Obj is :" + JSON.stringify(obj));

    var result = await UserWebService.postAPICall(WebAPI.loginUser, obj);
    console.log("Result is :" + result);
    console.log("Result String is : " + JSON.stringify(result));
    if (result.data.status) {
      var uDetails = result.data.userDetails;
      console.log("User details here : " + uDetails.role);

      var obj = { token: result.data.token,role:uDetails.role};
      
      dispatch(myaction(obj));

      if (useLocation.state && useLocation.state.from) {
        navigate(useLocation.state.from);
      } else {
        uDetails.role == "admin" ? navigate("/adminHome") : navigate("/userHome");
      }

      // uDetails.role == "admin" ? navigate("/adminHome") : navigate("/userHome");
    } else {
      navigate("/error");
    }
  };

  return (
    <div className="container">
      <div className="jumbotron text-center">
        <h1>Login Here !</h1>
      </div>
      <div className="container">
        <form onSubmit={loginUser}>
          <div className="form-group">
            <label>Enter Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              ref={email}
            />
          </div>

          <div className="form-group">
            <label>Enter Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              ref={password}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Login"
              className="form-control btn btn-success"
            />
          </div>
        </form>
        <span>
          If You have Not Register <Link to="/register">Click Here !</Link>
        </span>
      </div>
    </div>
  );
}
