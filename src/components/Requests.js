import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../bootsrap/css/bootstrap.min.css";
import { AcceptReq, RejectReq, FetchAll } from "../firebase";

export function Requests() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]);
    FetchAll(setData);
  }, []);

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

      <div className="container mt-5 p-5">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">S no.</th>
              <th scope="col">Name</th>
              <th scope="col">Father Name</th>
              <th scope="col">CNIC</th>
              <th scope="col">Date of birth</th>
              <th scope="col">Total Income</th>
              <th scope="col">Total Members</th>
              <th scope="col">Action</th>
            </tr>
            {data.map((doc, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">
                    {doc._document.data.value.mapValue.fields.name.stringValue}
                  </th>
                  <th scope="row">
                    {
                      doc._document.data.value.mapValue.fields.father_name
                        .stringValue
                    }
                  </th>
                  <th scope="row">
                    {doc._document.data.value.mapValue.fields.CNIC.stringValue}
                  </th>
                  <th scope="row">
                    {
                      doc._document.data.value.mapValue.fields.date_of_birth
                        .stringValue
                    }
                  </th>
                  <th scope="row">
                    {
                      doc._document.data.value.mapValue.fields.total_income
                        .stringValue
                    }
                  </th>
                  <th scope="row">
                    {
                      doc._document.data.value.mapValue.fields.total_members
                        .stringValue
                    }
                  </th>
                  <th scope="row flex">
                    <button
                      className="btn btn-primary mr-2"
                      onClick={() => {
                        const key = doc._key.path.segments[6];
                        AcceptReq(key);
                      }}
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        const key = doc._key.path.segments[6];
                        RejectReq(key);
                      }}
                    >
                      Reject
                    </button>
                  </th>
                </tr>
              );
            })}
          </thead>
        </table>
      </div>
    </div>
  );
}
