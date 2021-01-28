import React from "react";
import video from "../media/vedio.mp4";

export const Home = () => {
  return (
    <div className="myNav container-fluid">
      <video autoPlay loop muted className="video">
        <source src={video} type="video/mp4" ></source>
      </video>

      <nav className="navbar navbar-expand-sm ">
        <button
          className="navbar-toggler ml-auto"
          data-bs-toggle="collapse"
          data-bs-target="#burger"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" collapse navbar-collapse" id="burger">
          <ul className="navbar-nav m-auto ">
            <li className="nav-item">
              <a href="#" className="nav-link">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                PORTFOLIO
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                CONTACT ME
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid name">
        <div className="row text-center">
          <div className="col-12">
            <h1>Alaa Khalila</h1>
            <h3>Your Next Web Developer</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
