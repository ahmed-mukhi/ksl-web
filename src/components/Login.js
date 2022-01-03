import "../bootsrap/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { LoginHeadBranch } from "./../firebase";
import { useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const login = () => {
    LoginHeadBranch(email, password);
  };
  return (
    // <Router>
    <div className="form-group p-4 border border-4 position-absolute top-50 start-50 translate-middle container mt-5 ml-5">
      <div className="row">
        <div className="col">
          <img src={require("../lks.png")} height="280px" width="300px" />
        </div>
        <div className="col">
          <h2 className="h2 text-secondary mb-3">Login as Head Branch</h2>
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control mb-3"
            onChange={(ev) => {
              setEmail(ev.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3"
            onChange={(ev) => {
              setPass(ev.target.value);
            }}
          />
          <Link to="/dashboard">
            <button onClick={login} className="btn btn-info btn-block">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
    // </Router>
  );
}
