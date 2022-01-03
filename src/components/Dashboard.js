import { Link } from "react-router-dom";
import "../bootsrap/css/bootstrap.min.css";
import { LogOut } from "../firebase";
import Carousel from "react-bootstrap/Carousel";
// import { useEffect } from "react";
// import { useNavigate } from "react-router";

export function Dashboard() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link to="/dashboard">
          <a className="navbar-brand text-white" href="#">
            <img src={require("../lks.png")} height="60px" width="60px" />
          </a>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <Link to="/requests">
              <li className="nav-item active">
                <a
                  className="nav-link text-white text-decoration-none"
                  href="#"
                >
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
              onClick={LogOut}
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Logout
            </button>
          </Link>
        </div>
      </nav>

      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            height="700px"
            className="d-block w-100"
            src={require("../food6.jpg")}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>Distinct Locations</h3>
            <p>Being provided to thousands of Pakistanis</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            height="700px"
            className="d-block w-100"
            src={require("../food7.jpg")}
            alt="Second slide"
          />
          {/* <Carousel.Caption>
            <h3>Fresh Food</h3>
            <p></p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="700px"
            className="d-block w-100"
            src={require("../food8.png")}
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
