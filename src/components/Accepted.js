import { collection, onSnapshot, query, where } from "@firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../bootsrap/css/bootstrap.min.css";
import _DB from "../firebase";

export function Accept() {
  const [arr, setArr] = useState([]);
  // let arr;
  const Accepted = () => {
    try {
      const q = query(
        collection(_DB, "registered_users"),
        where("accepted", "==", true)
      );
      onSnapshot(q, (snap) => {
        snap.docs.forEach((item) => {
          // setArr((prev) => [...prev, item.data()]);
          const obj = item.data();
          setArr((prev) => [...prev, obj]);
        });
      });
      // console.log(arr);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Accepted();
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
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S no.</th>
              <th scope="col">Name</th>
              <th scope="col">Father Name</th>
              <th scope="col">CNIC</th>
              <th scope="col">Date of birth</th>
              <th scope="col">Total Income</th>
              <th scope="col">Total Members</th>
            </tr>
            {arr.map((doc, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">{doc.name}</th>
                  <th scope="row">{doc.father_name}</th>
                  <th scope="row">{doc.CNIC}</th>
                  <th scope="row">{doc.date_of_birth}</th>
                  <th scope="row">{doc.total_income}</th>
                  <th scope="row">{doc.total_members}</th>
                </tr>
              );
            })}
          </thead>
        </table>
      </div>
    </div>
  );
}
