import { useState } from "react";
import "../bootsrap/css/bootstrap.min.css";
import { BranchManagerAccount } from "../firebase";
import { Link } from "react-router-dom";

export function Branch() {
  const [managerName, setMname] = useState("");
  const [branchManagerName, setBMname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const hit = () => {
    BranchManagerAccount(email, pass, managerName, branchManagerName);
    setMname("");
    setBMname("");
    setEmail("");
    setPass("");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link to="/dashboard">
          <a className="navbar-brand text-white " href="#">
          <img src={require("../lks.png")} height="60px" width="60px" />
          </a>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <Link to="/requests">
              <li className="nav-item active">
                <a className="nav-link text-white" href="#">
                  Requests Tab
                </a>
              </li>
            </Link>
            <Link to="/approved">
              <li className="nav-item">
                <a className="nav-link text-white " href="#">
                  Approved Tab
                </a>
              </li>
            </Link>
            <Link to="/reject">
              <li className="nav-item">
                <a className="nav-link text-white " href="#">
                  Rejected Tab
                </a>
              </li>
            </Link>
            <Link to="/branch">
              <li className="nav-item">
                <a className="nav-link text-white " href="#">
                  Branch Manager Tab
                </a>
              </li>
            </Link>
          </ul>
          <Link to="/">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Logout
            </button>
          </Link>
        </div>
      </nav>

      <div className="form-group container w-50 p-3 mt-5">
        <h2 className="h2 fs-5 mb-5">Welcome Manager</h2>
        <label>Manager Name</label>
        <input
          className="form-control mb-2"
          type="text"
          onChange={(ev) => {
            setMname(ev.target.value);
          }}
        />
        <label>Manager Branch Name</label>
        <input
          className="form-control mb-2"
          type="text"
          onChange={(ev) => {
            setBMname(ev.target.value);
          }}
        />
        <label>Email</label>
        <input
          className="form-control mb-2"
          type="email"
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
        />
        <label>Password</label>
        <input
          className="form-control mb-2"
          type="password"
          onChange={(ev) => {
            setPass(ev.target.value);
          }}
        />
        <button className="btn btn-warning mt-3" onClick={hit}>
          Create Account
        </button>
      </div>
    </div>
  );
}
